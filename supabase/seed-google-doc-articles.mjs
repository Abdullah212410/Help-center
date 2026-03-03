/**
 * Seed script: Import articles from Google Doc content
 * Document: "العصفور سترينغ او المساعد" (String Bird Assistant)
 * Target: For Students → Learning Tools + Getting Started sections
 *
 * Run: node supabase/seed-google-doc-articles.mjs
 */

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://kerqlwwdjixzqiipkbca.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_ROLE_KEY) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY environment variable is required.");
  console.error("Run: SUPABASE_SERVICE_ROLE_KEY=your-key node supabase/seed-google-doc-articles.mjs");
  process.exit(1);
}

// Section IDs (For Students category)
const LEARNING_TOOLS_SECTION = "ee2f777e-06f0-4666-8c26-110ea2cf6ae4";
const GETTING_STARTED_SECTION = "e4030054-3d67-4e61-aa3a-619cdeb6089d";

const articles = [
  {
    section_id: LEARNING_TOOLS_SECTION,
    slug: "string-bird-assistant",
    title: "String Bird Assistant",
    title_ar: "العصفور سترينغ - المساعد",
    summary: "Overview of the String Bird Assistant and its key features including Calendar, Apps, Daily Quests, and Pomodoro Timer.",
    summary_ar: "نظرة عامة على العصفور سترينغ المساعد وميزاته الرئيسية بما في ذلك التقويم والتطبيقات والمهام اليومية والمؤقت.",
    body_markdown: `The **String Bird Assistant** is your personal helper within the String platform. It gives you quick access to several important features:

- **Calendar** – Plan and manage your activities
- **Apps** – Access 50+ educational applications
- **Daily Quests** – Complete daily tasks to earn points
- **Pomodoro Timer** – Stay focused with timed study sessions

Each of these features is designed to help you stay organized and make the most of your learning experience on String.`,
    body_markdown_ar: `**العصفور سترينغ** هو مساعدك الشخصي في منصة سترينغ. يحتوي على عدة أشياء مهمة:

- **التقويم** – خطط وأدر أنشطتك
- **التطبيقات** – استخدم أكثر من 50 تطبيقاً تعليمياً
- **المهام اليومية** – أكمل المهام اليومية للحصول على النقاط
- **البومودورو (المؤقت)** – ابقَ مركزاً مع جلسات دراسة مؤقتة

كل واحدة من هذه الميزات مصممة لمساعدتك على البقاء منظماً وتحقيق أقصى استفادة من تجربة التعلم على سترينغ.`,
    sort_order: 10,
    is_published: true,
    tags: ["guide", "students", "string-bird"],
  },
  {
    section_id: LEARNING_TOOLS_SECTION,
    slug: "using-the-calendar",
    title: "Using the Calendar",
    title_ar: "استخدام التقويم",
    summary: "Learn how to use the Calendar feature to manage your activities and stay organized.",
    summary_ar: "تعرف على كيفية استخدام ميزة التقويم لإدارة أنشطتك والبقاء منظماً.",
    body_markdown: `The **Calendar** feature in String allows you to manage all your activities and stay organized.

## How to Use the Calendar

You can add all your activities to the calendar by clicking the **Add Activity** button. This helps you:

- Keep track of your class schedule
- Set reminders for assignments and deadlines
- Plan your study sessions effectively

Simply navigate to the Calendar tab in the String Bird Assistant and start adding your activities to stay on top of your schedule.`,
    body_markdown_ar: `ميزة **التقويم** في سترينغ تتيح لك إدارة جميع أنشطتك والبقاء منظماً.

## كيفية استخدام التقويم

بإمكانك إضافة كامل أنشطتك عن طريق الضغط على زر **إضافة نشاط**. هذا يساعدك على:

- متابعة جدول حصصك
- تعيين تذكيرات للواجبات والمواعيد النهائية
- التخطيط لجلسات دراستك بفعالية

ببساطة انتقل إلى تبويب التقويم في العصفور سترينغ وابدأ بإضافة أنشطتك للبقاء على اطلاع على جدولك.`,
    sort_order: 20,
    is_published: true,
    tags: ["guide", "students", "calendar"],
  },
  {
    section_id: LEARNING_TOOLS_SECTION,
    slug: "educational-apps",
    title: "Educational Apps",
    title_ar: "التطبيقات التعليمية",
    summary: "Explore over 50 educational applications available in String's Apps section.",
    summary_ar: "استكشف أكثر من 50 تطبيقاً تعليمياً متاحاً في قسم التطبيقات في سترينغ.",
    body_markdown: `The **Apps** section in String is like your personal educational backpack, containing all the applications you need for learning.

## What's Available

String provides access to **over 50 educational applications**, including:

- **Google Translate** – Translate text between languages
- And many more useful learning tools

## How to Access Apps

Navigate to the Apps tab in the String Bird Assistant to browse and launch any of the available applications. Each app is selected to support your learning journey and provide tools that complement your classroom experience.`,
    body_markdown_ar: `قسم **التطبيقات** في سترينغ هو كالحقيبة التعليمية لديك، ويحتوي على جميع التطبيقات التي تحتاجها للتعلم.

## ما المتاح

يوفر سترينغ الوصول إلى **أكثر من 50 تطبيقاً تعليمياً**، بما في ذلك:

- **غوغل ترانزليت** – ترجمة النصوص بين اللغات
- والعديد من أدوات التعلم المفيدة الأخرى

## كيفية الوصول للتطبيقات

انتقل إلى تبويب التطبيقات في العصفور سترينغ لتصفح وتشغيل أي من التطبيقات المتاحة. كل تطبيق تم اختياره لدعم رحلة تعلمك وتوفير أدوات تكمل تجربتك في الفصل.`,
    sort_order: 30,
    is_published: true,
    tags: ["guide", "students", "apps"],
  },
  {
    section_id: LEARNING_TOOLS_SECTION,
    slug: "daily-quests",
    title: "Daily Quests",
    title_ar: "المهام اليومية",
    summary: "Complete daily tasks to earn points, learn about hints, and understand how questions are generated from your lessons.",
    summary_ar: "أكمل المهام اليومية لكسب النقاط، تعرف على التلميحات، وافهم كيف يتم توليد الأسئلة من دروسك.",
    body_markdown: `**Daily Quests** are daily tasks designed to help you earn points through regular practice, similar to a daily streak system.

## How Daily Quests Work

- You must complete tasks **daily** to earn points and maintain your streak
- Each subject has its own daily quests based on what you've learned with your teacher
- Questions are tied to your lesson progress — if you completed Lesson 1, questions will only be from Lesson 1, and so on

## Answering Questions

- Questions are presented in **multiple choice** format
- After a **wrong answer**, you can view the **correct answer and explanation**

## Using Hints

There is a **Hint** button available, but using it comes at a cost:

- Using a hint **deducts 30%** of the question's marks
- For example, on a question worth **10 marks**, using a hint will take **3 marks**, reducing the question value to **7 marks**

Use hints wisely to maximize your score!`,
    body_markdown_ar: `**المهام اليومية** هي مهام يومية مصممة لمساعدتك على كسب النقاط من خلال الممارسة المنتظمة، مشابهة لفكرة الستريك اليومي.

## كيف تعمل المهام اليومية

- يجب عليك بشكل يومي ممارسة حل المهام للحصول على النقاط والحفاظ على الستريك
- كل مادة لها مهامها اليومية الخاصة بناءً على ما تعلمته مع أستاذك
- الأسئلة مرتبطة بتقدمك في الدروس — إذا أنهيت الدرس الأول، الأسئلة فقط تكون من الدرس الأول وهكذا

## الإجابة على الأسئلة

- الأسئلة تكون على شكل **اختيار من متعدد**
- بعد **الإجابة الخاطئة**، تستطيع رؤية **الإجابة الصحيحة والشرح**

## استخدام التلميحات

يوجد زر **تلميح** تستطيع استخدامه، ولكنه يأتي بتكلفة:

- استخدام التلميح **يخصم 30%** من علامة السؤال
- مثلاً، على سؤال بقيمة **10 علامات**، استخدام التلميح سيأخذ **3 علامات**، مما يقلل قيمة السؤال إلى **7 علامات**

استخدم التلميحات بحكمة لتحقيق أعلى درجة!`,
    sort_order: 40,
    is_published: true,
    tags: ["guide", "students", "daily-quests", "points"],
  },
  {
    section_id: LEARNING_TOOLS_SECTION,
    slug: "grading-system",
    title: "Grading System",
    title_ar: "نظام العلامات",
    summary: "View your grades for quizzes and tests, and access detailed performance breakdowns.",
    summary_ar: "اعرض علاماتك في الكويزات والاختبارات، واطّلع على تفاصيل أدائك.",
    body_markdown: `The **Grading System** in String allows you to view your grades and performance across all subjects.

## Viewing Your Grades

- Subject names with their grades are displayed in full, whether for a **quiz** or a **test**
- You can see a complete overview of all your grades in one place

## Viewing Detailed Results

- Click the **eye icon** on the right side to view full details of any grade
- You can see detailed breakdowns of your performance including individual question results

Keep track of your grades regularly to monitor your learning progress!`,
    body_markdown_ar: `**نظام العلامات** في سترينغ يتيح لك عرض علاماتك وأدائك في جميع المواد.

## عرض علاماتك

- أسماء المواد مع العلامات تظهر بشكل كامل سواء كان **كويز** أو **اختبار**
- يمكنك رؤية نظرة شاملة على جميع علاماتك في مكان واحد

## عرض النتائج التفصيلية

- اضغط على أيقونة **العين** على اليمين لرؤية كامل التفاصيل لأي علامة
- يمكنك رؤية تفاصيل أدائك بما في ذلك نتائج الأسئلة الفردية

تابع علاماتك بانتظام لمراقبة تقدمك في التعلم!`,
    sort_order: 50,
    is_published: true,
    tags: ["guide", "students", "grades"],
  },
  {
    section_id: GETTING_STARTED_SECTION,
    slug: "getting-help-and-support",
    title: "Getting Help & Support",
    title_ar: "الحصول على المساعدة والدعم",
    summary: "Find the Help button and learn how to contact support or report problems.",
    summary_ar: "اعثر على زر المساعدة وتعرف على كيفية التواصل مع الدعم أو الإبلاغ عن مشاكل.",
    body_markdown: `If you need assistance while using String, the **Help** feature makes it easy to get support.

## How to Get Help

- Look for the **Help button** at the bottom of the tab
- Click it to access the support options

## What You Can Do

- **Talk to Support** – Chat directly with the support team
- **Report Problems** – Let the team know about any issues you're experiencing

The support team is there to help you with any problems or questions you have about using String.`,
    body_markdown_ar: `إذا كنت بحاجة لمساعدة أثناء استخدام سترينغ، ميزة **المساعدة** تسهّل عليك الحصول على الدعم.

## كيفية الحصول على المساعدة

- ابحث عن **زر المساعدة** في أسفل التبويب
- اضغط عليه للوصول إلى خيارات الدعم

## ما يمكنك فعله

- **التحدث مع الدعم** – تحدث مباشرة مع فريق الدعم
- **الإبلاغ عن مشاكل** – أخبر الفريق عن أي مشاكل تواجهها

فريق الدعم موجود لمساعدتك في أي مشاكل أو أسئلة لديك حول استخدام سترينغ.`,
    sort_order: 10,
    is_published: true,
    tags: ["guide", "students", "support", "help"],
  },
];

