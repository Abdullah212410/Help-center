import { useI18n } from '../lib/i18n';

/* ═══════════════════════════════════════════════════
   Suggested Videos — 4 curated YouTube cards
   ═══════════════════════════════════════════════════ */

const SUGGESTED_VIDEOS = [
  {
    id: 'sv-general',
    videoId: 'fwPxu9cFMKo',
    titleKey: 'suggestedVideos.general.title' as const,
    descKey: 'suggestedVideos.general.description' as const,
    url: 'https://www.youtube.com/watch?v=fwPxu9cFMKo',
  },
  {
    id: 'sv-chat-ai',
    videoId: 'peeqNm4KzKo',
    titleKey: 'videos.chatWithAI' as const,
    descKey: 'suggestedVideos.chatAI.description' as const,
    url: 'https://youtu.be/peeqNm4KzKo',
  },
  {
    id: 'sv-add-students',
    videoId: 'GzLir4E8Vh4',
    titleKey: 'videos.addingStudents' as const,
    descKey: 'suggestedVideos.addStudents.description' as const,
    url: 'https://youtu.be/GzLir4E8Vh4',
  },
  {
    id: 'sv-create-series',
    videoId: 'idPiwcXdyMg',
    titleKey: 'videos.creatingSeries' as const,
    descKey: 'suggestedVideos.createSeries.description' as const,
    url: 'https://youtu.be/idPiwcXdyMg',
  },
];

export default function TutorialsSection() {
  const { t } = useI18n();

  return (
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
          {t('suggestedVideos.title' as any)}
        </h3>
        <div className="flex-1 h-px shimmer-line" style={{ height: 1 }} />
      </div>

      {/* Card grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
        style={{ gap: 24 }}
      >
        {SUGGESTED_VIDEOS.map((v) => (
          <a
            key={v.id}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all duration-200 hover:shadow-lg hover:border-slate-200 hover:-translate-y-0.5 flex flex-col"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {/* Thumbnail + play overlay */}
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={`https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`}
                alt={t(v.titleKey as any)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              {/* Centered play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 52,
                    height: 52,
                    background: 'rgba(237, 59, 145, 0.9)',
                    boxShadow: '0 4px 20px rgba(237, 59, 145, 0.4)',
                  }}
                >
                  <svg className="w-5 h-5 text-white" style={{ marginLeft: 2 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h4 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-tight">
                {t(v.titleKey as any)}
              </h4>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: '#64748b' }}>
                {t(v.descKey as any)}
              </p>
              {/* Watch button */}
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-colors"
                style={{ color: '#ED3B91' }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {t('suggestedVideos.watchBtn' as any)}
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
