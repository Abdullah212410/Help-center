import { BlogPost, BlogComment, BlogLike } from '../types';
import type { TeacherUser, UserRole } from './auth';

// ─── Error types (simulating HTTP status codes) ─────────────────────────────

export class BlogAuthError extends Error {
  code: 401 | 403;
  constructor(message: string, code: 401 | 403) {
    super(message);
    this.name = 'BlogAuthError';
    this.code = code;
  }
}

// ─── Constants ──────────────────────────────────────────────────────────────

const POSTS_KEY = 'blogPosts';
const COMMENTS_KEY = 'blogComments';
const LIKES_KEY = 'blogLikes';
const RATE_LIMIT_KEY = 'blogCommentRateLimit';

const BLOG_WRITE_ROLES: UserRole[] = ['teacher', 'admin'];
const MAX_COMMENT_LENGTH = 2000;
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 comments per minute

// ─── Seed data ──────────────────────────────────────────────────────────────

const SEED_POSTS: BlogPost[] = [
  {
    id: 'post-seed-1',
    title: '5 Engaging Activities for Classrooms',
    excerpt:
      'Discover creative ways to keep students motivated and engaged using String tools and collaborative features.',
    body: `<h2>Why Engagement Matters</h2><p>Student engagement is one of the strongest predictors of academic success. When students are genuinely involved in their learning, retention improves, behaviour issues decrease, and the classroom becomes a more vibrant place for everyone.</p><h2>1. Interactive Polling &amp; Quizzes</h2><p>Use String's built-in polling feature to kick off each lesson with a quick knowledge check. Students love seeing their answers appear in real-time on the shared screen.</p><p><strong>How to set it up:</strong></p><ul><li>Navigate to <strong>Activities &gt; Polls</strong> in your String dashboard</li><li>Choose between multiple-choice, true/false, or open-ended formats</li><li>Share the activity code with your class</li></ul><h2>2. Collaborative Story Building</h2><p>Assign groups of 3–4 students and have each group contribute a paragraph to a shared story. Use String's collaborative document feature so everyone can type simultaneously.</p><h2>3. Digital Scavenger Hunts</h2><p>Create a list of clues that lead students to different sections of your String course material. The first team to find all the answers wins.</p><h2>4. Peer Teaching Sessions</h2><p>Assign each student a micro-topic. Give them 10 minutes to prepare a 2-minute presentation using String's slide builder. Peer teaching reinforces understanding for both the presenter and the audience.</p><h2>5. Reflection Journals</h2><p>At the end of each week, have students write a short reflection in their String portfolio. Encourage them to connect what they learned to real-world situations.</p><hr><p><em>These activities work across all grade levels and can be adapted for remote or in-person instruction.</em></p>`,
    tags: ['teaching', 'engagement', 'activities', 'classroom'],
    authorId: 'admin-seed',
    authorName: 'Ahmad Hassan',
    publishedAt: '2026-01-17T10:00:00Z',
    likes: 18,
    comments: 4,
    status: 'published',
  },
  {
    id: 'post-seed-2',
    title: 'Getting Started with String for Parents',
    excerpt:
      'A step-by-step guide to help parents navigate String, monitor progress, and support their children\'s learning journey.',
    body: `<h2>Welcome to String!</h2><p>As a parent, staying connected to your child's education has never been easier. String gives you a window into your child's classroom, assignments, and progress — all in one place.</p><h2>Setting Up Your Parent Account</h2><ol><li>Visit <strong>string.education</strong> and click <strong>Sign Up</strong></li><li>Select <strong>Parent / Guardian</strong> as your role</li><li>Enter the invitation code provided by your child's school</li><li>Complete your profile</li></ol><h2>Navigating the Dashboard</h2><p>Your parent dashboard shows:</p><ul><li><strong>Upcoming Assignments</strong> — see what's due and when</li><li><strong>Grade Overview</strong> — track academic progress over time</li><li><strong>Messages</strong> — communicate directly with teachers</li><li><strong>Activity Feed</strong> — see recent classroom highlights</li></ul><h2>Tips for Supporting Learning at Home</h2><ul><li><strong>Set a routine:</strong> Consistent study times help children build habits</li><li><strong>Ask open questions:</strong> Instead of "Did you do your homework?", try "What did you learn today?"</li><li><strong>Celebrate progress:</strong> Acknowledge effort, not just results</li></ul><h2>Privacy &amp; Safety</h2><p>String takes your child's privacy seriously. All student data is encrypted, and parents can only access information for their own children. Read more in our <a href="/help/category/safety-and-privacy">Safety &amp; Privacy</a> section.</p><hr><p><em>Have questions? Reach out to our support team anytime.</em></p>`,
    tags: ['parents', 'getting-started', 'guide'],
    authorId: 'admin-seed',
    authorName: 'Ahmad Hassan',
    publishedAt: '2026-02-03T08:30:00Z',
    likes: 12,
    comments: 2,
    status: 'published',
  },
  {
    id: 'post-seed-3',
    title: 'How String Tutor Uses AI to Personalise Learning',
    excerpt:
      'Learn how our AI-powered tutor adapts to each student\'s pace, identifies knowledge gaps, and recommends targeted practice.',
    body: `<h2>The Future of Personalised Education</h2><p>Every student learns differently. Some grasp concepts quickly; others need more time and different explanations. Traditional one-size-fits-all teaching can leave students behind — or bored.</p><p>String Tutor uses AI to solve this problem.</p><h2>How It Works</h2><h2>Adaptive Questioning</h2><p>String Tutor adjusts the difficulty of questions in real-time based on student responses. If a student is struggling, the system provides simpler problems and additional hints. If they're excelling, it increases the challenge.</p><h2>Knowledge Gap Detection</h2><p>By analysing patterns in student answers, the AI identifies specific concepts that need reinforcement. Teachers receive detailed reports highlighting these gaps.</p><h2>Smart Recommendations</h2><p>Based on performance data, String Tutor recommends:</p><ul><li>Practice exercises targeting weak areas</li><li>Review materials for foundational concepts</li><li>Extension activities for advanced learners</li></ul><h2>Teacher Controls</h2><p>Teachers remain in full control. You can:</p><ul><li>Set difficulty boundaries</li><li>Override AI recommendations</li><li>Review all AI-generated content before it reaches students</li><li>Disable specific features per class or student</li></ul><h2>Results So Far</h2><p>Early adopters report:</p><ul><li><strong>23% improvement</strong> in test scores over one semester</li><li><strong>40% reduction</strong> in time spent grading</li><li><strong>Higher student confidence</strong> in self-directed learning</li></ul><hr><p><em>String Tutor is available on all plans. Visit your dashboard to enable it for your classes.</em></p>`,
    tags: ['ai', 'tutor', 'personalisation', 'technology'],
    authorId: 'admin-seed',
    authorName: 'Ahmad Hassan',
    publishedAt: '2026-02-10T14:00:00Z',
    likes: 31,
    comments: 7,
    status: 'published',
  },
  {
    id: 'post-seed-4',
    title: 'Upcoming: String\'s New Assessment Builder',
    excerpt:
      'We\'re building a powerful new assessment tool with auto-grading, rubric templates, and real-time analytics.',
    body: `<h2>What's Coming</h2><p>We've been listening to teacher feedback, and one of the most requested features is a better way to create, deliver, and grade assessments. We're thrilled to announce the <strong>String Assessment Builder</strong> — coming soon.</p><h2>Key Features</h2><ul><li><strong>Drag-and-drop question builder</strong> with support for MCQ, short answer, essay, and file upload questions</li><li><strong>Rubric templates</strong> to standardise grading across your department</li><li><strong>Auto-grading</strong> for objective questions with instant student feedback</li><li><strong>Real-time analytics</strong> showing class performance, question difficulty, and common misconceptions</li><li><strong>Anti-cheating features</strong> including question randomisation and timed sections</li></ul><h2>Early Access</h2><p>We're looking for teachers to join our beta programme. If you're interested:</p><ol><li>Log in to your String dashboard</li><li>Navigate to <strong>Settings &gt; Beta Features</strong></li><li>Toggle on <strong>Assessment Builder Beta</strong></li></ol><p>Beta testers will get early access and the opportunity to shape the final product with their feedback.</p><hr><p><em>Stay tuned for more updates. We'll share a full walkthrough once the beta launches.</em></p>`,
    tags: ['product', 'assessment', 'announcement'],
    authorId: 'admin-seed',
    authorName: 'Ahmad Hassan',
    publishedAt: '2026-02-14T11:00:00Z',
    likes: 8,
    comments: 1,
    status: 'draft',
  },
];

