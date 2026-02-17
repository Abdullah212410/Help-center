import { categories, sections, groups, articles } from '../data';
import { Article, Category, Section, Group, SearchResult } from '../types';

// Categories
export const getCategories = () => categories.sort((a, b) => a.order - b.order);
export const getCategoryBySlug = (slug: string) => categories.find(c => c.slug === slug);
export const getCategoryById = (id: string) => categories.find(c => c.id === id);

// Sections
export const getSectionsByCategoryId = (catId: string) => sections.filter(s => s.categoryId === catId).sort((a, b) => a.order - b.order);
export const getSectionBySlug = (slug: string) => sections.find(s => s.slug === slug);
export const getSectionBySlugAndCategoryId = (slug: string, categoryId: string) =>
  sections.find(s => s.slug === slug && s.categoryId === categoryId);
export const getSectionById = (id: string) => sections.find(s => s.id === id);

// Groups
export const getGroupsBySectionId = (secId: string) => groups.filter(g => g.sectionId === secId).sort((a, b) => a.order - b.order);

// Role-based article filter helper: returns true if the article is visible for the given role
const isArticleVisibleForRole = (article: Article, role?: string): boolean => {
  if (!role || !article.role) return true; // No role filter or no role tag = visible to all
  return article.role.includes(role);
};

// Articles
export const getArticlesBySectionId = (secId: string, role?: string) =>
  articles.filter(a => a.sectionId === secId && isArticleVisibleForRole(a, role));
export const getArticlesByGroupId = (groupId: string, role?: string) =>
  articles.filter(a => a.groupId === groupId && isArticleVisibleForRole(a, role));
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getPopularArticles = (limit = 5) => articles.filter(a => a.isTop).slice(0, limit);
export const getRelatedArticles = (currentArticleId: string, sectionId: string, limit = 3) => {
  return articles
    .filter(a => a.sectionId === sectionId && a.id !== currentArticleId)
    .slice(0, limit);
};
export const getArticlesByIds = (ids: string[]) => articles.filter(a => ids.includes(a.id));

export const getFeaturedArticlesByCategory = (categoryId: string) => {
    const categorySections = sections.filter(s => s.categoryId === categoryId);
    const sectionIds = categorySections.map(s => s.id);
    return articles.filter(a => sectionIds.includes(a.sectionId) && a.isFeatured);
}

// Stats
export const getArticleCountByCategory = (catId: string) => {
  const catSectionIds = sections.filter(s => s.categoryId === catId).map(s => s.id);
  return articles.filter(a => catSectionIds.includes(a.sectionId)).length;
};

export const getArticleCountBySection = (secId: string) => {
  return articles.filter(a => a.sectionId === secId).length;
};

// Search Logic
export const searchArticles = (query: string): SearchResult[] => {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  const terms = lowerQuery.split(/\s+/).filter(t => t.length > 0);

  return articles.map(article => {
    let score = 0;
    const matches: string[] = [];

    // Title Match (High Weight)
    if (article.title.toLowerCase().includes(lowerQuery)) {
      score += 10;
      matches.push('Title match');
    }

    // Tag Match (Medium Weight)
    article.tags.forEach(tag => {
      if (tag.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }
    });

    // Summary Match (Low Weight)
    if (article.summary.toLowerCase().includes(lowerQuery)) {
      score += 3;
    }

    // Simple term matching in body
    let termHits = 0;
    terms.forEach(term => {
      if (article.bodyMarkdown.toLowerCase().includes(term)) {
        termHits++;
      }
    });
    score += termHits;

    return { article, score, matches };
  })
  .filter(result => result.score > 0)
  .sort((a, b) => b.score - a.score); // Descending score
};