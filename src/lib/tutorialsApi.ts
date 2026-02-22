import { supabase } from './supabase';
import { emitDataChange } from './dataEvents';
import type { Tutorial } from '../types';

/* ═══════════════════════════════════════════════════
   YouTube helpers
   ═══════════════════════════════════════════════════ */

/** Extract the video ID from a youtube.com or youtu.be URL. Returns null if invalid. */
export function extractYouTubeId(url: string): string | null {
  // youtube.com/watch?v=VIDEO_ID
  const longMatch = url.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (longMatch) return longMatch[1];
  // youtu.be/VIDEO_ID
  const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];
  // youtube.com/embed/VIDEO_ID
  const embedMatch = url.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];
  return null;
}

/** Validate that a string is a recognised YouTube URL. */
export function isValidYouTubeUrl(url: string): boolean {
  return extractYouTubeId(url) !== null;
}

/** Auto-generate a high-quality thumbnail from a video ID. */
export function youTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/* ═══════════════════════════════════════════════════
   Public queries (RLS: is_published = true)
   ═══════════════════════════════════════════════════ */

export async function getPublishedTutorials(): Promise<Tutorial[]> {
  const { data, error } = await supabase
    .from('tutorials')
    .select('*')
    .eq('is_published', true)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

/* ═══════════════════════════════════════════════════
   Admin CRUD (RLS: profiles.role = 'admin')
   ═══════════════════════════════════════════════════ */

export async function adminGetAllTutorials(): Promise<Tutorial[]> {
  console.log('[tutorialsApi] adminGetAllTutorials — fetching all tutorials (no filter)…');

  const { data, error, status, statusText } = await supabase
    .from('tutorials')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error(
      '[tutorialsApi] adminGetAllTutorials FAILED:',
      error.message,
      '| code:', error.code,
      '| details:', error.details,
      '| hint:', error.hint,
      '| HTTP status:', status, statusText,
    );
    throw error;
  }

  console.log('[tutorialsApi] adminGetAllTutorials OK — returned', data?.length ?? 0, 'rows');
  return data ?? [];
}

export async function adminGetTutorial(id: string): Promise<Tutorial> {
  const { data, error } = await supabase
    .from('tutorials')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export interface TutorialInput {
  title: string;
  description?: string | null;
  youtube_url: string;
  thumbnail_url?: string | null;
  sort_order?: number;
  is_published?: boolean;
}

export async function adminCreateTutorial(input: TutorialInput): Promise<Tutorial> {
  const videoId = extractYouTubeId(input.youtube_url);
  const thumbnail = input.thumbnail_url?.trim() || (videoId ? youTubeThumbnail(videoId) : null);

  const payload = {
    title: input.title,
    description: input.description || null,
    youtube_url: input.youtube_url,
    thumbnail_url: thumbnail,
    sort_order: input.sort_order ?? 0,
    is_published: input.is_published ?? false,
  };
  console.log('[tutorialsApi] INSERT payload:', payload);

  const { data, error } = await supabase
    .from('tutorials')
    .insert(payload)
    .select()
    .maybeSingle();

  if (error) {
    console.error('[tutorialsApi] INSERT error:', error.message, '| code:', error.code, '| details:', error.details, '| hint:', error.hint);
    throw error;
  }
  if (!data) {
    throw new Error('Tutorial was created but could not be read back. Check RLS policies on the tutorials table — the SELECT policy may reference a wrong column name.');
  }
  emitDataChange('tutorials');
  return data;
}

export async function adminUpdateTutorial(id: string, input: TutorialInput): Promise<Tutorial> {
  const videoId = extractYouTubeId(input.youtube_url);
  const thumbnail = input.thumbnail_url?.trim() || (videoId ? youTubeThumbnail(videoId) : null);

  const payload = {
    title: input.title,
    description: input.description || null,
    youtube_url: input.youtube_url,
    thumbnail_url: thumbnail,
    sort_order: input.sort_order ?? 0,
    is_published: input.is_published ?? false,
    updated_at: new Date().toISOString(),
  };
  console.log('[tutorialsApi] UPDATE payload:', payload, '| id:', id);

  const { data, error } = await supabase
    .from('tutorials')
    .update(payload)
    .eq('id', id)
    .select()
    .maybeSingle();

  if (error) {
    console.error('[tutorialsApi] UPDATE error:', error.message, '| code:', error.code, '| details:', error.details, '| hint:', error.hint);
    throw error;
  }
  if (!data) {
    throw new Error('Tutorial was updated but could not be read back. Check RLS policies on the tutorials table — the SELECT policy may reference a wrong column name.');
  }
  emitDataChange('tutorials');
  return data;
}

export async function adminDeleteTutorial(id: string): Promise<void> {
  const { error } = await supabase.from('tutorials').delete().eq('id', id);
  if (error) throw error;
  emitDataChange('tutorials');
}
