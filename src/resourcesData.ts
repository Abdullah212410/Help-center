export type ResourceActionType = 'watch' | 'download' | 'open';

export interface Resource {
  id: string;
  section: string;
  title: string;
  description: string;
  type: ResourceActionType;
  thumbnail: string;
  link: string;
}

export interface ResourceSectionMeta {
  key: string;
  title: string;
  description: string;
}

export const sectionsMeta: ResourceSectionMeta[] = [
  {
    key: 'tutorials',
    title: 'Tutorials',
    description: 'Step-by-step video guides to help you get the most out of String.',
  },
  {
    key: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to set up your account and start using String right away.',
  },
  {
    key: 'classroom-materials',
    title: 'Classroom Materials',
    description: 'Ready-to-use templates, worksheets, and lesson aids for your classroom.',
  },
  {
    key: 'parent-communication',
    title: 'Parent Communication',
    description: 'Tools and templates to keep parents informed and engaged.',
  },
  {
    key: 'training-support',
    title: 'Training & Support',
    description: 'Professional development resources and support documentation.',
  },
];

export const resources: Resource[] = [
  // ── Tutorials ──
  {
    id: 'tut-1',
    section: 'tutorials',
    title: 'Creating Your First Class',
    description: 'Learn how to set up a new class, invite students, and configure settings.',
    type: 'watch',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'tut-2',
    section: 'tutorials',
    title: 'Using the Gradebook',
    description: 'A complete walkthrough of the gradebook features and grading workflows.',
    type: 'watch',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'tut-3',
    section: 'tutorials',
    title: 'Assigning & Reviewing Work',
    description: 'How to create assignments, collect submissions, and provide feedback.',
    type: 'watch',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'tut-4',
    section: 'tutorials',
    title: 'Attendance Tracking',
    description: 'Manage daily attendance and generate reports for your school.',
    type: 'watch',
    thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop',
    link: '#',
  },

  // ── Getting Started ──
  {
    id: 'gs-1',
    section: 'getting-started',
    title: 'Quick Start Guide',
    description: 'Get up and running with String in under five minutes.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'gs-2',
    section: 'getting-started',
    title: 'Account Setup Checklist',
    description: 'A step-by-step checklist to make sure your account is fully configured.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'gs-3',
    section: 'getting-started',
    title: 'Navigating the Dashboard',
    description: 'Understand the main dashboard layout and key navigation areas.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'gs-4',
    section: 'getting-started',
    title: 'Inviting Your Students',
    description: 'Multiple ways to bring students into your String classroom.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop',
    link: '#',
  },

  // ── Classroom Materials ──
  {
    id: 'cm-1',
    section: 'classroom-materials',
    title: 'Lesson Plan Templates',
    description: 'Pre-built lesson plan templates you can customize for any subject.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'cm-2',
    section: 'classroom-materials',
    title: 'Printable Worksheets',
    description: 'Downloadable worksheets covering core subjects and skills.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'cm-3',
    section: 'classroom-materials',
    title: 'Classroom Rules Poster',
    description: 'A professionally designed poster to display classroom expectations.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'cm-4',
    section: 'classroom-materials',
    title: 'Student Progress Tracker',
    description: 'A spreadsheet template for tracking individual student progress.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    link: '#',
  },

  // ── Parent Communication ──
  {
    id: 'pc-1',
    section: 'parent-communication',
    title: 'Weekly Newsletter Template',
    description: 'A clean template for keeping parents updated on classroom activities.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'pc-2',
    section: 'parent-communication',
    title: 'Parent-Teacher Conference Guide',
    description: 'Tips and talking points for productive parent-teacher meetings.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'pc-3',
    section: 'parent-communication',
    title: 'Messaging Best Practices',
    description: 'How to use String messaging to communicate effectively with families.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'pc-4',
    section: 'parent-communication',
    title: 'Report Card Letter Templates',
    description: 'Customizable letter templates to accompany student report cards.',
    type: 'download',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop',
    link: '#',
  },

  // ── Training & Support ──
  {
    id: 'ts-1',
    section: 'training-support',
    title: 'New Teacher Onboarding',
    description: 'A structured guide to help new teachers get comfortable with String.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'ts-2',
    section: 'training-support',
    title: 'Admin Training Webinar',
    description: 'Recorded webinar covering administrative features and school setup.',
    type: 'watch',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'ts-3',
    section: 'training-support',
    title: 'FAQ & Troubleshooting',
    description: 'Answers to the most common questions and solutions to known issues.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    link: '#',
  },
  {
    id: 'ts-4',
    section: 'training-support',
    title: 'Feature Request & Feedback',
    description: 'Learn how to submit feature ideas and provide feedback to our team.',
    type: 'open',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    link: '#',
  },
];

export function getResourcesBySection(): Map<string, Resource[]> {
  const grouped = new Map<string, Resource[]>();
  for (const resource of resources) {
    const existing = grouped.get(resource.section) || [];
    existing.push(resource);
    grouped.set(resource.section, existing);
  }
  return grouped;
}