const SEED_COMMENTS: BlogComment[] = [
  {
    id: 'comment-seed-1',
    postId: 'post-seed-1',
    userId: 'teacher-seed-1',
    userName: 'Sarah Johnson',
    content: 'The collaborative story building activity worked wonderfully with my Year 5 class. They were so engaged!',
    createdAt: '2026-01-18T09:15:00Z',
  },
  {
    id: 'comment-seed-2',
    postId: 'post-seed-1',
    userId: 'teacher-seed-2',
    userName: 'Maria Garcia',
    content: 'I adapted the scavenger hunt for a science lesson and the students loved it. Great ideas!',
    createdAt: '2026-01-19T14:30:00Z',
  },
  {
    id: 'comment-seed-3',
    postId: 'post-seed-3',
    userId: 'teacher-seed-1',
    userName: 'Sarah Johnson',
    content: 'The AI tutor has been a game-changer for differentiation in my mixed-ability class.',
    createdAt: '2026-02-11T10:00:00Z',
  },
];

const SEED_LIKES: BlogLike[] = [];

// ─── Helpers ────────────────────────────────────────────────────────────────

function loadList<T>(key: string, seed: T[]): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveList<T>(key: string, items: T[]): void {
  localStorage.setItem(key, JSON.stringify(items));
}

