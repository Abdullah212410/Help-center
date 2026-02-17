import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './lib/i18n';

import Home from './pages/Home';
import CategoryPage from './pages/Category';
import HelpSectionLandingPage from './pages/HelpSectionLandingPage';
import ArticlePage from './pages/Article';
import SearchPage from './pages/Search';
import RoleFeaturePage from './pages/RoleFeaturePage';
import NotFound from './pages/NotFound';
import ResourcesPage from './pages/ResourcesPage';

function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <Routes>
          {/* Redirect root to help home */}
          <Route path="/" element={<Navigate to="/help" replace />} />

          <Route path="/help" element={<Home />} />
          <Route path="/help/search" element={<SearchPage />} />

          {/* Dynamic Routes */}
          <Route path="/help/category/:categorySlug" element={<CategoryPage />} />

          {/* CRITICAL: Use the new Landing Page for Sections */}
          <Route path="/help/category/:categorySlug/section/:sectionSlug" element={<HelpSectionLandingPage />} />

          <Route path="/help/article/:articleSlug" element={<ArticlePage />} />

          <Route path="/help/resources" element={<ResourcesPage />} />

          {/* Role-based feature pages: /help/teacher/*, /help/student/* */}
          <Route path="/help/:role/:featureSlug" element={<RoleFeaturePage />} />

          {/* Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </HashRouter>
    </I18nProvider>
  );
}

export default App;
