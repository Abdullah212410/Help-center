import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { useAuth } from '../lib/auth';
import { blogStore } from '../lib/blog';
import { RichTextEditor } from '../components/editor/RichTextEditor';

// ─── Autosave helpers ────────────────────────────────────────────────────────

const AUTOSAVE_INTERVAL = 5_000; // 5 seconds

function draftKey(userId: string, postId?: string): string {
  return `blogDraft:${userId}:${postId ?? 'new'}`;
}

interface DraftData {
  title: string;
  body: string;
  savedAt: string;
}

function loadDraft(userId: string, postId?: string): DraftData | null {
  try {
    const raw = localStorage.getItem(draftKey(userId, postId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveDraftToStorage(userId: string, postId: string | undefined, data: DraftData) {
  localStorage.setItem(draftKey(userId, postId), JSON.stringify(data));
}

function clearDraft(userId: string, postId?: string) {
  localStorage.removeItem(draftKey(userId, postId));
}

// ─── Sanitize HTML for XSS prevention ────────────────────────────────────────

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '');
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function BlogEditor() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = !!postId;

  const existing = useMemo(() => (postId ? blogStore.getById(postId) : undefined), [postId]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);

  const initialised = useRef(false);

  // ── Load existing post or restore draft ──
  useEffect(() => {
    if (!user) return;

    if (existing) {
      setTitle(existing.title);
      setBody(existing.body);
      setStatus(existing.status);
    }

    // Check for autosaved draft
    const draft = loadDraft(user.id, postId);
    if (draft) {
      const savedTime = new Date(draft.savedAt).toLocaleString();
      const restore = window.confirm(
        `A draft was autosaved on ${savedTime}. Restore it?`,
      );
      if (restore) {
        setTitle(draft.title);
        setBody(draft.body);
        setDraftRestored(true);
      } else {
        clearDraft(user.id, postId);
      }
    }

    requestAnimationFrame(() => {
      initialised.current = true;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existing, user, postId]);

  // ── Autosave every 5 seconds ──
  const titleRef = useRef(title);
  const bodyRef = useRef(body);

  titleRef.current = title;
  bodyRef.current = body;

  useEffect(() => {
    if (!user) return;
    const interval = setInterval(() => {
      if (!initialised.current) return;
      const hasContent =
        titleRef.current.trim() ||
        (bodyRef.current.trim() && bodyRef.current !== '<p></p>');
      if (!hasContent) return;

      saveDraftToStorage(user.id, postId, {
        title: titleRef.current,
        body: bodyRef.current,
        savedAt: new Date().toISOString(),
      });
    }, AUTOSAVE_INTERVAL);

    return () => clearInterval(interval);
  }, [user, postId]);

  // ── Check if body has real content ──
  const bodyIsEmpty = !body.trim() || body.replace(/<[^>]*>/g, '').trim() === '';

  // ── Save handler ──
  const handleSave = useCallback(
    (asStatus: 'draft' | 'published') => {
      if (!user) return;

      const empty = !body.trim() || body.replace(/<[^>]*>/g, '').trim() === '';

      if (asStatus === 'published') {
        const noTitle = !title.trim();
        const noContent = empty;
        if (noTitle) setTitleError(true);
        if (noContent) setContentError(true);
        if (noTitle || noContent) return;
      }
      setSaving(true);

      const cleanBody = sanitizeHtml(body.trim());

      try {
        if (isEditing && postId) {
          blogStore.update(user, postId, {
            title: title.trim(),
            body: cleanBody,
            status: asStatus,
            publishedAt:
              asStatus === 'published' && existing?.status === 'draft'
                ? new Date().toISOString()
                : (existing?.publishedAt ?? new Date().toISOString()),
          });
          clearDraft(user.id, postId);
          navigate(`/blog/${postId}`, { replace: true });
        } else {
          const created = blogStore.create(user, {
            title: title.trim(),
            body: cleanBody,
            publishedAt: new Date().toISOString(),
            status: asStatus,
          });
          clearDraft(user.id, undefined);
          navigate(`/blog/${created.id}`, { replace: true });
        }
      } catch (e: any) {
        alert(e.message || 'Failed to save post');
        setSaving(false);
      }
    },
    [user, title, body, isEditing, postId, existing, navigate],
  );

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

          {draftRestored && (
            <span className="text-xs text-amber-600 font-medium">Draft restored</span>
          )}

          <div />
        </div>
      </div>

      {/* ── Editor area ── */}
      <div className="mx-auto px-6 py-8" style={{ maxWidth: 900 }}>
        {preview ? (
          /* ── Preview mode ── */
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
              {title || 'Untitled Post'}
            </h1>
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(body) || '<p><em>No content yet...</em></p>' }}
            />
          </div>
        ) : (
          /* ── Edit mode ── */
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Post Title <span style={{ color: '#ED3B91' }}>*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value); if (titleError) setTitleError(false); }}
                placeholder="Enter a clear and descriptive title"
                className={`w-full text-lg font-semibold placeholder-slate-400 rounded-xl px-3.5 py-2.5 border outline-none transition-all ${
                  titleError
                    ? 'border-red-400 focus:ring-2 focus:ring-red-200 focus:border-red-400'
                    : 'border-slate-200 focus:ring-2 focus:ring-[#ED3B91]/30 focus:border-[#ED3B91]'
                }`}
                style={{ lineHeight: 1.3, background: '#FFFFFF', color: '#111827', fontSize: '18px' }}
              />
              {titleError && (
                <p className="mt-1.5 text-xs text-red-500">Post title is required</p>
              )}
            </div>

            {/* Body (Tiptap) */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Content <span style={{ color: '#ED3B91' }}>*</span>
              </label>
              <RichTextEditor
                value={body}
                onChange={(html) => {
                  setBody(html);
                  if (contentError) setContentError(false);
                }}
                placeholder="Start writing your post..."
                editable
              />
              {contentError && (
                <p className="mt-1.5 text-xs text-red-500">Post content is required</p>
              )}
            </div>
          </div>
        )}

        {/* ── Action buttons ── */}
        <div className="flex items-center justify-end gap-2 mt-6">
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
            disabled={saving}
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all disabled:opacity-40"
          >
            Save Draft
          </button>

          {/* Publish */}
          <button
            onClick={() => handleSave('published')}
            disabled={saving || !title.trim() || bodyIsEmpty}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg, #ff4da6, #ED3B91)' }}
          >
            {isEditing && existing?.status === 'published' ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
