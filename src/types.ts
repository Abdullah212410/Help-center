export interface Category {
  id: string;
  slug: string;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  order: number;
  icon: string;
}

export interface Section {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
  title_ar?: string;
  description: string;
  description_ar?: string;
  order: number;
  icon?: string;
  /** When present, the section renders as a single article page instead of an article list. */
  bodyMarkdown?: string;
  bodyMarkdown_ar?: string;
  updatedAt?: string;
}

export interface Group {
  id: string;
  sectionId: string;
  title: string;
  title_ar?: string;
  description?: string;
  description_ar?: string;
  order: number;
}

export interface Article {
  id: string;
  sectionId: string;
  groupId?: string;
  slug: string;
  title: string;
  title_ar?: string;
  summary: string;
  summary_ar?: string;
  bodyMarkdown: string;
  bodyMarkdown_ar?: string;
  updatedAt: string;
  tags: string[];
  isTop?: boolean;
  isFeatured?: boolean;
}

export interface SearchResult {
  article: Article;
  score: number;
  matches: string[]; // Snippet of where match occurred
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}