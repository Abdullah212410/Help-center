import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import DOMPurify from 'dompurify';
import { Layout } from '../components/Layout';
import { useI18n, localizedField } from '../lib/i18n';
import { getHcArticleBySlug, type HcArticleWithSection } from '../lib/helpCenterApi';
import { useDataRefresh } from '../lib/dataEvents';
import { HelpCenterShell } from '../components/theme/HelpCenterShell';
import { ResourcesShell } from '../components/resources/ResourcesShell';
import { COLORS } from '../theme/colors';
import {
  categories as staticCategories,
  sections as staticSections,
  articles as staticArticles,
} from '../data';

/* ── HTML detection & sanitisation ──────────────────────────────── */

const HTML_TAG_RE = /<(?:img|h[1-4]|p|strong|em|ul|ol|li|br|blockquote|div|span)[\s>\/]/i;

function isHtmlContent(text: string): boolean {
  return HTML_TAG_RE.test(text);
}

function sanitize(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'img', 'h1', 'h2', 'h3', 'h4', 'p', 'strong', 'em', 'b', 'i',
      'ul', 'ol', 'li', 'br', 'a', 'blockquote', 'code', 'pre', 'hr',
      'span', 'div',
    ],
    ALLOWED_ATTR: ['src', 'alt', 'style', 'href', 'target', 'rel', 'class'],
    ADD_ATTR: ['target'],
  });
}

// After DOMPurify runs, force safe target/rel on external links
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName === 'A' && node.getAttribute('href')?.startsWith('http')) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener noreferrer');
  }
});

export default function HelpCenterArticle() {
  const { categorySlug, sectionSlug, articleSlug } = useParams<{
    categorySlug: string;
    sectionSlug: string;
    articleSlug: string;
  }>();
  const { lang } = useI18n();
  const [article, setArticle] = useState<HcArticleWithSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = useCallback(() => {
    if (!articleSlug) return;
    setLoading(true);
    getHcArticleBySlug(articleSlug)
      .then((art) => {
        if (art) {
          setArticle(art);
          return;
        }
        // Fallback: try static data
        const sa = staticArticles.find(a => a.slug === articleSlug);
        if (!sa) {
          setError('Article not found.');
          return;
        }
        const ss = staticSections.find(s => s.id === sa.sectionId);
        const sc = ss ? staticCategories.find(c => c.id === ss.categoryId) : null;
        const fallback: HcArticleWithSection = {
          id: sa.id,
          category_id: sc?.id ?? '',
          section_id: sa.sectionId,
          slug: sa.slug,
          title: sa.title,
          title_ar: sa.title_ar ?? null,
          excerpt: sa.summary,
          excerpt_ar: sa.summary_ar ?? null,
          content: sa.bodyMarkdown,
          content_ar: sa.bodyMarkdown_ar ?? null,
          summary: sa.summary,
          summary_ar: sa.summary_ar ?? null,
          body_markdown: sa.bodyMarkdown,
          body_markdown_ar: sa.bodyMarkdown_ar ?? null,
          sort_order: 0,
          is_published: true,
          tags: sa.tags,
          role: sa.role?.[0] ?? null,
          is_top: sa.isTop ?? false,
          is_featured: sa.isFeatured ?? false,
          created_at: '',
          updated_at: sa.updatedAt,
          hc_sections: ss ? {
            slug: ss.slug,
            title: ss.title,
            title_ar: ss.title_ar ?? null,
            hc_categories: sc ? { slug: sc.slug, title: sc.title, title_ar: sc.title_ar ?? null } : null,
          } : null,
        };
        setArticle(fallback);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [articleSlug]);

  useEffect(() => { fetchData(); }, [fetchData]);
  useDataRefresh(['hc_articles'], fetchData);

  const localized = (en: string, ar: string | null) =>
    localizedField(lang, en, ar);

  if (loading) {
    return (
      <Layout>
        <HelpCenterShell noBg>
        <ResourcesShell>
          <div className="max-w-3xl mx-auto px-6 py-20 text-center" style={{ color: COLORS.neutralLight }}>
            Loading...
          </div>
        </ResourcesShell>
        </HelpCenterShell>
      </Layout>
    );
  }

  if (error || !article) {
    return (
      <Layout>
        <HelpCenterShell noBg>
        <ResourcesShell>
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <p className="text-red-500 mb-4">{error || 'Article not found.'}</p>
            <Link
              to={categorySlug && sectionSlug ? `/help-center/${categorySlug}/${sectionSlug}` : '/help-center'}
              className="text-sm text-primary-500 hover:text-primary-700"
            >
              Back
            </Link>
          </div>
        </ResourcesShell>
        </HelpCenterShell>
      </Layout>
    );
  }

  const sec = article.hc_sections;
  const cat = sec?.hc_categories;
  const catSlug = cat?.slug || categorySlug || '';
  const catTitle = cat ? localized(cat.title, cat.title_ar) : 'Category';
  const secSlug = sec?.slug || sectionSlug || '';
  const secTitle = sec ? localized(sec.title, sec.title_ar) : 'Section';

  const body = localized(article.body_markdown, article.body_markdown_ar);
  const bodyIsHtml = useMemo(() => isHtmlContent(body), [body]);
  const sanitizedHtml = useMemo(
    () => (bodyIsHtml ? sanitize(body) : ''),
    [body, bodyIsHtml],
  );

  return (
    <Layout>
      <HelpCenterShell noBg>
      <ResourcesShell>
        {/* Breadcrumbs */}
        <div className="max-w-3xl mx-auto px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm flex-wrap" style={{ color: COLORS.neutralLight }}>
            <Link to="/help-center" className="hover:opacity-80 transition-opacity">
              Help Center
            </Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <Link to={`/help-center/${catSlug}`} className="hover:opacity-80 transition-opacity">
              {catTitle}
            </Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <Link to={`/help-center/${catSlug}/${secSlug}`} className="hover:opacity-80 transition-opacity">
              {secTitle}
            </Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            <span style={{ color: COLORS.neutral }} className="font-medium truncate">
              {localized(article.title, article.title_ar)}
            </span>
          </nav>
        </div>

        {/* Article — glass panel */}
        <article className="max-w-3xl mx-auto px-6 pt-8 pb-20">
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 0 0 1px rgba(9,30,66,0.06), 0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <h1
              className="text-3xl font-bold mb-3"
              style={{ color: COLORS.neutral }}
            >
              {localized(article.title, article.title_ar)}
            </h1>

            {article.summary && (
              <p className="mb-6" style={{ color: COLORS.neutralLight }}>
                {localized(article.summary, article.summary_ar)}
              </p>
            )}

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary-50 text-primary-500">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-primary-500 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm">
              {bodyIsHtml ? (
                <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {body}
                </ReactMarkdown>
              )}
            </div>

            {article.updated_at && (
              <div className="mt-12 pt-6" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <p className="text-xs" style={{ color: COLORS.neutralLight }}>
                  Last updated: {new Date(article.updated_at).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <Link
              to={`/help-center/${catSlug}/${secSlug}`}
              className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to {secTitle}
            </Link>
          </div>
        </article>
      </ResourcesShell>
      </HelpCenterShell>
    </Layout>
  );
}
