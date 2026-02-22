import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * Legacy route — redirects to the new flat article list.
 * Kept for backward compatibility with `/admin/help-center/category/:categoryId/articles`.
 */
export default function AdminArticleList() {
  return <Navigate to="/admin/help-center/articles" replace />;
}
