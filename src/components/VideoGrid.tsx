import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useI18n } from '../lib/i18n';

/* ──────────────────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────────────────── */

export interface VideoItem {
  title: string;
  description?: string;
  url: string; // YouTube watch/youtu.be/shorts URL
}

/* ──────────────────────────────────────────────────────────
   YOUTUBE HELPERS
   ────────────────────────────────────────────────────────── */

const YT_ID_RE = /^[A-Za-z0-9_-]{11}$/;

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);

    // youtube.com/watch?v=ID
    if ((u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') && u.pathname === '/watch') {
      const id = u.searchParams.get('v');
      if (id && YT_ID_RE.test(id)) return id;
    }

    // youtube.com/shorts/ID
    const shortsMatch = u.pathname.match(/^\/shorts\/([A-Za-z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];

    // youtu.be/ID
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1).split('/')[0];
      if (id && YT_ID_RE.test(id)) return id;
    }
  } catch {
    // invalid URL
  }
  return null;
}

function embedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

function thumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/* ──────────────────────────────────────────────────────────
   VIDEO MODAL
   ────────────────────────────────────────────────────────── */

interface VideoModalProps {
  videoId: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, title, closeLabel, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on overlay click (not on the player itself)
  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.75)',
        padding: 16,
        animation: 'vgFadeIn 200ms ease',
      }}
    >
      {/* Inline keyframes — injected once */}
      <style>{`
        @keyframes vgFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vgSlideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 900,
          borderRadius: 16,
          overflow: 'hidden',
          background: '#000',
          animation: 'vgSlideUp 250ms ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={closeLabel}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            fontSize: 20,
            lineHeight: '36px',
            textAlign: 'center' as const,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 16:9 responsive container */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={embedUrl(videoId)}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────
   VIDEO CARD
   ────────────────────────────────────────────────────────── */

interface VideoCardProps {
  video: VideoItem;
  videoId: string | null;
  badgeLabel: string;
  invalidLabel: string;
  onPlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, videoId, badgeLabel, invalidLabel, onPlay }) => {
  const isInvalid = !videoId;

  return (
    <div
      onClick={isInvalid ? undefined : onPlay}
      role={isInvalid ? undefined : 'button'}
      tabIndex={isInvalid ? undefined : 0}
      onKeyDown={isInvalid ? undefined : (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPlay(); } }}
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
        isInvalid
          ? 'border-red-200 opacity-60 cursor-not-allowed'
          : 'border-slate-100 hover:shadow-lg hover:border-slate-200 cursor-pointer'
      }`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#f1f5f9', overflow: 'hidden' }}>
        {videoId ? (
          <>
            <img
              src={thumbnailUrl(videoId)}
              alt={video.title}
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Play icon overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.15)',
                transition: 'background 200ms',
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444',
            fontWeight: 600,
            fontSize: 14,
          }}>
            {invalidLabel}
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '16px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* YouTube badge */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.04em',
            color: '#dc2626',
            width: 'fit-content',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#dc2626">
            <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
          {badgeLabel}
        </span>

        <h3 style={{ fontSize: 16, fontWeight: 600, color: '#0f172a', lineHeight: 1.35 }}>
          {video.title}
        </h3>

        {video.description && (
          <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, margin: 0 }}>
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────
   VIDEO GRID (exported reusable component)
   ────────────────────────────────────────────────────────── */

interface VideoGridProps {
  videos: VideoItem[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  const { t } = useI18n();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState('');

  const openVideo = useCallback((videoId: string, title: string) => {
    setActiveVideoId(videoId);
    setActiveTitle(title);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideoId(null);
    setActiveTitle('');
  }, []);

  return (
    <>
      {/* Section heading */}
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
        {t('videoGuidesHeading')}
      </h2>
      <p style={{ fontSize: 15, color: '#64748b', marginBottom: 24 }}>
        {t('videoGuidesSubtitle')}
      </p>

      {/* Responsive grid: 1 → 2 → 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => {
          const vid = extractVideoId(video.url);
          return (
            <VideoCard
              key={i}
              video={video}
              videoId={vid}
              badgeLabel={t('videoBadgeYoutube')}
              invalidLabel={t('videoInvalidLink')}
              onPlay={() => vid && openVideo(vid, video.title)}
            />
          );
        })}
      </div>

      {/* Modal */}
      {activeVideoId && (
        <VideoModal
          videoId={activeVideoId}
          title={activeTitle}
          closeLabel={t('videoCloseLabel')}
          onClose={closeVideo}
        />
      )}
    </>
  );
};
