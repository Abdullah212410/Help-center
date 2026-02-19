import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { blogStore } from '../lib/blog';
import { useI18n } from '../lib/i18n';

export const BlogPreviewCard: React.FC = () => {
  const { isAdmin } = useAuth();
  const { t } = useI18n();
  const latest = useMemo(() => blogStore.getLatestPublished(), []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div
      className="card-modern fade-up"
      style={{
        padding: 0,
        overflow: 'hidden',
        animationDelay: '0.5s',
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .blog-preview-grid { grid-template-columns: 1fr 1fr !important; }
          .blog-preview-right { border-top: none !important; border-left: 1px solid #f1f5f9 !important; }
        }
      `}</style>
      <div
        className="blog-preview-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 0,
        }}
      >
        {/* ── Left side: intro ── */}
        <div style={{ padding: '28px 28px 24px' }}>
          {/* Blog icon + title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div
              className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 text-pink-600"
              style={{ width: 48, height: 48, flexShrink: 0 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900" style={{ lineHeight: 1.3 }}>
              {t('blogTitle')}
            </h3>
          </div>

          {/* Subtitle */}
          <p className="text-sm leading-relaxed" style={{ color: '#64748b', marginBottom: 24 }}>
            {t('blogSubtitle')}
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-200"
              style={{
                padding: '10px 22px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #ff4da6, #ED3B91)',
                boxShadow: '0 2px 8px rgba(237,59,145,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(237,59,145,0.35)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(237,59,145,0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {t('blogOpen')}
            </Link>

            {isAdmin && (
              <Link
                to="/blog/new"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{
                  padding: '10px 22px',
                  borderRadius: 12,
                  color: '#475569',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f1f5f9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {t('blogWritePost')}
              </Link>
            )}
          </div>
        </div>

        {/* ── Right side: latest article preview ── */}
        <div
          className="blog-preview-right"
          style={{
            padding: '28px 28px 24px',
            borderTop: '1px solid #f1f5f9',
          }}
        >
          {latest ? (
            <div>
              {/* Article title */}
              <Link
                to={`/blog/${latest.id}`}
                className="group"
                style={{ textDecoration: 'none' }}
              >
                <h4
                  className="text-[15px] font-bold text-slate-900 group-hover:text-[#ED3B91] transition-colors duration-200"
                  style={{ marginBottom: 8, lineHeight: 1.4 }}
                >
                  {latest.title}
                </h4>
              </Link>

              {/* Meta row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  marginBottom: 12,
                  flexWrap: 'wrap',
                }}
              >
                {/* Date */}
                <span
                  className="inline-flex items-center gap-1.5 text-xs"
                  style={{ color: '#94a3b8' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  {formatDate(latest.publishedAt)}
                </span>

                {/* Likes */}
                <span
                  className="inline-flex items-center gap-1 text-xs"
                  style={{ color: '#f472b6' }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  {latest.likes}
                </span>

                {/* Comments */}
                <span
                  className="inline-flex items-center gap-1 text-xs"
                  style={{ color: '#94a3b8' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  {latest.comments}
                </span>
              </div>

              {/* Excerpt */}
              {latest.excerpt && (
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: '#64748b',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {latest.excerpt}
                </p>
              )}
            </div>
          ) : (
            <div
              className="flex items-center justify-center text-sm"
              style={{ color: '#94a3b8', minHeight: 80 }}
            >
              {t('blogNoArticles')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
