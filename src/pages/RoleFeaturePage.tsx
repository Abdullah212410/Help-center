import React, { useState } from 'react';
import { useParams, Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArticleGroup } from '../components/ArticleGroup';
import { useI18n } from '../lib/i18n';
import { FEATURE_CATEGORIES, ROLE_CATEGORY_MAP } from '../data';
import {
  getCategoryById,
  getSectionById,
  getGroupsBySectionId,
  getArticlesByGroupId,
  getArticlesBySectionId,
} from '../lib/api';
import { scrollToHash } from '../lib/utils';

export default function RoleFeaturePage() {
  const { t, localize } = useI18n();
  const { role, featureSlug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const feature = FEATURE_CATEGORIES.find(
    fc => fc.slug === featureSlug && fc.roles.includes(role as 'teacher' | 'student')
  );

  const categoryId = role ? ROLE_CATEGORY_MAP[role] : undefined;
  const category = categoryId ? getCategoryById(categoryId) : undefined;

  if (!feature || !category) {
    return <Navigate to="/404" replace />;
  }

  const section = getSectionById(feature.sectionId);

  if (!section) {
    return <Navigate to="/404" replace />;
  }

  // Data loading
  const groups = getGroupsBySectionId(section.id);
  const hasGroups = groups.length > 0;
  const ungroupedArticles = !hasGroups ? getArticlesBySectionId(section.id) : [];

  // Sidebar: all feature categories for this role
  const siblingFeatures = FEATURE_CATEGORIES.filter(
    fc => fc.roles.includes(role as 'teacher' | 'student')
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/help/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const PurpleSearchStrip = (
    <div className="w-full py-10">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <form onSubmit={handleSearch} className="relative w-full max-w-2xl glass-search">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-5 py-4 bg-transparent rounded-[20px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-300/50 transition-shadow text-[15px]"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );

  return (
    <Layout hero={PurpleSearchStrip}>
      <div className="glass-bg pb-20">

        {/* Breadcrumbs */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
          <nav className="text-sm text-slate-500 flex items-center gap-2">
            <Link to="/help" className="hover:text-purple-600 transition-colors">{t('stringHelpCenter')}</Link>
            <span className="text-slate-300 text-xs">›</span>
            <Link to={`/help/category/${category.slug}`} className="hover:text-purple-600 transition-colors">{localize(category, 'title')}</Link>
            <span className="text-slate-300 text-xs">›</span>
            <span className="text-slate-900 font-medium">{localize(feature, 'title')}</span>
          </nav>
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">

            {/* Left Sidebar Navigation */}
            <aside className="hidden lg:block">
              <div className="glass-sidebar p-6 sticky top-24" style={{ background: '#fff' }}>
                <h3 className="text-[15px] font-bold text-slate-900 mb-5">{localize(category, 'title')}</h3>
                <nav className="text-[15px]">
                  <ul className="space-y-1">
                    {siblingFeatures.map(fc => {
                      const isActive = fc.slug === feature.slug;

                      if (isActive) {
                        return (
                          <li key={fc.slug}>
                            <div className="sidebar-active flex items-center gap-2.5 font-bold text-slate-900 py-2.5 px-3 rounded-lg cursor-default mb-1">
                              <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                              {localize(fc, 'title')}
                            </div>
                            {hasGroups && (
                              <ul className="ml-5 mt-1 space-y-0.5 border-l-2 border-primary-200/60 pl-4 mb-3">
                                {groups.map(group => (
                                  <li key={group.id}>
                                    <a
                                      href={`#group-${group.id}`}
                                      className="block py-1.5 text-slate-500 hover:text-primary-700 transition-colors"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToHash(`group-${group.id}`);
                                      }}
                                    >
                                      {localize(group, 'title')}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        );
                      }

                      return (
                        <li key={fc.slug}>
                          <NavLink
                            to={`/help/${role}/${fc.slug}`}
                            className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white/40 transition-all group"
                          >
                            <svg className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                            {localize(fc, 'title')}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Right Main Content */}
            <main className="min-w-0">
              <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{localize(feature, 'title')}</h1>
              </header>

              {/* Mobile Nav */}
              <div className="lg:hidden mb-8 border border-slate-200 rounded p-4 bg-slate-50">
                <div className="font-bold mb-2 text-slate-700">{localize(category, 'title')}</div>
                <select
                  className="w-full p-2 border border-slate-300 rounded"
                  value={`/help/${role}/${feature.slug}`}
                  onChange={(e) => {
                    const path = e.target.value;
                    if (path) navigate(path);
                  }}
                >
                  {siblingFeatures.map(fc => (
                    <option key={fc.slug} value={`/help/${role}/${fc.slug}`}>
                      {fc.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Article list */}
              {hasGroups ? (
                <div className="w-full divide-y divide-slate-200/70">
                  {groups.map((group) => {
                    const groupArticles = getArticlesByGroupId(group.id);
                    return (
                      <div key={group.id} className="py-8 first:pt-0">
                        <ArticleGroup
                          id={`group-${group.id}`}
                          group={group}
                          articles={groupArticles}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : ungroupedArticles.length > 0 ? (
                <div className="bg-transparent rounded-lg border border-slate-200 shadow-sm">
                  <ul className="divide-y divide-slate-100">
                    {ungroupedArticles.map(article => (
                      <li key={article.id}>
                        <Link
                          to={`/help/article/${article.slug}`}
                          className="block p-6 hover:bg-slate-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-primary-600 mb-1">{localize(article, 'title')}</h3>
                          <p className="text-slate-500 text-sm">{localize(article, 'summary')}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="text-slate-500 py-8">
                  {t('noContent')}
                </div>
              )}
            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
}
