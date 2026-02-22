-- ════════════════════════════════════════════════════════════════
-- Profiles table: auto-creation trigger + RLS policies
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ════════════════════════════════════════════════════════════════

-- ─── 1. Ensure profiles table exists ────────────────────────────────────────
-- (Skip if you already have a profiles table)
CREATE TABLE IF NOT EXISTS public.profiles (
  id   uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL DEFAULT '',
  role text NOT NULL DEFAULT 'student',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- ─── 2. Enable RLS ──────────────────────────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- ─── 3. Profile auto-creation trigger ───────────────────────────────────────
-- Creates a profiles row automatically when a new user signs up.
-- Role defaults to 'student' — promote to 'admin' manually in the dashboard.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'name', ''),
    'student'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if present (safe to re-run)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ─── 4. RLS Policies for profiles ───────────────────────────────────────────

-- 4a. Authenticated users can SELECT their own profile row
-- (Required for login flow to check role — without this, profile queries
--  return empty results and the admin check fails silently)
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- 4b. Authenticated users can UPDATE their own profile (name only, not role)
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 4c. Admins have full access to all profiles
DROP POLICY IF EXISTS "Admins have full access to profiles" ON public.profiles;
CREATE POLICY "Admins have full access to profiles"
  ON public.profiles
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND p.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND p.role = 'admin'
    )
  );

-- ─── 5. Backfill: create profile rows for existing users who don't have one ─
INSERT INTO public.profiles (id, name, role)
SELECT
  u.id,
  COALESCE(u.raw_user_meta_data ->> 'name', ''),
  'student'
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL;

-- ─── 6. Verify your admin user ─────────────────────────────────────────────
-- After running this migration, verify your admin user has role='admin':
--
--   SELECT id, name, role FROM public.profiles WHERE role = 'admin';
--
-- If no rows returned, set yourself as admin:
--
--   UPDATE public.profiles SET role = 'admin'
--   WHERE id = (SELECT id FROM auth.users WHERE email = 'your-email@example.com');
--
