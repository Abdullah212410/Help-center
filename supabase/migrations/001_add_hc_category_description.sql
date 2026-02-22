-- ============================================================
-- Migration: Add missing description columns to hc_categories
--
-- The hc_categories table was created without the description
-- and description_ar columns. The CMS code expects them.
--
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. Add the missing columns (safe — IF NOT EXISTS prevents errors
--    if the column already exists).
ALTER TABLE public.hc_categories
  ADD COLUMN IF NOT EXISTS description    TEXT NOT NULL DEFAULT '';

ALTER TABLE public.hc_categories
  ADD COLUMN IF NOT EXISTS description_ar TEXT;

-- 2. Force PostgREST to reload its schema cache so the new columns
--    are immediately visible to the Supabase JS client.
NOTIFY pgrst, 'reload schema';
