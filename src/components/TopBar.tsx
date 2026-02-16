import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

interface TopBarProps {
  onOpenRequest: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenRequest }) => {
  const { t, locale, setLocale, dir } = useI18n();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLang = (newLocale: 'en-US' | 'ar-AR') => {
    setLocale(newLocale);
    setLangMenuOpen(false);
  };

  const isRtl = dir === 'rtl';

  return (
    <div className="bg-white border-b border-slate-200 h-12 sticky top-0 z-[60]">
      <div className="container mx-auto px-4 md:px-6 h-full grid grid-cols-[1fr_auto_1fr] items-center">
        
        {/* Left: Website Link */}
        <div className="flex items-center justify-start">
            <a 
                href="https://string.education/" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1"
            >
                {t('stringWebsite')}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
        </div>

        {/* Center: Language Selector */}
        <div className="flex items-center justify-center">
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
                    aria-expanded={langMenuOpen}
                    aria-label="Select Language"
                >
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="hidden sm:inline">{locale === 'en-US' ? 'English (US)' : 'العربية (AR)'}</span>
                    <span className="sm:hidden">{locale === 'en-US' ? 'EN' : 'AR'}</span>
                    <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>

                {langMenuOpen && (
                    <div className={`absolute top-full mt-2 w-40 bg-white border border-slate-200 rounded-md shadow-lg py-1 left-1/2 -translate-x-1/2`}>
                        <button 
                            onClick={() => toggleLang('en-US')}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-slate-50 ${locale === 'en-US' ? 'text-primary-600 font-semibold' : 'text-slate-700'}`}
                        >
                            English (US)
                        </button>
                        <button 
                            onClick={() => toggleLang('ar-AR')}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-slate-50 ${locale === 'ar-AR' ? 'text-primary-600 font-semibold' : 'text-slate-700'}`}
                        >
                            العربية (AR)
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Right: Submit Request */}
        <div className="flex items-center justify-end">
            <button 
                onClick={onOpenRequest}
                className="hidden md:block text-sm font-medium text-slate-900 border border-slate-300 rounded-full px-4 py-1.5 hover:border-slate-400 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none"
            >
                {t('submitRequest')}
            </button>

             {/* Mobile Submit Icon */}
             <button onClick={onOpenRequest} className="md:hidden text-slate-600 p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
             </button>
        </div>
      </div>
    </div>
  );
};