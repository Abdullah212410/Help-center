-- ============================================================
-- Migration: Create blog_posts table with RLS
--
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Ensure the updated_at trigger function exists
CREATE OR REPLACE FUNCTION public.hc_update_timestamp()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- 2. Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  excerpt       TEXT,
  body          TEXT NOT NULL DEFAULT '',
  cover_image   TEXT,
  tags          TEXT[] DEFAULT '{}',
  author_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name   TEXT NOT NULL DEFAULT '',
  status        TEXT NOT NULL DEFAULT 'draft'
                CHECK (status IN ('draft', 'published')),
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies

-- Public can read published posts (anon + authenticated)
CREATE POLICY "blog_posts_select_published"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

-- Admins can read ALL posts (including drafts)
CREATE POLICY "blog_posts_select_admin"
  ON public.blog_posts FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can read their own posts (including drafts)
CREATE POLICY "blog_posts_select_own"
  ON public.blog_posts FOR SELECT
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'teacher')
    )
  );

-- Admin and teacher can insert (must be own author_id)
CREATE POLICY "blog_posts_insert_writer"
  ON public.blog_posts FOR INSERT
  WITH CHECK (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role IN ('admin', 'teacher')
    )
  );

-- Admin can update any post
CREATE POLICY "blog_posts_update_admin"
  ON public.blog_posts FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can update their own posts
CREATE POLICY "blog_posts_update_own"
  ON public.blog_posts FOR UPDATE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- Admin can delete any post
CREATE POLICY "blog_posts_delete_admin"
  ON public.blog_posts FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Teachers can delete their own posts
CREATE POLICY "blog_posts_delete_own"
  ON public.blog_posts FOR DELETE
  USING (
    author_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- 4. Auto-update updated_at on blog_posts
DROP TRIGGER IF EXISTS blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.hc_update_timestamp();

-- 5. Reload PostgREST schema cache
NOTIFY pgrst, 'reload schema';
