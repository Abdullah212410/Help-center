import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article, Group } from '../types';

interface ArticleGroupProps {
  id?: string;
  group: Group;
  articles: Article[];
  defaultOpen?: boolean;
}

export const ArticleGroup: React.FC<ArticleGroupProps> = ({ id, group, articles, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (articles.length === 0) return null;

  return (
    <div id={id} className="mb-4 scroll-mt-32">
      {/* 
         Style requirements:
         - Light purple background (bg-purple-50)
         - Rounded corners (rounded-lg)
         - Right side purple circular button with down chevron
      */}
      <div className={`overflow-hidden rounded-lg transition-all duration-300 ${isOpen ? 'bg-purple-50' : 'bg-purple-50 hover:bg-purple-100/80'}`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none"
          aria-expanded={isOpen}
        >
          <div className="pr-4">
            <h3 className="text-lg font-medium text-slate-800">{group.title}</h3>
          </div>
          
          {/* Circular Purple Chevron Button */}
          <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 
            ${isOpen ? 'bg-purple-600 text-white rotate-180' : 'bg-purple-600 text-white'}
          `}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
          </div>
        </button>
        
        {/* Accordion Body */}
        <div 
          className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
            ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-6 pb-6 pt-0">
            <ul className="space-y-3">
              {articles.slice(0, 5).map(article => (
                <li key={article.id}>
                  <Link 
                    to={`/help/article/${article.slug}`}
                    className="block text-[15px] text-slate-600 hover:text-purple-700 hover:underline transition-colors"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
            {articles.length > 5 && (
              <div className="mt-4 pt-3 border-t border-purple-100">
                 <Link 
                   to={`/help/article/${articles[0].slug}`} 
                   className="text-sm font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1"
                 >
                   See all {articles.length} articles
                 </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};