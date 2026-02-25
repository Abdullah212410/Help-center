import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { supabase } from '../../lib/supabase';

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try { await supabase.auth.signOut(); } catch {}
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen glass-bg">
      {/* Top bar */}
      <header className="glass-header sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #ED3B91, #08B8FB)',
                boxShadow: '0 2px 8px rgba(237, 59, 145, 0.15)',
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-slate-900">String</span>
              <span className="text-lg text-slate-400 font-light">Admin</span>
              <span className="admin-badge">ADMIN</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm text-slate-500">
                {user.name} <span className="text-xs px-2 py-0.5 rounded-full bg-pink-50 text-[#ED3B91] font-medium ml-1">Admin</span>
              </span>
            )}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Admin Dashboard</h1>
          <p className="text-[15px] text-slate-500">Manage your String Help Center content and blog posts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Help Center CMS */}
          <Link
            to="/admin/help-center"
            className="group block card-modern"
            style={{ padding: 0 }}
          >
            <div className="card-accent-glow" style={{ background: 'linear-gradient(135deg, #08B8FB, #6366f1)' }} />
            <div style={{ padding: '28px 28px 32px' }}>
              <div
                className="w-12 h-12 rounded-xl icon-container-glow flex items-center justify-center mb-4"
                style={{ background: 'rgba(8, 184, 251, 0.1)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#08B8FB' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h2 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#08B8FB] transition-colors duration-200 mb-1.5" style={{ lineHeight: 1.35 }}>
                Help Center
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed" style={{ opacity: 0.78 }}>
                Manage categories, articles, and help center content.
              </p>
            </div>
          </Link>

          {/* Blog Management */}
          <Link
            to="/admin/blog"
            className="group block card-modern"
            style={{ padding: 0 }}
          >
            <div className="card-accent-glow" style={{ background: 'linear-gradient(135deg, #ED3B91, #ff4da6)' }} />
            <div style={{ padding: '28px 28px 32px' }}>
              <div
                className="w-12 h-12 rounded-xl icon-container-glow flex items-center justify-center mb-4"
                style={{ background: 'rgba(237, 59, 145, 0.1)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#ED3B91' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </div>
              <h2 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#ED3B91] transition-colors duration-200 mb-1.5" style={{ lineHeight: 1.35 }}>
                Blog
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed" style={{ opacity: 0.78 }}>
                Manage, create, and edit blog posts.
              </p>
            </div>
          </Link>

          {/* Tutorials */}
          <Link
            to="/admin/tutorials"
            className="group block card-modern"
            style={{ padding: 0 }}
          >
            <div className="card-accent-glow" style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' }} />
            <div style={{ padding: '28px 28px 32px' }}>
              <div
                className="w-12 h-12 rounded-xl icon-container-glow flex items-center justify-center mb-4"
                style={{ background: 'rgba(139, 92, 246, 0.1)' }}
              >
                <svg className="w-6 h-6" style={{ color: '#8b5cf6' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h2 className="text-[17px] font-extrabold text-slate-900 group-hover:text-[#8b5cf6] transition-colors duration-200 mb-1.5" style={{ lineHeight: 1.35 }}>
                Tutorials
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed" style={{ opacity: 0.78 }}>
                Manage video tutorials shown on the public site.
              </p>
            </div>
          </Link>

          {/* View Public Site */}
          <Link
            to="/help"
            className="group block card-modern"
            style={{ padding: 0 }}
          >
            <div className="card-accent-glow" style={{ background: 'linear-gradient(135deg, #64748b, #94a3b8)' }} />
            <div style={{ padding: '28px 28px 32px' }}>
              <div
                className="w-12 h-12 rounded-xl icon-container-glow flex items-center justify-center mb-4"
                style={{ background: 'rgba(100, 116, 139, 0.1)' }}
              >
                <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <h2 className="text-[17px] font-extrabold text-slate-900 group-hover:text-slate-600 transition-colors duration-200 mb-1.5" style={{ lineHeight: 1.35 }}>
                View Public Site
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed" style={{ opacity: 0.78 }}>
                Open the public Help Center and Blog.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
