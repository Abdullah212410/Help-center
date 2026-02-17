import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TeacherUser {
  id: string;
  name: string;
  email: string;
  role: 'teacher' | 'admin';
}

interface AuthContextType {
  user: TeacherUser | null;
  isTeacher: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isTeacher: false,
  isAdmin: false,
  login: () => ({ success: false }),
  logout: () => {},
});

// Demo teacher accounts for local auth
const DEMO_TEACHERS: { email: string; password: string; name: string; role: 'teacher' | 'admin' }[] = [
  { email: 'teacher@string.education', password: 'teacher123', name: 'Sarah Johnson', role: 'teacher' },
  { email: 'admin@string.education', password: 'admin123', name: 'Ahmad Hassan', role: 'admin' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<TeacherUser | null>(() => {
    const saved = localStorage.getItem('teacherUser');
    if (saved) {
      try {
        return JSON.parse(saved);
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
    const teacher = DEMO_TEACHERS.find(
      (t) => t.email.toLowerCase() === email.toLowerCase() && t.password === password
    );
    if (teacher) {
      setUser({
        id: `teacher-${Date.now()}`,
        name: teacher.name,
        email: teacher.email,
        role: teacher.role,
      });
      return { success: true };
    }
    return { success: false, error: 'invalidCredentials' };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isTeacher: !!user, isAdmin: !!user && user.role === 'admin', login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
