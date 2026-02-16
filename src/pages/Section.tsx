import React from 'react';
import { useParams, Link, Navigate, NavLink } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ArticleGroup } from '../components/ArticleGroup';
import { 
  getCategoryBySlug, 
  getSectionBySlug, 
  getGroupsBySectionId, 
  getArticlesByGroupId, 
  getArticlesBySectionId,
  getSectionsByCategoryId 
} from '../lib/api';

export default function SectionPage() {
  const { categorySlug, sectionSlug } = useParams();
  const category = getCategoryBySlug(categorySlug || '');
  const section = getSectionBySlug(sectionSlug || '');

  if (!category || !section) {
    return <Navigate to="/404" replace />;
  }

  // Data loading
  const groups = getGroupsBySectionId(section.id);
  const siblingSections = getSectionsByCategoryId(category.id);
  
  // If groups exist, we render grouped view. Otherwise, we fallback to a simple list (for other sections without groups)
  const hasGroups = groups.length > 0;
  
  // Articles fallback if no groups defined (legacy support for other sections in this demo)
  const ungroupedArticles = !hasGroups ? getArticlesBySectionId(section.id) : [];

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen">
        {/* Top Breadcrumbs Container */}
        <div className="bg-white border-b border-slate-200">
           <div className="container mx-auto px-4 md:px-6 py-3">
              <Breadcrumbs items={[
                { label: 'String Help Center', path: '/help' },
                { label: category.title, path: `/help/category/${category.slug}` },
                { label: section.title, path: `/help/category/${category.slug}/section/${section.slug}` }
              ]} />
           </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
            
            {/* Left Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-24">
              <nav className="space-y-1">
                 <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {category.title}
                 </h3>
                 {siblingSections.map(sibSection => {
                   const isActive = sibSection.id === section.id;
                   return (
                     <NavLink
                       key={sibSection.id}
                       to={`/help/category/${category.slug}/section/${sibSection.slug}`}
                       className={({ isActive }) => `
                         block px-3 py-2 rounded-md text-sm font-medium transition-colors
                         ${isActive 
                           ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500' 
                           : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm'}
                       `}
                     >
                       {sibSection.title}
                     </NavLink>
                   );
                 })}
              </nav>
            </aside>

            {/* Main Content Area */}
            <main className="min-w-0">
               <div className="mb-8">
                 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{section.title}</h1>
                 <p className="text-lg text-slate-600 leading-relaxed">{section.description}</p>
               </div>

               {/* Mobile Section Nav (Visible only on mobile) */}
               <div className="lg:hidden mb-8">
                  <details className="group border border-slate-200 rounded-lg bg-transparent">
                      <summary className="flex items-center justify-between px-4 py-3 font-medium text-slate-900 cursor-pointer list-none">
                         <span>Navigate: {section.title}</span>
                         <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </summary>
                      <nav className="border-t border-slate-200 p-2 max-h-60 overflow-y-auto">
                        {siblingSections.map(sibSection => (
                          <NavLink
                            key={sibSection.id}
                            to={`/help/category/${category.slug}/section/${sibSection.slug}`}
                            className={({ isActive }) => `
                              block px-3 py-2 rounded-md text-sm
                              ${isActive ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-slate-600'}
                            `}
                          >
                            {sibSection.title}
                          </NavLink>
                        ))}
                      </nav>
                  </details>
               </div>

               {/* Content: Groups as Accordions */}
               {hasGroups ? (
                 <div className="space-y-4">
                    {groups.map((group, index) => {
                      const groupArticles = getArticlesByGroupId(group.id);
                      // Expand first group by default
                      return (
                        <ArticleGroup 
                          key={group.id} 
                          group={group} 
                          articles={groupArticles} 
                          defaultOpen={index === 0}
                        />
                      );
                    })}
                 </div>
               ) : (
                 /* Fallback for sections without groups */
                 <div className="bg-transparent rounded-lg border border-slate-200 shadow-sm">
                    <ul className="divide-y divide-slate-100">
                      {ungroupedArticles.map(article => (
                        <li key={article.id}>
                          <Link 
                            to={`/help/article/${article.slug}`}
                            className="block p-6 hover:bg-slate-50 transition-colors"
                          >
                             <h3 className="text-lg font-semibold text-slate-900 text-primary-600 mb-1">{article.title}</h3>
                             <p className="text-slate-500 text-sm">{article.summary}</p>
                          </Link>
                        </li>
                      ))}
                      {ungroupedArticles.length === 0 && (
                        <li className="p-6 text-slate-500 italic">No articles found in this section.</li>
                      )}
                    </ul>
                 </div>
               )}
            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
}