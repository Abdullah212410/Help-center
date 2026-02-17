import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Layout } from '../components/Layout';
import { useAuth } from '../lib/auth';
import { blogStore } from '../lib/blog';

export default function BlogEditor() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = !!postId;

  const existing = useMemo(() => (postId ? blogStore.getById(postId) : undefined), [postId]);

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setExcerpt(existing.excerpt);
      setBody(existing.body);
      setTags(existing.tags?.join(', ') ?? '');
      setStatus(existing.status);
    }
  }, [existing]);

  const handleSave = (asStatus: 'draft' | 'published') => {
    if (!user || !title.trim() || !body.trim()) return;
    setSaving(true);

    const tagList = tags
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    if (isEditing && postId) {
      blogStore.update(postId, {
        title: title.trim(),
        excerpt: excerpt.trim(),
        body: body.trim(),
        tags: tagList,
        status: asStatus,
        publishedAt: asStatus === 'published' && existing?.status === 'draft'
          ? new Date().toISOString()
          : existing?.publishedAt ?? new Date().toISOString(),
      });
      navigate(`/blog/${postId}`, { replace: true });
    } else {
      const created = blogStore.create({
        title: title.trim(),
        excerpt: excerpt.trim(),
        body: body.trim(),
        tags: tagList,
        authorId: user.id,
        authorName: user.name,
        publishedAt: new Date().toISOString(),
        status: asStatus,
      });
      navigate(`/blog/${created.id}`, { replace: true });
    }
  };

  // Not found when editing non-existent post
  if (isEditing && !existing) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Post Not Found</h1>
            <p className="text-sm text-slate-500 mb-6">Cannot edit a post that doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #ff4da6, #ED3B91)' }}
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* ── Top bar ── */}
      <div className="sticky top-[70px] z-30 bg-white border-b border-slate-100">
        <div className="mx-auto px-6 py-3 flex items-center justify-between" style={{ maxWidth: 900 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Cancel
          </Link>

          <div className="flex items-center gap-2">
            {/* Preview toggle */}
            <button
              onClick={() => setPreview(!preview)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={
                preview
                  ? { background: '#08B8FB', color: '#fff' }
                  : { background: '#f1f5f9', color: '#64748b' }
              }
            >
              {preview ? 'Edit' : 'Preview'}
            </button>

            {/* Save as draft */}
            <button
              onClick={() => handleSave('draft')}
              disabled={saving || !title.trim() || !body.trim()}
              className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all disabled:opacity-40"
            >
              Save Draft
            </button>

            {/* Publish */}
            <button
              onClick={() => handleSave('published')}
              disabled={saving || !title.trim() || !body.trim()}
              className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, #ff4da6, #ED3B91)' }}
            >
              {isEditing && existing?.status === 'published' ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Editor area ── */}
      <div className="mx-auto px-6 py-8" style={{ maxWidth: 900 }}>
        {preview ? (
          /* ── Preview mode ── */
          <div>
            {tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.split(',').map((t) => t.trim()).filter(Boolean).map((t) => (
                  <span
                    key={t}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                    style={{ background: 'rgba(237,59,145,0.08)', color: '#ED3B91' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
              {title || 'Untitled Post'}
            </h1>
            {excerpt && (
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">{excerpt}</p>
            )}
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-[#ED3B91] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-li:text-slate-600">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body || '*No content yet...*'}</ReactMarkdown>
            </div>
          </div>
        ) : (
          /* ── Edit mode ── */
          <div className="space-y-6">
            {/* Title */}
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title..."
                className="w-full text-3xl md:text-4xl font-extrabold text-slate-900 placeholder-slate-300 border-none outline-none bg-transparent"
                style={{ lineHeight: 1.2 }}
              />
            </div>

            {/* Excerpt */}
            <div>
              <input
                type="text"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Write a short excerpt or summary..."
                className="w-full text-lg text-slate-500 placeholder-slate-300 border-none outline-none bg-transparent"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. teaching, engagement, ai"
                className="w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ED3B91]/30 focus:border-[#ED3B91] transition-all"
              />
            </div>

            {/* Body (Markdown) */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Content (Markdown supported)
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Start writing your post... (Markdown is supported)"
                className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ED3B91]/30 focus:border-[#ED3B91] resize-y transition-all font-mono"
                rows={20}
                style={{ minHeight: 400 }}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
