import React from 'react';
import { useI18n } from '../../lib/i18n';

interface CornerTagProps {
  type: 'student' | 'teacher';
}

/**
 * Small corner badge for the top-right of a thumbnail area.
 * Place inside a `relative overflow-hidden` wrapper.
 * No rotation — zero clipping risk.
 */
export const CornerTag: React.FC<CornerTagProps> = ({ type }) => {
  const { t } = useI18n();

  const label = t(
    type === 'student'
      ? ('ribbon.student' as any)
      : ('ribbon.teacher' as any),
  );

  const bg =
    type === 'student'
      ? 'rgba(37, 99, 235, 0.88)'
      : 'rgba(214, 37, 122, 0.88)';

  return (
    <div className="absolute top-0 right-0 z-20 pointer-events-none">
      <span
        className="block text-[10px] font-medium text-white leading-none whitespace-nowrap px-2.5 py-[6px] rounded-bl-lg"
        style={{
          background: bg,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
        }}
      >
        {label}
      </span>
    </div>
  );
};

/** @deprecated Use CornerTag instead */
export const CardRibbon = CornerTag;
