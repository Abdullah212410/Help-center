import type { en } from '../i18n/en';

type DictKey = keyof typeof en;

export interface TourStepConfig {
  id: string;
  titleKey: DictKey;
  descriptionKey: DictKey;
  selector: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  padding?: number;
}

/** Unique ID used as the localStorage key suffix. Bump the version to re-show the tour. */
export const TUTORIALS_TOUR_ID = 'tutorials-page-v1';

export const tutorialsTourSteps: TourStepConfig[] = [
  {
    id: 'welcome',
    titleKey: 'vTourWelcomeTitle',
    descriptionKey: 'vTourWelcomeDesc',
    selector: '[data-tour="tutorials-header"]',
    placement: 'bottom',
    padding: 12,
  },
  {
    id: 'grid',
    titleKey: 'vTourGridTitle',
    descriptionKey: 'vTourGridDesc',
    selector: '[data-tour="tutorials-grid"]',
    placement: 'auto',
    padding: 8,
  },
  {
    id: 'card',
    titleKey: 'vTourCardTitle',
    descriptionKey: 'vTourCardDesc',
    selector: '[data-tour="tutorials-card"]',
    placement: 'auto',
  },
  {
    id: 'details',
    titleKey: 'vTourDetailsTitle',
    descriptionKey: 'vTourDetailsDesc',
    selector: '[data-tour="tutorials-card-info"]',
    placement: 'auto',
  },
];
