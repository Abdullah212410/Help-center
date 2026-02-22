-- ════════════════════════════════════════════════════════════════════════════
-- COMPREHENSIVE RLS MIGRATION — All Tables
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
--
-- Tables covered:
--   1. profiles           (auth users, roles)
--   2. hc_categories      (Help Center categories)
--   3. hc_sections        (Help Center sections)
--   4. hc_articles        (Help Center articles)
--   5. tutorials          (Video tutorials)
--   6. blog_posts         (Blog posts)
--
-- Safe to re-run — uses DROP POLICY IF EXISTS before CREATE.
-- ════════════════════════════════════════════════════════════════════════════


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  1. PROFILES                                                           ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.profiles (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name       text NOT NULL DEFAULT '',
  role       text NOT NULL DEFAULT 'student',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Auto-create profile on sign-up
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

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Policies
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Admins have full access to profiles" ON public.profiles;
CREATE POLICY "Admins have full access to profiles"
  ON public.profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- Backfill any orphan auth users
INSERT INTO public.profiles (id, name, role)
SELECT u.id, COALESCE(u.raw_user_meta_data ->> 'name', ''), 'student'
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL;


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  2. HC_CATEGORIES                                                      ║
-- ║     Public filter: is_active = true                                    ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.hc_categories (
  id             uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug           text NOT NULL UNIQUE,
  title          text NOT NULL,
  title_ar       text,
  description    text NOT NULL DEFAULT '',
  description_ar text,
  icon           text NOT NULL DEFAULT 'folder',
  sort_order     integer NOT NULL DEFAULT 0,
  is_active      boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.hc_categories ENABLE ROW LEVEL SECURITY;

-- Public: anyone can SELECT active categories (no auth required)
DROP POLICY IF EXISTS "Public can view active categories" ON public.hc_categories;
CREATE POLICY "Public can view active categories"
  ON public.hc_categories FOR SELECT
  USING (is_active = true);

-- Admin: full CRUD on all categories
DROP POLICY IF EXISTS "Admins have full access to categories" ON public.hc_categories;
CREATE POLICY "Admins have full access to categories"
  ON public.hc_categories FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_hc_categories_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS hc_categories_updated_at ON public.hc_categories;
CREATE TRIGGER hc_categories_updated_at
  BEFORE UPDATE ON public.hc_categories
  FOR EACH ROW EXECUTE FUNCTION public.set_hc_categories_updated_at();


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  3. HC_SECTIONS                                                        ║
-- ║     Public filter: is_active = true                                    ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.hc_sections (
  id             uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  category_id    uuid NOT NULL REFERENCES public.hc_categories(id) ON DELETE CASCADE,
  slug           text NOT NULL,
  title          text NOT NULL,
  title_ar       text,
  description    text NOT NULL DEFAULT '',
  description_ar text,
  icon           text NOT NULL DEFAULT 'folder',
  sort_order     integer NOT NULL DEFAULT 0,
  is_active      boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (category_id, slug)
);

ALTER TABLE public.hc_sections ENABLE ROW LEVEL SECURITY;

-- Public: anyone can SELECT active sections
DROP POLICY IF EXISTS "Public can view active sections" ON public.hc_sections;
CREATE POLICY "Public can view active sections"
  ON public.hc_sections FOR SELECT
  USING (is_active = true);

-- Admin: full CRUD on all sections
DROP POLICY IF EXISTS "Admins have full access to sections" ON public.hc_sections;
CREATE POLICY "Admins have full access to sections"
  ON public.hc_sections FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_hc_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS hc_sections_updated_at ON public.hc_sections;
CREATE TRIGGER hc_sections_updated_at
  BEFORE UPDATE ON public.hc_sections
  FOR EACH ROW EXECUTE FUNCTION public.set_hc_sections_updated_at();


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  4. HC_ARTICLES                                                        ║
-- ║     Public filter: is_published = true                                 ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.hc_articles (
  id               uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id       uuid NOT NULL REFERENCES public.hc_sections(id) ON DELETE CASCADE,
  slug             text NOT NULL UNIQUE,
  title            text NOT NULL,
  title_ar         text,
  summary          text NOT NULL DEFAULT '',
  summary_ar       text,
  body_markdown    text NOT NULL DEFAULT '',
  body_markdown_ar text,
  sort_order       integer NOT NULL DEFAULT 0,
  is_published     boolean NOT NULL DEFAULT false,
  tags             text[] NOT NULL DEFAULT '{}',
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.hc_articles ENABLE ROW LEVEL SECURITY;

-- Public: anyone can SELECT published articles
DROP POLICY IF EXISTS "Public can view published articles" ON public.hc_articles;
CREATE POLICY "Public can view published articles"
  ON public.hc_articles FOR SELECT
  USING (is_published = true);

-- Admin: full CRUD on all articles
DROP POLICY IF EXISTS "Admins have full access to articles" ON public.hc_articles;
CREATE POLICY "Admins have full access to articles"
  ON public.hc_articles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_hc_articles_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS hc_articles_updated_at ON public.hc_articles;
CREATE TRIGGER hc_articles_updated_at
  BEFORE UPDATE ON public.hc_articles
  FOR EACH ROW EXECUTE FUNCTION public.set_hc_articles_updated_at();


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  5. TUTORIALS                                                          ║
-- ║     Public filter: is_published = true                                 ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.tutorials (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title         text NOT NULL,
  description   text,
  youtube_url   text NOT NULL,
  thumbnail_url text,
  sort_order    integer NOT NULL DEFAULT 0,
  is_published  boolean NOT NULL DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.tutorials ENABLE ROW LEVEL SECURITY;

-- Public: anyone can SELECT published tutorials
DROP POLICY IF EXISTS "Public can view published tutorials" ON public.tutorials;
CREATE POLICY "Public can view published tutorials"
  ON public.tutorials FOR SELECT
  USING (is_published = true);

-- Admin: full CRUD on all tutorials
DROP POLICY IF EXISTS "Admins have full access to tutorials" ON public.tutorials;
CREATE POLICY "Admins have full access to tutorials"
  ON public.tutorials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_tutorials_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tutorials_updated_at ON public.tutorials;
CREATE TRIGGER tutorials_updated_at
  BEFORE UPDATE ON public.tutorials
  FOR EACH ROW EXECUTE FUNCTION public.set_tutorials_updated_at();

-- Index for public queries
CREATE INDEX IF NOT EXISTS idx_tutorials_published_sort
  ON public.tutorials (is_published, sort_order ASC, created_at DESC);


-- ╔══════════════════════════════════════════════════════════════════════════╗
-- ║  6. BLOG_POSTS                                                         ║
-- ║     Public filter: is_published = true                                 ║
-- ╚══════════════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title        text NOT NULL,
  slug         text NOT NULL UNIQUE,
  content      text NOT NULL DEFAULT '',
  excerpt      text,
  author_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_published boolean NOT NULL DEFAULT false,
  published_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public: anyone can SELECT published blog posts
DROP POLICY IF EXISTS "Public can view published blog posts" ON public.blog_posts;
CREATE POLICY "Public can view published blog posts"
  ON public.blog_posts FOR SELECT
  USING (is_published = true);

-- Admin: full CRUD on all blog posts
DROP POLICY IF EXISTS "Admins have full access to blog posts" ON public.blog_posts;
CREATE POLICY "Admins have full access to blog posts"
  ON public.blog_posts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Teachers can manage their own blog posts
DROP POLICY IF EXISTS "Teachers can manage own blog posts" ON public.blog_posts;
CREATE POLICY "Teachers can manage own blog posts"
  ON public.blog_posts FOR ALL
  USING (
    auth.uid() = author_id
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role IN ('teacher', 'admin')
    )
  )
  WITH CHECK (
    auth.uid() = author_id
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid()
        AND profiles.role IN ('teacher', 'admin')
    )
  );

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.set_blog_posts_updated_at();

-- Index for public queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_published
  ON public.blog_posts (is_published, published_at DESC);


-- ════════════════════════════════════════════════════════════════════════════
-- VERIFICATION QUERIES (run after migration)
-- ════════════════════════════════════════════════════════════════════════════

-- Check all tables have RLS enabled:
-- SELECT tablename, rowsecurity FROM pg_tables WHERE schemaname = 'public';

-- Check all policies are in place:
-- SELECT tablename, policyname, cmd, qual
-- FROM pg_policies WHERE schemaname = 'public'
-- ORDER BY tablename, policyname;

-- Verify your admin user:
-- SELECT id, name, role FROM public.profiles WHERE role = 'admin';

-- If no admin found, set yourself:
-- UPDATE public.profiles SET role = 'admin'
-- WHERE id = (SELECT id FROM auth.users WHERE email = 'your-email@example.com');
