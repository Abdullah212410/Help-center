import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useI18n } from '../lib/i18n';

export default function Home() {
  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative w-full h-64 md:h-80 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500 overflow-hidden flex items-center justify-center">
        {/* Abstract shapes overlay */}
        <div className="absolute inset-0 opacity-10">
             <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
        </div>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center drop-shadow-md px-4">
          String {t('helpCenter')}
        </h1>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-20 pb-20">
        
        {/* Main Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {/* For Families Card */}
          <Link 
            to="/help/category/for-families"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center border border-slate-100"
          >
            <div className="w-24 h-24 mb-6 relative">
               {/* Custom Illustration for Families */}
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#e0f2fe" />
                  <path d="M35 70 L35 45 L50 30 L65 45 L65 70 Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" strokeLinejoin="round" />
                  <rect x="45" y="55" width="10" height="15" fill="#0369a1" />
                  <circle cx="50" cy="50" r="5" fill="#fef08a" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 mb-2">For Families</h2>
            <p className="text-slate-500 font-medium">I’m a parent, guardian, grandparent, etc.</p>
          </Link>

          {/* For Schools Card */}
          <Link 
            to="/help/category/for-schools-and-districts"
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center border border-slate-100"
          >
            <div className="w-24 h-24 mb-6 relative">
               {/* Custom Illustration for Schools */}
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#fef9c3" />
                  <rect x="25" y="40" width="50" height="30" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                  <polygon points="25,40 50,20 75,40" fill="#d97706" stroke="#b45309" strokeWidth="2" />
                  <rect x="45" y="55" width="10" height="15" fill="#b45309" />
                  <rect x="30" y="45" width="8" height="8" fill="#fff" />
                  <rect x="62" y="45" width="8" height="8" fill="#fff" />
                  <line x1="50" y1="20" x2="50" y2="5" stroke="#b45309" strokeWidth="2" />
                  <path d="M50 5 L65 10 L50 15 Z" fill="#ef4444" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 mb-2">For Schools and Districts</h2>
            <p className="text-slate-500 font-medium">I’m a teacher, principal, district leader, etc.</p>
          </Link>
        </div>

        {/* Secondary Help Section */}
        <div className="max-w-4xl mx-auto">
           <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-10 text-center">Also get help with:</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Safety and Privacy */}
              <Link 
                to="/help/category/safety-and-privacy"
                className="flex flex-col items-center text-center group"
              >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all border border-slate-100">
                     <span className="text-3xl">🛡️</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 mb-1">Safety and Privacy</h4>
                  <p className="text-sm text-slate-500 max-w-xs">Learn how String keeps school communities safe.</p>
              </Link>

              {/* String Tutor */}
              <Link 
                to="/help/category/string-tutor"
                className="flex flex-col items-center text-center group"
              >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all border border-slate-100">
                     <span className="text-3xl">🎓</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 mb-1">String Tutor</h4>
                  <p className="text-sm text-slate-500 max-w-xs">Learn how one-to-one support helps kids flourish.</p>
              </Link>
           </div>
        </div>

      </div>
    </Layout>
  );
}