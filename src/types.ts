export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  icon: string; // Emoji or generic icon name
}

export interface Section {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
  description: string;
  order: number;
  icon?: string; // Emoji or SVG path
}

export interface Group {
  id: string;
  sectionId: string;
  title: string;
  description?: string;
  order: number;
}

export interface Article {
  id: string;
  sectionId: string;
  groupId?: string; // Optional grouping
  slug: string;
  title: string;
  summary: string;
  bodyMarkdown: string;
  updatedAt: string; // ISO Date string
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