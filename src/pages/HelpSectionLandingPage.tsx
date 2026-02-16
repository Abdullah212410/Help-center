import React, { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArticleGroup } from '../components/ArticleGroup';
import { 
  getCategoryBySlug, 
  getSectionBySlug, 
  getGroupsBySectionId, 
  getArticlesByGroupId, 
  getArticlesBySectionId,
  getSectionsByCategoryId 
} from '../lib/api';

export default function HelpSectionLandingPage() {
  const { categorySlug, sectionSlug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const category = getCategoryBySlug(categorySlug || '');
  const section = getSectionBySlug(sectionSlug || '');

  if (!category || !section) {
    return <Navigate to="/404" replace />;
  }

  // Data loading
  const groups = getGroupsBySectionId(section.id);
  const siblingSections = getSectionsByCategoryId(category.id);
  
  // Articles fallback if no groups defined (legacy support)
  const hasGroups = groups.length > 0;
  const ungroupedArticles = !hasGroups ? getArticlesBySectionId(section.id) : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/help/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // 1. Purple Search Strip Component
  const PurpleSearchStrip = (
    <div className="w-full bg-purple-50 border-b border-purple-100 py-10">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
           <input
             type="text"
             className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
             placeholder="Search..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </form>
      </div>
    </div>
  );

  return (
    <Layout hero={PurpleSearchStrip}>
      <div className="bg-white min-h-screen pb-20">
        
        {/* 2. Breadcrumbs Line - "String Help Center > Category > Section" */}
        <div className="container mx-auto px-4 md:px-6 py-6">
           <nav className="text-sm text-slate-500 flex items-center gap-2">
              <Link to="/help" className="hover:text-purple-600 transition-colors">String Help Center</Link>
              <span className="text-slate-300 text-xs">›</span>
              <Link to={`/help/category/${category.slug}`} className="hover:text-purple-600 transition-colors">{category.title}</Link>
              <span className="text-slate-300 text-xs">›</span>
              <span className="text-slate-900">{section.title}</span>
           </nav>
        </div>

        {/* 3. Main Layout: Sidebar + Content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
            
            {/* Left Sidebar Navigation */}
            <aside className="hidden lg:block">
              <nav className="text-[15px]">
                 <ul className="space-y-1">
                    {siblingSections.map(sibSection => {
                      const isActive = sibSection.id === section.id;
                      
                      if (isActive) {
                        // Active Section with Expanded Groups (Tree view)
                        return (
                          <li key={sibSection.id}>
                            <div className="flex items-center gap-2 font-bold text-slate-900 py-1.5 cursor-default">
                               {/* Down Chevron indicating expansion */}
                               <svg className="w-3 h-3 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                               {sibSection.title}
                            </div>
                            
                            {hasGroups && (
                                <ul className="ml-5 mt-1 space-y-1 border-l border-slate-200 pl-4 mb-3">
                                    {groups.map(group => (
                                        <li key={group.id}>
                                          <a
                                              href={`#group-${group.id}`}
                                              className="block py-1 text-slate-600 hover:text-slate-900 hover:underline decoration-purple-300 underline-offset-4"
                                              onClick={(e) => {
                                                  e.preventDefault();
                                                  document.getElementById(`group-${group.id}`)?.scrollIntoView({ behavior: 'smooth' });
                                              }}
                                          >
                                              {group.title}
                                          </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                          </li>
                        );
                      }

                      // Inactive Sibling Section
                      return (
                        <li key={sibSection.id}>
                          <Link
                            to={`/help/category/${category.slug}/section/${sibSection.slug}`}
                            className="flex items-center gap-2 py-1.5 text-slate-600 hover:text-slate-900 group"
                          >
                             {/* Right Chevron indicating collapsed */}
                             <svg className="w-3 h-3 text-slate-400 group-hover:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                             {sibSection.title}
                          </Link>
                        </li>
                      );
                    })}
                 </ul>
              </nav>
            </aside>

            {/* Right Main Content */}
            <main className="min-w-0">
               <header className="mb-10">
                 <h1 className="text-4xl font-bold text-slate-900 tracking-tight">{section.title}</h1>
               </header>

               {/* Mobile Nav Fallback */}
               <div className="lg:hidden mb-8 border border-slate-200 rounded p-4 bg-slate-50">
                  <div className="font-bold mb-2 text-slate-700">Section Menu</div>
                  <select 
                    className="w-full p-2 border border-slate-300 rounded"
                    onChange={(e) => {
                       const path = e.target.value;
                       if (path) window.location.hash = path;
                    }}
                  >
                    <option value="">Jump to topic...</option>
                    {groups.map(g => <option key={g.id} value={`#/help/category/${category.slug}/section/${section.slug}#group-${g.id}`}>{g.title}</option>)}
                  </select>
               </div>

               {/* Accordion List */}
               {hasGroups ? (
                 <div className="space-y-4">
                    {groups.map((group, index) => {
                      const groupArticles = getArticlesByGroupId(group.id);
                      return (
                        <ArticleGroup 
                          key={group.id} 
                          id={`group-${group.id}`}
                          group={group} 
                          articles={groupArticles} 
                          defaultOpen={index === 0}
                        />
                      );
                    })}
                 </div>
               ) : (
                 <div className="bg-purple-50 rounded-lg p-8 text-center text-slate-500">
                    No grouped content available.
                 </div>
               )}
            </main>

          </div>
        </div>
      </div>
    </Layout>
  );
}