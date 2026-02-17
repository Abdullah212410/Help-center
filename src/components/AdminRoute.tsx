import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { Layout } from './Layout';

/**
 * Route guard that only renders children when the current user is an admin.
 * Non-admin users see a "Not Authorized" message.
 */
export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Sign In Required</h1>
            <p className="text-sm text-slate-500 mb-6">
              Please sign in with an admin account to access this page.
            </p>
            <Link
              to="/help"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #ff4da6, #ED3B91)', boxShadow: '0 2px 8px rgba(237,59,145,0.25)' }}
            >
              Go to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isAdmin) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 text-red-400 mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Not Authorized</h1>
            <p className="text-sm text-slate-500 mb-6">
              You don't have permission to access this page. Admin access is required.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #ff4da6, #ED3B91)', boxShadow: '0 2px 8px rgba(237,59,145,0.25)' }}
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return <>{children}</>;
};
