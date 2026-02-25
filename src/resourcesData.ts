export type ResourceActionType = 'watch' | 'download' | 'open';

export interface Resource {
  id: string;
  section: string;
  audience?: 'teacher' | 'student';
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

/* ── Teacher Sections ── */
export const teacherSectionsMeta: ResourceSectionMeta[] = [
  {
    key: 'teacher-videos',
    title: 'Video Guides',
    description: 'Step-by-step video tutorials to help teachers get the most out of String.',
  },
];

/* ── Student Sections ── */
export const studentSectionsMeta: ResourceSectionMeta[] = [
  {
    key: 'student-videos',
    title: 'Video Guides',
    description: 'Video tutorials to help students navigate String and succeed in their classes.',
  },
];

/** Backward-compatible alias — existing code that imports `sectionsMeta` still works. */
export const sectionsMeta = teacherSectionsMeta;
