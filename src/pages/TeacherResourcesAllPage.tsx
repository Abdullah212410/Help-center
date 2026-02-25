import React from 'react';
import { ResourcesGridView } from '../components/resources/ResourcesGridView';
import { useI18n } from '../lib/i18n';
import { TEACHER_VIDEOS } from '../data/resourceVideos';

export default function TeacherResourcesAllPage() {
  const { lang } = useI18n();

  return (
    <ResourcesGridView
      rawVideos={TEACHER_VIDEOS}
      accentColor="#ED3B91"
      backTo="/help/resources/teachers"
      backLabel={lang === 'ar' ? 'العودة' : 'Back'}
      title={lang === 'ar' ? <>جميع دروس <span className="gradient-text">المعلمين</span></> : <>All <span className="gradient-text">Teacher</span> Tutorials</>}
    />
  );
}
