import React, { useMemo } from 'react';
import { Layout } from '../components/Layout';
import { ResourceSection } from '../components/ResourceSection';
import { sectionsMeta, getResourcesBySection } from '../resourcesData';

export default function ResourcesPage() {
  const groupedResources = useMemo(() => getResourcesBySection(), []);

  const scrollToResources = () => {
    const el = document.getElementById('resource-sections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Layout>
      {/* Page wrapper — explicit stacking context with guaranteed dimensions */}
      <div style={{ position: 'relative', zIndex: 1, display: 'block', minHeight: '100vh' }}>

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
            ══════════════════════════════════════════════════════ */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #f8fafc 50%, #eff6ff 75%, #f0f9ff 100%)',
          }}
        >
          {/* Subtle decorative circles */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.2,
              width: 320,
              height: 320,
              top: -60,
              right: -40,
              background: 'radial-gradient(circle, #ED3B91 0%, transparent 70%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              opacity: 0.1,
              width: 240,
              height: 240,
              bottom: -40,
              left: -30,
              background: 'radial-gradient(circle, #08B8FB 0%, transparent 70%)',
            }}
          />

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 96,
              background: 'linear-gradient(to bottom, transparent, #ffffff)',
            }}
          />

          {/* Hero content — inline styles guarantee layout regardless of Tailwind CDN timing */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: 768,
              margin: '0 auto',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 80,
              paddingBottom: 96,
              textAlign: 'center' as const,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 16px',
                borderRadius: 9999,
                marginBottom: 24,
                background: 'rgba(237,59,145,0.08)',
                border: '1px solid rgba(237,59,145,0.15)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#ED3B91',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' as const, color: '#ED3B91' }}>
                Resources
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#0f172a',
                marginBottom: 20,
              }}
            >
              String{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #ED3B91, #c026a8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Teaching Resources
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#64748b',
                lineHeight: 1.7,
                maxWidth: 540,
                margin: '0 auto 40px',
              }}
            >
              Explore tutorials, classroom materials, and professional development resources designed to help educators succeed with String.
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToResources}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 28px',
                borderRadius: 12,
                color: '#ffffff',
                fontWeight: 600,
                fontSize: 16,
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #ff4da6, #ED3B91)',
                boxShadow: '0 4px 14px rgba(237,59,145,0.3)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(237,59,145,0.4)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(237,59,145,0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Browse Resources
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            RESOURCE SECTIONS
            ══════════════════════════════════════════════════════ */}
        <div
          id="resource-sections"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 64,
            paddingBottom: 80,
            scrollMarginTop: 90,
          }}
        >
          {sectionsMeta.map((meta) => (
            <ResourceSection
              key={meta.key}
              meta={meta}
              resources={groupedResources.get(meta.key) || []}
            />
          ))}
        </div>

      </div>
    </Layout>
  );
}
