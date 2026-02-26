import { useState, useCallback, useEffect, useRef } from 'react';

export interface TourStep {
  id: string;
  title: string;
  description: string;
  selector: string;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  padding?: number;
}

interface UseGuidedTourOptions {
  tourId: string;
  steps: TourStep[];
  autoStart?: boolean;
}

/** Find the next/previous step whose selector matches a DOM element. */
function findStep(steps: TourStep[], from: number, dir: 1 | -1): number {
  let i = from;
  while (i >= 0 && i < steps.length) {
    try {
      if (document.querySelector(steps[i].selector)) return i;
    } catch {
      /* invalid selector — skip */
    }
    i += dir;
  }
  return -1;
}

export function useGuidedTour({ tourId, steps, autoStart = true }: UseGuidedTourOptions) {
  const key = `guided_tour_done_${tourId}`;
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  // Auto-start on first visit (after a short delay so the page has rendered)
  useEffect(() => {
    if (!autoStart || started.current || steps.length === 0) return;
    if (localStorage.getItem(key)) return;
    started.current = true;
    const timer = setTimeout(() => {
      const first = findStep(steps, 0, 1);
      if (first >= 0) {
        setCurrent(first);
        setIsOpen(true);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [autoStart, key, steps]);

  const completeTour = useCallback(() => {
    localStorage.setItem(key, '1');
    setIsOpen(false);
  }, [key]);

  const startTour = useCallback(() => {
    const first = findStep(steps, 0, 1);
    if (first >= 0) {
      setCurrent(first);
      setIsOpen(true);
    }
  }, [steps]);

  const nextStep = useCallback(() => {
    const n = findStep(steps, current + 1, 1);
    if (n < 0) completeTour();
    else setCurrent(n);
  }, [current, steps, completeTour]);

  const prevStep = useCallback(() => {
    const p = findStep(steps, current - 1, -1);
    if (p >= 0) setCurrent(p);
  }, [current, steps]);

  // Derived: is this the first / last *valid* step?
  const isFirstStep = findStep(steps, current - 1, -1) < 0;
  const isLastStep = findStep(steps, current + 1, 1) < 0;

  // Visible step counts (only steps whose selectors exist in the DOM)
  let validCount = 0;
  let currentVisible = 0;
  for (let i = 0; i < steps.length; i++) {
    try {
      if (document.querySelector(steps[i].selector)) {
        validCount++;
        if (i <= current) currentVisible++;
      }
    } catch {
      /* skip */
    }
  }

  return {
    isOpen,
    step: steps[current] ?? null,
    currentIndex: currentVisible,
    totalSteps: validCount,
    isFirstStep,
    isLastStep,
    startTour,
    nextStep,
    prevStep,
    skipTour: completeTour,
  };
}
