import { useEffect, useRef } from 'react';

/**
 * Lightweight same-tab event bus for data invalidation.
 *
 * When admin CRUD succeeds → call emitDataChange('tutorials').
 * Public pages → useDataRefresh(['tutorials'], refetchFn) to auto-refetch.
 */

export type DataTable =
  | 'hc_categories'
  | 'hc_sections'
  | 'hc_articles'
  | 'tutorials'
  | 'blog_posts';

const EVENT_NAME = 'hc-data-change';

/** Fire after any successful admin CRUD operation. */
export function emitDataChange(table: DataTable) {
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { table } }));
}

/**
 * Hook: re-run `onRefresh` whenever one of the listed tables changes.
 * Uses a stable ref so the callback doesn't need to be memoized.
 */
export function useDataRefresh(
  tables: DataTable[],
  onRefresh: () => void,
) {
  const cbRef = useRef(onRefresh);
  cbRef.current = onRefresh;

  useEffect(() => {
    const handler = (e: Event) => {
      const table = (e as CustomEvent).detail?.table as DataTable;
      if (tables.includes(table)) cbRef.current();
    };
    window.addEventListener(EVENT_NAME, handler);
    return () => window.removeEventListener(EVENT_NAME, handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tables.join(',')]);
}
