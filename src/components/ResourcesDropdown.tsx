import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../lib/i18n';

const DROPDOWN_ID = 'resources-dropdown-menu';

export const ResourcesDropdown: React.FC = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTouchDevice = useRef(false);

  // Track if user is on touch device
  useEffect(() => {
    const onTouch = () => { isTouchDevice.current = true; };
    window.addEventListener('touchstart', onTouch, { once: true });
    return () => window.removeEventListener('touchstart', onTouch);
  }, []);

  // Close on outside click / tap
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  // Hover open (desktop only)
  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice.current) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice.current) return;
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  // Toggle on click/tap
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Navigate and close
  const goTo = useCallback((path: string) => {
    navigate(path);
    setIsOpen(false);
  }, [navigate]);

  // Keyboard handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      (containerRef.current?.querySelector('button') as HTMLButtonElement)?.focus();
      return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
      e.preventDefault();
      setIsOpen(true);
      return;
    }
    if (e.key === 'ArrowDown' && isOpen) {
      e.preventDefault();
      const first = containerRef.current?.querySelector('[role="menuitem"]') as HTMLElement;
      first?.focus();
    }
  }, [isOpen]);

  const handleItemKeyDown = useCallback((e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goTo(path);
      return;
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
      (containerRef.current?.querySelector('button') as HTMLButtonElement)?.focus();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (e.currentTarget as HTMLElement).nextElementSibling as HTMLElement;
      next?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (e.currentTarget as HTMLElement).previousElementSibling as HTMLElement;
      if (prev) prev.focus();
      else (containerRef.current?.querySelector('button') as HTMLButtonElement)?.focus();
    }
  }, [goTo]);

  const items = [
    { label: t('dropdownForTeachers'), path: '/help/resources/teachers' },
    { label: t('dropdownForStudents'), path: '/help/resources/students' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative hidden md:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={DROPDOWN_ID}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-[#ED3B91] transition-colors"
      >
        {t('navResources')}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id={DROPDOWN_ID}
        role="menu"
        aria-label={t('navResources')}
        className="absolute top-full left-1/2 pt-2 z-50"
        style={{
          transform: 'translateX(-50%)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <div
          className="bg-white border border-slate-100 rounded-xl shadow-lg py-1.5 min-w-[180px] transition-all duration-200 origin-top"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
          }}
        >
          {items.map((item) => (
            <button
              key={item.path}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => goTo(item.path)}
              onKeyDown={(e) => handleItemKeyDown(e, item.path)}
              className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-pink-50 hover:text-[#ED3B91] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
