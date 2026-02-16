import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../components/Layout';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { getArticleBySlug, getSectionById, getCategoryById, getRelatedArticles } from '../lib/api';
import { formatDate, calculateReadingTime } from '../lib/utils';
import { Section, Category } from '../types';

export default function ArticlePage() {
  const { articleSlug } = useParams();
  const article = getArticleBySlug(articleSlug || '');
  const [section, setSection] = React.useState<Section | undefined>(undefined);
  const [category, setCategory] = React.useState<Category | undefined>(undefined);
  const [helpful, setHelpful] = React.useState<boolean | null>(null);
  const [toc, setToc] = React.useState<{ id: string; text: string; level: number }[]>([]);

  // Load parent data
  React.useEffect(() => {
    if (article) {
      const s = getSectionById(article.sectionId);
      setSection(s);
      if (s) {
        setCategory(getCategoryById(s.categoryId));
      }

      // Track recent view
      const recent = JSON.parse(localStorage.getItem('string_recent_views') || '[]');
      const newRecent = [article.id, ...recent.filter((id: string) => id !== article.id)].slice(0, 10);
      localStorage.setItem('string_recent_views', JSON.stringify(newRecent));

      // Load vote
      const vote = localStorage.getItem(`vote_${article.id}`);
      if (vote === 'yes') setHelpful(true);
      if (vote === 'no') setHelpful(false);
    }
  }, [article]);

  // Generate TOC
  React.useEffect(() => {
    // Simple heuristic to grab headings after render. 
    // In a real app with SRR, we might parse the AST.
    // Here we wait a tick for Markdown to render
    setTimeout(() => {
        const headings = Array.from(document.querySelectorAll('.markdown-body h2, .markdown-body h3'));
        const tocData = headings.map((h, i) => {
            const id = `heading-${i}`;
            h.id = id; // mutation to add anchor
            return {
                id,
                text: h.textContent || '',
                level: h.tagName === 'H2' ? 2 : 3
            };
        });
        setToc(tocData);
    }, 100);
  }, [article]);

  if (!article || !section || !category) {
    if (!article) return <Navigate to="/404" replace />;
    return null; // Loading state technically
  }

  const handleVote = (isHelpful: boolean) => {
    setHelpful(isHelpful);
    localStorage.setItem(`vote_${article.id}`, isHelpful ? 'yes' : 'no');
    // Here you would send to analytics/API
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const related = getRelatedArticles(article.id, section.id);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Breadcrumbs items={[
          { label: category.title, path: `/help/category/${category.slug}` },
          { label: section.title, path: `/help/category/${category.slug}/section/${section.slug}` },
          { label: article.title, path: '' } // Current
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-9">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Updated {formatDate(article.updatedAt)}
                </div>
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {calculateReadingTime(article.bodyMarkdown)} min read
                </div>
              </div>
            </header>

            <div className="markdown-body prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-primary-600">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    // Custom components could go here
                }}
              >
                {article.bodyMarkdown}
              </ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Was this article helpful?</h3>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => handleVote(true)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-colors ${helpful === true ? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    >
                        👍 Yes
                    </button>
                    <button 
                        onClick={() => handleVote(false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md border text-sm font-medium transition-colors ${helpful === false ? 'bg-red-50 border-red-200 text-red-700' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                    >
                        👎 No
                    </button>
                    <div className="flex-1"></div>
                    <button onClick={copyLink} className="text-sm text-primary-600 hover:underline">
                        Copy link
                    </button>
                </div>
            </div>

            {related.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {related.map(r => (
                            <Link 
                                key={r.id} 
                                to={`/help/article/${r.slug}`}
                                className="p-4 rounded-lg border border-slate-200 bg-white hover:border-primary-300 transition-colors"
                            >
                                <h4 className="font-medium text-slate-900">{r.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
          </article>

          {/* Right Sidebar (TOC) */}
          <aside className="hidden lg:block lg:col-span-3">
             <div className="sticky top-24">
                <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">On this page</h4>
                <nav className="space-y-1 border-l border-slate-200">
                    {toc.map(item => (
                        <a 
                            key={item.id}
                            href={`#${item.id}`}
                            className={`block border-l-2 py-1 pl-4 text-sm transition-colors ${item.level === 3 ? 'ml-4' : ''} border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {item.text}
                        </a>
                    ))}
                    {toc.length === 0 && <p className="text-sm text-slate-400 pl-4">No subsections</p>}
                </nav>
             </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
