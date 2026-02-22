import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from './supabase';

// ─── Public types (unchanged exports) ──────────────────────────────────────

export type UserRole = 'teacher' | 'admin' | 'student' | 'family';

export interface TeacherUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// ─── Context type ──────────────────────────────────────────────────────────

interface AuthContextType {
  user: TeacherUser | null;
  isTeacher: boolean;
  isAdmin: boolean;
  /** True when the user's role is 'teacher' or 'admin' — allowed to create/edit/delete blog posts */
  canWriteBlog: boolean;
  /** True while the initial session is being loaded from Supabase */
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
}

// ─── Constants ─────────────────────────────────────────────────────────────

const BLOG_WRITE_ROLES: UserRole[] = ['teacher', 'admin'];
const VALID_ROLES: UserRole[] = ['teacher', 'admin', 'student', 'family'];

// ─── Context ───────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType>({
  user: null,
  isTeacher: false,
  isAdmin: false,
  canWriteBlog: false,
  loading: true,
  login: async () => ({ success: false }),
  logout: async () => {},
  register: async () => ({ success: false }),
});

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Fetch the user's profile (name + role) from the profiles table. */
async function fetchProfile(
  userId: string,
): Promise<{ name: string; role: UserRole } | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('name, role')
    .eq('id', userId)
    .maybeSingle();

  if (error || !data) {
    // Always log — critical for debugging admin access / RLS issues
    if (error) {
      console.error('[Auth] fetchProfile error:', error.message, '| code:', error.code, '| hint:', error.hint, '| userId:', userId);
    } else {
      console.error('[Auth] fetchProfile returned no data for userId:', userId);
    }
    return null;
  }

  // Normalize to lowercase — guards against DB having 'Admin' or 'TEACHER'
  const normalizedRole = (data.role || '').toLowerCase().trim() as UserRole;
  const role = VALID_ROLES.includes(normalizedRole) ? normalizedRole : 'student';

  return { name: data.name || '', role };
}

