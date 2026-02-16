import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function calculateReadingTime(text: string): number {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Convert text into a URL-safe slug.
 * Handles duplicate slugs by appending -1, -2, etc.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // Remove non-word chars (except spaces & hyphens)
    .replace(/\s+/g, '-')       // Spaces → hyphens
    .replace(/-+/g, '-')        // Collapse multiple hyphens
    .replace(/^-|-$/g, '');     // Trim leading/trailing hyphens
}

/**
 * Generate unique slugified IDs for a list of heading texts.
 * Appends -1, -2, etc. for duplicates.
 */
export function uniqueSlugIds(texts: string[]): string[] {
  const counts = new Map<string, number>();
  return texts.map(text => {
    const base = slugify(text) || 'section';
    const count = counts.get(base) || 0;
    counts.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  });
}

/**
 * Smooth-scroll to an element by ID, accounting for fixed header offset.
 * Falls back to text-content matching if getElementById fails.
 * NOTE: URL hash is NOT updated because the app uses HashRouter.
 */
export function scrollToHash(id: string) {
  let el = document.getElementById(id);

  // Fallback: find heading by matching slugified text content
  if (!el) {
    const headings = document.querySelectorAll(
      '.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, [id^="group-"]'
    );
    for (const h of headings) {
      const hSlug = slugify(h.textContent || '');
      // Match exact slug or slug without trailing -N suffix
      if (hSlug === id || hSlug === id.replace(/-\d+$/, '')) {
        el = h as HTMLElement;
        el.id = id; // Assign for future lookups
        break;
      }
    }
  }

  if (!el) return;

  const headerOffset = 96; // ~70px header + 26px breathing room
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}
