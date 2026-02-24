import React, { useMemo } from 'react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { VideoGrid, VideoItem } from '../components/VideoGrid';
import { useI18n } from '../lib/i18n';

/* ──────────────────────────────────────────────────────────
   TEACHER VIDEOS — URLs only. Titles & descriptions come
   from the i18n system (en.ts / ar.ts).
   To add a video: add the URL here AND the matching
   tVidNTitle / tVidNDesc keys in both translation files.
   ────────────────────────────────────────────────────────── */

const teacherVideoUrls = [
  'https://www.youtube.com/watch?v=GzLir4E8Vh4&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i',
  'https://www.youtube.com/watch?v=pQfqDQx8iK0&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=2',
  'https://www.youtube.com/watch?v=sD18A7RboNw&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=3',
  'https://www.youtube.com/watch?v=u4vfaboX27Q&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=4',
  'https://www.youtube.com/watch?v=61pdyunvGBs&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=5',
  'https://www.youtube.com/watch?v=GLQRd3ytVUc&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=6',
  'https://www.youtube.com/watch?v=_qCykYlTBDw&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=7',
  'https://www.youtube.com/watch?v=N73ASQyVOb0&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=8',
  'https://www.youtube.com/watch?v=E2cRWtKIJCk&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=9',
  'https://www.youtube.com/watch?v=idPiwcXdyMg&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=10',
  'https://www.youtube.com/watch?v=5oIGW2mUI1g&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=11',
] as const;

// i18n key pairs for each video (title key, description key)
const teacherVideoKeys = [
  ['tVid1Title', 'tVid1Desc'],
  ['tVid2Title', 'tVid2Desc'],
  ['tVid3Title', 'tVid3Desc'],
  ['tVid4Title', 'tVid4Desc'],
  ['tVid5Title', 'tVid5Desc'],
  ['tVid6Title', 'tVid6Desc'],
  ['tVid7Title', 'tVid7Desc'],
  ['tVid8Title', 'tVid8Desc'],
  ['tVid9Title', 'tVid9Desc'],
  ['tVid10Title', 'tVid10Desc'],
  ['tVid11Title', 'tVid11Desc'],
] as const;

/* ──────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────── */

export default function TeacherResourcesPage() {
  const { t, locale } = useI18n();

  const teacherVideos: VideoItem[] = useMemo(
    () => teacherVideoUrls.map((url, i) => ({
      url,
      title: t(teacherVideoKeys[i][0]),
      description: t(teacherVideoKeys[i][1]),
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
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #f8fafc 50%, #eff6ff 75%, #f0f9ff 100%)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', borderRadius: '50%', opacity: 0.2,
              width: 320, height: 320, top: -60, right: -40,
              background: 'radial-gradient(circle, #ED3B91 0%, transparent 70%)',
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
              background: 'rgba(237,59,145,0.08)', border: '1px solid rgba(237,59,145,0.15)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ED3B91', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color: '#ED3B91' }}>
                {t('resTeacherBadge')}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
              letterSpacing: '-0.02em', lineHeight: 1.1, color: '#0f172a', marginBottom: 20,
            }}>
              {t('resTeacherTitle')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ED3B91, #c026a8)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {t('resTeacherTitleAccent')}
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#64748b',
              lineHeight: 1.7, maxWidth: 540, margin: '0 auto 32px',
            }}>
              {t('resTeacherSubtitle')}
            </p>

            <Link
              to="/help/resources"
              className="text-sm font-medium text-[#ED3B91] hover:underline"
            >
              &larr; {t('backToResources')}
            </Link>
          </div>
        </section>

        {/* Video Guides */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 80px' }}>
          <VideoGrid videos={teacherVideos} />
        </div>
      </div>
    </Layout>
  );
}
