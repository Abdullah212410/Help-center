import React, { useMemo } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { VideoGrid, VideoItem } from '../components/VideoGrid';
import { useI18n } from '../lib/i18n';

/* ──────────────────────────────────────────────────────────
   STUDENT VIDEOS — URLs only. Titles & descriptions come
   from the i18n system (en.ts / ar.ts).
   To add a video: add the URL here AND the matching
   sVidNTitle / sVidNDesc keys in both translation files.
   ────────────────────────────────────────────────────────── */

const studentVideoUrls = [
  'https://www.youtube.com/watch?v=sOXoAbDDfLE&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0',
  'https://www.youtube.com/watch?v=Tfd5yAt2re0&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=2',
  'https://www.youtube.com/watch?v=fwPxu9cFMKo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=3',
  'https://www.youtube.com/watch?v=anNmaQbi5pg&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=4',
  'https://www.youtube.com/watch?v=peeqNm4KzKo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=5',
  'https://www.youtube.com/watch?v=C9ULabAtcWY&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=6',
  'https://www.youtube.com/watch?v=v_Kf8U8XbRo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=7',
] as const;

// i18n key pairs for each video (title key, description key)
const studentVideoKeys = [
  ['sVid1Title', 'sVid1Desc'],
  ['sVid2Title', 'sVid2Desc'],
  ['sVid3Title', 'sVid3Desc'],
  ['sVid4Title', 'sVid4Desc'],
  ['sVid5Title', 'sVid5Desc'],
  ['sVid6Title', 'sVid6Desc'],
  ['sVid7Title', 'sVid7Desc'],
] as const;

/* ──────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────── */

export default function StudentResourcesPage() {
  const { t, locale } = useI18n();

  const studentVideos: VideoItem[] = useMemo(
    () => studentVideoUrls.map((url, i) => ({
      url,
      title: t(studentVideoKeys[i][0]),
      description: t(studentVideoKeys[i][1]),
    })),
    [locale],
  );

  return (
    <Layout>
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        {/* Hero */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 25%, #f8fafc 50%, #f0f9ff 75%, #ecfeff 100%)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', borderRadius: '50%', opacity: 0.2,
              width: 320, height: 320, top: -60, right: -40,
              background: 'radial-gradient(circle, #08B8FB 0%, transparent 70%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, height: 96,
              background: 'linear-gradient(to bottom, transparent, #ffffff)',
            }}
          />

          <div style={{
            position: 'relative', zIndex: 10, maxWidth: 768,
            margin: '0 auto', padding: '80px 24px 96px', textAlign: 'center' as const,
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 9999, marginBottom: 24,
              background: 'rgba(8,184,251,0.08)', border: '1px solid rgba(8,184,251,0.15)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#08B8FB', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color: '#0284c7' }}>
                {t('resStudentBadge')}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
              letterSpacing: '-0.02em', lineHeight: 1.1, color: '#0f172a', marginBottom: 20,
            }}>
              {t('resStudentTitle')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #08B8FB, #0284c7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {t('resStudentTitleAccent')}
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#64748b',
              lineHeight: 1.7, maxWidth: 540, margin: '0 auto 32px',
            }}>
              {t('resStudentSubtitle')}
            </p>

            <Link
              to="/help/resources"
              className="text-sm font-medium text-[#08B8FB] hover:underline"
            >
              &larr; {t('backToResources')}
            </Link>
          </div>
        </section>

        {/* Video Guides */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 80px' }}>
          <VideoGrid videos={studentVideos} />
        </div>
      </div>
    </Layout>
  );
}