// ─── Internal accessors ─────────────────────────────────────────────────────

function getAllPosts(): BlogPost[] {
  return loadList<BlogPost>(POSTS_KEY, SEED_POSTS);
}
function savePosts(posts: BlogPost[]): void {
  saveList(POSTS_KEY, posts);
}
function getAllComments(): BlogComment[] {
  return loadList<BlogComment>(COMMENTS_KEY, SEED_COMMENTS);
}
function saveComments(comments: BlogComment[]): void {
  saveList(COMMENTS_KEY, comments);
}
function getAllLikes(): BlogLike[] {
  return loadList<BlogLike>(LIKES_KEY, SEED_LIKES);
}
function saveLikes(likes: BlogLike[]): void {
  saveList(LIKES_KEY, likes);
}

// ─── Auth guards (simulating backend middleware) ────────────────────────────

function normalizeRole(role: unknown): string {
  return typeof role === 'string' ? role.toLowerCase().trim() : '';
}

function requireAuth(user: TeacherUser | null): asserts user is TeacherUser {
  if (!user) {
    console.warn('[Blog] 401 — unauthenticated request blocked');
    throw new BlogAuthError('Authentication required', 401);
  }
}

function requireBlogWriter(user: TeacherUser | null): asserts user is TeacherUser {
  requireAuth(user);
  const role = normalizeRole(user.role);
  if (!BLOG_WRITE_ROLES.includes(role as UserRole)) {
    console.warn(`[Blog] 403 — role "${user.role}" (normalized: "${role}") denied write access`);
    throw new BlogAuthError('Forbidden: teacher or admin role required', 403);
  }
}

function requireOwnerOrAdmin(user: TeacherUser, post: BlogPost): void {
  const role = normalizeRole(user.role);
  if (role === 'admin') return;
  if (post.authorId !== user.id) {
    console.warn(`[Blog] 403 — user ${user.id} (role: ${role}) denied: not owner of post ${post.id}`);
    throw new BlogAuthError('Forbidden: you can only edit/delete your own posts', 403);
  }
}

