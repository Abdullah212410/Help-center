import React from 'react';
import { ResourcesGridView } from '../components/resources/ResourcesGridView';
import { useI18n } from '../lib/i18n';
import { STUDENT_VIDEOS } from '../data/resourceVideos';

export default function StudentResourcesAllPage() {
  const { lang } = useI18n();

  return (
    <ResourcesGridView
      rawVideos={STUDENT_VIDEOS}
      accentColor="#08B8FB"
      backTo="/help/resources/students"
      backLabel={lang === 'ar' ? 'العودة' : 'Back'}
      title={lang === 'ar' ? <>جميع دروس <span className="gradient-text">الطلاب</span></> : <>All <span className="gradient-text">Student</span> Tutorials</>}
    />
  );
}
