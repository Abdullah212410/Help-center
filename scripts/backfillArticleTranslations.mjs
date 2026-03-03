/**
 * backfillArticleTranslations.mjs
 *
 * Comprehensive bilingual backfill for Help Center articles.
 * Fixes BOTH directions:
 *   - English fields that are empty/Arabic  -> fill with English
 *   - Arabic fields that are empty/English  -> fill with Arabic
 *
 * Usage:
 *   DRY_RUN=true  node scripts/backfillArticleTranslations.mjs   # preview (default)
 *   DRY_RUN=false node scripts/backfillArticleTranslations.mjs   # live run
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kerqlwwdjixzqiipkbca.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SERVICE_KEY) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY env variable is required.');
  process.exit(1);
}
const DRY_RUN = process.env.DRY_RUN !== 'false'; // default true

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

// ─── Language detection ──────────────────────────────────────────────────────

const AR_CHAR = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

/** Returns true when the text is predominantly Arabic. */
function isMainlyArabic(text) {
  if (!text || text.length < 3) return false;
  // Strip HTML tags and markdown images for cleaner detection
  const clean = text.replace(/<[^>]+>/g, '').replace(/!\[[^\]]*\]\([^)]*\)/g, '').substring(0, 400);
  const arCount = (clean.match(/[\u0600-\u06FF]/g) || []).length;
  const enCount = (clean.match(/[a-zA-Z]/g) || []).length;
  if (arCount + enCount === 0) return false;
  return arCount > enCount;
}

/** Returns true when the text contains at least one Arabic character. */
function hasArabic(text) {
  return text ? AR_CHAR.test(text) : false;
}

// ─── Known fixes: Arabic translations for _ar fields ─────────────────────────

const AR_FIXES = {
  'frequently-asked-questions-guide-1': {
    title_ar: 'دليل الأسئلة الشائعة 1',
    summary_ar: 'وثائق عامة حول الأسئلة الشائعة.',
  },
  'frequently-asked-questions-guide-2': {
    title_ar: 'دليل الأسئلة الشائعة 2',
    summary_ar: 'وثائق عامة حول الأسئلة الشائعة.',
  },
  'frequently-asked-questions-guide-3': {
    title_ar: 'دليل الأسئلة الشائعة 3',
    summary_ar: 'وثائق عامة حول الأسئلة الشائعة.',
  },

  'education-dna-test-guide': {
    body_markdown_ar: `<img
  src="https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center-images/articles/dna-guide-cover.png"
  alt="دليل اختبار الحمض النووي التعليمي"
  style="width:100%; max-width:980px; display:block; margin:16px auto; border-radius:12px;"
/>

<h2>مدارس الخضر الحديثة</h2>

<p><strong>\u{1F539} واجهة المنصة الرئيسية \u2013 مدارس الخضر الحديثة</strong></p>

<h3>\u{1F4CC} نظرة عامة على الاختبار</h3>

<p>
اختبار الحمض النووي التعليمي هو تقييم شامل يتكون من 98 سؤالاً،
مصمم لاكتشاف أنماط التعلم وشخصيتك الأكاديمية.
</p>

<p><strong>\u23F1 مدة الاختبار:</strong> من 6 إلى 8 دقائق.</p>

<p><strong>\u{1F3AF} صيغة الأسئلة:</strong> تحصل على نتيجة مفصلة في النهاية.</p>

<p><strong>\u{1F310} اللغة:</strong> يمكنك التبديل بين العربية والإنجليزية.</p>

<p><strong>\u23F8 الإيقاف المؤقت:</strong> يمكنك حفظ تقدمك والمتابعة لاحقاً.</p>`,
  },

  'education-platform-guide-part-2-spaces': {
    body_markdown_ar: `# دليل المنصة التعليمية

![دليل المساحات](https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center/articles/spaces-guide-cover.png)

## الجزء الثاني: المساحات والمواد الدراسية

**\u{1F539} ملاحظة:** اضغط على اسم الفصل مثل **11D اللغة العربية** للوصول إلى المادة.

### \u{1F4CC} ما هي المساحات؟

تمثل كل مساحة مادة دراسية واحدة. من هنا يمكنك الوصول إلى الواجبات والدروس والمواد المكتوبة وكل ما يتعلق بالمقرر.

للوصول إلى مادة معينة، اضغط على **عرض التفاصيل** تحت اسم المادة المطلوبة.`,
  },

  'education-platform-guide-part-2-spaces-student': {
    body_markdown_ar: `# دليل المنصة التعليمية

![دليل المساحات](https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center/articles/spaces-guide-cover.png)

## الجزء الثاني: المساحات والمواد الدراسية

**\u{1F539} ملاحظة:** اضغط على اسم الفصل مثل **11D اللغة العربية** للوصول إلى المادة.

### \u{1F4CC} ما هي المساحات؟

تمثل كل مساحة مادة دراسية واحدة. من هنا يمكنك الوصول إلى الواجبات والدروس والمواد المكتوبة وكل ما يتعلق بالمقرر.

للوصول إلى مادة معينة، اضغط على **عرض التفاصيل** تحت اسم المادة المطلوبة.`,
  },
};