// ─── Provider ──────────────────────────────────────────────────────────────

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TeacherUser | null>(null);
  const [loading, setLoading] = useState(true);

  /** Combine a Supabase auth user with their profile row. */
  const buildUser = useCallback(
    async (authUser: { id: string; email?: string }): Promise<TeacherUser | null> => {
      // The trigger may not have finished yet — retry up to 3 times with increasing delay.
      const delays = [0, 600, 1200];
      let profile: { name: string; role: UserRole } | null = null;

      for (const delay of delays) {
        if (delay > 0) await new Promise((r) => setTimeout(r, delay));
        profile = await fetchProfile(authUser.id);
        if (profile) break;
      }

      if (!profile) {
        if (import.meta.env.DEV) {
          console.warn('[Auth] Could not load profile for user:', authUser.id);
        }
        return null;
      }

      const built: TeacherUser = {
        id: authUser.id,
        email: authUser.email || '',
        name: profile.name,
        role: profile.role,
      };

      if (import.meta.env.DEV) {
        console.log('[Auth] User loaded:', built.email, '| role:', built.role);
      }

      return built;
    },
    [],
  );

  // ── Session hydration + auth state listener ──
  useEffect(() => {
    let hydrated = false;

    const endLoading = (source: string) => {
      if (hydrated) return;
      hydrated = true;
      if (import.meta.env.DEV) {
        console.log(`[Auth] hydration complete (${source})`);
      }
      setLoading(false);
    };

    // Safety timeout — increased to 5s so slow networks / cold Supabase starts
    // don't prematurely unblock the UI and cause false "unauthenticated" states.
    const timeout = setTimeout(() => {
      if (!hydrated) {
        if (import.meta.env.DEV) {
          console.warn('[Auth] hydration timeout after 5000ms, allowing login UI');
        }
        endLoading('timeout');
      }
    }, 5000);

    // 1. Load existing session on mount.
    //    IMPORTANT: Only use getSession() — it reads from localStorage instantly
    //    and does NOT acquire the Navigator LockManager. Calling getUser() or
    //    refreshSession() here would hold the lock and deadlock any subsequent
    //    signInWithPassword() call (the login page's "Signing in…" hang).
    //    Token refresh is handled by autoRefreshToken + onAuthStateChange.
    if (import.meta.env.DEV) {
      console.log('[Auth] hydration started — calling getSession()');
    }

    (async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();

        if (import.meta.env.DEV) {
          console.log('[Auth] getSession() resolved:', {
            hasSession: !!session,
            expiresAt: session?.expires_at ?? null,
          });
        }

        if (!session) {
          endLoading('getSession-no-session');
          return;
        }

        // Build user from the session's user object (no network call, no lock).
        // If the JWT is expired, the profile query inside buildUser may fail —
        // that's fine: user stays null, and onAuthStateChange TOKEN_REFRESHED
        // will fire once autoRefreshToken kicks in and re-build the user.
        const u = await buildUser(session.user);
        setUser(u);
        endLoading('getSession');
      } catch (err) {
        if (import.meta.env.DEV) {
          console.warn('[Auth] session hydration error:', err);
        }
        endLoading('hydration-error');
      }
    })();

    // 2. React to future auth events (login, logout, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (import.meta.env.DEV) {
        console.log('[Auth] onAuthStateChange:', event, '| hasSession:', !!session);
      }

      // INITIAL_SESSION fires synchronously when the listener is registered.
      // It does NOT mean Supabase is reachable — skip it so the hydration IIFE
      // controls when loading ends (prevents premature user=null, loading=false).
      if (event === 'INITIAL_SESSION') return;

      // Any real auth event means Supabase is reachable — end loading if still pending
      endLoading(`onAuthStateChange:${event}`);

      if (event === 'SIGNED_OUT') {
        setUser(null);
        return;
      }
      // Handle both SIGNED_IN (new login) and TOKEN_REFRESHED (session renewal)
      if (
        (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') &&
        session?.user
      ) {
        const u = await buildUser(session.user);
        setUser(u);
      }
    });

    // 3. Proactive token refresh when tab regains focus.
    //    Browsers throttle timers in background tabs, so auto-refresh may not
    //    fire on time. When the user comes back, re-validate immediately.
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        supabase.auth.getSession().then(async ({ data: { session } }) => {
          if (!session) return;
          // Check if the access token is close to expiry (within 60s)
          const expiresAt = session.expires_at ?? 0;
          const nowSec = Math.floor(Date.now() / 1000);
          if (expiresAt - nowSec < 60) {
            if (import.meta.env.DEV) {
              console.log('[Auth] Token near expiry on tab focus, refreshing…');
            }
            await supabase.auth.refreshSession();
            // onAuthStateChange will propagate the new token
          }
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearTimeout(timeout);
      subscription.unsubscribe();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [buildUser]);

  // ── Auth actions ──

  /**
   * Convert unknown errors (network failures, DNS errors, etc.) into a
   * user-friendly message instead of the opaque "Failed to fetch".
   */
  const friendlyError = (err: unknown): string => {
    if (err instanceof TypeError && /fetch/i.test(err.message)) {
      return 'Cannot reach the server. Check your internet connection and verify that VITE_SUPABASE_URL in .env points to a real Supabase project.';
    }
    if (err instanceof Error) return err.message;
    return 'An unexpected error occurred. Please try again.';
  };

  /** Map Supabase auth error messages to user-friendly text. */
  const mapAuthError = (msg: string): string => {
    const lower = msg.toLowerCase();
    if (lower.includes('invalid login credentials'))
      return 'Invalid email or password. Please try again.';
    if (lower.includes('email not confirmed'))
      return 'Your email has not been confirmed. Please check your inbox.';
    if (lower.includes('user not found'))
      return 'No account found with this email address.';
    if (lower.includes('email rate limit'))
      return 'Too many attempts. Please wait a moment and try again.';
    if (lower.includes('signup is disabled'))
      return 'Registration is currently disabled. Contact your administrator.';
    return msg;
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (import.meta.env.DEV) {
        console.log('[Auth] signInWithPassword result:', { data, error });
        if (error) console.warn('[Auth] Login error:', error.message, '| status:', error.status);

        // Verify the session was actually persisted
        const { data: sessionData } = await supabase.auth.getSession();
        console.log('[Auth] getSession() after login:', {
          hasSession: !!sessionData.session,
          userId: sessionData.session?.user?.id ?? null,
          expiresAt: sessionData.session?.expires_at ?? null,
        });
      }

      if (error) return { success: false, error: mapAuthError(error.message) };
      // onAuthStateChange will set the user
      return { success: true };
    } catch (err) {
      return { success: false, error: friendlyError(err) };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // Ignore network errors on sign-out — clear local state regardless
    }
    setUser(null);
  };

  const register = async (
    email: string,
    password: string,
    name: string,
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // Only pass name in metadata — role is ALWAYS set by the DB trigger
          data: { name },
        },
      });

      if (import.meta.env.DEV) {
        if (error) console.warn('[Auth] Signup error:', error.message);
        if (data?.user) console.log('[Auth] Signup user:', data.user.id, data.user.email);
      }

      if (error) return { success: false, error: mapAuthError(error.message) };

      // Supabase returns a user with an empty identities array when the email
      // already exists but email confirmation is required.
      if (data.user && data.user.identities?.length === 0) {
        return { success: false, error: 'An account with this email already exists.' };
      }

      return { success: true };
    } catch (err) {
      return { success: false, error: friendlyError(err) };
    }
  };

  // ── Derived flags ──
  // IMPORTANT: Admin is NOT a teacher. These are separate roles.
  const isAdmin = !!user && user.role === 'admin';
  const isTeacher = !!user && user.role === 'teacher';
  const canWriteBlog = !!user && BLOG_WRITE_ROLES.includes(user.role);

  return (
    <AuthContext.Provider
      value={{ user, isTeacher, isAdmin, canWriteBlog, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
