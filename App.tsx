import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import CategoryPage from './pages/Category';
import SectionPage from './pages/Section';
import ArticlePage from './pages/Article';
import SearchPage from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redirect root to help home */}
        <Route path="/" element={<Navigate to="/help" replace />} />
        
        <Route path="/help" element={<Home />} />
        <Route path="/help/search" element={<SearchPage />} />
        
        {/* Dynamic Routes */}
        <Route path="/help/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/help/category/:categorySlug/section/:sectionSlug" element={<SectionPage />} />
        <Route path="/help/article/:articleSlug" element={<ArticlePage />} />

        {/* Fallback */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
