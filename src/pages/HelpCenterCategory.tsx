import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useI18n, localizedField } from '../lib/i18n';
import {
  getHcCategoryBySlug,
  getHcSectionsByCategory,
  type HcCategory,
  type HcSection,
} from '../lib/helpCenterApi';
import { useDataRefresh } from '../lib/dataEvents';
import { HelpCenterShell } from '../components/theme/HelpCenterShell';
import { ResourcesShell } from '../components/resources/ResourcesShell';
import { COLORS } from '../theme/colors';
import { categories as staticCategories, sections as staticSections } from '../data';

const COMING_SOON_SLUGS = ['for-families', 'for-schools-and-districts'];

function ComingSoon({ slug }: { slug: string }) {
  const { lang } = useI18n();

  const title = slug === 'for-families'
    ? (lang === 'ar' ? 'للعائلات' : 'For Families')
    : (lang === 'ar' ? 'للمدارس والمناطق التعليمية' : 'For Schools & Districts');

  return (
    <Layout>
      <HelpCenterShell noBg>
      <ResourcesShell>
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: COLORS.neutralLight }}>
            <Link to="/help-center" className="hover:opacity-80 transition-opacity">
              Help Center
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span style={{ color: COLORS.neutral }} className="font-medium">
              {title}
            </span>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-6 py-32">
          <div
            className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-500 mb-6"
            style={{ boxShadow: '0 2px 10px rgba(237,59,145,0.08)' }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h1
            className="text-3xl font-extrabold tracking-tight mb-3"
            style={{ color: COLORS.neutral }}
          >
            {lang === 'ar' ? 'قريبًا' : 'Coming Soon'}
          </h1>
          <p
            className="text-base"
            style={{ color: COLORS.neutralLight, maxWidth: 400 }}
          >
            {lang === 'ar' ? 'سيتوفر هذا القسم قريبًا.' : 'This section will be available soon.'}
          </p>
          <Link
            to="/help-center"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-700 transition-colors"
          >
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>{lang === 'ar' ? 'العودة إلى مركز المساعدة' : 'Back to Help Center'}</span>
          </Link>
        </div>
      </ResourcesShell>
      </HelpCenterShell>
    </Layout>
  );
}

function HelpCenterCategoryContent() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { lang } = useI18n();
  const [category, setCategory] = useState<HcCategory | null>(null);
  const [sections, setSections] = useState<HcSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = useCallback(() => {
    if (!categorySlug) return;
    setLoading(true);

    // Helper: convert static Category → HcCategory shape
    const toHcCategory = (sc: typeof staticCategories[0]): HcCategory => ({
      id: sc.id, slug: sc.slug, title: sc.title,
      title_ar: sc.title_ar ?? null, description: sc.description,
      description_ar: sc.description_ar ?? null, icon: sc.icon,
      sort_order: sc.order, is_published: true,
      created_at: '', updated_at: '',
    });

    // Helper: convert static Section → HcSection shape
    const toHcSection = (ss: typeof staticSections[0]): HcSection => ({
      id: ss.id, category_id: ss.categoryId, slug: ss.slug,
      title: ss.title, title_ar: ss.title_ar ?? null,
      description: ss.description, description_ar: ss.description_ar ?? null,
      icon: ss.icon ?? '', sort_order: ss.order,
      is_published: true, created_at: '', updated_at: '',
    });

    getHcCategoryBySlug(categorySlug)
      .then(async (cat) => {
        // Fallback: if Supabase has no category, try static data
        let effectiveCat: HcCategory | null = cat;
        if (!effectiveCat) {
          const sc = staticCategories.find(c => c.slug === categorySlug);
          if (sc) effectiveCat = toHcCategory(sc);
        }
        if (!effectiveCat) {
          setError('Category not found.');
          return;
        }
        setCategory(effectiveCat);

        let secs = await getHcSectionsByCategory(effectiveCat.id);

        // Fallback: if Supabase returned no sections, use static sections
        if (secs.length === 0) {
          const staticCat = staticCategories.find(c => c.slug === categorySlug);
          if (staticCat) {
            secs = staticSections
              .filter(s => s.categoryId === staticCat.id)
              .sort((a, b) => a.order - b.order)
              .map(toHcSection);
          }
        }
        setSections(secs);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [categorySlug]);

  useEffect(() => { fetchData(); }, [fetchData]);
  useDataRefresh(['hc_categories', 'hc_sections'], fetchData);

  const localized = (en: string, ar: string | null) =>
    localizedField(lang, en, ar);

  if (loading) {
    return (
      <Layout>
        <HelpCenterShell noBg>
        <ResourcesShell>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center" style={{ color: COLORS.neutralLight }}>
            Loading...
          </div>
        </ResourcesShell>
        </HelpCenterShell>
      </Layout>
    );
  }

  if (error || !category) {
    return (
      <Layout>
        <HelpCenterShell noBg>
        <ResourcesShell>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <p className="text-red-500 mb-4">{error || 'Category not found.'}</p>
            <Link to="/help-center" className="text-sm text-primary-500 hover:text-primary-700">
              Back to Help Center
            </Link>
          </div>
        </ResourcesShell>
        </HelpCenterShell>
      </Layout>
    );
  }

  return (
    <Layout>
      <HelpCenterShell noBg>
      <ResourcesShell>
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm" style={{ color: COLORS.neutralLight }}>
            <Link to="/help-center" className="hover:opacity-80 transition-opacity">
              Help Center
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span style={{ color: COLORS.neutral }} className="font-medium">
              {localized(category.title, category.title_ar)}
            </span>
          </nav>
        </div>

        {/* Category Header */}
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: COLORS.neutral }}
          >
            {localized(category.title, category.title_ar)}
          </h1>
          {category.description && (
            <p style={{ color: COLORS.neutralLight }}>
              {localized(category.description, category.description_ar)}
            </p>
          )}
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto px-6 pb-20">
          {sections.length === 0 ? (
            <div className="text-center py-16" style={{ color: COLORS.neutralLight }}>
              No sections in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  to={`/help-center/${category.slug}/${section.slug}`}
                  className="group block rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 0 0 1px rgba(9,30,66,0.06), 0 4px 24px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-[15px] font-semibold group-hover:text-primary-600 transition-colors mb-1"
                        style={{ color: COLORS.neutral }}
                      >
                        {localized(section.title, section.title_ar)}
                      </h3>
                      {section.description && (
                        <p className="text-sm line-clamp-2" style={{ color: COLORS.neutralLight }}>
                          {localized(section.description, section.description_ar)}
                        </p>
                      )}
                    </div>
                    <svg
                      className="w-5 h-5 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1"
                      style={{ color: COLORS.border }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </ResourcesShell>
      </HelpCenterShell>
    </Layout>
  );
}

export default function HelpCenterCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  if (categorySlug && COMING_SOON_SLUGS.includes(categorySlug)) {
    return <ComingSoon slug={categorySlug} />;
  }

  return <HelpCenterCategoryContent />;
}
