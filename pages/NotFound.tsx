import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
        <h1 className="text-6xl font-bold text-primary-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Page not found</h2>
        <p className="text-slate-500 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/help" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
          Return to Help Center
        </Link>
      </div>
    </Layout>
  );
}
