import React, { useState, useEffect, useRef, useCallback } from 'react';
import { extractYouTubeId } from '../../lib/tutorialsApi';
import type { ResourceVideo } from '../../data/resourceVideos';

/* ═══════════════════════════════════════════════════
   VideoPlayerModal — centered YouTube player modal.
   Uses enablejsapi=1 + postMessage for proper
   stop/pause control. key={videoId} on iframe
   forces a clean remount when switching videos.
   ═══════════════════════════════════════════════════ */

interface VideoPlayerModalProps {
  video: ResourceVideo;
  onClose: () => void;
}

/** Send a YouTube IFrame API command via postMessage. */
function ytCommand(iframe: HTMLIFrameElement | null, func: string) {
  try {
    iframe?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: '' }),
      '*',
    );
  } catch {
    /* cross-origin error — iframe will be destroyed on unmount anyway */
  }
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = extractYouTubeId(video.url);
  const [copied, setCopied] = useState(false);

  /** Stop the YouTube player and close the modal. */
  const handleClose = useCallback(() => {
    ytCommand(iframeRef.current, 'stopVideo');
    onClose();
  }, [onClose]);

  /* ── Escape key ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [handleClose]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* ── Stop video on unmount (safety net) ── */
  useEffect(() => {
    return () => { ytCommand(iframeRef.current, 'stopVideo'); };
  }, []);

  /* ── Click outside closes ── */
  const handleOverlay = useCallback((e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose();
  }, [handleClose]);

  /* ── Copy link ── */
  const handleCopy = useCallback(async () => {
    const url = video.url;
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [video.url]);

  if (!videoId) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlay}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(6px)',
        padding: 24,
        animation: 'resFadeIn 200ms ease',
      }}
    >
      <style>{`
        @keyframes resFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes resSlideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>

      <div style={{
        position: 'relative', width: '100%', maxWidth: 900,
        borderRadius: 20, overflow: 'hidden', background: '#000',
        animation: 'resSlideUp 250ms ease',
        boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
      }}>
        {/*
          Button bar — sits ABOVE the iframe via absolute positioning + z-index.
          Pointer-events on the wrapper are set to none so only the buttons capture clicks.
        */}
        <div style={{
          position: 'absolute', top: 0, right: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', gap: 8,
          padding: 12,
          pointerEvents: 'none',
        }}>
          {/* Copy link button */}
          <div style={{ position: 'relative', pointerEvents: 'auto' }}>
            <button
              onClick={handleCopy}
              aria-label="Copy video link"
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: 'none',
                background: '#fff',
                color: copied ? '#10b981' : '#475569',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.25)'; }}
            >
              {copied ? (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>

            {/* "Copied!" tooltip */}
            {copied && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%',
                transform: 'translateX(-50%)',
                marginTop: 6,
                background: '#10b981', color: '#fff',
                padding: '4px 12px', borderRadius: 8,
                fontSize: 12, fontWeight: 600,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}>
                Copied!
              </div>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{
              width: 40, height: 40, borderRadius: '50%',
              border: 'none', background: 'rgba(255,255,255,0.15)',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
              pointerEvents: 'auto',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.30)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 16:9 YouTube embed — key forces remount when video changes */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            key={videoId}
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%', border: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
};
