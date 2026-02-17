import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../lib/i18n';
import { useAuth } from '../lib/auth';
import { materialsStore, MATERIAL_CATEGORIES, MATERIAL_GRADES } from '../lib/materials';
import { Material } from '../types';

interface UploadMaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
  editMaterial?: Material | null;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const UploadMaterialModal: React.FC<UploadMaterialModalProps> = ({
  isOpen,
  onClose,
  onSaved,
  editMaterial,
}) => {
  const { t, dir } = useI18n();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [grade, setGrade] = useState('');
  const [link, setLink] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileType, setFileType] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const isEdit = !!editMaterial;

  useEffect(() => {
    if (editMaterial) {
      setTitle(editMaterial.title);
      setDescription(editMaterial.description || '');
      setCategory(editMaterial.category);
      setGrade(editMaterial.grade || '');
      setLink(editMaterial.link || '');
      setFileName(editMaterial.fileName || '');
      setFileData(editMaterial.fileData || '');
      setFileType(editMaterial.fileType || '');
    } else {
      resetForm();
    }
  }, [editMaterial, isOpen]);

  function resetForm() {
    setTitle('');
    setDescription('');
    setCategory('');
    setGrade('');
    setLink('');
    setFileName('');
    setFileData('');
    setFileType('');
    setErrors({});
    setSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function validate(): Record<string, string> {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = t('materialRequired');
    if (!category) e.category = t('materialRequired');
    if (!fileData && !link.trim()) {
      e.file = t('materialFileOrLink');
    }
    if (link.trim() && !/^https?:\/\/.+\..+/.test(link.trim())) {
      e.link = t('materialInvalidLink');
    }
    return e;
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({ ...prev, file: 'File exceeds 10 MB limit' }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setFileData(reader.result as string);
      setFileName(file.name);
      setFileType(file.type);
      setErrors((prev) => {
        const { file: _, ...rest } = prev;
        return rest;
      });
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveFile() {
    setFileData('');
    setFileName('');
    setFileType('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const data = {
      title: title.trim(),
      description: description.trim(),
      category,
      grade,
      link: link.trim() || undefined,
      fileData: fileData || undefined,
      fileName: fileName || undefined,
      fileType: fileType || undefined,
      teacherId: user!.id,
    };

    if (isEdit && editMaterial) {
      materialsStore.update(editMaterial.id, data);
    } else {
      materialsStore.create(data);
    }

    setSuccess(true);
    onSaved();
    setTimeout(() => {
      close();
    }, 1200);
  }

  function close() {
    resetForm();
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-md" dir={dir}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden fade-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl font-bold text-slate-900">
            {isEdit ? t('editMaterial') : t('uploadMaterial')}
          </h2>
          <button
            onClick={close}
            className="text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 p-1 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {isEdit ? t('materialUpdated') : t('materialSaved')}
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t('materialTitle')} <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#ED3B91]/30 outline-none transition-shadow ${errors.title ? 'border-red-400' : 'border-slate-200'}`}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={t('materialTitlePlaceholder')}
                />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t('materialDescription')}
                </label>
                <textarea
                  rows={2}
                  className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#ED3B91]/30 outline-none transition-shadow"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t('materialDescriptionPlaceholder')}
                />
              </div>

              {/* Category + Grade row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t('materialCategory')} <span className="text-red-400">*</span>
                  </label>
                  <select
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#ED3B91]/30 outline-none transition-shadow bg-white ${errors.category ? 'border-red-400' : 'border-slate-200'}`}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">{t('materialCategoryPlaceholder')}</option>
                    {MATERIAL_CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>
                        {t(c.labelKey)}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {t('materialGrade')}
                  </label>
                  <select
                    className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#ED3B91]/30 outline-none transition-shadow bg-white"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="">{t('materialGradePlaceholder')}</option>
                    {MATERIAL_GRADES.map((g) => (
                      <option key={g.value} value={g.value}>
                        {t(g.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* File upload */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t('materialFile')}
                </label>
                {fileName ? (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 border border-pink-100">
                    <svg className="w-5 h-5 text-[#ED3B91] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-slate-700 flex-1 truncate">{fileName}</span>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl hover:border-[#ED3B91]/40 hover:bg-pink-50/30 transition-colors cursor-pointer"
                  >
                    <svg className="w-8 h-8 text-[#ED3B91] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm text-slate-500">{t('materialFileHint')}</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept=".pdf,.png,.jpg,.jpeg,.gif,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
                  onChange={handleFileChange}
                />
                {errors.file && <p className="text-xs text-red-500 mt-1">{errors.file}</p>}
              </div>

              {/* Link input */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {t('materialLink')}
                </label>
                <input
                  type="url"
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-[#ED3B91]/30 outline-none transition-shadow ${errors.link ? 'border-red-400' : 'border-slate-200'}`}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder={t('materialLinkPlaceholder')}
                  dir="ltr"
                />
                {errors.link && <p className="text-xs text-red-500 mt-1">{errors.link}</p>}
              </div>

              {/* Actions */}
              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-white font-medium transition-all duration-200"
                  style={{ background: '#ED3B91', boxShadow: '0 2px 8px rgba(237,59,145,0.25)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#d92f82'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(237,59,145,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#ED3B91'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(237,59,145,0.25)'; }}
                >
                  {isEdit ? t('materialUpdate') : t('materialSave')}
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                >
                  {t('materialCancel')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
