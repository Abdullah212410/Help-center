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
import Unauthorized from './pages/Unauthorized';
import ResourcesPage from './pages/ResourcesPage';
import BlogFeed from './pages/BlogFeed';
import BlogPostDetail from './pages/BlogPostDetail';
import BlogEditor from './pages/BlogEditor';
import TeacherDashboard from './pages/TeacherDashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import AccountSettings from './pages/AccountSettings';
import { PrivateRoute } from './components/PrivateRoute';
import { RoleRoute } from './components/RoleRoute';
import { DevDebugWidget } from './components/DevDebugWidget';
import { RequireAdmin } from './components/RequireAdmin';
import AdminCmsLogin from './pages/AdminCmsLogin';
import AdminHelpCenter from './pages/AdminHelpCenter';
import AdminCategoryEditor from './pages/AdminCategoryEditor';
import AdminArticleList from './pages/AdminArticleList';
import AdminArticleEditor from './pages/AdminArticleEditor';
import HelpCenterHome from './pages/HelpCenterHome';
import HelpCenterCategory from './pages/HelpCenterCategory';
import HelpCenterArticle from './pages/HelpCenterArticle';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminHelpCenterHub from './admin/pages/AdminHelpCenterHub';
import AdminArticleListAll from './admin/pages/AdminArticleListAll';
import AdminArticleEditorFlat from './admin/pages/AdminArticleEditorFlat';
import AdminSectionListAll from './admin/pages/AdminSectionListAll';
import AdminSectionEditorFlat from './admin/pages/AdminSectionEditorFlat';
import AdminBlogList from './admin/pages/AdminBlogList';
import AdminBlogEditor from './admin/pages/AdminBlogEditor';
import AdminTutorials from './admin/pages/AdminTutorials';
import HelpCenterSection from './pages/HelpCenterSection';

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

          {/* Blog (public: read-only) */}
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/blog/:postId" element={<BlogPostDetail />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Account Settings - Protected Route */}
          <Route path="/account" element={<PrivateRoute><AccountSettings /></PrivateRoute>} />

          {/* Legacy teacher routes - redirect to new login */}
          <Route path="/help/teacher/teacher-login" element={<Navigate to="/login" replace />} />
          <Route path="/teacher/login" element={<Navigate to="/login" replace />} />
          <Route path="/teacher/dashboard" element={
            <RoleRoute allowedRoles={['teacher', 'admin']}>
              <TeacherDashboard />
            </RoleRoute>
          } />

          {/* Role-based feature pages: /help/teacher/*, /help/student/* */}
          <Route path="/help/:role/:featureSlug" element={<RoleFeaturePage />} />

          {/* ═══ Help Center CMS (DB-driven) ═══ */}
          {/* Public: read-only pages fetching from hc_categories / hc_sections / hc_articles */}
          <Route path="/help-center" element={<HelpCenterHome />} />
          <Route path="/help-center/:categorySlug" element={<HelpCenterCategory />} />
          <Route path="/help-center/:categorySlug/:sectionSlug" element={<HelpCenterSection />} />
          <Route path="/help-center/:categorySlug/:sectionSlug/:articleSlug" element={<HelpCenterArticle />} />

          {/* ═══ Admin CMS (/admin/*) — RequireAdmin on every route ═══ */}
          <Route path="/admin/login" element={<AdminCmsLogin />} />
          <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
          <Route path="/admin/dashboard" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />

          {/* Admin: Blog management */}
          <Route path="/admin/blog" element={<RequireAdmin><AdminBlogList /></RequireAdmin>} />
          <Route path="/admin/blog/new" element={<RequireAdmin><AdminBlogEditor /></RequireAdmin>} />
          <Route path="/admin/blog/edit/:id" element={<RequireAdmin><AdminBlogEditor /></RequireAdmin>} />
          {/* Legacy blog edit route (backward compat) */}
          <Route path="/admin/blog/:postId/edit" element={<RequireAdmin><BlogEditor /></RequireAdmin>} />

          {/* Admin: Tutorials management */}
          <Route path="/admin/tutorials" element={<RequireAdmin><AdminTutorials /></RequireAdmin>} />

          {/* Admin: Help Center management — flat routes */}
          <Route path="/admin/help-center" element={<RequireAdmin><AdminHelpCenterHub /></RequireAdmin>} />
          <Route path="/admin/help-center/categories" element={<RequireAdmin><AdminHelpCenterHub /></RequireAdmin>} />
          <Route path="/admin/help-center/sections" element={<RequireAdmin><AdminSectionListAll /></RequireAdmin>} />
          <Route path="/admin/help-center/sections/new" element={<RequireAdmin><AdminSectionEditorFlat /></RequireAdmin>} />
          <Route path="/admin/help-center/sections/edit/:id" element={<RequireAdmin><AdminSectionEditorFlat /></RequireAdmin>} />
          <Route path="/admin/help-center/articles" element={<RequireAdmin><AdminArticleListAll /></RequireAdmin>} />
          <Route path="/admin/help-center/articles/new" element={<RequireAdmin><AdminArticleEditorFlat /></RequireAdmin>} />
          <Route path="/admin/help-center/articles/edit/:id" element={<RequireAdmin><AdminArticleEditorFlat /></RequireAdmin>} />

          {/* Admin: Help Center — legacy nested routes (backward compat) */}
          <Route path="/admin/help-center/category/:categoryId" element={<RequireAdmin><AdminCategoryEditor /></RequireAdmin>} />
          <Route path="/admin/help-center/category/:categoryId/edit" element={<RequireAdmin><AdminCategoryEditor /></RequireAdmin>} />
          <Route path="/admin/help-center/category/:categoryId/articles" element={<RequireAdmin><AdminArticleList /></RequireAdmin>} />
          <Route path="/admin/help-center/category/:categoryId/article/:articleId" element={<RequireAdmin><AdminArticleEditor /></RequireAdmin>} />
          <Route path="/admin/help-center/category/:categoryId/article/:articleId/edit" element={<RequireAdmin><AdminArticleEditor /></RequireAdmin>} />

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

        {/* DEV-only debug widget — only renders when import.meta.env.DEV is true */}
        <DevDebugWidget />
      </HashRouter>
      </AuthProvider>
    </I18nProvider>
  );
}

export default App;
