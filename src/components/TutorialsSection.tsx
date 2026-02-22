import React, { useState, useEffect, useCallback } from 'react';
import { getPublishedTutorials, extractYouTubeId } from '../lib/tutorialsApi';
import { useDataRefresh } from '../lib/dataEvents';
import type { Tutorial } from '../types';

/* ═══════════════════════════════════════════════════
   Public Tutorials Section — card grid + video modal
   Matches the provided UI: thumbnail, title, desc, Watch btn
   ═══════════════════════════════════════════════════ */

export default function TutorialsSection() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const fetchTutorials = useCallback(() => {
    getPublishedTutorials()
      .then(setTutorials)
      .catch((err) => {
        console.error('[TutorialsSection] Failed to load:', err);
        setError(err.message || 'Failed to load tutorials.');
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => { fetchTutorials(); }, [fetchTutorials]);
  useDataRefresh(['tutorials'], fetchTutorials);

  const openVideo = (youtubeUrl: string) => {
    const vid = extractYouTubeId(youtubeUrl);
    if (vid) setActiveVideoId(vid);
  };

  const closeVideo = () => setActiveVideoId(null);

  if (loading) {
    return (
      <section className="mx-auto px-6" style={{ maxWidth: 1200, paddingTop: 32, paddingBottom: 48 }}>
        <div className="text-center py-12 text-slate-400 text-sm">Loading tutorials...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto px-6" style={{ maxWidth: 1200, paddingTop: 32, paddingBottom: 48 }}>
        <div className="text-center py-12 text-red-400 text-sm">{error}</div>
      </section>
    );
  }

  if (tutorials.length === 0) return null;

  return (
    <>
      <section className="mx-auto px-6" style={{ maxWidth: 1200, paddingTop: 32, paddingBottom: 48 }}>
        {/* Section header */}
        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px shimmer-line" style={{ height: 1 }} />
          <h3 className="text-lg font-bold text-slate-800 whitespace-nowrap flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ background: 'rgba(237,59,145,0.08)' }}
            >
              <svg className="w-4 h-4" style={{ color: '#ED3B91' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>
            Video Tutorials
          </h3>
          <div className="flex-1 h-px shimmer-line" style={{ height: 1 }} />
        </div>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
          style={{ gap: 24 }}
        >
          {tutorials.map((t) => (
            <div
              key={t.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-200 hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Thumbnail with Watch overlay */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                {t.thumbnail_url ? (
                  <img
                    src={t.thumbnail_url}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                  </div>
                )}
                {/* Watch badge (top right) */}
                <button
                  onClick={() => openVideo(t.youtube_url)}
                  className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(51,65,85,0.75)', backdropFilter: 'blur(4px)' }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-tight">
                  {t.title}
                </h4>
                {t.description && (
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#64748b' }}>
                    {t.description}
                  </p>
                )}
                {/* Watch link */}
                <button
                  onClick={() => openVideo(t.youtube_url)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-colors"
                  style={{ color: '#ED3B91' }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VIDEO MODAL — unmounts iframe on close to stop playback
          ══════════════════════════════════════════════════════ */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal body */}
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Tutorial Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
