import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getCategoryBySlug, getSectionBySlug, getArticlesBySectionId, getSectionsByCategoryId } from '../lib/api';
import { formatDate } from '../lib/utils';

export default function SectionPage() {
  const { categorySlug, sectionSlug } = useParams();
  const category = getCategoryBySlug(categorySlug || '');
  const section = getSectionBySlug(sectionSlug || '');

  if (!category || !section) {
    return <Navigate to="/404" replace />;
  }

  const articles = getArticlesBySectionId(section.id);
  const relatedSections = getSectionsByCategoryId(category.id).filter(s => s.id !== section.id);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Breadcrumbs items={[
          { label: category.title, path: `/help/category/${category.slug}` },
          { label: section.title, path: `/help/category/${category.slug}/section/${section.slug}` }
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <header className="mb-8 border-b border-slate-100 pb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{section.title}</h1>
              <p className="text-lg text-slate-600">{section.description}</p>
            </header>

            <div className="space-y-4">
              {articles.map(article => (
                <Link 
                  key={article.id} 
                  to={`/help/article/${article.slug}`}
                  className="block rounded-lg border border-slate-200 bg-white p-6 hover:border-primary-300 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-slate-900 hover:text-primary-700 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 mb-3">{article.summary}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>Updated {formatDate(article.updatedAt)}</span>
                    {article.isTop && <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Top Article</span>}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block space-y-8">
            <div className="rounded-lg bg-white border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Other Sections in {category.title}</h3>
              <ul className="space-y-2">
                {relatedSections.map(s => (
                  <li key={s.id}>
                    <Link 
                      to={`/help/category/${category.slug}/section/${s.slug}`}
                      className="text-sm text-slate-600 hover:text-primary-600 block py-1"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
