import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

interface TopUtilityBarProps {
  onOpenRequest: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenRequest }) => {
  const { t, locale, setLocale, dir } = useI18n();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setShowLangMenu(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isRtl = dir === 'rtl';

  return (
    <div className="bg-white border-b border-slate-200 h-12 sticky top-0 z-[60] text-sm relative">
       <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Left: Website Link */}
          <div className="flex-1 flex justify-start">
              <a 
                href="https://string.education/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors font-medium"
              >
                  <span>{t('stringWebsite')}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
          </div>

          {/* Center: Language Selector */}
          <div className="flex-1 flex justify-center relative" ref={menuRef}>
               <button
                 onClick={() => setShowLangMenu(!showLangMenu)}
                 className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 <span>{locale === 'en-US' ? 'English (US)' : 'العربية (AR)'}</span>
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </button>

               {showLangMenu && (
                   <div className="absolute top-full mt-2 w-40 bg-white border border-slate-200 rounded shadow-lg py-1 left-1/2 -translate-x-1/2">
                       <button onClick={() => { setLocale('en-US'); setShowLangMenu(false); }} className={`w-full text-start px-4 py-2 hover:bg-slate-50 ${locale === 'en-US' ? 'text-primary-600 font-bold' : 'text-slate-700'}`}>English (US)</button>
                       <button onClick={() => { setLocale('ar-AR'); setShowLangMenu(false); }} className={`w-full text-start px-4 py-2 hover:bg-slate-50 ${locale === 'ar-AR' ? 'text-primary-600 font-bold' : 'text-slate-700'}`}>العربية (AR)</button>
                   </div>
               )}
          </div>

          {/* Right: Submit Request */}
          <div className="flex-1 flex justify-end">
              <button onClick={onOpenRequest} className="hidden md:block border border-slate-300 rounded-full px-4 py-1 hover:bg-slate-50 text-slate-900 font-medium transition-colors">
                  {t('submitRequest')}
              </button>
              <button onClick={onOpenRequest} className="md:hidden text-slate-600">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </button>
          </div>
       </div>
    </div>
  );
};