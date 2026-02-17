import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'teacher' | 'admin' | 'student' | 'family';

export interface TeacherUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: TeacherUser | null;
  isTeacher: boolean;
  isAdmin: boolean;
  /** True when the user's role is 'teacher' or 'admin' — allowed to create/edit/delete blog posts */
  canWriteBlog: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isTeacher: false,
  isAdmin: false,
  canWriteBlog: false,
  login: () => ({ success: false }),
  logout: () => {},
});

// Demo accounts for local auth
const DEMO_ACCOUNTS: { email: string; password: string; name: string; role: UserRole }[] = [
  { email: 'teacher@string.education', password: 'teacher123', name: 'Sarah Johnson', role: 'teacher' },
  { email: 'admin@string.education', password: 'admin123', name: 'Ahmad Hassan', role: 'admin' },
  { email: 'student@string.education', password: 'student123', name: 'Liam Carter', role: 'student' },
  { email: 'family@string.education', password: 'family123', name: 'Noor Al-Rashid', role: 'family' },
];

const BLOG_WRITE_ROLES: UserRole[] = ['teacher', 'admin'];
const VALID_ROLES: UserRole[] = ['teacher', 'admin', 'student', 'family'];

/** Normalize role to lowercase. Returns undefined if invalid/missing. */
function normalizeRole(raw: unknown): UserRole | undefined {
  if (typeof raw !== 'string' || !raw) return undefined;
  const normalized = raw.toLowerCase().trim() as UserRole;
  return VALID_ROLES.includes(normalized) ? normalized : undefined;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TeacherUser | null>(() => {
    const saved = localStorage.getItem('teacherUser');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const role = normalizeRole(parsed.role);
        if (role) {
          parsed.role = role;
          return parsed;
        }
        // Role missing/invalid — try to recover from demo accounts by email
        const demo = DEMO_ACCOUNTS.find(
          (a) => a.email.toLowerCase() === (parsed.email || '').toLowerCase()
        );
        if (demo) {
          parsed.role = demo.role;
          localStorage.setItem('teacherUser', JSON.stringify(parsed));
          return parsed;
        }
        // Unrecoverable stale session — clear it
        console.warn('[Auth] Stored user has invalid/missing role:', parsed.role, '— clearing session');
        localStorage.removeItem('teacherUser');
        return null;
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('teacherUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('teacherUser');
    }
  }, [user]);

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const account = DEMO_ACCOUNTS.find(
      (a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password
    );
    if (account) {
      const role = normalizeRole(account.role);
      if (!role) {
        console.warn('[Auth] Login denied — account has invalid role:', account.role);
        return { success: false, error: 'invalidRole' };
      }
      setUser({
        id: `user-${Date.now()}`,
        name: account.name,
        email: account.email,
        role,
      });
      return { success: true };
    }
    return { success: false, error: 'invalidCredentials' };
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = !!user && user.role === 'admin';
  const isTeacher = !!user && (user.role === 'teacher' || user.role === 'admin');
  const canWriteBlog = !!user && BLOG_WRITE_ROLES.includes(user.role);

  return (
    <AuthContext.Provider value={{ user, isTeacher, isAdmin, canWriteBlog, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
