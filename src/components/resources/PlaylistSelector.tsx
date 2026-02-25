import React from 'react';

/* ═══════════════════════════════════════════════════
   PlaylistSelector — "All Videos" + per-playlist tabs
   Renders only "All Videos" when playlists array is empty.
   Ready for future playlist data from the DB.
   ═══════════════════════════════════════════════════ */

export interface PlaylistOption {
  id: string;
  title: string;
  title_ar?: string | null;
}

interface PlaylistSelectorProps {
  playlists: PlaylistOption[];
  activeId: string | null;        // null = "All Videos"
  onSelect: (id: string | null) => void;
  localizeFn: (obj: any, field: string) => string;
  lang: string;
  accentColor: string;
}

const PURPLE = '#7c3aed';

export const PlaylistSelector: React.FC<PlaylistSelectorProps> = ({
  playlists,
  activeId,
  onSelect,
  localizeFn,
  lang,
}) => {
  const allLabel = lang === 'ar' ? 'جميع الفيديوهات' : 'All Videos';

  const chipStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '7px 18px',
    borderRadius: 9999,
    fontSize: 13,
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    background: isActive ? PURPLE : '#f1f5f9',
    color: isActive ? '#fff' : '#475569',
    whiteSpace: 'nowrap',
  });

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 24,
    }}>
      <button
        onClick={() => onSelect(null)}
        style={chipStyle(activeId === null)}
      >
        {allLabel}
      </button>
      {playlists.map((pl) => (
        <button
          key={pl.id}
          onClick={() => onSelect(pl.id)}
          style={chipStyle(activeId === pl.id)}
        >
          {localizeFn(pl, 'title')}
        </button>
      ))}
    </div>
  );
};
