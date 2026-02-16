import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getCategoryBySlug, getSectionsByCategoryId, getFeaturedArticlesByCategory } from '../lib/api';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug || '');
  
  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const sections = getSectionsByCategoryId(category.id);
  const featuredArticles = getFeaturedArticlesByCategory(category.id);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        {/* 1) Top Breadcrumb Line */}
        <nav className="flex items-center text-sm text-slate-500 mb-8">
            <Link to="/help" className="hover:text-primary-600">String Help Center</Link>
            <span className="mx-2 text-slate-300">&gt;</span>
            <span className="font-medium text-slate-900">{category.title}</span>
        </nav>

        {/* 2) Page Title */}
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">{category.title}</h1>
            {/* 3) Small Subtitle */}
            <p className="text-lg text-slate-500">{category.description}</p>
        </div>

        {/* 4) Icon Grid of Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sections.map(section => (
                <Link 
                    key={section.id} 
                    to={`/help/category/${category.slug}/section/${section.slug}`}
                    className="group flex flex-col items-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-50 mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                        {section.icon || '📄'}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 mb-2">
                        {section.title}
                    </h3>
                </Link>
            ))}
        </div>

        {/* 5) Featured Articles Block */}
        {featuredArticles.length > 0 && (
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Featured Articles</h2>
                <div className="grid gap-4">
                    {featuredArticles.map(article => (
                        <Link 
                            key={article.id} 
                            to={`/help/article/${article.slug}`}
                            className="group block bg-white rounded-lg border border-slate-200 p-6 hover:border-primary-300 hover:shadow-sm transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-yellow-500 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 mb-1">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-600">{article.summary}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
      </div>
    </Layout>
  );
}