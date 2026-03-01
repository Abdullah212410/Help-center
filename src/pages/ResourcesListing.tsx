import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getResourceVideos, getLocalizedText, HcVideo } from '../lib/resourcesApi';
import { TutorialCarousel } from '../components/resources/TutorialCarousel';
import { VideoPlayerModal } from '../components/resources/VideoPlayerModal';
import type { ResourceVideo } from '../data/resourceVideos';
import { useI18n } from '../lib/i18n';

// ─── Constants ────────────────────────────────────────────────

const VALID_AUDIENCES = ['teacher', 'student'] as const;
type Audience = (typeof VALID_AUDIENCES)[number];

// ─── Main page ────────────────────────────────────────────────

export default function ResourcesListing() {
  const { audience: audienceRaw } = useParams<{ audience: string }>();
  const audience = (audienceRaw ?? '').toLowerCase().trim();
  const { t, lang } = useI18n();

  const AUDIENCE_META: Record<Audience, { title: string; accent: string; subtitle: string }> = {
    teacher: {
      title: t('resTeacherTitle'),
      accent: t('resTeacherTitleAccent'),
      subtitle: t('resTeacherSubtitle'),
    },
    student: {
      title: t('resStudentTitle'),
      accent: t('resStudentTitleAccent'),
      subtitle: t('resStudentSubtitle'),
    },
  };

  const [videos, setVideos] = useState<HcVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [playerVideo, setPlayerVideo] = useState<ResourceVideo | null>(null);

  const isValid = VALID_AUDIENCES.includes(audience as Audience);

  useEffect(() => {
    console.log('[Resources] audience param:', JSON.stringify(audienceRaw), '→ normalized:', JSON.stringify(audience), '| valid:', isValid);
  }, [audienceRaw, audience, isValid]);

  const fetchData = useCallback(async () => {
    if (!isValid) return;
    setLoading(true);
    setError('');
    setErrorDetail('');

    try {
      const data = await getResourceVideos(audience as Audience);
      setVideos(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const code = (err as any)?.code ?? '';
      const detail = code ? `${code}: ${msg}` : msg;
      console.error('[Resources] fetch error:', detail, err);
      setError(t('resErrorMessage'));
      setErrorDetail(detail);
    } finally {
      setLoading(false);
    }
  }, [audience, isValid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ── Invalid audience ──
  if (!isValid) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-red-600 font-medium text-lg mb-4">
            {t('resInvalidAudience')}: &quot;{audienceRaw}&quot;
          </p>
          <Link to="/resources" className="text-sm font-medium text-primary-600 hover:text-primary-700 underline">
            {t('backToResources')}
          </Link>
        </div>
      </Layout>
    );
  }

  const meta = AUDIENCE_META[audience as Audience];

  // Map HcVideo → ResourceVideo for existing carousel/card/modal components
  const mapped: ResourceVideo[] = videos.map((v) => ({
    id: String(v.id),
    url: v.youtube_url,
    title: getLocalizedText(v, 'title', lang),
    description: getLocalizedText(v, 'description', lang),
  }));

  return (
    <Layout>
      <div className="rls-root">
        {/* ═══ Background decoration layers ═══ */}

        {/* Flowing wave lines */}
        <svg
          className="rls-waves"
          viewBox="0 0 1440 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rlsW1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="0.35" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="0.65" stopColor="#a78bfa" stopOpacity="0.35" />
              <stop offset="1" stopColor="#e879f9" stopOpacity="0.50" />
            </linearGradient>
            <linearGradient id="rlsW2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#67e8f9" stopOpacity="0.30" />
              <stop offset="0.4" stopColor="#818cf8" stopOpacity="0.20" />
              <stop offset="1" stopColor="#f0abfc" stopOpacity="0.30" />
            </linearGradient>
          </defs>
          <path d="M-60 180Q200 120,460 190T940 150T1500 200" stroke="url(#rlsW1)" strokeWidth="1.6" opacity=".70" />
          <path d="M-60 200Q240 140,500 210T980 170T1500 220" stroke="url(#rlsW1)" strokeWidth="1.2" opacity=".55" />
          <path d="M-60 220Q180 160,440 230T920 190T1500 240" stroke="url(#rlsW1)" strokeWidth="1.8" opacity=".60" />
          <path d="M-60 240Q260 180,520 250T1000 210T1500 260" stroke="url(#rlsW1)" strokeWidth="1.0" opacity=".45" />
          <path d="M-60 260Q200 200,460 270T940 230T1500 280" stroke="url(#rlsW1)" strokeWidth="1.4" opacity=".55" />
          <path d="M-60 285Q250 225,510 295T990 255T1500 305" stroke="url(#rlsW2)" strokeWidth="0.9" opacity=".35" />
          <path d="M-60 305Q190 245,450 315T930 275T1500 325" stroke="url(#rlsW2)" strokeWidth="1.1" opacity=".28" />
          <path d="M-60 325Q260 265,520 335T1000 295T1500 345" stroke="url(#rlsW2)" strokeWidth="0.7" opacity=".22" />
        </svg>

        {/* Glowing spheres */}
        <div className="rls-sphere rls-sphere--blue" aria-hidden="true" />
        <div className="rls-sphere rls-sphere--teal" aria-hidden="true" />
        <div className="rls-sphere rls-sphere--pink-lg" aria-hidden="true" />
        <div className="rls-sphere rls-sphere--pink-sm" aria-hidden="true" />

        {/* Dot-grid accents */}
        <div className="rls-dots rls-dots--left" aria-hidden="true">
          <svg width="100" height="140" viewBox="0 0 100 140" fill="none" style={{ position: 'absolute', inset: 0 }}>
            <line x1="12" y1="24" x2="24" y2="36" stroke="rgba(129,140,248,0.25)" strokeWidth="1" />
            <line x1="24" y1="36" x2="12" y2="48" stroke="rgba(129,140,248,0.20)" strokeWidth="1" />
            <line x1="24" y1="60" x2="36" y2="72" stroke="rgba(129,140,248,0.18)" strokeWidth="1" />
            <line x1="36" y1="72" x2="48" y2="60" stroke="rgba(129,140,248,0.15)" strokeWidth="1" />
            <circle cx="12" cy="24" r="2.5" fill="rgba(129,140,248,0.4)" />
            <circle cx="24" cy="36" r="3" fill="rgba(129,140,248,0.45)" />
            <circle cx="12" cy="48" r="2" fill="rgba(129,140,248,0.35)" />
            <circle cx="24" cy="60" r="2.5" fill="rgba(129,140,248,0.30)" />
            <circle cx="36" cy="72" r="3" fill="rgba(129,140,248,0.40)" />
            <circle cx="48" cy="60" r="2" fill="rgba(129,140,248,0.25)" />
            <circle cx="36" cy="48" r="2" fill="rgba(129,140,248,0.20)" />
            <circle cx="48" cy="84" r="2.5" fill="rgba(129,140,248,0.30)" />
            <circle cx="12" cy="72" r="2" fill="rgba(129,140,248,0.22)" />
            <circle cx="36" cy="96" r="2" fill="rgba(129,140,248,0.20)" />
            <circle cx="24" cy="108" r="2.5" fill="rgba(129,140,248,0.25)" />
            <circle cx="48" cy="108" r="2" fill="rgba(129,140,248,0.18)" />
          </svg>
        </div>
        <div className="rls-dots rls-dots--right" aria-hidden="true">
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" style={{ position: 'absolute', inset: 0 }}>
            <circle cx="80" cy="10" r="2" fill="rgba(244,114,182,0.30)" />
            <circle cx="70" cy="22" r="2.5" fill="rgba(244,114,182,0.35)" />
            <circle cx="56" cy="32" r="2" fill="rgba(244,114,182,0.28)" />
            <circle cx="42" cy="38" r="2.5" fill="rgba(244,114,182,0.32)" />
            <circle cx="30" cy="48" r="2" fill="rgba(244,114,182,0.25)" />
            <circle cx="20" cy="60" r="2.5" fill="rgba(244,114,182,0.30)" />
            <circle cx="14" cy="74" r="2" fill="rgba(244,114,182,0.22)" />
            <circle cx="68" cy="38" r="1.5" fill="rgba(244,114,182,0.20)" />
            <circle cx="50" cy="52" r="2" fill="rgba(244,114,182,0.25)" />
            <circle cx="36" cy="64" r="1.5" fill="rgba(244,114,182,0.18)" />
            <circle cx="62" cy="54" r="1.5" fill="rgba(244,114,182,0.15)" />
          </svg>
        </div>

        {/* ═══ Content ═══ */}
        <div className="rls-content">

          {/* ══ Hero Section ══ */}
          <div className="rls-hero">
            <h1 className="rls-title">
              <span className="rls-title-gradient">{meta.title}</span>
            </h1>
            <p className="rls-subtitle">{meta.subtitle}</p>

            <Link to="/resources" className="rls-cta-btn">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <span>{t('backToResources')}</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="rls-divider" />

          {/* ══ Video Guides Section ══ */}
          <div className="rls-videos">
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 0' }}>
                <div className="w-8 h-8 border-2 border-slate-200 border-t-[#6366f1] rounded-full animate-spin" />
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '40px 24px' }}>
                <p style={{ fontSize: 14, color: '#ef4444', marginBottom: 8 }}>{error}</p>
                {import.meta.env.DEV && errorDetail && (
                  <pre style={{ fontSize: 12, color: '#f87171', background: '#fef2f2', borderRadius: 8, padding: 12, maxWidth: 500, margin: '0 auto 16px', textAlign: 'left', overflow: 'auto', maxHeight: 120, whiteSpace: 'pre-wrap' }}>
                    {errorDetail}
                  </pre>
                )}
                <button
                  onClick={fetchData}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#ef4444',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  {t('resRetry')}
                </button>
              </div>
            ) : mapped.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 24px', color: '#94a3b8' }}>
                <svg
                  style={{ width: 48, height: 48, margin: '0 auto 16px', opacity: 0.5 }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <p style={{ fontSize: 15 }}>{t('resNoVideos')}</p>
              </div>
            ) : (
              <TutorialCarousel
                videos={mapped}
                onPlayVideo={setPlayerVideo}
                heading={t('videoGuidesHeading')}
                subtitle={t('videoGuidesSubtitle')}
              />
            )}
          </div>
        </div>

        {/* ═══════════ Scoped Styles ═══════════ */}
        <style>{`
/* ────────────────────────────────────
   Root — cosmic gradient background
   (matches ResourcesLanding home page)
   ──────────────────────────────────── */
.rls-root {
  position: relative;
  min-height: calc(100vh - 72px);
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      #070a1f 0%,
      #0c1033 6%,
      #121440 12%,
      #1a1856 18%,
      #251e6d 24%,
      #332c84 30%,
      #463c9c 36%,
      #5c50b2 42%,
      #7868c6 48%,
      #9684d6 53%,
      #b3a2e2 58%,
      #cec0ec 63%,
      #e0d8f2 68%,
      #ece6f6 73%,
      #f3eff9 80%,
      #f8f5fc 88%,
      #fbf9fd 100%
    );
}

/* Subtle noise texture */
.rls-root::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.018;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
  pointer-events: none;
}

/* ────────────────────────────────────
   Wave SVG
   ──────────────────────────────────── */
.rls-waves {
  position: absolute;
  top: 8%;
  left: 0;
  width: 100%;
  height: 55%;
  z-index: 1;
  pointer-events: none;
}

/* ────────────────────────────────────
   Glowing spheres
   ──────────────────────────────────── */
.rls-sphere {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}
.rls-sphere--blue {
  width: 130px; height: 130px;
  top: 8%; left: 4%;
  background: radial-gradient(circle at 38% 32%, #7dd3fc 0%, #38bdf8 30%, rgba(56,189,248,0.25) 65%, transparent 100%);
  box-shadow: 0 0 70px 10px rgba(56,189,248,0.30);
  filter: blur(1.5px);
}
.rls-sphere--teal {
  width: 36px; height: 36px;
  top: 6%; right: 18%;
  background: radial-gradient(circle at 40% 35%, #99f6e4 0%, #2dd4bf 60%, transparent 100%);
  box-shadow: 0 0 18px rgba(45,212,191,0.35);
  filter: blur(0.5px);
}
.rls-sphere--pink-lg {
  width: 150px; height: 150px;
  top: 30%; right: 1%;
  background: radial-gradient(circle at 45% 38%, #f9a8d4 0%, #ec4899 35%, rgba(236,72,153,0.25) 65%, transparent 100%);
  box-shadow: 0 0 80px 12px rgba(236,72,153,0.28);
  filter: blur(2px);
}
.rls-sphere--pink-sm {
  width: 44px; height: 44px;
  bottom: 32%; right: 7%;
  background: radial-gradient(circle at 40% 35%, #fbcfe8 0%, #f472b6 55%, transparent 100%);
  box-shadow: 0 0 24px rgba(244,114,182,0.30);
  filter: blur(0.5px);
}

/* ────────────────────────────────────
   Dot-grid accents
   ──────────────────────────────────── */
.rls-dots {
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.rls-dots--left {
  width: 100px; height: 140px;
  top: 44%; left: 3%;
}
.rls-dots--right {
  width: 90px; height: 90px;
  top: 42%; right: 3%;
}

/* ────────────────────────────────────
   Content layout
   ──────────────────────────────────── */
.rls-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Hero ── */
.rls-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 24px 40px;
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
}

.rls-title {
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 22px;
  text-shadow: 0 2px 40px rgba(0,0,0,0.25);
}

.rls-title-gradient {
  background: linear-gradient(135deg, #f0abfc 0%, #ec4899 40%, #f472b6 70%, #fda4af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.rls-subtitle {
  font-size: clamp(0.95rem, 1.8vw, 1.12rem);
  color: rgba(255,255,255,0.65);
  text-align: center;
  line-height: 1.75;
  margin: 0 0 36px;
  max-width: 540px;
}

/* Gradient divider */
.rls-divider {
  width: 46px;
  height: 3px;
  border-radius: 4px;
  background: linear-gradient(90deg, #ec4899, #a855f7);
  margin-bottom: 52px;
}

/* CTA Button — frosted glass pill */
.rls-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 36px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}
.rls-cta-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 100%);
  border-color: rgba(255,255,255,0.32);
  box-shadow: 0 8px 36px rgba(0,0,0,0.18);
}

/* Flip arrow for RTL */
[dir="rtl"] .rls-cta-btn svg {
  transform: rotate(180deg);
}

/* ── Video section ── */
.rls-videos {
  width: 100%;
  padding: 0 0 88px;
}

/* ── Video heading glass panel ──
   Override TutorialCarousel's inline heading styles
   so text is readable over the cosmic gradient.       */
.rls-videos > section > div:first-child {
  position: relative;
  max-width: 560px;
  margin-left: auto !important;
  margin-right: auto !important;
  margin-bottom: 40px !important;
  padding: 28px 36px 24px !important;
  border-radius: 20px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
}
.rls-videos > section > div:first-child h2 {
  color: #fff !important;
  font-size: clamp(1.6rem, 3.2vw, 2.2rem) !important;
  font-weight: 800 !important;
  line-height: 1.25 !important;
  text-shadow: 0 2px 16px rgba(0,0,0,0.30);
  margin-bottom: 10px !important;
}
.rls-videos > section > div:first-child p {
  color: rgba(255,255,255,0.82) !important;
  font-size: 15px !important;
  line-height: 1.65 !important;
  text-shadow: 0 1px 8px rgba(0,0,0,0.18);
}

/* ────────────────────────────────────
   Responsive
   ──────────────────────────────────── */
@media (max-width: 640px) {
  .rls-hero {
    padding: 52px 16px 32px;
  }
  .rls-divider {
    margin-bottom: 36px;
  }
  .rls-sphere--pink-lg,
  .rls-sphere--pink-sm {
    display: none;
  }
  .rls-dots {
    display: none;
  }
}
@media (max-width: 520px) {
  .rls-hero {
    padding: 44px 16px 28px;
  }
}
        `}</style>
      </div>

      {/* ══ Video Player Modal ══ */}
      {playerVideo && (
        <VideoPlayerModal
          video={playerVideo}
          onClose={() => setPlayerVideo(null)}
        />
      )}
    </Layout>
  );
}