async function insertArticles() {
  console.log(`Inserting ${articles.length} articles into Supabase...\n`);

  const res = await fetch(`${SUPABASE_URL}/rest/v1/hc_articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(articles),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`INSERT FAILED (${res.status}):`, err);
    process.exit(1);
  }

  const inserted = await res.json();
  console.log(`Successfully inserted ${inserted.length} articles:\n`);
  for (const a of inserted) {
    console.log(`  [${a.id}] ${a.slug} — "${a.title}" / "${a.title_ar}"`);
  }

  // Verify by querying back
  console.log("\n--- Verification ---\n");
  const slugs = articles.map((a) => a.slug);
  const verifyRes = await fetch(
    `${SUPABASE_URL}/rest/v1/hc_articles?slug=in.(${slugs.join(",")})&select=id,slug,title,title_ar,section_id,is_published,sort_order`,
    {
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      },
    }
  );

  if (!verifyRes.ok) {
    console.error("Verification query failed:", await verifyRes.text());
    process.exit(1);
  }

  const verified = await verifyRes.json();
  console.log(`Verified ${verified.length} articles in database:`);
  for (const a of verified) {
    console.log(
      `  [${a.is_published ? "PUBLISHED" : "DRAFT"}] ${a.slug} → section ${a.section_id} (order: ${a.sort_order})`
    );
  }

  console.log("\nDone!");
}

insertArticles().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
