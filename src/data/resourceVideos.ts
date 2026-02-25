/* ═══════════════════════════════════════════════════
   Static video data for Teacher & Student resources.
   Each entry has a YouTube URL and i18n keys for
   title + description (resolved at runtime via t()).
   ═══════════════════════════════════════════════════ */

export interface RawVideo {
  id: string;
  url: string;
  titleKey: string;
  descKey: string;
}

/** Resolved video ready for components (title/desc already translated). */
export interface ResourceVideo {
  id: string;
  url: string;
  title: string;
  description: string;
}

/* ── Teacher videos (11) ── */
export const TEACHER_VIDEOS: RawVideo[] = [
  { id: 't1',  url: 'https://www.youtube.com/watch?v=GzLir4E8Vh4&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i',           titleKey: 'tVid1Title',  descKey: 'tVid1Desc' },
  { id: 't2',  url: 'https://www.youtube.com/watch?v=pQfqDQx8iK0&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=2',   titleKey: 'tVid2Title',  descKey: 'tVid2Desc' },
  { id: 't3',  url: 'https://www.youtube.com/watch?v=sD18A7RboNw&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=3',   titleKey: 'tVid3Title',  descKey: 'tVid3Desc' },
  { id: 't4',  url: 'https://www.youtube.com/watch?v=u4vfaboX27Q&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=4',   titleKey: 'tVid4Title',  descKey: 'tVid4Desc' },
  { id: 't5',  url: 'https://www.youtube.com/watch?v=61pdyunvGBs&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=5',   titleKey: 'tVid5Title',  descKey: 'tVid5Desc' },
  { id: 't6',  url: 'https://www.youtube.com/watch?v=GLQRd3ytVUc&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=6',   titleKey: 'tVid6Title',  descKey: 'tVid6Desc' },
  { id: 't7',  url: 'https://www.youtube.com/watch?v=_qCykYlTBDw&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=7',   titleKey: 'tVid7Title',  descKey: 'tVid7Desc' },
  { id: 't8',  url: 'https://www.youtube.com/watch?v=N73ASQyVOb0&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=8',   titleKey: 'tVid8Title',  descKey: 'tVid8Desc' },
  { id: 't9',  url: 'https://www.youtube.com/watch?v=E2cRWtKIJCk&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=9',   titleKey: 'tVid9Title',  descKey: 'tVid9Desc' },
  { id: 't10', url: 'https://www.youtube.com/watch?v=idPiwcXdyMg&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=10',  titleKey: 'tVid10Title', descKey: 'tVid10Desc' },
  { id: 't11', url: 'https://www.youtube.com/watch?v=5oIGW2mUI1g&list=PLkAvXM4rJZpHxX1DC6seelaWLd_qPj01i&index=11',  titleKey: 'tVid11Title', descKey: 'tVid11Desc' },
];

/* ── Student videos (7) ── */
export const STUDENT_VIDEOS: RawVideo[] = [
  { id: 's1', url: 'https://www.youtube.com/watch?v=sOXoAbDDfLE&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0',           titleKey: 'sVid1Title', descKey: 'sVid1Desc' },
  { id: 's2', url: 'https://www.youtube.com/watch?v=Tfd5yAt2re0&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=2',   titleKey: 'sVid2Title', descKey: 'sVid2Desc' },
  { id: 's3', url: 'https://www.youtube.com/watch?v=fwPxu9cFMKo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=3',   titleKey: 'sVid3Title', descKey: 'sVid3Desc' },
  { id: 's4', url: 'https://www.youtube.com/watch?v=anNmaQbi5pg&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=4',   titleKey: 'sVid4Title', descKey: 'sVid4Desc' },
  { id: 's5', url: 'https://www.youtube.com/watch?v=peeqNm4KzKo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=5',   titleKey: 'sVid5Title', descKey: 'sVid5Desc' },
  { id: 's6', url: 'https://www.youtube.com/watch?v=C9ULabAtcWY&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=6',   titleKey: 'sVid6Title', descKey: 'sVid6Desc' },
  { id: 's7', url: 'https://www.youtube.com/watch?v=v_Kf8U8XbRo&list=PLkAvXM4rJZpEGWV5kPdFUFLwMhceDURL0&index=7',   titleKey: 'sVid7Title', descKey: 'sVid7Desc' },
];
