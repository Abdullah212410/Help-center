import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './lib/i18n';
import { AuthProvider } from './lib/auth';

import Home from './pages/Home';
import CategoryPage from './pages/Category';
import HelpSectionLandingPage from './pages/HelpSectionLandingPage';
import ArticlePage from './pages/Article';
import SearchPage from './pages/Search';
import RoleFeaturePage from './pages/RoleFeaturePage';
import NotFound from './pages/NotFound';
import ResourcesPage from './pages/ResourcesPage';
import BlogFeed from './pages/BlogFeed';
import BlogPostDetail from './pages/BlogPostDetail';
import BlogEditor from './pages/BlogEditor';
import TeacherLogin from './pages/TeacherLogin';
import TeacherDashboard from './pages/TeacherDashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';
import { AdminRoute } from './components/AdminRoute';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <I18nProvider>
      <AuthProvider>
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

          {/* Blog */}
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/blog/new" element={<AdminRoute><BlogEditor /></AdminRoute>} />
          <Route path="/blog/:postId" element={<BlogPostDetail />} />
          <Route path="/blog/:postId/edit" element={<AdminRoute><BlogEditor /></AdminRoute>} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Account Settings - Protected Route */}
          <Route path="/account" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />

          {/* Legacy teacher routes - redirect to new login */}
          <Route path="/help/teacher/teacher-login" element={<Navigate to="/login" replace />} />
          <Route path="/teacher/login" element={<Navigate to="/login" replace />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

          {/* Role-based feature pages: /help/teacher/*, /help/student/* */}
          <Route path="/help/:role/:featureSlug" element={<RoleFeaturePage />} />

          {/* Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </HashRouter>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
