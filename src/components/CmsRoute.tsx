import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/auth';

type GuardStatus = 'loading' | 'admin' | 'denied' | 'unauthenticated';

/**
 * Route guard for admin CMS pages.
 *
 * Uses auth context as the primary source of truth (fast path).
 * Falls back to a single session recovery attempt when the auth context has
 * no user after loading — guarded by a ref so it runs at most ONCE per mount,
 * preventing repeated Supabase calls and LockManager contention.
 */
export const CmsRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [status, setStatus] = useState<GuardStatus>(
    user?.role === 'admin' ? 'admin' : 'loading',
  );
  const recoveryAttempted = useRef(false);

  useEffect(() => {
    // Fast path: auth context already confirms admin
    if (user?.role === 'admin') {
      setStatus('admin');
      return;
    }

    // Auth context has a user with a non-admin role — deny
    if (user) {
      setStatus('denied');
      return;
    }

    // Wait for auth context to finish loading
    if (loading) {
      setStatus('loading');
      return;
    }

    // Auth context finished loading but user is still null.
    // Only attempt recovery ONCE per mount to avoid loops.
    if (recoveryAttempted.current) {
      setStatus('unauthenticated');
      return;
    }
    recoveryAttempted.current = true;

    let cancelled = false;

    (async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (cancelled) return;

        if (!session) {
          setStatus('unauthenticated');
          return;
        }

        let authUser = (await supabase.auth.getUser()).data.user;
        if (cancelled) return;

        if (!authUser) {
          const { data: refreshData } = await supabase.auth.refreshSession();
          if (cancelled) return;
          authUser = refreshData?.session?.user ?? null;
        }

        if (!authUser) {
          setStatus('unauthenticated');
          return;
        }

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', authUser.id)
          .single();

        if (cancelled) return;

        if (profileError || !profile) {
          setStatus('denied');
          return;
        }

        const role = (profile.role || '').toLowerCase().trim();
        setStatus(role === 'admin' ? 'admin' : 'denied');
      } catch {
        if (!cancelled) setStatus('unauthenticated');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user, loading]);

  // ── Live session listener: redirect when session ends while on admin page ──
  useEffect(() => {
    if (status !== 'admin') return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'INITIAL_SESSION') return;
      if (event === 'SIGNED_OUT' || !session) {
        setStatus('unauthenticated');
      }
    });

    return () => subscription.unsubscribe();
  }, [status]);

  if (status === 'loading') return null;
  if (status === 'unauthenticated') return <Navigate to="/admin/login" replace state={{ from: location }} />;
  if (status === 'denied') return <Navigate to="/" replace />;
  return <>{children}</>;
};
