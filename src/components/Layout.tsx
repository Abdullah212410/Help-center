import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { SubmitRequestModal } from './SubmitRequestModal';

interface LayoutProps {
  children: React.ReactNode;
  hero?: React.ReactNode; // Optional hero section (e.g. purple search strip)
}

// Reusable Language Dropdown
const LanguageDropdown = () => {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
      >
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="hidden sm:inline">{locale === 'en-US' ? 'English (US)' : 'العربية (AR)'}</span>
        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-slate-200 rounded shadow-lg py-1 z-50">
          <button onClick={() => { setLocale('en-US'); setIsOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${locale === 'en-US' ? 'font-bold text-primary-600' : 'text-slate-700'}`}>English (US)</button>
          <button onClick={() => { setLocale('ar-AR'); setIsOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${locale === 'ar-AR' ? 'font-bold text-primary-600' : 'text-slate-700'}`}>العربية (AR)</button>
        </div>
      )}
    </div>
  );
};

export const Header = ({ onOpenRequest }: { onOpenRequest: () => void }) => {
  const { t, dir } = useI18n();
  const isRtl = dir === 'rtl';

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 h-16 shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        {/* Left: Logo & Title */}
        <Link to="/help" className="flex items-center gap-3 group">
          <div className="relative flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-105">
             <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#fbbf24" strokeWidth="8" fill="none" transform="rotate(0 50 50)" className="opacity-90 mix-blend-multiply" />
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#22d3ee" strokeWidth="8" fill="none" transform="rotate(60 50 50)" className="opacity-90 mix-blend-multiply" />
                <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#f472b6" strokeWidth="8" fill="none" transform="rotate(120 50 50)" className="opacity-90 mix-blend-multiply" />
             </svg>
          </div>
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-lg font-bold tracking-tight text-slate-900">String</span>
            <span className="text-lg text-slate-500 font-normal">{t('helpCenter')}</span>
          </div>
        </Link>

        {/* Right: Links & Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="https://string.education" target="_blank" rel="noreferrer" className="hidden md:block text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
            {t('stringWebsite')}
          </a>
          
          <div className="hidden md:block w-px h-4 bg-slate-300"></div>
          
          <LanguageDropdown />
          
          <button 
            onClick={onOpenRequest}
            className="text-sm font-medium text-slate-900 border border-slate-300 rounded-md px-4 py-2 hover:bg-slate-50 transition-colors"
          >
            {t('submitRequest')}
          </button>
        </div>
      </div>
    </header>
  );
};

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-900">{t('company')}</h3>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('aboutUs')}</a>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('careers')}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-900">{t('resources')}</h3>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('teacherResources')}</a>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('parentResources')}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-900">{t('support')}</h3>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('helpCenter')}</a>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">{t('contactUs')}</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-slate-900">{t('community')}</h3>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">Twitter</a>
            <a href="#" className="text-sm text-slate-600 hover:text-primary-600">YouTube</a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">&copy; {new Date().getFullYear()} {t('allRightsReserved')}</div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-slate-900">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, hero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header onOpenRequest={() => setIsModalOpen(true)} />
      {hero}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <SubmitRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};