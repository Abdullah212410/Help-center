import React, { useState, useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/auth';
import { isCmsAuthenticated, clearCmsSession } from '../lib/adminCms';

type GuardStatus = 'checking' | 'admin' | 'denied' | 'no-session' | 'error';

/**
 * Route guard for /admin/* pages.
 *
 * Priority order:
 * 1. AuthProvider context — if user.role === 'admin', grant immediately.
 * 2. Self-contained recovery — getSession() + profiles query (maybeSingle).
 * 3. CMS bridge trust — if handleSubmit already verified admin (localStorage
 *    flag), trust that verification and grant access.
 *
 * NEVER calls getUser() or refreshSession() — those acquire the Navigator
 * LockManager and deadlock when AuthProvider is doing the same thing.
 */
export const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [status, setStatus] = useState<GuardStatus>('checking');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const recoveryAttempted = useRef(false);

  useEffect(() => {
    // Once confirmed admin, only sign-out can change it (handled by listener below)
    if (status === 'admin') return;

    // ── Fast path: auth context already has the answer ──
    if (user?.role === 'admin') {
      if (import.meta.env.DEV) console.log('[RequireAdmin] Fast path: user.role is admin');
      setStatus('admin');
      return;
    }
    if (user) {
      // Authenticated but not admin
      clearCmsSession();
      setStatus('denied');
      return;
    }
    if (loading) {
      // AuthProvider still hydrating — keep waiting
      return;
    }

    // ── AuthProvider finished but user is null ──
    if (recoveryAttempted.current) {
      // CMS bridge: handleSubmit already verified admin. Trust it.
      if (isCmsAuthenticated()) {
        if (import.meta.env.DEV) console.log('[RequireAdmin] Trusting CMS bridge (recovery done, user still null)');
        setStatus('admin');
        return;
      }
      setStatus('no-session');
      return;
    }
    recoveryAttempted.current = true;

    let cancelled = false;

    (async () => {
      try {
        // Step 1: read session from localStorage (instant, no LockManager)
        const { data: { session }, error: sessionErr } = await supabase.auth.getSession();

        if (cancelled) return;

        if (sessionErr) {
          console.error('[RequireAdmin] getSession error:', sessionErr.message);
          if (isCmsAuthenticated()) { setStatus('admin'); return; }
          setErrorMsg(sessionErr.message);
          setStatus('error');
          return;
        }

        if (!session) {
          if (isCmsAuthenticated()) {
            if (import.meta.env.DEV) console.log('[RequireAdmin] No session but CMS bridge set — trusting bridge');
            setStatus('admin');
            return;
          }
          setStatus('no-session');
          return;
        }

        // Step 2: query profiles table with maybeSingle (no PGRST116 error)
        const userId = session.user.id;
        const { data: profile, error: profileErr } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', userId)
          .maybeSingle();

        if (cancelled) return;

        if (profileErr) {
          console.error(
            '[RequireAdmin] Profile query failed:',
            profileErr.message,
            '| code:', profileErr.code,
          );
          // Trust CMS bridge — handleSubmit already verified admin
          if (isCmsAuthenticated()) {
            if (import.meta.env.DEV) console.log('[RequireAdmin] Profile query failed but CMS bridge set — granting access');
            setStatus('admin');
            return;
          }
          setErrorMsg(`Profile check failed: ${profileErr.message}`);
          setStatus('error');
          return;
        }

        // profile is null when RLS blocks access or row doesn't exist
        if (!profile) {
          if (isCmsAuthenticated()) {
            if (import.meta.env.DEV) console.log('[RequireAdmin] Profile not found/blocked but CMS bridge set — granting access');
            setStatus('admin');
            return;
          }
          // No profile and no CMS bridge — can't verify admin
          setStatus('no-session');
          return;
        }

        const role = (profile.role || '').toLowerCase().trim();
        if (import.meta.env.DEV) console.log('[RequireAdmin] Role resolved:', role);

        if (role === 'admin') {
          setStatus('admin');
        } else {
          clearCmsSession();
          setStatus('denied');
        }
      } catch (err: any) {
        if (cancelled) return;
        console.error('[RequireAdmin] Unexpected error:', err);
        // Trust CMS bridge on errors
        if (isCmsAuthenticated()) {
          if (import.meta.env.DEV) console.log('[RequireAdmin] Error but CMS bridge set — granting access');
          setStatus('admin');
          return;
        }
        setErrorMsg(err.message || String(err));
        setStatus('error');
      }
    })();

    return () => { cancelled = true; };
  }, [user, loading, status]);

  // ── Safety timeout: never stay in 'checking' forever ──
  useEffect(() => {
    if (status !== 'checking') return;

    const t = setTimeout(() => {
      // If CMS bridge is set, handleSubmit already verified admin — trust it
      if (isCmsAuthenticated()) {
        if (import.meta.env.DEV) console.log('[RequireAdmin] Safety timeout: CMS bridge set — granting admin');
        setStatus('admin');
        return;
      }
      console.warn('[RequireAdmin] Safety timeout — no CMS bridge, redirecting to login');
      setStatus('no-session');
    }, 10_000);

    return () => clearTimeout(t);
  }, [status]);

  // ── Sign-out listener: only active once admin is confirmed ──
  useEffect(() => {
    if (status !== 'admin') return;

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'INITIAL_SESSION') return;
      if (event === 'SIGNED_OUT') {
        clearCmsSession();
        setStatus('no-session');
      }
    });

    return () => subscription.unsubscribe();
  }, [status]);

  // ── Render ──
  if (status === 'checking') {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fafbfc' }}>
        <p className="text-sm text-slate-400">Verifying admin access…</p>
      </div>
    );
  }
  if (status === 'no-session' || status === 'error') {
    return <Navigate to="/admin/login" replace state={{ from: location, error: errorMsg }} />;
  }
  if (status === 'denied') return <Navigate to="/" replace />;
  return <>{children}</>;
};
