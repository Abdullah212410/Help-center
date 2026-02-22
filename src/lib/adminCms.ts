/**
 * Admin CMS — Session bridge helpers
 *
 * After AdminCmsLogin verifies the user is an admin via Supabase Auth,
 * it sets a localStorage flag. CmsRoute checks this flag as a bridge
 * to cover the brief gap between signInWithPassword succeeding and the
 * AuthContext finishing buildUser.
 *
 * Using localStorage (instead of sessionStorage) so the flag survives
 * tab closes and browser restarts — matching the Supabase session
 * persistence and preventing unnecessary re-authentication.
 *
 * The flag is cleared on logout or when the auth context confirms
 * the user is not an admin.
 */

const STORAGE_KEY = 'hc_cms_admin';

/** Mark the session as CMS-authenticated (called after admin role verified). */
export function setCmsAuthenticated(): void {
  localStorage.setItem(STORAGE_KEY, 'true');
}

/** Check whether the current session has the CMS bridge flag. */
export function isCmsAuthenticated(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

/** Clear CMS session flag (called on logout). */
export function clearCmsSession(): void {
  localStorage.removeItem(STORAGE_KEY);
  // Also clean up legacy sessionStorage entry if present
  try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
}
