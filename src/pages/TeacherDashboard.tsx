import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { materialsStore, MATERIAL_CATEGORIES, MATERIAL_GRADES } from '../lib/materials';
import { UploadMaterialModal } from '../components/UploadMaterialModal';
import { TeacherTutorial } from '../components/TeacherTutorial';
import { Material } from '../types';

type Tab = 'materials' | 'lessons' | 'students' | 'reports';

const TABS: { key: Tab; labelKey: string; iconPath: string }[] = [
  {
    key: 'materials',
    labelKey: 'dashMaterials',
    iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z',
  },
  {
    key: 'lessons',
    labelKey: 'dashLessons',
    iconPath: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  },
  {
    key: 'students',
    labelKey: 'dashStudents',
    iconPath: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
  },
  {
    key: 'reports',
    labelKey: 'dashReports',
    iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
  },
];

export default function TeacherDashboard() {
  const { t, dir } = useI18n();
  const { user, isTeacher, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<Tab>('materials');
  const [materials, setMaterials] = useState<Material[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);
  const [previewMaterial, setPreviewMaterial] = useState<Material | null>(null);

  useEffect(() => {
    if (!isTeacher) navigate('/login', { replace: true });
  }, [isTeacher, navigate]);

  const refreshMaterials = useCallback(() => {
    if (user) {
      setMaterials(materialsStore.search(user.id, searchQuery, filterCategory || undefined));
    }
  }, [user, searchQuery, filterCategory]);

  useEffect(() => {
    refreshMaterials();
  }, [refreshMaterials]);

  function handleDelete(id: string) {
    if (!window.confirm(t('materialDeleteConfirm'))) return;
    materialsStore.remove(id);
    refreshMaterials();
  }

  function handleEdit(m: Material) {
    setEditingMaterial(m);
    setIsUploadOpen(true);
  }

  function handleOpenPreview(m: Material) {
    if (m.link) {
      window.open(m.link, '_blank', 'noopener,noreferrer');
    } else if (m.fileData) {
      setPreviewMaterial(m);
    }
  }

  function getCategoryLabel(value: string) {
    const cat = MATERIAL_CATEGORIES.find((c) => c.value === value);
    return cat ? t(cat.labelKey) : value;
  }

  function getGradeLabel(value: string) {
    if (!value) return '';
    const g = MATERIAL_GRADES.find((gr) => gr.value === value);
    return g ? t(g.labelKey) : value;
  }

  if (!user) return null;

  const uniqueCategories = [...new Set(materials.map((m) => m.category))];

  return (
    <Layout>
      {/* Tutorial overlay */}
      <TeacherTutorial />

      <div className="min-h-[70vh] py-8 px-4 md:px-8" dir={dir}>
        <div className="max-w-6xl mx-auto">
          {/* Welcome header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {t('teacherWelcome', { name: user.name })}
              </h1>
              <p className="text-sm text-slate-500 mt-1">{t('teacherPortal')}</p>
            </div>
            <button
              onClick={() => { logout(); navigate('/help'); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              {t('teacherLogout')}
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-slate-100 rounded-xl mb-6 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                data-tab={tab.key}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={tab.iconPath} />
                </svg>
                {t(tab.labelKey as any)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'materials' && (
            <div>
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t('dashTotalMaterials')}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{materialsStore.getByTeacher(user.id).length}</p>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t('dashCategories')}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{uniqueCategories.length}</p>
                </div>
                <div className="hidden md:block bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t('dashRecentUploads')}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {materialsStore.getByTeacher(user.id).filter((m) => {
                      const d = new Date(m.createdAt);
                      const now = new Date();
                      return now.getTime() - d.getTime() < 7 * 24 * 60 * 60 * 1000;
                    }).length}
                  </p>
                </div>
              </div>

              {/* Toolbar: Search + Filter + Upload */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="flex-1 relative">
                  <svg className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 pl-10 pr-3.5 py-2.5 text-sm focus:ring-2 focus:ring-amber-300 outline-none transition-shadow"
                    placeholder={t('searchMaterials')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <select
                  className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm bg-white focus:ring-2 focus:ring-amber-300 outline-none"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="">{t('filterByCategory')}</option>
                  {MATERIAL_CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{t(c.labelKey)}</option>
                  ))}
                </select>

                <button
                  id="upload-btn"
                  onClick={() => { setEditingMaterial(null); setIsUploadOpen(true); }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium transition-all duration-200 whitespace-nowrap active:scale-[0.97]"
                  style={{ background: '#ED3B91', boxShadow: '0 6px 18px rgba(237,59,145,0.25)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#d92f82'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(237,59,145,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#ED3B91'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(237,59,145,0.25)'; }}
                  onMouseDown={(e) => { e.currentTarget.style.background = '#c72573'; }}
                  onMouseUp={(e) => { e.currentTarget.style.background = '#d92f82'; }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  {t('uploadMaterial')}
                </button>
              </div>

              {/* Materials list */}
              {materials.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                  <svg className="w-16 h-16 text-slate-200 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  <p className="text-slate-500 text-sm">{t('materialNone')}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {materials.map((m) => (
                    <div
                      key={m.id}
                      className="bg-white rounded-xl border border-slate-100 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-sm transition-shadow"
                    >
                      {/* Type icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${m.fileData ? 'bg-blue-50 text-blue-500' : 'bg-emerald-50 text-emerald-500'}`}>
                        {m.fileData ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                          </svg>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-slate-900 truncate">{m.title}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                            {getCategoryLabel(m.category)}
                          </span>
                          {m.grade && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-700">
                              {getGradeLabel(m.grade)}
                            </span>
                          )}
                          <span className="text-xs text-slate-400">
                            {t('materialUploadedOn')} {new Date(m.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        {m.description && (
                          <p className="text-xs text-slate-500 mt-1 truncate">{m.description}</p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleOpenPreview(m)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                          title={t('materialOpen')}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          {t('materialOpen')}
                        </button>
                        <button
                          onClick={() => handleEdit(m)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
                          title={t('materialEdit')}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                          </svg>
                          {t('materialEdit')}
                        </button>
                        <button
                          onClick={() => handleDelete(m.id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                          title={t('materialDelete')}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                          {t('materialDelete')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Placeholder tabs */}
          {(activeTab === 'lessons' || activeTab === 'students' || activeTab === 'reports') && (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t('dashComingSoon')}</h3>
              <p className="text-sm text-slate-500">{t('dashComingSoonDesc')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Upload/Edit modal */}
      <UploadMaterialModal
        isOpen={isUploadOpen}
        onClose={() => { setIsUploadOpen(false); setEditingMaterial(null); }}
        onSaved={refreshMaterials}
        editMaterial={editingMaterial}
      />

      {/* File Preview overlay */}
      {previewMaterial && previewMaterial.fileData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" dir={dir}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden fade-up">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0">
              <h3 className="text-lg font-bold text-slate-900 truncate">{previewMaterial.title}</h3>
              <button
                onClick={() => setPreviewMaterial(null)}
                className="text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 p-1 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6 flex items-center justify-center bg-slate-50">
              {previewMaterial.fileType?.startsWith('image/') ? (
                <img
                  src={previewMaterial.fileData}
                  alt={previewMaterial.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              ) : previewMaterial.fileType === 'application/pdf' ? (
                <iframe
                  src={previewMaterial.fileData}
                  className="w-full h-[70vh] rounded-lg border border-slate-200"
                  title={previewMaterial.title}
                />
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  <p className="text-sm text-slate-500 mb-3">{previewMaterial.fileName}</p>
                  <a
                    href={previewMaterial.fileData}
                    download={previewMaterial.fileName}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-amber-500 to-orange-500 shadow-md hover:from-amber-600 hover:to-orange-600 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
