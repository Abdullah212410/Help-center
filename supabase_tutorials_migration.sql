-- ════════════════════════════════════════════════════════════════
-- Tutorials table + RLS policies
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ════════════════════════════════════════════════════════════════

-- 1. Create the tutorials table
CREATE TABLE IF NOT EXISTS public.tutorials (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title       text NOT NULL,
  description text,
  youtube_url text NOT NULL,
  thumbnail_url text,
  sort_order  integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- 2. Enable Row Level Security
ALTER TABLE public.tutorials ENABLE ROW LEVEL SECURITY;

-- 3. Public read: anyone can see published tutorials (no auth required)
CREATE POLICY "Public can view published tutorials"
  ON public.tutorials
  FOR SELECT
  USING (is_published = true);

-- 4. Admin full CRUD: authenticated users with role='admin' in profiles table
CREATE POLICY "Admins have full access to tutorials"
  ON public.tutorials
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role = 'admin'
    )
  );

-- 5. Auto-update the updated_at timestamp on row changes
CREATE OR REPLACE FUNCTION public.set_tutorials_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tutorials_updated_at
  BEFORE UPDATE ON public.tutorials
  FOR EACH ROW
  EXECUTE FUNCTION public.set_tutorials_updated_at();

-- 6. Index for public queries (sort_order + created_at)
CREATE INDEX IF NOT EXISTS idx_tutorials_published_sort
  ON public.tutorials (is_published, sort_order ASC, created_at DESC);
