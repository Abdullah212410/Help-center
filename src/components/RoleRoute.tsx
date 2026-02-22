import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '../lib/auth';

interface RoleRouteProps {
  /** Roles that ARE allowed to view the wrapped content. */
  allowedRoles: UserRole[];
  children: React.ReactNode;
}

/**
 * Generic role-based route guard.
 *
 * - Loading  -> renders nothing (avoids flash)
 * - Guest    -> redirects to /login
 * - Wrong role -> redirects to /unauthorized
 * - Correct role -> renders children
 */
export const RoleRoute: React.FC<RoleRouteProps> = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
