import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useAuth } from '../lib/auth';

export default function AccountSettings() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update when backend is ready
    setIsEditing(false);
    // Show success message (you could add a toast notification here)
  };

  const handleChangePassword = () => {
    // TODO: Navigate to change password page or show modal
    alert('Change password functionality will be implemented when backend is ready.');
  };

  return (
    <Layout>
      {/* Header */}
      <div
        className="w-full"
        style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #f0f9ff 50%, #faf5ff 100%)',
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        <div className="mx-auto px-6 py-10 md:py-14" style={{ maxWidth: 1200 }}>
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#ED3B91] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            Account Settings
          </h1>
          <p className="text-base text-slate-500">
            Manage your profile and account preferences
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-8" style={{ maxWidth: 800 }}>
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Profile Information</h2>
                <p className="text-sm text-slate-500 mt-1">Update your account profile information</p>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#ED3B91] hover:bg-pink-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  Edit
                </button>
              )}
            </div>

            <div className="px-6 py-6">
              {/* Avatar */}
              <div className="flex items-center gap-6 mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #ED3B91, #08B8FB)' }}
                >
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{user?.name}</h3>
                  <p className="text-sm text-slate-500">{user?.email}</p>
                  {user?.role && (
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(237,59,145,0.1)', color: '#ED3B91' }}
                    >
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  )}
                </div>
              </div>

              {/* Form */}
              {isEditing ? (
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#ED3B91] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#ED3B91] focus:ring-2 focus:ring-pink-100 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                      style={{
                        background: 'linear-gradient(135deg, #ff4da6, #ED3B91)',
                        boxShadow: '0 2px 8px rgba(237,59,145,0.25)',
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user?.name || '',
                          email: user?.email || '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-all duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-500 mb-1">Full Name</label>
                    <p className="text-base text-slate-900">{user?.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-500 mb-1">Email Address</label>
                    <p className="text-base text-slate-900">{user?.email}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Security</h2>
              <p className="text-sm text-slate-500 mt-1">Manage your password and security settings</p>
            </div>

            <div className="px-6 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">Password</h3>
                  <p className="text-sm text-slate-500">Change your password to keep your account secure</p>
                </div>
                <button
                  onClick={handleChangePassword}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#ED3B91] hover:bg-pink-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                  </svg>
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Account Information</h2>
              <p className="text-sm text-slate-500 mt-1">View your account details</p>
            </div>

            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-slate-50">
                <span className="text-sm font-medium text-slate-500">User ID</span>
                <span className="text-sm text-slate-900 font-mono">{user?.id}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-50">
                <span className="text-sm font-medium text-slate-500">Account Type</span>
                <span className="text-sm text-slate-900">{user?.role || 'User'}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm font-medium text-slate-500">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
