import React, { useState } from 'react';
import { useAuth } from '../lib/auth';

/**
 * Floating debug widget visible ONLY in development mode.
 * Shows current user role + email, and a logout button.
 * Roles can only be changed from the database — no role-switching here.
 */
export const DevDebugWidget: React.FC = () => {
  const isDev = import.meta.env.DEV;
  const { user, loading, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(true);

  // Only render in development
  if (!isDev) return null;

  const roleBadgeColors: Record<string, { bg: string; text: string; border: string }> = {
    admin:   { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
    teacher: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
    student: { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' },
    family:  { bg: '#fefce8', text: '#ca8a04', border: '#fef08a' },
  };

  const badge = user ? (roleBadgeColors[user.role] || roleBadgeColors.student) : null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 99999,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Collapsed: small pill */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: 10,
            border: '1px solid rgba(226,232,240,0.6)',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: 600,
            color: '#475569',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          DEV
        </button>
      )}

      {/* Expanded panel */}
      {!collapsed && (
        <div
          style={{
            width: 280,
            borderRadius: 16,
            border: '1px solid rgba(226,232,240,0.5)',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderBottom: '1px solid rgba(226,232,240,0.4)',
              background: 'rgba(248,250,252,0.8)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#334155', letterSpacing: '0.04em' }}>
                DEV DEBUG
              </span>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#94a3b8',
                fontSize: 16,
                lineHeight: 1,
                padding: 2,
              }}
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: 14 }}>
            {loading ? (
              <p style={{ fontSize: 12, color: '#94a3b8' }}>Loading session...</p>
            ) : !user ? (
              <div>
                <p style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>No active session</p>
                <p style={{ fontSize: 11, color: '#94a3b8' }}>Sign in to see user info here.</p>
              </div>
            ) : (
              <div>
                {/* Role badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '3px 10px',
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    background: badge?.bg,
                    color: badge?.text,
                    border: `1px solid ${badge?.border}`,
                    marginBottom: 10,
                  }}
                >
                  {user.role}
                </div>

                {/* User info rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: '#94a3b8', fontWeight: 500 }}>Name</span>
                    <span style={{ color: '#334155', fontWeight: 600 }}>{user.name || '—'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: '#94a3b8', fontWeight: 500 }}>Email</span>
                    <span
                      style={{
                        color: '#334155',
                        fontWeight: 600,
                        maxWidth: 160,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {user.email}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: '#94a3b8', fontWeight: 500 }}>User ID</span>
                    <span
                      style={{
                        color: '#94a3b8',
                        fontFamily: 'monospace',
                        fontSize: 10,
                        maxWidth: 140,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {user.id}
                    </span>
                  </div>
                </div>

                {/* Note */}
                <p
                  style={{
                    fontSize: 10,
                    color: '#cbd5e1',
                    marginTop: 10,
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                  }}
                >
                  Role changes require a direct DB update in profiles.role
                </p>

                {/* Logout */}
                <button
                  onClick={logout}
                  style={{
                    width: '100%',
                    marginTop: 10,
                    padding: '7px 0',
                    borderRadius: 8,
                    border: '1px solid #fecaca',
                    background: '#fef2f2',
                    color: '#dc2626',
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
