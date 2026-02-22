-- ============================================================
-- Supabase RBAC Schema for Help Center
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. PROFILES TABLE
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name        TEXT NOT NULL DEFAULT '',
  role        TEXT NOT NULL DEFAULT 'student'
              CHECK (role IN ('admin', 'teacher', 'student', 'family')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "profiles_select_own"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Admins can read all profiles
CREATE POLICY "profiles_select_admin"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can update their own profile BUT the role column must stay unchanged.
-- This prevents privilege escalation (e.g. student setting role = 'admin').
CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND role = (SELECT p.role FROM public.profiles p WHERE p.id = auth.uid())
  );

-- Admins can update any profile (including role changes)
CREATE POLICY "profiles_update_admin"
  ON public.profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Allow insert for the signup trigger (user inserts own row)
CREATE POLICY "profiles_insert_own"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ────────────────────────────────────────────────────────────
-- 2. AUTO-CREATE PROFILE ON SIGNUP (Trigger)
--    SECURITY: role is ALWAYS 'student' regardless of what
--    the client sends in user_metadata. Only an admin can
--    change roles via a direct UPDATE on the profiles table.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    'student'  -- ALWAYS student — never trust client-provided role
  );
  RETURN NEW;
END;
$$;

-- Drop existing trigger if present, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ────────────────────────────────────────────────────────────
-- 3. CATEGORIES TABLE
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.categories (
  id             TEXT PRIMARY KEY,
  slug           TEXT UNIQUE NOT NULL,
  title          TEXT NOT NULL,
  title_ar       TEXT,
  description    TEXT NOT NULL DEFAULT '',
  description_ar TEXT,
  "order"        INTEGER NOT NULL DEFAULT 0,
  icon           TEXT DEFAULT '',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Anyone can read categories (public content)
CREATE POLICY "categories_select_all"
  ON public.categories FOR SELECT
  USING (true);

-- Only admins can insert categories
CREATE POLICY "categories_insert_admin"
  ON public.categories FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update categories
CREATE POLICY "categories_update_admin"
  ON public.categories FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete categories
CREATE POLICY "categories_delete_admin"
  ON public.categories FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ────────────────────────────────────────────────────────────
-- 4. ARTICLES TABLE
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.articles (
  id               TEXT PRIMARY KEY,
  section_id       TEXT NOT NULL,
  group_id         TEXT,
  slug             TEXT UNIQUE NOT NULL,
  title            TEXT NOT NULL,
  title_ar         TEXT,
  summary          TEXT NOT NULL DEFAULT '',
  summary_ar       TEXT,
  body_markdown    TEXT NOT NULL DEFAULT '',
  body_markdown_ar TEXT,
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  tags             TEXT[] DEFAULT '{}',
  is_top           BOOLEAN DEFAULT false,
  is_featured      BOOLEAN DEFAULT false,
  role             TEXT[] DEFAULT NULL
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Anyone can read articles (public content)
CREATE POLICY "articles_select_all"
  ON public.articles FOR SELECT
  USING (true);

-- Only admins can insert articles
CREATE POLICY "articles_insert_admin"
  ON public.articles FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update articles
CREATE POLICY "articles_update_admin"
  ON public.articles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete articles
CREATE POLICY "articles_delete_admin"
  ON public.articles FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ────────────────────────────────────────────────────────────
-- 5. HELP CENTER CMS — CATEGORIES
--    Separate from the legacy 'categories' table.
--    Used by the admin CMS panel and rendered on the public
--    help center pages.
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.hc_categories (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  title_ar    TEXT,
  description TEXT NOT NULL DEFAULT '',
  description_ar TEXT,
  icon        TEXT DEFAULT 'folder',
  sort_order  INTEGER NOT NULL DEFAULT 0,
  is_active   BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.hc_categories ENABLE ROW LEVEL SECURITY;

-- Public: anyone can read ACTIVE categories
CREATE POLICY "hc_categories_select_active"
  ON public.hc_categories FOR SELECT
  USING (is_active = true);

-- Admins can read ALL categories (including inactive)
CREATE POLICY "hc_categories_select_admin"
  ON public.hc_categories FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can insert
CREATE POLICY "hc_categories_insert_admin"
  ON public.hc_categories FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update
CREATE POLICY "hc_categories_update_admin"
  ON public.hc_categories FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete
CREATE POLICY "hc_categories_delete_admin"
  ON public.hc_categories FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ────────────────────────────────────────────────────────────
-- 6. HELP CENTER CMS — SECTIONS
--    Second-level grouping under categories.
--    Example: For Teachers → Getting Started, Classroom Mgmt…
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.hc_sections (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id   UUID NOT NULL REFERENCES public.hc_categories(id) ON DELETE CASCADE,
  slug          TEXT NOT NULL,
  title         TEXT NOT NULL,
  title_ar      TEXT,
  description   TEXT NOT NULL DEFAULT '',
  description_ar TEXT,
  icon          TEXT DEFAULT 'folder',
  sort_order    INTEGER NOT NULL DEFAULT 0,
  is_active     BOOLEAN NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Slug unique per category, not globally
  CONSTRAINT hc_sections_category_slug_unique UNIQUE (category_id, slug)
);

ALTER TABLE public.hc_sections ENABLE ROW LEVEL SECURITY;

-- Public: anyone can read ACTIVE sections in ACTIVE categories
CREATE POLICY "hc_sections_select_active"
  ON public.hc_sections FOR SELECT
  USING (
    is_active = true
    AND EXISTS (
      SELECT 1 FROM public.hc_categories
      WHERE id = hc_sections.category_id AND is_active = true
    )
  );

-- Admins can read ALL sections (including inactive)
CREATE POLICY "hc_sections_select_admin"
  ON public.hc_sections FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can insert
CREATE POLICY "hc_sections_insert_admin"
  ON public.hc_sections FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update
CREATE POLICY "hc_sections_update_admin"
  ON public.hc_sections FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete
CREATE POLICY "hc_sections_delete_admin"
  ON public.hc_sections FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ────────────────────────────────────────────────────────────
-- 7. HELP CENTER CMS — ARTICLES
--    Now linked to sections (not categories directly).
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.hc_articles (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id      UUID NOT NULL REFERENCES public.hc_sections(id) ON DELETE CASCADE,
  slug            TEXT UNIQUE NOT NULL,
  title           TEXT NOT NULL,
  title_ar        TEXT,
  summary         TEXT NOT NULL DEFAULT '',
  summary_ar      TEXT,
  body_markdown   TEXT NOT NULL DEFAULT '',
  body_markdown_ar TEXT,
  sort_order      INTEGER NOT NULL DEFAULT 0,
  is_published    BOOLEAN NOT NULL DEFAULT false,
  tags            TEXT[] DEFAULT '{}',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.hc_articles ENABLE ROW LEVEL SECURITY;

-- Public: anyone can read PUBLISHED articles in ACTIVE sections & ACTIVE categories
CREATE POLICY "hc_articles_select_published"
  ON public.hc_articles FOR SELECT
  USING (
    is_published = true
    AND EXISTS (
      SELECT 1 FROM public.hc_sections s
      JOIN public.hc_categories c ON c.id = s.category_id
      WHERE s.id = hc_articles.section_id
        AND s.is_active = true
        AND c.is_active = true
    )
  );

-- Admins can read ALL articles (including drafts)
CREATE POLICY "hc_articles_select_admin"
  ON public.hc_articles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can insert
CREATE POLICY "hc_articles_insert_admin"
  ON public.hc_articles FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can update
CREATE POLICY "hc_articles_update_admin"
  ON public.hc_articles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Only admins can delete
CREATE POLICY "hc_articles_delete_admin"
  ON public.hc_articles FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ────────────────────────────────────────────────────────────
-- 8. TIMESTAMP TRIGGERS
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.hc_update_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS hc_categories_updated_at ON public.hc_categories;
CREATE TRIGGER hc_categories_updated_at
  BEFORE UPDATE ON public.hc_categories
  FOR EACH ROW EXECUTE FUNCTION public.hc_update_timestamp();

DROP TRIGGER IF EXISTS hc_sections_updated_at ON public.hc_sections;
CREATE TRIGGER hc_sections_updated_at
  BEFORE UPDATE ON public.hc_sections
  FOR EACH ROW EXECUTE FUNCTION public.hc_update_timestamp();

DROP TRIGGER IF EXISTS hc_articles_updated_at ON public.hc_articles;
CREATE TRIGGER hc_articles_updated_at
  BEFORE UPDATE ON public.hc_articles
  FOR EACH ROW EXECUTE FUNCTION public.hc_update_timestamp();

-- ────────────────────────────────────────────────────────────
-- 9. MIGRATION FROM OLD SCHEMA
--    If hc_articles already exists with category_id, run this:
-- ────────────────────────────────────────────────────────────
--
-- -- Step 1: Add section_id column
-- ALTER TABLE public.hc_articles
--   ADD COLUMN IF NOT EXISTS section_id UUID REFERENCES public.hc_sections(id) ON DELETE CASCADE;
--
-- -- Step 2: Drop old category_id (only if table is empty or articles migrated)
-- ALTER TABLE public.hc_articles ALTER COLUMN category_id DROP NOT NULL;
-- ALTER TABLE public.hc_articles DROP COLUMN IF EXISTS category_id;
--
-- -- Step 3: Make section_id required
-- ALTER TABLE public.hc_articles ALTER COLUMN section_id SET NOT NULL;
--
-- -- Step 4: Drop and recreate the public SELECT policy
-- DROP POLICY IF EXISTS "hc_articles_select_published" ON public.hc_articles;
-- CREATE POLICY "hc_articles_select_published"
--   ON public.hc_articles FOR SELECT
--   USING (
--     is_published = true
--     AND EXISTS (
--       SELECT 1 FROM public.hc_sections s
--       JOIN public.hc_categories c ON c.id = s.category_id
--       WHERE s.id = hc_articles.section_id
--         AND s.is_active = true
--         AND c.is_active = true
--     )
--   );

-- ────────────────────────────────────────────────────────────
-- 10. LEGACY MIGRATION HELPER
-- ────────────────────────────────────────────────────────────

-- If your profiles table has an email column from a previous version, drop it:
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS email;
--
-- Then re-run the trigger function above to stop inserting email.