// ─── Input sanitization ────────────────────────────────────────────────────

function sanitizeText(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

// ─── Rate limiting (per-user comment throttle) ──────────────────────────────

function checkCommentRateLimit(userId: string): void {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const records: { userId: string; ts: number }[] = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    const recentByUser = records.filter((r) => r.userId === userId && r.ts > windowStart);
    if (recentByUser.length >= RATE_LIMIT_MAX) {
      throw new BlogAuthError('Too many comments. Please wait a moment.', 403);
    }
    // Record this attempt and prune old entries
    records.push({ userId, ts: now });
    const pruned = records.filter((r) => r.ts > windowStart);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(pruned));
  } catch (e) {
    if (e instanceof BlogAuthError) throw e;
    // If rate limit storage fails, allow the action
  }
}

// ─── Public API ─────────────────────────────────────────────────────────────

export const blogStore = {
  // ── Read (public) ─────────────────────────────────────

  getAll(): BlogPost[] {
    return getAllPosts();
  },

  getPublished(): BlogPost[] {
    return getAllPosts()
      .filter((p) => p.status === 'published')
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  },

  /** Returns drafts — for admin: all drafts, for teacher: only own drafts */
  getDrafts(user: TeacherUser | null): BlogPost[] {
    if (!user || !BLOG_WRITE_ROLES.includes(user.role)) return [];
    return getAllPosts()
      .filter((p) => p.status === 'draft')
      .filter((p) => user.role === 'admin' || p.authorId === user.id)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  },

  getLatestPublished(): BlogPost | null {
    const published = this.getPublished();
    return published.length > 0 ? published[0] : null;
  },

  getById(id: string): BlogPost | undefined {
    return getAllPosts().find((p) => p.id === id);
  },

  // ── Write (teacher/admin only, enforced) ──────────────

  /**
   * Create a new blog post.
   * @throws BlogAuthError 401 if not authenticated, 403 if not teacher/admin
   */
  create(user: TeacherUser | null, post: Omit<BlogPost, 'id' | 'likes' | 'comments' | 'authorId' | 'authorName'>): BlogPost {
    requireBlogWriter(user);
    const newPost: BlogPost = {
      ...post,
      title: post.title.trim(),
      excerpt: post.excerpt?.trim(),
      body: post.body.trim(),
      id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      authorId: user.id,
      authorName: user.name,
      likes: 0,
      comments: 0,
    };
    const all = getAllPosts();
    all.push(newPost);
    savePosts(all);
    return newPost;
  },

  /**
   * Update an existing blog post.
   * @throws BlogAuthError 401/403 if not allowed, or if not owner (unless admin)
   */
  update(user: TeacherUser | null, id: string, updates: Partial<Omit<BlogPost, 'id' | 'authorId' | 'authorName'>>): BlogPost | null {
    requireBlogWriter(user);
    const all = getAllPosts();
    const idx = all.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    requireOwnerOrAdmin(user, all[idx]);
    all[idx] = { ...all[idx], ...updates, updatedAt: new Date().toISOString() };
    savePosts(all);
    return all[idx];
  },

  /**
   * Delete a blog post and its comments/likes.
   * @throws BlogAuthError 401/403 if not allowed, or if not owner (unless admin)
   */
  remove(user: TeacherUser | null, id: string): boolean {
    requireBlogWriter(user);
    const all = getAllPosts();
    const post = all.find((p) => p.id === id);
    if (!post) return false;
    requireOwnerOrAdmin(user, post);
    const filtered = all.filter((p) => p.id !== id);
    savePosts(filtered);
    saveComments(getAllComments().filter((c) => c.postId !== id));
    saveLikes(getAllLikes().filter((l) => l.postId !== id));
    return true;
  },

  /** Check if a user can edit/delete a specific post */
  canModifyPost(user: TeacherUser | null, post: BlogPost): boolean {
    if (!user) return false;
    if (!BLOG_WRITE_ROLES.includes(user.role)) return false;
    if (user.role === 'admin') return true;
    return post.authorId === user.id;
  },

  // ── Comments (any signed-in user, enforced) ───────────

  getComments(postId: string): BlogComment[] {
    return getAllComments()
      .filter((c) => c.postId === postId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  },

  getCommentCount(postId: string): number {
    return getAllComments().filter((c) => c.postId === postId).length;
  },

  /**
   * Add a comment. Requires authentication. Rate-limited. Input sanitized.
   * @throws BlogAuthError 401 if not signed in, 403 if rate-limited
   */
  addComment(user: TeacherUser | null, postId: string, content: string): BlogComment {
    requireAuth(user);
    checkCommentRateLimit(user.id);

    const sanitized = sanitizeText(content);
    if (!sanitized || sanitized.length === 0) {
      throw new BlogAuthError('Comment cannot be empty', 403);
    }
    const trimmed = sanitized.slice(0, MAX_COMMENT_LENGTH);

    const comment: BlogComment = {
      id: `comment-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      postId,
      userId: user.id,
      userName: user.name,
      content: trimmed,
      createdAt: new Date().toISOString(),
    };
    const all = getAllComments();
    all.push(comment);
    saveComments(all);
    // Update post comment count
    const posts = getAllPosts();
    const idx = posts.findIndex((p) => p.id === postId);
    if (idx !== -1) {
      posts[idx].comments = all.filter((c) => c.postId === postId).length;
      savePosts(posts);
    }
    return comment;
  },

  /**
   * Delete a comment. Only the comment author or an admin can delete.
   * @throws BlogAuthError 401/403
   */
  deleteComment(user: TeacherUser | null, commentId: string): boolean {
    requireAuth(user);
    const all = getAllComments();
    const comment = all.find((c) => c.id === commentId);
    if (!comment) return false;
    if (user.role !== 'admin' && comment.userId !== user.id) {
      throw new BlogAuthError('Forbidden: you can only delete your own comments', 403);
    }
    const filtered = all.filter((c) => c.id !== commentId);
    saveComments(filtered);
    const posts = getAllPosts();
    const idx = posts.findIndex((p) => p.id === comment.postId);
    if (idx !== -1) {
      posts[idx].comments = filtered.filter((c) => c.postId === comment.postId).length;
      savePosts(posts);
    }
    return true;
  },

  // ── Likes (any signed-in user, enforced, unique per user) ──

  hasUserLiked(postId: string, userId: string): boolean {
    return getAllLikes().some((l) => l.postId === postId && l.userId === userId);
  },

  getLikeCount(postId: string): number {
    return getAllLikes().filter((l) => l.postId === postId).length;
  },

  /**
   * Toggle like. Enforces one-like-per-user-per-post.
   * @returns true if now liked, false if unliked
   * @throws BlogAuthError 401 if not signed in
   */
  toggleLike(user: TeacherUser | null, postId: string): boolean {
    requireAuth(user);
    const all = getAllLikes();
    const existing = all.findIndex((l) => l.postId === postId && l.userId === user.id);

    if (existing !== -1) {
      // Unlike
      all.splice(existing, 1);
      saveLikes(all);
      const posts = getAllPosts();
      const idx = posts.findIndex((p) => p.id === postId);
      if (idx !== -1) {
        const baseLikes = SEED_POSTS.find((s) => s.id === postId)?.likes ?? 0;
        posts[idx].likes = all.filter((l) => l.postId === postId).length + baseLikes;
        savePosts(posts);
      }
      return false;
    } else {
      // Like — enforce uniqueness
      all.push({ postId, userId: user.id });
      saveLikes(all);
      const posts = getAllPosts();
      const idx = posts.findIndex((p) => p.id === postId);
      if (idx !== -1) {
        const baseLikes = SEED_POSTS.find((s) => s.id === postId)?.likes ?? 0;
        posts[idx].likes = all.filter((l) => l.postId === postId).length + baseLikes;
        savePosts(posts);
      }
      return true;
    }
  },
};
