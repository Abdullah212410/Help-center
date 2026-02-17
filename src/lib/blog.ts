import { BlogPost, BlogComment, BlogLike } from '../types';

const POSTS_KEY = 'blogPosts';
const COMMENTS_KEY = 'blogComments';
const LIKES_KEY = 'blogLikes';

// ─── Seed data ───────────────────────────────────────────────────────────────

const SEED_POSTS: BlogPost[] = [
  {
    id: 'post-seed-1',
    title: '5 Engaging Activities for Classrooms',
    excerpt:
      'Discover creative ways to keep students motivated and engaged using String tools and collaborative features.',
    body: `## Why Engagement Matters

Student engagement is one of the strongest predictors of academic success. When students are genuinely involved in their learning, retention improves, behaviour issues decrease, and the classroom becomes a more vibrant place for everyone.

## 1. Interactive Polling & Quizzes

Use String's built-in polling feature to kick off each lesson with a quick knowledge check. Students love seeing their answers appear in real-time on the shared screen.

**How to set it up:**
- Navigate to **Activities > Polls** in your String dashboard
- Choose between multiple-choice, true/false, or open-ended formats
- Share the activity code with your class

## 2. Collaborative Story Building

Assign groups of 3–4 students and have each group contribute a paragraph to a shared story. Use String's collaborative document feature so everyone can type simultaneously.

## 3. Digital Scavenger Hunts

Create a list of clues that lead students to different sections of your String course material. The first team to find all the answers wins.

## 4. Peer Teaching Sessions

Assign each student a micro-topic. Give them 10 minutes to prepare a 2-minute presentation using String's slide builder. Peer teaching reinforces understanding for both the presenter and the audience.

## 5. Reflection Journals

At the end of each week, have students write a short reflection in their String portfolio. Encourage them to connect what they learned to real-world situations.

---

*These activities work across all grade levels and can be adapted for remote or in-person instruction.*`,
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
    body: `## Welcome to String!

As a parent, staying connected to your child's education has never been easier. String gives you a window into your child's classroom, assignments, and progress — all in one place.

## Setting Up Your Parent Account

1. Visit **string.education** and click **Sign Up**
2. Select **Parent / Guardian** as your role
3. Enter the invitation code provided by your child's school
4. Complete your profile

## Navigating the Dashboard

Your parent dashboard shows:
- **Upcoming Assignments** — see what's due and when
- **Grade Overview** — track academic progress over time
- **Messages** — communicate directly with teachers
- **Activity Feed** — see recent classroom highlights

## Tips for Supporting Learning at Home

- **Set a routine:** Consistent study times help children build habits
- **Ask open questions:** Instead of "Did you do your homework?", try "What did you learn today?"
- **Celebrate progress:** Acknowledge effort, not just results

## Privacy & Safety

String takes your child's privacy seriously. All student data is encrypted, and parents can only access information for their own children. Read more in our [Safety & Privacy](/help/category/safety-and-privacy) section.

---

*Have questions? Reach out to our support team anytime.*`,
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
    body: `## The Future of Personalised Education

Every student learns differently. Some grasp concepts quickly; others need more time and different explanations. Traditional one-size-fits-all teaching can leave students behind — or bored.

String Tutor uses AI to solve this problem.

## How It Works

### Adaptive Questioning
String Tutor adjusts the difficulty of questions in real-time based on student responses. If a student is struggling, the system provides simpler problems and additional hints. If they're excelling, it increases the challenge.

### Knowledge Gap Detection
By analysing patterns in student answers, the AI identifies specific concepts that need reinforcement. Teachers receive detailed reports highlighting these gaps.

### Smart Recommendations
Based on performance data, String Tutor recommends:
- Practice exercises targeting weak areas
- Review materials for foundational concepts
- Extension activities for advanced learners

## Teacher Controls

Teachers remain in full control. You can:
- Set difficulty boundaries
- Override AI recommendations
- Review all AI-generated content before it reaches students
- Disable specific features per class or student

## Results So Far

Early adopters report:
- **23% improvement** in test scores over one semester
- **40% reduction** in time spent grading
- **Higher student confidence** in self-directed learning

---

*String Tutor is available on all plans. Visit your dashboard to enable it for your classes.*`,
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
    body: `## What's Coming

We've been listening to teacher feedback, and one of the most requested features is a better way to create, deliver, and grade assessments. We're thrilled to announce the **String Assessment Builder** — coming soon.

## Key Features

- **Drag-and-drop question builder** with support for MCQ, short answer, essay, and file upload questions
- **Rubric templates** to standardise grading across your department
- **Auto-grading** for objective questions with instant student feedback
- **Real-time analytics** showing class performance, question difficulty, and common misconceptions
- **Anti-cheating features** including question randomisation and timed sections

## Early Access

We're looking for teachers to join our beta programme. If you're interested:
1. Log in to your String dashboard
2. Navigate to **Settings > Beta Features**
3. Toggle on **Assessment Builder Beta**

Beta testers will get early access and the opportunity to shape the final product with their feedback.

---

*Stay tuned for more updates. We'll share a full walkthrough once the beta launches.*`,
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// ─── Posts ────────────────────────────────────────────────────────────────────

function getAllPosts(): BlogPost[] {
  return loadList<BlogPost>(POSTS_KEY, SEED_POSTS);
}

function savePosts(posts: BlogPost[]): void {
  saveList(POSTS_KEY, posts);
}

// ─── Comments ────────────────────────────────────────────────────────────────

function getAllComments(): BlogComment[] {
  return loadList<BlogComment>(COMMENTS_KEY, SEED_COMMENTS);
}

function saveComments(comments: BlogComment[]): void {
  saveList(COMMENTS_KEY, comments);
}

// ─── Likes ───────────────────────────────────────────────────────────────────

function getAllLikes(): BlogLike[] {
  return loadList<BlogLike>(LIKES_KEY, SEED_LIKES);
}

function saveLikes(likes: BlogLike[]): void {
  saveList(LIKES_KEY, likes);
}

// ─── Public API ──────────────────────────────────────────────────────────────

export const blogStore = {
  // ── Posts ─────────────────────────────────────────────

  getAll(): BlogPost[] {
    return getAllPosts();
  },

  getPublished(): BlogPost[] {
    return getAllPosts()
      .filter((p) => p.status === 'published')
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  },

  getDrafts(): BlogPost[] {
    return getAllPosts()
      .filter((p) => p.status === 'draft')
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  },

  getLatestPublished(): BlogPost | null {
    const published = this.getPublished();
    return published.length > 0 ? published[0] : null;
  },

  getById(id: string): BlogPost | undefined {
    return getAllPosts().find((p) => p.id === id);
  },

  create(post: Omit<BlogPost, 'id' | 'likes' | 'comments'>): BlogPost {
    const newPost: BlogPost = {
      ...post,
      id: `post-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      likes: 0,
      comments: 0,
    };
    const all = getAllPosts();
    all.push(newPost);
    savePosts(all);
    return newPost;
  },

  update(id: string, updates: Partial<Omit<BlogPost, 'id'>>): BlogPost | null {
    const all = getAllPosts();
    const idx = all.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    all[idx] = { ...all[idx], ...updates, updatedAt: new Date().toISOString() };
    savePosts(all);
    return all[idx];
  },

  remove(id: string): boolean {
    const all = getAllPosts();
    const filtered = all.filter((p) => p.id !== id);
    if (filtered.length === all.length) return false;
    savePosts(filtered);
    // Also clean up comments and likes for this post
    saveComments(getAllComments().filter((c) => c.postId !== id));
    saveLikes(getAllLikes().filter((l) => l.postId !== id));
    return true;
  },

  // ── Comments ──────────────────────────────────────────

  getComments(postId: string): BlogComment[] {
    return getAllComments()
      .filter((c) => c.postId === postId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  },

  getCommentCount(postId: string): number {
    return getAllComments().filter((c) => c.postId === postId).length;
  },

  addComment(postId: string, userId: string, userName: string, content: string): BlogComment {
    const comment: BlogComment = {
      id: `comment-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      postId,
      userId,
      userName,
      content,
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

  deleteComment(commentId: string): boolean {
    const all = getAllComments();
    const comment = all.find((c) => c.id === commentId);
    if (!comment) return false;
    const filtered = all.filter((c) => c.id !== commentId);
    saveComments(filtered);
    // Update post comment count
    const posts = getAllPosts();
    const idx = posts.findIndex((p) => p.id === comment.postId);
    if (idx !== -1) {
      posts[idx].comments = filtered.filter((c) => c.postId === comment.postId).length;
      savePosts(posts);
    }
    return true;
  },

  // ── Likes ─────────────────────────────────────────────

  hasUserLiked(postId: string, userId: string): boolean {
    return getAllLikes().some((l) => l.postId === postId && l.userId === userId);
  },

  getLikeCount(postId: string): number {
    return getAllLikes().filter((l) => l.postId === postId).length;
  },

  toggleLike(postId: string, userId: string): boolean {
    const all = getAllLikes();
    const existing = all.findIndex((l) => l.postId === postId && l.userId === userId);
    if (existing !== -1) {
      all.splice(existing, 1);
      saveLikes(all);
      // Update post like count
      const posts = getAllPosts();
      const idx = posts.findIndex((p) => p.id === postId);
      if (idx !== -1) {
        posts[idx].likes = Math.max(0, all.filter((l) => l.postId === postId).length + posts[idx].likes);
        savePosts(posts);
      }
      return false; // unliked
    } else {
      all.push({ postId, userId });
      saveLikes(all);
      const posts = getAllPosts();
      const idx = posts.findIndex((p) => p.id === postId);
      if (idx !== -1) {
        posts[idx].likes = all.filter((l) => l.postId === postId).length + (SEED_POSTS.find(s => s.id === postId)?.likes ?? 0);
        savePosts(posts);
      }
      return true; // liked
    }
  },
};