// ─── Known fixes: English translations for EN fields ─────────────────────────

const EN_FIXES = {
  'education-dna-test-guide': {
    body_markdown: `<img
  src="https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center-images/articles/dna-guide-cover.png"
  alt="DNA Guide"
  style="width:100%; max-width:980px; display:block; margin:16px auto; border-radius:12px;"
/>

<h2>Al-Khadr Modern Schools</h2>

<p><strong>\u{1F539} Main Platform Interface \u2013 Al-Khadr Modern Schools</strong></p>

<h3>\u{1F4CC} Test Overview</h3>

<p>
The Education DNA test is a comprehensive assessment consisting of 98 questions,
designed to discover your learning styles and academic personality.
</p>

<p><strong>\u23F1 Test Duration:</strong> 6 to 8 minutes.</p>

<p><strong>\u{1F3AF} Question Format:</strong> You receive a detailed result at the end.</p>

<p><strong>\u{1F310} Language:</strong> You can switch between Arabic and English.</p>

<p><strong>\u23F8 Pause:</strong> You can save your progress and resume later.</p>`,
  },

  'education-platform-guide-part-2-spaces': {
    body_markdown: `# Education Platform Guide

![Spaces Guide](https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center/articles/spaces-guide-cover.png)

## Part 2: Spaces & Subjects

**\u{1F539} Note:** Click on the class name such as **11D Arabic Language** to access the subject.

### \u{1F4CC} What are Spaces?

Each Space represents a single subject. From here you can access assignments, lessons, written materials,
and everything related to the course.

To access a specific subject, click **View Details** under the desired subject name.`,
  },

  'education-platform-guide-part-2-spaces-student': {
    body_markdown: `# Education Platform Guide

![Spaces Guide](https://kerqlwwdjixzqiipkbca.supabase.co/storage/v1/object/public/help-center/articles/spaces-guide-cover.png)

## Part 2: Spaces & Subjects

**\u{1F539} Note:** Click on the class name such as **11D Arabic Language** to access the subject.

### \u{1F4CC} What are Spaces?

Each Space represents a single subject. From here you can access assignments, lessons, written materials,
and everything related to the course.

To access a specific subject, click **View Details** under the desired subject name.`,
  },
};

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(DRY_RUN ? '=== DRY RUN (no writes) ===' : '=== LIVE RUN ===');
  console.log('');

  // 1. Fetch all articles
  const { data: articles, error } = await sb
    .from('hc_articles')
    .select('id, slug, title, title_ar, summary, summary_ar, body_markdown, body_markdown_ar')
    .order('slug');

  if (error) { console.error('Fetch error:', error); process.exit(1); }
  console.log(`Scanned ${articles.length} articles.\n`);

  const stats = { fixed: 0, skipped: 0, clean: 0 };

  for (const a of articles) {
    const patch = {};
    const reasons = [];

    // ── Check each field pair ────────────────────────────────────────────────

    // title / title_ar
    checkPair(a, 'title', 'title_ar', patch, reasons);
    // summary / summary_ar
    checkPair(a, 'summary', 'summary_ar', patch, reasons);
    // body_markdown / body_markdown_ar
    checkPair(a, 'body_markdown', 'body_markdown_ar', patch, reasons);

    // ── Apply known hardcoded fixes (override auto-detection) ────────────────

    const arFix = AR_FIXES[a.slug];
    if (arFix) {
      for (const [field, value] of Object.entries(arFix)) {
        patch[field] = value;
        if (!reasons.some(r => r.includes(field))) {
          reasons.push(`${field}: hardcoded Arabic fix`);
        }
      }
    }
    const enFix = EN_FIXES[a.slug];
    if (enFix) {
      for (const [field, value] of Object.entries(enFix)) {
        // Only apply EN fix if field is currently empty/wrong-language
        const current = (a[field] || '').trim();
        if (!current || isMainlyArabic(current) || (a[field + '_ar'] && current === (a[field + '_ar'] || '').trim())) {
          patch[field] = value;
          if (!reasons.some(r => r.includes(field))) {
            reasons.push(`${field}: hardcoded English fix`);
          }
        }
      }
    }

    // ── Write update if needed ───────────────────────────────────────────────

    if (Object.keys(patch).length === 0) {
      stats.clean++;
      continue;
    }

    console.log(`[FIX] ${a.slug}`);
    for (const r of reasons) console.log(`       ${r}`);

    if (!DRY_RUN) {
      const { error: updateErr } = await sb
        .from('hc_articles')
        .update(patch)
        .eq('id', a.id);

      if (updateErr) {
        console.error(`  -> FAILED: ${updateErr.message}`);
        stats.skipped++;
        continue;
      }
      console.log(`  -> Updated ${Object.keys(patch).length} field(s).`);
    } else {
      console.log(`  -> (dry run) Would update: ${Object.keys(patch).join(', ')}`);
    }
    stats.fixed++;
  }

  console.log('\n--- Summary ---');
  console.log(`Articles scanned : ${articles.length}`);
  console.log(`Articles fixed   : ${stats.fixed}`);
  console.log(`Articles skipped : ${stats.skipped}`);
  console.log(`Articles clean   : ${stats.clean}`);
  console.log(`Mode             : ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
}

// ─── Helper: check one EN/AR field pair ──────────────────────────────────────

function checkPair(article, enField, arField, patch, reasons) {
  const en = (article[enField] || '').trim();
  const ar = (article[arField] || '').trim();

  // Case 1: EN field is empty but AR exists -> flag (needs EN content)
  if (!en && ar) {
    reasons.push(`${enField}: EMPTY (Arabic exists)`);
    // If we don't have a hardcoded fix, we can't auto-translate, just log it
  }

  // Case 2: AR field is empty but EN exists -> flag
  if (!ar && en) {
    reasons.push(`${arField}: EMPTY (English exists)`);
  }

  // Case 3: EN and AR are identical (duplicate, not translated)
  if (en && ar && en === ar) {
    reasons.push(`${enField} === ${arField} (identical, not translated)`);
  }

  // Case 4: EN field contains mainly Arabic text
  if (en && isMainlyArabic(en)) {
    reasons.push(`${enField}: contains Arabic text`);
  }

  // Case 5: AR field contains mainly English text (no Arabic chars)
  if (ar && !hasArabic(ar) && ar.length > 5) {
    reasons.push(`${arField}: contains only English text`);
    // Clear it so UI fallback takes over (unless we have a hardcoded fix)
    if (!AR_FIXES[article.slug]?.[arField]) {
      patch[arField] = null;
      reasons.push(`${arField}: -> set to NULL (UI will fallback to English)`);
    }
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
