import React, { useState } from 'react';
import { useI18n } from '../lib/i18n';

interface SubmitRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitRequestModal: React.FC<SubmitRequestModalProps> = ({ isOpen, onClose }) => {
  const { t, dir } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', description: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('errorRequired');
    if (!formData.email.trim()) newErrors.email = t('errorRequired');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('errorEmail');
    if (!formData.subject.trim()) newErrors.subject = t('errorRequired');
    if (!formData.description.trim()) newErrors.description = t('errorRequired');
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
    }
    
    // Persist
    const requests = JSON.parse(localStorage.getItem('supportRequests') || '[]');
    requests.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('supportRequests', JSON.stringify(requests));
    setSubmitted(true);
  };

  const copySummary = () => {
     const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.description}`;
     navigator.clipboard.writeText(text).then(() => alert('Summary copied!'));
  };

  const close = () => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', description: '' });
      setErrors({});
      onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" dir={dir}>
       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
           <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
               <h2 className="text-xl font-bold text-slate-900">{t('requestModalTitle')}</h2>
               <button onClick={close} className="text-slate-400 hover:text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               </button>
           </div>
           <div className="p-6">
               {!submitted ? (
                   <form onSubmit={handleSubmit} className="space-y-4">
                       <div>
                           <label className="block text-sm font-medium text-slate-700 mb-1">{t('labelName')}</label>
                           <input type="text" className={`w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none ${errors.name ? 'border-red-500' : 'border-slate-300'}`} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder={t('placeholderName')} />
                           {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-slate-700 mb-1">{t('labelEmail')}</label>
                           <input type="email" className={`w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none ${errors.email ? 'border-red-500' : 'border-slate-300'}`} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder={t('placeholderEmail')} />
                           {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-slate-700 mb-1">{t('labelSubject')}</label>
                           <input type="text" className={`w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none ${errors.subject ? 'border-red-500' : 'border-slate-300'}`} value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} placeholder={t('placeholderSubject')} />
                           {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-slate-700 mb-1">{t('labelDescription')}</label>
                           <textarea rows={4} className={`w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none ${errors.description ? 'border-red-500' : 'border-slate-300'}`} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder={t('placeholderDescription')} />
                           {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
                       </div>
                       <div className="pt-2 flex gap-3">
                           <button type="submit" className="flex-1 bg-primary-600 text-white py-2 rounded font-medium hover:bg-primary-700 transition-colors">{t('btnSubmit')}</button>
                           <button type="button" onClick={close} className="px-4 py-2 bg-slate-100 text-slate-700 rounded font-medium hover:bg-slate-200 transition-colors">{t('btnCancel')}</button>
                       </div>
                   </form>
               ) : (
                   <div className="text-center py-6">
                       <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">{t('successMessage')}</h3>
                       <div className="mt-6 flex justify-center gap-3">
                           <button onClick={copySummary} className="text-primary-600 hover:underline font-medium">{t('btnCopySummary')}</button>
                           <button onClick={close} className="bg-slate-900 text-white px-6 py-2 rounded font-medium hover:bg-slate-800">OK</button>
                       </div>
                   </div>
               )}
           </div>
       </div>
    </div>
  );
}