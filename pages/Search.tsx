import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { searchArticles } from '../lib/api';
import { SearchResult } from '../types';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [sort, setSort] = React.useState<'relevance' | 'updated'>('relevance');

  React.useEffect(() => {
    const rawResults = searchArticles(query);
    if (sort === 'updated') {
        rawResults.sort((a, b) => new Date(b.article.updatedAt).getTime() - new Date(a.article.updatedAt).getTime());
    }
    setResults(rawResults);
  }, [query, sort]);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Search results for "{query}"
            </h1>
            <p className="text-slate-500 mb-8">
                Found {results.length} articles
            </p>

            {results.length > 0 && (
                <div className="flex justify-end mb-4">
                    <select 
                        value={sort} 
                        onChange={(e) => setSort(e.target.value as any)}
                        className="text-sm border-none bg-transparent font-medium text-slate-600 focus:ring-0"
                    >
                        <option value="relevance">Sort by: Relevance</option>
                        <option value="updated">Sort by: Updated</option>
                    </select>
                </div>
            )}

            <div className="space-y-6">
                {results.map(({ article, matches }) => (
                    <div key={article.id} className="block group">
                        <Link to={`/help/article/${article.slug}`}>
                            <h2 className="text-xl font-semibold text-primary-600 group-hover:underline mb-1">
                                {article.title}
                            </h2>
                        </Link>
                        <div className="flex gap-2 mb-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-slate-600 text-sm mb-2">{article.summary}</p>
                        {matches.length > 0 && (
                            <p className="text-xs text-slate-400 italic">Matched in: {matches.slice(0, 3).join(', ')}</p>
                        )}
                    </div>
                ))}

                {results.length === 0 && (
                    <div className="bg-slate-50 rounded-lg p-8 text-center border border-slate-200">
                        <p className="text-slate-600 mb-4">We couldn't find any articles matching your search.</p>
                        <p className="text-sm text-slate-500">Try searching for keywords like "Billing", "API", or "Account".</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </Layout>
  );
}
