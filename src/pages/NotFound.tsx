import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useI18n } from '../lib/i18n';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <h1 className="text-6xl font-bold text-primary-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('pageNotFound')}</h2>
        <p className="text-slate-500 max-w-md mb-8">
          {t('pageNotFoundDesc')}
        </p>
        <Link to="/help" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
          {t('returnHome')}
        </Link>
      </div>
    </Layout>
  );
}