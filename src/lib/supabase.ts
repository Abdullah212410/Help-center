import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// ── Validate environment variables ──────────────────────────────────────────

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase environment variables.\n' +
    'Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.\n' +
    'Then restart the dev server (Vite only reads .env on startup).',
  );
}

if (
  supabaseUrl.includes('your-project-id') ||
  supabaseKey.includes('your-anon-key')
) {
  throw new Error(
    'Supabase credentials are still set to placeholder values.\n' +
    'Replace them in .env with your real project URL and publishable key from:\n' +
    'https://supabase.com/dashboard → Project Settings → API',
  );
}

if (!supabaseUrl.startsWith('https://')) {
  throw new Error(
    `VITE_SUPABASE_URL must start with https://. Got: "${supabaseUrl}"`,
  );
}

// ── DEV-only: log connection info (never log full key) ──────────────────────

if (import.meta.env.DEV) {
  try {
    const host = new URL(supabaseUrl).host;
    console.log(`[Supabase] Project : ${host}`);
    console.log(`[Supabase] Key     : ${supabaseKey.substring(0, 12)}… (${supabaseKey.length} chars)`);
  } catch {
    console.warn('[Supabase] ⚠ Could not parse VITE_SUPABASE_URL');
  }
}

// ── Create Supabase client ──────────────────────────────────────────────────

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

// ── Connection health check (used by login pages) ──────────────────────────

/**
 * Pings the Supabase GoTrue `/auth/v1/settings` endpoint to verify the URL
 * is reachable and the API key is accepted.
 *
 * Uses raw fetch (not the supabase client) so it never triggers session
 * hydration or Navigator LockManager operations.
 *
 * Returns within 15 seconds (generous for paused free-tier projects waking up).
 */
export async function testSupabaseConnection(): Promise<{
  ok: boolean;
  error?: string;
  hint?: string;
}> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15_000);

  try {
    // GoTrue settings endpoint — lightweight, validates the API key via the
    // `apikey` header (works with both legacy JWT and new sb_publishable_ keys).
    const res = await fetch(`${supabaseUrl}/auth/v1/settings`, {
      headers: { apikey: supabaseKey },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.status === 401 || res.status === 403) {
      return {
        ok: false,
        error: 'Supabase API key rejected (HTTP ' + res.status + ').',
        hint:
          'VITE_SUPABASE_ANON_KEY may be incorrect. ' +
          'Copy the publishable (anon) key from Supabase Dashboard → Settings → API.',
      };
    }

    if (!res.ok) {
      return {
        ok: false,
        error: `Supabase returned HTTP ${res.status}.`,
        hint: 'The project may be paused or VITE_SUPABASE_URL is incorrect.',
      };
    }

    if (import.meta.env.DEV) {
      console.log('[Supabase] ✓ Connection health check passed');
    }

    return { ok: true };
  } catch (err: any) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      return {
        ok: false,
        error: 'Supabase connection timed out.',
        hint:
          'The project may be paused (free-tier) or VITE_SUPABASE_URL is wrong. ' +
          'Check the Supabase Dashboard to confirm the project is active.',
      };
    }

    if (err instanceof TypeError && /fetch/i.test(err.message)) {
      return {
        ok: false,
        error: 'Cannot reach Supabase server.',
        hint: 'Check your internet connection and VITE_SUPABASE_URL in .env.',
      };
    }

    return { ok: false, error: err.message || 'Unknown connection error.' };
  }
}
