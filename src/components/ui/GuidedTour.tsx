import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '../../lib/i18n';
import type { TourStep } from '../../hooks/useGuidedTour';

interface GuidedTourProps {
  isOpen: boolean;
  step: TourStep | null;
  currentIndex: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
}

const MODAL_W = 340;
const GAP = 16;
const VP_PAD = 12;

export default function GuidedTour({
  isOpen,
  step,
  currentIndex,
  totalSteps,
  isFirstStep,
  isLastStep,
  onNext,
  onPrev,
  onSkip,
}: GuidedTourProps) {
  const { dir, t } = useI18n();
  const isRtl = dir === 'rtl';
  const modalRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [modalH, setModalH] = useState(200);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false,
  );
  const [placement, setPlacement] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
  const [animKey, setAnimKey] = useState(0);

  const padding = step?.padding ?? 8;

  // ── Detect mobile ─────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Sync target rect ─────────────────────────────────────────
  const sync = useCallback(() => {
    if (!step) {
      setRect(null);
      return;
    }
    try {
      const el = document.querySelector(step.selector);
      if (el) setRect(el.getBoundingClientRect());
      else setRect(null);
    } catch {
      setRect(null);
    }
  }, [step]);

  // ── On step change: scroll target into view, start sync ──────
  useEffect(() => {
    if (!isOpen || !step) return;

    try {
      const el = document.querySelector(step.selector);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch {
      /* noop */
    }
    setAnimKey((k) => k + 1);

    // Two syncs: one fast (after scroll starts), one after scroll settles
    const t1 = setTimeout(sync, 120);
    const t2 = setTimeout(sync, 450);

    window.addEventListener('resize', sync);
    window.addEventListener('scroll', sync, true);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', sync);
      window.removeEventListener('scroll', sync, true);
    };
  }, [isOpen, step, sync]);

  // ── Measure modal height for smart positioning ───────────────
  useEffect(() => {
    if (modalRef.current) setModalH(modalRef.current.offsetHeight);
  });

  // ── Calculate placement ──────────────────────────────────────
  useEffect(() => {
    if (!rect || isMobile) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const mw = MODAL_W;
    const mh = modalH;
    const sr = vw - rect.right - GAP - VP_PAD - padding;
    const sl = rect.left - GAP - VP_PAD - padding;
    const sb = vh - rect.bottom - GAP - VP_PAD - padding;
    const st = rect.top - GAP - VP_PAD - padding;

    let p: typeof placement;
    if (step?.placement && step.placement !== 'auto') {
      p = step.placement;
    } else if (isRtl) {
      if (sl >= mw) p = 'left';
      else if (sr >= mw) p = 'right';
      else if (sb >= mh) p = 'bottom';
      else p = 'top';
    } else {
      if (sr >= mw) p = 'right';
      else if (sl >= mw) p = 'left';
      else if (sb >= mh) p = 'bottom';
      else p = 'top';
    }
    setPlacement(p);
  }, [rect, modalH, isMobile, isRtl, padding, step]);

  // ── Keyboard: Escape, Enter, Tab trap ────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onSkip();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        isLastStep ? onSkip() : onNext();
      } else if (e.key === 'Tab') {
        const btns = modalRef.current?.querySelectorAll<HTMLElement>('button');
        if (!btns || btns.length === 0) return;
        const first = btns[0];
        const last = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [isOpen, isLastStep, onNext, onSkip]);

  // ── Auto-focus modal on open / step change ───────────────────
  useEffect(() => {
    if (isOpen && modalRef.current) {
      requestAnimationFrame(() => modalRef.current?.focus());
    }
  }, [isOpen, step]);

  // ── Nothing to render ────────────────────────────────────────
  if (!isOpen || !step) return null;

  // ── Modal position ───────────────────────────────────────────
  let modalStyle: React.CSSProperties;

  if (isMobile || !rect) {
    // Mobile → bottom sheet
    modalStyle = {
      position: 'fixed',
      bottom: 16,
      left: 16,
      right: 16,
      zIndex: 10001,
      maxWidth: 'none',
    };
  } else {
    const mw = MODAL_W;
    const mh = modalH;
    let top = 0;
    let left = 0;

    switch (placement) {
      case 'right':
        left = rect.right + padding + GAP;
        top = rect.top + (rect.height - mh) / 2;
        break;
      case 'left':
        left = rect.left - padding - GAP - mw;
        top = rect.top + (rect.height - mh) / 2;
        break;
      case 'bottom':
        top = rect.bottom + padding + GAP;
        left = rect.left + (rect.width - mw) / 2;
        break;
      case 'top':
        top = rect.top - padding - GAP - mh;
        left = rect.left + (rect.width - mw) / 2;
        break;
    }

    // Clamp to viewport
    top = Math.max(VP_PAD, Math.min(window.innerHeight - mh - VP_PAD, top));
    left = Math.max(VP_PAD, Math.min(window.innerWidth - mw - VP_PAD, left));

    modalStyle = { position: 'fixed', top, left, width: mw, zIndex: 10001 };
  }

  // ── Spotlight ────────────────────────────────────────────────
  const spotlightStyle: React.CSSProperties = rect
    ? {
        position: 'fixed',
        top: rect.top - padding,
        left: rect.left - padding,
        width: rect.width + padding * 2,
        height: rect.height + padding * 2,
        borderRadius: 12,
        boxShadow: '0 0 0 9999px rgba(0,0,0,0.55)',
        zIndex: 10000,
        pointerEvents: 'none',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
      }
    : {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.55)',
        zIndex: 10000,
        pointerEvents: 'none',
      };

  // ── Arrow ────────────────────────────────────────────────────
  const ARROW = 10;
  const ARROW_HALF = ARROW / 2;
  let arrowStyle: React.CSSProperties | null = null;

  if (!isMobile && rect) {
    const base: React.CSSProperties = {
      position: 'absolute',
      width: ARROW,
      height: ARROW,
      background: 'white',
      transform: 'rotate(45deg)',
    };
    switch (placement) {
      case 'right':
        arrowStyle = { ...base, left: -ARROW_HALF, top: `calc(50% - ${ARROW_HALF}px)` };
        break;
      case 'left':
        arrowStyle = { ...base, right: -ARROW_HALF, top: `calc(50% - ${ARROW_HALF}px)` };
        break;
      case 'bottom':
        arrowStyle = { ...base, top: -ARROW_HALF, left: `calc(50% - ${ARROW_HALF}px)` };
        break;
      case 'top':
        arrowStyle = { ...base, bottom: -ARROW_HALF, left: `calc(50% - ${ARROW_HALF}px)` };
        break;
    }
  }

  // ── Labels ───────────────────────────────────────────────────
  const skipLabel = t('tutorialSkip');
  const nextLabel = t('tutorialNext');
  const prevLabel = t('tutorialPrev');
  const doneLabel = t('tourDone' as any);
  const stepLabel = t('tutorialStepOf', { current: currentIndex, total: totalSteps });

  return (
    <>
      {/* Keyframes (once) */}
      <style>{`
        @keyframes gtFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Click-capture overlay (clicking outside = skip) */}
      <div
        style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
        onClick={onSkip}
        aria-hidden="true"
      />

      {/* Spotlight cutout */}
      <div style={spotlightStyle} aria-hidden="true" />

      {/* Modal card */}
      <div
        key={animKey}
        ref={modalRef}
        dir={dir}
        role="dialog"
        aria-modal="true"
        aria-label={step.title}
        tabIndex={-1}
        style={{ ...modalStyle, animation: 'gtFadeIn 0.25s ease-out' }}
        className="bg-white rounded-2xl shadow-2xl outline-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Arrow pointer */}
        {arrowStyle && <div style={arrowStyle} aria-hidden="true" />}

        <div className="p-6">
          {/* Step title */}
          <h2 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">
            {step.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed mb-5">{step.description}</p>

          {/* Footer: Skip + Nav buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onSkip}
              className="text-[13px] text-slate-400 hover:text-slate-600 transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
              aria-label={skipLabel}
            >
              {skipLabel}
            </button>

            <div className="flex items-center gap-2">
              {!isFirstStep && (
                <button
                  onClick={onPrev}
                  className="px-4 py-2 text-[13px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  style={{ border: 'none', cursor: 'pointer' }}
                  aria-label={prevLabel}
                >
                  {prevLabel}
                </button>
              )}

              <button
                onClick={isLastStep ? onSkip : onNext}
                className="px-[18px] py-2 text-[13px] font-semibold text-white rounded-lg transition-colors"
                style={{
                  background: '#6c47ff',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#5a38e0')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#6c47ff')}
                aria-label={isLastStep ? doneLabel : `${nextLabel} — ${stepLabel}`}
              >
                {isLastStep ? doneLabel : `${nextLabel} (${stepLabel})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
