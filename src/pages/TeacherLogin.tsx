import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';

export default function TeacherLogin() {
  const { t, dir } = useI18n();
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (user) navigate('/teacher/dashboard', { replace: true });
  }, [user, navigate]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!email.trim()) e.email = t('errorRequired');
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = t('errorEmail');
    if (!password.trim()) e.password = t('errorRequired');
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const result = login(email, password);
    if (result.success) {
      navigate('/teacher/dashboard', { replace: true });
    } else {
      setError(dir === 'rtl' ? 'بيانات الاعتماد غير صحيحة. جرّب: teacher@string.education / teacher123' : 'Invalid credentials. Try: teacher@string.education / teacher123');
    }
  };

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16" dir={dir}>
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden fade-up">
            {/* Header gradient bar */}
            <div className="w-full h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />

            <div className="p-8">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 text-amber-600 mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-slate-900 text-center mb-1">{t('teacherLoginTitle')}</h1>
              <p className="text-sm text-slate-500 text-center mb-8">{t('teacherLoginSubtitle')}</p>

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('teacherEmail')}</label>
                  <input
                    type="email"
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-300 outline-none transition-shadow ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="teacher@string.education"
                    dir="ltr"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('teacherPassword')}</label>
                  <input
                    type="password"
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-300 outline-none transition-shadow ${errors.password ? 'border-red-400' : 'border-slate-200'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    dir="ltr"
                  />
                  {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-amber-500 to-orange-500 shadow-md hover:from-amber-600 hover:to-orange-600 hover:shadow-lg transition-all duration-200"
                >
                  {t('teacherLoginBtn')}
                </button>
              </form>

              {/* Demo hint */}
              <div className="mt-6 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-xs text-slate-500 text-center">
                  <span className="font-medium text-slate-600">Demo:</span>{' '}
                  teacher@string.education / teacher123
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
