import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../components/Layout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  getArticleBySlug, 
  getSectionById, 
  getCategoryById, 
  getGroupsBySectionId, 
  getArticlesByGroupId,
  getArticlesBySectionId
} from '../lib/api';
import { formatDate } from '../lib/utils';
import { Section, Category, Group, Article } from '../types';

export default function ArticlePage() {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug || '');
  
  // Data State
  const [section, setSection] = useState<Section | undefined>(undefined);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [sectionGroups, setSectionGroups] = useState<Group[]>([]);
  
  // Navigation State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // TOC State
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  // Load Context Data
  useEffect(() => {
    if (article) {
      const s = getSectionById(article.sectionId);
      setSection(s);
      if (s) {
        setCategory(getCategoryById(s.categoryId));
        setSectionGroups(getGroupsBySectionId(s.id));
      }
    }
  }, [article]);

  // Generate TOC & Set up Observer
  useEffect(() => {
    if (!article) return;
    
    // Give Markdown a tick to render
    setTimeout(() => {
      const headings = Array.from(document.querySelectorAll('.markdown-body h2, .markdown-body h3'));
      const tocData = headings.map((h, i) => {
        const id = h.id || `heading-${i}`;
        h.id = id; // Ensure ID exists
        return {
          id,
          text: h.textContent || '',
          level: h.tagName === 'H2' ? 2 : 3
        };
      });
      setToc(tocData);

      // Setup Intersection Observer for Highlight
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      }, { rootMargin: '-80px 0px -60% 0px' });

      headings.forEach((h) => observer.current?.observe(h));
    }, 150);

    return () => observer.current?.disconnect();
  }, [article?.id]); // Re-run when article changes

  if (!article || !section || !category) {
    if (!article) return <Navigate to="/404" replace />;
    return null; // Loading
  }

  // --- Render Helpers ---

  // Custom H2/H3 for ReactMarkdown to ensure IDs are stable if we wanted to auto-gen them there, 
  // but we are doing DOM-based ID assignment in useEffect for simplicity with the existing content.
  const MarkdownComponents = {
    h2: ({node, ...props}: any) => <h2 className="text-2xl font-bold mt-8 mb-4 scroll-mt-32" {...props} />,
    h3: ({node, ...props}: any) => <h3 className="text-xl font-semibold mt-6 mb-3 scroll-mt-32" {...props} />,
    ul: ({node, ...props}: any) => <ul className="list-disc pl-5 space-y-2 mb-4" {...props} />,
    li: ({node, ...props}: any) => <li className="text-slate-700 leading-relaxed" {...props} />,
    p: ({node, ...props}: any) => <p className="mb-4 text-slate-700 leading-relaxed" {...props} />,
  };

  return (
    <Layout>
      {/* VERIFICATION LABEL */}
      <div className="bg-purple-600 text-white text-xs font-bold text-center py-1 uppercase tracking-widest sticky top-16 z-[60]">
        NEW ARTICLE LAYOUT ACTIVE
      </div>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
          
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden lg:block pt-6 pb-2">
            <Breadcrumbs items={[
              { label: 'Help Center', path: '/help' },
              { label: category.title, path: `/help/category/${category.slug}` },
              { label: section.title, path: `/help/category/${category.slug}/section/${section.slug}` }
            ]} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-8 relative items-start pt-6 lg:pt-2">

            {/* --- LEFT SIDEBAR: NAVIGATION --- */}
            <aside className={`
              fixed inset-0 z-50 bg-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:block lg:z-0 lg:h-auto lg:bg-transparent overflow-y-auto
              ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              {/* Mobile Close Button */}
              <div className="lg:hidden p-4 border-b flex justify-between items-center bg-slate-50">
                 <span className="font-bold text-slate-900">Articles</span>
                 <button onClick={() => setMobileMenuOpen(false)}>
                   <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>

              <div className="p-4 lg:p-0 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar">
                
                {/* Section Title */}
                <div className="mb-4">
                  <Link 
                    to={`/help/category/${category.slug}/section/${section.slug}`}
                    className="flex items-center gap-2 font-bold text-slate-900 hover:text-purple-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    {section.title}
                  </Link>
                </div>

                {/* Groups Tree */}
                <div className="space-y-1">
                  {sectionGroups.map(group => {
                    // Check if this group contains the current article
                    const groupArticles = getArticlesByGroupId(group.id);
                    const isCurrentGroup = group.id === article.groupId;
                    
                    if (isCurrentGroup) {
                      // Expanded State
                      return (
                        <div key={group.id} className="mb-2">
                           <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-bold text-slate-800">
                             <svg className="w-3 h-3 text-slate-400 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                             {group.title}
                           </div>
                           <div className="ml-2 pl-3 border-l border-slate-200 space-y-1 mt-1">
                              {groupArticles.map(a => {
                                const isCurrentArticle = a.id === article.id;
                                return (
                                  <Link
                                    key={a.id}
                                    to={`/help/article/${a.slug}`}
                                    className={`block text-[13px] py-1.5 pl-3 pr-2 rounded-r-md leading-snug transition-colors ${
                                      isCurrentArticle 
                                      ? 'text-purple-700 font-semibold bg-purple-50 border-l-2 border-purple-600 -ml-[1px]' 
                                      : 'text-slate-600 hover:text-purple-600 hover:bg-slate-50'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {a.title}
                                  </Link>
                                );
                              })}
                           </div>
                        </div>
                      );
                    } else {
                      // Collapsed State
                      return (
                        <div key={group.id}>
                          <button 
                             className="w-full flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-slate-600 hover:text-purple-600 hover:bg-slate-50 rounded-md transition-colors text-left"
                             onClick={() => {
                               // Normally this might toggle, but per screenshot/requirement it seems simpler to just link or have them collapsed. 
                               // If we want to navigate to that group, we'd need an anchor or route. 
                               // For now, let's just assume we want to scroll to it on section page or expand it here.
                               // Let's redirect to the first article of that group for simplicity or just expand in place (requires state).
                               // Given requirement "Clicking any item navigates to that article", let's link to the first article of the group.
                               if (groupArticles.length > 0) {
                                  window.location.hash = `/help/article/${groupArticles[0].slug}`;
                               }
                             }}
                          >
                             <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                             {group.title}
                          </button>
                        </div>
                      );
                    }
                  })}

                  {/* Fallback for ungrouped articles if any */}
                  {sectionGroups.length === 0 && getArticlesBySectionId(section.id).map(a => (
                     <Link
                        key={a.id}
                        to={`/help/article/${a.slug}`}
                        className={`block text-sm py-1.5 px-2 rounded-md ${a.id === article.id ? 'bg-purple-50 text-purple-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {a.title}
                     </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* --- MOBILE NAV TOGGLES --- */}
            <div className="lg:hidden col-span-1 flex gap-2 mb-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm text-slate-700 font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                Menu
              </button>
              {toc.length > 0 && (
                <button 
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 p-3 rounded-lg shadow-sm text-slate-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  On this page
                </button>
              )}
            </div>

            {/* --- CENTER: ARTICLE CONTENT --- */}
            <main className="min-w-0">
              {/* Mobile TOC Dropdown */}
              {mobileTocOpen && toc.length > 0 && (
                 <div className="lg:hidden mb-6 bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <h4 className="font-bold text-purple-900 mb-2 text-sm uppercase">Table of Contents</h4>
                    <ul className="space-y-2">
                       {toc.map(item => (
                         <li key={item.id}>
                           <a 
                             href={`#${item.id}`} 
                             className="block text-sm text-purple-700 hover:underline"
                             onClick={() => setMobileTocOpen(false)}
                           >
                             {item.text}
                           </a>
                         </li>
                       ))}
                    </ul>
                 </div>
              )}

              <article className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline">
                 <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">{article.title}</h1>
                 
                 {/* Intro / Summary */}
                 <p className="text-lg text-slate-600 leading-relaxed mb-8 border-b border-slate-100 pb-8">
                   {article.summary}
                 </p>

                 {/* Main Markdown Body */}
                 <div className="markdown-body">
                   <ReactMarkdown remarkPlugins={[remarkGfm]} components={MarkdownComponents}>
                     {article.bodyMarkdown}
                   </ReactMarkdown>
                 </div>
              </article>

              <div className="mt-16 pt-8 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center">
                 <span>Last updated: {formatDate(article.updatedAt)}</span>
              </div>
            </main>

            {/* --- RIGHT SIDEBAR: TABLE OF CONTENTS --- */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 pl-4">
                 <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Table of Contents</h4>
                 <nav className="relative">
                   {/* Vertical line track */}
                   <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-100 rounded-full"></div>
                   
                   <ul className="space-y-0 relative">
                      {toc.map(item => {
                        const isActive = activeId === item.id;
                        return (
                          <li key={item.id} className="relative">
                             {/* Active Indicator Line */}
                             {isActive && (
                               <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-600 rounded-full z-10 transition-all duration-300"></div>
                             )}
                             
                             <a 
                               href={`#${item.id}`}
                               className={`
                                 block py-1.5 pl-4 text-sm transition-all duration-200
                                 ${item.level === 3 ? 'ml-2' : ''}
                                 ${isActive 
                                   ? 'text-purple-700 font-bold bg-purple-50 rounded-r-md' 
                                   : 'text-slate-500 hover:text-purple-600 hover:bg-slate-50 rounded-r-md'}
                               `}
                               onClick={(e) => {
                                 e.preventDefault();
                                 document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                               }}
                             >
                               {item.text}
                             </a>
                          </li>
                        );
                      })}
                   </ul>
                   
                   {toc.length === 0 && (
                     <p className="text-xs text-slate-400 pl-4 italic">No sections detected.</p>
                   )}
                 </nav>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </Layout>
  );
}