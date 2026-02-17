import { Category, Section, Group, Article } from './types';

export const categories: Category[] = [
  { id: 'c5', slug: 'for-schools-and-districts', title: 'For Schools and Districts', title_ar: 'للمدارس والمناطق التعليمية', description: 'Comprehensive resources for teachers, school administrators, and district leaders to set up, manage, and maximize String across your school community.', description_ar: 'موارد شاملة للمعلمين ومديري المدارس وقادة المناطق التعليمية لإعداد وإدارة وتحقيق أقصى استفادة من سترينج عبر مجتمعك المدرسي.', order: 1, icon: '🏫' },
  { id: 'c6', slug: 'for-families', title: 'For Families', title_ar: 'للعائلات', description: 'Everything parents and guardians need to stay connected with their child\'s classroom, track progress, and engage with teachers.', description_ar: 'كل ما يحتاجه أولياء الأمور والأوصياء للبقاء على تواصل مع فصل أطفالهم وتتبع تقدمهم والتفاعل مع المعلمين.', order: 2, icon: '🏠' },
  { id: 'c1', slug: 'getting-started', title: 'General Getting Started', title_ar: 'البدء العام', description: 'Essential guides to help you set up your account, navigate the platform, and start connecting with your school community.', description_ar: 'أدلة أساسية لمساعدتك في إعداد حسابك والتنقل في المنصة والبدء في التواصل مع مجتمعك المدرسي.', order: 3, icon: '🚀' },
  { id: 'c2', slug: 'account-management', title: 'Account Management', title_ar: 'إدارة الحساب', description: 'Manage your profile, update security settings, change your password, and keep your account information current.', description_ar: 'إدارة ملفك الشخصي وتحديث إعدادات الأمان وتغيير كلمة المرور والحفاظ على معلومات حسابك محدثة.', order: 4, icon: '👤' },
  { id: 'c3', slug: 'billing-and-plans', title: 'Billing & Plans', title_ar: 'الفوترة والخطط', description: 'Everything you need to know about subscription plans, payment methods, invoices, and premium feature upgrades.', description_ar: 'كل ما تحتاج معرفته حول خطط الاشتراك وطرق الدفع والفواتير وترقيات الميزات المميزة.', order: 5, icon: '💳' },
  { id: 'c4', slug: 'developer-api', title: 'Developer API', title_ar: 'واجهة برمجة التطبيقات للمطورين', description: 'Technical documentation for developers integrating with the String API, including authentication, endpoints, and webhooks.', description_ar: 'وثائق تقنية للمطورين الذين يتكاملون مع واجهة برمجة تطبيقات سترينج، بما في ذلك المصادقة ونقاط النهاية وخطافات الويب.', order: 6, icon: '⚡' },
  { id: 'c7', slug: 'safety-and-privacy', title: 'Safety and Privacy', title_ar: 'الأمان والخصوصية', description: 'Learn how String protects your data, ensures student privacy, and complies with FERPA, COPPA, and other education standards.', description_ar: 'تعرف على كيفية حماية سترينج لبياناتك وضمان خصوصية الطلاب والامتثال لمعايير FERPA وCOPPA ومعايير التعليم الأخرى.', order: 7, icon: '🛡️' },
  { id: 'c8', slug: 'string-tutor', title: 'String Tutor', title_ar: 'معلم سترينج', description: 'Step-by-step guides for getting personalized one-on-one support with String Tutor\'s AI-powered learning assistant.', description_ar: 'أدلة خطوة بخطوة للحصول على دعم فردي مخصص مع مساعد التعلم المدعوم بالذكاء الاصطناعي من سترينج.', order: 8, icon: '🎓' },
  { id: 'c9', slug: 'for-students', title: 'For Students', title_ar: 'للطلاب', description: 'Guides and tips to help students navigate String, use learning tools effectively, and stay safe online.', description_ar: 'أدلة ونصائح لمساعدة الطلاب على التنقل في سترينج واستخدام أدوات التعلم بفعالية والبقاء آمنين عبر الإنترنت.', order: 9, icon: '🎓' },
  { id: 'c10', slug: 'for-teachers', title: 'For Teachers', title_ar: 'للمعلمين', description: 'Practical articles to help teachers set up classrooms, manage students, and communicate effectively with families.', description_ar: 'مقالات عملية لمساعدة المعلمين في إعداد الفصول الدراسية وإدارة الطلاب والتواصل بفعالية مع العائلات.', order: 10, icon: '📚' },
];

export const sections: Section[] = [
  // For Schools and Districts - Specific Order from Prompt
  { id: 'sd1', categoryId: 'c5', slug: 'getting-started', title: 'Getting Started', title_ar: 'البدء', description: 'Set up your school on String, create accounts, assign roles, and invite families to connect.', description_ar: 'أعد مدرستك على سترينج وأنشئ حسابات وعيّن أدوارًا وادعُ العائلات للتواصل.', order: 1, icon: '🏁' },
  /* bodyMarkdown removed — this section now renders as a link list */
  /* OLD_BODY_START This guide walks you through setting up your school on String — from creating your first account to inviting families and going live. Follow the steps below to get your community connected.

## Creating an Account

String supports three account types for school staff. Choose the one that matches your role:

### Teacher Account

1. Visit **string.education/signup** and select **I'm a Teacher**.
2. Enter your full name, school email address, and create a password.
3. Check your inbox for a **verification email** and click the confirmation link.
4. Complete your profile by adding your grade level and subjects.

### School Leader Account

1. Go to **string.education/signup** and select **I'm a School Leader**.
2. Provide your name, official school email, and a secure password.
3. Verify your email address through the confirmation link.
4. Enter your school name and district — String will match you to an existing school or create a new entry.

### District Admin Account

1. Navigate to **string.education/signup** and select **District Administrator**.
2. Fill in your name, district email, and password.
3. After email verification, enter your district name and state.
4. District accounts can manage multiple schools from a single dashboard.

> **Tip:** Always use your official school or district email. Personal email addresses (Gmail, Yahoo, etc.) cannot be verified against school records.

## Verifying Your School

After creating your account, String needs to confirm your school affiliation:

1. When prompted, search for your school by **name** or **ZIP code**.
2. Select your school from the results list.
3. If your school isn't listed, click **Add my school** and fill in the required details.
4. String will review new school requests within **1–2 business days**.

Once verified, you'll see a green checkmark next to your school name in Settings.

> **Note:** School Leaders can instantly approve teachers who request to join their school. Without a School Leader, teacher requests go through String's manual review process.

## Setting Up Classes

With your account verified, you're ready to create your first class:

1. From your dashboard, click **+ New Class**.
2. Enter a class name (e.g., "Grade 3 - Room 201" or "AP Biology Period 2").
3. Choose a class color and icon for easy identification.
4. Set the class privacy level:
   - **Open** — any verified teacher at your school can view the class
   - **Private** — only invited teachers and enrolled families can access it
5. Click **Create Class** to finish.

You can create as many classes as you need. Each class has its own roster, message feed, and activity timeline.

## Inviting Families

Connecting families is one of the most important steps. String offers several ways to invite parents and guardians:

- **Class Code** — Share your unique class code (e.g., *ABC-1234*) with families. They enter it during sign-up to join your class automatically.
- **Invite Link** — Generate a shareable link from **Class Settings > Invite Families**. Send it via email, text, or print it on a handout.
- **Bulk Import** — Upload a CSV file with parent names and email addresses to send invitations in batch.

### What families see

When a family member joins, they can:

- View class announcements and messages
- See their child's behavior points and weekly reports
- Reply to teacher messages with auto-translation support
- Access school-wide updates and event calendars

## Adding Students

Students can be added to a class in two ways:

1. **Manual entry** — Go to **Class Settings > Students > Add Student**. Enter the student's first name, last name, and optional student ID.
2. **CSV upload** — Upload a roster file from **Class Settings > Students > Import**. The file should include columns for first name, last name, and optionally student ID and parent email.

> **Tip:** Student names are visible only to teachers and their linked family members — never to other families.

## Assigning Roles

String uses a simple role system to control who can do what:

| Role | Permissions |
|------|------------|
| **Teacher** | Create classes, send messages, manage students, award behavior points |
| **Co-Teacher** | Same as Teacher, but added to an existing class by the class owner |
| **School Leader** | All teacher permissions, plus: approve teacher requests, view school-wide analytics, manage school settings |
| **District Admin** | All school leader permissions across multiple schools, plus: manage district policies, view cross-school reports |

To assign or change a role:

1. Go to **School Settings > Staff**.
2. Find the staff member and click **Edit Role**.
3. Select the new role from the dropdown and confirm.

## Privacy and Safety

String is built with student safety as a top priority:

- All data is encrypted in transit and at rest.
- String is **FERPA** and **COPPA** compliant.
- Family members can only see their own child's information.
- Teachers control who can message them and their class.
- All content is monitored for safety using automated filters.

For more details, visit our [Safety and Privacy](/help/category/safety-and-privacy) section.

## Troubleshooting Sign-Up Errors

Having trouble getting started? Here are solutions to the most common issues:

- **"Email already in use"** — You may already have an account. Try the **Forgot Password** link on the login page to recover access.
- **"School not found"** — Double-check the spelling or try searching by ZIP code. If your school is new to String, use the **Add my school** option.
- **"Verification email not received"** — Check your spam/junk folder. If it's not there, click **Resend verification** on the login page. Make sure your school email server isn't blocking emails from *@string.education*.
- **"Access denied" after verification** — Your School Leader may need to approve your request. Contact them directly or wait for the approval notification.
- **"Invalid class code"** — Class codes are case-sensitive and expire after 30 days. Ask your teacher for a fresh code if yours isn't working.

## Related Articles

- [Account Management](/help/category/for-schools-and-districts/section/account-management) — Update your profile and security settings
- [Class Setup and Access](/help/category/for-schools-and-districts/section/class-setup-and-access) — Advanced class configuration options
- [Safety and Privacy](/help/category/safety-and-privacy) — Learn how String protects your school community
OLD_BODY_END */
  { id: 'sd2', categoryId: 'c5', slug: 'account-management', title: 'Account Management', title_ar: 'إدارة الحساب', description: 'Update your profile, manage passwords, configure device settings, and troubleshoot access issues.', description_ar: 'حدّث ملفك الشخصي وأدر كلمات المرور وهيّئ إعدادات الأجهزة واستكشف مشاكل الوصول.', order: 2, icon: '⚙️' },
  { id: 'sd3', categoryId: 'c5', slug: 'class-setup-and-access', title: 'Class Setup and Access', title_ar: 'إعداد الفصل والوصول', description: 'Create classes, add students and co-teachers, manage rosters, and control classroom access permissions.', description_ar: 'أنشئ فصولًا وأضف طلابًا ومعلمين مشاركين وأدر القوائم وتحكم في صلاحيات الوصول.', order: 3, icon: '📝' },
  { id: 'sd4', categoryId: 'c5', slug: 'class-messaging', title: 'Class Messaging', title_ar: 'رسائل الفصل', description: 'Send messages to families, schedule announcements, and use built-in translation for multilingual communication.', description_ar: 'أرسل رسائل للعائلات وجدول الإعلانات واستخدم الترجمة المدمجة للتواصل متعدد اللغات.', order: 4, icon: '💬' },
  { id: 'sd5', categoryId: 'c5', slug: 'class-story-and-events', title: 'Class Story and Class Events', title_ar: 'قصة الفصل وفعاليات الفصل', description: 'Share classroom moments with photos and videos, and create events families can RSVP to.', description_ar: 'شارك لحظات الفصل بالصور والفيديو وأنشئ فعاليات يمكن للعائلات الرد عليها.', order: 5, icon: '📅' },
  { id: 'sd6', categoryId: 'c5', slug: 'class-points-and-reports', title: 'Class Points and Reports', title_ar: 'نقاط الفصل والتقارير', description: 'Track student behavior with custom points, generate progress reports, and share insights with families.', description_ar: 'تتبع سلوك الطلاب بنقاط مخصصة وأنشئ تقارير التقدم وشارك الأفكار مع العائلات.', order: 6, icon: '📊' },
  { id: 'sd7', categoryId: 'c5', slug: 'district-features', title: 'District Features', title_ar: 'ميزات المنطقة التعليمية', description: 'Manage multiple schools, access district-wide analytics, and configure platform settings at scale.', description_ar: 'أدر مدارس متعددة واطلع على تحليلات المنطقة وهيّئ إعدادات المنصة على نطاق واسع.', order: 7, icon: '🏢' },
  { id: 'sd8', categoryId: 'c5', slug: 'student-portfolios', title: 'Student Portfolios', title_ar: 'ملفات الطلاب', description: 'Enable digital portfolios where students can showcase their work and teachers can share it with families.', description_ar: 'فعّل الملفات الرقمية حيث يمكن للطلاب عرض أعمالهم وللمعلمين مشاركتها مع العائلات.', order: 8, icon: '🎨' },
  { id: 'sd9', categoryId: 'c5', slug: 'schoolwide-usage', title: 'Schoolwide Usage', title_ar: 'الاستخدام على مستوى المدرسة', description: 'Monitor teacher adoption, family engagement rates, and overall platform usage across your school.', description_ar: 'راقب معدل تبني المعلمين ومشاركة العائلات والاستخدام العام للمنصة عبر مدرستك.', order: 9, icon: '🏫' },

  // Placeholders for other categories
  { id: 's1', categoryId: 'c1', slug: 'basics', title: 'Getting Started', title_ar: 'البدء', description: 'Essential guides to create your account, log in, connect to a class, and configure your profile.', description_ar: 'أدلة أساسية لإنشاء حسابك وتسجيل الدخول والاتصال بفصل وتهيئة ملفك الشخصي.', order: 1 },
  { id: 's_acct', categoryId: 'c2', slug: 'manage-your-account', title: 'Manage Your Account', title_ar: 'إدارة حسابك', description: 'Update your profile, change your email or password, manage notifications, and delete your account.', description_ar: 'حدّث ملفك الشخصي وغيّر بريدك الإلكتروني أو كلمة المرور وأدر الإشعارات واحذف حسابك.', order: 1 },
  { id: 's_billing', categoryId: 'c3', slug: 'plans-and-billing', title: 'Plans and Billing', title_ar: 'الخطط والفوترة', description: 'Compare available plans, upgrade or cancel your subscription, and understand our refund policy.', description_ar: 'قارن الخطط المتاحة ورقِّ أو ألغِ اشتراكك وافهم سياسة الاسترداد لدينا.', order: 1 },
  { id: 'fam1', categoryId: 'c6', slug: 'parent-setup', title: 'Parent Setup', title_ar: 'إعداد ولي الأمر', description: 'Download the app, create your parent account, and connect to your child\'s class in minutes.', description_ar: 'حمّل التطبيق وأنشئ حساب ولي الأمر واتصل بفصل طفلك في دقائق.', order: 1 },
  { id: 'fam_gs', categoryId: 'c6', slug: 'getting-started', title: 'Getting Started', title_ar: 'البدء', description: 'Your first steps on String as a family member — notifications, preferences, and your weekly routine.', description_ar: 'خطواتك الأولى على سترينج كفرد من العائلة — الإشعارات والتفضيلات وروتينك الأسبوعي.', order: 2 },
  { id: 'fam_am', categoryId: 'c6', slug: 'account-management', title: 'Account Management', title_ar: 'إدارة الحساب', description: 'Update your contact details, manage multiple children, and recover your account if needed.', description_ar: 'حدّث بيانات الاتصال الخاصة بك وأدر حسابات أطفال متعددين واسترجع حسابك عند الحاجة.', order: 3 },
  { id: 'fam_msg', categoryId: 'c6', slug: 'messaging', title: 'Messaging', title_ar: 'المراسلة', description: 'Read and reply to teacher messages, understand read receipts, and translate messages to your language.', description_ar: 'اقرأ رسائل المعلم وردّ عليها وافهم إيصالات القراءة وترجم الرسائل إلى لغتك.', order: 4 },
  { id: 'fam_sp', categoryId: 'c6', slug: 'student-portfolio', title: 'Student Portfolio', title_ar: 'ملف الطالب', description: 'View, download, and comment on your child\'s portfolio work shared by their teacher.', description_ar: 'اعرض وحمّل وعلّق على أعمال ملف طفلك التي شاركها معلمهم.', order: 5 },
  { id: 'fam_pr', categoryId: 'c6', slug: 'points-and-reports', title: 'Points and Reports', title_ar: 'النقاط والتقارير', description: 'Understand your child\'s behavior points, view weekly progress reports, and set up milestone alerts.', description_ar: 'افهم نقاط سلوك طفلك واعرض تقارير التقدم الأسبوعية وأعد تنبيهات الإنجازات.', order: 6 },
  // For Students
  { id: 'stu_gs', categoryId: 'c9', slug: 'getting-started', title: 'Getting Started', title_ar: 'البدء', description: 'Log in to your student account, explore your dashboard, and set up your profile.', description_ar: 'سجّل الدخول إلى حسابك الطلابي واستكشف لوحة القيادة وأعد ملفك الشخصي.', order: 1 },
  { id: 'stu_tools', categoryId: 'c9', slug: 'learning-tools', title: 'Learning Tools', title_ar: 'أدوات التعلم', description: 'Use digital portfolios, access class materials, and participate in interactive activities.', description_ar: 'استخدم الملفات الرقمية واطلع على مواد الفصل وشارك في الأنشطة التفاعلية.', order: 2 },
  { id: 'stu_safety', categoryId: 'c9', slug: 'online-safety', title: 'Online Safety', title_ar: 'الأمان عبر الإنترنت', description: 'Stay safe on String — learn about digital citizenship, reporting tools, and protecting your information.', description_ar: 'ابقَ آمنًا على سترينج — تعرف على المواطنة الرقمية وأدوات الإبلاغ وحماية معلوماتك.', order: 3 },
  { id: 'stu_acct', categoryId: 'c9', slug: 'student-account', title: 'Student Account', title_ar: 'حساب الطالب', description: 'Learn how to create, verify, and manage your student account on String.', description_ar: 'تعرّف على كيفية إنشاء حسابك الطلابي والتحقق منه وإدارته على سترينج.', order: 4 },
  // For Teachers
  { id: 'tch_gs', categoryId: 'c10', slug: 'getting-started', title: 'Getting Started', title_ar: 'البدء', description: 'Set up your teacher profile, create your first class, and invite families to connect.', description_ar: 'أعد ملفك الشخصي كمعلم وأنشئ فصلك الأول وادعُ العائلات للتواصل.', order: 1 },
  { id: 'tch_class', categoryId: 'c10', slug: 'classroom-management', title: 'Classroom Management', title_ar: 'إدارة الفصل', description: 'Organize students into groups, set up behavior points, and manage class rosters throughout the year.', description_ar: 'نظّم الطلاب في مجموعات وأعد نقاط السلوك وأدر قوائم الفصل طوال العام.', order: 2 },
  { id: 'tch_comm', categoryId: 'c10', slug: 'communication', title: 'Communication', title_ar: 'التواصل', description: 'Write effective messages, schedule announcements, and communicate with multilingual families.', description_ar: 'اكتب رسائل فعّالة وجدول الإعلانات وتواصل مع العائلات متعددة اللغات.', order: 3 },
  { id: 'tch_materials', categoryId: 'c10', slug: 'uploading-materials', title: 'Uploading Materials', title_ar: 'رفع المواد التعليمية', description: 'Learn how to upload, organize, and manage teaching materials on String.', description_ar: 'تعرّف على كيفية رفع وتنظيم وإدارة المواد التعليمية على سترينج.', order: 4 },
  // String Tutor — FAQ
  { id: 'st_faq', categoryId: 'c8', slug: 'frequently-asked-questions', title: 'Frequently Asked Questions', title_ar: 'الأسئلة الشائعة', description: 'Quick answers to common questions about using String Tutor.', description_ar: 'إجابات سريعة على الأسئلة الشائعة حول استخدام معلم سترينج.', order: 1 },
];

export const groups: Group[] = [
  // Groups for "Getting Started" (sd1)
  { id: 'g1', sectionId: 'sd1', title: 'Creating an Account', title_ar: 'إنشاء حساب', description: 'Steps to join the String community.', description_ar: 'خطوات الانضمام إلى مجتمع سترينج.', order: 1 },
  { id: 'g2', sectionId: 'sd1', title: 'Roles and Permissions', title_ar: 'الأدوار والصلاحيات', description: 'Who can do what in your school.', description_ar: 'من يمكنه فعل ماذا في مدرستك.', order: 2 },
  { id: 'g3', sectionId: 'sd1', title: 'Joining Your School', title_ar: 'الانضمام إلى مدرستك', description: 'Connecting to your organization.', description_ar: 'الاتصال بمؤسستك.', order: 3 },
  { id: 'g4', sectionId: 'sd1', title: 'School Approval', title_ar: 'موافقة المدرسة', description: 'Verifying your teacher status.', description_ar: 'التحقق من صفتك كمعلم.', order: 4 },
  { id: 'g5', sectionId: 'sd1', title: 'Connecting Families', title_ar: 'ربط العائلات', description: 'Inviting parents to join.', description_ar: 'دعوة أولياء الأمور للانضمام.', order: 5 },

  // Groups for "Account Management" (sd2)
  { id: 'g_am_1', sectionId: 'sd2', title: 'Basics', title_ar: 'الأساسيات', description: 'Manage your personal information.', description_ar: 'إدارة معلوماتك الشخصية.', order: 1 },
  { id: 'g_am_2', sectionId: 'sd2', title: 'Technical Support and Compatibility', title_ar: 'الدعم الفني والتوافق', description: 'System requirements and troubleshooting.', description_ar: 'متطلبات النظام واستكشاف الأخطاء وإصلاحها.', order: 2 },
];

const stringAppContent = (title: string) => `
If you're a School Leader or teacher using String, this guide will help you understand **${title}**.

This article walks you through:
*   Checking your current settings
*   Updating your account if needed
*   Setting up advanced features
*   Troubleshooting common issues

## Check Your Current Settings
Start by confirming which configuration is currently active on your account. It's important to verify this before making changes to ensure you don't disrupt existing workflows.

To check:
1.  Log in to your account on the app or web.
2.  Click your profile icon in the top right corner.
3.  Go to **Account Settings**.
4.  Look under the **Configuration** field.

## Update Your Account
If you need to make changes, follow these steps carefully. Keeping your account updated ensures you have access to the latest features and security improvements.

### Step 1: Access Edit Mode
Navigate to the settings page and click the "Edit" button. You may be prompted to enter your password again for security purposes.

### Step 2: Modify Information
Update the fields as necessary.
*   **Name:** Must be your legal name.
*   **Email:** Must be a valid school email address.
*   **Role:** Select the appropriate role from the dropdown.

## Set Up Advanced Features
String offers several advanced features for power users.

### Enable Two-Factor Authentication
We strongly recommend enabling 2FA to protect your account. Go to the Security tab and follow the prompts to link your authenticator app.

### Connect Third-Party Apps
You can integrate String with other tools like Google Classroom or Clever. Visit the Integrations page to see available options.

## Troubleshooting
If you encounter issues, try these common solutions.

### Cannot Log In
*   Check your internet connection.
*   Ensure you are using the correct email address.
*   Reset your password if you have forgotten it.

### Feature Not Working
*   Clear your browser cache and cookies.
*   Try accessing String from a different browser.
*   Contact support if the issue persists.
`;

const stringAppContentAr = (title: string) => `
إذا كنت قائد مدرسة أو معلمًا تستخدم سترينج، سيساعدك هذا الدليل على فهم **${title}**.

يرشدك هذا المقال خلال:
*   التحقق من إعداداتك الحالية
*   تحديث حسابك عند الحاجة
*   إعداد الميزات المتقدمة
*   استكشاف المشكلات الشائعة وإصلاحها

## تحقق من إعداداتك الحالية
ابدأ بالتأكد من التكوين النشط حاليًا على حسابك. من المهم التحقق من ذلك قبل إجراء أي تغييرات لضمان عدم تعطيل سير العمل الحالي.

للتحقق:
1.  سجّل الدخول إلى حسابك عبر التطبيق أو الويب.
2.  انقر على أيقونة ملفك الشخصي في الزاوية العلوية اليمنى.
3.  انتقل إلى **إعدادات الحساب**.
4.  ابحث تحت حقل **التكوين**.

## تحديث حسابك
إذا كنت بحاجة إلى إجراء تغييرات، اتبع هذه الخطوات بعناية. يضمن تحديث حسابك الوصول إلى أحدث الميزات وتحسينات الأمان.

### الخطوة 1: الوصول إلى وضع التعديل
انتقل إلى صفحة الإعدادات وانقر على زر "تعديل". قد يُطلب منك إدخال كلمة المرور مرة أخرى لأغراض أمنية.

### الخطوة 2: تعديل المعلومات
حدّث الحقول حسب الحاجة.
*   **الاسم:** يجب أن يكون اسمك القانوني.
*   **البريد الإلكتروني:** يجب أن يكون عنوان بريد إلكتروني مدرسي صالح.
*   **الدور:** اختر الدور المناسب من القائمة المنسدلة.

## إعداد الميزات المتقدمة
يوفر سترينج العديد من الميزات المتقدمة للمستخدمين المتمرسين.

### تفعيل المصادقة الثنائية
نوصي بشدة بتفعيل المصادقة الثنائية لحماية حسابك. انتقل إلى علامة تبويب الأمان واتبع التعليمات لربط تطبيق المصادقة الخاص بك.

### ربط تطبيقات الطرف الثالث
يمكنك دمج سترينج مع أدوات أخرى مثل Google Classroom أو Clever. قم بزيارة صفحة التكاملات لرؤية الخيارات المتاحة.

## استكشاف الأخطاء وإصلاحها
إذا واجهت مشكلات، جرّب هذه الحلول الشائعة.

### لا يمكن تسجيل الدخول
*   تحقق من اتصالك بالإنترنت.
*   تأكد من أنك تستخدم عنوان البريد الإلكتروني الصحيح.
*   أعد تعيين كلمة المرور إذا نسيتها.

### الميزة لا تعمل
*   امسح ذاكرة التخزين المؤقت وملفات تعريف الارتباط للمتصفح.
*   جرّب الوصول إلى سترينج من متصفح مختلف.
*   تواصل مع الدعم إذا استمرت المشكلة.
`;

/* ═══════════════════════════════════════════════════════════════════
   Unique article content overrides — keyed by slug.
   When a slug has an entry here, it replaces the generic template.
   ═══════════════════════════════════════════════════════════════════ */
const articleContentOverrides: Record<string, { body: string; body_ar: string; summary: string; summary_ar: string }> = {
  'changing-your-password': {
    summary: 'Learn how to update your String account password on web, iOS, and Android to keep your account secure.',
    summary_ar: 'تعرف على كيفية تحديث كلمة مرور حسابك في سترينج على الويب وiOS وAndroid للحفاظ على أمان حسابك.',
    body: `Your password is the first line of defense for your String account. We recommend changing it every 90 days and using a strong, unique password that you don't reuse across other services.

## Before You Begin

Make sure you have access to the email address associated with your account. If you're changing your password because you suspect unauthorized access, we recommend also reviewing your recent login activity under **Account Settings → Security**.

**Password requirements:**
*   At least 8 characters long
*   Must include at least one uppercase letter, one lowercase letter, and one number
*   Cannot be the same as your last 3 passwords
*   Cannot contain your name or email address

## Changing Your Password on Web

1.  Log in to your String account at **app.string.education**.
2.  Click your **profile icon** in the top-right corner.
3.  Select **Account Settings** from the dropdown menu.
4.  Click the **Security** tab on the left sidebar.
5.  Under the **Password** section, click **Change Password**.
6.  Enter your **current password** in the first field.
7.  Enter your **new password** and confirm it in the second field.
8.  Click **Save Changes**.
9.  You will see a green confirmation banner: *"Password updated successfully."*

## Changing Your Password on iOS

1.  Open the **String** app on your iPhone or iPad.
2.  Tap the **three-line menu** (☰) in the top-left corner.
3.  Tap **Settings** → **Account**.
4.  Tap **Change Password**.
5.  Enter your current password, then type and confirm your new password.
6.  Tap **Update**.
7.  You'll be briefly signed out and prompted to log in with your new password.

## Changing Your Password on Android

1.  Open the **String** app on your Android device.
2.  Tap your **profile avatar** in the bottom navigation bar.
3.  Tap the **gear icon** (⚙️) in the top-right corner.
4.  Tap **Security** → **Change Password**.
5.  Enter your current password, then type and confirm your new password.
6.  Tap **Save**.
7.  A confirmation toast will appear: *"Password changed."*

## Forgot Your Password?

If you can't remember your current password:

1.  Go to the **String login page**.
2.  Click **Forgot Password?** below the password field.
3.  Enter the email address linked to your account.
4.  Check your inbox for a password reset email (check spam/junk if it doesn't arrive within 2 minutes).
5.  Click the **Reset Password** link in the email — it expires after 30 minutes.
6.  Create a new password and confirm it.

## Troubleshooting

### "Current password is incorrect"
*   Make sure Caps Lock is off.
*   Try pasting your password from a password manager to avoid typos.
*   If you still can't log in, use the **Forgot Password** flow above.

### Password reset email not arriving
*   Check your **spam/junk** folder.
*   Verify you're entering the correct email address.
*   If you use a school-managed email, check with your IT administrator — some email filters block automated messages.
*   Try requesting the reset email again after 5 minutes.

### Account locked after too many attempts
If you enter the wrong password 5 times, your account will be temporarily locked for 15 minutes. Wait and try again, or use the **Forgot Password** link to reset immediately.`,

    body_ar: `كلمة المرور هي خط الدفاع الأول لحسابك في سترينج. نوصي بتغييرها كل 90 يومًا واستخدام كلمة مرور قوية وفريدة لا تعيد استخدامها عبر خدمات أخرى.

## قبل البدء

تأكد من أن لديك وصولاً إلى عنوان البريد الإلكتروني المرتبط بحسابك. إذا كنت تغير كلمة المرور لأنك تشك في وصول غير مصرح به، نوصي أيضًا بمراجعة نشاط تسجيل الدخول الأخير ضمن **إعدادات الحساب → الأمان**.

**متطلبات كلمة المرور:**
*   8 أحرف على الأقل
*   يجب أن تتضمن حرفًا كبيرًا واحدًا على الأقل وحرفًا صغيرًا ورقمًا واحدًا
*   لا يمكن أن تكون مطابقة لآخر 3 كلمات مرور استخدمتها
*   لا يمكن أن تحتوي على اسمك أو عنوان بريدك الإلكتروني

## تغيير كلمة المرور على الويب

1.  سجّل الدخول إلى حسابك في سترينج على **app.string.education**.
2.  انقر على **أيقونة ملفك الشخصي** في الزاوية العلوية اليمنى.
3.  اختر **إعدادات الحساب** من القائمة المنسدلة.
4.  انقر على علامة تبويب **الأمان** في الشريط الجانبي الأيسر.
5.  ضمن قسم **كلمة المرور**، انقر **تغيير كلمة المرور**.
6.  أدخل **كلمة المرور الحالية** في الحقل الأول.
7.  أدخل **كلمة المرور الجديدة** وأكدها في الحقل الثاني.
8.  انقر **حفظ التغييرات**.
9.  ستظهر لافتة تأكيد خضراء: *"تم تحديث كلمة المرور بنجاح."*

## تغيير كلمة المرور على iOS

1.  افتح تطبيق **سترينج** على جهاز iPhone أو iPad.
2.  اضغط على **القائمة ذات الثلاثة خطوط** (☰) في الزاوية العلوية اليسرى.
3.  اضغط على **الإعدادات** → **الحساب**.
4.  اضغط على **تغيير كلمة المرور**.
5.  أدخل كلمة المرور الحالية، ثم اكتب وأكد كلمة المرور الجديدة.
6.  اضغط **تحديث**.
7.  سيتم تسجيل خروجك لفترة وجيزة وسيُطلب منك تسجيل الدخول بكلمة المرور الجديدة.

## تغيير كلمة المرور على Android

1.  افتح تطبيق **سترينج** على جهاز Android.
2.  اضغط على **صورة ملفك الشخصي** في شريط التنقل السفلي.
3.  اضغط على **أيقونة الترس** (⚙️) في الزاوية العلوية اليمنى.
4.  اضغط على **الأمان** → **تغيير كلمة المرور**.
5.  أدخل كلمة المرور الحالية، ثم اكتب وأكد كلمة المرور الجديدة.
6.  اضغط **حفظ**.
7.  ستظهر رسالة تأكيد: *"تم تغيير كلمة المرور."*

## نسيت كلمة المرور؟

إذا لم تتمكن من تذكر كلمة المرور الحالية:

1.  انتقل إلى **صفحة تسجيل الدخول في سترينج**.
2.  انقر على **نسيت كلمة المرور؟** أسفل حقل كلمة المرور.
3.  أدخل عنوان البريد الإلكتروني المرتبط بحسابك.
4.  تحقق من بريدك الوارد للحصول على رسالة إعادة تعيين كلمة المرور (تحقق من البريد العشوائي إذا لم تصل خلال دقيقتين).
5.  انقر على رابط **إعادة تعيين كلمة المرور** في الرسالة — تنتهي صلاحيته بعد 30 دقيقة.
6.  أنشئ كلمة مرور جديدة وأكدها.

## استكشاف الأخطاء وإصلاحها

### "كلمة المرور الحالية غير صحيحة"
*   تأكد من إيقاف تشغيل Caps Lock.
*   حاول لصق كلمة المرور من مدير كلمات المرور لتجنب الأخطاء المطبعية.
*   إذا لم تتمكن من تسجيل الدخول، استخدم خطوات **نسيت كلمة المرور** أعلاه.

### رسالة إعادة تعيين كلمة المرور لا تصل
*   تحقق من مجلد **البريد العشوائي**.
*   تأكد من إدخال عنوان البريد الإلكتروني الصحيح.
*   إذا كنت تستخدم بريدًا إلكترونيًا مُدارًا من المدرسة، تحقق مع مسؤول تكنولوجيا المعلومات — بعض مرشحات البريد تحظر الرسائل التلقائية.

### الحساب مقفل بعد محاولات كثيرة
إذا أدخلت كلمة مرور خاطئة 5 مرات، سيتم قفل حسابك مؤقتًا لمدة 15 دقيقة. انتظر وحاول مرة أخرى، أو استخدم رابط **نسيت كلمة المرور** لإعادة التعيين فورًا.`
  },

  'updating-your-email-address': {
    summary: 'Step-by-step guide to changing the email address on your String account, including verification and what to expect.',
    summary_ar: 'دليل خطوة بخطوة لتغيير عنوان البريد الإلكتروني في حسابك على سترينج، بما في ذلك التحقق وما يمكنك توقعه.',
    body: `Your email address is how String identifies your account. It's used for login, password resets, notifications, and communication from your school. Keeping it up to date ensures you never miss important messages.

## Why Your Email Matters

*   **Login credential** — Your email is your username for signing in.
*   **Notifications** — Class messages, event reminders, and weekly reports are sent to this address.
*   **Account recovery** — Password resets and verification codes are sent here.
*   **School directory** — Teachers and administrators may see your email in the school staff directory.

## How to Update Your Email Address

### On Web

1.  Log in to **app.string.education**.
2.  Click your **profile icon** → **Account Settings**.
3.  Under the **Profile** tab, find the **Email** field.
4.  Click **Edit** next to your current email address.
5.  Enter your **new email address**.
6.  Enter your **account password** to confirm the change.
7.  Click **Save**.
8.  A verification email will be sent to your **new** email address.

### On Mobile (iOS & Android)

1.  Open the **String** app.
2.  Navigate to **Settings** → **Account** → **Email Address**.
3.  Tap **Change Email**.
4.  Enter your new email address and your current password.
5.  Tap **Confirm**.
6.  Check your new email inbox for the verification link.

## Verification Process

After submitting your new email:

1.  String sends a verification link to your **new** email address.
2.  You have **24 hours** to click the link and confirm the change.
3.  Until you verify, your **old email remains active** — you can still log in with it.
4.  Once verified, your old email is permanently unlinked from the account.

> **Important:** If you don't verify within 24 hours, the change request expires and your email stays the same. You'll need to start over.

## What Happens After the Change

*   **Login** — You must use your new email to sign in going forward.
*   **Notifications** — All future emails (reports, messages, alerts) go to the new address.
*   **School records** — Your school admin may be notified of the email change for directory purposes.
*   **Linked accounts** — If you signed up via Google SSO, changing your String email does not change your Google account. You may need to re-link SSO.

## Frequently Asked Questions

### Can I use any email address?
You can use any valid email address. However, if your school requires a school-issued email (e.g., @myschool.edu), contact your administrator before switching to a personal email.

### What if I no longer have access to my old email?
You can still change your email from within the app as long as you know your password. If you're locked out entirely, contact **String Support** with your name, school, and account details for manual verification.

### Can I revert to my old email?
Yes — simply repeat the process and enter your previous email address. You'll need to verify it again.

### I didn't receive the verification email
*   Check your **spam/junk** folder.
*   Make sure you entered the correct new email address (no typos).
*   Some school email systems block automated emails — try a personal email to test.
*   Wait 5 minutes and request the verification email again from Account Settings.`,

    body_ar: `عنوان بريدك الإلكتروني هو الطريقة التي يتعرف بها سترينج على حسابك. يُستخدم لتسجيل الدخول وإعادة تعيين كلمة المرور والإشعارات والتواصل من مدرستك. الحفاظ على تحديثه يضمن عدم تفويتك لرسائل مهمة.

## لماذا بريدك الإلكتروني مهم

*   **بيانات تسجيل الدخول** — بريدك الإلكتروني هو اسم المستخدم لتسجيل الدخول.
*   **الإشعارات** — رسائل الفصل وتذكيرات الأحداث والتقارير الأسبوعية تُرسل إلى هذا العنوان.
*   **استرداد الحساب** — إعادة تعيين كلمة المرور ورموز التحقق تُرسل هنا.
*   **دليل المدرسة** — قد يرى المعلمون والمسؤولون بريدك الإلكتروني في دليل موظفي المدرسة.

## كيفية تحديث عنوان بريدك الإلكتروني

### على الويب

1.  سجّل الدخول إلى **app.string.education**.
2.  انقر على **أيقونة ملفك الشخصي** → **إعدادات الحساب**.
3.  ضمن علامة تبويب **الملف الشخصي**، ابحث عن حقل **البريد الإلكتروني**.
4.  انقر **تعديل** بجانب عنوان بريدك الإلكتروني الحالي.
5.  أدخل **عنوان بريدك الإلكتروني الجديد**.
6.  أدخل **كلمة مرور حسابك** لتأكيد التغيير.
7.  انقر **حفظ**.
8.  سيتم إرسال رسالة تحقق إلى عنوان بريدك الإلكتروني **الجديد**.

### على الهاتف (iOS و Android)

1.  افتح تطبيق **سترينج**.
2.  انتقل إلى **الإعدادات** → **الحساب** → **عنوان البريد الإلكتروني**.
3.  اضغط **تغيير البريد الإلكتروني**.
4.  أدخل عنوان بريدك الإلكتروني الجديد وكلمة المرور الحالية.
5.  اضغط **تأكيد**.
6.  تحقق من بريدك الوارد الجديد للحصول على رابط التحقق.

## عملية التحقق

بعد إرسال بريدك الإلكتروني الجديد:

1.  يرسل سترينج رابط تحقق إلى عنوان بريدك الإلكتروني **الجديد**.
2.  لديك **24 ساعة** للنقر على الرابط وتأكيد التغيير.
3.  حتى التحقق، يبقى **بريدك الإلكتروني القديم نشطًا** — يمكنك تسجيل الدخول به.
4.  بمجرد التحقق، يتم إلغاء ربط بريدك القديم نهائيًا من الحساب.

> **مهم:** إذا لم تتحقق خلال 24 ساعة، تنتهي صلاحية طلب التغيير ويبقى بريدك الإلكتروني كما هو.

## ما يحدث بعد التغيير

*   **تسجيل الدخول** — يجب استخدام بريدك الإلكتروني الجديد لتسجيل الدخول.
*   **الإشعارات** — جميع الرسائل المستقبلية تذهب إلى العنوان الجديد.
*   **سجلات المدرسة** — قد يتم إخطار مسؤول مدرستك بتغيير البريد الإلكتروني.
*   **الحسابات المرتبطة** — إذا سجلت عبر Google SSO، فتغيير بريد سترينج لا يغير حساب Google الخاص بك.

## الأسئلة المتكررة

### هل يمكنني استخدام أي عنوان بريد إلكتروني؟
يمكنك استخدام أي عنوان بريد إلكتروني صالح. ومع ذلك، إذا كانت مدرستك تتطلب بريدًا إلكترونيًا مدرسيًا، تواصل مع المسؤول قبل التبديل إلى بريد شخصي.

### ماذا لو لم يعد لدي وصول إلى بريدي الإلكتروني القديم؟
يمكنك تغيير بريدك الإلكتروني من داخل التطبيق طالما تعرف كلمة المرور. إذا كنت مقفلاً تمامًا، تواصل مع **دعم سترينج**.

### هل يمكنني العودة إلى بريدي الإلكتروني القديم؟
نعم — كرر العملية وأدخل عنوان بريدك الإلكتروني السابق. ستحتاج إلى التحقق منه مرة أخرى.

### لم أتلقَ رسالة التحقق
*   تحقق من مجلد **البريد العشوائي**.
*   تأكد من إدخال عنوان البريد الإلكتروني الجديد بشكل صحيح.
*   بعض أنظمة البريد المدرسية تحظر الرسائل التلقائية — جرّب بريدًا شخصيًا للاختبار.`
  },

  'changing-profile-picture': {
    summary: 'How to upload, change, or remove your profile picture on String, including format requirements and privacy details.',
    summary_ar: 'كيفية تحميل أو تغيير أو إزالة صورة ملفك الشخصي على سترينج، بما في ذلك متطلبات التنسيق وتفاصيل الخصوصية.',
    body: `Your profile picture helps teachers, parents, and students recognize you across String. It appears on your profile, in class rosters, in messages, and in the school directory.

## Supported Formats and Size

| Requirement | Detail |
|---|---|
| **File types** | JPG, JPEG, PNG, WebP |
| **Maximum file size** | 5 MB |
| **Recommended dimensions** | 400×400 pixels or larger (square) |
| **Minimum dimensions** | 100×100 pixels |
| **Aspect ratio** | Square recommended — non-square images will be cropped |

> **Tip:** For best results, use a clear, well-lit headshot photo. Avoid logos, cartoons, or group photos unless your school allows them.

## Changing Your Profile Picture on Web

1.  Log in to **app.string.education**.
2.  Click your **profile icon** in the top-right corner.
3.  Select **Account Settings**.
4.  Under the **Profile** tab, hover over your current photo (or the default avatar).
5.  Click the **camera icon** that appears.
6.  Choose **Upload Photo** and select an image from your computer.
7.  Use the **crop tool** to adjust the visible area.
8.  Click **Save**.
9.  Your new photo will appear across String within a few seconds.

## Changing Your Profile Picture on Mobile

### iOS
1.  Open the **String** app.
2.  Tap the **menu** (☰) → **Settings** → **Profile**.
3.  Tap your current profile picture.
4.  Choose **Take Photo** (camera) or **Choose from Library** (gallery).
5.  Crop the image as needed.
6.  Tap **Done**.

### Android
1.  Open the **String** app.
2.  Tap your **profile avatar** in the bottom navigation.
3.  Tap the **edit icon** (pencil) on your profile picture.
4.  Select **Camera** or **Gallery**.
5.  Crop and confirm.

## Removing Your Profile Picture

If you'd like to revert to the default avatar:

1.  Go to **Account Settings** → **Profile**.
2.  Click or tap your profile picture.
3.  Select **Remove Photo**.
4.  Your profile will display the default colored initials avatar.

## Privacy Note

*   **Who can see your photo?** Your profile picture is visible to everyone in your school community — teachers, parents, students, and administrators.
*   **Students under 13:** Student profile photos are only visible to their teachers and connected parents, not to other students, in compliance with COPPA.
*   **External visibility:** Your profile photo is **never** shown on public search engines or outside the String platform.
*   **Moderation:** Schools can enable photo moderation, which requires admin approval before a new profile picture goes live.

## Troubleshooting

### Upload fails or image doesn't appear
*   Ensure the file is under 5 MB and in a supported format (JPG, PNG, WebP).
*   Try a different browser or clear your cache.
*   On mobile, make sure String has permission to access your camera/photos (check device settings).

### Image looks blurry
*   Upload a higher-resolution image (at least 400×400 pixels).
*   Avoid screenshots or heavily compressed images.

### Photo was rejected
If your school has photo moderation enabled, an administrator must approve your new photo. Contact your school admin if your upload was rejected.`,

    body_ar: `تساعد صورة ملفك الشخصي المعلمين وأولياء الأمور والطلاب على التعرف عليك عبر سترينج. تظهر في ملفك الشخصي وقوائم الفصل والرسائل ودليل المدرسة.

## التنسيقات المدعومة والحجم

| المتطلب | التفاصيل |
|---|---|
| **أنواع الملفات** | JPG, JPEG, PNG, WebP |
| **الحجم الأقصى للملف** | 5 ميجابايت |
| **الأبعاد الموصى بها** | 400×400 بكسل أو أكبر (مربعة) |
| **الأبعاد الدنيا** | 100×100 بكسل |
| **نسبة العرض إلى الارتفاع** | مربعة موصى بها — سيتم اقتصاص الصور غير المربعة |

> **نصيحة:** للحصول على أفضل النتائج، استخدم صورة واضحة وجيدة الإضاءة للوجه.

## تغيير صورة الملف الشخصي على الويب

1.  سجّل الدخول إلى **app.string.education**.
2.  انقر على **أيقونة ملفك الشخصي** في الزاوية العلوية اليمنى.
3.  اختر **إعدادات الحساب**.
4.  ضمن علامة تبويب **الملف الشخصي**، مرر مؤشر الفأرة فوق صورتك الحالية.
5.  انقر على **أيقونة الكاميرا** التي تظهر.
6.  اختر **تحميل صورة** واختر صورة من جهازك.
7.  استخدم **أداة الاقتصاص** لضبط المنطقة المرئية.
8.  انقر **حفظ**.

## تغيير صورة الملف الشخصي على الهاتف

### iOS
1.  افتح تطبيق **سترينج**.
2.  اضغط على **القائمة** (☰) → **الإعدادات** → **الملف الشخصي**.
3.  اضغط على صورة ملفك الشخصي الحالية.
4.  اختر **التقاط صورة** أو **اختيار من المكتبة**.
5.  اقتص الصورة حسب الحاجة.
6.  اضغط **تم**.

### Android
1.  افتح تطبيق **سترينج**.
2.  اضغط على **صورة ملفك الشخصي** في شريط التنقل السفلي.
3.  اضغط على **أيقونة التعديل** (قلم) على صورة ملفك الشخصي.
4.  اختر **الكاميرا** أو **المعرض**.
5.  اقتص وأكد.

## إزالة صورة الملف الشخصي

إذا كنت ترغب في العودة إلى الصورة الرمزية الافتراضية:

1.  انتقل إلى **إعدادات الحساب** → **الملف الشخصي**.
2.  انقر أو اضغط على صورة ملفك الشخصي.
3.  اختر **إزالة الصورة**.
4.  سيعرض ملفك الشخصي الصورة الرمزية الافتراضية بالأحرف الأولى.

## ملاحظة الخصوصية

*   **من يمكنه رؤية صورتك؟** صورة ملفك الشخصي مرئية لكل فرد في مجتمعك المدرسي — المعلمون وأولياء الأمور والطلاب والمسؤولون.
*   **الطلاب دون 13 عامًا:** صور الملفات الشخصية للطلاب مرئية فقط لمعلميهم وأولياء أمورهم المتصلين، وليس للطلاب الآخرين، امتثالًا لـ COPPA.
*   **الظهور الخارجي:** صورة ملفك الشخصي **لا** تظهر أبدًا في محركات البحث العامة أو خارج منصة سترينج.

## استكشاف الأخطاء وإصلاحها

### فشل التحميل أو الصورة لا تظهر
*   تأكد من أن الملف أقل من 5 ميجابايت وبتنسيق مدعوم (JPG, PNG, WebP).
*   جرّب متصفحًا مختلفًا أو امسح ذاكرة التخزين المؤقت.
*   على الهاتف، تأكد من أن سترينج لديه إذن الوصول إلى الكاميرا/الصور.

### الصورة تبدو ضبابية
*   حمّل صورة بدقة أعلى (400×400 بكسل على الأقل).
*   تجنب لقطات الشاشة أو الصور المضغوطة بشدة.

### تم رفض الصورة
إذا كانت مدرستك تفعّل إشراف الصور، يجب أن يوافق المسؤول على صورتك الجديدة. تواصل مع مسؤول مدرستك إذا تم رفض تحميلك.`
  },

  'language-and-timezone-settings': {
    summary: 'Configure your preferred language and timezone in String to receive notifications and reports at the right time and in your language.',
    summary_ar: 'اضبط لغتك المفضلة ومنطقتك الزمنية في سترينج لتلقي الإشعارات والتقارير في الوقت المناسب وبلغتك.',
    body: `String supports multiple languages and timezones to serve school communities around the world. Your language and timezone settings affect how content is displayed, when notifications arrive, and how dates and times appear throughout the app.

## Where to Find Language & Timezone Settings

### On Web
1.  Log in to **app.string.education**.
2.  Click your **profile icon** → **Account Settings**.
3.  Select the **Preferences** tab.
4.  You'll see two sections: **Language** and **Timezone**.

### On Mobile (iOS & Android)
1.  Open the **String** app.
2.  Go to **Settings** → **Preferences**.
3.  Tap **Language** or **Timezone** to modify.

## Changing Your Language

1.  In the **Language** dropdown, select your preferred language.
2.  Click **Save** (web) or tap **Done** (mobile).
3.  The interface will reload in the selected language.

**Currently supported languages:**
*   English (US)
*   English (UK)
*   Spanish (Latin America)
*   Spanish (Spain)
*   Arabic
*   French
*   Portuguese (Brazil)
*   Chinese (Simplified)
*   Chinese (Traditional)
*   Korean
*   Japanese
*   Hindi
*   Urdu

> **Note:** Your language setting only affects the String interface (menus, buttons, labels). Messages from teachers are displayed in the language they were written in. String's auto-translate feature can translate messages — look for the **Translate** button below any message.

## Changing Your Timezone

1.  In the **Timezone** dropdown, search for your city or select from the list.
2.  Click **Save** (web) or tap **Done** (mobile).
3.  All times in the app (event schedules, report timestamps, message times) will update to reflect the new timezone.

## How Language & Timezone Affect Your Experience

### Notifications
*   **Push notifications** and **email digests** use your timezone to determine delivery windows. For example, the daily summary email arrives at 7:00 AM in *your* timezone.
*   Notification text uses your language setting, but teacher-written content stays in its original language.

### Reports and Schedules
*   **Weekly progress reports** are generated based on your timezone's week boundaries (Monday 12:00 AM to Sunday 11:59 PM).
*   **Event reminders** use the timezone of the event creator, but are displayed in your local timezone.

### Sync Behavior
*   Language and timezone settings are **account-level** — they sync across all your devices (web, iOS, Android) automatically.
*   Changes take effect immediately; no need to log out or restart the app.
*   If you travel to a different timezone, you can update your setting to match — String does **not** auto-detect timezone changes.

## Frequently Asked Questions

### Does changing my language translate teacher messages?
No. Your language setting changes the app interface only. To translate a teacher's message, use the **Translate** button that appears below each message.

### Can a school admin set a default language for all users?
Yes. District and school admins can set a default language from the admin dashboard. Individual users can still override the default for their own account.

### Why are some parts of the app still in English?
Some content (article titles, help center text) may not yet be available in all languages. String is continuously expanding translations. If you notice missing translations, you can report them via **Settings → Help → Report Translation Issue**.

### What happens if I'm in a different timezone than my school?
All class events and deadlines are shown in your local timezone. If your teacher creates an event at 3:00 PM Eastern, and you're in Pacific time, you'll see it as 12:00 PM.`,

    body_ar: `يدعم سترينج لغات ومناطق زمنية متعددة لخدمة المجتمعات المدرسية حول العالم. تؤثر إعدادات اللغة والمنطقة الزمنية على كيفية عرض المحتوى ووقت وصول الإشعارات وكيفية ظهور التواريخ والأوقات في التطبيق.

## أين تجد إعدادات اللغة والمنطقة الزمنية

### على الويب
1.  سجّل الدخول إلى **app.string.education**.
2.  انقر على **أيقونة ملفك الشخصي** → **إعدادات الحساب**.
3.  اختر علامة تبويب **التفضيلات**.
4.  سترى قسمين: **اللغة** و**المنطقة الزمنية**.

### على الهاتف (iOS و Android)
1.  افتح تطبيق **سترينج**.
2.  انتقل إلى **الإعدادات** → **التفضيلات**.
3.  اضغط على **اللغة** أو **المنطقة الزمنية** للتعديل.

## تغيير لغتك

1.  في قائمة **اللغة** المنسدلة، اختر لغتك المفضلة.
2.  انقر **حفظ** (ويب) أو اضغط **تم** (هاتف).
3.  ستُعاد تحميل الواجهة باللغة المحددة.

**اللغات المدعومة حاليًا:**
*   الإنجليزية (أمريكية)
*   الإنجليزية (بريطانية)
*   الإسبانية (أمريكا اللاتينية)
*   الإسبانية (إسبانيا)
*   العربية
*   الفرنسية
*   البرتغالية (البرازيل)
*   الصينية (المبسطة)
*   الصينية (التقليدية)
*   الكورية
*   اليابانية
*   الهندية
*   الأردية

> **ملاحظة:** إعداد لغتك يؤثر فقط على واجهة سترينج (القوائم والأزرار والتسميات). الرسائل من المعلمين تُعرض باللغة التي كُتبت بها. يمكن لميزة الترجمة التلقائية ترجمة الرسائل — ابحث عن زر **ترجمة** أسفل أي رسالة.

## تغيير منطقتك الزمنية

1.  في قائمة **المنطقة الزمنية** المنسدلة، ابحث عن مدينتك أو اختر من القائمة.
2.  انقر **حفظ** (ويب) أو اضغط **تم** (هاتف).
3.  ستُحدّث جميع الأوقات في التطبيق لتعكس المنطقة الزمنية الجديدة.

## كيف تؤثر اللغة والمنطقة الزمنية على تجربتك

### الإشعارات
*   **إشعارات الدفع** و**ملخصات البريد الإلكتروني** تستخدم منطقتك الزمنية لتحديد أوقات التسليم. مثلاً، يصل البريد الملخص اليومي في الساعة 7:00 صباحًا بتوقيتك *أنت*.
*   نص الإشعار يستخدم إعداد لغتك، لكن المحتوى المكتوب من المعلم يبقى بلغته الأصلية.

### التقارير والجداول
*   **تقارير التقدم الأسبوعية** تُنشأ بناءً على حدود أسبوع منطقتك الزمنية.
*   **تذكيرات الأحداث** تستخدم المنطقة الزمنية لمنشئ الحدث، لكنها تُعرض بتوقيتك المحلي.

### سلوك المزامنة
*   إعدادات اللغة والمنطقة الزمنية على **مستوى الحساب** — تتزامن عبر جميع أجهزتك تلقائيًا.
*   التغييرات تسري فورًا؛ لا حاجة لتسجيل الخروج أو إعادة تشغيل التطبيق.
*   إذا سافرت إلى منطقة زمنية مختلفة، يمكنك تحديث إعدادك — سترينج **لا** يكتشف تغييرات المنطقة الزمنية تلقائيًا.

## الأسئلة المتكررة

### هل يترجم تغيير لغتي رسائل المعلم؟
لا. إعداد لغتك يغير واجهة التطبيق فقط. لترجمة رسالة المعلم، استخدم زر **ترجمة** الذي يظهر أسفل كل رسالة.

### هل يمكن لمسؤول المدرسة تعيين لغة افتراضية لجميع المستخدمين؟
نعم. يمكن لمسؤولي المنطقة والمدرسة تعيين لغة افتراضية. لا يزال بإمكان المستخدمين الأفراد تجاوز الإعداد الافتراضي لحساباتهم.

### ماذا يحدث إذا كنت في منطقة زمنية مختلفة عن مدرستي؟
تُعرض جميع أحداث الفصل والمواعيد النهائية بتوقيتك المحلي. إذا أنشأ معلمك حدثًا في الساعة 3:00 مساءً بالتوقيت الشرقي وأنت بالتوقيت الهادئ، ستراه في الساعة 12:00 ظهرًا.`
  },

  'deleting-your-account': {
    summary: 'Understand what happens when you delete your String account, including the data deletion policy, recovery window, and step-by-step instructions.',
    summary_ar: 'افهم ما يحدث عند حذف حسابك في سترينج، بما في ذلك سياسة حذف البيانات ونافذة الاسترداد والتعليمات خطوة بخطوة.',
    body: `Deleting your String account is a permanent action. Before proceeding, please read this article carefully to understand what will happen to your data, your classes, and your connections.

## Before You Delete: Important Warnings

> **This action cannot be undone after the recovery window expires.** Once your account is permanently deleted, all your data is removed from String's servers and cannot be recovered.

**Please consider the following before deleting:**

*   **Teachers:** Deleting your account will remove you from all classes. Your students and their families will lose access to your class stories, messages, and points history. Consider transferring class ownership to a co-teacher first.
*   **Parents:** You will be disconnected from all your children's classes. You will no longer receive messages, reports, or updates from teachers.
*   **School Admins:** You cannot delete an account that is the sole admin of a school. You must assign another admin first.
*   **Active subscriptions:** If you have a paid subscription, cancel it before deleting your account to avoid further charges. Deletion does not automatically cancel billing.

## Step-by-Step: Deleting Your Account

### On Web

1.  Log in to **app.string.education**.
2.  Click your **profile icon** → **Account Settings**.
3.  Scroll to the very bottom of the **Profile** tab.
4.  Click the red **Delete Account** button.
5.  You'll see a summary of what will be deleted.
6.  Type **DELETE** (all caps) in the confirmation field.
7.  Enter your **password** one final time.
8.  Click **Permanently Delete Account**.

### On Mobile (iOS & Android)

1.  Open the **String** app.
2.  Navigate to **Settings** → **Account**.
3.  Scroll down and tap **Delete Account**.
4.  Review the data deletion summary.
5.  Confirm by typing **DELETE** and entering your password.
6.  Tap **Confirm Deletion**.

## What Gets Deleted

When your account deletion is finalized, the following data is **permanently removed**:

*   Your profile information (name, email, photo)
*   All messages you sent and received
*   Class stories and photos you uploaded
*   Points and behavior data you created
*   Your school and class memberships
*   Notification history and preferences
*   Login credentials and connected services (Google SSO, etc.)

## What Is NOT Deleted

*   **Class content created by others:** Messages, photos, and points created by other teachers or parents in shared classes remain unaffected.
*   **Anonymized analytics:** Aggregate, non-identifiable usage data (e.g., total messages sent school-wide) is retained for platform improvement.
*   **Billing records:** Payment history is retained for 7 years as required by law, but is not linked to your deleted profile.

## Recovery Window

After you confirm deletion:

*   Your account enters a **30-day grace period**.
*   During this period, your account is **deactivated** — you can't log in, and other users can't see your profile.
*   To **recover your account** during the grace period, contact **String Support** at support@string.education with the email you used to register.
*   After 30 days, your account and all associated data are **permanently and irreversibly deleted**.

> **Tip:** If you're unsure, consider deactivating your account instead. Go to **Account Settings → Deactivate Account** to temporarily hide your profile without losing data.

## Data Deletion Policy

String complies with major education privacy regulations:

*   **FERPA:** Student education records are handled in accordance with the Family Educational Rights and Privacy Act.
*   **COPPA:** Data for children under 13 is deleted in compliance with the Children's Online Privacy Protection Act.
*   **GDPR:** For users in the EU, data deletion requests are processed within 30 days per GDPR Article 17 (Right to Erasure).

Upon permanent deletion, String purges all personal data from active databases **and** backup systems within 90 days.

## Frequently Asked Questions

### Can I create a new account with the same email after deleting?
Yes, but only after the 30-day recovery window has passed and your data has been fully purged. You can then register as a new user.

### What happens to my children's accounts if I delete mine?
Your children's student accounts are **not affected**. They remain active in their classes. However, no parent will be linked to their accounts until another guardian connects.

### I'm a teacher — can I transfer my classes before deleting?
Yes. Go to **Class Settings → Transfer Ownership** and assign a co-teacher as the new class owner. Do this before initiating deletion.

### My school admin deleted my account — can I get it back?
School admins can remove users from the school, but they cannot delete your account. If you can no longer log in, contact String Support to investigate.`,

    body_ar: `حذف حسابك في سترينج هو إجراء دائم. قبل المتابعة، يرجى قراءة هذه المقالة بعناية لفهم ما سيحدث لبياناتك وفصولك واتصالاتك.

## قبل الحذف: تحذيرات مهمة

> **لا يمكن التراجع عن هذا الإجراء بعد انتهاء نافذة الاسترداد.** بمجرد حذف حسابك نهائيًا، تُزال جميع بياناتك من خوادم سترينج ولا يمكن استردادها.

**يرجى مراعاة ما يلي قبل الحذف:**

*   **المعلمون:** سيؤدي حذف حسابك إلى إزالتك من جميع الفصول. سيفقد طلابك وعائلاتهم الوصول إلى قصص فصلك ورسائلك وسجل النقاط. فكّر في نقل ملكية الفصل إلى معلم مشارك أولاً.
*   **أولياء الأمور:** سيتم فصلك عن جميع فصول أطفالك. لن تتلقى رسائل أو تقارير أو تحديثات من المعلمين بعد الآن.
*   **مسؤولو المدرسة:** لا يمكنك حذف حساب هو المسؤول الوحيد للمدرسة. يجب تعيين مسؤول آخر أولاً.
*   **الاشتراكات النشطة:** إذا كان لديك اشتراك مدفوع، ألغه قبل حذف حسابك لتجنب رسوم إضافية.

## خطوة بخطوة: حذف حسابك

### على الويب

1.  سجّل الدخول إلى **app.string.education**.
2.  انقر على **أيقونة ملفك الشخصي** → **إعدادات الحساب**.
3.  مرر إلى أسفل علامة تبويب **الملف الشخصي**.
4.  انقر على زر **حذف الحساب** الأحمر.
5.  سترى ملخصًا لما سيتم حذفه.
6.  اكتب **DELETE** (بأحرف كبيرة) في حقل التأكيد.
7.  أدخل **كلمة المرور** لآخر مرة.
8.  انقر **حذف الحساب نهائيًا**.

### على الهاتف (iOS و Android)

1.  افتح تطبيق **سترينج**.
2.  انتقل إلى **الإعدادات** → **الحساب**.
3.  مرر للأسفل واضغط **حذف الحساب**.
4.  راجع ملخص حذف البيانات.
5.  أكد بكتابة **DELETE** وإدخال كلمة المرور.
6.  اضغط **تأكيد الحذف**.

## ما يتم حذفه

عند الانتهاء من حذف حسابك، تُزال البيانات التالية **نهائيًا**:

*   معلومات ملفك الشخصي (الاسم والبريد الإلكتروني والصورة)
*   جميع الرسائل التي أرسلتها واستلمتها
*   قصص الفصل والصور التي حمّلتها
*   النقاط وبيانات السلوك التي أنشأتها
*   عضوياتك في المدارس والفصول
*   سجل الإشعارات والتفضيلات
*   بيانات تسجيل الدخول والخدمات المتصلة

## ما لا يتم حذفه

*   **محتوى الفصل الذي أنشأه الآخرون:** الرسائل والصور والنقاط التي أنشأها معلمون أو أولياء أمور آخرون تبقى دون تأثر.
*   **التحليلات مجهولة الهوية:** بيانات الاستخدام الإجمالية غير القابلة للتحديد تُحتفظ بها لتحسين المنصة.
*   **سجلات الفوترة:** يُحتفظ بسجل الدفع لمدة 7 سنوات كما يتطلب القانون.

## نافذة الاسترداد

بعد تأكيد الحذف:

*   يدخل حسابك **فترة سماح مدتها 30 يومًا**.
*   خلال هذه الفترة، يكون حسابك **معطلاً** — لا يمكنك تسجيل الدخول ولا يمكن للمستخدمين الآخرين رؤية ملفك الشخصي.
*   **لاسترداد حسابك** خلال فترة السماح، تواصل مع **دعم سترينج** على support@string.education مع البريد الإلكتروني الذي استخدمته للتسجيل.
*   بعد 30 يومًا، يُحذف حسابك وجميع البيانات المرتبطة **نهائيًا ولا رجعة فيه**.

> **نصيحة:** إذا لم تكن متأكدًا، فكّر في تعطيل حسابك بدلاً من ذلك. انتقل إلى **إعدادات الحساب → تعطيل الحساب** لإخفاء ملفك الشخصي مؤقتًا دون فقدان البيانات.

## سياسة حذف البيانات

يلتزم سترينج بلوائح خصوصية التعليم الرئيسية:

*   **FERPA:** تُعالج سجلات تعليم الطلاب وفقًا لقانون حقوق الأسرة التعليمية والخصوصية.
*   **COPPA:** تُحذف بيانات الأطفال دون 13 عامًا امتثالًا لقانون حماية خصوصية الأطفال عبر الإنترنت.
*   **GDPR:** للمستخدمين في الاتحاد الأوروبي، تُعالج طلبات حذف البيانات خلال 30 يومًا.

عند الحذف الدائم، يُزيل سترينج جميع البيانات الشخصية من قواعد البيانات النشطة **و** أنظمة النسخ الاحتياطي خلال 90 يومًا.

## الأسئلة المتكررة

### هل يمكنني إنشاء حساب جديد بنفس البريد الإلكتروني بعد الحذف؟
نعم، ولكن فقط بعد انقضاء فترة الاسترداد البالغة 30 يومًا وتطهير بياناتك بالكامل.

### ماذا يحدث لحسابات أطفالي إذا حذفت حسابي؟
حسابات أطفالك الطلابية **لا تتأثر**. تبقى نشطة في فصولهم. ومع ذلك، لن يكون هناك ولي أمر مرتبط بحساباتهم حتى يتصل وصي آخر.

### أنا معلم — هل يمكنني نقل فصولي قبل الحذف؟
نعم. انتقل إلى **إعدادات الفصل → نقل الملكية** وعيّن معلمًا مشاركًا كمالك جديد للفصل. افعل ذلك قبل بدء الحذف.`
  },

  'supported-browsers-and-devices': {
    summary: 'A complete list of browsers, operating systems, and devices supported by String, including minimum version requirements.',
    summary_ar: 'قائمة كاملة بالمتصفحات وأنظمة التشغيل والأجهزة المدعومة من سترينج، بما في ذلك الحد الأدنى لمتطلبات الإصدار.',
    body: `String works on most modern browsers and devices. To get the best experience, make sure your browser and operating system are up to date.

## Supported Web Browsers

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| **Google Chrome** | Version 90+ | Recommended for best experience |
| **Mozilla Firefox** | Version 88+ | Fully supported |
| **Microsoft Edge** | Version 90+ | Chromium-based Edge only |
| **Safari** | Version 14+ | macOS and iOS |
| **Opera** | Version 76+ | Chromium-based |

> **Note:** Internet Explorer is **not supported**. If your school still uses IE, we recommend switching to Microsoft Edge.

## Supported Mobile Devices

### iOS
*   **iPhone** — iOS 14.0 or later
*   **iPad** — iPadOS 14.0 or later
*   Download from the [App Store](https://apps.apple.com)

### Android
*   **Phones and Tablets** — Android 8.0 (Oreo) or later
*   Download from the [Google Play Store](https://play.google.com)

## Supported Operating Systems (Desktop)

| OS | Minimum Version |
|----|----------------|
| **Windows** | Windows 10 or later |
| **macOS** | macOS 11 (Big Sur) or later |
| **Chrome OS** | Latest stable channel |
| **Linux** | Ubuntu 20.04+ / Fedora 34+ (via supported browser) |

## Screen Resolution

*   **Minimum:** 1024×768 pixels
*   **Recommended:** 1280×800 pixels or higher
*   String is fully responsive and works on screens of all sizes

## Internet Connection

*   **Minimum:** 1 Mbps download / 0.5 Mbps upload
*   **Recommended:** 5 Mbps or higher for video and media-rich content
*   A stable Wi-Fi or cellular (4G/LTE) connection is required

## Accessibility

String supports screen readers (VoiceOver, NVDA, JAWS) and keyboard-only navigation on all supported browsers. For the best accessibility experience, use the latest version of Chrome or Firefox.

## Troubleshooting

### String looks broken or features are missing
*   Update your browser to the latest version.
*   Clear your browser cache (see our article on clearing cache).
*   Disable browser extensions that may interfere (ad blockers, privacy extensions).

### App won't install on my device
*   Check that your device meets the minimum OS requirements above.
*   Ensure you have at least 100 MB of free storage space.
*   Restart your device and try again.`,

    body_ar: `يعمل سترينج على معظم المتصفحات والأجهزة الحديثة. للحصول على أفضل تجربة، تأكد من تحديث متصفحك ونظام التشغيل.

## متصفحات الويب المدعومة

| المتصفح | الحد الأدنى للإصدار | ملاحظات |
|---------|---------------------|---------|
| **Google Chrome** | الإصدار 90+ | موصى به لأفضل تجربة |
| **Mozilla Firefox** | الإصدار 88+ | مدعوم بالكامل |
| **Microsoft Edge** | الإصدار 90+ | Edge المبني على Chromium فقط |
| **Safari** | الإصدار 14+ | macOS و iOS |
| **Opera** | الإصدار 76+ | المبني على Chromium |

> **ملاحظة:** Internet Explorer **غير مدعوم**. إذا كانت مدرستك لا تزال تستخدم IE، نوصي بالتبديل إلى Microsoft Edge.

## الأجهزة المحمولة المدعومة

### iOS
*   **iPhone** — iOS 14.0 أو أحدث
*   **iPad** — iPadOS 14.0 أو أحدث

### Android
*   **الهواتف والأجهزة اللوحية** — Android 8.0 (Oreo) أو أحدث

## أنظمة التشغيل المدعومة (سطح المكتب)

| النظام | الحد الأدنى للإصدار |
|--------|---------------------|
| **Windows** | Windows 10 أو أحدث |
| **macOS** | macOS 11 (Big Sur) أو أحدث |
| **Chrome OS** | أحدث قناة مستقرة |

## دقة الشاشة

*   **الحد الأدنى:** 1024×768 بكسل
*   **الموصى به:** 1280×800 بكسل أو أعلى

## اتصال الإنترنت

*   **الحد الأدنى:** 1 ميجابت/ثانية تنزيل / 0.5 ميجابت/ثانية رفع
*   **الموصى به:** 5 ميجابت/ثانية أو أعلى للفيديو والمحتوى الغني

## استكشاف الأخطاء

### سترينج يبدو معطلاً أو الميزات مفقودة
*   حدّث متصفحك إلى أحدث إصدار.
*   امسح ذاكرة التخزين المؤقت للمتصفح.
*   عطّل إضافات المتصفح التي قد تتداخل.

### التطبيق لا يُثبت على جهازي
*   تحقق من أن جهازك يلبي الحد الأدنى لمتطلبات النظام أعلاه.
*   تأكد من توفر 100 ميجابايت على الأقل من مساحة التخزين.`
  },

  'troubleshooting-connection-issues': {
    summary: 'Step-by-step guide to diagnosing and fixing connection problems with String on web, iOS, and Android.',
    summary_ar: 'دليل خطوة بخطوة لتشخيص وإصلاح مشاكل الاتصال مع سترينج على الويب وiOS وAndroid.',
    body: `If String is loading slowly, not connecting, or showing error messages, follow these steps to diagnose and resolve the issue.

## Quick Checks

Before diving into detailed troubleshooting, verify these basics:

1.  **Internet connection** — Open another website (e.g., google.com) to confirm your internet is working.
2.  **String status** — Visit **status.string.education** to check if there's a known outage.
3.  **Browser/app version** — Make sure you're using a supported browser or the latest version of the String app.

## Web Troubleshooting

### Step 1: Refresh the Page
Press **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac) to do a hard refresh, bypassing the cache.

### Step 2: Try a Different Browser
If the issue persists, open String in a different browser (e.g., switch from Firefox to Chrome). This helps determine if the problem is browser-specific.

### Step 3: Disable Browser Extensions
Some extensions (ad blockers, privacy tools, VPNs) can interfere with String. Try loading String in an **Incognito/Private window** where extensions are disabled by default.

### Step 4: Clear Browser Data
Clear your cache and cookies for the past 24 hours. See our dedicated article on **Clearing Browser Cache** for detailed instructions.

### Step 5: Check Firewall and Network Settings
If you're on a school or corporate network, the IT administrator may need to whitelist String's domains. See our article on **Whitelisting String Domains**.

## iOS Troubleshooting

1.  **Force-close and reopen** the String app (swipe up from the app switcher).
2.  **Check for app updates** in the App Store.
3.  **Toggle Wi-Fi** off and on, or switch to cellular data temporarily.
4.  **Restart your device** — hold the power button and slide to power off.
5.  **Reinstall the app** — delete String and reinstall from the App Store (your data is stored on our servers and won't be lost).

## Android Troubleshooting

1.  **Force-stop the app** — Go to **Settings > Apps > String > Force Stop**.
2.  **Clear the app cache** — **Settings > Apps > String > Storage > Clear Cache**.
3.  **Check for updates** in the Google Play Store.
4.  **Toggle Wi-Fi** or switch to mobile data.
5.  **Restart your device**.
6.  **Reinstall** if the issue continues.

## Common Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| "Unable to connect" | No internet or server unreachable | Check Wi-Fi; try mobile data |
| "Session expired" | Your login session timed out | Log in again |
| "Something went wrong" | Temporary server error | Wait 5 minutes and retry |
| "Request timed out" | Slow connection | Move closer to your Wi-Fi router |

## Still Not Working?

If none of the above steps resolve the issue:

1.  Take a **screenshot** of any error message.
2.  Note the **device, OS version, and browser** you're using.
3.  Contact **String Support** at support@string.education with these details.`,

    body_ar: `إذا كان سترينج يحمّل ببطء أو لا يتصل أو يعرض رسائل خطأ، اتبع هذه الخطوات لتشخيص المشكلة وحلها.

## فحوصات سريعة

1.  **اتصال الإنترنت** — افتح موقعًا آخر للتأكد من أن الإنترنت يعمل.
2.  **حالة سترينج** — قم بزيارة **status.string.education** للتحقق من وجود انقطاع معروف.
3.  **إصدار المتصفح/التطبيق** — تأكد من استخدام متصفح مدعوم أو أحدث إصدار من تطبيق سترينج.

## استكشاف أخطاء الويب

### الخطوة 1: تحديث الصفحة
اضغط **Ctrl + Shift + R** (ويندوز) أو **Cmd + Shift + R** (ماك) لتحديث صعب.

### الخطوة 2: جرّب متصفحًا مختلفًا
افتح سترينج في متصفح آخر لتحديد ما إذا كانت المشكلة خاصة بالمتصفح.

### الخطوة 3: عطّل إضافات المتصفح
جرّب تحميل سترينج في **نافذة التصفح المتخفي** حيث تكون الإضافات معطلة.

### الخطوة 4: امسح بيانات المتصفح
امسح ذاكرة التخزين المؤقت وملفات تعريف الارتباط لآخر 24 ساعة.

### الخطوة 5: تحقق من جدار الحماية وإعدادات الشبكة
إذا كنت على شبكة مدرسية، قد يحتاج مسؤول تكنولوجيا المعلومات إلى إضافة نطاقات سترينج للقائمة البيضاء.

## استكشاف أخطاء iOS

1.  **أغلق التطبيق إجباريًا** وأعد فتحه.
2.  **تحقق من التحديثات** في متجر التطبيقات.
3.  **بدّل Wi-Fi** أو انتقل إلى البيانات الخلوية مؤقتًا.
4.  **أعد تشغيل جهازك**.
5.  **أعد تثبيت التطبيق** — بياناتك مخزنة على خوادمنا ولن تُفقد.

## استكشاف أخطاء Android

1.  **أوقف التطبيق إجباريًا** — **الإعدادات > التطبيقات > سترينج > إيقاف إجباري**.
2.  **امسح ذاكرة التخزين المؤقت** — **الإعدادات > التطبيقات > سترينج > التخزين > مسح الذاكرة المؤقتة**.
3.  **تحقق من التحديثات** في متجر Google Play.
4.  **أعد تشغيل جهازك**.

## رسائل الخطأ الشائعة

| الخطأ | المعنى | الحل |
|-------|--------|------|
| "تعذر الاتصال" | لا يوجد إنترنت | تحقق من Wi-Fi |
| "انتهت الجلسة" | انتهت مهلة جلستك | سجّل الدخول مرة أخرى |
| "حدث خطأ ما" | خطأ مؤقت في الخادم | انتظر 5 دقائق وحاول مرة أخرى |

## لا يزال لا يعمل؟

تواصل مع **دعم سترينج** على support@string.education مع لقطة شاشة وتفاصيل جهازك.`
  },

  'clearing-browser-cache': {
    summary: 'How to clear your browser cache and cookies to fix display issues, loading errors, and outdated content on String.',
    summary_ar: 'كيفية مسح ذاكرة التخزين المؤقت وملفات تعريف الارتباط للمتصفح لإصلاح مشاكل العرض وأخطاء التحميل والمحتوى القديم على سترينج.',
    body: `Clearing your browser cache removes temporary files that may cause String to display outdated content, load incorrectly, or show errors. This is one of the most common fixes for web-based issues.

## When to Clear Your Cache

*   String pages are not loading or loading slowly
*   You see outdated information (old profile picture, missing new features)
*   You get a blank white screen after logging in
*   Buttons or menus are not responding
*   You recently updated your account but changes aren't reflected

## Google Chrome

1.  Click the **three-dot menu** (⋮) in the top-right corner.
2.  Go to **Settings** → **Privacy and Security** → **Delete browsing data**.
3.  Set the time range to **Last 24 hours** (or **All time** if the issue persists).
4.  Check the boxes for:
    *   **Cookies and other site data**
    *   **Cached images and files**
5.  Click **Delete data**.
6.  Close and reopen Chrome, then log in to String again.

## Mozilla Firefox

1.  Click the **hamburger menu** (☰) → **Settings**.
2.  Go to **Privacy & Security**.
3.  Under **Cookies and Site Data**, click **Clear Data**.
4.  Check both **Cookies and Site Data** and **Cached Web Content**.
5.  Click **Clear**.
6.  Restart Firefox and log back in to String.

## Microsoft Edge

1.  Click the **three-dot menu** (⋯) → **Settings**.
2.  Go to **Privacy, search, and services**.
3.  Under **Clear browsing data**, click **Choose what to clear**.
4.  Set the time range and check **Cached images and files** and **Cookies**.
5.  Click **Clear now**.

## Safari (macOS)

1.  Click **Safari** in the menu bar → **Settings** (or **Preferences**).
2.  Go to the **Privacy** tab.
3.  Click **Manage Website Data**.
4.  Search for **string** and click **Remove** next to string.education entries.
5.  Alternatively, click **Remove All** to clear all site data.

## Safari (iOS / iPadOS)

1.  Open **Settings** on your device.
2.  Scroll down and tap **Safari**.
3.  Tap **Clear History and Website Data**.
4.  Confirm by tapping **Clear History and Data**.

> **Note:** This clears data for all websites, not just String. You will need to log back in to other sites as well.

## After Clearing Cache

*   You will be logged out of String — log in again with your email and password.
*   The first page load may be slightly slower as files are re-downloaded.
*   All display and loading issues should be resolved.

## Troubleshooting

### Clearing cache didn't fix the issue
*   Try opening String in an **Incognito/Private window**.
*   Try a **different browser** entirely.
*   Check if your browser is up to date.
*   Contact String Support if the problem continues.`,

    body_ar: `مسح ذاكرة التخزين المؤقت يزيل الملفات المؤقتة التي قد تتسبب في عرض سترينج لمحتوى قديم أو التحميل بشكل غير صحيح.

## متى تمسح ذاكرة التخزين المؤقت

*   صفحات سترينج لا تحمّل أو تحمّل ببطء
*   ترى معلومات قديمة
*   تحصل على شاشة بيضاء فارغة بعد تسجيل الدخول
*   الأزرار أو القوائم لا تستجيب

## Google Chrome

1.  انقر على **قائمة النقاط الثلاث** (⋮) في الزاوية العلوية اليمنى.
2.  انتقل إلى **الإعدادات** → **الخصوصية والأمان** → **حذف بيانات التصفح**.
3.  اضبط النطاق الزمني على **آخر 24 ساعة**.
4.  حدد:
    *   **ملفات تعريف الارتباط وبيانات المواقع**
    *   **الصور والملفات المخزنة مؤقتًا**
5.  انقر **حذف البيانات**.

## Mozilla Firefox

1.  انقر على **القائمة** (☰) → **الإعدادات**.
2.  انتقل إلى **الخصوصية والأمان**.
3.  ضمن **ملفات تعريف الارتباط وبيانات المواقع**، انقر **مسح البيانات**.
4.  حدد كلا الخيارين وانقر **مسح**.

## Microsoft Edge

1.  انقر على **قائمة النقاط الثلاث** (⋯) → **الإعدادات**.
2.  انتقل إلى **الخصوصية والبحث والخدمات**.
3.  انقر **اختر ما تريد مسحه**.
4.  حدد الخيارات وانقر **مسح الآن**.

## Safari (macOS)

1.  انقر **Safari** → **الإعدادات**.
2.  انتقل إلى علامة تبويب **الخصوصية**.
3.  انقر **إدارة بيانات المواقع**.
4.  ابحث عن **string** وانقر **إزالة**.

## Safari (iOS)

1.  افتح **الإعدادات** على جهازك.
2.  اضغط على **Safari**.
3.  اضغط على **مسح السجل وبيانات المواقع**.

## بعد مسح ذاكرة التخزين المؤقت

*   ستحتاج لتسجيل الدخول مرة أخرى.
*   قد يكون التحميل الأول أبطأ قليلاً.
*   يجب أن تُحل جميع مشاكل العرض والتحميل.`
  },

  'mobile-app-system-requirements': {
    summary: 'Minimum device specifications, OS versions, and storage requirements for running the String mobile app on iOS and Android.',
    summary_ar: 'الحد الأدنى لمواصفات الجهاز وإصدارات النظام ومتطلبات التخزين لتشغيل تطبيق سترينج على iOS وAndroid.',
    body: `The String mobile app is available for both iOS and Android. This article covers the minimum requirements to install and run the app smoothly.

## iOS Requirements

| Requirement | Detail |
|-------------|--------|
| **Operating System** | iOS 14.0 or later |
| **Devices** | iPhone 8 or newer, iPad (6th generation) or newer, iPad mini (5th generation) or newer |
| **Storage** | At least 150 MB free for installation; 300 MB recommended for regular use |
| **Internet** | Wi-Fi or cellular data (4G LTE or higher recommended) |

### How to Check Your iOS Version
1.  Open **Settings** → **General** → **About**.
2.  Look at the **Software Version** field.
3.  If your version is below 14.0, go to **Settings > General > Software Update** to update.

## Android Requirements

| Requirement | Detail |
|-------------|--------|
| **Operating System** | Android 8.0 (Oreo) or later |
| **RAM** | 2 GB minimum; 3 GB or more recommended |
| **Storage** | At least 100 MB free for installation; 250 MB recommended |
| **Screen** | 720p (1280×720) or higher resolution |
| **Internet** | Wi-Fi or cellular data (4G LTE or higher recommended) |

### How to Check Your Android Version
1.  Open **Settings** → **About Phone** (or **About Device**).
2.  Look for **Android version**.
3.  If your version is below 8.0, check with your device manufacturer for available updates.

## Supported Tablets

String works on tablets running the supported OS versions listed above. The app automatically adjusts its layout for larger screens.

*   **iPad** — Full tablet-optimized layout
*   **Android tablets** — Responsive layout (10-inch screens or larger recommended)

## Features That Require Additional Permissions

| Feature | Permission Needed |
|---------|------------------|
| **Profile photo** | Camera, Photo Library |
| **Class Story posts** | Camera, Photo Library, Microphone (for video) |
| **Portfolio uploads** | Camera, Photo Library, Files |
| **Push notifications** | Notification permission |
| **QR code scanning** | Camera |

> **Tip:** You can manage app permissions at any time from your device's Settings app.

## Performance Tips

*   **Keep the app updated** — We release performance improvements and bug fixes regularly.
*   **Clear app cache** — On Android, go to **Settings > Apps > String > Storage > Clear Cache** if the app feels slow.
*   **Close background apps** — Free up memory by closing apps you're not using.
*   **Use Wi-Fi when possible** — For uploading photos/videos, Wi-Fi provides a faster and more reliable connection.

## Troubleshooting

### "This app is not compatible with your device"
Your device or OS version doesn't meet the minimum requirements. Update your OS or try the web version at **app.string.education**.

### App crashes on launch
1.  Ensure your device has enough free storage (at least 100 MB).
2.  Update the app to the latest version.
3.  Restart your device.
4.  If crashes persist, uninstall and reinstall the app.`,

    body_ar: `تطبيق سترينج المحمول متاح لكل من iOS وAndroid. يغطي هذا المقال الحد الأدنى من المتطلبات لتثبيت التطبيق وتشغيله بسلاسة.

## متطلبات iOS

| المتطلب | التفصيل |
|---------|---------|
| **نظام التشغيل** | iOS 14.0 أو أحدث |
| **الأجهزة** | iPhone 8 أو أحدث، iPad (الجيل السادس) أو أحدث |
| **التخزين** | 150 ميجابايت على الأقل للتثبيت |
| **الإنترنت** | Wi-Fi أو بيانات خلوية (4G LTE أو أعلى) |

### كيفية التحقق من إصدار iOS
1.  افتح **الإعدادات** → **عام** → **حول**.
2.  ابحث عن **إصدار البرنامج**.

## متطلبات Android

| المتطلب | التفصيل |
|---------|---------|
| **نظام التشغيل** | Android 8.0 (Oreo) أو أحدث |
| **الذاكرة** | 2 جيجابايت كحد أدنى |
| **التخزين** | 100 ميجابايت على الأقل للتثبيت |
| **الشاشة** | دقة 720p أو أعلى |

### كيفية التحقق من إصدار Android
1.  افتح **الإعدادات** → **حول الهاتف**.
2.  ابحث عن **إصدار Android**.

## الأذونات المطلوبة

| الميزة | الإذن المطلوب |
|--------|---------------|
| **صورة الملف الشخصي** | الكاميرا، مكتبة الصور |
| **منشورات قصة الفصل** | الكاميرا، مكتبة الصور، الميكروفون |
| **تحميلات الملف** | الكاميرا، مكتبة الصور، الملفات |
| **إشعارات الدفع** | إذن الإشعارات |

## نصائح الأداء

*   **حافظ على تحديث التطبيق** — نصدر تحسينات الأداء بانتظام.
*   **امسح ذاكرة التخزين المؤقت** — على Android، انتقل إلى **الإعدادات > التطبيقات > سترينج > التخزين > مسح الذاكرة المؤقتة**.
*   **أغلق التطبيقات في الخلفية** لتحرير الذاكرة.

## استكشاف الأخطاء

### "هذا التطبيق غير متوافق مع جهازك"
جهازك أو إصدار النظام لا يلبي الحد الأدنى من المتطلبات. حدّث نظام التشغيل أو جرّب إصدار الويب.

### التطبيق يتعطل عند التشغيل
1.  تأكد من وجود مساحة تخزين كافية.
2.  حدّث التطبيق إلى أحدث إصدار.
3.  أعد تشغيل جهازك.
4.  أعد تثبيت التطبيق إذا استمر التعطل.`
  },

  'whitelisting-string-domains': {
    summary: 'A list of domains and IP ranges that school IT administrators should whitelist to ensure String works on managed networks.',
    summary_ar: 'قائمة بالنطاقات ونطاقات IP التي يجب على مسؤولي تكنولوجيا المعلومات في المدارس إضافتها للقائمة البيضاء لضمان عمل سترينج على الشبكات المُدارة.',
    body: `School and district networks often use firewalls and content filters that can block String from working properly. If teachers or families on your network can't access String, your IT team may need to whitelist (allow) the following domains.

## Required Domains

Add these domains to your firewall/content filter allow list:

| Domain | Purpose |
|--------|---------|
| **\*.string.education** | Main application and website |
| **app.string.education** | Web application |
| **api.string.education** | API communications |
| **cdn.string.education** | Images, videos, and static files |
| **status.string.education** | Service status page |
| **push.string.education** | Push notification service |
| **upload.string.education** | File and media uploads |

## Third-Party Services

String relies on the following third-party services that may also need to be whitelisted:

| Domain | Service | Purpose |
|--------|---------|---------|
| **\*.googleapis.com** | Google | SSO login, Google Classroom integration |
| **\*.firebaseio.com** | Firebase | Real-time messaging |
| **\*.cloudfront.net** | AWS CloudFront | Content delivery (images, files) |
| **\*.sentry.io** | Sentry | Error reporting (helps us fix bugs) |

## Email Whitelisting

To ensure families and teachers receive String emails (notifications, password resets, invitations), add these to your email allow list:

*   **noreply@string.education**
*   **support@string.education**
*   **notifications@string.education**

Also add the domain **string.education** to your email server's SPF/DKIM trusted senders list.

## Port Requirements

| Port | Protocol | Purpose |
|------|----------|---------|
| **443** | HTTPS/TLS | All web traffic (required) |
| **80** | HTTP | Redirects to HTTPS (recommended) |
| **5228-5230** | TCP | Firebase push notifications (Android) |

## How to Verify Access

After whitelisting, test access by:

1.  Opening **app.string.education** in a web browser on the school network.
2.  Logging in with a test account.
3.  Sending a test message with a photo attachment.
4.  Checking that push notifications arrive on a mobile device connected to the school Wi-Fi.

## Common Issues

### String loads but images are missing
Your content filter may be blocking **cdn.string.education** or **\*.cloudfront.net**. Add these to your allow list.

### Push notifications don't arrive on school Wi-Fi
Firebase ports (5228-5230) may be blocked. Open these ports or ensure devices can reach **\*.firebaseio.com** on port 443.

### Google SSO login fails
Ensure **\*.googleapis.com** is whitelisted and that Google authentication is not blocked by your content filter.

### Need help?
Contact String's IT support team at **it-support@string.education** for assistance with network configuration. We can provide your IT team with a custom diagnostic tool.`,

    body_ar: `غالبًا ما تستخدم شبكات المدارس والمناطق التعليمية جدران حماية ومرشحات محتوى قد تحظر عمل سترينج بشكل صحيح. إذا لم يتمكن المعلمون أو العائلات من الوصول إلى سترينج، قد يحتاج فريق تكنولوجيا المعلومات إلى إضافة النطاقات التالية للقائمة البيضاء.

## النطاقات المطلوبة

| النطاق | الغرض |
|--------|-------|
| **\*.string.education** | التطبيق والموقع الرئيسي |
| **app.string.education** | تطبيق الويب |
| **api.string.education** | اتصالات API |
| **cdn.string.education** | الصور والفيديو والملفات الثابتة |
| **status.string.education** | صفحة حالة الخدمة |
| **push.string.education** | خدمة الإشعارات |
| **upload.string.education** | رفع الملفات والوسائط |

## خدمات الطرف الثالث

| النطاق | الخدمة | الغرض |
|--------|--------|-------|
| **\*.googleapis.com** | Google | تسجيل الدخول الموحد |
| **\*.firebaseio.com** | Firebase | المراسلة الفورية |
| **\*.cloudfront.net** | AWS CloudFront | توصيل المحتوى |

## إضافة البريد الإلكتروني للقائمة البيضاء

أضف هذه العناوين:
*   **noreply@string.education**
*   **support@string.education**
*   **notifications@string.education**

## متطلبات المنافذ

| المنفذ | البروتوكول | الغرض |
|--------|-----------|-------|
| **443** | HTTPS/TLS | جميع حركة الويب (مطلوب) |
| **80** | HTTP | إعادة التوجيه إلى HTTPS |
| **5228-5230** | TCP | إشعارات Firebase (Android) |

## كيفية التحقق من الوصول

1.  افتح **app.string.education** في متصفح على شبكة المدرسة.
2.  سجّل الدخول بحساب تجريبي.
3.  أرسل رسالة اختبار مع مرفق صورة.
4.  تحقق من وصول الإشعارات على جهاز محمول متصل بشبكة Wi-Fi المدرسية.

## المشاكل الشائعة

### سترينج يحمّل لكن الصور مفقودة
أضف **cdn.string.education** و **\*.cloudfront.net** للقائمة البيضاء.

### الإشعارات لا تصل على Wi-Fi المدرسة
افتح المنافذ 5228-5230 أو تأكد من الوصول إلى **\*.firebaseio.com**.

### فشل تسجيل الدخول بـ Google SSO
تأكد من إضافة **\*.googleapis.com** للقائمة البيضاء.

### تحتاج مساعدة؟
تواصل مع فريق دعم تكنولوجيا المعلومات في سترينج على **it-support@string.education**.`
  },

  // ── g1: Creating an Account ──
  'teacher-sign-up-guide': {
    summary: 'Step-by-step walkthrough for teachers to create a String account and verify their school affiliation.',
    summary_ar: 'شرح خطوة بخطوة للمعلمين لإنشاء حساب سترينج والتحقق من انتسابهم المدرسي.',
    body: `Creating a String teacher account takes about 5 minutes. You'll need a valid school email address and basic information about your school.

## What You Need

*   A school-issued email address (e.g., name@myschool.edu)
*   Your school's name and location
*   A device with internet access (computer, phone, or tablet)

## Sign Up on Web

1.  Go to **app.string.education/signup**.
2.  Select **I'm a Teacher**.
3.  Enter your **full name** as it appears in your school directory.
4.  Enter your **school email address**.
5.  Create a **password** (minimum 8 characters, must include uppercase, lowercase, and a number).
6.  Click **Create Account**.
7.  Check your email for a **verification link** and click it within 24 hours.

## Sign Up on Mobile

1.  Download **String** from the App Store (iOS) or Google Play (Android).
2.  Tap **Sign Up** → **I'm a Teacher**.
3.  Fill in your name, school email, and password.
4.  Tap **Create Account**.
5.  Verify your email by tapping the link sent to your inbox.

## After Verification

Once your email is verified:

1.  Log in to String.
2.  You'll be prompted to **find your school** by name, city, or zip code.
3.  Select your school from the results.
4.  Your request will be sent to a **School Leader** (admin) for approval.
5.  You'll receive a notification once approved — this usually takes 1–2 business days.

## Tips

*   If your school email is not recognized, try using a personal email and contact your admin to link it later.
*   Check your **spam/junk** folder if the verification email doesn't arrive.
*   You can only have one teacher account per email address.`,

    body_ar: `إنشاء حساب معلم على سترينج يستغرق حوالي 5 دقائق. ستحتاج إلى عنوان بريد إلكتروني مدرسي صالح ومعلومات أساسية عن مدرستك.

## ما تحتاجه

*   بريد إلكتروني مدرسي
*   اسم مدرستك وموقعها
*   جهاز متصل بالإنترنت

## التسجيل على الويب

1.  انتقل إلى **app.string.education/signup**.
2.  اختر **أنا معلم**.
3.  أدخل **اسمك الكامل**.
4.  أدخل **بريدك الإلكتروني المدرسي**.
5.  أنشئ **كلمة مرور** (8 أحرف على الأقل).
6.  انقر **إنشاء حساب**.
7.  تحقق من بريدك الإلكتروني وانقر على **رابط التحقق**.

## التسجيل على الهاتف

1.  حمّل **سترينج** من متجر التطبيقات.
2.  اضغط **تسجيل** → **أنا معلم**.
3.  أكمل البيانات واضغط **إنشاء حساب**.
4.  تحقق من بريدك الإلكتروني.

## بعد التحقق

1.  سجّل الدخول إلى سترينج.
2.  ابحث عن مدرستك بالاسم أو الرمز البريدي.
3.  اختر مدرستك من النتائج.
4.  سيُرسل طلبك لـ **قائد المدرسة** للموافقة.
5.  ستتلقى إشعارًا بعد الموافقة (عادة 1-2 يوم عمل).

## نصائح

*   تحقق من مجلد **البريد العشوائي** إذا لم يصل رابط التحقق.
*   يمكنك امتلاك حساب معلم واحد فقط لكل بريد إلكتروني.`
  },

  'school-leader-account-setup': {
    summary: 'How school administrators can create a School Leader account to manage their school on String.',
    summary_ar: 'كيف يمكن لمسؤولي المدارس إنشاء حساب قائد مدرسة لإدارة مدرستهم على سترينج.',
    body: `School Leaders have administrative control over their school's String account. They can approve teacher requests, manage staff, view school-wide analytics, and configure platform settings.

## Who Should Be a School Leader?

*   Principals and vice principals
*   IT administrators
*   Office managers designated by school administration
*   District coordinators (for multi-school management)

## Creating a School Leader Account

### Option 1: Sign Up as a New User
1.  Go to **app.string.education/signup**.
2.  Select **I'm a School Leader**.
3.  Enter your name, school email, and create a password.
4.  Click **Create Account** and verify your email.
5.  Search for your school by name or zip code.
6.  If your school already exists, your request goes to the current School Leader for approval.
7.  If your school is new to String, you become the founding School Leader automatically.

### Option 2: Upgrade an Existing Teacher Account
1.  An existing School Leader goes to **School Settings → Staff**.
2.  Finds your name in the teacher list.
3.  Clicks **Promote to School Leader**.
4.  You'll receive an email confirming your new role.

## School Leader Capabilities

| Capability | Description |
|-----------|-------------|
| **Approve teachers** | Review and accept/deny teacher join requests |
| **Manage staff** | Add, remove, or change roles for school staff |
| **School analytics** | View engagement data for all classes |
| **Platform settings** | Configure school-wide messaging rules and privacy |
| **Parent invitations** | Send school-wide parent onboarding campaigns |

## First Steps After Setup

1.  **Complete your school profile** — Add your school logo, address, and website.
2.  **Invite teachers** — Share your school's join link or invite via email.
3.  **Configure settings** — Set messaging permissions, content moderation rules, and notification preferences.
4.  **Launch a parent onboarding campaign** — Use our built-in tools to invite families.`,

    body_ar: `قادة المدارس لديهم تحكم إداري في حساب سترينج الخاص بمدرستهم. يمكنهم الموافقة على طلبات المعلمين وإدارة الموظفين وعرض التحليلات وتكوين الإعدادات.

## من يجب أن يكون قائد المدرسة؟

*   المديرون ونواب المديرين
*   مسؤولو تكنولوجيا المعلومات
*   مديرو المكاتب المعيّنون
*   منسقو المنطقة التعليمية

## إنشاء حساب قائد مدرسة

### الخيار 1: التسجيل كمستخدم جديد
1.  انتقل إلى **app.string.education/signup**.
2.  اختر **أنا قائد مدرسة**.
3.  أدخل بياناتك وأنشئ كلمة مرور.
4.  تحقق من بريدك الإلكتروني.
5.  ابحث عن مدرستك.
6.  إذا كانت مدرستك موجودة بالفعل، سيُرسل طلبك للموافقة.
7.  إذا كانت مدرستك جديدة، ستصبح قائد المدرسة المؤسس تلقائيًا.

### الخيار 2: ترقية حساب معلم موجود
1.  ينتقل قائد المدرسة الحالي إلى **إعدادات المدرسة → الموظفون**.
2.  يجد اسمك وينقر **ترقية إلى قائد مدرسة**.

## صلاحيات قائد المدرسة

| الصلاحية | الوصف |
|----------|-------|
| **الموافقة على المعلمين** | مراجعة طلبات الانضمام وقبولها أو رفضها |
| **إدارة الموظفين** | إضافة أو إزالة أو تغيير أدوار الموظفين |
| **تحليلات المدرسة** | عرض بيانات المشاركة لجميع الفصول |
| **إعدادات المنصة** | تكوين قواعد المراسلة والخصوصية |

## الخطوات الأولى بعد الإعداد

1.  **أكمل ملف مدرستك** — أضف الشعار والعنوان والموقع.
2.  **ادعُ المعلمين** — شارك رابط الانضمام.
3.  **هيّئ الإعدادات** — اضبط أذونات المراسلة والإشعارات.
4.  **أطلق حملة دعوة أولياء الأمور**.`
  },

  'district-admin-account-creation': {
    summary: 'Instructions for district administrators to create a district-level account for managing multiple schools on String.',
    summary_ar: 'تعليمات لمسؤولي المناطق التعليمية لإنشاء حساب على مستوى المنطقة لإدارة مدارس متعددة على سترينج.',
    body: `District Admin accounts give you oversight of all schools in your district on String. You can monitor adoption, manage staff across schools, and enforce district-wide policies.

## Prerequisites

*   You must be authorized by your district as a technology or curriculum administrator.
*   You need a district-issued email address.
*   Contact String's partnerships team at **districts@string.education** if your district has more than 20 schools.

## Creating Your District Account

1.  Go to **app.string.education/signup**.
2.  Select **I'm a District Admin**.
3.  Enter your name, district email, and create a password.
4.  Click **Create Account** and verify your email.
5.  Enter your **district name** and **state/region**.
6.  String will review your request and verify your identity within **2–3 business days**.
7.  Once approved, you'll receive an email with instructions to complete your district setup.

## Setting Up Your District

After approval:

1.  **Add schools** — Search by name or bulk-import via CSV.
2.  **Assign School Leaders** — Invite or promote existing users to School Leader roles.
3.  **Configure district policies** — Set messaging rules, content moderation, and data retention policies.
4.  **Enable SSO** — If your district uses Google Workspace or Microsoft 365, configure Single Sign-On for seamless access.

## District Dashboard Features

*   **School overview** — See active teachers, connected families, and engagement rates per school.
*   **Adoption metrics** — Track which schools are actively using String and which need support.
*   **Staff directory** — View and manage all staff across your district.
*   **Policy enforcement** — Push district-wide settings to all schools.

## Data and Privacy

*   District Admins can access aggregated analytics but cannot read individual messages.
*   All data handling complies with **FERPA**, **COPPA**, and your district's data privacy agreement.
*   You can request a full data export from **District Settings → Data Management**.`,

    body_ar: `تمنحك حسابات مسؤول المنطقة التعليمية الإشراف على جميع المدارس في منطقتك على سترينج.

## المتطلبات الأساسية

*   يجب أن تكون مفوّضًا من منطقتك التعليمية.
*   تحتاج إلى بريد إلكتروني صادر من المنطقة.
*   تواصل مع فريق شراكات سترينج على **districts@string.education** إذا كان لديك أكثر من 20 مدرسة.

## إنشاء حساب المنطقة

1.  انتقل إلى **app.string.education/signup**.
2.  اختر **أنا مسؤول منطقة تعليمية**.
3.  أدخل بياناتك وأنشئ كلمة مرور.
4.  تحقق من بريدك الإلكتروني.
5.  أدخل **اسم منطقتك** و**الولاية/المنطقة**.
6.  سيراجع سترينج طلبك خلال **2-3 أيام عمل**.

## إعداد منطقتك

1.  **أضف المدارس** — ابحث بالاسم أو استورد بالجملة عبر CSV.
2.  **عيّن قادة المدارس**.
3.  **هيّئ سياسات المنطقة** — قواعد المراسلة والإشراف على المحتوى.
4.  **فعّل تسجيل الدخول الموحد (SSO)**.

## ميزات لوحة قيادة المنطقة

*   **نظرة عامة على المدارس** — المعلمون النشطون والعائلات المتصلة ومعدلات المشاركة.
*   **مقاييس التبني** — تتبع المدارس التي تستخدم سترينج بنشاط.
*   **دليل الموظفين** — عرض وإدارة جميع الموظفين.

## البيانات والخصوصية

*   يمكن لمسؤولي المنطقة الوصول إلى التحليلات المجمعة لكن لا يمكنهم قراءة الرسائل الفردية.
*   جميع البيانات تمتثل لمعايير **FERPA** و**COPPA**.`
  },

  'google-sso-integration': {
    summary: 'How to set up Google Single Sign-On (SSO) for your school or district to allow one-click login with Google accounts.',
    summary_ar: 'كيفية إعداد تسجيل الدخول الموحد من Google لمدرستك أو منطقتك للسماح بتسجيل الدخول بنقرة واحدة.',
    body: `Google SSO allows teachers, parents, and students to log in to String using their existing Google accounts — no separate password needed. This is especially useful for schools using Google Workspace for Education.

## Benefits of Google SSO

*   **One-click login** — No need to remember a separate String password.
*   **Fewer support tickets** — Eliminates password reset requests for String.
*   **Faster onboarding** — New users can sign up in seconds.
*   **Enhanced security** — Leverages your school's existing Google security policies (MFA, device management).

## Setting Up Google SSO (School Leader)

1.  Log in to String as a **School Leader**.
2.  Go to **School Settings** → **Authentication**.
3.  Click **Enable Google SSO**.
4.  You'll be prompted to authorize String in your Google Workspace Admin Console:
    *   Go to **admin.google.com** → **Security** → **API Controls** → **App Access Control**.
    *   Search for **String** and mark it as **Trusted**.
5.  Return to String and click **Verify Connection**.
6.  A green checkmark confirms SSO is active.

## Setting Up Google SSO (District Admin)

1.  Go to **District Settings** → **Authentication**.
2.  Click **Enable Google SSO for All Schools**.
3.  Follow the same authorization steps in Google Workspace Admin Console.
4.  SSO will be pushed to all schools in your district.

## How Users Log In with Google SSO

1.  Go to the String login page or open the app.
2.  Click **Sign in with Google**.
3.  Select your Google account (school email).
4.  You're logged in — no password needed.

> **Note:** If a user already has a String account with the same email, their accounts are automatically linked on first Google SSO login.

## Troubleshooting

### "This app is blocked by your organization"
Your Google Workspace admin hasn't approved String yet. Ask them to mark String as Trusted in the Admin Console.

### User gets "Account not found" after clicking Google SSO
The user's Google email may not match their String account email. They should update their String email or contact their School Leader.

### Can users still log in with email and password?
Yes. Google SSO is an additional login option, not a replacement. Users can always use their email and password.`,

    body_ar: `يتيح تسجيل الدخول الموحد من Google للمعلمين وأولياء الأمور والطلاب تسجيل الدخول إلى سترينج باستخدام حسابات Google الموجودة.

## فوائد Google SSO

*   **تسجيل دخول بنقرة واحدة** — لا حاجة لكلمة مرور منفصلة.
*   **تذاكر دعم أقل** — يلغي طلبات إعادة تعيين كلمة المرور.
*   **إعداد أسرع** — يمكن للمستخدمين الجدد التسجيل في ثوانٍ.

## إعداد Google SSO (قائد المدرسة)

1.  سجّل الدخول كـ **قائد مدرسة**.
2.  انتقل إلى **إعدادات المدرسة** → **المصادقة**.
3.  انقر **تفعيل Google SSO**.
4.  اذهب إلى **admin.google.com** → **الأمان** → **التحكم في التطبيقات**.
5.  ابحث عن **String** وحدده كـ **موثوق**.
6.  عُد إلى سترينج وانقر **التحقق من الاتصال**.

## كيف يسجّل المستخدمون الدخول

1.  انتقل إلى صفحة تسجيل الدخول.
2.  انقر **تسجيل الدخول بـ Google**.
3.  اختر حساب Google الخاص بك.

## استكشاف الأخطاء

### "هذا التطبيق محظور من قبل مؤسستك"
لم يوافق مسؤول Google Workspace على سترينج بعد.

### يحصل المستخدم على "الحساب غير موجود"
بريد Google قد لا يتطابق مع بريد سترينج. يجب تحديث البريد في سترينج.

### هل يمكن للمستخدمين تسجيل الدخول بالبريد وكلمة المرور؟
نعم. Google SSO هو خيار إضافي وليس بديلاً.`
  },

  'troubleshooting-sign-up-errors': {
    summary: 'Solutions for common sign-up errors including verification failures, duplicate accounts, and unsupported emails.',
    summary_ar: 'حلول لأخطاء التسجيل الشائعة بما في ذلك فشل التحقق والحسابات المكررة والبريد الإلكتروني غير المدعوم.',
    body: `Having trouble creating your String account? This article covers the most common sign-up issues and how to resolve them.

## "Email already in use"

This means an account already exists with your email address.

**Solutions:**
1.  Try logging in instead of signing up — you may have created an account previously.
2.  Use the **Forgot Password** link to reset your password if you don't remember it.
3.  If you believe someone else used your email, contact **support@string.education**.

## "Verification email not received"

**Check these first:**
*   Look in your **spam/junk** folder.
*   Search your inbox for emails from **noreply@string.education**.
*   Wait 5 minutes — email delivery can sometimes be delayed.

**Still not received?**
1.  Go to **app.string.education/login** and enter your credentials.
2.  Click **Resend Verification Email**.
3.  If using a school email, ask your IT administrator to whitelist **string.education** (see our Whitelisting article).

## "This email domain is not supported"

Some disposable or temporary email services are blocked. String requires a permanent email address.

**Accepted email providers:**
*   School-issued emails (e.g., @myschool.edu) — always accepted
*   Gmail, Outlook, Yahoo, iCloud — accepted
*   Temporary/disposable emails (e.g., guerrillamail, tempmail) — blocked

## "School not found"

When searching for your school during sign-up:

1.  Try different spellings or abbreviations (e.g., "PS 101" vs "Public School 101").
2.  Search by **zip code** instead of school name.
3.  If your school truly isn't listed, click **Add My School** and fill in the details. A String team member will verify the submission within 1–2 business days.

## "Password does not meet requirements"

Your password must:
*   Be at least **8 characters** long
*   Include at least **one uppercase letter**
*   Include at least **one lowercase letter**
*   Include at least **one number**
*   Not be the same as your email address

## "Account creation failed — try again later"

This is usually a temporary server issue.

1.  Wait 5–10 minutes and try again.
2.  Check **status.string.education** for any known outages.
3.  Try a different browser or device.
4.  If the error persists for more than an hour, contact support.

## Still Need Help?

Contact **support@string.education** with:
*   The **error message** you're seeing (screenshot is helpful)
*   Your **email address**
*   The **device and browser** you're using`,

    body_ar: `هل تواجه مشكلة في إنشاء حسابك على سترينج؟ يغطي هذا المقال أكثر مشاكل التسجيل شيوعًا.

## "البريد الإلكتروني مستخدم بالفعل"

يعني أن حسابًا موجودًا بالفعل بهذا البريد.

**الحلول:**
1.  جرّب تسجيل الدخول بدلاً من التسجيل.
2.  استخدم رابط **نسيت كلمة المرور**.
3.  تواصل مع **support@string.education** إذا لم يكن حسابك.

## "لم يتم استلام رسالة التحقق"

*   تحقق من مجلد **البريد العشوائي**.
*   ابحث عن رسائل من **noreply@string.education**.
*   انتظر 5 دقائق.
*   انتقل إلى صفحة تسجيل الدخول وانقر **إعادة إرسال رسالة التحقق**.

## "نطاق البريد الإلكتروني غير مدعوم"

سترينج يتطلب بريدًا إلكترونيًا دائمًا. البريد المؤقت محظور.

## "المدرسة غير موجودة"

1.  جرّب تهجئات مختلفة.
2.  ابحث بـ **الرمز البريدي**.
3.  انقر **أضف مدرستي** إذا لم تكن مدرجة.

## "كلمة المرور لا تلبي المتطلبات"

*   8 أحرف على الأقل
*   حرف كبير واحد على الأقل
*   حرف صغير واحد على الأقل
*   رقم واحد على الأقل

## "فشل إنشاء الحساب"

مشكلة مؤقتة في الخادم. انتظر 5-10 دقائق وحاول مرة أخرى.`
  },

  // ── g2: Roles and Permissions ──
  'understanding-admin-vs-teacher': {
    summary: 'A comparison of School Leader (admin) and Teacher roles on String, including permissions and capabilities.',
    summary_ar: 'مقارنة بين أدوار قائد المدرسة (المسؤول) والمعلم على سترينج، بما في ذلك الصلاحيات والقدرات.',
    body: `String has two primary staff roles: **Teacher** and **School Leader** (admin). Understanding the difference helps you decide who needs which level of access.

## Role Comparison

| Capability | Teacher | School Leader |
|-----------|---------|---------------|
| Create and manage classes | ✓ | ✓ |
| Send messages to families | ✓ | ✓ |
| Post to Class Story | ✓ | ✓ |
| Award behavior points | ✓ | ✓ |
| Generate student reports | ✓ | ✓ |
| Approve teacher join requests | ✗ | ✓ |
| View school-wide analytics | ✗ | ✓ |
| Manage staff roles | ✗ | ✓ |
| Configure school settings | ✗ | ✓ |
| Send school-wide announcements | ✗ | ✓ |
| Access district dashboard | ✗ | ✓ (if district-linked) |

## When to Assign School Leader

Assign the School Leader role to:
*   **Principals** — Full school oversight
*   **Assistant Principals** — Help manage teacher onboarding
*   **IT Coordinators** — Handle technical settings and SSO configuration
*   **Office Staff** — Manage parent connections and school communications

## Changing a User's Role

Only an existing School Leader can change roles:
1.  Go to **School Settings → Staff**.
2.  Find the user and click the **role dropdown**.
3.  Select the new role.
4.  The user will be notified by email.

> **Important:** Demoting a School Leader to Teacher removes their access to school-wide settings and analytics. This action takes effect immediately.`,

    body_ar: `لدى سترينج دوران رئيسيان للموظفين: **المعلم** و**قائد المدرسة** (المسؤول).

## مقارنة الأدوار

| القدرة | المعلم | قائد المدرسة |
|--------|--------|--------------|
| إنشاء وإدارة الفصول | ✓ | ✓ |
| إرسال رسائل للعائلات | ✓ | ✓ |
| النشر في قصة الفصل | ✓ | ✓ |
| منح نقاط السلوك | ✓ | ✓ |
| الموافقة على طلبات المعلمين | ✗ | ✓ |
| عرض تحليلات المدرسة | ✗ | ✓ |
| إدارة أدوار الموظفين | ✗ | ✓ |
| تكوين إعدادات المدرسة | ✗ | ✓ |

## متى تعيّن قائد مدرسة

*   **المديرون** — إشراف كامل على المدرسة
*   **نواب المديرين** — المساعدة في إعداد المعلمين
*   **منسقو تكنولوجيا المعلومات** — الإعدادات التقنية

## تغيير دور المستخدم

1.  انتقل إلى **إعدادات المدرسة → الموظفون**.
2.  ابحث عن المستخدم وانقر **القائمة المنسدلة للدور**.
3.  اختر الدور الجديد.`
  },

  'mentor-permissions': {
    summary: 'How the Mentor role works on String, what mentors can see, and how to assign mentorship for student support.',
    summary_ar: 'كيف يعمل دور المرشد على سترينج وما يمكن للمرشدين رؤيته وكيفية تعيين الإرشاد لدعم الطلاب.',
    body: `The Mentor role on String is designed for counselors, tutors, reading specialists, and other support staff who need access to specific students without managing a full class.

## What Mentors Can Do

*   View assigned students' behavior points and reports
*   See Class Story posts for classes their students belong to
*   Receive notifications about assigned students' milestones
*   Communicate with families of assigned students

## What Mentors Cannot Do

*   Create or manage classes
*   Post to Class Story
*   Award or deduct behavior points
*   Access school-wide analytics
*   Approve teacher or parent requests

## Assigning a Mentor

A School Leader or the student's teacher can assign a mentor:

1.  Go to the **student's profile**.
2.  Click **Assign Mentor**.
3.  Search for the mentor by name or email.
4.  Click **Assign**.
5.  The mentor will receive a notification with access to the student's data.

## Removing a Mentor Assignment

1.  Go to the student's profile.
2.  Under **Assigned Mentors**, click the **X** next to the mentor's name.
3.  Confirm the removal.

## Best Practices

*   Assign mentors at the start of each school year and review mid-year.
*   Use mentors for IEP tracking, behavioral intervention monitoring, and academic support.
*   Mentors can be assigned to students across multiple classes.`,

    body_ar: `دور المرشد على سترينج مصمم للمستشارين والمعلمين الخصوصيين وموظفي الدعم الذين يحتاجون للوصول إلى طلاب محددين.

## ما يمكن للمرشدين فعله

*   عرض نقاط السلوك والتقارير للطلاب المعيّنين
*   رؤية منشورات قصة الفصل
*   تلقي إشعارات حول إنجازات الطلاب
*   التواصل مع عائلات الطلاب المعيّنين

## ما لا يمكن للمرشدين فعله

*   إنشاء أو إدارة الفصول
*   النشر في قصة الفصل
*   منح أو خصم نقاط السلوك

## تعيين مرشد

1.  انتقل إلى **ملف الطالب**.
2.  انقر **تعيين مرشد**.
3.  ابحث عن المرشد بالاسم أو البريد الإلكتروني.
4.  انقر **تعيين**.

## إلغاء تعيين مرشد

1.  انتقل إلى ملف الطالب.
2.  ضمن **المرشدون المعيّنون**، انقر **X** بجانب اسم المرشد.`
  },

  'student-leader-roles': {
    summary: 'How to set up student helper roles in String to encourage responsibility and classroom participation.',
    summary_ar: 'كيفية إعداد أدوار مساعدي الطلاب في سترينج لتشجيع المسؤولية والمشاركة في الفصل.',
    body: `Student Leader roles let teachers designate students with special responsibilities in String. These roles encourage leadership, responsibility, and classroom community.

## Available Student Leader Roles

| Role | Description |
|------|-------------|
| **Class Helper** | Can assist with taking attendance and distributing materials |
| **Story Reporter** | Can suggest Class Story posts (teacher approval required) |
| **Points Captain** | Can nominate peers for positive behavior points (teacher approval required) |
| **Welcome Buddy** | Paired with new students to help them get started on String |

## How to Assign a Student Leader Role

1.  Go to your **class roster**.
2.  Click on the **student's name**.
3.  Under **Roles**, click **Assign Role**.
4.  Select one or more roles from the dropdown.
5.  Click **Save**.
6.  The student will see a badge on their profile indicating their role.

## Rotating Roles

Teachers can set roles to rotate automatically:
1.  Go to **Class Settings → Student Roles**.
2.  Enable **Auto-Rotate**.
3.  Set the rotation interval (weekly, bi-weekly, or monthly).
4.  String will automatically assign roles to the next student in alphabetical order.

## Notes

*   Student Leader roles do not give students access to sensitive data (grades, behavior points of others, parent contact info).
*   All student actions still require teacher approval before being published.
*   Roles can be removed at any time from the student's profile.`,

    body_ar: `أدوار قادة الطلاب تتيح للمعلمين تعيين مسؤوليات خاصة للطلاب في سترينج.

## أدوار قادة الطلاب المتاحة

| الدور | الوصف |
|-------|-------|
| **مساعد الفصل** | يساعد في الحضور وتوزيع المواد |
| **مراسل القصة** | يقترح منشورات لقصة الفصل (بموافقة المعلم) |
| **كابتن النقاط** | يرشح زملاءه لنقاط السلوك الإيجابي |
| **صديق الترحيب** | يُقرن مع الطلاب الجدد للمساعدة |

## كيفية تعيين دور

1.  انتقل إلى **قائمة الفصل**.
2.  انقر على **اسم الطالب**.
3.  ضمن **الأدوار**، انقر **تعيين دور**.
4.  اختر دورًا أو أكثر.
5.  انقر **حفظ**.

## تدوير الأدوار

1.  انتقل إلى **إعدادات الفصل → أدوار الطلاب**.
2.  فعّل **التدوير التلقائي**.
3.  اضبط فترة التدوير (أسبوعي أو نصف شهري أو شهري).

## ملاحظات

*   لا تمنح أدوار القادة الطلاب وصولاً إلى بيانات حساسة.
*   جميع إجراءات الطلاب تتطلب موافقة المعلم.`
  },

  'parent-access-rights': {
    summary: 'What parents and guardians can see and do on String, and how their access relates to their child\'s class.',
    summary_ar: 'ما يمكن لأولياء الأمور رؤيته وفعله على سترينج وكيف يرتبط وصولهم بفصل طفلهم.',
    body: `Parents and guardians on String have a focused set of features designed to keep them connected with their child's classroom without overwhelming them with unnecessary tools.

## What Parents Can See

*   **Messages** from their child's teacher
*   **Class Story** posts (photos, videos, updates)
*   **Events** with RSVP options
*   **Behavior Points** summary for their child
*   **Weekly/Monthly Reports** on their child's progress
*   **Portfolio** entries shared by the teacher

## What Parents Can Do

*   Reply to teacher messages
*   Like and comment on Class Story posts
*   RSVP to events
*   Download portfolio items
*   Update their own profile and notification settings
*   Translate messages to their preferred language

## What Parents Cannot See

*   Other children's behavior points or reports
*   Other families' contact information
*   Teacher-to-teacher messages
*   School admin settings or analytics
*   Student grades (unless shared via a report by the teacher)

## Multiple Children

Parents with multiple children in different classes see a unified dashboard:
1.  Each child's class appears as a separate tab.
2.  Messages from different teachers are organized by class.
3.  Points and reports are shown per child.

## Co-Parents and Guardians

Multiple adults can be connected to the same child:
*   Both parents can have separate accounts linked to the same student.
*   Each parent receives their own messages and notifications.
*   Teachers see both parents in the family contacts list.

To add a co-parent, the teacher adds the second parent's email to the student's family profile.

## Privacy

*   Parents can only access data related to their own children.
*   String does not share parent contact information between families.
*   Parents can adjust notification preferences at any time.`,

    body_ar: `لأولياء الأمور على سترينج مجموعة مركزة من الميزات للبقاء على تواصل مع فصل طفلهم.

## ما يمكن لأولياء الأمور رؤيته

*   **الرسائل** من معلم طفلهم
*   **قصة الفصل** (صور وفيديو وتحديثات)
*   **الفعاليات** مع خيارات الحضور
*   **ملخص نقاط السلوك** لطفلهم
*   **التقارير الأسبوعية/الشهرية**
*   **إدخالات الملف** التي شاركها المعلم

## ما يمكن لأولياء الأمور فعله

*   الرد على رسائل المعلم
*   التفاعل مع منشورات قصة الفصل
*   تأكيد حضور الفعاليات
*   تنزيل عناصر الملف
*   ترجمة الرسائل إلى لغتهم المفضلة

## ما لا يمكن لأولياء الأمور رؤيته

*   نقاط سلوك الأطفال الآخرين
*   معلومات اتصال العائلات الأخرى
*   الرسائل بين المعلمين

## أطفال متعددون

يرى أولياء الأمور الذين لديهم أطفال متعددين لوحة قيادة موحدة مع علامة تبويب لكل طفل.

## الآباء المشتركون

يمكن ربط عدة بالغين بنفس الطفل. كل ولي أمر يتلقى رسائله وإشعاراته الخاصة.`
  },

  'managing-staff-directory': {
    summary: 'How School Leaders can view, edit, and manage the staff directory including roles, contact info, and status.',
    summary_ar: 'كيف يمكن لقادة المدارس عرض وتعديل وإدارة دليل الموظفين بما في ذلك الأدوار ومعلومات الاتصال والحالة.',
    body: `The Staff Directory gives School Leaders a centralized view of all teachers, mentors, and staff members at their school on String.

## Accessing the Staff Directory

1.  Log in as a **School Leader**.
2.  Go to **School Settings** → **Staff**.
3.  You'll see a list of all staff members with their name, email, role, and status.

## Directory Features

### Search and Filter
*   **Search** by name or email using the search bar.
*   **Filter** by role (Teacher, School Leader, Mentor) or status (Active, Pending, Deactivated).

### View Staff Details
Click any staff member's name to see:
*   Their profile information
*   Classes they're teaching
*   Number of connected families
*   Last login date
*   Account creation date

## Managing Staff

### Invite New Staff
1.  Click **Invite Staff** at the top of the directory.
2.  Enter their **email address** and select a **role**.
3.  Click **Send Invitation**.
4.  They'll receive an email with a link to join your school on String.

### Change a Staff Member's Role
1.  Click the staff member's name.
2.  Click **Edit Role**.
3.  Select the new role and click **Save**.

### Remove a Staff Member
1.  Click the staff member's name.
2.  Click **Remove from School**.
3.  Confirm the action.

> **Note:** Removing a staff member does not delete their String account. They simply lose access to your school's classes and data. Their personal account remains active.

## Bulk Operations

For schools with many staff members:
1.  Click **Bulk Actions** at the top of the directory.
2.  Select staff members using the checkboxes.
3.  Choose an action: **Send Message**, **Change Role**, or **Remove**.

## Export Directory

Click **Export CSV** to download a spreadsheet of your staff directory for record-keeping or district reporting.`,

    body_ar: `يمنح دليل الموظفين قادة المدارس عرضًا مركزيًا لجميع المعلمين والمرشدين والموظفين.

## الوصول إلى دليل الموظفين

1.  سجّل الدخول كـ **قائد مدرسة**.
2.  انتقل إلى **إعدادات المدرسة** → **الموظفون**.

## ميزات الدليل

### البحث والتصفية
*   **ابحث** بالاسم أو البريد الإلكتروني.
*   **صفّي** حسب الدور أو الحالة.

### عرض تفاصيل الموظف
انقر على اسم أي موظف لرؤية ملفه الشخصي وفصوله والعائلات المتصلة.

## إدارة الموظفين

### دعوة موظف جديد
1.  انقر **دعوة موظف**.
2.  أدخل البريد الإلكتروني واختر الدور.
3.  انقر **إرسال الدعوة**.

### تغيير دور موظف
1.  انقر على اسم الموظف → **تعديل الدور**.
2.  اختر الدور الجديد وانقر **حفظ**.

### إزالة موظف
1.  انقر على اسم الموظف → **إزالة من المدرسة**.
2.  أكد الإجراء.

> **ملاحظة:** إزالة موظف لا تحذف حسابه في سترينج.

## العمليات الجماعية

انقر **إجراءات جماعية** واختر الموظفين للقيام بعمليات متعددة.

## تصدير الدليل

انقر **تصدير CSV** لتنزيل جدول بيانات بدليل الموظفين.`
  },

  // ── g3: Joining Your School ──
  'finding-your-school-by-zip-code': {
    summary: 'How to search for and find your school on String using a zip code, city name, or school name.',
    summary_ar: 'كيفية البحث عن مدرستك والعثور عليها على سترينج باستخدام الرمز البريدي أو اسم المدينة أو اسم المدرسة.',
    body: `During sign-up, String asks you to find your school so you can be connected with the right teachers, classes, and families. Here's how to search effectively.

## Search Methods

### By School Name
1.  Start typing your school's name in the search field.
2.  Results appear as you type (minimum 3 characters).
3.  Select your school from the dropdown.

### By Zip Code
1.  Enter your school's **5-digit zip code**.
2.  All schools in that area will appear.
3.  Scroll through the results and select your school.

### By City and State
1.  Type your **city name** followed by **state abbreviation** (e.g., "Austin TX").
2.  Schools in that area will be listed.

## Tips for Finding Your School

*   Try the **official full name** first (e.g., "Martin Luther King Jr. Elementary School").
*   If not found, try **abbreviations** (e.g., "MLK Elementary" or "MLK Jr. ES").
*   If your school has a common name, add the **city** to narrow results.
*   Check for **alternate spellings** — some schools are listed under their district name.

## My School Isn't Listed

If your school doesn't appear in search results:

1.  Click **My school isn't listed** at the bottom of the search results.
2.  Enter your school's full name, address, city, state, and zip code.
3.  Click **Submit**.
4.  The String team will verify and add your school within **1–2 business days**.
5.  You'll be notified by email once your school is live.

## After Selecting Your School

Once you select your school, your experience depends on your role:
*   **Teachers** — Your request is sent to a School Leader for approval.
*   **Parents** — You'll be prompted to enter a class code or search for your child's teacher.
*   **School Leaders** — If the school is new to String, you become the founding admin.`,

    body_ar: `أثناء التسجيل، يطلب منك سترينج العثور على مدرستك للاتصال بالمعلمين والفصول الصحيحة.

## طرق البحث

### بالاسم
1.  ابدأ بكتابة اسم مدرستك (3 أحرف على الأقل).
2.  اختر مدرستك من النتائج.

### بالرمز البريدي
1.  أدخل **الرمز البريدي** المكون من 5 أرقام.
2.  ستظهر جميع المدارس في المنطقة.

### بالمدينة والولاية
1.  اكتب **اسم المدينة** متبوعًا بـ **اختصار الولاية**.

## نصائح للعثور على مدرستك

*   جرّب **الاسم الرسمي الكامل** أولاً.
*   جرّب **الاختصارات** إذا لم تجدها.
*   أضف **المدينة** لتضييق النتائج.

## مدرستي غير مدرجة

1.  انقر **مدرستي غير مدرجة**.
2.  أدخل الاسم الكامل والعنوان والمدينة والولاية والرمز البريدي.
3.  انقر **إرسال**.
4.  سيتحقق فريق سترينج ويضيف مدرستك خلال **1-2 يوم عمل**.`
  },

  'requesting-to-join-a-locked-school': {
    summary: 'What to do when a school on String is locked and requires admin approval before you can join.',
    summary_ar: 'ما يجب فعله عندما تكون المدرسة على سترينج مقفلة وتتطلب موافقة المسؤول قبل الانضمام.',
    body: `Some schools on String are "locked" — meaning new teachers must be approved by a School Leader before they can access the school's classes and data. This is a security measure to prevent unauthorized access.

## How to Know If a School Is Locked

When you search for a school during sign-up and select it:
*   **Open school** — You're instantly connected. No approval needed.
*   **Locked school** — You'll see a message: *"This school requires admin approval. Your request has been sent."*

## Submitting a Join Request

1.  Select your school from the search results.
2.  If locked, String will automatically send a **join request** to the School Leader(s).
3.  You'll see a confirmation: *"Your request has been sent. You'll be notified once approved."*
4.  You can still log in to String during this time, but you won't see classes or school data until approved.

## What Happens Next

*   The School Leader receives an **email and in-app notification** about your request.
*   They can view your name, email, and the date of your request.
*   They choose to **Approve** or **Deny** your request.
*   You'll receive an email notification with the decision.

## Typical Wait Time

*   Most requests are approved within **1–2 business days**.
*   If it's been more than 3 days, contact your School Leader directly (via email or in person).

## My Request Was Denied

If your request was denied:
1.  Contact the School Leader to clarify your identity and role.
2.  You may need to provide verification (e.g., school ID, employment confirmation).
3.  The School Leader can re-invite you from the Staff directory.

## For School Leaders: Managing Requests

1.  Go to **School Settings → Pending Requests**.
2.  Review each request.
3.  Click **Approve** or **Deny**.
4.  Optionally add a note explaining the decision.`,

    body_ar: `بعض المدارس على سترينج "مقفلة" — مما يعني أن المعلمين الجدد يحتاجون لموافقة قائد المدرسة.

## كيف تعرف أن المدرسة مقفلة

عند اختيار المدرسة ستظهر رسالة: *"تتطلب هذه المدرسة موافقة المسؤول."*

## إرسال طلب الانضمام

1.  اختر مدرستك من نتائج البحث.
2.  سيرسل سترينج تلقائيًا **طلب انضمام** لقادة المدرسة.
3.  ستظهر رسالة تأكيد.

## ما يحدث بعد ذلك

*   يتلقى قائد المدرسة إشعارًا.
*   يوافق أو يرفض طلبك.
*   ستتلقى إشعارًا بالقرار.

## وقت الانتظار المعتاد

*   معظم الطلبات تُوافق خلال **1-2 يوم عمل**.
*   إذا مر أكثر من 3 أيام، تواصل مع قائد المدرسة مباشرة.

## طلبي تم رفضه

1.  تواصل مع قائد المدرسة لتوضيح هويتك.
2.  قد تحتاج لتقديم تحقق (بطاقة مدرسية).
3.  يمكن لقائد المدرسة إعادة دعوتك.`
  },

  'what-if-my-school-isn-t-listed': {
    summary: 'How to add your school to String when it doesn\'t appear in the search directory.',
    summary_ar: 'كيفية إضافة مدرستك إلى سترينج عندما لا تظهر في دليل البحث.',
    body: `If your school doesn't show up when you search during sign-up, you can request to have it added. String's team manually verifies new schools to ensure quality and prevent misuse.

## Steps to Add Your School

1.  On the school search screen, click **"My school isn't listed"** or **"Add My School"**.
2.  Fill in the required information:
    *   **School name** (official full name)
    *   **Street address**
    *   **City, state, and zip code**
    *   **School type** (public, private, charter, homeschool co-op)
    *   **Grade levels served** (e.g., K–5, 6–8, 9–12)
    *   **Your role** (teacher, school leader, parent)
3.  Click **Submit Request**.

## Verification Process

*   The String team reviews your submission within **1–2 business days**.
*   They verify the school exists using public databases (NCES, state education directories).
*   If verified, the school is added and you'll receive an email confirmation.
*   If additional information is needed, a String team member will contact you.

## Common Reasons Schools Aren't Listed

*   **New school** — recently opened and not yet in public databases.
*   **Different name** — the school may be listed under a different official name.
*   **International school** — String's database is growing; some international schools may need to be manually added.
*   **Home school co-op** — these are supported but must be verified differently.

## After Your School Is Added

*   You'll be the **first user** at your school on String.
*   If you're a teacher or school leader, you can start inviting colleagues.
*   Parents should wait for a teacher to set up classes before joining.`,

    body_ar: `إذا لم تظهر مدرستك في البحث أثناء التسجيل، يمكنك طلب إضافتها.

## خطوات إضافة مدرستك

1.  انقر **"مدرستي غير مدرجة"**.
2.  أكمل المعلومات المطلوبة:
    *   **اسم المدرسة** (الاسم الرسمي الكامل)
    *   **العنوان**
    *   **المدينة والولاية والرمز البريدي**
    *   **نوع المدرسة** (عامة، خاصة، ميثاق)
    *   **المراحل الدراسية**
3.  انقر **إرسال الطلب**.

## عملية التحقق

*   يراجع فريق سترينج طلبك خلال **1-2 يوم عمل**.
*   يتحققون من وجود المدرسة عبر قواعد البيانات العامة.
*   ستتلقى تأكيدًا عند الإضافة.

## أسباب شائعة لعدم ظهور المدارس

*   **مدرسة جديدة** — لم تُضف بعد لقواعد البيانات.
*   **اسم مختلف** — قد تكون مدرجة باسم رسمي مختلف.
*   **مدرسة دولية** — قد تحتاج لإضافة يدوية.`
  },

  'leaving-a-school-network': {
    summary: 'How to disconnect from a school on String and what happens to your data and connections when you leave.',
    summary_ar: 'كيفية قطع الاتصال بمدرسة على سترينج وماذا يحدث لبياناتك واتصالاتك عند المغادرة.',
    body: `If you're transferring schools, retiring, or no longer affiliated with a school, you can leave the school network on String. This guide explains the process and what to expect.

## How to Leave a School

1.  Log in to String.
2.  Go to **Account Settings** → **My Schools**.
3.  Find the school you want to leave.
4.  Click **Leave School**.
5.  Confirm by clicking **Yes, Leave**.

## What Happens When You Leave

### For Teachers
*   Your classes become **unassigned** — a School Leader can reassign them to another teacher.
*   Families connected to your classes will see a message that the class is transitioning.
*   Your Class Story posts, messages, and points history are **preserved** in the system for the School Leader to manage.
*   Your personal account remains active — you can join another school at any time.

### For Parents
*   You'll be disconnected from all classes at that school.
*   You won't receive further messages or updates from that school's teachers.
*   If your child transfers to a new school using String, you can reconnect there.

### For School Leaders
*   You cannot leave if you are the **only** School Leader. You must first promote another staff member to School Leader.
*   Once another School Leader exists, you can leave like any other user.

## Before You Leave

> **Recommended:** If you're a teacher, consider **transferring your classes** to a co-teacher before leaving. Go to each class → **Class Settings → Transfer Ownership**.

## Re-joining a School

If you leave by mistake, you can request to re-join:
1.  Search for the school during login.
2.  Submit a join request.
3.  The School Leader will need to approve you again.`,

    body_ar: `إذا كنت تنتقل لمدرسة أخرى أو لم تعد مرتبطًا بمدرسة، يمكنك مغادرة شبكة المدرسة على سترينج.

## كيفية مغادرة المدرسة

1.  انتقل إلى **إعدادات الحساب** → **مدارسي**.
2.  ابحث عن المدرسة التي تريد مغادرتها.
3.  انقر **مغادرة المدرسة**.
4.  أكد بالنقر على **نعم، مغادرة**.

## ما يحدث عند المغادرة

### للمعلمين
*   تصبح فصولك **غير معيّنة**.
*   منشورات قصة الفصل والرسائل **محفوظة** في النظام.
*   حسابك الشخصي يبقى نشطًا.

### لأولياء الأمور
*   ستُقطع اتصالك بجميع الفصول في تلك المدرسة.
*   لن تتلقى رسائل أو تحديثات أخرى.

### لقادة المدارس
*   لا يمكنك المغادرة إذا كنت قائد المدرسة **الوحيد**. رقِّ شخصًا آخر أولاً.

## قبل المغادرة

> **موصى به:** انقل فصولك لمعلم مشارك. انتقل إلى **إعدادات الفصل → نقل الملكية**.

## إعادة الانضمام

1.  ابحث عن المدرسة مرة أخرى.
2.  أرسل طلب انضمام.
3.  يحتاج قائد المدرسة للموافقة عليك مرة أخرى.`
  },

  'multiple-school-affiliations': {
    summary: 'How to be connected to more than one school on String and manage multiple school accounts.',
    summary_ar: 'كيفية الاتصال بأكثر من مدرسة واحدة على سترينج وإدارة حسابات مدارس متعددة.',
    body: `String allows you to be affiliated with multiple schools using a single account. This is common for traveling teachers, district staff, and parents with children in different schools.

## Who Needs Multiple Schools?

*   **Traveling teachers** who teach at 2+ schools
*   **District administrators** overseeing multiple buildings
*   **Parents** with children at different schools
*   **Mentors** or **counselors** assigned across schools

## How to Add a Second School

1.  Log in to String.
2.  Go to **Account Settings** → **My Schools**.
3.  Click **Add Another School**.
4.  Search for the school and select it.
5.  If the school is locked, your request will be sent for approval.
6.  Once added, the school appears in your school switcher.

## Switching Between Schools

*   On **Web**: Click the **school name** in the top navigation bar to see a dropdown of all your schools.
*   On **Mobile**: Tap the **school icon** in the top-left corner and select a different school.

## How It Works

*   Each school has its own set of **classes, messages, and data**.
*   Your **profile** is shared across schools (same name, email, photo).
*   **Notifications** come from all schools — you can customize notification preferences per school.
*   You can have **different roles** at different schools (e.g., Teacher at one, School Leader at another).

## Limits

*   You can be affiliated with up to **10 schools** on a single account.
*   If you need more, contact **support@string.education** for a district account.

## Leaving a School

You can leave any school without affecting your other school connections. Go to **My Schools** and click **Leave** next to the school you want to disconnect from.`,

    body_ar: `يتيح لك سترينج الاتصال بعدة مدارس باستخدام حساب واحد.

## من يحتاج لمدارس متعددة؟

*   **المعلمون المتنقلون** الذين يدرّسون في مدرستين أو أكثر
*   **مسؤولو المنطقة** المشرفون على مبانٍ متعددة
*   **أولياء الأمور** الذين لديهم أطفال في مدارس مختلفة

## كيفية إضافة مدرسة ثانية

1.  انتقل إلى **إعدادات الحساب** → **مدارسي**.
2.  انقر **إضافة مدرسة أخرى**.
3.  ابحث عن المدرسة واخترها.

## التبديل بين المدارس

*   على **الويب**: انقر اسم المدرسة في شريط التنقل العلوي.
*   على **الهاتف**: اضغط أيقونة المدرسة واختر مدرسة مختلفة.

## كيف يعمل

*   كل مدرسة لها **فصول ورسائل وبيانات** خاصة بها.
*   **ملفك الشخصي** مشترك عبر المدارس.
*   يمكنك تخصيص **الإشعارات** لكل مدرسة.
*   يمكن أن يكون لديك **أدوار مختلفة** في مدارس مختلفة.

## الحدود

*   يمكنك الاتصال بحد أقصى **10 مدارس** بحساب واحد.`
  },

  // ── g4: School Approval ──
  'verifying-teacher-requests': {
    summary: 'How School Leaders review and approve teacher join requests on String.',
    summary_ar: 'كيف يراجع قادة المدارس طلبات انضمام المعلمين ويوافقون عليها على سترينج.',
    body: `When a teacher requests to join your school on String, you'll need to verify and approve them before they can access classes and school data.

## Receiving a Request

When a teacher submits a join request:
*   You'll receive an **email notification** and an **in-app alert**.
*   The request appears under **School Settings → Pending Requests**.

## Reviewing a Request

Each request shows:
*   **Teacher's name** and **email address**
*   **Date of request**
*   **Verification badge** (if they have a verified school email)

## Approving or Denying

### To Approve:
1.  Go to **School Settings → Pending Requests**.
2.  Click **Approve** next to the teacher's name.
3.  The teacher receives a notification and can immediately access the school.

### To Deny:
1.  Click **Deny** next to the teacher's name.
2.  Optionally add a **reason** (e.g., "Not a current staff member").
3.  The teacher is notified their request was denied.

## Verification Tips

*   **Check the email domain** — if it matches your school domain (e.g., @yourschool.edu), it's likely legitimate.
*   **Cross-reference** with your school's staff directory.
*   **Contact the teacher** directly if you're unsure.
*   **Use the Badge Verification** system for additional security.

## Bulk Approval

If multiple teachers are joining at once (e.g., start of school year):
1.  Go to **Pending Requests**.
2.  Check the **Select All** box.
3.  Click **Approve Selected**.

## Auto-Approve Settings

For verified school email domains, you can enable automatic approval:
1.  Go to **School Settings → Security**.
2.  Under **Auto-Approve**, add your school's email domain (e.g., @yourschool.edu).
3.  Any teacher signing up with a matching email will be automatically approved.`,

    body_ar: `عندما يطلب معلم الانضمام إلى مدرستك على سترينج، ستحتاج للتحقق والموافقة عليه.

## استلام الطلب

ستتلقى **إشعار بريد إلكتروني** و**تنبيه داخل التطبيق**.

## مراجعة الطلب

كل طلب يعرض: اسم المعلم والبريد الإلكتروني وتاريخ الطلب.

## الموافقة أو الرفض

### للموافقة:
1.  انتقل إلى **إعدادات المدرسة → الطلبات المعلقة**.
2.  انقر **موافقة**.

### للرفض:
1.  انقر **رفض** وأضف سببًا اختياريًا.

## نصائح للتحقق

*   **تحقق من نطاق البريد** — إذا تطابق مع نطاق مدرستك فهو شرعي على الأرجح.
*   **قارن** مع دليل موظفي مدرستك.

## الموافقة التلقائية

1.  انتقل إلى **إعدادات المدرسة → الأمان**.
2.  أضف نطاق بريد مدرستك ضمن **الموافقة التلقائية**.
3.  سيتم الموافقة تلقائيًا على أي معلم يسجل بهذا النطاق.`
  },

  'school-leader-approval-workflow': {
    summary: 'The complete workflow for how School Leaders are approved and added to a school on String.',
    summary_ar: 'سير العمل الكامل لكيفية الموافقة على قادة المدارس وإضافتهم إلى مدرسة على سترينج.',
    body: `Adding a new School Leader involves a verification process to ensure only authorized administrators have access to school-wide settings and data.

## How a School Leader Is Added

### Path 1: First School Leader (Founding Admin)
When a school is new to String and has no existing admin:
1.  The user signs up and selects their school.
2.  Since no School Leader exists, they become the **founding admin** after String's team verifies their identity.
3.  Verification typically takes **1–2 business days**.

### Path 2: Promoted by an Existing School Leader
1.  An existing School Leader goes to **School Settings → Staff**.
2.  Finds the teacher they want to promote.
3.  Clicks **Promote to School Leader**.
4.  The teacher immediately gains School Leader access.
5.  No external verification is needed (the existing admin vouches for them).

### Path 3: New User Requesting School Leader Access
1.  A new user signs up and selects **I'm a School Leader**.
2.  They find their school (which already has an admin).
3.  Their request goes to the **existing School Leader** for approval.
4.  The existing admin can Approve or Deny from **Pending Requests**.

## Approval Notifications

| Action | Who Gets Notified |
|--------|------------------|
| Request submitted | All existing School Leaders (email + in-app) |
| Request approved | The requesting user (email) |
| Request denied | The requesting user (email with reason) |

## Security Considerations

*   **Limit School Leaders** — we recommend 2–3 per school for security.
*   **Review regularly** — check the Staff directory each semester to ensure all School Leaders are current.
*   **Revoke access** for staff who leave — demote them to Teacher before they depart, or remove them entirely.`,

    body_ar: `إضافة قائد مدرسة جديد تتضمن عملية تحقق لضمان أن المسؤولين المفوّضين فقط لديهم الوصول.

## كيف يُضاف قائد المدرسة

### المسار 1: أول قائد مدرسة (المؤسس)
عندما تكون المدرسة جديدة على سترينج:
1.  يسجّل المستخدم ويختار مدرسته.
2.  يصبح **المسؤول المؤسس** بعد تحقق فريق سترينج.

### المسار 2: ترقية من قائد مدرسة موجود
1.  ينتقل قائد المدرسة إلى **إعدادات المدرسة → الموظفون**.
2.  ينقر **ترقية إلى قائد مدرسة**.

### المسار 3: مستخدم جديد يطلب الوصول
1.  يسجّل المستخدم ويختار **أنا قائد مدرسة**.
2.  يُرسل طلبه لقائد المدرسة الحالي.

## اعتبارات الأمان

*   **حدد عدد قادة المدارس** — نوصي بـ 2-3 لكل مدرسة.
*   **راجع بانتظام** — تحقق من دليل الموظفين كل فصل دراسي.`
  },

  'denied-join-requests': {
    summary: 'What happens when a join request is denied, and how to resolve access issues.',
    summary_ar: 'ماذا يحدث عند رفض طلب الانضمام وكيفية حل مشاكل الوصول.',
    body: `If your request to join a school on String was denied, don't worry — there are several ways to resolve the issue.

## Why Requests Get Denied

*   **Identity not verified** — The School Leader couldn't confirm you're a current staff member.
*   **Incorrect school** — You may have selected the wrong school by mistake.
*   **School policy** — Some schools require in-person verification before approving online requests.
*   **Duplicate account** — You may already have an account under a different email.

## What to Do If Denied

### Step 1: Check the Denial Reason
When your request is denied, you'll receive an email that may include a reason from the School Leader. Read it carefully.

### Step 2: Contact the School Leader
Reach out to your School Leader (principal or admin) directly:
*   **In person** — This is the fastest way.
*   **Via school email** — Ask them to approve you or add you from the Staff directory.

### Step 3: Re-submit Your Request
After speaking with the School Leader:
1.  Log in to String.
2.  Go to **My Schools** → **Add School**.
3.  Search for your school and re-submit the request.
4.  The School Leader can approve it this time.

### Step 4: Ask for a Direct Invitation
The School Leader can bypass the request process entirely:
1.  They go to **School Settings → Staff → Invite Staff**.
2.  Enter your email address and select your role.
3.  You receive a direct invitation link — no approval needed.

## Preventing Denials

*   **Use your school email** when signing up — this makes verification easier.
*   **Complete your profile** — add your full name and a profile picture.
*   **Let your admin know** in advance that you're signing up for String.`,

    body_ar: `إذا رُفض طلبك للانضمام إلى مدرسة على سترينج، هناك عدة طرق لحل المشكلة.

## لماذا تُرفض الطلبات

*   **هوية غير مؤكدة** — لم يتمكن قائد المدرسة من التحقق منك.
*   **مدرسة خاطئة** — ربما اخترت المدرسة الخطأ.
*   **سياسة المدرسة** — بعض المدارس تتطلب تحققًا شخصيًا.

## ما يجب فعله

### الخطوة 1: تحقق من سبب الرفض
ستتلقى بريدًا إلكترونيًا قد يتضمن السبب.

### الخطوة 2: تواصل مع قائد المدرسة
تواصل مباشرة مع المدير أو المسؤول.

### الخطوة 3: أعد إرسال طلبك
1.  انتقل إلى **مدارسي** → **إضافة مدرسة**.
2.  ابحث عن مدرستك وأعد إرسال الطلب.

### الخطوة 4: اطلب دعوة مباشرة
يمكن لقائد المدرسة دعوتك مباشرة من **إعدادات المدرسة → الموظفون → دعوة**.`
  },

  'badge-verification': {
    summary: 'How String\'s badge verification system works to confirm teacher identity and school affiliation.',
    summary_ar: 'كيف يعمل نظام التحقق بالشارة في سترينج لتأكيد هوية المعلم وانتسابه المدرسي.',
    body: `String uses a badge verification system to help School Leaders confirm the identity of teachers requesting to join their school. Verified teachers get a badge on their profile, making the approval process faster.

## How Badge Verification Works

1.  During sign-up or from your profile, click **Get Verified**.
2.  Choose a verification method:
    *   **School email** — If your email matches the school's domain, you're verified instantly.
    *   **School ID upload** — Upload a photo of your school-issued ID badge.
    *   **Admin confirmation** — Request your School Leader to confirm your identity.
3.  Once verified, a **blue checkmark badge** appears on your profile.

## Benefits of Being Verified

*   **Faster approval** — School Leaders are more likely to approve verified teachers immediately.
*   **Trust signal** — Parents see your verification badge, building confidence.
*   **Auto-approval eligible** — Schools with auto-approve enabled will instantly approve verified teachers.

## For School Leaders: Using Verification

When reviewing teacher requests, look for:
*   **Blue badge** — Identity verified. Safe to approve.
*   **No badge** — Consider contacting the teacher to verify before approving.

## Re-verification

Verification badges expire after **12 months** and need to be renewed. You'll receive a reminder email 30 days before expiration.

To re-verify:
1.  Go to **Account Settings → Verification**.
2.  Click **Renew Verification**.
3.  Complete the same verification process.`,

    body_ar: `يستخدم سترينج نظام تحقق بالشارة لمساعدة قادة المدارس على تأكيد هوية المعلمين.

## كيف يعمل التحقق بالشارة

1.  انقر **الحصول على التحقق** من ملفك الشخصي.
2.  اختر طريقة:
    *   **البريد المدرسي** — تحقق فوري إذا تطابق النطاق.
    *   **رفع بطاقة الهوية المدرسية** — ارفع صورة لبطاقتك.
    *   **تأكيد المسؤول** — اطلب من قائد المدرسة تأكيد هويتك.
3.  ستظهر **شارة صح زرقاء** على ملفك.

## فوائد التحقق

*   **موافقة أسرع**.
*   **إشارة ثقة** لأولياء الأمور.
*   **مؤهل للموافقة التلقائية**.

## إعادة التحقق

تنتهي صلاحية شارات التحقق بعد **12 شهرًا**. ستتلقى تذكيرًا قبل 30 يومًا.`
  },

  'annual-re-verification': {
    summary: 'Why String requires annual re-verification for teachers and how to complete it quickly.',
    summary_ar: 'لماذا يتطلب سترينج إعادة التحقق السنوية للمعلمين وكيفية إكمالها بسرعة.',
    body: `String requires all verified teachers to re-verify their identity once per year. This ensures that only active, current staff members have access to school data and families.

## Why Re-verification?

*   **Staff changes** — Teachers transfer, retire, or leave schools. Re-verification ensures only current staff have access.
*   **Security** — Annual checks prevent unauthorized access from former employees.
*   **Compliance** — Schools that use String for FERPA-protected data need to demonstrate ongoing access control.

## When Re-verification Is Required

*   Your verification expires **12 months** after your last verification.
*   You'll receive reminders at **30 days**, **7 days**, and **1 day** before expiration.
*   If you don't re-verify within **14 days** after expiration, your verified badge is removed.

## How to Re-verify

1.  When prompted (via email or in-app banner), click **Re-verify Now**.
2.  Choose your verification method:
    *   **School email confirmation** — Click a verification link sent to your school email.
    *   **School ID upload** — Upload a current school ID.
    *   **Admin confirmation** — Your School Leader confirms your status.
3.  Verification is typically instant for email-based methods.

## What Happens If You Don't Re-verify

*   Your **verified badge** is removed from your profile.
*   If your school has **auto-approve** based on verification, you may lose access until re-verified.
*   Your classes and data are **not affected** — you can still use String normally.
*   School Leaders may be notified that your verification has expired.

## For School Leaders

You can see which staff members have expired verifications:
1.  Go to **School Settings → Staff**.
2.  Filter by **Verification Status → Expired**.
3.  Send reminders or manually confirm staff from this view.`,

    body_ar: `يتطلب سترينج من جميع المعلمين المحققين إعادة التحقق سنويًا لضمان وصول الموظفين الحاليين فقط.

## لماذا إعادة التحقق؟

*   **تغييرات الموظفين** — المعلمون ينتقلون أو يتقاعدون.
*   **الأمان** — منع الوصول غير المصرح به.
*   **الامتثال** — المدارس التي تستخدم سترينج لبيانات FERPA تحتاج لإثبات التحكم في الوصول.

## متى يُطلب إعادة التحقق

*   ينتهي التحقق بعد **12 شهرًا**.
*   ستتلقى تذكيرات قبل **30 يومًا** و**7 أيام** و**يوم واحد**.

## كيفية إعادة التحقق

1.  انقر **إعادة التحقق الآن**.
2.  اختر طريقة التحقق.
3.  التحقق فوري عادة للبريد الإلكتروني.

## ما يحدث إذا لم تعد التحقق

*   تُزال **شارة التحقق**.
*   فصولك وبياناتك **لا تتأثر**.
*   قد يُخطر قائد المدرسة بانتهاء التحقق.`
  },

  // ── g5: Connecting Families ──
  'printing-parent-invites': {
    summary: 'How to print parent invitation letters and flyers with class codes for offline family onboarding.',
    summary_ar: 'كيفية طباعة رسائل ونشرات دعوة أولياء الأمور مع رموز الفصل للتسجيل دون اتصال.',
    body: `Not all families have immediate access to email or smartphones. Printed invitations are a reliable way to reach every family in your class.

## Generating Printable Invitations

1.  Go to your **class page**.
2.  Click **Invite Families** → **Print Invitations**.
3.  Choose a template:
    *   **Letter** — A full-page letter explaining String with sign-up instructions.
    *   **Flyer** — A half-page flyer with a QR code and class code.
    *   **Card** — A small card-sized invite (4 per page) with just the essentials.
4.  Select **languages** — invitations are available in 30+ languages. Choose the languages your families speak.
5.  Click **Generate PDF**.
6.  Print and distribute to students to take home.

## What's Included on the Invite

*   Your **class name** and **teacher name**
*   A **class code** (e.g., ABC-1234) for manual entry
*   A **QR code** that parents can scan to join instantly
*   Brief instructions in the selected language
*   A link to download the String app

## Best Practices

*   Send invitations home in **the first week of school**.
*   Print in **multiple languages** if your class has multilingual families.
*   Follow up with a **digital reminder** via email or text for families who haven't connected after 1 week.
*   Hand invitations directly to parents at **back-to-school night** or **parent-teacher conferences**.

## Customizing Invitations

You can add a personal message to the invitation:
1.  Before generating the PDF, click **Add Personal Note**.
2.  Type a brief message (e.g., "I'm excited to connect with you this year!").
3.  The message appears on the printed invite.`,

    body_ar: `ليس لدى جميع العائلات وصول فوري للبريد الإلكتروني أو الهواتف الذكية. الدعوات المطبوعة طريقة موثوقة للوصول لكل عائلة.

## إنشاء دعوات قابلة للطباعة

1.  انتقل إلى **صفحة الفصل**.
2.  انقر **دعوة العائلات** → **طباعة الدعوات**.
3.  اختر قالبًا: رسالة أو نشرة أو بطاقة.
4.  اختر **اللغات** — متاح بأكثر من 30 لغة.
5.  انقر **إنشاء PDF**.

## ما تتضمنه الدعوة

*   **اسم الفصل** و**اسم المعلم**
*   **رمز الفصل** للإدخال اليدوي
*   **رمز QR** للانضمام الفوري
*   تعليمات موجزة باللغة المختارة

## أفضل الممارسات

*   أرسل الدعوات في **الأسبوع الأول من المدرسة**.
*   اطبع بـ **عدة لغات**.
*   تابع بتذكير رقمي بعد أسبوع.
*   سلّم الدعوات شخصيًا في **ليلة العودة للمدرسة**.`
  },

  'email-and-sms-invitations': {
    summary: 'How to send digital invitations to parents via email and SMS directly from String.',
    summary_ar: 'كيفية إرسال دعوات رقمية لأولياء الأمور عبر البريد الإلكتروني والرسائل النصية مباشرة من سترينج.',
    body: `String lets you send digital invitations to parents via email and SMS, making it easy to onboard families quickly.

## Sending Email Invitations

1.  Go to your **class page**.
2.  Click **Invite Families** → **Email Invitations**.
3.  Enter parent email addresses (one per line, or paste from a spreadsheet).
4.  Choose the **invitation language** (auto-detected or manual).
5.  Click **Send Invitations**.

### What Parents Receive
The email includes:
*   Your name and class name
*   A **sign-up link** that pre-fills the class code
*   Instructions in the selected language
*   App download links for iOS and Android

## Sending SMS Invitations

1.  Go to **Invite Families** → **SMS Invitations**.
2.  Enter phone numbers (include country code for international numbers).
3.  Click **Send**.

### What Parents Receive
A text message with:
*   A short link to join your class on String
*   Your class code
*   App download instructions

## Tracking Invitation Status

After sending invitations, you can track who has joined:
1.  Go to **Class Settings** → **Families**.
2.  You'll see a list with status indicators:
    *   **Connected** — Parent has signed up and joined.
    *   **Invited** — Invitation sent but not yet accepted.
    *   **Not invited** — No invitation sent yet.

## Re-sending Invitations

For families who haven't responded:
1.  Go to **Class Settings → Families**.
2.  Filter by **Invited** status.
3.  Click **Resend** next to individual families, or **Resend All** for bulk re-invitations.

## Best Practices

*   Send invitations **during the first week** of school.
*   Follow up with **unconnected families** after 1 week.
*   Use **SMS for families** who may not check email regularly.
*   Collect emails at **registration day** and import them in bulk.`,

    body_ar: `يتيح لك سترينج إرسال دعوات رقمية لأولياء الأمور عبر البريد الإلكتروني والرسائل النصية.

## إرسال دعوات البريد الإلكتروني

1.  انقر **دعوة العائلات** → **دعوات البريد الإلكتروني**.
2.  أدخل عناوين البريد (واحد في كل سطر).
3.  اختر **لغة الدعوة**.
4.  انقر **إرسال**.

## إرسال دعوات الرسائل النصية

1.  انقر **دعوة العائلات** → **دعوات SMS**.
2.  أدخل أرقام الهواتف.
3.  انقر **إرسال**.

## تتبع حالة الدعوة

1.  انتقل إلى **إعدادات الفصل** → **العائلات**.
2.  ستظهر حالة كل عائلة: متصلة أو مدعوة أو غير مدعوة.

## إعادة إرسال الدعوات

1.  صفّي حسب حالة **مدعوة**.
2.  انقر **إعادة إرسال** أو **إعادة إرسال الكل**.

## أفضل الممارسات

*   أرسل خلال **الأسبوع الأول** من المدرسة.
*   تابع مع **العائلات غير المتصلة** بعد أسبوع.
*   استخدم **SMS للعائلات** التي لا تتحقق من البريد بانتظام.`
  },

  'connecting-via-class-code': {
    summary: 'How parents can use a class code to join their child\'s class on String.',
    summary_ar: 'كيف يمكن لأولياء الأمور استخدام رمز الفصل للانضمام إلى فصل طفلهم على سترينج.',
    body: `A class code is a unique alphanumeric code (e.g., ABC-1234) that parents use to connect to their child's class on String. It's the simplest way for families to join.

## Where to Find the Class Code

### For Teachers:
1.  Go to your **class page**.
2.  The class code is displayed at the top of the page.
3.  You can also find it under **Class Settings → Class Code**.

### For Parents:
*   The class code is included on printed invitations, emails, and SMS invitations from your teacher.
*   Ask your teacher directly if you don't have it.

## How Parents Use the Class Code

### On the App
1.  Download and open the **String** app.
2.  Tap **Join a Class**.
3.  Enter the **class code** (e.g., ABC-1234).
4.  Tap **Join**.
5.  Select your **child's name** from the class roster (or add them).
6.  You're connected!

### On the Web
1.  Go to **app.string.education**.
2.  Log in or create an account.
3.  Click **Join a Class** from your dashboard.
4.  Enter the class code.
5.  Select your child and click **Join**.

## Class Code vs. QR Code

| Feature | Class Code | QR Code |
|---------|-----------|---------|
| Entry method | Type manually | Scan with camera |
| Works offline | Can write down for later | Must scan in real-time |
| Best for | Printed letters, phone calls | In-person events, posters |

## Troubleshooting

### "Invalid class code"
*   Double-check for typos (codes are not case-sensitive).
*   Ask your teacher if the code has expired or been regenerated.

### "Class not found"
*   Make sure you're entering the code on the **Join a Class** screen, not the search bar.

### Already joined but can't see the class
*   Pull down to refresh your dashboard.
*   Check if you're logged into the correct account.`,

    body_ar: `رمز الفصل هو رمز أبجدي رقمي فريد يستخدمه أولياء الأمور للانضمام إلى فصل طفلهم.

## أين تجد رمز الفصل

### للمعلمين:
يُعرض في أعلى صفحة الفصل أو ضمن **إعدادات الفصل → رمز الفصل**.

### لأولياء الأمور:
يُضمن في الدعوات المطبوعة أو الرقمية. اسأل المعلم إذا لم يكن لديك.

## كيفية استخدام رمز الفصل

### على التطبيق
1.  اضغط **انضمام إلى فصل**.
2.  أدخل **رمز الفصل**.
3.  اضغط **انضمام**.
4.  اختر **اسم طفلك**.

### على الويب
1.  سجّل الدخول إلى **app.string.education**.
2.  انقر **انضمام إلى فصل**.
3.  أدخل الرمز واختر طفلك.

## استكشاف الأخطاء

### "رمز فصل غير صالح"
*   تحقق من الأخطاء المطبعية.
*   اسأل المعلم إذا تم تغيير الرمز.

### "الفصل غير موجود"
*   تأكد من إدخال الرمز في شاشة **انضمام إلى فصل**.`
  },

  'handling-unconnected-families': {
    summary: 'Strategies for teachers to identify and reach families who haven\'t yet joined their class on String.',
    summary_ar: 'استراتيجيات للمعلمين لتحديد والوصول إلى العائلات التي لم تنضم بعد إلى فصلهم على سترينج.',
    body: `Getting 100% family connection takes effort. Here's how to identify unconnected families and strategies to reach them.

## Identifying Unconnected Families

1.  Go to **Class Settings → Families**.
2.  Filter by status: **Not Connected**.
3.  You'll see a list of students whose families haven't joined yet.

## Strategies to Increase Connection

### Week 1: Initial Push
*   Send **email and SMS invitations** to all families.
*   Send home **printed invitations** with students.
*   Mention String during **back-to-school night**.

### Week 2: Follow-Up
*   **Resend invitations** to unconnected families.
*   Make a **personal phone call** to families who haven't connected.
*   Post a reminder on your **school's social media** or newsletter.

### Week 3+: Targeted Outreach
*   Ask **connected parents** to help spread the word.
*   Set up a **String help table** at school pickup/dropoff.
*   Offer **in-person sign-up help** during parent-teacher conferences.

## Common Barriers and Solutions

| Barrier | Solution |
|---------|----------|
| No smartphone | Share the **web version** (app.string.education) |
| Language barrier | Send invitations in the **family's language** |
| No email | Use **SMS invitations** or **printed flyers** |
| Privacy concerns | Share String's **privacy policy** and explain COPPA/FERPA compliance |
| Tech anxiety | Offer **one-on-one help** during school events |

## Tracking Progress

String shows your **family connection rate** on your class dashboard:
*   **Green** — 80%+ connected (great!)
*   **Yellow** — 50–79% connected (keep pushing)
*   **Red** — Below 50% (needs attention)

## Setting a Goal

Many schools set a goal of **90% family connection within the first month**. Schools that achieve this see significantly higher engagement throughout the year.`,

    body_ar: `الوصول إلى 100% من اتصال العائلات يتطلب جهدًا. إليك كيفية تحديد العائلات غير المتصلة والوصول إليهم.

## تحديد العائلات غير المتصلة

1.  انتقل إلى **إعدادات الفصل → العائلات**.
2.  صفّي حسب **غير متصلة**.

## استراتيجيات لزيادة الاتصال

### الأسبوع 1: الدفعة الأولى
*   أرسل دعوات بريد إلكتروني ورسائل نصية.
*   أرسل دعوات مطبوعة مع الطلاب.

### الأسبوع 2: المتابعة
*   أعد إرسال الدعوات.
*   اتصل هاتفيًا بالعائلات غير المتصلة.

### الأسبوع 3+: التواصل المستهدف
*   اطلب من الآباء المتصلين المساعدة في نشر الخبر.
*   أعد طاولة مساعدة عند مدخل المدرسة.

## العوائق الشائعة والحلول

| العائق | الحل |
|--------|------|
| لا هاتف ذكي | شارك إصدار الويب |
| حاجز اللغة | أرسل الدعوات بلغة العائلة |
| لا بريد إلكتروني | استخدم SMS أو المطبوعات |
| مخاوف الخصوصية | شارك سياسة الخصوصية |

## تتبع التقدم

يعرض سترينج **معدل اتصال العائلات** على لوحة قيادة الفصل: أخضر (80%+)، أصفر (50-79%)، أحمر (أقل من 50%).`
  },

  'translating-invites': {
    summary: 'How to generate and send family invitations in multiple languages to reach multilingual households.',
    summary_ar: 'كيفية إنشاء وإرسال دعوات العائلات بعدة لغات للوصول إلى الأسر متعددة اللغات.',
    body: `String supports invitations in over 30 languages, helping you reach every family in your classroom regardless of their primary language.

## Supported Languages

String invitations are available in: Arabic, Bengali, Chinese (Simplified & Traditional), English, French, German, Gujarati, Haitian Creole, Hindi, Italian, Japanese, Korean, Polish, Portuguese, Russian, Somali, Spanish, Swahili, Tagalog, Turkish, Ukrainian, Urdu, Vietnamese, and more.

## Sending Multilingual Email Invitations

1.  Go to **Invite Families** → **Email Invitations**.
2.  Enter parent email addresses.
3.  For each parent, click the **language dropdown** and select their preferred language.
4.  Alternatively, enable **Auto-Detect** — String will attempt to detect the best language based on the family's profile.
5.  Click **Send**.

## Printing Multilingual Invitations

1.  Go to **Invite Families** → **Print Invitations**.
2.  Select **Multiple Languages**.
3.  Check the languages you need.
4.  String generates a PDF with each page in a different language.
5.  Print and distribute the appropriate version to each family.

## SMS Invitations in Multiple Languages

1.  Go to **Invite Families** → **SMS**.
2.  Select the language for each phone number.
3.  The text message is sent in the selected language.

## How Translation Works

*   Invitation text is professionally translated (not machine-translated).
*   Each language version includes identical information: class code, QR code, and setup instructions.
*   The sign-up flow is available in the parent's selected language.

## Tips

*   Ask your **school office** or **ESL coordinator** to help identify which languages families speak.
*   Send invitations in **both English and the family's primary language** to cover all bases.
*   If a language isn't available, contact **support@string.education** to request it.`,

    body_ar: `يدعم سترينج الدعوات بأكثر من 30 لغة لمساعدتك في الوصول لكل عائلة.

## اللغات المدعومة

العربية والبنغالية والصينية والإنجليزية والفرنسية والألمانية والهندية والإيطالية واليابانية والكورية والبولندية والبرتغالية والروسية والإسبانية والتركية والأوردية والفيتنامية وغيرها.

## إرسال دعوات بريد إلكتروني متعددة اللغات

1.  انقر **دعوة العائلات** → **دعوات البريد الإلكتروني**.
2.  أدخل عناوين البريد.
3.  اختر **اللغة** لكل عائلة.
4.  انقر **إرسال**.

## طباعة دعوات متعددة اللغات

1.  انقر **دعوة العائلات** → **طباعة الدعوات**.
2.  اختر **عدة لغات**.
3.  حدد اللغات المطلوبة.
4.  يُنشئ سترينج PDF بكل صفحة بلغة مختلفة.

## كيف تعمل الترجمة

*   النصوص مترجمة **احترافيًا** (وليس ترجمة آلية).
*   كل نسخة لغوية تتضمن نفس المعلومات: رمز الفصل ورمز QR وتعليمات الإعداد.

## نصائح

*   اسأل **مكتب المدرسة** عن اللغات التي تتحدثها العائلات.
*   أرسل بـ **الإنجليزية واللغة الأم** معًا.`
  }
};

const generateArticles = (): Article[] => {
  const articles: Article[] = [];

  // 1. Generate Specific Articles for Getting Started Groups
  const groupArticles: Record<string, string[]> = {
    'g1': ['Teacher Sign Up Guide', 'School Leader Account Setup', 'District Admin Account Creation', 'Google SSO Integration', 'Troubleshooting Sign Up Errors'],
    'g2': ['Understanding Admin vs Teacher', 'Mentor Permissions', 'Student Leader Roles', 'Parent Access Rights', 'Managing Staff Directory'],
    'g3': ['Finding Your School by Zip Code', 'Requesting to Join a Locked School', 'What if my school isn\'t listed?', 'Leaving a School Network', 'Multiple School Affiliations'],
    'g4': ['Verifying Teacher Requests', 'School Leader Approval Workflow', 'Denied Join Requests', 'Badge Verification', 'Annual Re-verification'],
    'g5': ['Printing Parent Invites', 'Email and SMS Invitations', 'Connecting via Class Code', 'Handling Unconnected Families', 'Translating Invites'],

    // Account Management
    'g_am_1': ['Changing Your Password', 'Updating Your Email Address', 'Changing Profile Picture', 'Language and Timezone Settings', 'Deleting Your Account'],
    'g_am_2': ['Supported Browsers and Devices', 'Troubleshooting Connection Issues', 'Clearing Browser Cache', 'Mobile App System Requirements', 'Whitelisting String Domains']
  };

  const groupArticlesAr: Record<string, string[]> = {
    'g1': ['دليل تسجيل المعلم', 'إعداد حساب قائد المدرسة', 'إنشاء حساب مسؤول المنطقة', 'تكامل تسجيل الدخول الموحد من Google', 'استكشاف أخطاء التسجيل وإصلاحها'],
    'g2': ['فهم أدوار المسؤول والمعلم', 'صلاحيات المرشد', 'أدوار قادة الطلاب', 'حقوق وصول أولياء الأمور', 'إدارة دليل الموظفين'],
    'g3': ['البحث عن مدرستك بالرمز البريدي', 'طلب الانضمام لمدرسة مقفلة', 'ماذا لو لم تكن مدرستي مدرجة؟', 'مغادرة شبكة المدرسة', 'الانتساب لعدة مدارس'],
    'g4': ['التحقق من طلبات المعلمين', 'سير عمل موافقة قائد المدرسة', 'طلبات الانضمام المرفوضة', 'التحقق بالشارة', 'إعادة التحقق السنوية'],
    'g5': ['طباعة دعوات أولياء الأمور', 'الدعوات عبر البريد والرسائل النصية', 'الاتصال عبر رمز الفصل', 'التعامل مع العائلات غير المتصلة', 'ترجمة الدعوات'],

    // Account Management
    'g_am_1': ['تغيير كلمة المرور', 'تحديث عنوان البريد الإلكتروني', 'تغيير صورة الملف الشخصي', 'إعدادات اللغة والمنطقة الزمنية', 'حذف حسابك'],
    'g_am_2': ['المتصفحات والأجهزة المدعومة', 'استكشاف مشاكل الاتصال وإصلاحها', 'مسح ذاكرة التخزين المؤقت للمتصفح', 'متطلبات نظام تطبيق الهاتف', 'إضافة نطاقات سترينج للقائمة البيضاء']
  };

  Object.entries(groupArticles).forEach(([groupId, titles]) => {
    const titlesAr = groupArticlesAr[groupId];
    titles.forEach((title, index) => {
      const titleAr = titlesAr[index];
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const override = articleContentOverrides[slug];
      articles.push({
        id: `art-${groupId}-${index}`,
        sectionId: groupId.startsWith('g_am') ? 'sd2' : 'sd1',
        groupId: groupId,
        slug,
        title: title,
        title_ar: titleAr,
        summary: override?.summary || `Complete guide on ${title}.`,
        summary_ar: override?.summary_ar || `دليل شامل حول ${titleAr}.`,
        bodyMarkdown: override?.body || stringAppContent(title),
        bodyMarkdown_ar: override?.body_ar || stringAppContentAr(titleAr),
        updatedAt: new Date().toISOString(),
        tags: groupId.startsWith('g_am') ? ['guide', 'account-management', 'string-app'] : ['guide', 'getting-started', 'string-app'],
        isTop: index === 0,
        role: ['teacher', 'admin'],
      });
    });
  });

  // Arabic title map for generic section articles
  const sectionTitleArMap: Record<string, string> = {
    'sd3': 'إعداد الفصل والوصول',
    'sd4': 'رسائل الفصل',
    'sd5': 'قصة الفصل وفعاليات الفصل',
    'sd6': 'نقاط الفصل والتقارير',
    'sd7': 'ميزات المنطقة التعليمية',
    'sd8': 'ملفات الطلاب',
    'sd9': 'الاستخدام على مستوى المدرسة',
    's1': 'الأساسيات',
    'fam1': 'إعداد ولي الأمر',
    'fam_gs': 'البدء',
    'fam_am': 'إدارة الحساب',
    'fam_msg': 'المراسلة',
    'fam_sp': 'ملف الطالب',
    'fam_pr': 'النقاط والتقارير',
    'stu_gs': 'البدء',
    'stu_tools': 'أدوات التعلم',
    'stu_safety': 'الأمان عبر الإنترنت',
    'stu_acct': 'حساب الطالب',
    'tch_gs': 'البدء',
    'tch_class': 'إدارة الفصل',
    'tch_comm': 'التواصل',
    'tch_materials': 'رفع المواد التعليمية',
    's_acct': 'إدارة حسابك',
    's_billing': 'الخطط والفوترة',
  };

  // 2. Section-specific realistic articles
  const sectionArticles: Record<string, { title: string; title_ar: string; summary: string; summary_ar: string; body?: string; body_ar?: string }[]> = {
    'sd3': [
      { title: 'How to Create a New Class on String', title_ar: 'كيفية إنشاء فصل جديد على سترينج', summary: 'Step-by-step instructions for setting up your first class and customizing class details.', summary_ar: 'تعليمات خطوة بخطوة لإعداد فصلك الأول وتخصيص تفاصيل الفصل.', body: `## Overview

Creating a class on String is the first step to connecting with families and sharing your classroom journey. Each class has its own story feed, messaging inbox, roster, and settings.

## From the Web

1. Log in to your String teacher account at **app.stringedu.com**.
2. Click the **+ Add Class** button on your home dashboard.
3. Enter a **Class Name** (e.g., "Ms. Johnson's 3rd Grade").
4. Select the **Grade Level** from the dropdown menu (Pre-K through 12).
5. Choose a **Class Icon** — pick from the built-in icon library or upload a custom image.
6. Optionally, add a **Class Color** to help distinguish classes on your dashboard.
7. Click **Create Class**.

## On iOS / Android

1. Open the String app and tap the **+** icon on the Classes screen.
2. Enter your **Class Name**.
3. Select the **Grade Level**.
4. Choose a **Class Icon** from the available options.
5. Tap **Create**.

## Customizing Class Details

After creating your class, you can update its settings at any time:

- **Class Name & Icon** — Tap the gear icon inside your class to edit.
- **Grade Level** — Adjust under Class Settings > General.
- **Class Description** — Add an optional description families will see when they join.
- **School Year** — Set the academic year so class data is archived correctly.

### Tips

- Use clear, descriptive names so families can easily identify your class.
- If you teach multiple sections, include the period or section number (e.g., "Science — Period 3").
- You can create up to 30 classes per teacher account.
- Archived classes from previous years remain accessible under **Archived Classes** on your dashboard.`, body_ar: `## نظرة عامة

إنشاء فصل على سترينج هو الخطوة الأولى للتواصل مع العائلات ومشاركة رحلتك التعليمية. لكل فصل قصته الخاصة وصندوق رسائل وقائمة طلاب وإعدادات.

## من الويب

1. سجل الدخول إلى حساب المعلم الخاص بك على **app.stringedu.com**.
2. انقر على زر **+ إضافة فصل** في لوحة القيادة الرئيسية.
3. أدخل **اسم الفصل** (مثال: "فصل الأستاذة جميلة — الصف الثالث").
4. اختر **المرحلة الدراسية** من القائمة المنسدلة.
5. اختر **أيقونة الفصل** من المكتبة المتاحة أو ارفع صورة مخصصة.
6. انقر على **إنشاء الفصل**.

## على iOS / أندرويد

1. افتح تطبيق سترينج واضغط على أيقونة **+** في شاشة الفصول.
2. أدخل **اسم الفصل** واختر **المرحلة الدراسية**.
3. اختر **أيقونة الفصل** واضغط **إنشاء**.

### نصائح

- استخدم أسماء واضحة ووصفية ليسهل على العائلات التعرف على فصلك.
- يمكنك إنشاء حتى 30 فصلًا لكل حساب معلم.
- تبقى الفصول المؤرشفة من السنوات السابقة متاحة تحت **الفصول المؤرشفة**.` },
      { title: 'Adding Students to Your Class', title_ar: 'إضافة طلاب إلى فصلك', summary: 'Learn how to invite students using class codes, email invitations, or roster sync.', summary_ar: 'تعلم كيفية دعوة الطلاب باستخدام رموز الفصل أو دعوات البريد الإلكتروني أو مزامنة القوائم.', body: `## Overview

Once your class is created, you need to add students so their families can connect with you on String. There are three ways to add students: class codes, email invitations, and roster sync.

## Method 1: Class Code

Every class on String has a unique class code that families can use to join.

1. Open your class and click **Settings** (gear icon).
2. Find the **Class Code** section — your code will be displayed (e.g., "AB3X7K").
3. Share the code with families via a printed handout, email, or your school newsletter.
4. Families enter the code in their String app under **Join a Class**.

### Sharing Your Class Code

- Click **Share Code** to copy a pre-formatted message with your class code and download link.
- You can also download a **printable flyer** with a QR code families can scan.

## Method 2: Email Invitations

1. Open your class and click **Invite Families**.
2. Enter parent/guardian email addresses — one per line or separated by commas.
3. Click **Send Invitations**.
4. Families will receive an email with a link to download String and join your class automatically.

## Method 3: Roster Sync

If your school uses a Student Information System (SIS), your administrator can enable automatic roster sync.

1. Ask your school admin to connect your SIS to String (supported: Clever, ClassLink, PowerSchool).
2. Once synced, students are automatically added to your class based on enrollment data.
3. Families still need to download the String app, but their child will already appear in the roster.

### Tips

- You can remove a student from your class at any time under **Class Settings > Students**.
- If a family reports they cannot join, verify the class code and ensure their email matches what you sent the invitation to.
- There is no limit to the number of students you can add to a class.`, body_ar: `## نظرة عامة

بعد إنشاء فصلك، تحتاج إلى إضافة الطلاب حتى تتمكن عائلاتهم من التواصل معك عبر سترينج. هناك ثلاث طرق لإضافة الطلاب: رموز الفصل، ودعوات البريد الإلكتروني، ومزامنة القوائم.

## الطريقة 1: رمز الفصل

1. افتح فصلك وانقر على **الإعدادات** (أيقونة الترس).
2. ابحث عن قسم **رمز الفصل** — سيُعرض الرمز الخاص بك.
3. شارك الرمز مع العائلات عبر نشرة مطبوعة أو بريد إلكتروني.
4. تُدخل العائلات الرمز في تطبيق سترينج تحت **الانضمام لفصل**.

## الطريقة 2: دعوات البريد الإلكتروني

1. افتح فصلك وانقر على **دعوة العائلات**.
2. أدخل عناوين البريد الإلكتروني لأولياء الأمور.
3. انقر على **إرسال الدعوات**.

## الطريقة 3: مزامنة القوائم

إذا كانت مدرستك تستخدم نظام معلومات الطلاب (SIS)، يمكن لمسؤول المدرسة تفعيل مزامنة القوائم التلقائية.

1. اطلب من مسؤول مدرستك ربط نظام SIS بسترينج.
2. بمجرد المزامنة، يُضاف الطلاب تلقائيًا بناءً على بيانات التسجيل.

### نصائح

- يمكنك إزالة طالب من فصلك في أي وقت من **إعدادات الفصل > الطلاب**.
- لا يوجد حد لعدد الطلاب الذين يمكنك إضافتهم.` },
      { title: 'Managing Co-Teachers and Class Access', title_ar: 'إدارة المعلمين المشاركين والوصول للفصل', summary: 'Add co-teachers, adjust permissions, and control who can access your class.', summary_ar: 'أضف معلمين مشاركين واضبط الصلاحيات وتحكم في من يمكنه الوصول لفصلك.', body: `## Overview

String allows you to add co-teachers to your class so multiple educators can share responsibility for communication, story posts, and classroom management. You can also control access levels to protect student privacy.

## Adding a Co-Teacher

### From the Web

1. Open your class and click **Settings** (gear icon).
2. Navigate to **Co-Teachers**.
3. Click **Add Co-Teacher**.
4. Search for the teacher by name or email address — they must already have a String account.
5. Select the teacher from the results and click **Add**.
6. The co-teacher will receive a notification and the class will appear on their dashboard.

### On iOS / Android

1. Open your class and tap the **Settings** icon.
2. Tap **Co-Teachers** and then **Add Co-Teacher**.
3. Search for the teacher and tap **Add**.

## Co-Teacher Permissions

When you add a co-teacher, you can assign one of the following permission levels:

| Permission Level | Can Post to Story | Can Message Families | Can Edit Class Settings | Can Remove Students |
|-----------------|:-:|:-:|:-:|:-:|
| **Full Access** | Yes | Yes | Yes | Yes |
| **Contributor** | Yes | Yes | No | No |
| **View Only** | No | No | No | No |

- To change a co-teacher's permission level, go to **Settings > Co-Teachers**, tap the teacher's name, and select a new role.

## Removing a Co-Teacher

1. Go to **Settings > Co-Teachers**.
2. Click or tap the teacher you want to remove.
3. Select **Remove from Class** and confirm.

### Tips

- Only the class creator (primary teacher) can add or remove co-teachers.
- Co-teachers with Full Access can do everything except delete the class or remove the primary teacher.
- Substitute teachers can be added temporarily and removed when no longer needed.
- All co-teacher actions are logged in the class activity history.`, body_ar: `## نظرة عامة

يتيح لك سترينج إضافة معلمين مشاركين إلى فصلك ليتشارك عدة معلمين مسؤولية التواصل ونشر القصص وإدارة الفصل.

## إضافة معلم مشارك

1. افتح فصلك وانقر على **الإعدادات** (أيقونة الترس).
2. انتقل إلى **المعلمون المشاركون**.
3. انقر على **إضافة معلم مشارك**.
4. ابحث عن المعلم بالاسم أو البريد الإلكتروني — يجب أن يكون لديه حساب على سترينج.
5. اختر المعلم وانقر على **إضافة**.

## صلاحيات المعلم المشارك

عند إضافة معلم مشارك، يمكنك تعيين أحد مستويات الصلاحيات التالية:

- **وصول كامل** — يمكنه النشر والمراسلة وتعديل الإعدادات.
- **مساهم** — يمكنه النشر والمراسلة فقط.
- **عرض فقط** — يمكنه عرض الفصل دون إجراء تغييرات.

## إزالة معلم مشارك

1. اذهب إلى **الإعدادات > المعلمون المشاركون**.
2. انقر على المعلم الذي تريد إزالته.
3. اختر **إزالة من الفصل** وأكد.

### نصائح

- فقط منشئ الفصل (المعلم الرئيسي) يمكنه إضافة أو إزالة المعلمين المشاركين.
- يتم تسجيل جميع إجراءات المعلمين المشاركين في سجل نشاط الفصل.` },
    ],
    'sd4': [
      { title: 'Send a Message', title_ar: 'إرسال رسالة', summary: 'How to compose and send messages to individuals, groups, or your entire class.', summary_ar: 'كيفية إنشاء وإرسال رسائل لأفراد أو مجموعات أو فصلك بالكامل.', body: `## Overview

String Messaging allows teachers to communicate with families and families to reply to teachers. Messages support text, photos, files, and links.

## From the Web

1. Click **Messages** in the left sidebar.
2. Click the **Compose** button (pencil icon).
3. Select your recipients:
   - **Entire Class** — Sends to all connected families.
   - **Individual** — Select specific parents or guardians.
   - **Group** — Select a student group you have created.
4. Type your message in the text field.
5. To add an attachment, click the **paperclip icon** and select a file (max 25 MB).
6. Click **Send**.

## On iOS / Android

1. Tap the **Messages** tab at the bottom.
2. Tap the **Compose** icon.
3. Choose your recipients.
4. Type your message and optionally attach a photo or file.
5. Tap **Send**.

## Notes

- Messages to the entire class are delivered as individual conversations (not a group chat).
- Teachers can see read receipts indicating when a parent has viewed the message.
- Messages are automatically translated for families with a different language preference.

## Troubleshooting

- **Message not delivered** — Check your internet connection and try again.
- **Cannot attach files** — Ensure the file is under 25 MB and in a supported format (PDF, JPG, PNG, DOC).`, body_ar: `## نظرة عامة

تتيح مراسلة سترينج للمعلمين التواصل مع العائلات والعكس. تدعم الرسائل النصوص والصور والملفات والروابط.

## من الويب

1. انقر على **الرسائل** في الشريط الجانبي.
2. انقر على زر **إنشاء** (أيقونة القلم).
3. اختر المستلمين:
   - **الفصل بالكامل** — يُرسل لجميع العائلات المتصلة.
   - **فرد** — اختر أولياء أمور محددين.
   - **مجموعة** — اختر مجموعة طلابية.
4. اكتب رسالتك.
5. لإضافة مرفق، انقر على **أيقونة المشبك** (حد أقصى 25 ميغابايت).
6. انقر على **إرسال**.

## على iOS / أندرويد

1. اضغط على علامة تبويب **الرسائل**.
2. اضغط على أيقونة **إنشاء**.
3. اختر المستلمين واكتب رسالتك.
4. اضغط على **إرسال**.

## ملاحظات

- تُترجم الرسائل تلقائيًا للعائلات التي لديها تفضيل لغة مختلف.
- يمكن للمعلمين رؤية إيصالات القراءة.` },
      { title: 'Receive Messages', title_ar: 'استقبال الرسائل', summary: 'How to view incoming messages, translate them, and manage your inbox.', summary_ar: 'كيفية عرض الرسائل الواردة وترجمتها وإدارة صندوق الوارد.', body: `## Viewing Messages

### From the Web

1. Click **Messages** in the left sidebar.
2. Your inbox shows all conversations sorted by most recent.
3. Click a conversation to read the full message thread.
4. Unread messages are marked with a **blue dot**.

### On iOS / Android

1. Tap the **Messages** tab.
2. Tap a conversation to open it.
3. New messages display a notification badge on the Messages icon.

## Translating Messages

If a message is in a different language:

1. Open the message.
2. Tap the **Translate** button below the message text.
3. The message will be translated into your preferred language.
4. Tap **Show Original** to view the original text.

## Replying to Messages

1. Open the message thread.
2. Type your reply in the text field at the bottom.
3. Tap **Send**.

## Notes

- Parents can only message their child's teacher (not other parents).
- Teachers can choose whether to allow parent replies in class settings.
- You will receive a push notification (if enabled) when a new message arrives.

## Troubleshooting

- **Messages not loading** — Pull down to refresh or check your internet connection.
- **Translation not available** — Not all languages are supported. Submit a request to suggest one.`, body_ar: `## عرض الرسائل

### من الويب

1. انقر على **الرسائل** في الشريط الجانبي.
2. يعرض صندوق الوارد جميع المحادثات مرتبة بالأحدث.
3. انقر على محادثة لقراءة سلسلة الرسائل الكاملة.
4. الرسائل غير المقروءة مميزة بـ**نقطة زرقاء**.

### على iOS / أندرويد

1. اضغط على علامة تبويب **الرسائل**.
2. اضغط على محادثة لفتحها.

## ترجمة الرسائل

1. افتح الرسالة.
2. اضغط على زر **ترجمة** أسفل نص الرسالة.
3. ستُترجم الرسالة إلى لغتك المفضلة.
4. اضغط على **عرض الأصلي** لعرض النص الأصلي.

## الرد على الرسائل

1. افتح سلسلة الرسائل.
2. اكتب ردك في حقل النص.
3. اضغط على **إرسال**.

## ملاحظات

- يمكن لأولياء الأمور مراسلة معلم طفلهم فقط.
- يمكن للمعلمين التحكم في السماح بردود أولياء الأمور.` },
      { title: 'Mute Conversations', title_ar: 'كتم المحادثات', summary: 'Temporarily silence notifications from specific conversations without leaving the class.', summary_ar: 'إسكات الإشعارات من محادثات محددة مؤقتًا دون مغادرة الفصل.', body: `## Overview

Muting a conversation stops push notifications and email alerts for that specific thread. You will still receive the messages — they just will not trigger notifications.

## From the Web

1. Open the **Messages** section.
2. Hover over the conversation you want to mute.
3. Click the **three-dot menu** (⋮) on the right side.
4. Select **Mute Conversation**.
5. Choose a duration: **1 hour**, **8 hours**, **1 week**, or **Until I turn it back on**.

## On iOS / Android

1. Open the **Messages** tab.
2. Swipe left on the conversation (iOS) or long-press it (Android).
3. Tap **Mute**.
4. Select a mute duration.

## Unmuting a Conversation

1. Open the muted conversation (it will show a **muted icon** 🔇).
2. Tap the **three-dot menu** > **Unmute Conversation**.

## Notes

- Muted conversations still appear in your inbox. They are not hidden or deleted.
- Muting does not affect other participants in the conversation.
- Class-wide announcements marked as **urgent** by the teacher will still send a notification even if muted.

## Troubleshooting

- **Still receiving notifications** — Ensure you selected the correct conversation. Check device notification settings.
- **Cannot find mute option** — Update your app to the latest version.`, body_ar: `## نظرة عامة

كتم المحادثة يوقف إشعارات الدفع والبريد الإلكتروني لتلك السلسلة المحددة. ستظل تتلقى الرسائل لكنها لن تُصدر إشعارات.

## من الويب

1. افتح قسم **الرسائل**.
2. مرر الماوس فوق المحادثة التي تريد كتمها.
3. انقر على **قائمة النقاط الثلاث** (⋮).
4. اختر **كتم المحادثة**.
5. اختر المدة: **ساعة واحدة**، **8 ساعات**، **أسبوع واحد**، أو **حتى إلغاء الكتم**.

## على iOS / أندرويد

1. افتح علامة تبويب **الرسائل**.
2. اسحب يسارًا على المحادثة (iOS) أو اضغط مطولاً (أندرويد).
3. اضغط على **كتم**.
4. اختر مدة الكتم.

## إلغاء كتم المحادثة

1. افتح المحادثة المكتومة.
2. اضغط على **قائمة النقاط الثلاث** > **إلغاء كتم المحادثة**.

## ملاحظات

- المحادثات المكتومة لا تزال تظهر في صندوق الوارد.
- الإعلانات **العاجلة** من المعلم ستظل ترسل إشعارًا حتى لو كانت المحادثة مكتومة.` },
      { title: 'Report Inappropriate Content', title_ar: 'الإبلاغ عن محتوى غير لائق', summary: 'How to flag messages or content that violates String\'s community guidelines.', summary_ar: 'كيفية الإبلاغ عن رسائل أو محتوى ينتهك إرشادات مجتمع سترينج.', body: `## Overview

String is committed to maintaining a safe environment for all users. If you encounter a message, photo, or comment that is inappropriate, offensive, or violates community guidelines, you can report it directly.

## How to Report a Message

### From the Web

1. Open the conversation containing the inappropriate content.
2. Hover over the specific message.
3. Click the **three-dot menu** (⋮) and select **Report**.
4. Choose a reason:
   - **Harassment or bullying**
   - **Inappropriate language or content**
   - **Spam**
   - **Other** (provide details)
5. Click **Submit Report**.

### On iOS / Android

1. Open the conversation.
2. Long-press the message you want to report.
3. Tap **Report**.
4. Select a reason and tap **Submit**.

## What Happens After You Report

1. The report is reviewed by the String Trust & Safety team within **24 hours**.
2. The reported user is not notified about who submitted the report.
3. If a violation is confirmed, the content is removed and the user may face restrictions.
4. You will receive a notification with the outcome of your report.

## Notes

- Reporting is anonymous. The other party will not know who filed the report.
- Teachers and school leaders can also review flagged content in their admin dashboard.
- Repeated violations may result in temporary or permanent account suspension.

## Troubleshooting

- **Report button not visible** — Update your app to the latest version.
- **Need to report a user (not just a message)** — Use **Submit a Request** from the Help Center to report a user profile.`, body_ar: `## نظرة عامة

يلتزم سترينج بالحفاظ على بيئة آمنة لجميع المستخدمين. إذا صادفت رسالة أو صورة أو تعليقًا غير لائق، يمكنك الإبلاغ عنه مباشرة.

## كيفية الإبلاغ عن رسالة

### من الويب

1. افتح المحادثة التي تحتوي على المحتوى غير اللائق.
2. مرر الماوس فوق الرسالة المحددة.
3. انقر على **قائمة النقاط الثلاث** (⋮) واختر **إبلاغ**.
4. اختر سببًا:
   - **تحرش أو تنمر**
   - **لغة أو محتوى غير لائق**
   - **بريد عشوائي**
   - **أخرى** (قدم تفاصيل)
5. انقر على **إرسال البلاغ**.

### على iOS / أندرويد

1. افتح المحادثة.
2. اضغط مطولاً على الرسالة.
3. اضغط على **إبلاغ**.
4. اختر سببًا واضغط على **إرسال**.

## ماذا يحدث بعد الإبلاغ

1. يتم مراجعة البلاغ خلال **24 ساعة**.
2. لا يتم إخطار المستخدم المُبلغ عنه بهوية مُقدم البلاغ.
3. إذا تم تأكيد المخالفة، يُزال المحتوى.
4. ستتلقى إشعارًا بنتيجة بلاغك.

## ملاحظات

- الإبلاغ مجهول الهوية.
- المخالفات المتكررة قد تؤدي إلى تعليق الحساب مؤقتًا أو دائمًا.` },
    ],
    'sd5': [
      { title: 'Posting to Your Class Story', title_ar: 'النشر في قصة فصلك', summary: 'Share photos, videos, and updates with families through your class story feed.', summary_ar: 'شارك الصور والفيديو والتحديثات مع العائلات من خلال قصة فصلك.', body: `## Overview

Class Story is one of String's most popular features. It works like a private social feed where teachers can share photos, videos, and text updates from the classroom. Only connected families can view the posts, making it a safe and engaging way to keep parents informed.

## Posting from the Web

1. Open your class and click the **Class Story** tab.
2. Click the **+ New Post** button.
3. Add your content:
   - **Photos** — Click the camera icon to upload images (up to 10 per post).
   - **Videos** — Click the video icon to upload a video (max 3 minutes, 500 MB).
   - **Text** — Write a caption or standalone text update.
4. Optionally tag students who appear in the post (families will only see their own child's name).
5. Click **Share to Story**.

## Posting from iOS / Android

1. Open your class and tap the **Story** tab.
2. Tap the **+** button.
3. Take a photo or video directly, or choose from your gallery.
4. Add a caption and optionally tag students.
5. Tap **Post**.

## Editing or Deleting a Post

- To edit a post, click the **three-dot menu** on the post and select **Edit**.
- To delete a post, click the **three-dot menu** and select **Delete**. This action cannot be undone.

## Scheduling Posts

1. When composing a post, click the **clock icon** next to the Share button.
2. Set the date and time you want the post to go live.
3. Click **Schedule**. The post will appear in your drafts until published.

### Tips

- Post regularly to keep families engaged — even a quick photo once a week makes a big difference.
- Use captions to explain what students are learning, not just what they are doing.
- Co-teachers with Contributor or Full Access permissions can also post to the class story.
- Parents receive a push notification for each new story post.`, body_ar: `## نظرة عامة

قصة الفصل هي واحدة من أكثر ميزات سترينج شعبية. تعمل كموجز اجتماعي خاص حيث يمكن للمعلمين مشاركة الصور والفيديو والتحديثات النصية. فقط العائلات المتصلة يمكنها عرض المنشورات.

## النشر من الويب

1. افتح فصلك وانقر على علامة تبويب **قصة الفصل**.
2. انقر على زر **+ منشور جديد**.
3. أضف المحتوى:
   - **الصور** — انقر على أيقونة الكاميرا لرفع الصور (حتى 10 لكل منشور).
   - **الفيديو** — انقر على أيقونة الفيديو لرفع مقطع (أقصى 3 دقائق).
4. اختياريًا ضع إشارة على الطلاب الظاهرين في المنشور.
5. انقر على **مشاركة في القصة**.

## النشر من iOS / أندرويد

1. افتح فصلك واضغط على علامة تبويب **القصة**.
2. اضغط على زر **+** والتقط صورة أو اختر من معرضك.
3. أضف تعليقًا واضغط **نشر**.

### نصائح

- انشر بانتظام للحفاظ على تفاعل العائلات.
- يتلقى أولياء الأمور إشعارًا فوريًا لكل منشور جديد.` },
      { title: 'Creating and Managing Class Events', title_ar: 'إنشاء وإدارة فعاليات الفصل', summary: 'Schedule parent-teacher conferences, field trips, and school events families can RSVP to.', summary_ar: 'جدول مؤتمرات أولياء الأمور والرحلات الميدانية والفعاليات التي يمكن للعائلات تأكيد حضورها.', body: `## Overview

String's Class Events feature lets you create events that families can view and RSVP to directly from the app. Whether it is a parent-teacher conference, a school field trip, or a class celebration, events keep everyone informed and organized.

## Creating an Event

### From the Web

1. Open your class and click the **Events** tab.
2. Click **+ Create Event**.
3. Fill in the event details:
   - **Event Title** — Give your event a clear name (e.g., "Fall Parent-Teacher Conference").
   - **Date & Time** — Set the start and end date/time.
   - **Location** — Enter a physical address or virtual meeting link.
   - **Description** — Add details about the event, what to bring, or how to prepare.
4. Choose whether to **allow RSVPs** (toggle on/off).
5. Click **Create Event**.

### On iOS / Android

1. Open your class and tap the **Events** tab.
2. Tap **+ New Event**.
3. Fill in the title, date, time, location, and description.
4. Tap **Create**.

## Managing RSVPs

Once an event is live, families can RSVP with one of three responses: **Going**, **Maybe**, or **Not Going**.

- View RSVP responses by opening the event and clicking **View RSVPs**.
- You will see a breakdown by response type along with the names of each family.
- Export the RSVP list to CSV by clicking **Export** for easy printing or sharing.

## Editing or Canceling an Event

1. Open the event from the **Events** tab.
2. Click the **Edit** button to change details. All families will be notified of the update.
3. To cancel, click **Cancel Event**. Families will receive a cancellation notification.

### Tips

- Create events at least one week in advance to give families time to plan.
- Use the description field to include important reminders like "Please bring a signed permission slip."
- Events appear on the family's String calendar and can be synced with their phone calendar.
- School administrators can also create school-wide events visible to all classes.`, body_ar: `## نظرة عامة

تتيح لك ميزة فعاليات الفصل في سترينج إنشاء فعاليات يمكن للعائلات عرضها وتأكيد حضورها مباشرة من التطبيق.

## إنشاء فعالية

1. افتح فصلك وانقر على علامة تبويب **الفعاليات**.
2. انقر على **+ إنشاء فعالية**.
3. املأ تفاصيل الفعالية:
   - **عنوان الفعالية** — أعطِ فعاليتك اسمًا واضحًا.
   - **التاريخ والوقت** — حدد وقت البداية والنهاية.
   - **الموقع** — أدخل العنوان أو رابط الاجتماع الافتراضي.
4. انقر على **إنشاء الفعالية**.

## إدارة تأكيدات الحضور

يمكن للعائلات الرد بـ: **سأحضر** أو **ربما** أو **لن أحضر**.

- اعرض الردود بفتح الفعالية والنقر على **عرض الردود**.
- يمكنك تصدير قائمة الردود إلى CSV.

### نصائح

- أنشئ الفعاليات قبل أسبوع على الأقل لمنح العائلات وقتًا للتخطيط.
- تظهر الفعاليات في تقويم العائلة على سترينج ويمكن مزامنتها مع تقويم الهاتف.` },
      { title: 'Privacy Settings for Class Story Posts', title_ar: 'إعدادات الخصوصية لمنشورات قصة الفصل', summary: 'Control who can view, comment on, and download your class story content.', summary_ar: 'تحكم في من يمكنه عرض محتوى قصة فصلك والتعليق عليه وتنزيله.', body: `## Overview

String takes student privacy seriously. Class Story privacy settings give teachers full control over who can view, comment on, like, and download the photos and videos shared in their class story feed.

## Accessing Privacy Settings

1. Open your class and go to **Settings** (gear icon).
2. Click on **Privacy & Permissions**.
3. You will see options organized under the following categories.

## Viewing Permissions

By default, only families connected to your class can see story posts. You can further restrict visibility:

- **All Connected Families** — Every parent/guardian in your class can see all posts (default).
- **Tagged Families Only** — Parents can only see posts where their child is tagged.
- **Approved Viewers** — Manually approve which family members can access the story.

## Comment Settings

Control whether families can interact with your posts:

- **Allow Comments** — Families can leave comments on story posts (default: on).
- **Allow Likes** — Families can like posts (default: on).
- **Comment Moderation** — When enabled, comments require teacher approval before they are visible to other families.

## Download and Sharing Controls

- **Allow Photo Downloads** — Toggle whether families can save photos to their device (default: on).
- **Allow Video Downloads** — Toggle whether families can download videos (default: off).
- **Disable Screenshots** — On supported devices, prevent screenshots of story content (Android only).

## Student Tagging

- **Auto-Tag Suggestions** — String can suggest students to tag based on facial recognition (must be enabled by your school admin).
- **Require Tag Approval** — When enabled, tagged students' families must approve the tag before seeing the post.

### Tips

- Review your privacy settings at the beginning of each school year.
- If a parent requests that their child not appear in class story posts, remove the child from tagging and use the **Exclude Student** option under Privacy settings.
- School administrators can set default privacy policies that apply to all teachers.
- Posts shared to the class story are never visible to the public internet.`, body_ar: `## نظرة عامة

يأخذ سترينج خصوصية الطلاب على محمل الجد. تمنحك إعدادات الخصوصية تحكمًا كاملًا في من يمكنه عرض والتعليق وتنزيل المحتوى.

## أذونات العرض

- **جميع العائلات المتصلة** — كل ولي أمر يمكنه رؤية جميع المنشورات (الافتراضي).
- **العائلات الموسومة فقط** — يرى الأهل فقط المنشورات التي تم وسم طفلهم فيها.

## إعدادات التعليقات

- **السماح بالتعليقات** — يمكن للعائلات ترك تعليقات على المنشورات.
- **الإشراف على التعليقات** — عند التفعيل، تحتاج التعليقات لموافقة المعلم.

## عناصر التحكم في التنزيل

- **السماح بتنزيل الصور** — تبديل ما إذا كان يمكن للعائلات حفظ الصور.
- **السماح بتنزيل الفيديو** — تبديل ما إذا كان يمكن للعائلات تنزيل الفيديو.

### نصائح

- راجع إعدادات الخصوصية في بداية كل عام دراسي.
- المنشورات لا تكون مرئية أبدًا على الإنترنت العام.` },
    ],
    'sd6': [
      { title: 'How Points Work', title_ar: 'كيف تعمل النقاط', summary: 'An overview of the String behavior points system, categories, and how points are awarded.', summary_ar: 'نظرة عامة على نظام نقاط السلوك في سترينج والفئات وكيفية منح النقاط.', body: `## Overview

String's behavior points system helps teachers track and encourage positive student behavior. Points are organized into customizable categories and can be viewed by students and families.

## How the System Works

1. **Teachers create categories** — Examples include "Participation," "Helpfulness," "Homework Completion," and "Needs Improvement."
2. **Each category has a point value** — Positive behaviors earn points; areas for improvement can deduct points.
3. **Teachers award points** — Points are given to individual students or groups throughout the day.
4. **Students and families see results** — Points appear on the student's dashboard and in parent reports.

## Point Categories

Teachers can configure any categories they choose. Common defaults include:

| Category | Type | Default Points |
|----------|------|---------------|
| Participation | Positive | +1 |
| Helping Others | Positive | +2 |
| Great Work | Positive | +3 |
| Homework Complete | Positive | +1 |
| Needs Improvement | Needs Work | -1 |

## Awarding Points

### From the Web

1. Open your **class page**.
2. Click on a **student's name** or select multiple students.
3. Click the **+/- Points** button.
4. Choose a **category** and the number of points.
5. Optionally add a **note** (e.g., "Great presentation today!").
6. Click **Award**.

### On iOS / Android

1. Open your class.
2. Tap a student or tap **Select Multiple**.
3. Tap the point category to award.
4. Points are saved instantly.

## Notes

- Points are visible to students and their connected parents in real time.
- Teachers can reset all points at the end of each week, month, or grading period.
- Point history is preserved even after a reset for reporting purposes.

## Troubleshooting

- **Points not showing for families** — Ensure the parent is connected to the class.
- **Cannot award negative points** — Check that your "Needs Improvement" categories are configured correctly.`, body_ar: `## نظرة عامة

يساعد نظام نقاط السلوك في سترينج المعلمين على تتبع وتشجيع السلوك الإيجابي للطلاب.

## كيف يعمل النظام

1. **ينشئ المعلمون فئات** — مثل "المشاركة" و"مساعدة الآخرين" و"إكمال الواجبات".
2. **كل فئة لها قيمة نقاط** — السلوكيات الإيجابية تكسب نقاطًا.
3. **يمنح المعلمون النقاط** — للطلاب فرديًا أو جماعيًا.
4. **يرى الطلاب والعائلات النتائج** — تظهر النقاط في لوحة القيادة والتقارير.

## منح النقاط

### من الويب

1. افتح **صفحة الفصل**.
2. انقر على **اسم الطالب** أو اختر عدة طلاب.
3. انقر على زر **+/- نقاط**.
4. اختر **الفئة** وعدد النقاط.
5. أضف **ملاحظة** اختيارية.
6. انقر على **منح**.

### على iOS / أندرويد

1. افتح فصلك.
2. اضغط على طالب أو اضغط على **اختيار متعدد**.
3. اضغط على فئة النقاط لمنحها.

## ملاحظات

- النقاط مرئية للطلاب وأولياء الأمور في الوقت الفعلي.
- يمكن للمعلمين إعادة تعيين النقاط في نهاية كل فترة.` },
      { title: 'View Student Reports', title_ar: 'عرض تقارير الطلاب', summary: 'How to access and interpret student behavior and progress reports.', summary_ar: 'كيفية الوصول إلى تقارير سلوك الطلاب وتقدمهم وتفسيرها.', body: `## Overview

String generates visual reports that summarize student behavior, points trends, and engagement over time. These reports are available to teachers, school leaders, and parents.

## Accessing Reports

### Teachers

1. Go to your **class page**.
2. Click the **Reports** tab.
3. Select a **report type**:
   - **Individual Student Report** — Points breakdown for a single student.
   - **Class Summary** — Overview of all students' points and trends.
   - **Weekly Digest** — A summary of the past week's activity.

### Parents

1. Open your child's class.
2. Tap the **Reports** tab.
3. View your child's individual report.

### School Leaders

1. Go to the **Admin Dashboard**.
2. Click **School Reports**.
3. Select a class or view school-wide data.

## Understanding the Report

Each report includes:
- **Points Earned** — Total positive points for the period.
- **Areas for Improvement** — Total needs-improvement points.
- **Trend Chart** — A line graph showing points over the past 4–8 weeks.
- **Category Breakdown** — A bar chart showing which behavior categories were most active.
- **Attendance Summary** — Days present (if attendance tracking is enabled).

## Notes

- Reports are generated automatically at the end of each week.
- Teachers can customize the reporting period (weekly, monthly, or custom date range).
- Reports are read-only for parents and students.

## Troubleshooting

- **Report shows no data** — Ensure points have been awarded for the selected period.
- **Parent cannot see report** — Confirm the parent is connected to the correct class.`, body_ar: `## نظرة عامة

ينشئ سترينج تقارير مرئية تلخص سلوك الطلاب واتجاهات النقاط والمشاركة بمرور الوقت.

## الوصول إلى التقارير

### المعلمون

1. انتقل إلى **صفحة الفصل**.
2. انقر على علامة تبويب **التقارير**.
3. اختر **نوع التقرير**: تقرير طالب فردي، ملخص الفصل، أو ملخص أسبوعي.

### أولياء الأمور

1. افتح فصل طفلك.
2. اضغط على علامة تبويب **التقارير**.
3. اعرض تقرير طفلك الفردي.

## فهم التقرير

يتضمن كل تقرير:
- **النقاط المكتسبة** — إجمالي النقاط الإيجابية.
- **مجالات التحسين** — إجمالي نقاط التحسين.
- **مخطط الاتجاه** — رسم بياني يوضح النقاط على مدى الأسابيع الماضية.
- **تحليل الفئات** — مخطط شريطي يوضح الفئات الأكثر نشاطًا.

## ملاحظات

- تُنشأ التقارير تلقائيًا في نهاية كل أسبوع.
- يمكن للمعلمين تخصيص فترة التقارير.` },
      { title: 'Download Reports (PDF)', title_ar: 'تنزيل التقارير (PDF)', summary: 'How to export and download student reports as PDF files for printing or sharing.', summary_ar: 'كيفية تصدير وتنزيل تقارير الطلاب كملفات PDF للطباعة أو المشاركة.', body: `## Overview

You can download any student report as a PDF file for offline viewing, printing, or sharing during parent-teacher conferences.

## From the Web

1. Go to the **Reports** tab in your class.
2. Select the report you want to download (individual or class summary).
3. Set the **date range** for the report.
4. Click the **Download PDF** button in the top-right corner.
5. The PDF will be generated and downloaded to your device.

## On iOS / Android

1. Open the **Reports** tab.
2. Select the report you want to export.
3. Tap the **Share** icon.
4. Select **Save as PDF** or **Print**.
5. Choose where to save the file on your device.

## What the PDF Includes

- Student name and class information.
- Points summary with category breakdown.
- Trend chart (visual graph).
- Teacher notes and comments (if any).
- Date range and generation timestamp.

## Bulk Download (Teachers Only)

To download reports for all students at once:
1. Go to **Reports > Class Summary**.
2. Click **Export All Reports**.
3. Select **PDF** as the format.
4. A ZIP file containing individual PDFs for each student will be downloaded.

## Notes

- PDF reports are formatted for standard letter-size (8.5" × 11") printing.
- Reports include the school logo if configured in school settings.
- Downloaded reports reflect data at the time of export and do not update automatically.

## Troubleshooting

- **PDF not generating** — Try a different browser or update your app.
- **Charts missing from PDF** — Ensure JavaScript is enabled in your browser.
- **Bulk export timing out** — For large classes (30+ students), the export may take up to 60 seconds.`, body_ar: `## نظرة عامة

يمكنك تنزيل أي تقرير طلابي كملف PDF للعرض دون اتصال أو الطباعة أو المشاركة.

## من الويب

1. انتقل إلى علامة تبويب **التقارير**.
2. اختر التقرير الذي تريد تنزيله.
3. حدد **نطاق التاريخ**.
4. انقر على **تنزيل PDF**.
5. سيتم إنشاء ملف PDF وتنزيله.

## على iOS / أندرويد

1. افتح علامة تبويب **التقارير**.
2. اختر التقرير المطلوب.
3. اضغط على أيقونة **مشاركة**.
4. اختر **حفظ كـ PDF** أو **طباعة**.

## محتويات ملف PDF

- اسم الطالب ومعلومات الفصل.
- ملخص النقاط مع تحليل الفئات.
- مخطط الاتجاه (رسم بياني مرئي).
- ملاحظات المعلم (إن وجدت).

## التنزيل الجماعي (للمعلمين فقط)

1. انتقل إلى **التقارير > ملخص الفصل**.
2. انقر على **تصدير جميع التقارير**.
3. اختر **PDF** كتنسيق.
4. سيتم تنزيل ملف ZIP يحتوي على ملفات PDF فردية لكل طالب.

## ملاحظات

- تقارير PDF مُنسقة لطباعة بحجم Letter القياسي.
- التقارير المنزلة تعكس البيانات وقت التصدير ولا تُحدّث تلقائيًا.` },
    ],
    'sd7': [
      { title: 'District Admin Dashboard Overview', title_ar: 'نظرة عامة على لوحة قيادة مسؤول المنطقة', summary: 'Navigate the district-level dashboard to manage schools, staff, and platform settings.', summary_ar: 'تنقل في لوحة قيادة مستوى المنطقة لإدارة المدارس والموظفين وإعدادات المنصة.', body: `## Overview

The District Admin Dashboard is the central hub for managing your entire String deployment across all schools in your district. From here, you can oversee schools, manage staff accounts, view engagement metrics, and configure district-wide platform settings.

## Accessing the Dashboard

1. Log in to String at **app.stringedu.com** with your district admin account.
2. You will land on the **District Dashboard** by default.
3. The dashboard displays key metrics at a glance:
   - **Total Schools** connected to your district.
   - **Active Teachers** and **Connected Families** across all schools.
   - **Weekly Engagement Rate** showing messaging and story activity trends.

## Dashboard Sections

### Schools
- View all schools in your district with their individual engagement stats.
- Click a school name to drill down into that school's data.

### Staff Management
- View, add, or remove district-level administrators.
- Manage school admin accounts and role assignments.
- Reset passwords and update contact information.

### Settings
- **District Name & Logo** — Customize your district's branding on String.
- **Default Privacy Policies** — Set privacy defaults that apply to all schools.
- **Communication Policies** — Configure messaging hours, auto-translation settings, and content filters.
- **Data & Compliance** — Manage FERPA/COPPA compliance settings and data retention policies.

### Support
- Access district-specific support resources.
- Submit support tickets directly from the dashboard.
- View the status of open tickets.

### Tips

- Bookmark **app.stringedu.com/district** for quick access to your dashboard.
- Use the search bar at the top to quickly find any school, teacher, or setting.
- Schedule a weekly review of your engagement metrics to identify schools that may need additional support.`, body_ar: `## نظرة عامة

لوحة قيادة مسؤول المنطقة هي المركز الرئيسي لإدارة نشر سترينج عبر جميع مدارس منطقتك. يمكنك الإشراف على المدارس وإدارة حسابات الموظفين وعرض مقاييس التفاعل.

## أقسام لوحة القيادة

### المدارس
- عرض جميع المدارس مع إحصائيات التفاعل الخاصة بكل منها.
- انقر على اسم مدرسة للتعمق في بياناتها.

### إدارة الموظفين
- عرض وإضافة وإزالة مسؤولي المنطقة.
- إدارة حسابات مسؤولي المدارس وتعيين الأدوار.

### الإعدادات
- **اسم المنطقة والشعار** — خصص العلامة التجارية لمنطقتك.
- **سياسات الخصوصية** — حدد إعدادات الخصوصية الافتراضية.
- **البيانات والامتثال** — إدارة إعدادات FERPA/COPPA.

### نصائح

- استخدم شريط البحث للعثور بسرعة على أي مدرسة أو معلم أو إعداد.
- جدول مراجعة أسبوعية لمقاييس التفاعل.` },
      { title: 'Managing Schools Within Your District', title_ar: 'إدارة المدارس ضمن منطقتك', summary: 'Add, remove, and configure schools under your district\'s String account.', summary_ar: 'أضف وأزل وهيّئ المدارس تحت حساب سترينج الخاص بمنطقتك.', body: `## Overview

As a district administrator on String, you can add new schools, remove schools that are no longer active, and configure individual school settings — all from the district dashboard. This ensures consistent setup and streamlined management across your entire district.

## Adding a New School

1. Navigate to the **District Dashboard** and click **Schools** in the left sidebar.
2. Click **+ Add School**.
3. Enter the school details:
   - **School Name** (e.g., "Riverside Elementary").
   - **School Address** and contact information.
   - **Grade Levels Served** (e.g., K-5, 6-8, 9-12).
   - **School Admin Email** — This person will become the primary admin for the school.
4. Click **Create School**.
5. The school admin will receive an email invitation to set up their school account.

## Configuring School Settings

After adding a school, you can adjust its settings:

- **School Branding** — Upload a school logo and set school colors.
- **Default Class Settings** — Pre-configure default privacy, messaging, and story settings for all new classes.
- **SIS Integration** — Connect the school's Student Information System for automatic roster syncing.
- **Feature Toggles** — Enable or disable features like portfolios, behavior points, or events on a per-school basis.

## Removing a School

1. Go to **Schools** and find the school you want to remove.
2. Click the school name, then click **Settings**.
3. Scroll to the bottom and click **Remove School**.
4. Confirm the removal. All school data will be archived for 90 days before permanent deletion.

## Transferring a School Admin

1. Open the school's settings from the district dashboard.
2. Under **School Administrators**, click **Transfer Primary Admin**.
3. Enter the new admin's email address and click **Transfer**.
4. The new admin will receive an email to accept the role.

### Tips

- Use consistent naming conventions for schools to keep the dashboard organized.
- Test new school configurations in a sandbox school before rolling out district-wide.
- Archived school data can be restored within the 90-day retention window by contacting String support.`, body_ar: `## نظرة عامة

بصفتك مسؤول منطقة على سترينج، يمكنك إضافة مدارس جديدة وإزالة المدارس غير النشطة وتهيئة إعدادات المدارس الفردية من لوحة قيادة المنطقة.

## إضافة مدرسة جديدة

1. انتقل إلى **لوحة قيادة المنطقة** وانقر على **المدارس**.
2. انقر على **+ إضافة مدرسة**.
3. أدخل تفاصيل المدرسة:
   - **اسم المدرسة** والعنوان ومعلومات الاتصال.
   - **المراحل الدراسية** وبريد مسؤول المدرسة.
4. انقر على **إنشاء المدرسة**.

## تهيئة إعدادات المدرسة

- **العلامة التجارية** — ارفع شعار المدرسة وحدد الألوان.
- **ربط نظام SIS** — لمزامنة القوائم تلقائيًا.
- **تبديل الميزات** — تفعيل أو تعطيل الميزات لكل مدرسة.

## إزالة مدرسة

1. اذهب إلى **المدارس** وابحث عن المدرسة.
2. انقر على **إزالة المدرسة** وأكد.
3. سيتم أرشفة بيانات المدرسة لمدة 90 يومًا قبل الحذف النهائي.

### نصائح

- استخدم تسميات متسقة للمدارس لتنظيم لوحة القيادة.` },
      { title: 'District-Wide Reporting and Analytics', title_ar: 'التقارير والتحليلات على مستوى المنطقة', summary: 'Access aggregated usage data and engagement metrics across all district schools.', summary_ar: 'اطلع على بيانات الاستخدام المجمعة ومقاييس المشاركة عبر جميع مدارس المنطقة.', body: `## Overview

String provides district administrators with powerful reporting and analytics tools that aggregate data from all schools in the district. These insights help you measure platform adoption, track family engagement, and make data-driven decisions about communication strategies.

## Accessing Reports

1. Log in to the **District Dashboard**.
2. Click **Reports & Analytics** in the left sidebar.
3. Select the report type you want to view.

## Available Reports

### Engagement Overview
- **Family Connection Rate** — Percentage of families connected to at least one class.
- **Daily/Weekly/Monthly Active Users** — Track how many teachers and families use String.
- **Message Volume** — Number of messages sent between teachers and families.
- **Story Activity** — Number of class story posts, comments, and likes.

### School Comparison
- Compare engagement metrics across schools in a side-by-side table.
- Identify top-performing and underperforming schools.
- Sort by any metric (e.g., connection rate, messages sent, events created).

### Teacher Adoption
- View which teachers have activated their accounts.
- See how many classes each teacher has created.
- Track teacher messaging and posting frequency.

### Family Engagement
- Monitor family sign-up and connection trends over time.
- View engagement by grade level or school.
- Identify families who have not yet connected.

## Exporting Reports

1. Open any report and click the **Export** button in the top-right corner.
2. Choose your format: **CSV**, **PDF**, or **Excel**.
3. The report will download to your device.
4. Scheduled exports can be configured under **Settings > Automated Reports** to receive weekly or monthly reports by email.

## Filtering and Date Ranges

- Use the **date picker** to select a custom date range for any report.
- Filter by **school**, **grade level**, or **teacher** to narrow results.
- Save frequently used filters as **presets** for quick access.

### Tips

- Share monthly engagement reports with school principals to keep them informed.
- Use the School Comparison report during district leadership meetings.
- Set up automated weekly reports to track progress without manual effort.
- Low family connection rates often improve with targeted outreach — use the unconnected families list to follow up.`, body_ar: `## نظرة عامة

يوفر سترينج لمسؤولي المناطق أدوات تقارير وتحليلات قوية تجمع البيانات من جميع المدارس. تساعدك هذه الرؤى على قياس تبني المنصة وتتبع تفاعل العائلات.

## التقارير المتاحة

### نظرة عامة على التفاعل
- **معدل اتصال العائلات** — نسبة العائلات المتصلة بفصل واحد على الأقل.
- **المستخدمون النشطون** — تتبع عدد المعلمين والعائلات الذين يستخدمون سترينج.
- **حجم الرسائل** — عدد الرسائل المرسلة.

### مقارنة المدارس
- قارن مقاييس التفاعل عبر المدارس جنبًا إلى جنب.
- حدد المدارس الأفضل أداءً والتي تحتاج لدعم.

### تبني المعلمين
- اعرض المعلمين الذين فعّلوا حساباتهم.
- تتبع تكرار المراسلة والنشر.

## تصدير التقارير

1. افتح أي تقرير وانقر على زر **تصدير**.
2. اختر التنسيق: **CSV** أو **PDF** أو **Excel**.
3. يمكن تهيئة تقارير مجدولة للاستلام أسبوعيًا أو شهريًا عبر البريد.

### نصائح

- شارك تقارير التفاعل الشهرية مع مديري المدارس.
- استخدم تقرير مقارنة المدارس في اجتماعات قيادة المنطقة.` },
    ],
    'sd8': [
      { title: 'Enabling Student Portfolios for Your Class', title_ar: 'تفعيل ملفات الطلاب لفصلك', summary: 'Activate the portfolio feature and set up submission guidelines for students.', summary_ar: 'فعّل ميزة الملف وأعد إرشادات التقديم للطلاب.', body: `## Overview

Student Portfolios allow your students to submit work samples — such as photos, writing, drawings, and projects — into a digital portfolio that you can review, approve, and share with families. This guide walks you through enabling the feature and configuring submission guidelines.

## Enabling Portfolios

1. Open your class on String and navigate to **Settings**.
2. Scroll to the **Features** section.
3. Toggle **Student Portfolios** to **On**.
4. Click **Save Changes**.

> **Note:** Once enabled, students will see a new **Portfolio** tab in their class view.

## Setting Up Submission Guidelines

After enabling portfolios, you can define what students are allowed to submit:

1. Go to **Settings > Portfolios > Submission Guidelines**.
2. Choose which file types are accepted:
   - **Images** (JPG, PNG)
   - **Documents** (PDF, DOCX)
   - **Videos** (MP4, up to 2 minutes)
3. Set a **maximum file size** (recommended: 25 MB).
4. Optionally, add a **description prompt** that students see when submitting (e.g., "Describe what you learned from this project").
5. Click **Save Guidelines**.

## Managing Submission Frequency

- **Open submissions** — Students can submit at any time.
- **Weekly limit** — Restrict submissions to a set number per week.
- **Teacher-prompted only** — Students can only submit when you send a portfolio prompt.

To configure this, go to **Settings > Portfolios > Submission Frequency**.

### Tips

- Start with **open submissions** to encourage participation, then adjust based on volume.
- Use the **description prompt** to help students practice reflection and self-assessment.
- Notify families once portfolios are active so they know to check for updates.`, body_ar: `## نظرة عامة

تتيح ملفات الطلاب لطلابك تقديم نماذج من أعمالهم — مثل الصور والكتابة والرسومات والمشاريع — في ملف رقمي يمكنك مراجعته واعتماده ومشاركته مع العائلات.

## تفعيل الملفات

1. افتح فصلك على سترينج وانتقل إلى **الإعدادات**.
2. مرر إلى قسم **الميزات**.
3. فعّل **ملفات الطلاب**.
4. انقر على **حفظ التغييرات**.

> **ملاحظة:** بمجرد التفعيل، سيرى الطلاب علامة تبويب **الملف** جديدة.

## إعداد إرشادات التقديم

1. انتقل إلى **الإعدادات > الملفات > إرشادات التقديم**.
2. اختر أنواع الملفات المقبولة:
   - **صور** (JPG، PNG)
   - **مستندات** (PDF، DOCX)
   - **فيديو** (MP4، حتى دقيقتين)
3. حدد **الحد الأقصى لحجم الملف** (يُنصح بـ 25 ميجابايت).
4. اختياريًا، أضف **وصفًا توجيهيًا** يراه الطلاب عند التقديم.
5. انقر على **حفظ الإرشادات**.

### نصائح

- ابدأ بالتقديم المفتوح لتشجيع المشاركة.
- استخدم الوصف التوجيهي لمساعدة الطلاب على ممارسة التأمل الذاتي.
- أبلغ العائلات عند تفعيل الملفات ليتابعوا التحديثات.` },
      { title: 'Reviewing and Approving Student Work', title_ar: 'مراجعة واعتماد أعمال الطلاب', summary: 'Review portfolio submissions, leave feedback, and approve entries for family viewing.', summary_ar: 'راجع تقديمات الملف واترك ملاحظات واعتمد الإدخالات لعرض العائلات.', body: `## Overview

When students submit work to their portfolio, it enters a review queue. As the teacher, you can preview each submission, leave written feedback, and decide whether to approve it for family viewing or request a revision.

## Viewing Pending Submissions

1. Navigate to your class and open the **Portfolios** tab.
2. Click on **Pending Reviews** to see all submissions awaiting your approval.
3. Each entry shows the student's name, submission date, file type, and a preview thumbnail.

## Reviewing an Entry

1. Click on a submission to open the full preview.
2. Review the attached file (image, document, or video).
3. Read the student's description if one was provided.

### Leaving Feedback

1. In the review panel, click **Add Feedback**.
2. Type your comment in the text box (e.g., "Great work on your diagram! Consider adding labels next time.").
3. Click **Save Feedback** — the student will be notified.

> **Tip:** Positive, specific feedback encourages students to continue submitting quality work.

## Approving or Requesting Revisions

- Click **Approve** to publish the entry to the student's portfolio. Approved entries become visible to connected family members.
- Click **Request Revision** to send the entry back to the student with your feedback. The student can then edit and resubmit.

## Bulk Actions

1. From the **Pending Reviews** list, select multiple entries using the checkboxes.
2. Click **Approve Selected** to approve all at once.
3. Bulk revision requests are not supported — each must be handled individually to include specific feedback.

## Best Practices

- Review submissions **at least twice a week** to keep students motivated.
- Use feedback as a learning tool, not just a gatekeeping step.
- Celebrate standout entries by featuring them in your **Class Story**.`, body_ar: `## نظرة عامة

عندما يقدم الطلاب أعمالهم إلى ملفهم، تدخل في قائمة المراجعة. بصفتك المعلم، يمكنك معاينة كل تقديم وترك ملاحظات مكتوبة وتقرير ما إذا كنت ستعتمده لعرض العائلات أو تطلب تعديلًا.

## عرض التقديمات المعلقة

1. انتقل إلى فصلك وافتح علامة تبويب **الملفات**.
2. انقر على **المراجعات المعلقة** لرؤية جميع التقديمات التي تنتظر موافقتك.
3. يعرض كل إدخال اسم الطالب وتاريخ التقديم ونوع الملف.

## مراجعة إدخال

1. انقر على التقديم لفتح المعاينة الكاملة.
2. راجع الملف المرفق.
3. اقرأ وصف الطالب إن وُجد.

### ترك ملاحظات

1. في لوحة المراجعة، انقر على **إضافة ملاحظات**.
2. اكتب تعليقك في مربع النص.
3. انقر على **حفظ الملاحظات** — سيتم إخطار الطالب.

## الموافقة أو طلب التعديل

- انقر على **موافقة** لنشر الإدخال في ملف الطالب.
- انقر على **طلب تعديل** لإعادة الإدخال إلى الطالب مع ملاحظاتك.

## أفضل الممارسات

- راجع التقديمات **مرتين على الأقل أسبوعيًا** للحفاظ على حماس الطلاب.
- استخدم الملاحظات كأداة تعليمية.
- احتفِ بالإدخالات المتميزة من خلال عرضها في **قصة الفصل**.` },
      { title: 'Sharing Portfolios with Families', title_ar: 'مشاركة الملفات مع العائلات', summary: 'Help families access and celebrate their child\'s portfolio highlights.', summary_ar: 'ساعد العائلات في الوصول إلى أبرز إنجازات ملف طفلهم والاحتفاء بها.', body: `## Overview

Once you approve student portfolio entries, they become available for families to view. String provides multiple ways for families to access their child's portfolio, including automatic in-app viewing and shareable links.

## Automatic Sharing with Connected Families

When a portfolio entry is approved:

1. It appears automatically in the parent's **Portfolio** tab within their child's class.
2. Connected parents and guardians receive a **push notification** (if enabled) alerting them to new portfolio content.
3. Family members can view the entry, read your feedback, and leave encouraging comments.

> **Note:** Only approved entries are visible to families. Pending or revision-requested entries remain private.

## Generating a Shareable Portfolio Link

For families who may not have the app installed, you can share a web link:

1. Go to **Portfolios** and select a student.
2. Click **Share Portfolio**.
3. Choose **Generate Link** — a unique URL will be created.
4. Copy the link and share it via email, text message, or a printed note.

### Link Settings

- **View-only access** — Recipients can view but not edit or comment.
- **Expiration** — Links can be set to expire after 7, 30, or 90 days, or remain active indefinitely.
- **Revoke access** — You can disable any shared link at any time from the portfolio settings.

## Hosting a Portfolio Showcase Event

Consider scheduling a classroom or virtual portfolio night:

1. Send a **Class Event** through String inviting families to view portfolios.
2. Prepare a slideshow of highlighted entries using the **Portfolio Highlights** export feature.
3. Allow students to present their favorite entries to their families.

### Tips

- Send a reminder message through String the day before the showcase.
- Encourage families to leave comments on entries they enjoyed — students love reading positive feedback.
- Use portfolio sharing as a conversation starter during parent-teacher conferences.

## Troubleshooting

- **Parent cannot see portfolio** — Confirm that the parent is connected to the class and that entries are approved.
- **Shared link not working** — Check if the link has expired or been revoked.`, body_ar: `## نظرة عامة

بمجرد اعتماد إدخالات ملف الطالب، تصبح متاحة للعائلات للعرض. يوفر سترينج طرقًا متعددة للعائلات للوصول إلى ملف طفلهم.

## المشاركة التلقائية مع العائلات المتصلة

عند اعتماد إدخال:

1. يظهر تلقائيًا في علامة تبويب **الملف** لدى ولي الأمر.
2. يتلقى أولياء الأمور المتصلون **إشعارًا** بالمحتوى الجديد.
3. يمكن لأفراد العائلة عرض الإدخال وقراءة ملاحظاتك وترك تعليقات.

> **ملاحظة:** الإدخالات المعتمدة فقط هي المرئية للعائلات.

## إنشاء رابط قابل للمشاركة

1. انتقل إلى **الملفات** واختر طالبًا.
2. انقر على **مشاركة الملف**.
3. اختر **إنشاء رابط** — سيتم إنشاء عنوان URL فريد.
4. انسخ الرابط وشاركه عبر البريد الإلكتروني أو الرسائل النصية.

### إعدادات الرابط

- **وصول للعرض فقط** — يمكن للمستلمين العرض فقط.
- **انتهاء الصلاحية** — يمكن تعيين الروابط لتنتهي بعد 7 أو 30 أو 90 يومًا.
- **إلغاء الوصول** — يمكنك تعطيل أي رابط مشترك في أي وقت.

### نصائح

- أرسل رسالة تذكير عبر سترينج قبل أي عرض للملفات.
- شجع العائلات على ترك تعليقات على الإدخالات — الطلاب يحبون قراءة التعليقات الإيجابية.
- استخدم مشاركة الملفات كنقطة انطلاق للمحادثات خلال اجتماعات أولياء الأمور.` },
    ],
    'sd9': [
      { title: 'Understanding Your School\'s Engagement Dashboard', title_ar: 'فهم لوحة قيادة مشاركة مدرستك', summary: 'Track teacher adoption rates, family connections, and feature usage across your school.', summary_ar: 'تتبع معدلات تبني المعلمين واتصالات العائلات واستخدام الميزات عبر مدرستك.', body: `## Overview

The Engagement Dashboard gives school leaders a real-time view of how String is being used across the entire school. From teacher adoption to family connection rates, this dashboard helps you identify what is working and where to focus your efforts.

## Accessing the Dashboard

1. Log in to String as a **School Leader** or **Admin**.
2. Navigate to **School > Engagement Dashboard** from the main menu.
3. The dashboard loads with data from the current school year by default.

## Key Metrics

### Teacher Adoption

- **Active Teachers** — Number of teachers who have logged in and used String in the past 30 days.
- **Posts & Messages Sent** — Total communication activity broken down by teacher.
- **Feature Usage** — Which features each teacher is using (messaging, class story, portfolios, points, events).

### Family Connections

- **Connected Families** — Percentage of students who have at least one connected parent or guardian.
- **Unconnected Students** — A list of students with no family members linked, so you can follow up.
- **Connection Trend** — A line chart showing how family connections have grown over time.

### Overall Engagement

- **Daily Active Users** — Number of unique users (teachers + families) using the platform each day.
- **Most Popular Features** — Ranked list of features by usage volume.
- **Engagement Score** — A composite score (0–100) reflecting overall platform health.

## Filtering and Exporting

1. Use the **Date Range** picker to view data for a specific period.
2. Filter by **Grade Level** or **Teacher** for more targeted insights.
3. Click **Export Report** to download the data as a CSV or PDF.

> **Tip:** Share the engagement report with your leadership team monthly to celebrate progress and plan next steps.`, body_ar: `## نظرة عامة

تمنح لوحة قيادة المشاركة قادة المدرسة رؤية فورية لكيفية استخدام سترينج عبر المدرسة بأكملها.

## الوصول إلى لوحة القيادة

1. سجّل الدخول إلى سترينج كـ **قائد مدرسة** أو **مسؤول**.
2. انتقل إلى **المدرسة > لوحة قيادة المشاركة**.
3. تُحمّل لوحة القيادة ببيانات العام الدراسي الحالي افتراضيًا.

## المقاييس الرئيسية

### تبني المعلمين

- **المعلمون النشطون** — عدد المعلمين الذين سجلوا الدخول واستخدموا سترينج في آخر 30 يومًا.
- **المنشورات والرسائل المرسلة** — إجمالي نشاط التواصل حسب المعلم.
- **استخدام الميزات** — الميزات التي يستخدمها كل معلم.

### اتصالات العائلات

- **العائلات المتصلة** — نسبة الطلاب الذين لديهم ولي أمر متصل واحد على الأقل.
- **الطلاب غير المتصلين** — قائمة بالطلاب الذين ليس لديهم أفراد عائلة مرتبطين.
- **اتجاه الاتصال** — رسم بياني يوضح نمو اتصالات العائلات بمرور الوقت.

## التصفية والتصدير

1. استخدم **منتقي نطاق التاريخ** لعرض بيانات فترة محددة.
2. فلتر حسب **المستوى الدراسي** أو **المعلم**.
3. انقر على **تصدير التقرير** لتنزيل البيانات كملف CSV أو PDF.` },
      { title: 'Boosting Family Engagement Schoolwide', title_ar: 'تعزيز مشاركة العائلات على مستوى المدرسة', summary: 'Proven strategies to increase parent participation and app adoption at your school.', summary_ar: 'استراتيجيات مثبتة لزيادة مشاركة أولياء الأمور وتبني التطبيق في مدرستك.', body: `## Overview

Research shows that strong family engagement improves student outcomes. String makes it easy to connect with families, but maximizing participation requires intentional strategies. This article covers proven approaches to boost family engagement across your school.

## Strategy 1: Simplify Onboarding

- Provide **printed QR code flyers** at back-to-school events, open houses, and in student folders.
- Send **text message invites** to families who have not yet connected.
- Offer **in-person sign-up stations** during school events with staff available to assist.

> **Tip:** Schools that provide sign-up support at two or more events see 40% higher connection rates.

## Strategy 2: Encourage Consistent Teacher Posting

Families stay engaged when they regularly see content:

1. Ask teachers to post to **Class Story** at least **twice per week**.
2. Encourage a mix of content: photos, announcements, reminders, and student highlights.
3. Recognize teachers who maintain high posting frequency at staff meetings.

## Strategy 3: Use Multiple Communication Channels

- **Messaging** — For private, individual communication with families.
- **Class Story** — For sharing classroom moments with the whole class.
- **School Story** — For schoolwide announcements visible to all connected families.
- **Events** — For school and class events with RSVP tracking.

## Strategy 4: Celebrate Milestones

1. Share a monthly **engagement update** on the School Story (e.g., "85% of families are now connected!").
2. Send **thank-you messages** to families who are actively engaging.
3. Highlight student work and classroom moments that families respond to positively.

## Strategy 5: Address Barriers

- **Language** — Enable String's **auto-translate** feature so messages reach families in their preferred language.
- **Technology access** — Remind families that String works on any smartphone, tablet, or computer.
- **Awareness** — Resend invitations to unconnected families each quarter.

## Measuring Progress

Use the **Engagement Dashboard** to track your progress monthly and adjust strategies as needed.`, body_ar: `## نظرة عامة

تُظهر الأبحاث أن مشاركة العائلات القوية تحسّن نتائج الطلاب. يسهّل سترينج التواصل مع العائلات، لكن تعظيم المشاركة يتطلب استراتيجيات مدروسة.

## الاستراتيجية 1: تبسيط عملية التسجيل

- وفّر **منشورات برمز QR مطبوع** في فعاليات العودة إلى المدرسة.
- أرسل **دعوات برسائل نصية** للعائلات التي لم تتصل بعد.
- قدّم **محطات تسجيل شخصية** خلال فعاليات المدرسة.

## الاستراتيجية 2: تشجيع النشر المنتظم من المعلمين

1. اطلب من المعلمين النشر في **قصة الفصل** مرتين على الأقل أسبوعيًا.
2. شجع تنوع المحتوى: صور وإعلانات وتذكيرات.
3. كرّم المعلمين الذين يحافظون على نشاط مرتفع.

## الاستراتيجية 3: استخدام قنوات تواصل متعددة

- **المراسلة** — للتواصل الخاص مع العائلات.
- **قصة الفصل** — لمشاركة لحظات الفصل مع الجميع.
- **قصة المدرسة** — للإعلانات على مستوى المدرسة.
- **الفعاليات** — لفعاليات المدرسة مع تتبع الحضور.

## الاستراتيجية 4: معالجة العوائق

- **اللغة** — فعّل ميزة **الترجمة التلقائية** في سترينج.
- **الوصول التقني** — ذكّر العائلات أن سترينج يعمل على أي هاتف أو جهاز لوحي أو كمبيوتر.
- **الوعي** — أعد إرسال الدعوات للعائلات غير المتصلة كل فصل دراسي.

## قياس التقدم

استخدم **لوحة قيادة المشاركة** لتتبع تقدمك شهريًا وتعديل الاستراتيجيات حسب الحاجة.` },
      { title: 'Running a Successful String Launch Week', title_ar: 'إدارة أسبوع إطلاق ناجح لسترينج', summary: 'A step-by-step playbook for rolling out String to your entire school community.', summary_ar: 'دليل خطوة بخطوة لنشر سترينج في مجتمع مدرستك بالكامل.', body: `## Overview

A well-planned launch week sets the tone for successful, long-term adoption of String at your school. This playbook walks you through a five-day plan to introduce String to teachers, families, and students.

## Before Launch Week

### Preparation Checklist

- Ensure all teacher accounts are created and classes are set up.
- Prepare **printed QR code flyers** for each class to send home with students.
- Train teachers on basic features: messaging, class story, and events.
- Draft a welcome message template that teachers can customize and send.
- Set up your **School Story** with a welcome post introducing String.

## Day-by-Day Plan

### Day 1: Teacher Kickoff

1. Hold a brief **staff meeting** (15–20 minutes) to review expectations.
2. Distribute a quick-start guide to each teacher.
3. Have every teacher send their first **Class Story** post by end of day.

### Day 2: Family Invitations

1. Send home **QR code flyers** with every student.
2. Teachers send **text and email invitations** through String.
3. Post a welcome announcement on the **School Story**.

### Day 3: First Messages

1. Teachers send a **personal welcome message** to each connected family.
2. Encourage families to reply to test two-way communication.
3. Post a fun classroom photo to **Class Story**.

### Day 4: Engagement Push

1. Send a **reminder invitation** to families who have not yet connected.
2. Teachers post a second **Class Story** update (e.g., student artwork, a classroom activity).
3. School leaders share an update on the **School Story** celebrating early connection numbers.

### Day 5: Celebrate and Review

1. Announce your school's **connection rate** on the School Story (e.g., "72% of families connected in just one week!").
2. Recognize top-performing classes with the highest connection rates.
3. Collect teacher feedback and plan follow-up support for the coming weeks.

## After Launch Week

- Continue sending **weekly reminders** to unconnected families for the first month.
- Schedule a **30-day check-in** to review the Engagement Dashboard and address gaps.
- Celebrate reaching key milestones (80%, 90%, 95% family connections).

> **Tip:** Schools that maintain momentum in the first 30 days see the highest long-term engagement rates.`, body_ar: `## نظرة عامة

أسبوع الإطلاق المخطط جيدًا يحدد نغمة التبني الناجح وطويل الأمد لسترينج في مدرستك. يرشدك هذا الدليل خلال خطة من خمسة أيام.

## قبل أسبوع الإطلاق

- تأكد من إنشاء جميع حسابات المعلمين وإعداد الفصول.
- حضّر **منشورات برمز QR مطبوع** لكل فصل.
- درّب المعلمين على الميزات الأساسية.
- صمم قالب رسالة ترحيب يمكن للمعلمين تخصيصه.

## الخطة اليومية

### اليوم 1: انطلاقة المعلمين

1. عقد اجتماع قصير للموظفين لمراجعة التوقعات.
2. توزيع دليل البدء السريع لكل معلم.
3. كل معلم ينشر أول منشور في **قصة الفصل**.

### اليوم 2: دعوات العائلات

1. إرسال منشورات رمز QR مع كل طالب.
2. المعلمون يرسلون دعوات عبر الرسائل النصية والبريد الإلكتروني.
3. نشر إعلان ترحيبي على **قصة المدرسة**.

### اليوم 3: الرسائل الأولى

1. المعلمون يرسلون **رسالة ترحيب شخصية** لكل عائلة متصلة.
2. تشجيع العائلات على الرد لاختبار التواصل ثنائي الاتجاه.

### اليوم 4: دفعة المشاركة

1. إرسال **تذكير بالدعوة** للعائلات التي لم تتصل بعد.
2. المعلمون ينشرون تحديثًا ثانيًا في **قصة الفصل**.

### اليوم 5: الاحتفال والمراجعة

1. الإعلان عن **معدل الاتصال** على قصة المدرسة.
2. تكريم الفصول الأفضل أداءً.
3. جمع ملاحظات المعلمين والتخطيط للدعم المتابع.

> **نصيحة:** المدارس التي تحافظ على الزخم في أول 30 يومًا تحقق أعلى معدلات مشاركة طويلة الأمد.` },
    ],
    's1': [
      { title: 'Basics Overview', title_ar: 'نظرة عامة على الأساسيات', summary: 'An introduction to String, its core features, supported platforms, and user roles.', summary_ar: 'مقدمة عن سترينج وميزاته الأساسية والمنصات المدعومة وأدوار المستخدمين.', body: `## What is String?

String is a communication and engagement platform designed for K-12 schools. It connects teachers, families, and students through messaging, class stories, digital portfolios, behavior tracking, and reporting tools.

## Core Features

- **Messaging** — Send and receive messages between teachers and families with built-in translation.
- **Class Story** — Share photos, videos, and moments from the classroom.
- **Behavior Points** — Track and reward positive student behavior with customizable categories.
- **Digital Portfolios** — Showcase student work and growth over time.
- **Events** — Create class and school events with RSVP tracking.
- **Reports** — Generate progress and behavior reports for conferences and families.

## Supported Platforms

| Platform | How to Access |
|----------|---------------|
| **Web** | Visit [app.string.education](https://app.string.education) from any modern browser. |
| **iOS** | Download the String app from the Apple App Store. |
| **Android** | Download the String app from the Google Play Store. |

## User Roles

| Role | Description |
|------|-------------|
| **Teacher** | Creates classes, sends messages, manages points and portfolios. |
| **Parent/Guardian** | Receives updates, views reports, and communicates with teachers. |
| **Student** | Accesses assignments, submits portfolio work, and views points. |
| **School Leader** | Manages school-wide settings, approves teachers, and views analytics. |
| **District Admin** | Oversees multiple schools and accesses district-level reports. |

## Getting Help

1. Browse articles in this Help Center using the category navigation.
2. Use the **search bar** at the top to find specific topics.
3. Click **Submit a Request** to contact our support team.

> **Note:** Support requests are typically resolved within 24–48 business hours.`, body_ar: `## ما هو سترينج؟

سترينج هو منصة تواصل ومشاركة مصممة لمدارس التعليم الأساسي والثانوي. يربط المعلمين والعائلات والطلاب من خلال المراسلة وقصص الفصل والملفات الرقمية وتتبع السلوك وأدوات التقارير.

## الميزات الأساسية

- **المراسلة** — إرسال واستقبال الرسائل بين المعلمين والعائلات مع ترجمة مدمجة.
- **قصة الفصل** — مشاركة الصور والفيديو واللحظات من الفصل الدراسي.
- **نقاط السلوك** — تتبع ومكافأة السلوك الإيجابي للطلاب.
- **الملفات الرقمية** — عرض أعمال الطلاب ونموهم بمرور الوقت.
- **الفعاليات** — إنشاء فعاليات مع تتبع الحضور.
- **التقارير** — إنشاء تقارير التقدم والسلوك.

## المنصات المدعومة

| المنصة | طريقة الوصول |
|--------|-------------|
| **الويب** | قم بزيارة app.string.education من أي متصفح حديث. |
| **iOS** | حمّل تطبيق سترينج من متجر Apple. |
| **أندرويد** | حمّل تطبيق سترينج من متجر Google Play. |

## الحصول على المساعدة

1. تصفح المقالات في مركز المساعدة.
2. استخدم **شريط البحث** للعثور على مواضيع محددة.
3. انقر على **تقديم طلب** للتواصل مع فريق الدعم.` },
      { title: 'Create a Parent Account', title_ar: 'إنشاء حساب ولي أمر', summary: 'Step-by-step instructions for parents and guardians to create a String account and join their child\'s class.', summary_ar: 'تعليمات خطوة بخطوة لأولياء الأمور لإنشاء حساب على سترينج والانضمام إلى فصل طفلهم.', body: `## Before You Begin

To create a parent account, you will need one of the following from your child's teacher:
- A **class invite link** (sent via email or text)
- A **class code** (a short alphanumeric code)
- A **printed QR code** (often sent home as a flyer)

## From the Web

1. Go to [app.string.education](https://app.string.education).
2. Click **Sign Up** in the top-right corner.
3. Select **I'm a Parent**.
4. Enter your **full name**, **email address**, and create a **password**.
5. Click **Create Account**.
6. Enter the **class code** provided by your child's teacher, or paste the invite link.
7. Verify your email address by clicking the link sent to your inbox.

## On iOS

1. Open the **App Store** and search for **String**.
2. Tap **Get** to download and install the app.
3. Open String and tap **Sign Up**.
4. Select **Parent** as your role.
5. Fill in your name, email, and password.
6. Tap **Create Account**.
7. Enter the class code or scan the **QR code** from your child's teacher.

## On Android

1. Open **Google Play Store** and search for **String**.
2. Tap **Install** to download the app.
3. Open String and tap **Sign Up**.
4. Select **Parent** as your role.
5. Fill in your name, email, and password.
6. Tap **Create Account**.
7. Enter the class code or scan the **QR code** from your child's teacher.

## Notes

- You can connect to multiple classes from the same account.
- If you do not have a class code, contact your child's teacher directly.
- Google Sign-In is supported as an alternative to email registration.

## Troubleshooting

- **"Invalid class code"** — Double-check the code for typos. Codes are case-sensitive.
- **Email not received** — Check your spam/junk folder. Add noreply@string.education to your contacts.
- **Already have an account** — Tap **Log In** instead and use your existing credentials.`, body_ar: `## قبل البدء

لإنشاء حساب ولي أمر، ستحتاج إلى أحد ما يلي من معلم طفلك:
- **رابط دعوة الفصل** (يُرسل عبر البريد الإلكتروني أو الرسائل النصية)
- **رمز الفصل** (رمز أبجدي رقمي قصير)
- **رمز QR مطبوع** (يُرسل عادةً كمنشور إلى المنزل)

## من الويب

1. انتقل إلى app.string.education.
2. انقر على **تسجيل** في الزاوية العلوية.
3. اختر **أنا ولي أمر**.
4. أدخل **اسمك الكامل** و**بريدك الإلكتروني** وأنشئ **كلمة مرور**.
5. انقر على **إنشاء حساب**.
6. أدخل **رمز الفصل** أو الصق رابط الدعوة.
7. تحقق من بريدك الإلكتروني بالنقر على الرابط المرسل.

## على iOS

1. افتح **متجر التطبيقات** وابحث عن **String**.
2. اضغط على **تنزيل** لتثبيت التطبيق.
3. افتح التطبيق واضغط على **تسجيل**.
4. اختر **ولي أمر** كدورك.
5. أدخل بياناتك وأنشئ كلمة مرور.
6. اضغط على **إنشاء حساب**.
7. أدخل رمز الفصل أو امسح **رمز QR**.

## على أندرويد

1. افتح **متجر Google Play** وابحث عن **String**.
2. اضغط على **تثبيت**.
3. افتح التطبيق واضغط على **تسجيل**.
4. اختر **ولي أمر** كدورك.
5. أدخل بياناتك وأنشئ كلمة مرور.
6. اضغط على **إنشاء حساب**.
7. أدخل رمز الفصل أو امسح **رمز QR**.

## ملاحظات

- يمكنك الاتصال بعدة فصول من نفس الحساب.
- إذا لم يكن لديك رمز فصل، تواصل مع معلم طفلك مباشرة.

## استكشاف الأخطاء

- **"رمز فصل غير صالح"** — تحقق من الرمز. الرموز حساسة لحالة الأحرف.
- **لم يصل البريد الإلكتروني** — تحقق من مجلد البريد غير المرغوب فيه.` },
      { title: 'Create a Student Account', title_ar: 'إنشاء حساب طالب', summary: 'How students can sign up for String using a class code, QR code, or teacher invitation.', summary_ar: 'كيف يمكن للطلاب التسجيل في سترينج باستخدام رمز الفصل أو رمز QR أو دعوة المعلم.', body: `## Overview

Student accounts are typically set up by teachers or school administrators. However, students may also create their own accounts using a class code or invitation link provided by their teacher.

## From the Web

1. Go to [app.string.education](https://app.string.education).
2. Click **Sign Up** and select **I'm a Student**.
3. Enter the **class code** provided by your teacher.
4. Create a **username** and **password** (or sign in with your school Google account).
5. Click **Join Class**.

## On iOS / Android

1. Download the **String** app from the App Store or Google Play.
2. Tap **Sign Up** and select **Student**.
3. Enter the **class code** shown on your teacher's screen or printed handout.
4. Create your username and password.
5. Tap **Join Class** to enter your classroom.

## Using a QR Code

1. Open the String app on your device.
2. Tap **Scan QR Code** on the sign-up screen.
3. Point your camera at the QR code displayed by your teacher.
4. Your account will be created and linked to the class automatically.

## Notes

- Students under 13 may require parental consent depending on your school's policy.
- Your teacher controls which features are available on your student account.
- If your school uses Clever or Google Classroom, you may sign in with those credentials instead.

## Troubleshooting

- **Class code not working** — Ask your teacher to verify the code is still active.
- **Cannot scan QR code** — Ensure your camera permissions are enabled in device settings.
- **Forgot username or password** — Ask your teacher to reset your credentials.`, body_ar: `## نظرة عامة

عادةً ما يتم إعداد حسابات الطلاب من قبل المعلمين أو مديري المدارس. ومع ذلك، يمكن للطلاب أيضًا إنشاء حساباتهم باستخدام رمز الفصل أو رابط الدعوة.

## من الويب

1. انتقل إلى app.string.education.
2. انقر على **تسجيل** واختر **أنا طالب**.
3. أدخل **رمز الفصل** الذي قدمه معلمك.
4. أنشئ **اسم مستخدم** و**كلمة مرور**.
5. انقر على **انضمام إلى الفصل**.

## على iOS / أندرويد

1. حمّل تطبيق **String** من متجر التطبيقات.
2. اضغط على **تسجيل** واختر **طالب**.
3. أدخل **رمز الفصل**.
4. أنشئ اسم المستخدم وكلمة المرور.
5. اضغط على **انضمام إلى الفصل**.

## باستخدام رمز QR

1. افتح تطبيق سترينج.
2. اضغط على **مسح رمز QR** في شاشة التسجيل.
3. وجّه الكاميرا نحو رمز QR الخاص بمعلمك.
4. سيتم إنشاء حسابك وربطه بالفصل تلقائيًا.

## ملاحظات

- قد يحتاج الطلاب دون 13 عامًا إلى موافقة ولي الأمر.
- يتحكم معلمك في الميزات المتاحة لحسابك.

## استكشاف الأخطاء

- **رمز الفصل لا يعمل** — اطلب من معلمك التحقق من أن الرمز لا يزال نشطًا.
- **لا يمكن مسح رمز QR** — تأكد من تفعيل صلاحيات الكاميرا.` },
      { title: 'Create a Teacher Account', title_ar: 'إنشاء حساب معلم', summary: 'Instructions for teachers to register on String, verify their school, and set up their first class.', summary_ar: 'تعليمات للمعلمين للتسجيل في سترينج والتحقق من مدرستهم وإعداد أول فصل.', body: `## Overview

Teachers can sign up for String for free. After creating your account, you will need to verify your school affiliation before you can create classes and invite families.

## From the Web

1. Go to [app.string.education](https://app.string.education) and click **Sign Up**.
2. Select **I'm a Teacher**.
3. Enter your **full name**, **school email address**, and create a **password**.
4. Click **Create Account**.
5. Search for your **school** by name or zip code and select it from the results.
6. If your school is not listed, click **Add My School** and enter the school details.
7. Wait for your school leader to **approve** your account (you will receive an email notification).

## On iOS / Android

1. Download the **String** app.
2. Tap **Sign Up** and select **Teacher**.
3. Enter your name, school email, and password.
4. Search for and select your school.
5. Tap **Create Account** and wait for school approval.

## After Approval

Once approved by your school leader:
1. Log in to your account.
2. Click **Create a Class** from your dashboard.
3. Enter a **class name** (e.g., "Ms. Johnson — 3rd Grade").
4. Choose a **grade level** and **subject** (optional).
5. Click **Create** to generate your class page and unique class code.

## Notes

- You must use a valid school email address (personal email domains like gmail.com may not be accepted for auto-verification).
- Google SSO is supported if your school uses Google Workspace for Education.
- You can create multiple classes under one teacher account.

## Troubleshooting

- **School not found** — Try searching by zip code instead of school name.
- **Approval pending for more than 48 hours** — Contact your school administrator to approve your request.
- **Cannot use school email** — Reach out to support via **Submit a Request**.`, body_ar: `## نظرة عامة

يمكن للمعلمين التسجيل في سترينج مجانًا. بعد إنشاء حسابك، ستحتاج إلى التحقق من انتمائك المدرسي قبل إنشاء الفصول ودعوة العائلات.

## من الويب

1. انتقل إلى app.string.education وانقر على **تسجيل**.
2. اختر **أنا معلم**.
3. أدخل **اسمك الكامل** و**بريدك الإلكتروني المدرسي** وأنشئ **كلمة مرور**.
4. انقر على **إنشاء حساب**.
5. ابحث عن **مدرستك** بالاسم أو الرمز البريدي.
6. إذا لم تكن مدرستك مدرجة، انقر على **إضافة مدرستي**.
7. انتظر **موافقة** قائد مدرستك.

## على iOS / أندرويد

1. حمّل تطبيق **String**.
2. اضغط على **تسجيل** واختر **معلم**.
3. أدخل بياناتك وأنشئ كلمة مرور.
4. ابحث عن مدرستك واخترها.
5. اضغط على **إنشاء حساب** وانتظر الموافقة.

## بعد الموافقة

1. سجّل الدخول إلى حسابك.
2. انقر على **إنشاء فصل** من لوحة القيادة.
3. أدخل **اسم الفصل** (مثلاً "أ. أحمد — الصف الثالث").
4. اختر **المستوى الدراسي** و**المادة**.
5. انقر على **إنشاء**.

## ملاحظات

- يجب استخدام بريد إلكتروني مدرسي صالح.
- تسجيل الدخول عبر Google مدعوم.

## استكشاف الأخطاء

- **المدرسة غير موجودة** — جرب البحث بالرمز البريدي.
- **الموافقة معلقة** — تواصل مع مدير مدرستك.` },
      { title: 'Log In & Password Reset', title_ar: 'تسجيل الدخول وإعادة تعيين كلمة المرور', summary: 'How to log in to your String account and reset your password if you have forgotten it.', summary_ar: 'كيفية تسجيل الدخول إلى حسابك على سترينج وإعادة تعيين كلمة المرور إذا نسيتها.', body: `## Log In

### From the Web

1. Go to [app.string.education](https://app.string.education).
2. Click **Log In**.
3. Enter your **email address** and **password**.
4. Click **Sign In**.

### On iOS / Android

1. Open the **String** app.
2. Tap **Log In**.
3. Enter your email and password.
4. Tap **Sign In**.

### Using Google Sign-In

1. On the login screen, tap **Sign in with Google**.
2. Select the Google account associated with your String profile.
3. You will be signed in automatically.

## Reset Your Password

If you have forgotten your password, follow these steps:

1. On the login screen, tap **Forgot Password?**.
2. Enter the **email address** associated with your account.
3. Tap **Send Reset Link**.
4. Check your inbox for an email from String.
5. Click the **Reset Password** link in the email.
6. Enter a **new password** (minimum 8 characters, including one number and one uppercase letter).
7. Click **Save** and log in with your new password.

## Notes

- Password reset links expire after **24 hours**.
- If you use Google Sign-In, your password is managed by Google, not String.
- Students who forget their password should ask their teacher to reset it.

## Troubleshooting

- **"Incorrect password"** — Verify Caps Lock is off and try again.
- **Reset email not received** — Check spam/junk folders. Try requesting a new link.
- **Account locked** — After 5 failed attempts, your account is locked for 15 minutes.`, body_ar: `## تسجيل الدخول

### من الويب

1. انتقل إلى app.string.education.
2. انقر على **تسجيل الدخول**.
3. أدخل **بريدك الإلكتروني** و**كلمة المرور**.
4. انقر على **تسجيل الدخول**.

### على iOS / أندرويد

1. افتح تطبيق **String**.
2. اضغط على **تسجيل الدخول**.
3. أدخل بريدك الإلكتروني وكلمة المرور.
4. اضغط على **تسجيل الدخول**.

## إعادة تعيين كلمة المرور

1. في شاشة تسجيل الدخول، اضغط على **نسيت كلمة المرور؟**.
2. أدخل **البريد الإلكتروني** المرتبط بحسابك.
3. اضغط على **إرسال رابط إعادة التعيين**.
4. تحقق من بريدك الوارد.
5. انقر على رابط **إعادة تعيين كلمة المرور**.
6. أدخل **كلمة مرور جديدة** (8 أحرف على الأقل).
7. انقر على **حفظ** وسجّل الدخول.

## ملاحظات

- تنتهي صلاحية روابط إعادة التعيين بعد **24 ساعة**.
- إذا كنت تستخدم تسجيل الدخول عبر Google، تُدار كلمة مرورك بواسطة Google.

## استكشاف الأخطاء

- **"كلمة مرور غير صحيحة"** — تحقق من أن Caps Lock مغلق.
- **لم يصل بريد إعادة التعيين** — تحقق من مجلد البريد غير المرغوب فيه.` },
      { title: 'Connect to a Class', title_ar: 'الاتصال بفصل', summary: 'Learn how to join a class on String using a class code, QR code, or invitation link from your teacher.', summary_ar: 'تعلم كيفية الانضمام إلى فصل على سترينج باستخدام رمز الفصل أو رمز QR أو رابط الدعوة.', body: `## Overview

After creating your account, you need to connect to at least one class to start receiving updates. There are three ways to join a class.

## Method 1: Class Code

1. Log in to your String account.
2. From the dashboard, tap **Join a Class** (or the **+** icon).
3. Enter the **class code** provided by your teacher.
4. Tap **Join**.
5. You will see the class appear in your dashboard.

## Method 2: QR Code

1. Log in to the String app on your mobile device.
2. Tap **Join a Class** and select **Scan QR Code**.
3. Point your camera at the QR code (printed flyer or displayed on screen).
4. The class will be added to your account automatically.

## Method 3: Invitation Link

1. Open the invitation link sent to you via **email** or **text message**.
2. If you already have an account, tap **Log In** to connect.
3. If you are new, tap **Sign Up** — the class will be linked during registration.

## Adding Multiple Classes

You can be connected to multiple classes simultaneously:
1. From your dashboard, tap the **+** icon.
2. Enter another class code or scan a QR code.
3. Switch between classes using the **class switcher** in the top navigation.

## Notes

- Class codes are case-sensitive. Enter them exactly as provided.
- Some teachers may require approval before you can join their class.
- You can leave a class at any time from **Settings > My Classes**.

## Troubleshooting

- **"Class not found"** — Verify the code with your teacher. It may have expired.
- **Already in the class** — If you see a "duplicate" error, check your class list.`, body_ar: `## نظرة عامة

بعد إنشاء حسابك، تحتاج إلى الاتصال بفصل واحد على الأقل لبدء تلقي التحديثات.

## الطريقة 1: رمز الفصل

1. سجّل الدخول إلى حسابك.
2. من لوحة القيادة، اضغط على **انضمام إلى فصل**.
3. أدخل **رمز الفصل** الذي قدمه معلمك.
4. اضغط على **انضمام**.

## الطريقة 2: رمز QR

1. سجّل الدخول إلى تطبيق سترينج.
2. اضغط على **انضمام إلى فصل** واختر **مسح رمز QR**.
3. وجّه الكاميرا نحو رمز QR.
4. سيُضاف الفصل تلقائيًا.

## الطريقة 3: رابط الدعوة

1. افتح رابط الدعوة المرسل عبر البريد أو الرسائل النصية.
2. سجّل الدخول أو أنشئ حسابًا جديدًا.

## إضافة فصول متعددة

1. من لوحة القيادة، اضغط على أيقونة **+**.
2. أدخل رمز فصل آخر أو امسح رمز QR.
3. تنقل بين الفصول باستخدام **محوّل الفصول** في الأعلى.

## ملاحظات

- رموز الفصل حساسة لحالة الأحرف.
- قد يتطلب بعض المعلمين الموافقة قبل الانضمام.` },
      { title: 'Language & Profile Settings', title_ar: 'إعدادات اللغة والملف الشخصي', summary: 'Customize your display language, time zone, profile picture, and notification preferences.', summary_ar: 'خصص لغة العرض والمنطقة الزمنية وصورة الملف الشخصي وتفضيلات الإشعارات.', body: `## Change Your Display Language

String supports over 30 languages. All interface text and notifications will appear in your selected language.

### From the Web

1. Click your **profile icon** in the top-right corner.
2. Select **Settings**.
3. Under **Language**, choose your preferred language from the dropdown.
4. Click **Save**. The interface will update immediately.

### On iOS / Android

1. Tap your **profile icon** in the bottom navigation.
2. Tap **Settings > Language**.
3. Select your preferred language.
4. The app will refresh with the new language applied.

## Update Your Profile Picture

1. Go to **Settings > Profile**.
2. Tap the **camera icon** on your current profile picture.
3. Choose **Take Photo** or **Upload from Library**.
4. Crop the image if needed and tap **Save**.

## Update Your Display Name

1. Go to **Settings > Profile**.
2. Tap the **Name** field.
3. Enter your updated name and tap **Save**.

> **Note:** Your display name is visible to teachers and other parents in your class. Use your real name for easy identification.

## Set Your Time Zone

1. Go to **Settings > Preferences**.
2. Under **Time Zone**, select your region.
3. Click **Save**. All scheduled messages and event times will display in your local time.

## Notes

- Language changes apply to the String interface only. Messages from teachers will appear in the language they were written in (use the **Translate** button to translate them).
- Profile changes are reflected across all your connected classes.

## Troubleshooting

- **Language not available** — String adds new languages regularly. Submit a request to suggest a new one.
- **Profile picture not saving** — Ensure the image is under 5 MB and in JPG or PNG format.`, body_ar: `## تغيير لغة العرض

يدعم سترينج أكثر من 30 لغة.

### من الويب

1. انقر على **أيقونة ملفك الشخصي** في الزاوية العلوية.
2. اختر **الإعدادات**.
3. تحت **اللغة**، اختر لغتك المفضلة.
4. انقر على **حفظ**.

### على iOS / أندرويد

1. اضغط على **أيقونة ملفك الشخصي**.
2. اضغط على **الإعدادات > اللغة**.
3. اختر لغتك المفضلة.

## تحديث صورة الملف الشخصي

1. انتقل إلى **الإعدادات > الملف الشخصي**.
2. اضغط على **أيقونة الكاميرا**.
3. اختر **التقاط صورة** أو **رفع من المكتبة**.
4. قص الصورة إذا لزم الأمر واضغط على **حفظ**.

## تحديث اسم العرض

1. انتقل إلى **الإعدادات > الملف الشخصي**.
2. اضغط على حقل **الاسم**.
3. أدخل اسمك المحدّث واضغط على **حفظ**.

## ضبط المنطقة الزمنية

1. انتقل إلى **الإعدادات > التفضيلات**.
2. تحت **المنطقة الزمنية**، اختر منطقتك.
3. انقر على **حفظ**.

## ملاحظات

- تنطبق تغييرات اللغة على واجهة سترينج فقط. استخدم زر **ترجمة** لترجمة الرسائل.
- تنعكس تغييرات الملف الشخصي عبر جميع فصولك.` },
    ],
    's_acct': [
      { title: 'Edit Profile Information', title_ar: 'تعديل معلومات الملف الشخصي', summary: 'Update your display name, profile picture, and personal bio on String.', summary_ar: 'حدّث اسم العرض وصورة الملف الشخصي والسيرة الذاتية على سترينج.', body: `## Overview

Your profile information is visible to teachers and families in your connected classes. Keeping it up to date helps others identify you easily.

## From the Web

1. Click your **profile icon** in the top-right corner.
2. Select **My Profile**.
3. Click the **Edit** button next to your name or photo.
4. Update the following fields:
   - **Display Name** — Your full name as it appears to other users.
   - **Profile Picture** — Click the camera icon to upload a new photo (JPG/PNG, max 5 MB).
   - **Bio** — A short description (optional, visible to teachers in your class).
5. Click **Save Changes**.

## On iOS / Android

1. Tap your **profile icon** in the bottom navigation bar.
2. Tap **Edit Profile**.
3. Update your name, photo, or bio.
4. Tap **Save**.

## Notes

- Name changes may take a few minutes to reflect across all classes.
- Profile pictures are cropped to a circle. Use a centered headshot for best results.
- Your email address cannot be changed from the profile screen. See **Change Email Address** for instructions.

## Troubleshooting

- **Photo not uploading** — Ensure the file is under 5 MB and in JPG or PNG format.
- **Name not updating** — Log out and log back in to force a refresh.`, body_ar: `## نظرة عامة

معلومات ملفك الشخصي مرئية للمعلمين والعائلات في فصولك المتصلة.

## من الويب

1. انقر على **أيقونة ملفك الشخصي** في الزاوية العلوية.
2. اختر **ملفي الشخصي**.
3. انقر على **تعديل** بجانب اسمك أو صورتك.
4. حدّث الحقول التالية:
   - **اسم العرض** — اسمك الكامل.
   - **صورة الملف** — انقر على أيقونة الكاميرا لرفع صورة جديدة.
   - **السيرة الذاتية** — وصف قصير (اختياري).
5. انقر على **حفظ التغييرات**.

## على iOS / أندرويد

1. اضغط على **أيقونة ملفك الشخصي**.
2. اضغط على **تعديل الملف الشخصي**.
3. حدّث بياناتك واضغط على **حفظ**.

## ملاحظات

- قد تستغرق تغييرات الاسم بضع دقائق لتنعكس.
- يتم قص صور الملف الشخصي بشكل دائري.` },
      { title: 'Change Email Address', title_ar: 'تغيير عنوان البريد الإلكتروني', summary: 'How to update the email address associated with your String account.', summary_ar: 'كيفية تحديث عنوان البريد الإلكتروني المرتبط بحسابك على سترينج.', body: `## Overview

Your email address is used for login and all account notifications. Changing it requires verification of the new email.

## From the Web

1. Click your **profile icon** and go to **Settings**.
2. Click the **Account** tab.
3. Under **Email Address**, click **Change**.
4. Enter your **new email address**.
5. Enter your **current password** to confirm.
6. Click **Update Email**.
7. Check your **new email inbox** for a verification link.
8. Click the verification link to complete the change.

## On iOS / Android

1. Tap your **profile icon** > **Settings** > **Account**.
2. Tap **Email Address**.
3. Enter the new email and your current password.
4. Tap **Update**.
5. Verify the new email from your inbox.

## Notes

- You will be logged out of all devices after the change is confirmed.
- Your old email will receive a notification about the change for security purposes.
- If you use Google Sign-In, you cannot change your email through String. Update it in your Google Account instead.

## Troubleshooting

- **Verification email not received** — Check spam/junk folders. Wait 5 minutes and try again.
- **"Email already in use"** — Another account may be using that address. Contact support.
- **Cannot remember current password** — Reset your password first, then change your email.`, body_ar: `## نظرة عامة

يُستخدم بريدك الإلكتروني لتسجيل الدخول وجميع إشعارات الحساب. يتطلب تغييره التحقق من البريد الجديد.

## من الويب

1. انقر على **أيقونة ملفك الشخصي** وانتقل إلى **الإعدادات**.
2. انقر على علامة تبويب **الحساب**.
3. تحت **عنوان البريد الإلكتروني**، انقر على **تغيير**.
4. أدخل **بريدك الإلكتروني الجديد**.
5. أدخل **كلمة مرورك الحالية** للتأكيد.
6. انقر على **تحديث البريد الإلكتروني**.
7. تحقق من صندوق بريدك الجديد واضغط على رابط التحقق.

## على iOS / أندرويد

1. اضغط على **أيقونة ملفك الشخصي** > **الإعدادات** > **الحساب**.
2. اضغط على **البريد الإلكتروني**.
3. أدخل البريد الجديد وكلمة مرورك الحالية.
4. اضغط على **تحديث**.
5. تحقق من البريد الجديد.

## ملاحظات

- سيتم تسجيل خروجك من جميع الأجهزة بعد التأكيد.
- سيتلقى بريدك القديم إشعارًا بالتغيير لأغراض أمنية.` },
      { title: 'Reset Password', title_ar: 'إعادة تعيين كلمة المرور', summary: 'Step-by-step guide to resetting your password from the login screen or within your account settings.', summary_ar: 'دليل خطوة بخطوة لإعادة تعيين كلمة المرور من شاشة تسجيل الدخول أو من إعدادات حسابك.', body: `## Reset from the Login Screen

If you cannot log in:

1. Go to the String login page.
2. Click **Forgot Password?**.
3. Enter the **email address** registered on your account.
4. Click **Send Reset Link**.
5. Open the email from String and click **Reset Password**.
6. Enter your **new password** (minimum 8 characters, must include a number).
7. Click **Save** and log in with your new password.

## Reset from Account Settings

If you are already logged in and want to change your password:

### From the Web

1. Click your **profile icon** > **Settings** > **Account**.
2. Click **Change Password**.
3. Enter your **current password**.
4. Enter and confirm your **new password**.
5. Click **Update Password**.

### On iOS / Android

1. Tap **Profile** > **Settings** > **Account**.
2. Tap **Change Password**.
3. Enter your current and new passwords.
4. Tap **Save**.

## Notes

- Password reset links expire after **24 hours**.
- After 5 failed login attempts, your account is temporarily locked for 15 minutes.
- If you use Google Sign-In, manage your password through Google.

## Troubleshooting

- **Reset link expired** — Request a new link from the login page.
- **"Password too weak"** — Use at least 8 characters with a mix of letters and numbers.`, body_ar: `## إعادة التعيين من شاشة تسجيل الدخول

1. انتقل إلى صفحة تسجيل الدخول.
2. انقر على **نسيت كلمة المرور؟**.
3. أدخل **بريدك الإلكتروني**.
4. انقر على **إرسال رابط إعادة التعيين**.
5. افتح البريد من سترينج وانقر على **إعادة تعيين كلمة المرور**.
6. أدخل **كلمة مرور جديدة** (8 أحرف على الأقل).
7. انقر على **حفظ**.

## إعادة التعيين من إعدادات الحساب

### من الويب

1. انقر على **أيقونة ملفك الشخصي** > **الإعدادات** > **الحساب**.
2. انقر على **تغيير كلمة المرور**.
3. أدخل كلمة مرورك الحالية والجديدة.
4. انقر على **تحديث كلمة المرور**.

### على iOS / أندرويد

1. اضغط على **الملف الشخصي** > **الإعدادات** > **الحساب**.
2. اضغط على **تغيير كلمة المرور**.
3. أدخل كلمات المرور واضغط على **حفظ**.

## ملاحظات

- تنتهي صلاحية روابط إعادة التعيين بعد **24 ساعة**.
- بعد 5 محاولات فاشلة، يُقفل الحساب مؤقتًا لمدة 15 دقيقة.` },
      { title: 'Manage Notifications', title_ar: 'إدارة الإشعارات', summary: 'Configure which notifications you receive via push, email, and SMS.', summary_ar: 'هيّئ الإشعارات التي تتلقاها عبر الدفع والبريد الإلكتروني والرسائل النصية.', body: `## Overview

String sends notifications to keep you informed about messages, events, points, and class updates. You can customize which notifications you receive and how you receive them.

## From the Web

1. Click your **profile icon** > **Settings**.
2. Select the **Notifications** tab.
3. Toggle notifications on or off for each category:
   - **Messages** — New messages from teachers or parents.
   - **Class Story** — New posts and comments.
   - **Events** — Event reminders and RSVP updates.
   - **Points** — When your child receives points (parents) or when you receive points (students).
   - **Reports** — Weekly summary reports.
4. Under **Delivery Method**, choose:
   - **Push Notifications** (mobile app)
   - **Email**
   - **SMS** (if your phone number is on file)
5. Click **Save Preferences**.

## On iOS / Android

1. Tap **Profile** > **Settings** > **Notifications**.
2. Toggle each notification type on or off.
3. Select your preferred delivery method.
4. Tap **Save**.

## Quiet Hours

To pause all notifications during specific hours:
1. Go to **Settings > Notifications > Quiet Hours**.
2. Enable **Quiet Hours** and set a **start** and **end** time.
3. During quiet hours, notifications are silenced but still delivered.

## Notes

- Email notifications are sent as a digest (summary) once per day by default.
- Push notifications require the String app to be installed and notification permissions enabled on your device.
- SMS notifications may incur carrier charges depending on your mobile plan.

## Troubleshooting

- **Not receiving push notifications** — Check your device settings to ensure notifications are enabled for String.
- **Too many emails** — Switch to daily digest mode under notification settings.`, body_ar: `## نظرة عامة

يرسل سترينج إشعارات لإبقائك على اطلاع بالرسائل والفعاليات والنقاط والتحديثات.

## من الويب

1. انقر على **أيقونة ملفك الشخصي** > **الإعدادات**.
2. اختر علامة تبويب **الإشعارات**.
3. فعّل أو عطّل الإشعارات لكل فئة:
   - **الرسائل** — رسائل جديدة من المعلمين أو أولياء الأمور.
   - **قصة الفصل** — منشورات وتعليقات جديدة.
   - **الفعاليات** — تذكيرات الفعاليات.
   - **النقاط** — عند تلقي النقاط.
   - **التقارير** — تقارير ملخصة أسبوعية.
4. تحت **طريقة التسليم**، اختر: دفع، بريد إلكتروني، أو رسائل نصية.
5. انقر على **حفظ التفضيلات**.

## على iOS / أندرويد

1. اضغط على **الملف الشخصي** > **الإعدادات** > **الإشعارات**.
2. فعّل أو عطّل كل نوع إشعار.
3. اضغط على **حفظ**.

## ساعات الهدوء

1. انتقل إلى **الإعدادات > الإشعارات > ساعات الهدوء**.
2. فعّل **ساعات الهدوء** وحدد الوقت.
3. خلال ساعات الهدوء، تُكتم الإشعارات لكنها تظل مُسلّمة.

## ملاحظات

- تُرسل إشعارات البريد الإلكتروني كملخص يومي بشكل افتراضي.
- تتطلب إشعارات الدفع تثبيت التطبيق وتفعيل الصلاحيات.` },
      { title: 'Delete Account', title_ar: 'حذف الحساب', summary: 'How to permanently delete your String account and understand data retention policies.', summary_ar: 'كيفية حذف حسابك على سترينج نهائيًا وفهم سياسات الاحتفاظ بالبيانات.', body: `## Before You Delete

Deleting your account is permanent. Before proceeding, please note:

- All your messages, profile data, and class connections will be removed.
- If you are a teacher, your classes will be archived and co-teachers will become the primary owner.
- If you are a parent, you will lose access to your child's class updates and portfolio.
- Downloaded reports and saved content will not be affected.

## From the Web

1. Click your **profile icon** > **Settings**.
2. Select the **Account** tab.
3. Scroll to the bottom and click **Delete Account**.
4. Read the confirmation message carefully.
5. Enter your **password** to confirm.
6. Click **Permanently Delete Account**.

## On iOS / Android

1. Tap **Profile** > **Settings** > **Account**.
2. Scroll down and tap **Delete Account**.
3. Enter your password and tap **Confirm**.

## Data Retention

- Your account data is permanently deleted within **30 days** of the request.
- During the 30-day window, you can **cancel the deletion** by logging back in.
- String retains anonymized usage analytics in compliance with applicable data regulations.
- If required by law (e.g., FERPA records), certain data may be retained by your school.

## Notes

- If you only want to leave a class (not delete your account), go to **Settings > My Classes** and tap **Leave Class** instead.
- Contact support if you need to export your data before deletion.

## Troubleshooting

- **Cannot find Delete Account option** — This feature is only available in the Account tab under Settings.
- **Deleted by mistake** — Log in within 30 days to cancel the deletion.`, body_ar: `## قبل الحذف

حذف حسابك نهائي. قبل المتابعة:

- سيتم حذف جميع رسائلك وبيانات ملفك الشخصي واتصالات الفصل.
- إذا كنت معلمًا، سيتم أرشفة فصولك.
- إذا كنت ولي أمر، ستفقد الوصول إلى تحديثات فصل طفلك.

## من الويب

1. انقر على **أيقونة ملفك الشخصي** > **الإعدادات**.
2. اختر علامة تبويب **الحساب**.
3. مرر للأسفل وانقر على **حذف الحساب**.
4. اقرأ رسالة التأكيد بعناية.
5. أدخل **كلمة مرورك** للتأكيد.
6. انقر على **حذف الحساب نهائيًا**.

## على iOS / أندرويد

1. اضغط على **الملف الشخصي** > **الإعدادات** > **الحساب**.
2. مرر للأسفل واضغط على **حذف الحساب**.
3. أدخل كلمة مرورك واضغط على **تأكيد**.

## الاحتفاظ بالبيانات

- تُحذف بيانات حسابك نهائيًا خلال **30 يومًا** من الطلب.
- خلال فترة الـ 30 يومًا، يمكنك **إلغاء الحذف** بتسجيل الدخول مجددًا.

## ملاحظات

- إذا أردت مغادرة فصل فقط، انتقل إلى **الإعدادات > فصولي** واضغط على **مغادرة الفصل**.
- تواصل مع الدعم إذا أردت تصدير بياناتك قبل الحذف.` },
    ],
    'fam1': [
      { title: 'Downloading and Installing the String App', title_ar: 'تحميل وتثبيت تطبيق سترينج', summary: 'Get String on your iPhone, Android device, or access it from any web browser.', summary_ar: 'احصل على سترينج على جهاز iPhone أو Android أو ادخل إليه من أي متصفح ويب.', body: `## Overview

String is available on iPhone, Android, and the web. Installing takes just a few minutes and gives you instant access to your child's classroom updates, messages from teachers, and more.

## Installing on iPhone

1. Open the **App Store** on your iPhone.
2. Search for **String** in the search bar.
3. Tap **Get** next to the String app (look for the official String logo).
4. Wait for the download to finish, then tap **Open**.

## Installing on Android

1. Open the **Google Play Store** on your Android device.
2. Search for **String**.
3. Tap **Install** on the official String app listing.
4. Once installed, tap **Open** to launch the app.

## Using String on the Web

If you prefer not to install an app, you can access String from any web browser:

1. Open your browser (Chrome, Safari, Firefox, or Edge).
2. Go to **app.stringconnect.com**.
3. Log in with your parent account credentials.
4. Bookmark the page for quick access in the future.

> **Tip:** We recommend installing the mobile app so you receive push notifications for important teacher messages and school announcements.

## System Requirements

- **iPhone:** iOS 14 or later
- **Android:** Android 8.0 or later
- **Web:** Any modern browser with JavaScript enabled`, body_ar: `## نظرة عامة

تطبيق سترينج متوفر على iPhone وAndroid والويب. التثبيت يستغرق دقائق قليلة فقط ويمنحك وصولاً فورياً لتحديثات فصل طفلك ورسائل المعلمين.

## التثبيت على iPhone

1. افتح **متجر التطبيقات** على جهاز iPhone.
2. ابحث عن **String** في شريط البحث.
3. اضغط على **تنزيل** بجوار تطبيق سترينج.
4. بعد اكتمال التحميل، اضغط على **فتح**.

## التثبيت على Android

1. افتح **متجر Google Play** على جهاز Android.
2. ابحث عن **String**.
3. اضغط على **تثبيت** ثم **فتح** بعد الانتهاء.

## استخدام سترينج على الويب

1. افتح متصفحك وانتقل إلى **app.stringconnect.com**.
2. سجّل الدخول بحسابك وأضف الصفحة للمفضلة.

> **نصيحة:** ننصح بتثبيت التطبيق على الهاتف لتلقي إشعارات فورية للرسائل المهمة.` },
      { title: 'Creating Your Parent Account', title_ar: 'إنشاء حساب ولي الأمر', summary: 'Sign up using your child\'s class code or a teacher\'s invitation link.', summary_ar: 'سجّل باستخدام رمز فصل طفلك أو رابط دعوة المعلم.', body: `## Overview

Creating a parent account on String is quick and free. You can sign up using a class code provided by your child's teacher or through a direct invitation link sent to your email or phone.

## Signing Up with a Class Code

1. Open the String app or go to **app.stringconnect.com**.
2. Tap **Create Account** on the welcome screen.
3. Select **I'm a Parent/Guardian**.
4. Enter the **class code** your child's teacher provided (e.g., ABC-1234).
5. Fill in your name, email address, and create a password.
6. Verify your email by clicking the link sent to your inbox.
7. You're all set — your account is now connected to your child's class.

## Signing Up with an Invitation Link

1. Check your email or text messages for an invitation from your child's teacher.
2. Tap the **Join String** link in the message.
3. Fill in your name and create a password.
4. Your account is automatically linked to your child's class — no code needed.

## What Information You'll Need

- Your **full name** (as the school knows you)
- A valid **email address** or **phone number**
- Your **child's name** (to confirm the connection)

> **Tip:** Use the same email address the school has on file for you. This helps teachers find and connect with you more easily.

### Having Trouble?

- If your class code doesn't work, double-check with your child's teacher for the correct code.
- If you didn't receive an invitation, ask the teacher to resend it or check your spam folder.`, body_ar: `## نظرة عامة

إنشاء حساب ولي أمر على سترينج سريع ومجاني. يمكنك التسجيل باستخدام رمز الفصل أو رابط دعوة من المعلم.

## التسجيل باستخدام رمز الفصل

1. افتح تطبيق سترينج أو انتقل إلى **app.stringconnect.com**.
2. اضغط على **إنشاء حساب** ثم اختر **أنا ولي أمر**.
3. أدخل **رمز الفصل** الذي قدمه المعلم.
4. أدخل اسمك وبريدك الإلكتروني وأنشئ كلمة مرور.
5. تحقق من بريدك الإلكتروني بالنقر على رابط التأكيد.

## التسجيل عبر رابط الدعوة

1. تحقق من بريدك الإلكتروني أو رسائلك النصية للعثور على دعوة المعلم.
2. اضغط على رابط **انضم إلى سترينج** في الرسالة.
3. أدخل اسمك وأنشئ كلمة مرور — سيتم ربط حسابك تلقائياً بفصل طفلك.

> **نصيحة:** استخدم نفس البريد الإلكتروني المسجل لدى المدرسة لتسهيل التواصل.` },
      { title: 'Connecting to Your Child\'s Class', title_ar: 'الاتصال بفصل طفلك', summary: 'Link your account to one or more classrooms to stay updated on your child\'s progress.', summary_ar: 'اربط حسابك بفصل واحد أو أكثر لتبقى على اطلاع بتقدم طفلك.', body: `## Overview

Once you have a parent account, you can connect to one or more of your child's classrooms. This lets you receive messages, view class stories, and track your child's progress all in one place.

## Connecting to a Class

1. Log in to your String parent account.
2. From the home screen, tap **Add a Class** (or the **+** icon).
3. Enter the **class code** provided by the teacher.
4. Tap **Join** to connect.
5. The class will now appear on your home dashboard.

## Connecting to Multiple Classes

If your child has more than one teacher (e.g., homeroom and a specialist), you can join multiple classes:

1. Repeat the steps above for each class code.
2. All connected classes will appear on your dashboard.
3. Tap any class card to see updates, messages, and stories specific to that class.

## What You'll See After Connecting

- **Class Feed:** Recent stories, photos, and announcements posted by the teacher
- **Messages:** Direct messages between you and the teacher
- **Portfolio:** Your child's saved work and progress snapshots
- **Points:** Your child's behavior points and recognition

> **Tip:** If you have more than one child at the school, you can connect to all their classes from the same parent account. Use the child switcher at the top of the dashboard to toggle between them.

### Troubleshooting

- **Code not working?** Class codes expire after a set period. Ask the teacher for a fresh code.
- **Don't see updates?** Make sure notifications are enabled in your device settings and within the String app.`, body_ar: `## نظرة عامة

بعد إنشاء حسابك، يمكنك الاتصال بفصل أو أكثر من فصول طفلك لتلقي الرسائل وعرض قصص الفصل ومتابعة تقدم طفلك.

## الاتصال بفصل

1. سجّل الدخول إلى حسابك على سترينج.
2. من الشاشة الرئيسية، اضغط على **إضافة فصل** أو أيقونة **+**.
3. أدخل **رمز الفصل** المقدم من المعلم واضغط **انضمام**.
4. سيظهر الفصل الآن على لوحة التحكم الرئيسية.

## الاتصال بفصول متعددة

إذا كان لطفلك أكثر من معلم، يمكنك الانضمام لعدة فصول:

1. كرر الخطوات أعلاه لكل رمز فصل.
2. ستظهر جميع الفصول على لوحة التحكم.

## ما ستراه بعد الاتصال

- **آخر الأخبار:** القصص والصور والإعلانات من المعلم
- **الرسائل:** المراسلات المباشرة مع المعلم
- **الملف:** أعمال طفلك المحفوظة
- **النقاط:** نقاط سلوك طفلك

> **نصيحة:** إذا كان لديك أكثر من طفل، يمكنك إدارة جميع فصولهم من نفس الحساب باستخدام أداة التبديل بين الأطفال.` },
    ],
    'fam_gs': [
      { title: 'Your First Week on String: A Family Guide', title_ar: 'أسبوعك الأول على سترينج: دليل العائلة', summary: 'Everything you need to know to get the most out of String in your first week.', summary_ar: 'كل ما تحتاج معرفته للاستفادة القصوى من سترينج في أسبوعك الأول.', body: `## Overview

Welcome to String! This guide walks you through everything you should do in your first week to make the most of the platform and stay connected with your child's school.

## Day 1: Set Up Your Profile

1. Log in to the String app or website.
2. Tap your **profile icon** in the top-right corner.
3. Add a **profile photo** so teachers can recognize you.
4. Verify your **contact information** (email and phone number).

## Day 2: Explore the Class Feed

1. Navigate to your child's class from the dashboard.
2. Scroll through the **Class Feed** to see recent posts, photos, and announcements.
3. Tap the **heart icon** to react to posts you enjoy.

## Day 3: Check Messages

1. Tap the **Messages** tab at the bottom of the screen.
2. Read any welcome messages from your child's teacher.
3. Reply to introduce yourself if the teacher has invited responses.

## Day 4: Review Your Child's Portfolio

1. Go to the **Portfolio** section within your child's class.
2. Browse through any work samples or photos the teacher has shared.
3. Leave a comment or reaction on an item to encourage your child.

## Day 5: Set Up Notifications

1. Go to **Settings > Notifications**.
2. Choose which alerts matter most to you (messages, announcements, portfolio updates).
3. Select your preferred delivery method: push notification, email, or SMS.

## Ongoing: Stay Engaged

- Check the app **at least once a day** during the first week to build the habit.
- Respond to teacher messages promptly.
- Celebrate your child's portfolio entries with positive comments.

> **Tip:** Turn on push notifications so you never miss an important message from the teacher.`, body_ar: `## نظرة عامة

مرحباً بك في سترينج! يرشدك هذا الدليل إلى كل ما يجب فعله في أسبوعك الأول للبقاء على تواصل مع مدرسة طفلك.

## اليوم الأول: إعداد ملفك الشخصي

1. سجّل الدخول وأضف **صورة شخصية** وتحقق من **بيانات الاتصال**.

## اليوم الثاني: استكشاف آخر أخبار الفصل

1. انتقل إلى فصل طفلك وتصفح **آخر الأخبار** والصور والإعلانات.
2. اضغط على أيقونة **القلب** للتفاعل مع المنشورات.

## اليوم الثالث: التحقق من الرسائل

1. اضغط على تبويب **الرسائل** واقرأ رسائل الترحيب من المعلم.
2. ردّ لتقديم نفسك إذا دعاك المعلم للرد.

## اليوم الرابع: مراجعة ملف طفلك

1. انتقل إلى قسم **الملف** واطلع على نماذج الأعمال المشاركة.
2. اترك تعليقاً مشجعاً على أحد العناصر.

## اليوم الخامس: إعداد الإشعارات

1. انتقل إلى **الإعدادات > الإشعارات** واختر التنبيهات المهمة لك.
2. اختر طريقة التسليم المفضلة: إشعار فوري أو بريد إلكتروني أو رسالة نصية.

> **نصيحة:** فعّل الإشعارات الفورية حتى لا تفوتك أي رسالة مهمة من المعلم.` },
      { title: 'Understanding Notifications and Alerts', title_ar: 'فهم الإشعارات والتنبيهات', summary: 'Customize which notifications you receive and how you receive them.', summary_ar: 'خصص الإشعارات التي تتلقاها وطريقة تلقيها.', body: `## Overview

String sends you notifications to keep you informed about your child's school activity. You can customize exactly which notifications you receive and how they are delivered to you.

## Types of Notifications

String offers notifications for the following events:

- **New Messages:** When a teacher sends you a direct message
- **Class Announcements:** Important updates posted to the class feed
- **Portfolio Updates:** When new work is added to your child's portfolio
- **Point Alerts:** When your child receives behavior points
- **Weekly Reports:** Summary of your child's weekly progress
- **Event Reminders:** Upcoming school events and deadlines

## How to Customize Your Notifications

1. Open the String app and tap your **profile icon**.
2. Go to **Settings > Notifications**.
3. For each notification type, choose your preferred delivery method:
   - **Push Notification** — instant alerts on your phone
   - **Email** — delivered to your registered email address
   - **SMS** — text message alerts (if enabled by your school)
4. Toggle any notification type **on** or **off** based on your preference.
5. Tap **Save** to apply your changes.

## Quiet Hours

You can set quiet hours to avoid receiving push notifications during certain times:

1. In **Settings > Notifications**, scroll to **Quiet Hours**.
2. Set your preferred **start time** and **end time** (e.g., 9:00 PM to 7:00 AM).
3. During quiet hours, notifications will be silenced but still accessible in the app.

> **Tip:** Even if you turn off push notifications, you can always check the **Notifications** bell icon inside the app to see what you've missed.

### Recommended Settings for Parents

- Keep **New Messages** on push so you respond to teachers promptly.
- Set **Weekly Reports** to email for a convenient end-of-week summary.
- Enable **Point Alerts** if you want to celebrate your child's positive behavior in real time.`, body_ar: `## نظرة عامة

يرسل لك سترينج إشعارات لإبقائك على اطلاع بنشاط طفلك المدرسي. يمكنك تخصيص الإشعارات التي تتلقاها وطريقة تسليمها.

## أنواع الإشعارات

- **رسائل جديدة:** عندما يرسل لك المعلم رسالة مباشرة
- **إعلانات الفصل:** تحديثات مهمة في آخر أخبار الفصل
- **تحديثات الملف:** عند إضافة أعمال جديدة لملف طفلك
- **تنبيهات النقاط:** عند حصول طفلك على نقاط سلوك
- **التقارير الأسبوعية:** ملخص تقدم طفلك الأسبوعي

## تخصيص الإشعارات

1. افتح التطبيق واذهب إلى **الإعدادات > الإشعارات**.
2. لكل نوع إشعار، اختر طريقة التسليم: **إشعار فوري** أو **بريد إلكتروني** أو **رسالة نصية**.
3. فعّل أو أوقف أي نوع حسب تفضيلك.
4. اضغط **حفظ** لتطبيق التغييرات.

## ساعات الهدوء

يمكنك ضبط ساعات هدوء لتجنب الإشعارات في أوقات معينة (مثلاً من 9 مساءً إلى 7 صباحاً).

> **نصيحة:** أبقِ إشعارات الرسائل الجديدة مفعّلة للرد على المعلمين بسرعة.` },
      { title: 'Setting Your Language and Communication Preferences', title_ar: 'ضبط تفضيلات اللغة والتواصل', summary: 'Choose your preferred language and adjust how teachers can reach you.', summary_ar: 'اختر لغتك المفضلة واضبط كيفية تواصل المعلمين معك.', body: `## Overview

String supports multiple languages and lets you customize how the school communicates with you. Whether you prefer to read content in Arabic, Spanish, Chinese, or any other supported language, String makes it easy to set your preferences.

## Changing Your App Language

1. Open the String app and tap your **profile icon**.
2. Go to **Settings > Language**.
3. Select your preferred language from the list.
4. The entire app interface will update to your chosen language immediately.

## Setting Your Communication Language

Your communication language determines the language used for:

- Emails and SMS messages from the school
- Push notification text
- Automated system messages

To set this:

1. Go to **Settings > Communication Preferences**.
2. Under **Preferred Language**, select the language you want to receive communications in.
3. Tap **Save**.

## Auto-Translation for Messages

Even if a teacher writes a message in a different language, String can automatically translate it for you:

1. When you open a message, look for the **Translate** button below the text.
2. Tap it to see the message in your preferred language.
3. You can toggle between the original and translated versions at any time.

## Contact Method Preferences

You can also choose how teachers reach you:

1. Go to **Settings > Communication Preferences**.
2. Under **Contact Methods**, toggle your preferred channels:
   - **In-App Messages** (always enabled)
   - **Email Notifications**
   - **SMS/Text Messages** (if available at your school)
3. Tap **Save**.

> **Tip:** Setting your language preference also helps teachers understand which language to use when messaging you personally.`, body_ar: `## نظرة عامة

يدعم سترينج لغات متعددة ويتيح لك تخصيص طريقة تواصل المدرسة معك. يمكنك قراءة المحتوى بالعربية أو أي لغة مدعومة أخرى.

## تغيير لغة التطبيق

1. افتح التطبيق واذهب إلى **الإعدادات > اللغة**.
2. اختر لغتك المفضلة من القائمة.
3. سيتم تحديث واجهة التطبيق فوراً.

## ضبط لغة التواصل

1. انتقل إلى **الإعدادات > تفضيلات التواصل**.
2. اختر اللغة المفضلة لتلقي الرسائل الإلكترونية والإشعارات.
3. اضغط **حفظ**.

## الترجمة التلقائية للرسائل

حتى لو كتب المعلم رسالة بلغة مختلفة، يمكن لسترينج ترجمتها تلقائياً:

1. افتح الرسالة واضغط على زر **ترجمة** أسفل النص.
2. يمكنك التبديل بين النص الأصلي والمترجم في أي وقت.

## تفضيلات طريقة الاتصال

1. انتقل إلى **الإعدادات > تفضيلات التواصل**.
2. فعّل أو أوقف قنوات الاتصال: رسائل التطبيق، البريد الإلكتروني، أو الرسائل النصية.

> **نصيحة:** ضبط لغتك يساعد المعلمين على معرفة اللغة المناسبة للتواصل معك شخصياً.` },
    ],
    'fam_am': [
      { title: 'Updating Your Contact Information', title_ar: 'تحديث معلومات الاتصال الخاصة بك', summary: 'Keep your email, phone number, and address current for school communications.', summary_ar: 'حافظ على بريدك الإلكتروني ورقم هاتفك وعنوانك محدثين للتواصل المدرسي.', body: `## Overview

Keeping your contact information up to date ensures you receive all important messages and alerts from your child's school. You can update your email, phone number, and mailing address at any time from the String app.

## Updating Your Email Address

1. Open the String app and tap your **profile icon**.
2. Go to **Settings > Account > Contact Information**.
3. Tap the **Edit** icon next to your email address.
4. Enter your new email address.
5. You will receive a **verification link** at the new email — click it to confirm.
6. Your email is now updated across String.

## Updating Your Phone Number

1. Go to **Settings > Account > Contact Information**.
2. Tap **Edit** next to your phone number.
3. Enter your new phone number (include country code if applicable).
4. A **verification code** will be sent via SMS — enter it to confirm.
5. Your phone number is now updated.

## Updating Your Mailing Address

1. Go to **Settings > Account > Contact Information**.
2. Tap **Edit** next to your address.
3. Enter your updated street address, city, state, and zip code.
4. Tap **Save**.

## Why Keeping Information Current Matters

- **Email:** Used for account recovery, login verification, and email notifications from teachers.
- **Phone:** Used for SMS alerts and two-factor authentication.
- **Address:** May be used by the school for mailing report cards or other documents.

> **Tip:** If you change your email, make sure to let your child's teacher know, especially if they use your old email to search for your account.

### Important Note

Updating your contact information in String does **not** automatically update your records with the school office. Contact your school's front desk if your official school records also need updating.`, body_ar: `## نظرة عامة

الحفاظ على بيانات الاتصال محدثة يضمن تلقيك لجميع الرسائل والتنبيهات المهمة من مدرسة طفلك.

## تحديث البريد الإلكتروني

1. افتح التطبيق واذهب إلى **الإعدادات > الحساب > معلومات الاتصال**.
2. اضغط **تعديل** بجوار البريد الإلكتروني.
3. أدخل بريدك الجديد وأكّده عبر رابط التحقق المرسل إليك.

## تحديث رقم الهاتف

1. اذهب إلى **الإعدادات > الحساب > معلومات الاتصال**.
2. اضغط **تعديل** بجوار رقم الهاتف.
3. أدخل الرقم الجديد وأكّده عبر رمز التحقق المرسل برسالة نصية.

## تحديث العنوان البريدي

1. اذهب إلى **الإعدادات > الحساب > معلومات الاتصال**.
2. اضغط **تعديل** بجوار العنوان وأدخل عنوانك الجديد ثم اضغط **حفظ**.

> **نصيحة:** تحديث بياناتك في سترينج لا يحدّث سجلاتك تلقائياً في مكتب المدرسة. تواصل مع المدرسة إذا لزم الأمر.` },
      { title: 'Managing Multiple Children\'s Accounts', title_ar: 'إدارة حسابات أطفال متعددين', summary: 'Switch between your children\'s classes and manage all profiles from one account.', summary_ar: 'تنقل بين فصول أطفالك وأدر جميع الملفات من حساب واحد.', body: `## Overview

If you have more than one child enrolled at the school, String lets you manage all their classes from a single parent account. You can easily switch between children and view each one's feed, messages, portfolio, and points.

## How the Child Switcher Works

1. From your home dashboard, look for the **child selector** at the top of the screen.
2. Tap the dropdown arrow or your child's name.
3. A list of all your connected children will appear.
4. Tap the name of the child you want to view.
5. The dashboard will refresh to show that child's classes and updates.

## Adding Another Child to Your Account

1. Tap your **profile icon** and go to **Settings > My Children**.
2. Tap **Add a Child**.
3. Enter the **class code** provided by the new child's teacher.
4. Confirm your child's name when prompted.
5. The new child's class will now appear in your child switcher.

## Managing Classes Per Child

Each child can be connected to multiple classes. To see all classes for a specific child:

1. Select the child from the child switcher.
2. Their connected classes appear as cards on the dashboard.
3. Tap any class card to view that class's feed, messages, and portfolio.

## Removing a Child's Connection

If your child is no longer enrolled or you need to disconnect:

1. Go to **Settings > My Children**.
2. Tap the child's name.
3. Tap **Remove Child** and confirm.

> **Tip:** You receive separate notifications for each child. If you want to reduce notification volume, go to **Settings > Notifications** and adjust per-child notification preferences.

### Frequently Asked Questions

- **Can two parents manage the same child?** Yes. Both parents can create separate accounts and join the same class.
- **Is there a limit to how many children I can add?** No. You can connect as many children as you need.`, body_ar: `## نظرة عامة

إذا كان لديك أكثر من طفل في المدرسة، يتيح لك سترينج إدارة جميع فصولهم من حساب واحد.

## استخدام أداة التبديل بين الأطفال

1. من لوحة التحكم الرئيسية، اضغط على **اسم الطفل** في أعلى الشاشة.
2. ستظهر قائمة بجميع أطفالك المتصلين.
3. اضغط على اسم الطفل الذي تريد عرضه وستتحدث لوحة التحكم فوراً.

## إضافة طفل آخر

1. اذهب إلى **الإعدادات > أطفالي** واضغط **إضافة طفل**.
2. أدخل **رمز الفصل** المقدم من معلم الطفل الجديد.
3. أكّد اسم طفلك وسيظهر في قائمة التبديل.

## إزالة اتصال طفل

1. اذهب إلى **الإعدادات > أطفالي**.
2. اضغط على اسم الطفل ثم **إزالة الطفل** وأكّد.

> **نصيحة:** يمكن لكلا الوالدين إنشاء حسابات منفصلة والانضمام لنفس الفصل. لا يوجد حد لعدد الأطفال الذين يمكنك إضافتهم.` },
      { title: 'Resetting Your Password or Recovering Your Account', title_ar: 'إعادة تعيين كلمة المرور أو استرجاع حسابك', summary: 'Steps to regain access if you forget your password or lose your login credentials.', summary_ar: 'خطوات لاستعادة الوصول إذا نسيت كلمة المرور أو فقدت بيانات الدخول.', body: `## Overview

If you've forgotten your password or can't access your String account, don't worry. String provides several ways to regain access quickly and securely.

## Resetting Your Password

1. Open the String app or go to **app.stringconnect.com**.
2. On the login screen, tap **Forgot Password?**.
3. Enter the **email address** associated with your account.
4. Tap **Send Reset Link**.
5. Check your email inbox for a password reset message from String.
6. Click the **Reset Password** link in the email.
7. Enter a **new password** (at least 8 characters, with one uppercase letter and one number).
8. Tap **Save** and log in with your new password.

## If You Don't Receive the Reset Email

- Check your **spam** or **junk** folder.
- Make sure you entered the correct email address (the one you used to sign up).
- Wait a few minutes — emails can sometimes be delayed.
- Try again by tapping **Resend** on the reset page.

## Recovering Your Account Without Email Access

If you no longer have access to your registered email:

1. On the login screen, tap **Forgot Password?**.
2. Tap **Can't access your email?** at the bottom.
3. Enter your **phone number** if one is linked to your account.
4. A verification code will be sent via SMS — enter it to verify your identity.
5. Set a new password and update your email address.

## Account Locked?

If your account has been locked due to multiple failed login attempts:

- Wait **15 minutes** and try again.
- If the issue persists, contact your school's administrator or String support.

> **Tip:** Use a password manager to store your String credentials securely. This prevents future lockouts and makes logging in faster.

### Still Need Help?

Contact String Support at **support@stringconnect.com** or ask your child's school administrator for assistance.`, body_ar: `## نظرة عامة

إذا نسيت كلمة المرور أو لم تتمكن من الوصول لحسابك، يوفر سترينج طرقاً متعددة لاستعادة الوصول بسرعة وأمان.

## إعادة تعيين كلمة المرور

1. افتح التطبيق أو انتقل إلى **app.stringconnect.com**.
2. اضغط **نسيت كلمة المرور؟** في شاشة تسجيل الدخول.
3. أدخل بريدك الإلكتروني المسجل واضغط **إرسال رابط إعادة التعيين**.
4. تحقق من بريدك واضغط على رابط **إعادة تعيين كلمة المرور**.
5. أدخل كلمة مرور جديدة واضغط **حفظ**.

## إذا لم تتلقَّ البريد الإلكتروني

- تحقق من مجلد **البريد العشوائي**.
- تأكد من إدخال البريد الإلكتروني الصحيح.
- انتظر بضع دقائق وحاول مرة أخرى.

## استرجاع الحساب بدون الوصول للبريد

1. اضغط **لا يمكنك الوصول لبريدك؟** وأدخل رقم هاتفك المرتبط بالحساب.
2. أدخل رمز التحقق المرسل عبر رسالة نصية.
3. عيّن كلمة مرور جديدة وحدّث بريدك الإلكتروني.

> **نصيحة:** استخدم مدير كلمات المرور لتخزين بياناتك بأمان ومنع قفل الحساب مستقبلاً.` },
    ],
    'fam_msg': [
      { title: 'Reading and Replying to Teacher Messages', title_ar: 'قراءة رسائل المعلم والرد عليها', summary: 'View messages from your child\'s teacher and respond directly from the app.', summary_ar: 'اعرض رسائل معلم طفلك وردّ عليها مباشرة من التطبيق.', body: `## Overview

String makes it easy to communicate directly with your child's teacher. You can read messages, reply, and even attach photos — all from the convenience of the app.

## Reading Messages

1. Open the String app and tap the **Messages** tab at the bottom of the screen.
2. You will see a list of conversations sorted by most recent.
3. Tap on a conversation to open it and read the full message.
4. Unread messages are marked with a **blue dot** for easy identification.

## Replying to a Message

1. Open the message you want to reply to.
2. Tap the **text input field** at the bottom of the conversation.
3. Type your response.
4. To attach a photo, tap the **camera icon** or **paperclip icon** next to the text field.
5. Tap the **Send** button (arrow icon) to deliver your reply.

## Types of Messages You May Receive

- **Direct Messages:** Personal messages from the teacher to you specifically
- **Broadcast Messages:** Announcements sent to all parents in the class (you can still reply privately)
- **Urgent Messages:** Time-sensitive alerts marked with a red priority flag

## Message Notifications

When you receive a new message, String will:

- Show a **push notification** on your phone (if enabled)
- Display a **badge count** on the Messages tab
- Send an **email notification** (if configured in your settings)

> **Tip:** Reply to teacher messages promptly, especially for urgent items. Teachers appreciate knowing their messages have been received and understood.

### Good Messaging Etiquette

- Keep replies **brief and relevant**.
- Use a **polite and respectful** tone.
- If a topic requires a longer discussion, suggest a phone call or in-person meeting.
- Avoid sending messages late at night — teachers have quiet hours too.`, body_ar: `## نظرة عامة

يسهّل سترينج التواصل المباشر مع معلم طفلك. يمكنك قراءة الرسائل والرد عليها وإرفاق الصور من التطبيق.

## قراءة الرسائل

1. افتح التطبيق واضغط على تبويب **الرسائل** في أسفل الشاشة.
2. ستظهر قائمة المحادثات مرتبة من الأحدث.
3. اضغط على محادثة لقراءة الرسالة الكاملة.
4. الرسائل غير المقروءة تظهر بـ **نقطة زرقاء**.

## الرد على رسالة

1. افتح الرسالة واضغط على **حقل الكتابة** في الأسفل.
2. اكتب ردك واضغط زر **إرسال**.
3. لإرفاق صورة، اضغط على أيقونة **الكاميرا** أو **المرفق**.

## أنواع الرسائل

- **رسائل مباشرة:** رسائل شخصية من المعلم لك
- **رسائل جماعية:** إعلانات مرسلة لجميع أولياء الأمور (يمكنك الرد بشكل خاص)
- **رسائل عاجلة:** تنبيهات مهمة مميزة بعلامة أولوية حمراء

> **نصيحة:** ردّ على رسائل المعلم بسرعة، خاصة الرسائل العاجلة. حافظ على ردود مختصرة ومهذبة.` },
      { title: 'Understanding Message Read Receipts', title_ar: 'فهم إيصالات قراءة الرسائل', summary: 'Learn how read receipts work and what teachers can see about your message activity.', summary_ar: 'تعلم كيف تعمل إيصالات القراءة وما يمكن للمعلمين رؤيته عن نشاط رسائلك.', body: `## Overview

String uses read receipts to help teachers know when their messages have been seen. This feature promotes better communication between families and schools by ensuring important information has been received.

## How Read Receipts Work

When a teacher sends you a message:

1. **Sent** — The message has been delivered to the String server (single checkmark).
2. **Delivered** — The message has reached your device (double checkmark).
3. **Read** — You have opened and viewed the message (double checkmark turns blue).

The teacher can see these status indicators on their end for each message they send.

## What Teachers Can See

Teachers have access to the following information:

- Whether you have **opened** the message
- The **date and time** you read it
- For broadcast messages, they can see a **read percentage** (e.g., "15 of 20 parents have read this message")

### What Teachers Cannot See

- Teachers **cannot** see how long you spent reading a message.
- Teachers **cannot** see if you took a screenshot.
- Teachers **cannot** read any messages you send to other parents.

## Can I Turn Off Read Receipts?

Read receipt settings are managed at the school level. In most cases:

- Read receipts for **direct messages** are always enabled to ensure important communications are acknowledged.
- Your school may allow you to adjust read receipt settings for **broadcast messages**.

To check your options:

1. Go to **Settings > Privacy**.
2. Look for **Read Receipts** and see if a toggle is available.

> **Tip:** If a teacher sends you a message that requires action, it is helpful to reply with a quick acknowledgment such as "Got it, thank you!" so they know you are aware.

## Why Read Receipts Matter

Read receipts help schools ensure that safety alerts, schedule changes, and other critical information reach every family. They are an important part of keeping your child safe and informed.`, body_ar: `## نظرة عامة

يستخدم سترينج إيصالات القراءة لمساعدة المعلمين على معرفة متى تم عرض رسائلهم.

## كيف تعمل إيصالات القراءة

عندما يرسل المعلم رسالة:

1. **تم الإرسال** — الرسالة وصلت للخادم (علامة واحدة).
2. **تم التسليم** — الرسالة وصلت لجهازك (علامتان).
3. **تمت القراءة** — فتحت الرسالة وعرضتها (العلامتان تتحولان للأزرق).

## ما يراه المعلمون

- هل **فتحت** الرسالة
- **تاريخ ووقت** القراءة
- للرسائل الجماعية: **نسبة القراءة** بين أولياء الأمور

## ما لا يراه المعلمون

- لا يمكنهم رؤية مدة قراءتك للرسالة.
- لا يمكنهم قراءة رسائلك لأولياء أمور آخرين.

## هل يمكنني إيقاف إيصالات القراءة؟

إعدادات إيصالات القراءة تُدار على مستوى المدرسة. تحقق من **الإعدادات > الخصوصية** لمعرفة الخيارات المتاحة.

> **نصيحة:** إذا تلقيت رسالة تتطلب إجراءً، ردّ بتأكيد سريع مثل "تم الاستلام، شكراً!" حتى يعرف المعلم أنك على علم.` },
      { title: 'Translating Messages to Your Language', title_ar: 'ترجمة الرسائل إلى لغتك', summary: 'Automatically translate messages into your preferred language with one tap.', summary_ar: 'ترجم الرسائل تلقائيًا إلى لغتك المفضلة بنقرة واحدة.', body: `## Overview

String's built-in translation feature allows you to read any message in your preferred language, even if the teacher wrote it in a different one. Translation happens instantly with just one tap, helping families who speak different languages stay fully informed.

## How to Translate a Message

1. Open a message from your child's teacher.
2. Below the message text, look for the **Translate** button (globe icon).
3. Tap **Translate** to see the message in your preferred language.
4. The translated text appears directly below the original message.
5. To switch back to the original, tap **Show Original**.

## Setting Up Auto-Translation

If you'd like all messages to be automatically translated:

1. Go to **Settings > Language**.
2. Make sure your **preferred language** is set correctly.
3. Toggle on **Auto-Translate Messages**.
4. From now on, every incoming message will be automatically translated.

## What Gets Translated

- **Direct messages** from teachers
- **Broadcast announcements** sent to the class
- **Class feed posts** and captions
- **Push notification previews** (when auto-translate is enabled)

### What Does Not Get Translated

- Attached **images** or **documents** (only text content is translated)
- **Audio or video** messages
- Content within **linked websites**

## Translation Accuracy

- String uses advanced AI translation that handles most languages well.
- For nuanced or sensitive topics, the teacher may follow up with a phone call or use a human translator arranged by the school.

> **Tip:** If a translation doesn't seem right, you can tap **Report Translation Issue** below the translated text. This helps improve translations for everyone.

## Supported Languages

String supports translation for over **100 languages**, including Arabic, Spanish, Chinese, French, Vietnamese, Somali, Urdu, and many more.`, body_ar: `## نظرة عامة

تتيح لك ميزة الترجمة المدمجة في سترينج قراءة أي رسالة بلغتك المفضلة حتى لو كتبها المعلم بلغة مختلفة. الترجمة تتم فوراً بنقرة واحدة.

## كيفية ترجمة رسالة

1. افتح رسالة من معلم طفلك.
2. أسفل نص الرسالة، اضغط على زر **ترجمة** (أيقونة الكرة الأرضية).
3. سيظهر النص المترجم أسفل الرسالة الأصلية.
4. للعودة للأصل، اضغط **عرض الأصل**.

## إعداد الترجمة التلقائية

1. اذهب إلى **الإعدادات > اللغة**.
2. تأكد من ضبط **لغتك المفضلة** بشكل صحيح.
3. فعّل **الترجمة التلقائية للرسائل**.
4. من الآن فصاعداً، ستُترجم كل رسالة واردة تلقائياً.

## ما يتم ترجمته

- الرسائل المباشرة والإعلانات الجماعية ومنشورات آخر أخبار الفصل

## ما لا يتم ترجمته

- الصور والمستندات المرفقة والرسائل الصوتية أو المرئية

> **نصيحة:** إذا بدت الترجمة غير دقيقة، اضغط على **الإبلاغ عن مشكلة ترجمة** لتحسين الترجمات للجميع. يدعم سترينج أكثر من **100 لغة**.` },
    ],
    'fam_sp': [
      { title: 'Viewing Your Child\'s Portfolio', title_ar: 'عرض ملف طفلك', summary: 'Access photos, videos, and work samples your child\'s teacher has shared.', summary_ar: 'اطلع على الصور والفيديو ونماذج الأعمال التي شاركها معلم طفلك.', body: `## Overview

Your child's digital portfolio on String is a collection of photos, videos, and work samples shared by their teacher. It gives you a window into your child's learning journey and achievements throughout the school year.

## How to Access the Portfolio

1. Open the String app and select your child's class from the dashboard.
2. Tap the **Portfolio** tab (folder icon) at the bottom or side of the screen.
3. You will see a timeline of portfolio entries, with the most recent items at the top.

## What You'll Find in the Portfolio

Each portfolio entry may include:

- **Photos** of your child's work, projects, or classroom activities
- **Videos** of presentations, performances, or learning moments
- **Documents** such as writing samples, drawings, or worksheets
- **Teacher Notes** providing context about the work and your child's progress

## Navigating Portfolio Entries

- **Scroll** through the timeline to browse all entries.
- **Tap** on any entry to view it in full screen.
- Use the **filter** button to sort by date, subject, or type (photo, video, document).
- Tap the **heart icon** to favorite entries you want to find quickly later.

## Viewing Older Portfolio Items

The portfolio keeps all entries from the current school year. To find older work:

1. Scroll to the bottom of the portfolio timeline.
2. Or use the **search bar** at the top to search by keyword or date range.
3. For previous school years, check with the teacher if archived portfolios are available.

> **Tip:** Make it a habit to check the portfolio regularly. When your child sees that you are interested in their work, it boosts their motivation and confidence.

### Privacy Note

Your child's portfolio is only visible to you, the teacher, and any other parents or guardians linked to your child's account. It is never shared publicly.`, body_ar: `## نظرة عامة

ملف طفلك الرقمي على سترينج هو مجموعة من الصور والفيديو ونماذج الأعمال التي يشاركها المعلم. يمنحك نافذة على رحلة تعلم طفلك وإنجازاته.

## كيفية الوصول للملف

1. افتح التطبيق واختر فصل طفلك من لوحة التحكم.
2. اضغط على تبويب **الملف** (أيقونة المجلد).
3. ستظهر إدخالات الملف مرتبة زمنياً من الأحدث.

## ما ستجده في الملف

- **صور** لأعمال طفلك ومشاريعه وأنشطة الفصل
- **فيديو** للعروض التقديمية والأداءات ولحظات التعلم
- **مستندات** مثل نماذج الكتابة والرسومات
- **ملاحظات المعلم** التي توفر سياقاً عن العمل وتقدم طفلك

## تصفح إدخالات الملف

- **مرر** عبر الخط الزمني لتصفح جميع الإدخالات.
- **اضغط** على أي إدخال لعرضه بالحجم الكامل.
- استخدم زر **التصفية** للترتيب حسب التاريخ أو المادة أو النوع.
- اضغط على **أيقونة القلب** لتمييز العناصر المفضلة.

> **نصيحة:** تصفح الملف بانتظام. عندما يرى طفلك اهتمامك بأعماله، يعزز ذلك ثقته ودافعيته.` },
      { title: 'Downloading and Saving Portfolio Items', title_ar: 'تنزيل وحفظ عناصر الملف', summary: 'Save your child\'s portfolio highlights to your device for safekeeping.', summary_ar: 'احفظ أبرز إنجازات ملف طفلك على جهازك للاحتفاظ بها.', body: `## Overview

You can download photos, videos, and documents from your child's portfolio to save them on your device. This is a great way to preserve memories and share your child's achievements with family members who may not have String.

## Downloading a Single Item

1. Open the String app and navigate to your child's **Portfolio**.
2. Tap on the item you want to download (photo, video, or document).
3. When the item opens in full screen, tap the **Download** icon (arrow pointing down) in the top-right corner.
4. Choose where to save the file on your device.
5. The item will be saved to your device's photo gallery or files folder.

## Downloading Multiple Items

To download several portfolio items at once:

1. Go to the **Portfolio** tab.
2. Tap and hold on any item to enter **selection mode**.
3. Tap each additional item you want to include.
4. Tap the **Download** button at the bottom of the screen.
5. All selected items will be saved to your device as individual files.

## Sharing Portfolio Items

After downloading, you can share items with family:

- **Direct Share:** While viewing an item in full screen, tap the **Share** icon to send it via text, email, WhatsApp, or any other sharing app on your device.
- **Social Media:** Save the item first, then upload it to your social media platform of choice.

## Storage Considerations

- **Photos** are typically 1-5 MB each.
- **Videos** can be 10-100 MB or more depending on length.
- Make sure your device has enough free storage before downloading large videos.

> **Tip:** At the end of each school term, take a few minutes to download your favorite portfolio items. Teachers may archive older content, and having your own copies ensures you never lose those precious memories.

### File Formats

- Photos are saved as **JPEG** or **PNG**.
- Videos are saved as **MP4**.
- Documents are saved as **PDF**.`, body_ar: `## نظرة عامة

يمكنك تنزيل الصور والفيديو والمستندات من ملف طفلك لحفظها على جهازك ومشاركتها مع أفراد العائلة.

## تنزيل عنصر واحد

1. افتح التطبيق وانتقل إلى **الملف**.
2. اضغط على العنصر المراد تنزيله.
3. عند فتحه بالحجم الكامل، اضغط على أيقونة **التنزيل** (سهم لأسفل).
4. سيُحفظ العنصر في معرض الصور أو مجلد الملفات على جهازك.

## تنزيل عناصر متعددة

1. اذهب إلى تبويب **الملف**.
2. اضغط مطولاً على أي عنصر للدخول إلى **وضع التحديد**.
3. حدد العناصر الإضافية واضغط **تنزيل**.

## مشاركة عناصر الملف

- أثناء عرض عنصر، اضغط على أيقونة **المشاركة** لإرساله عبر الرسائل النصية أو البريد الإلكتروني أو واتساب.

## تنسيقات الملفات

- الصور: **JPEG** أو **PNG**
- الفيديو: **MP4**
- المستندات: **PDF**

> **نصيحة:** في نهاية كل فصل دراسي، خصص بضع دقائق لتنزيل عناصر الملف المفضلة لضمان عدم فقدان تلك الذكريات الثمينة.` },
      { title: 'Commenting on Your Child\'s Work', title_ar: 'التعليق على أعمال طفلك', summary: 'Leave encouraging comments and reactions on your child\'s portfolio entries.', summary_ar: 'اترك تعليقات مشجعة وردود فعل على إدخالات ملف طفلك.', body: `## Overview

One of the best ways to support your child's learning is by leaving encouraging comments on their portfolio work. When your child sees your feedback, it reinforces their effort and shows them you care about their school experience.

## How to Leave a Comment

1. Open the String app and navigate to your child's **Portfolio**.
2. Tap on a portfolio entry to open it.
3. Scroll down below the item to find the **Comments** section.
4. Tap the **Write a comment** field.
5. Type your message and tap **Post**.
6. Your comment will appear below the portfolio entry with your name and a timestamp.

## Using Reactions

For a quicker way to respond, String offers reaction buttons:

1. Open a portfolio entry.
2. Below the item, look for the **reaction bar** with emoji options.
3. Tap a reaction to instantly express your feelings:
   - **Heart** — "I love this!"
   - **Star** — "Great job!"
   - **Clapping Hands** — "Well done!"
   - **Smiley Face** — "This makes me happy!"

## Tips for Writing Great Comments

- **Be specific:** Instead of "Good job," try "I love how you used blue and green in your painting!"
- **Celebrate effort:** "I can see you worked really hard on this math worksheet."
- **Ask questions:** "What was your favorite part about this project?"
- **Keep it positive:** Focus on encouragement and growth.

## Who Can See Your Comments?

- Your child's **teacher** can see all comments.
- Your **child** can see your comments (depending on school settings).
- **Other parents** cannot see your comments — they are private to your family and the teacher.

> **Tip:** Try to comment on portfolio entries within a day or two of when they are posted. Timely feedback has the biggest impact on your child's motivation.

## Editing or Deleting a Comment

1. Find your comment under the portfolio entry.
2. Tap the **three dots** menu next to your comment.
3. Choose **Edit** to modify your text or **Delete** to remove it.`, body_ar: `## نظرة عامة

ترك تعليقات مشجعة على أعمال ملف طفلك من أفضل الطرق لدعم تعلمه. عندما يرى طفلك ملاحظاتك، يعزز ذلك جهده ويُظهر اهتمامك.

## كيفية ترك تعليق

1. افتح التطبيق وانتقل إلى **الملف**.
2. اضغط على إدخال لفتحه ومرر لأسفل إلى قسم **التعليقات**.
3. اضغط على حقل **اكتب تعليقاً** واكتب رسالتك.
4. اضغط **نشر** وسيظهر تعليقك باسمك والوقت.

## استخدام ردود الفعل

للرد السريع، يوفر سترينج أزرار ردود الفعل:

- **قلب** — "أحب هذا!"
- **نجمة** — "عمل رائع!"
- **تصفيق** — "أحسنت!"
- **ابتسامة** — "هذا يسعدني!"

## نصائح لكتابة تعليقات رائعة

- **كن محدداً:** بدلاً من "أحسنت"، جرب "أحب استخدامك للألوان في رسمتك!"
- **احتفِ بالجهد:** "أستطيع أن أرى أنك عملت بجد على هذا."
- **اطرح أسئلة:** "ما الجزء المفضل لديك في هذا المشروع؟"

> **نصيحة:** حاول التعليق على إدخالات الملف خلال يوم أو يومين من نشرها لتحقيق أكبر أثر على دافعية طفلك.` },
    ],
    'fam_pr': [
      { title: 'Understanding Your Child\'s Points Summary', title_ar: 'فهم ملخص نقاط طفلك', summary: 'See how your child earns points and what different behavior categories mean.', summary_ar: 'اعرف كيف يكسب طفلك النقاط وماذا تعني فئات السلوك المختلفة.', body: `## Overview

String's points system helps teachers recognize and track student behavior. As a parent, you can view your child's points summary to understand how they are doing in the classroom and celebrate their positive achievements.

## How Points Work

Teachers award points to students throughout the day based on behavior and participation. Points fall into categories defined by the school, such as:

- **Participation** — actively engaging in class activities and discussions
- **Teamwork** — collaborating well with classmates
- **Respect** — showing courtesy to teachers and peers
- **Responsibility** — completing homework, being prepared, following rules
- **Kindness** — helping others and being a good friend

Each school may customize the categories and point values to match their own behavior expectations.

## Viewing Your Child's Points Summary

1. Open the String app and select your child's class.
2. Tap the **Points** tab (star icon).
3. You will see a summary showing:
   - **Total points** earned this week/month
   - **Points by category** displayed in a color-coded chart
   - **Recent activity** showing the latest points awarded

## Understanding the Points Chart

- The **bar chart** shows points earned per category over a selected time period.
- **Green bars** indicate positive behavior points.
- **Yellow or red indicators** may appear if a teacher has noted areas for improvement (depending on school settings).
- Tap any bar to see the specific entries and teacher notes.

## Positive vs. Needs Improvement

Some schools use a two-sided system:

- **Positive points** are awarded for good behavior and effort.
- **Needs improvement notes** may be logged when a student needs to work on a specific area.

Both types help you have productive conversations with your child about their school day.

> **Tip:** Focus on celebrating the positive points your child earns. Use "needs improvement" notes as a conversation starter, not as punishment. A simple "How can I help you with that?" goes a long way.

### Talking to Your Child About Points

- "I saw you earned 5 Teamwork points today — tell me about that!"
- "Your Participation points have been going up every week. I'm proud of you."
- "It looks like Responsibility was tricky this week. What happened, and how can we work on it together?"`, body_ar: `## نظرة عامة

يساعد نظام النقاط في سترينج المعلمين على تقدير وتتبع سلوك الطلاب. يمكنك كولي أمر عرض ملخص نقاط طفلك لفهم أدائه في الفصل.

## كيف تعمل النقاط

يمنح المعلمون نقاطاً للطلاب بناءً على السلوك والمشاركة. تشمل الفئات:

- **المشاركة** — الانخراط في أنشطة الفصل
- **العمل الجماعي** — التعاون مع زملاء الفصل
- **الاحترام** — إظهار اللباقة للمعلمين والزملاء
- **المسؤولية** — إكمال الواجبات والاستعداد
- **اللطف** — مساعدة الآخرين

## عرض ملخص النقاط

1. افتح التطبيق واختر فصل طفلك.
2. اضغط على تبويب **النقاط** (أيقونة النجمة).
3. سترى ملخصاً يتضمن: إجمالي النقاط، والنقاط حسب الفئة، والنشاط الأخير.

## فهم مخطط النقاط

- **الأعمدة الخضراء** تشير إلى نقاط السلوك الإيجابي.
- اضغط على أي عمود لرؤية التفاصيل وملاحظات المعلم.

> **نصيحة:** ركّز على الاحتفال بالنقاط الإيجابية التي يكسبها طفلك. استخدم ملاحظات التحسين كبداية محادثة وليس عقاباً.` },
      { title: 'Viewing Weekly and Monthly Progress Reports', title_ar: 'عرض تقارير التقدم الأسبوعية والشهرية', summary: 'Track your child\'s progress over time with easy-to-read visual reports.', summary_ar: 'تتبع تقدم طفلك بمرور الوقت مع تقارير مرئية سهلة القراءة.', body: `## Overview

String automatically generates weekly and monthly progress reports that summarize your child's behavior, participation, and achievements. These visual reports make it easy to track trends and celebrate growth over time.

## Accessing Progress Reports

1. Open the String app and select your child's class.
2. Tap the **Points** tab (star icon).
3. Tap **Reports** at the top of the screen.
4. Choose between **Weekly Report** or **Monthly Report**.

## What's Included in a Weekly Report

Each weekly report covers Monday through Friday and includes:

- **Total points earned** that week
- **Breakdown by category** (Participation, Teamwork, Respect, etc.)
- **Comparison to the previous week** (up or down arrows)
- **Teacher highlights** — optional notes from the teacher about your child's week
- **Top achievement** — the category where your child excelled most

## What's Included in a Monthly Report

Monthly reports provide a broader view and include:

- **Weekly trends** shown in a line graph
- **Category averages** for the entire month
- **Growth indicators** comparing this month to the previous month
- **Milestones reached** (if applicable)

## Reading the Charts

- **Line graphs** show point trends over time — look for upward trends as a positive sign.
- **Pie charts** show the distribution of points across categories.
- **Color coding** helps you quickly identify strong areas (green) and areas for growth (yellow).

## Receiving Reports Automatically

You can receive reports via email or push notification:

1. Go to **Settings > Notifications**.
2. Under **Reports**, toggle on **Weekly Summary** and/or **Monthly Summary**.
3. Reports are typically sent on **Friday evenings** (weekly) and the **first day of each month** (monthly).

> **Tip:** Review the weekly report together with your child over the weekend. It is a great opportunity to discuss their week, celebrate wins, and set goals for the next one.

### Downloading Reports

Tap the **Download** icon on any report to save it as a PDF. This is useful for sharing with other family members or keeping for your records.`, body_ar: `## نظرة عامة

يُنشئ سترينج تلقائياً تقارير تقدم أسبوعية وشهرية تلخص سلوك طفلك ومشاركته وإنجازاته.

## الوصول لتقارير التقدم

1. افتح التطبيق واختر فصل طفلك.
2. اضغط على تبويب **النقاط** ثم **التقارير** في أعلى الشاشة.
3. اختر بين **التقرير الأسبوعي** أو **التقرير الشهري**.

## محتويات التقرير الأسبوعي

- إجمالي النقاط المكتسبة خلال الأسبوع
- التوزيع حسب الفئة (المشاركة، العمل الجماعي، الاحترام، إلخ)
- مقارنة بالأسبوع السابق
- أبرز إنجاز في الأسبوع

## محتويات التقرير الشهري

- اتجاهات أسبوعية في رسم بياني خطي
- متوسطات الفئات للشهر بأكمله
- مؤشرات النمو مقارنة بالشهر السابق

## قراءة الرسوم البيانية

- **الرسوم الخطية** تعرض اتجاهات النقاط — ابحث عن الاتجاهات الصاعدة كعلامة إيجابية.
- **الرسوم الدائرية** تعرض توزيع النقاط عبر الفئات.

## تلقي التقارير تلقائياً

1. اذهب إلى **الإعدادات > الإشعارات > التقارير** وفعّل الملخص الأسبوعي أو الشهري.

> **نصيحة:** راجع التقرير الأسبوعي مع طفلك في نهاية الأسبوع. إنها فرصة رائعة لمناقشة أسبوعه والاحتفال بإنجازاته.` },
      { title: 'Setting Up Point Milestone Notifications', title_ar: 'إعداد إشعارات إنجازات النقاط', summary: 'Get notified when your child reaches positive behavior milestones.', summary_ar: 'احصل على إشعار عندما يصل طفلك إلى إنجازات سلوكية إيجابية.', body: `## Overview

Point milestone notifications alert you when your child reaches important behavior achievements, such as earning their 50th Participation point or completing a week with perfect Responsibility scores. These celebrations make your child feel recognized and motivated.

## What Are Milestones?

Milestones are pre-set achievement thresholds that recognize consistent positive behavior. Examples include:

- **First 10 Points** — a great start in any category
- **50 Points in a Category** — showing consistent effort
- **100 Points Total** — a major achievement
- **Perfect Week** — earning points every day in a specific category
- **Category Champion** — highest points in a category for the month

Schools may customize these milestones to match their own recognition programs.

## How to Enable Milestone Notifications

1. Open the String app and tap your **profile icon**.
2. Go to **Settings > Notifications**.
3. Scroll to the **Points and Milestones** section.
4. Toggle on **Milestone Alerts**.
5. Choose your notification method:
   - **Push Notification** — instant alert on your phone
   - **Email** — milestone summary sent to your inbox
   - **Both** — receive alerts through both channels

## Customizing Which Milestones You Follow

You can choose to receive notifications for specific categories:

1. In **Settings > Notifications > Points and Milestones**, tap **Customize**.
2. Toggle individual categories on or off:
   - Participation
   - Teamwork
   - Respect
   - Responsibility
   - Kindness
3. Tap **Save** to apply.

## What a Milestone Notification Looks Like

When your child hits a milestone, you will receive a notification like:

> "Congratulations! Sarah just earned her 50th Teamwork point! She is showing great collaboration skills."

The notification includes:

- Your child's **name**
- The **milestone** reached
- The **category** it belongs to
- A **celebration message**

## Celebrating Milestones at Home

Milestones are a wonderful opportunity to reinforce positive behavior at home:

- Mention the milestone at dinner: "I heard you reached 50 Teamwork points — that's amazing!"
- Create a simple reward system at home tied to school milestones.
- Display milestone badges (available in the app) on your family's fridge or bulletin board.

> **Tip:** Even small celebrations matter. A high-five, a favorite meal, or extra screen time can make your child feel proud of their accomplishments.`, body_ar: `## نظرة عامة

تنبهك إشعارات الإنجازات عندما يحقق طفلك إنجازات سلوكية مهمة، مثل الحصول على 50 نقطة مشاركة أو إكمال أسبوع مثالي.

## ما هي الإنجازات؟

الإنجازات هي مستويات تحقيق محددة مسبقاً تعترف بالسلوك الإيجابي المستمر:

- **أول 10 نقاط** — بداية رائعة في أي فئة
- **50 نقطة في فئة** — جهد مستمر
- **100 نقطة إجمالي** — إنجاز كبير
- **أسبوع مثالي** — كسب نقاط كل يوم في فئة محددة

## تفعيل إشعارات الإنجازات

1. افتح التطبيق واذهب إلى **الإعدادات > الإشعارات**.
2. مرر إلى قسم **النقاط والإنجازات**.
3. فعّل **تنبيهات الإنجازات**.
4. اختر طريقة الإشعار: إشعار فوري أو بريد إلكتروني أو كليهما.

## تخصيص الإنجازات المتابَعة

1. في **الإعدادات > الإشعارات > النقاط والإنجازات**، اضغط **تخصيص**.
2. فعّل أو أوقف فئات محددة (المشاركة، العمل الجماعي، الاحترام، إلخ).

## الاحتفال بالإنجازات في المنزل

- اذكر الإنجاز على العشاء: "سمعت أنك حققت 50 نقطة عمل جماعي — هذا رائع!"
- أنشئ نظام مكافآت بسيط مرتبط بإنجازات المدرسة.

> **نصيحة:** حتى الاحتفالات البسيطة مهمة. تصفيق أو وجبة مفضلة يمكن أن تجعل طفلك فخوراً بإنجازاته.` },
    ],
    'stu_gs': [
      { title: 'Join a Class', title_ar: 'الانضمام إلى فصل', summary: 'How students can join a class using a code, QR scan, or teacher invitation.', summary_ar: 'كيف يمكن للطلاب الانضمام إلى فصل باستخدام رمز أو مسح QR أو دعوة المعلم.', body: `## Overview

To access class content, assignments, and your portfolio, you need to join a class on String. Your teacher will provide a class code, QR code, or invitation link.

## Using a Class Code

1. Log in to your String student account.
2. From your dashboard, tap **Join a Class**.
3. Enter the **class code** (e.g., ABC-1234) provided by your teacher.
4. Tap **Join**.
5. The class will appear on your dashboard immediately.

## Using a QR Code

1. Open the String app on your device.
2. Tap **Join a Class** > **Scan QR Code**.
3. Point your camera at the QR code displayed by your teacher.
4. You will be added to the class automatically.

## Using an Invitation Link

1. Open the link shared by your teacher (via email or learning management system).
2. Log in to your String account when prompted.
3. The class will be added to your account.

## Notes

- You can be a member of multiple classes at the same time.
- If the class requires approval, your teacher will need to accept your request.
- You can leave a class from **Settings > My Classes > Leave Class**.

## Troubleshooting

- **"Invalid code"** — Ask your teacher to verify the code. It may be expired.
- **Class not showing up** — Pull down to refresh your dashboard.
- **Already joined error** — Check your class list; you may already be a member.`, body_ar: `## نظرة عامة

للوصول إلى محتوى الفصل والواجبات وملفك، تحتاج إلى الانضمام إلى فصل على سترينج.

## باستخدام رمز الفصل

1. سجّل الدخول إلى حسابك الطلابي.
2. من لوحة القيادة، اضغط على **انضمام إلى فصل**.
3. أدخل **رمز الفصل** الذي قدمه معلمك.
4. اضغط على **انضمام**.

## باستخدام رمز QR

1. افتح تطبيق سترينج.
2. اضغط على **انضمام إلى فصل** > **مسح رمز QR**.
3. وجّه الكاميرا نحو رمز QR.

## باستخدام رابط الدعوة

1. افتح الرابط الذي شاركه معلمك.
2. سجّل الدخول عند المطالبة.

## ملاحظات

- يمكنك الانضمام لعدة فصول في نفس الوقت.
- يمكنك مغادرة فصل من **الإعدادات > فصولي > مغادرة الفصل**.

## استكشاف الأخطاء

- **"رمز غير صالح"** — اطلب من معلمك التحقق من الرمز.` },
      { title: 'Submit Assignments', title_ar: 'تقديم الواجبات', summary: 'How to view, complete, and submit assignments on String.', summary_ar: 'كيفية عرض الواجبات وإكمالها وتقديمها على سترينج.', body: `## Viewing Assignments

1. Log in to your String account.
2. Navigate to your **class page**.
3. Tap the **Assignments** tab to see all current and past assignments.
4. Assignments are sorted by due date, with the nearest deadline at the top.

## Submitting an Assignment

### From the Web

1. Click on the assignment you want to submit.
2. Read the instructions provided by your teacher.
3. Click **Add Submission**.
4. Choose how to submit:
   - **Upload a File** — Select a file from your computer (PDF, DOC, JPG, PNG, MP4).
   - **Type a Response** — Enter text directly in the response field.
   - **Add a Link** — Paste a URL to an external resource.
5. Click **Submit**.

### On iOS / Android

1. Tap the assignment from your class page.
2. Tap **Add Submission**.
3. Choose to upload a file, take a photo, or type a response.
4. Tap **Submit**.

## Resubmitting Work

If your teacher allows resubmissions:
1. Open the assignment.
2. Tap **Resubmit** next to your previous submission.
3. Upload the updated file or edit your response.
4. Tap **Submit** again.

## Notes

- Late submissions may be accepted depending on your teacher's settings.
- You will see a **green checkmark** next to submitted assignments.
- Your teacher will be notified when you submit or resubmit.

## Troubleshooting

- **File too large** — Maximum file size is 50 MB. Compress the file or upload a smaller version.
- **Cannot submit** — The deadline may have passed. Contact your teacher.`, body_ar: `## عرض الواجبات

1. سجّل الدخول إلى حسابك.
2. انتقل إلى **صفحة الفصل**.
3. اضغط على علامة تبويب **الواجبات**.
4. الواجبات مرتبة حسب تاريخ الاستحقاق.

## تقديم واجب

### من الويب

1. انقر على الواجب الذي تريد تقديمه.
2. اقرأ التعليمات.
3. انقر على **إضافة تقديم**.
4. اختر طريقة التقديم: رفع ملف، كتابة رد، أو إضافة رابط.
5. انقر على **تقديم**.

### على iOS / أندرويد

1. اضغط على الواجب.
2. اضغط على **إضافة تقديم**.
3. اختر رفع ملف أو التقاط صورة أو كتابة رد.
4. اضغط على **تقديم**.

## إعادة التقديم

1. افتح الواجب.
2. اضغط على **إعادة التقديم**.
3. ارفع الملف المحدّث.
4. اضغط على **تقديم** مرة أخرى.

## ملاحظات

- ستظهر **علامة صح خضراء** بجانب الواجبات المقدمة.
- سيُخطر معلمك عند التقديم.` },
      { title: 'View Grades', title_ar: 'عرض الدرجات', summary: 'How to check your grades, feedback, and grading history on String.', summary_ar: 'كيفية التحقق من درجاتك وملاحظات المعلم وسجل التقييم على سترينج.', body: `## Overview

After your teacher grades an assignment, you can view your score and any feedback they have provided.

## From the Web

1. Go to your **class page**.
2. Click the **Grades** tab.
3. You will see a list of all graded assignments with:
   - **Assignment name**
   - **Score** (e.g., 85/100 or A-)
   - **Date graded**
4. Click on any assignment to view **detailed feedback** from your teacher.

## On iOS / Android

1. Open your class.
2. Tap the **Grades** tab.
3. Tap an assignment to see your score and teacher comments.

## Understanding Your Grades

| Symbol | Meaning |
|--------|---------|
| ✓ | Submitted and graded |
| — | Not yet graded |
| ⚠️ | Late submission |
| ✗ | Missing assignment |

## Notes

- Grades are visible only to you and your teacher (and your parent/guardian if they are connected).
- Your teacher may update grades after initial posting. You will receive a notification if a grade changes.
- If you believe a grade is incorrect, message your teacher directly through String.

## Troubleshooting

- **Grade not showing** — Your teacher may not have graded the assignment yet. Check back later.
- **Score looks wrong** — Contact your teacher through the Messages tab.`, body_ar: `## نظرة عامة

بعد أن يُقيّم معلمك واجبًا، يمكنك عرض درجتك وأي ملاحظات.

## من الويب

1. انتقل إلى **صفحة الفصل**.
2. انقر على علامة تبويب **الدرجات**.
3. سترى قائمة بجميع الواجبات المقيّمة مع الدرجة وتاريخ التقييم.
4. انقر على أي واجب لعرض **الملاحظات التفصيلية**.

## على iOS / أندرويد

1. افتح فصلك.
2. اضغط على علامة تبويب **الدرجات**.
3. اضغط على واجب لعرض درجتك وتعليقات المعلم.

## فهم درجاتك

| الرمز | المعنى |
|-------|--------|
| ✓ | مقدم ومقيّم |
| — | لم يُقيّم بعد |
| ⚠️ | تقديم متأخر |
| ✗ | واجب مفقود |

## ملاحظات

- الدرجات مرئية لك ولمعلمك فقط (ولولي أمرك إذا كان متصلاً).
- قد يُحدّث معلمك الدرجات بعد النشر الأولي.` },
      { title: 'Track Progress', title_ar: 'تتبع التقدم', summary: 'Monitor your academic and behavioral progress over time using the progress dashboard.', summary_ar: 'راقب تقدمك الأكاديمي والسلوكي بمرور الوقت باستخدام لوحة قيادة التقدم.', body: `## Overview

The Progress Dashboard gives you a visual summary of your performance across assignments, behavior points, and portfolio activity.

## Accessing Your Progress Dashboard

### From the Web

1. Click your **profile icon** in the top-right corner.
2. Select **My Progress**.
3. You will see:
   - **Assignment Completion Rate** — Percentage of assignments submitted on time.
   - **Average Grade** — Your overall grade average across all classes.
   - **Points Summary** — Total positive and needs-improvement points.
   - **Portfolio Activity** — Number of portfolio entries submitted.

### On iOS / Android

1. Tap your **profile icon**.
2. Tap **My Progress**.

## Understanding the Charts

- **Weekly Activity Graph** — Shows your submission and engagement trends over the past 4 weeks.
- **Points Breakdown** — A pie chart showing the distribution of your behavior points by category.
- **Class Comparison** — If you are in multiple classes, see your performance across each one.

## Setting Goals

1. From the Progress Dashboard, tap **Set a Goal**.
2. Choose a goal type:
   - **Submit all assignments on time this week**
   - **Earn 10 positive points this week**
   - **Add 2 portfolio entries this month**
3. Tap **Save**. Your progress toward the goal will be tracked on your dashboard.

## Notes

- Your progress data is private and visible only to you and your teacher.
- Parents/guardians can also view your progress from their account.
- Progress data resets at the start of each grading period (configurable by your teacher).

## Troubleshooting

- **Data not updating** — Progress updates every few hours. Check back later.
- **Missing class data** — Ensure you are connected to all your classes.`, body_ar: `## نظرة عامة

تمنحك لوحة قيادة التقدم ملخصًا مرئيًا لأدائك عبر الواجبات ونقاط السلوك ونشاط الملف.

## الوصول إلى لوحة قيادة التقدم

### من الويب

1. انقر على **أيقونة ملفك الشخصي**.
2. اختر **تقدمي**.
3. سترى:
   - **معدل إكمال الواجبات**
   - **متوسط الدرجات**
   - **ملخص النقاط**
   - **نشاط الملف**

### على iOS / أندرويد

1. اضغط على **أيقونة ملفك الشخصي**.
2. اضغط على **تقدمي**.

## تحديد الأهداف

1. من لوحة قيادة التقدم، اضغط على **تحديد هدف**.
2. اختر نوع الهدف:
   - **تقديم جميع الواجبات في الوقت المحدد هذا الأسبوع**
   - **كسب 10 نقاط إيجابية هذا الأسبوع**
3. اضغط على **حفظ**.

## ملاحظات

- بيانات تقدمك خاصة ومرئية لك ولمعلمك فقط.
- يمكن لأولياء الأمور أيضًا عرض تقدمك.` },
    ],
    'stu_tools': [
      { title: 'Upload Work', title_ar: 'رفع الأعمال', summary: 'How to upload photos, videos, documents, and projects to your student portfolio.', summary_ar: 'كيفية رفع الصور والفيديو والمستندات والمشاريع إلى ملف الطالب.', body: `## Overview

Your portfolio is a digital collection of your best work. You can add entries throughout the school year to showcase your learning and growth.

## From the Web

1. Navigate to your **class page**.
2. Click the **Portfolio** tab.
3. Click **Add Entry**.
4. Choose a content type:
   - **Photo** — Upload an image of your work (JPG, PNG, max 10 MB).
   - **Video** — Upload a video clip (MP4, max 100 MB).
   - **Document** — Upload a PDF or Word document.
   - **Text** — Type a written reflection or essay.
5. Add a **title** and optional **description** for your entry.
6. Click **Submit for Review**.

## On iOS / Android

1. Open your class and tap the **Portfolio** tab.
2. Tap **Add Entry**.
3. Take a photo, record a video, or select a file from your device.
4. Add a title and description.
5. Tap **Submit**.

## Notes

- Your teacher will review your submission before it is published to families.
- You can save a draft and submit it later by tapping **Save as Draft**.
- Maximum file sizes: Photos (10 MB), Videos (100 MB), Documents (25 MB).

## Troubleshooting

- **Upload failed** — Check your internet connection and file size.
- **Unsupported format** — Convert your file to a supported format (JPG, PNG, MP4, PDF).
- **Entry not appearing** — It may be pending teacher approval.`, body_ar: `## نظرة عامة

ملفك هو مجموعة رقمية من أفضل أعمالك. يمكنك إضافة إدخالات طوال العام الدراسي.

## من الويب

1. انتقل إلى **صفحة الفصل**.
2. انقر على علامة تبويب **الملف**.
3. انقر على **إضافة إدخال**.
4. اختر نوع المحتوى: صورة، فيديو، مستند، أو نص.
5. أضف **عنوانًا** و**وصفًا** اختياريًا.
6. انقر على **تقديم للمراجعة**.

## على iOS / أندرويد

1. افتح فصلك واضغط على علامة تبويب **الملف**.
2. اضغط على **إضافة إدخال**.
3. التقط صورة أو سجّل فيديو أو اختر ملفًا.
4. أضف عنوانًا ووصفًا.
5. اضغط على **تقديم**.

## ملاحظات

- سيراجع معلمك تقديمك قبل نشره.
- يمكنك حفظ مسودة وتقديمها لاحقًا.` },
      { title: 'Edit or Delete Work', title_ar: 'تعديل أو حذف الأعمال', summary: 'How to modify or remove entries from your student portfolio.', summary_ar: 'كيفية تعديل أو إزالة إدخالات من ملف الطالب.', body: `## Editing a Portfolio Entry

### From the Web

1. Go to your **Portfolio** tab.
2. Click on the entry you want to edit.
3. Click the **Edit** button (pencil icon).
4. Update the title, description, or replace the attached file.
5. Click **Save Changes**.

### On iOS / Android

1. Open the **Portfolio** tab in your class.
2. Tap the entry you want to edit.
3. Tap **Edit**.
4. Make your changes and tap **Save**.

## Deleting a Portfolio Entry

### From the Web

1. Go to your **Portfolio** tab.
2. Click on the entry you want to delete.
3. Click the **three-dot menu** (⋮) and select **Delete**.
4. Confirm by clicking **Yes, Delete**.

### On iOS / Android

1. Open the entry.
2. Tap the **three-dot menu** > **Delete**.
3. Confirm the deletion.

## Notes

- Deleted entries cannot be recovered. Download a copy before deleting if needed.
- If your entry has already been approved and shared with families, deleting it will also remove it from their view.
- You can only edit entries that are still pending review or that your teacher has allowed edits on.

## Troubleshooting

- **Cannot edit** — The entry may have been locked by your teacher after approval.
- **Delete button missing** — Some entries may be protected by your teacher. Ask them to unlock it.`, body_ar: `## تعديل إدخال في الملف

### من الويب

1. انتقل إلى علامة تبويب **الملف**.
2. انقر على الإدخال الذي تريد تعديله.
3. انقر على زر **تعديل** (أيقونة القلم).
4. حدّث العنوان أو الوصف أو استبدل الملف المرفق.
5. انقر على **حفظ التغييرات**.

### على iOS / أندرويد

1. افتح علامة تبويب **الملف**.
2. اضغط على الإدخال ثم اضغط على **تعديل**.
3. أجرِ تغييراتك واضغط على **حفظ**.

## حذف إدخال من الملف

### من الويب

1. انقر على الإدخال الذي تريد حذفه.
2. انقر على **قائمة النقاط الثلاث** (⋮) واختر **حذف**.
3. أكد بالنقر على **نعم، احذف**.

### على iOS / أندرويد

1. افتح الإدخال.
2. اضغط على **قائمة النقاط الثلاث** > **حذف**.
3. أكد الحذف.

## ملاحظات

- الإدخالات المحذوفة لا يمكن استرجاعها.
- إذا تمت الموافقة على إدخالك ومشاركته، فإن حذفه سيزيله أيضًا من عرض العائلات.` },
      { title: 'Share Portfolio', title_ar: 'مشاركة الملف', summary: 'How to share your portfolio with parents, teachers, and other audiences.', summary_ar: 'كيفية مشاركة ملفك مع أولياء الأمور والمعلمين والجماهير الأخرى.', body: `## Overview

Once your teacher approves your portfolio entries, they are automatically shared with your connected parents/guardians. You can also share your portfolio externally using a shareable link.

## Automatic Sharing with Families

- Approved portfolio entries are **automatically visible** to your parents/guardians through their String account.
- Parents can view entries, leave comments, and download files.
- No action is required from you — sharing happens when your teacher approves the entry.

## Sharing via Link

### From the Web

1. Go to your **Portfolio** tab.
2. Click **Share Portfolio** in the top-right corner.
3. A **shareable link** will be generated.
4. Copy the link and send it via email, text, or social media.

### On iOS / Android

1. Open the **Portfolio** tab.
2. Tap **Share** (share icon).
3. Choose to copy the link or share directly through an app on your device.

## Privacy Settings

- Your teacher controls whether the shareable link feature is enabled.
- Shared links are **view-only** — recipients cannot edit or delete your entries.
- You can **disable the link** at any time from your Portfolio settings.

## Notes

- The shareable link shows only approved entries (not drafts or pending items).
- Anyone with the link can view the portfolio. Do not share it publicly unless intended.
- Downloaded portfolio items retain the original file quality.

## Troubleshooting

- **Share button not available** — Your teacher may have disabled external sharing. Ask them to enable it.
- **Link expired** — Generate a new link from the Portfolio tab.`, body_ar: `## نظرة عامة

بمجرد موافقة معلمك على إدخالات ملفك، تتم مشاركتها تلقائيًا مع أولياء أمورك المتصلين.

## المشاركة التلقائية مع العائلات

- الإدخالات المعتمدة تكون **مرئية تلقائيًا** لأولياء أمورك عبر حسابهم.
- يمكن لأولياء الأمور عرض الإدخالات وترك تعليقات وتنزيل الملفات.

## المشاركة عبر رابط

### من الويب

1. انتقل إلى علامة تبويب **الملف**.
2. انقر على **مشاركة الملف**.
3. سيتم إنشاء **رابط قابل للمشاركة**.
4. انسخ الرابط وأرسله.

### على iOS / أندرويد

1. افتح علامة تبويب **الملف**.
2. اضغط على **مشاركة**.
3. اختر نسخ الرابط أو المشاركة عبر تطبيق آخر.

## إعدادات الخصوصية

- يتحكم معلمك في تفعيل ميزة الرابط القابل للمشاركة.
- الروابط المشتركة **للعرض فقط**.
- يمكنك **تعطيل الرابط** في أي وقت.

## ملاحظات

- يعرض الرابط الإدخالات المعتمدة فقط.
- أي شخص لديه الرابط يمكنه عرض الملف.` },
    ],
    'stu_safety': [
      { title: 'Staying Safe on String: Student Guidelines', title_ar: 'البقاء آمنًا على سترينج: إرشادات الطلاب', summary: 'Important rules and best practices for being a responsible digital citizen.', summary_ar: 'قواعد مهمة وأفضل الممارسات لتكون مواطنًا رقميًا مسؤولًا.', body: `## Overview

String is a safe space for learning and connecting with your class. To keep it that way, every student plays an important role. This guide covers the key rules and best practices for being a responsible digital citizen on String.

## The Golden Rules

1. **Be respectful** — Treat everyone online the same way you would in person.
2. **Be honest** — Only share your own work and always tell the truth.
3. **Be kind** — Use encouraging words and support your classmates.
4. **Be careful** — Think before you post or send anything.

## What You Can Do on String

- View your class **Story** and enjoy posts from your teacher.
- Submit work to your **Portfolio** for your teacher to review.
- Check your **Behavior Points** and track your progress.
- Send messages to your teacher (if messaging is enabled by your school).

## What You Should Never Do

- **Never share personal information** — Do not post your home address, phone number, or passwords.
- **Never bully or tease** — Hurtful words online are just as harmful as in person.
- **Never share someone else's private information** — Respect your classmates' privacy.
- **Never pretend to be someone else** — Always use your real name and account.

## Digital Citizenship Tips

- **Pause before posting** — Ask yourself: "Would I be okay if my teacher or parent saw this?"
- **Report problems** — If something makes you uncomfortable, use the **Report** button or tell a trusted adult.
- **Log out on shared devices** — Always sign out when using a school computer or shared tablet.
- **Keep your password private** — Never share your password with friends.

## Getting Help

If you ever feel unsafe or see something that concerns you:

1. Click the **Report** button on the content.
2. Tell your teacher or another trusted adult.
3. Your school's administration will handle it from there.

> **Remember:** You are never in trouble for reporting something. Reporting helps keep everyone safe.`, body_ar: `## نظرة عامة

سترينج هو مساحة آمنة للتعلم والتواصل مع فصلك. للحفاظ على ذلك، كل طالب يلعب دورًا مهمًا. يغطي هذا الدليل القواعد الأساسية وأفضل الممارسات لتكون مواطنًا رقميًا مسؤولًا.

## القواعد الذهبية

1. **كن محترمًا** — عامل الجميع عبر الإنترنت كما تعاملهم شخصيًا.
2. **كن صادقًا** — شارك عملك الخاص فقط وقل الحقيقة دائمًا.
3. **كن لطيفًا** — استخدم كلمات مشجعة وادعم زملاءك.
4. **كن حذرًا** — فكر قبل أن تنشر أو ترسل أي شيء.

## ما يمكنك فعله على سترينج

- عرض **قصة** فصلك والاستمتاع بمنشورات معلمك.
- تقديم أعمال إلى **ملفك** ليراجعها معلمك.
- التحقق من **نقاط السلوك** وتتبع تقدمك.
- إرسال رسائل إلى معلمك (إذا كانت المراسلة مفعّلة).

## ما يجب ألا تفعله أبدًا

- **لا تشارك معلومات شخصية** — لا تنشر عنوان منزلك أو رقم هاتفك أو كلمات المرور.
- **لا تتنمر أو تسخر** — الكلمات المؤذية عبر الإنترنت مؤذية تمامًا كما في الواقع.
- **لا تشارك معلومات خاصة بالآخرين** — احترم خصوصية زملائك.

## نصائح المواطنة الرقمية

- **توقف قبل النشر** — اسأل نفسك: "هل سأكون مرتاحًا لو رأى معلمي أو والدي هذا؟"
- **أبلغ عن المشاكل** — إذا جعلك شيء غير مرتاح، استخدم زر **الإبلاغ** أو أخبر شخصًا بالغًا تثق به.
- **سجّل الخروج من الأجهزة المشتركة** — سجّل الخروج دائمًا عند استخدام كمبيوتر المدرسة.

> **تذكر:** لن تكون في ورطة أبدًا بسبب الإبلاغ عن شيء ما. الإبلاغ يساعد في الحفاظ على سلامة الجميع.` },
      { title: 'Reporting Inappropriate Content or Behavior', title_ar: 'الإبلاغ عن محتوى أو سلوك غير لائق', summary: 'How to flag something that makes you uncomfortable and what happens next.', summary_ar: 'كيفية الإبلاغ عن شيء يزعجك وماذا يحدث بعد ذلك.', body: `## Overview

If you see something on String that makes you feel uncomfortable, scared, or upset, you should report it right away. Reporting is easy, private, and helps keep String a safe place for everyone.

## What Should Be Reported?

You should report anything that:

- Contains **mean, hurtful, or threatening language**.
- Shows **inappropriate images or videos**.
- Involves someone **pretending to be another person**.
- Makes you feel **unsafe or uncomfortable** for any reason.
- Shares **personal information** about you or someone else without permission.

> **Important:** You do not need to be 100% sure something is wrong to report it. If it feels off, report it — an adult will review it.

## How to Report Content

### On the Web

1. Find the content (post, message, or comment) that concerns you.
2. Click the **three-dot menu** (⋯) next to the content.
3. Select **Report**.
4. Choose a reason from the list (e.g., "Bullying," "Inappropriate content," "Spam").
5. Optionally, add a short description of why you are reporting.
6. Click **Submit Report**.

### On iOS or Android

1. Tap and hold the content that concerns you.
2. Tap **Report** from the menu that appears.
3. Select a reason for your report.
4. Tap **Submit**.

## What Happens After You Report?

1. Your report is sent **privately** to your teacher and school administrators. No one else can see that you made a report.
2. A teacher or admin reviews the content within **24 hours**.
3. If the content violates school policies, it will be **removed** and the person responsible may receive a consequence.
4. You may receive a follow-up from your teacher to make sure you feel safe.

## Frequently Asked Questions

- **Will the person know I reported them?** — No. Reports are completely anonymous.
- **Can I report something by accident?** — Yes, and that is okay. The reviewer will simply dismiss it.
- **What if the problem continues?** — Report again and also tell a trusted adult in person.`, body_ar: `## نظرة عامة

إذا رأيت شيئًا على سترينج يجعلك تشعر بعدم الارتياح أو الخوف أو الانزعاج، يجب عليك الإبلاغ عنه فورًا. الإبلاغ سهل وخاص ويساعد في الحفاظ على سترينج كمكان آمن للجميع.

## ما الذي يجب الإبلاغ عنه؟

يجب الإبلاغ عن أي شيء:

- يحتوي على **لغة مؤذية أو تهديدية**.
- يعرض **صورًا أو مقاطع فيديو غير لائقة**.
- يتضمن شخصًا **ينتحل شخصية شخص آخر**.
- يجعلك تشعر **بعدم الأمان** لأي سبب.
- يشارك **معلومات شخصية** عنك أو عن شخص آخر بدون إذن.

> **مهم:** لا تحتاج أن تكون متأكدًا 100% أن شيئًا خاطئًا للإبلاغ عنه. إذا شعرت بشيء غريب، أبلغ عنه.

## كيفية الإبلاغ عن محتوى

### على الويب

1. ابحث عن المحتوى الذي يقلقك.
2. انقر على **قائمة النقاط الثلاث** (⋯) بجانب المحتوى.
3. اختر **إبلاغ**.
4. اختر سببًا من القائمة.
5. اختياريًا، أضف وصفًا قصيرًا.
6. انقر على **إرسال البلاغ**.

### على iOS أو أندرويد

1. اضغط مطولًا على المحتوى الذي يقلقك.
2. اضغط على **إبلاغ**.
3. اختر سببًا لبلاغك.
4. اضغط على **إرسال**.

## ماذا يحدث بعد الإبلاغ؟

1. يُرسل بلاغك **بشكل خاص** إلى معلمك ومسؤولي المدرسة.
2. يراجع معلم أو مسؤول المحتوى خلال **24 ساعة**.
3. إذا انتهك المحتوى سياسات المدرسة، سيتم **إزالته**.
4. قد تتلقى متابعة من معلمك للتأكد من شعورك بالأمان.

## أسئلة شائعة

- **هل سيعرف الشخص أنني أبلغت عنه؟** — لا. البلاغات مجهولة تمامًا.
- **هل يمكنني الإبلاغ عن شيء بالخطأ؟** — نعم، ولا بأس بذلك.
- **ماذا لو استمرت المشكلة؟** — أبلغ مرة أخرى وأخبر شخصًا بالغًا تثق به شخصيًا.` },
      { title: 'Protecting Your Personal Information Online', title_ar: 'حماية معلوماتك الشخصية عبر الإنترنت', summary: 'Learn what information to keep private and why it matters for your safety.', summary_ar: 'تعلم ما المعلومات التي يجب الحفاظ على خصوصيتها ولماذا هي مهمة لسلامتك.', body: `## Overview

Your personal information is valuable, and keeping it private is one of the most important things you can do to stay safe online. This guide explains what counts as personal information, why it matters, and how to protect yourself on String and beyond.

## What Is Personal Information?

Personal information is any detail that can be used to identify or locate you. This includes:

- **Full name** (first and last together)
- **Home address**
- **Phone number**
- **Email address**
- **Birthday and age**
- **Passwords and login credentials**
- **Photos that reveal your location** (e.g., in front of your house)
- **School name and grade** (when shared publicly)

## Why Does It Matter?

Sharing personal information online can lead to:

- **Unwanted contact** from strangers.
- **Identity theft** — someone pretending to be you.
- **Safety risks** — people knowing where you live or go to school.

> **Remember:** Once something is posted online, it can be very difficult to take back.

## How to Protect Yourself on String

### Do

- Use only your **first name** or the display name assigned by your school.
- Keep your **password private** — never share it, even with best friends.
- **Log out** after using shared or public devices.
- Talk to a trusted adult if someone asks you for personal information.

### Don't

- Don't include your **address, phone number, or birthday** in messages, posts, or portfolio descriptions.
- Don't share your **password** with anyone except a parent or guardian.
- Don't post photos that show **identifiable locations** like your house number or street sign.
- Don't click on **suspicious links** sent by anyone, even if they seem to know you.

## Creating a Strong Password

1. Use at least **8 characters**.
2. Mix **uppercase letters**, **lowercase letters**, **numbers**, and **symbols**.
3. Avoid using your **name, birthday, or common words** (e.g., "password123").
4. Use a different password for String than you use for other accounts.

> **Tip:** A fun way to create a strong password is to pick a sentence you can remember and use the first letters: "My dog Buddy loves 2 play fetch!" becomes \`MdBl2pf!\`

## What to Do If You Think Your Information Was Shared

1. **Tell a trusted adult** (teacher, parent, or guardian) immediately.
2. **Change your password** right away if you think someone else knows it.
3. **Report the content** on String so it can be reviewed and removed.`, body_ar: `## نظرة عامة

معلوماتك الشخصية قيّمة، والحفاظ على خصوصيتها هو أحد أهم الأشياء التي يمكنك فعلها للبقاء آمنًا عبر الإنترنت. يشرح هذا الدليل ما يُعتبر معلومات شخصية ولماذا هي مهمة وكيفية حماية نفسك.

## ما هي المعلومات الشخصية؟

المعلومات الشخصية هي أي تفاصيل يمكن استخدامها لتحديد هويتك أو موقعك:

- **الاسم الكامل**
- **عنوان المنزل**
- **رقم الهاتف**
- **البريد الإلكتروني**
- **تاريخ الميلاد والعمر**
- **كلمات المرور**
- **صور تكشف موقعك**

## لماذا هذا مهم؟

مشاركة المعلومات الشخصية عبر الإنترنت قد تؤدي إلى:

- **اتصال غير مرغوب** من غرباء.
- **سرقة الهوية** — شخص يتظاهر بأنه أنت.
- **مخاطر أمنية** — أشخاص يعرفون أين تعيش أو تدرس.

## كيف تحمي نفسك على سترينج

### افعل

- استخدم **اسمك الأول فقط** أو الاسم المعروض المحدد من مدرستك.
- احتفظ **بكلمة المرور خاصة** — لا تشاركها أبدًا.
- **سجّل الخروج** بعد استخدام الأجهزة المشتركة.

### لا تفعل

- لا تضمّن **عنوانك أو رقم هاتفك** في الرسائل أو المنشورات.
- لا تشارك **كلمة المرور** مع أي شخص غير والديك.
- لا تنشر صورًا تُظهر **مواقع يمكن التعرف عليها**.

## إنشاء كلمة مرور قوية

1. استخدم **8 أحرف على الأقل**.
2. اخلط بين **الأحرف الكبيرة** و**الصغيرة** و**الأرقام** و**الرموز**.
3. تجنب استخدام **اسمك أو تاريخ ميلادك أو كلمات شائعة**.

## ماذا تفعل إذا تمت مشاركة معلوماتك

1. **أخبر شخصًا بالغًا تثق به** فورًا.
2. **غيّر كلمة المرور** على الفور.
3. **أبلغ عن المحتوى** على سترينج ليتم مراجعته وإزالته.` },
    ],
    'stu_acct': [
      { title: 'How to Create a Student Account', title_ar: 'كيفية إنشاء حساب طالب', summary: 'Step-by-step guide to creating your student account on String, verifying it, and logging in for the first time.', summary_ar: 'دليل خطوة بخطوة لإنشاء حسابك الطلابي على سترينج والتحقق منه وتسجيل الدخول لأول مرة.', body: `## Requirements

Before you begin, make sure you have the following:

- A valid **email address** or **phone number** (your school email is recommended).
- A **class code** provided by your teacher (e.g., ABC-1234). This is optional during sign-up but required to join a class.
- A device with internet access — String works on computers, tablets, and smartphones.

> **Note:** If your school uses Single Sign-On (SSO) with Google or Microsoft, you may be able to skip manual registration entirely. Ask your teacher if SSO is available.

## Step-by-Step Sign Up

Follow these steps to create your student account:

1. Open your web browser and go to **string.education/signup**.
2. Select **I'm a Student**.
3. Enter your **first name** and **last name** as they appear in your school records.
4. Provide your **email address** or **phone number**.
5. Create a **strong password** — use at least 8 characters with a mix of letters, numbers, and symbols.
6. If your teacher gave you a **class code**, enter it now. You can also add it later from your dashboard.
7. Review the **Terms of Service** and **Privacy Policy**, then check the agreement box.
8. Click **Create Account**.

> **Tip:** Write your password down and keep it in a safe place until you have it memorized. Never share your password with other students.

## Verify Your Account

After signing up, you need to verify your account:

1. Check your **email inbox** (or text messages if you used a phone number) for a verification message from String.
2. Open the message and click the **Verify My Account** button or enter the **6-digit code** provided.
3. Once verified, you will be redirected to your dashboard.

If you do not see the verification message:

- Check your **spam or junk folder**.
- Make sure you entered the correct email address or phone number.
- Click **Resend Verification** on the login page.
- Ask your teacher or school IT team for help if the problem persists.

## Logging In

Once your account is verified, you can log in at any time:

1. Go to **string.education/login**.
2. Enter your **email address** (or phone number) and **password**.
3. Click **Sign In**.
4. You will be taken to your student dashboard where you can view your classes, portfolio, and messages.

> **Tip:** Check the **Remember me** box on your personal device so you do not have to enter your credentials every time.

## Common Issues and Fixes

Here are solutions to the most common problems students encounter:

- **"Email already in use"** — You may already have an account. Try the **Forgot Password** link on the login page to recover access.
- **"Invalid class code"** — Class codes are case-sensitive and may expire. Ask your teacher for a fresh code.
- **"Verification email not received"** — Check your spam folder. If still missing, click **Resend Verification** or ask your teacher for help.
- **"Password too weak"** — Make sure your password is at least 8 characters and includes a mix of letters, numbers, and symbols.
- **"Cannot log in after verification"** — Clear your browser cache and try again, or use a different browser.
- **Account locked** — If you enter the wrong password too many times, your account may be temporarily locked. Wait 15 minutes and try again, or contact your teacher.

## Privacy and Safety Tips

Your safety online is important. Follow these tips to protect your account:

- **Keep your password private** — never share it with friends or classmates.
- **Log out on shared devices** — always sign out when using a school computer, library computer, or a friend's device.
- **Use your real name** — use the name your school has on file so your teacher can find you.
- **Do not share personal information** — never post your home address, phone number, or birthday in messages or portfolio entries.
- **Report suspicious activity** — if someone else is using your account or you notice something strange, tell your teacher immediately and change your password.

> **Remember:** String is designed to be a safe learning space. If anything ever makes you uncomfortable, talk to a trusted adult right away.`, body_ar: `## المتطلبات

قبل البدء، تأكد من توفر التالي:

- **بريد إلكتروني** أو **رقم هاتف** صالح (يُفضّل بريد المدرسة).
- **رمز الفصل** الذي أعطاك إياه معلمك (مثل: ABC-1234). وهو اختياري عند التسجيل لكنه مطلوب للانضمام إلى فصل.
- جهاز متصل بالإنترنت — يعمل سترينج على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف الذكية.

> **ملاحظة:** إذا كانت مدرستك تستخدم تسجيل الدخول الموحد (SSO) عبر Google أو Microsoft، فقد تتمكن من تخطي التسجيل اليدوي. اسأل معلمك إذا كان SSO متاحًا.

## خطوات التسجيل

اتبع هذه الخطوات لإنشاء حسابك الطلابي:

1. افتح متصفح الويب وانتقل إلى **string.education/signup**.
2. اختر **أنا طالب**.
3. أدخل **اسمك الأول** و**اسم العائلة** كما يظهران في سجلات المدرسة.
4. أدخل **بريدك الإلكتروني** أو **رقم هاتفك**.
5. أنشئ **كلمة مرور قوية** — استخدم 8 أحرف على الأقل مع مزيج من الأحرف والأرقام والرموز.
6. إذا أعطاك معلمك **رمز فصل**، أدخله الآن. يمكنك أيضًا إضافته لاحقًا من لوحة القيادة.
7. راجع **شروط الخدمة** و**سياسة الخصوصية**، ثم ضع علامة في خانة الموافقة.
8. انقر على **إنشاء حساب**.

> **نصيحة:** اكتب كلمة المرور واحتفظ بها في مكان آمن حتى تحفظها. لا تشارك كلمة المرور مع طلاب آخرين أبدًا.

## تحقق من حسابك

بعد التسجيل، تحتاج إلى التحقق من حسابك:

1. تحقق من **بريدك الإلكتروني** (أو الرسائل النصية إذا استخدمت رقم هاتف) بحثًا عن رسالة تحقق من سترينج.
2. افتح الرسالة وانقر على زر **تحقق من حسابي** أو أدخل **الرمز المكون من 6 أرقام**.
3. بمجرد التحقق، سيتم توجيهك إلى لوحة القيادة.

إذا لم تجد رسالة التحقق:

- تحقق من **مجلد البريد العشوائي أو غير المرغوب فيه**.
- تأكد من إدخال البريد الإلكتروني أو رقم الهاتف الصحيح.
- انقر على **إعادة إرسال التحقق** في صفحة تسجيل الدخول.
- اطلب المساعدة من معلمك أو فريق تقنية المعلومات في المدرسة إذا استمرت المشكلة.

## تسجيل الدخول

بمجرد التحقق من حسابك، يمكنك تسجيل الدخول في أي وقت:

1. انتقل إلى **string.education/login**.
2. أدخل **بريدك الإلكتروني** (أو رقم هاتفك) و**كلمة المرور**.
3. انقر على **تسجيل الدخول**.
4. سيتم نقلك إلى لوحة القيادة الطلابية حيث يمكنك عرض فصولك وملفك ورسائلك.

> **نصيحة:** ضع علامة على خيار **تذكرني** على جهازك الشخصي حتى لا تضطر لإدخال بياناتك في كل مرة.

## المشاكل الشائعة وحلولها

إليك حلول لأكثر المشاكل شيوعًا التي يواجهها الطلاب:

- **"البريد الإلكتروني مستخدم بالفعل"** — قد يكون لديك حساب بالفعل. جرّب رابط **نسيت كلمة المرور** في صفحة تسجيل الدخول.
- **"رمز الفصل غير صالح"** — رموز الفصل حساسة لحالة الأحرف وقد تنتهي صلاحيتها. اطلب من معلمك رمزًا جديدًا.
- **"لم يتم استلام بريد التحقق"** — تحقق من مجلد البريد العشوائي. إذا لم تجده، انقر على **إعادة إرسال التحقق** أو اطلب المساعدة من معلمك.
- **"كلمة المرور ضعيفة جدًا"** — تأكد من أن كلمة المرور تتكون من 8 أحرف على الأقل وتتضمن مزيجًا من الأحرف والأرقام والرموز.
- **"لا يمكن تسجيل الدخول بعد التحقق"** — امسح ذاكرة التخزين المؤقت للمتصفح وحاول مرة أخرى، أو استخدم متصفحًا مختلفًا.
- **الحساب مقفل** — إذا أدخلت كلمة المرور الخاطئة عدة مرات، قد يتم قفل حسابك مؤقتًا. انتظر 15 دقيقة وحاول مرة أخرى، أو تواصل مع معلمك.

## نصائح الخصوصية والأمان

سلامتك عبر الإنترنت مهمة. اتبع هذه النصائح لحماية حسابك:

- **احتفظ بكلمة المرور خاصة** — لا تشاركها مع أصدقائك أو زملائك أبدًا.
- **سجّل الخروج من الأجهزة المشتركة** — سجّل الخروج دائمًا عند استخدام كمبيوتر المدرسة أو المكتبة أو جهاز صديق.
- **استخدم اسمك الحقيقي** — استخدم الاسم المسجل في مدرستك حتى يتمكن معلمك من العثور عليك.
- **لا تشارك معلومات شخصية** — لا تنشر عنوان منزلك أو رقم هاتفك أو تاريخ ميلادك في الرسائل أو إدخالات الملف.
- **أبلغ عن النشاط المشبوه** — إذا كان شخص آخر يستخدم حسابك أو لاحظت شيئًا غريبًا، أخبر معلمك فورًا وغيّر كلمة المرور.

> **تذكر:** سترينج مصمم ليكون مساحة تعلم آمنة. إذا جعلك أي شيء غير مرتاح، تحدث إلى شخص بالغ تثق به على الفور.` },
      { title: 'DNA', title_ar: 'اختبار DNA للشخصية', summary: 'DNA is a 96-question personality assessment designed to help students understand their strengths, learning style, and personal traits.', summary_ar: 'اختبار DNA هو تقييم شخصية مكوّن من 96 سؤالاً مصمم لمساعدة الطلاب على فهم نقاط قوتهم وأسلوب تعلمهم وسماتهم الشخصية.', body: `## What Is DNA?

DNA is a structured **96-question personality assessment** built into the String Tutor platform. It is designed to help students discover their unique personality patterns, strengths, communication style, and learning preferences.

- DNA is **not** a school exam — there are no right or wrong answers.
- There is **no pass or fail** — every result is valuable.
- DNA stands for your personal blueprint — it maps out what makes you, *you*.

> **Important:** DNA is a self-discovery tool, not a test of intelligence or academic ability. Every personality type has its own strengths.

## How Does the DNA Test Work?

The DNA assessment is simple and straightforward:

1. Log in to your String Tutor account and navigate to the **DNA** section.
2. You will be presented with **96 multiple-choice questions**. Each question has a set of options — choose the one that best describes you.
3. Questions are grouped into categories that measure different aspects of your personality:
   - **Behavior patterns** — how you act in everyday situations.
   - **Decision-making style** — how you approach choices and solve problems.
   - **Teamwork preferences** — how you collaborate and interact with peers.
   - **Creativity and expression** — how you think, imagine, and share ideas.
   - **Focus and motivation** — what drives you and how you manage your attention.
4. Once you complete all 96 questions, your results are **calculated automatically**.
5. A **personal profile** is generated and saved to your account.

> **Tip:** Answer honestly — there are no right or wrong answers. The more truthful you are, the more accurate and helpful your results will be.

## What Do the Results Show?

Your DNA profile provides a detailed overview of who you are as a learner and individual. Results typically include:

- **Personality type** — a clear description of your dominant personality traits.
- **Key strengths** — the areas where you naturally excel (e.g., leadership, empathy, analytical thinking, creativity).
- **Areas for improvement** — skills and habits you can develop further.
- **Recommended learning strategies** — study methods, tools, and approaches that align with your personality.
- **Career interests** — fields and professions that may be a good fit for someone with your profile (if supported by your school's configuration).

Your results are presented in an easy-to-read format with visual charts and personalized descriptions.

## Why Is DNA Important?

The DNA assessment offers lasting benefits for both students and educators:

- **Self-understanding** — helps you learn who you are, what motivates you, and how you work best.
- **Better communication** — understanding your style helps you communicate more effectively with classmates and teachers.
- **Personalized learning** — teachers can use aggregated DNA insights to adapt their teaching methods and create a more supportive classroom.
- **Growth mindset** — knowing your areas for improvement empowers you to set personal goals and track your development.
- **Career exploration** — gives you an early sense of direction by connecting your traits to potential career paths.

## Is DNA Safe and Private?

Your privacy is a top priority:

- All DNA results are **confidential** and stored securely on the String platform.
- Results are used **only for educational development** — they help you and your teachers support your learning.
- **No public sharing** — your results are never shared publicly or with other students without your explicit permission.
- Only **you**, your **teacher**, and authorized **school staff** can view your DNA profile.
- DNA data is protected under the same privacy standards as all other data on String, including compliance with **FERPA** and **COPPA**.

> **Remember:** Your DNA profile belongs to you. It is a tool to help you grow, not a label that defines you.

## Frequently Asked Questions

**Q: Is DNA a real exam?**
A: No. DNA is a personality assessment, not an academic exam. There are no right or wrong answers, and you cannot pass or fail. It is designed to help you understand yourself better.

**Q: How long does it take?**
A: Most students complete the 96 questions in **15 to 25 minutes**. There is no time limit — take as long as you need to answer thoughtfully.

**Q: Can I retake the test?**
A: Yes, in most cases your school allows you to retake the DNA assessment. Keep in mind that your personality may evolve over time, so taking it again after a few months can show how you have grown.

**Q: Who can see my results?**
A: Only you, your teacher, and authorized school staff can see your DNA results. They are never shared with other students or made public without your permission.

**Q: What if I do not understand a question?**
A: If a question is unclear, choose the answer that feels closest to how you usually think or act. You can also ask your teacher for guidance.`, body_ar: `## ما هو اختبار DNA؟

اختبار DNA هو **تقييم شخصية منظم مكوّن من 96 سؤالاً** مدمج في منصة String Tutor. وهو مصمم لمساعدة الطلاب على اكتشاف أنماط شخصيتهم الفريدة ونقاط قوتهم وأسلوب تواصلهم وتفضيلات التعلم لديهم.

- اختبار DNA **ليس** امتحانًا مدرسيًا — لا توجد إجابات صحيحة أو خاطئة.
- **لا يوجد نجاح أو رسوب** — كل نتيجة قيّمة.
- DNA يمثل مخططك الشخصي — يرسم خريطة ما يجعلك *أنت*.

> **مهم:** اختبار DNA هو أداة لاكتشاف الذات، وليس اختبارًا للذكاء أو القدرة الأكاديمية. كل نوع شخصية له نقاط قوته الخاصة.

## كيف يعمل اختبار DNA؟

تقييم DNA بسيط ومباشر:

1. سجّل الدخول إلى حسابك في String Tutor وانتقل إلى قسم **DNA**.
2. ستُعرض عليك **96 سؤالاً متعدد الخيارات**. كل سؤال يحتوي على مجموعة من الخيارات — اختر الإجابة التي تصفك بشكل أفضل.
3. الأسئلة مجمّعة في فئات تقيس جوانب مختلفة من شخصيتك:
   - **أنماط السلوك** — كيف تتصرف في المواقف اليومية.
   - **أسلوب اتخاذ القرار** — كيف تتعامل مع الخيارات وتحل المشكلات.
   - **تفضيلات العمل الجماعي** — كيف تتعاون وتتفاعل مع زملائك.
   - **الإبداع والتعبير** — كيف تفكر وتتخيل وتشارك الأفكار.
   - **التركيز والدافع** — ما الذي يحفزك وكيف تدير انتباهك.
4. بمجرد إكمال جميع الأسئلة الـ 96، يتم **حساب نتائجك تلقائيًا**.
5. يتم إنشاء **ملف شخصي** وحفظه في حسابك.

> **نصيحة:** أجب بصدق — لا توجد إجابات صحيحة أو خاطئة. كلما كنت أكثر صدقًا، كانت نتائجك أكثر دقة وفائدة.

## ماذا تُظهر النتائج؟

يوفر ملفك الشخصي في DNA نظرة تفصيلية عنك كمتعلم وكفرد. تتضمن النتائج عادةً:

- **نوع الشخصية** — وصف واضح لسماتك الشخصية السائدة.
- **نقاط القوة الرئيسية** — المجالات التي تتفوق فيها بشكل طبيعي (مثل القيادة، التعاطف، التفكير التحليلي، الإبداع).
- **مجالات التحسين** — المهارات والعادات التي يمكنك تطويرها أكثر.
- **استراتيجيات التعلم الموصى بها** — طرق الدراسة والأدوات والأساليب التي تتوافق مع شخصيتك.
- **الاهتمامات المهنية** — المجالات والمهن التي قد تكون مناسبة لشخص بملفك الشخصي (إذا كان مدعومًا من إعدادات مدرستك).

تُقدم نتائجك بتنسيق سهل القراءة مع رسوم بيانية مرئية وأوصاف مخصصة.

## لماذا اختبار DNA مهم؟

يقدم تقييم DNA فوائد دائمة لكل من الطلاب والمعلمين:

- **فهم الذات** — يساعدك على معرفة من أنت، وما الذي يحفزك، وكيف تعمل بشكل أفضل.
- **تواصل أفضل** — فهم أسلوبك يساعدك على التواصل بشكل أكثر فعالية مع زملائك ومعلميك.
- **تعلم مخصص** — يمكن للمعلمين استخدام رؤى DNA لتكييف أساليب التدريس وخلق فصل دراسي أكثر دعمًا.
- **عقلية النمو** — معرفة مجالات التحسين تمكّنك من تحديد أهداف شخصية وتتبع تطورك.
- **استكشاف المسار المهني** — يمنحك توجيهًا مبكرًا من خلال ربط سماتك بمسارات مهنية محتملة.

## هل اختبار DNA آمن وخاص؟

خصوصيتك هي أولوية قصوى:

- جميع نتائج DNA **سرية** ومخزنة بشكل آمن على منصة سترينج.
- تُستخدم النتائج **فقط للتطوير التعليمي** — تساعدك أنت ومعلميك في دعم تعلمك.
- **لا مشاركة عامة** — لا تُشارك نتائجك أبدًا علنيًا أو مع طلاب آخرين دون إذنك الصريح.
- فقط **أنت** و**معلمك** و**الموظفون المعتمدون** في المدرسة يمكنهم عرض ملفك الشخصي في DNA.
- بيانات DNA محمية وفق نفس معايير الخصوصية المطبقة على جميع البيانات الأخرى في سترينج، بما في ذلك الامتثال لـ **FERPA** و**COPPA**.

> **تذكر:** ملفك الشخصي في DNA ملكك. إنه أداة لمساعدتك على النمو، وليس وصفًا يحددك.

## الأسئلة الشائعة

**س: هل اختبار DNA امتحان حقيقي؟**
ج: لا. اختبار DNA هو تقييم شخصية وليس امتحانًا أكاديميًا. لا توجد إجابات صحيحة أو خاطئة، ولا يمكنك النجاح أو الرسوب فيه. إنه مصمم لمساعدتك على فهم نفسك بشكل أفضل.

**س: كم من الوقت يستغرق؟**
ج: يكمل معظم الطلاب الأسئلة الـ 96 في **15 إلى 25 دقيقة**. لا يوجد حد زمني — خذ وقتك للإجابة بتمعّن.

**س: هل يمكنني إعادة الاختبار؟**
ج: نعم، في معظم الحالات تسمح مدرستك بإعادة تقييم DNA. ضع في اعتبارك أن شخصيتك قد تتطور مع مرور الوقت، لذا إعادة الاختبار بعد بضعة أشهر يمكن أن تُظهر كيف تطورت.

**س: من يمكنه رؤية نتائجي؟**
ج: فقط أنت ومعلمك والموظفون المعتمدون في المدرسة يمكنهم رؤية نتائج DNA الخاصة بك. لا تُشارك أبدًا مع طلاب آخرين ولا تُنشر علنيًا دون إذنك.

**س: ماذا لو لم أفهم سؤالاً؟**
ج: إذا كان السؤال غير واضح، اختر الإجابة الأقرب لطريقة تفكيرك أو تصرفك المعتاد. يمكنك أيضًا طلب المساعدة من معلمك.` },
    ],
    'tch_gs': [
      { title: 'Setting Up Your Teacher Profile', title_ar: 'إعداد ملفك الشخصي كمعلم', summary: 'Complete your profile with a photo, bio, and contact preferences to welcome families.', summary_ar: 'أكمل ملفك الشخصي بصورة وسيرة ذاتية وتفضيلات اتصال لترحيب العائلات.', body: `## Overview

Your teacher profile is the first thing families see when they connect with you on String. A complete, welcoming profile helps build trust and sets the tone for a productive school year.

## Steps to Complete Your Profile

1. Log in to your String account and click your **profile icon** in the top-right corner.
2. Select **Edit Profile** from the dropdown menu.
3. Click the **camera icon** to upload a professional photo. A clear headshot works best.
4. Fill in the **Bio** field with a short introduction — mention your role, subjects you teach, and a personal touch (e.g., hobbies or teaching philosophy).
5. Under **Contact Preferences**, choose how families can reach you:
   - **In-app messaging** (recommended)
   - **Email notifications**
   - **Scheduled office hours** for live chat
6. Set your **availability hours** so families know when to expect responses.
7. Click **Save Changes**.

## Tips for a Great Profile

- **Keep your bio concise** — 2-3 sentences is ideal.
- **Use a friendly, professional tone** to make families feel welcome.
- **Update your profile each year** with new class information and a fresh photo.
- **Enable translation** so your bio is automatically translated for multilingual families.

## What Families See

When a parent joins your class, they see your profile photo, bio, and preferred contact method. A complete profile increases the chance families will engage early and often.

## Troubleshooting

- **Photo not uploading?** — Make sure the file is JPG or PNG and under 5 MB.
- **Bio not saving?** — Check that it is under 500 characters.
- **Families can't find you?** — Verify your class is published and the invite link is active.`, body_ar: `## نظرة عامة

ملفك الشخصي كمعلم هو أول ما تراه العائلات عند التواصل معك على سترينج. الملف الشخصي المكتمل يساعد في بناء الثقة ويحدد نبرة العام الدراسي.

## خطوات إكمال ملفك الشخصي

1. سجّل الدخول إلى حسابك واضغط على **أيقونة الملف الشخصي**.
2. اختر **تعديل الملف الشخصي**.
3. ارفع **صورة شخصية** واضحة ومهنية.
4. اكتب **نبذة تعريفية** قصيرة تتضمن دورك والمواد التي تدرّسها.
5. حدد **تفضيلات الاتصال**: المراسلة داخل التطبيق أو البريد الإلكتروني أو ساعات العمل.
6. عيّن **ساعات التواصل** حتى تعرف العائلات متى تتوقع الردود.
7. اضغط **حفظ التغييرات**.

## نصائح

- اجعل النبذة التعريفية مختصرة — جملتان إلى ثلاث جمل كافية.
- استخدم نبرة ودية ومهنية.
- حدّث ملفك الشخصي كل عام دراسي جديد.
- فعّل الترجمة ليتم ترجمة نبذتك تلقائيًا للعائلات متعددة اللغات.` },
      { title: 'Creating Your First Class on String', title_ar: 'إنشاء فصلك الأول على سترينج', summary: 'Set up your class in minutes and start connecting with students and families.', summary_ar: 'أعد فصلك في دقائق وابدأ التواصل مع الطلاب والعائلات.', body: `## Overview

Creating a class on String is the first step to building your digital classroom community. In just a few minutes, you can set up a class, customize it, and start connecting with students and their families.

## How to Create a Class

1. From your String dashboard, click the **+ Create Class** button.
2. Enter your **Class Name** (e.g., "Mrs. Johnson's 3rd Grade" or "AP Biology Period 2").
3. Select the **Grade Level** from the dropdown menu.
4. Choose a **Subject** or select "General / Homeroom" for a multi-subject class.
5. Optionally, upload a **class icon** or choose from the built-in gallery.
6. Set the **school year** start and end dates.
7. Click **Create Class**.

## Customizing Your Class

After creating the class, you can:

- **Add a class description** that families see when they join.
- **Set communication preferences** — choose whether families can message you directly or only receive announcements.
- **Enable or disable features** such as Class Story, Portfolios, and Behavior Points.
- **Choose a class color theme** that helps you visually organize multiple classes.

### Creating Multiple Classes

If you teach more than one class, repeat the steps above for each. You can switch between classes using the **class selector** in the left sidebar.

## Tips

- **Use clear naming conventions** so families easily identify the right class (include grade, subject, and period if applicable).
- **Set up your class before sending invitations** so everything is ready when families join.
- **Review your class settings** at the start of each semester to ensure they are up to date.

## Troubleshooting

- **Class not appearing on your dashboard?** — Refresh the page or log out and log back in.
- **Cannot create a class?** — Ensure your account has been verified by your school administrator.`, body_ar: `## نظرة عامة

إنشاء فصل على سترينج هو الخطوة الأولى لبناء مجتمعك الرقمي في الفصل الدراسي. في دقائق قليلة يمكنك إعداد فصل وتخصيصه والبدء بالتواصل مع الطلاب وعائلاتهم.

## كيفية إنشاء فصل

1. من لوحة التحكم، اضغط على زر **+ إنشاء فصل**.
2. أدخل **اسم الفصل** (مثال: "الصف الثالث - الأستاذة سارة").
3. اختر **المرحلة الدراسية** من القائمة المنسدلة.
4. اختر **المادة** أو اختر "عام / فصل رئيسي".
5. اختياريًا، ارفع **أيقونة للفصل** أو اختر من المعرض المدمج.
6. حدد تاريخ **بداية ونهاية العام الدراسي**.
7. اضغط **إنشاء الفصل**.

## تخصيص فصلك

- أضف **وصفًا للفصل** تراه العائلات عند الانضمام.
- حدد **تفضيلات التواصل** — اختر ما إذا كان بإمكان العائلات مراسلتك مباشرة أو تلقي الإعلانات فقط.
- فعّل أو عطّل الميزات مثل قصة الفصل والملفات ونقاط السلوك.

## نصائح

- استخدم أسماء واضحة للفصول حتى تتمكن العائلات من تحديد الفصل بسهولة.
- أعد فصلك بالكامل قبل إرسال الدعوات.
- راجع إعدادات الفصل في بداية كل فصل دراسي.` },
      { title: 'Inviting Families to Join Your Class', title_ar: 'دعوة العائلات للانضمام إلى فصلك', summary: 'Send invitations via printed flyers, email, text message, or shareable links.', summary_ar: 'أرسل دعوات عبر منشورات مطبوعة أو بريد إلكتروني أو رسائل نصية أو روابط قابلة للمشاركة.', body: `## Overview

Once your class is set up, the next step is inviting families to connect. String offers multiple invitation methods so you can reach every family — even those without email access.

## Invitation Methods

### 1. Shareable Class Link

1. Open your class and go to **Settings** > **Invite Families**.
2. Copy the **class invite link**.
3. Share the link via email, a learning management system, or your school website.

### 2. Printed Flyers

1. Go to **Settings** > **Invite Families** > **Print Flyer**.
2. String generates a printable PDF with your class name, a QR code, and a unique class code.
3. Print and send the flyer home with students on the first day of school.

### 3. Email Invitations

1. Go to **Settings** > **Invite Families** > **Send Email**.
2. Enter parent or guardian email addresses (one per line or comma-separated).
3. Click **Send Invitations**. Each family receives an email with a direct link to join your class.

### 4. Text Message (SMS) Invitations

1. Go to **Settings** > **Invite Families** > **Send Text**.
2. Enter phone numbers for parents or guardians.
3. Click **Send**. Each family receives a text message with a join link.

## Tracking Invitation Status

- On the **Invite Families** page, you can see which families have **joined**, which invitations are **pending**, and which have **not yet been opened**.
- Resend invitations to families who have not responded by clicking **Resend** next to their name.

## Tips

- **Send invitations early** — ideally during the first week of school or at back-to-school night.
- **Use multiple methods** to maximize reach. Some families prefer text, others prefer email.
- **Include a personal note** when sending email invitations to make families feel welcome.
- **Follow up** after one week with families who have not yet joined.

## Troubleshooting

- **Family says they did not receive the invitation?** — Check the email address or phone number for typos and resend.
- **QR code not working?** — Make sure the flyer is printed clearly and the code is not cut off.
- **Class is full?** — Contact your school admin to increase the class size limit.`, body_ar: `## نظرة عامة

بعد إعداد فصلك، الخطوة التالية هي دعوة العائلات للتواصل. يقدم سترينج طرق دعوة متعددة للوصول إلى كل عائلة.

## طرق الدعوة

### 1. رابط مشاركة الفصل

1. افتح فصلك وانتقل إلى **الإعدادات** > **دعوة العائلات**.
2. انسخ **رابط دعوة الفصل**.
3. شارك الرابط عبر البريد الإلكتروني أو موقع المدرسة.

### 2. منشورات مطبوعة

1. انتقل إلى **الإعدادات** > **دعوة العائلات** > **طباعة منشور**.
2. يولّد سترينج ملف PDF قابل للطباعة يحتوي على رمز QR ورمز الفصل.
3. اطبع المنشور وأرسله مع الطلاب في اليوم الأول.

### 3. دعوات البريد الإلكتروني

1. أدخل عناوين البريد الإلكتروني لأولياء الأمور.
2. اضغط **إرسال الدعوات**.

### 4. الرسائل النصية (SMS)

1. أدخل أرقام هواتف أولياء الأمور.
2. اضغط **إرسال**.

## نصائح

- أرسل الدعوات مبكرًا — خلال الأسبوع الأول من المدرسة.
- استخدم طرقًا متعددة لتحقيق أقصى وصول.
- تابع مع العائلات التي لم تنضم بعد أسبوع واحد.` },
    ],
    'tch_class': [
      { title: 'Organizing Students with Groups and Tags', title_ar: 'تنظيم الطلاب بالمجموعات والعلامات', summary: 'Create student groups for differentiated communication and targeted updates.', summary_ar: 'أنشئ مجموعات طلابية للتواصل المتمايز والتحديثات المستهدفة.', body: `## Overview

Groups and tags let you organize students within a class so you can send targeted messages, track progress by subgroup, and manage differentiated instruction more effectively.

## Creating a Student Group

1. Open your class and navigate to the **Students** tab.
2. Click **Manage Groups** in the top toolbar.
3. Click **+ New Group** and enter a group name (e.g., "Reading Group A", "Math Enrichment", "Bus Riders").
4. Select students to add to the group by checking the boxes next to their names.
5. Click **Save Group**.

### Editing or Deleting a Group

- To edit a group, click the **pencil icon** next to the group name, update the members or name, and click **Save**.
- To delete a group, click the **trash icon** next to the group name and confirm the deletion.

## Using Tags

Tags are lightweight labels you can attach to individual students for quick filtering.

1. Go to the **Students** tab and click on a student's name.
2. In the student details panel, click **+ Add Tag**.
3. Type a tag name (e.g., "IEP", "ELL", "Gifted", "Needs Follow-up") or select an existing tag.
4. Click **Save**.

### Filtering by Tag

- On the **Students** tab, use the **Filter by Tag** dropdown to view only students with a specific tag.
- This is useful for quickly identifying groups of students who need special attention.

## Sending Messages to a Group

1. Go to **Messages** > **New Message**.
2. In the **To** field, select a group name instead of individual students.
3. Compose your message and click **Send**. Only families in that group will receive it.

## Tips

- **Use groups for recurring communication** — e.g., weekly updates to a reading group.
- **Use tags for individual attributes** — e.g., marking students who need accommodations.
- **Review groups monthly** to ensure they reflect current class structure.
- **Combine groups and tags** for powerful filtering (e.g., all "ELL" students in "Reading Group B").`, body_ar: `## نظرة عامة

تتيح لك المجموعات والعلامات تنظيم الطلاب داخل الفصل لإرسال رسائل مستهدفة وتتبع التقدم بشكل أفضل.

## إنشاء مجموعة طلابية

1. افتح فصلك وانتقل إلى علامة تبويب **الطلاب**.
2. اضغط **إدارة المجموعات** في شريط الأدوات.
3. اضغط **+ مجموعة جديدة** وأدخل اسم المجموعة.
4. حدد الطلاب لإضافتهم إلى المجموعة.
5. اضغط **حفظ المجموعة**.

## استخدام العلامات

العلامات هي تصنيفات خفيفة يمكنك إرفاقها بالطلاب الفرديين.

1. انتقل إلى علامة تبويب **الطلاب** واضغط على اسم الطالب.
2. اضغط **+ إضافة علامة**.
3. اكتب اسم العلامة أو اختر علامة موجودة.
4. اضغط **حفظ**.

## إرسال رسائل لمجموعة

1. انتقل إلى **الرسائل** > **رسالة جديدة**.
2. في حقل **إلى**، اختر اسم المجموعة.
3. أنشئ رسالتك واضغط **إرسال**.

## نصائح

- استخدم المجموعات للتواصل المتكرر.
- استخدم العلامات للسمات الفردية.
- راجع المجموعات شهريًا لضمان تحديثها.` },
      { title: 'Using Class Points to Encourage Positive Behavior', title_ar: 'استخدام نقاط الفصل لتشجيع السلوك الإيجابي', summary: 'Set up a points system that rewards effort, kindness, and academic achievement.', summary_ar: 'أعد نظام نقاط يكافئ الجهد واللطف والإنجاز الأكاديمي.', body: `## Overview

Class Points is a built-in behavior tracking tool in String that lets you award (or deduct) points for individual students. It helps reinforce positive behavior, motivate students, and keep families informed about their child's progress in real time.

## Setting Up Class Points

1. Open your class and go to **Settings** > **Features**.
2. Toggle **Class Points** to **On**.
3. Click **Customize Point Categories** to define the behaviors you want to track.

### Default Categories

String comes with built-in categories you can use or modify:

| Category | Points | Example |
|----------|--------|---------|
| Participation | +1 | Raised hand, answered a question |
| Kindness | +2 | Helped a classmate, showed empathy |
| Great Work | +2 | Excellent assignment or project |
| Homework | +1 | Turned in homework on time |
| Off-Task | -1 | Distracted, not following directions |

### Creating Custom Categories

1. Click **+ Add Category**.
2. Enter a **category name**, **point value** (positive or negative), and an optional **icon**.
3. Click **Save**.

## Awarding Points

1. Go to the **Students** tab or open a student's profile.
2. Click the **+ Points** button next to the student's name.
3. Select the behavior category.
4. Optionally add a short **note** (e.g., "Great job presenting today!").
5. Click **Award**. The student and their family are notified instantly.

## Viewing Reports

- Go to **Class Points** > **Reports** to see a summary of points by student, category, or date range.
- Export reports as PDF or CSV for parent-teacher conferences or administrative records.

## Tips

- **Be consistent** — award points daily so students see the system as fair and reliable.
- **Focus on positives** — aim for a 4:1 ratio of positive to corrective points.
- **Celebrate milestones** — use announcements to recognize students who reach point goals.
- **Share reports with families** weekly to keep them engaged and informed.

## Troubleshooting

- **Points not showing for a student?** — Make sure the student is on your class roster and Class Points is enabled.
- **Family not receiving notifications?** — Check that they have notification preferences turned on in their app settings.`, body_ar: `## نظرة عامة

نقاط الفصل هي أداة تتبع سلوك مدمجة في سترينج تتيح لك منح (أو خصم) نقاط للطلاب. تساعد على تعزيز السلوك الإيجابي وتحفيز الطلاب وإبقاء العائلات على اطلاع.

## إعداد نقاط الفصل

1. افتح فصلك وانتقل إلى **الإعدادات** > **الميزات**.
2. فعّل **نقاط الفصل**.
3. اضغط **تخصيص فئات النقاط** لتحديد السلوكيات التي تريد تتبعها.

### الفئات الافتراضية

| الفئة | النقاط | مثال |
|-------|--------|------|
| المشاركة | +1 | رفع اليد، الإجابة على سؤال |
| اللطف | +2 | مساعدة زميل |
| عمل رائع | +2 | مشروع أو واجب ممتاز |
| الواجب | +1 | تسليم الواجب في الوقت المحدد |

## منح النقاط

1. انتقل إلى علامة تبويب **الطلاب**.
2. اضغط زر **+ نقاط** بجانب اسم الطالب.
3. اختر فئة السلوك.
4. اختياريًا أضف **ملاحظة** قصيرة.
5. اضغط **منح**. يتم إشعار الطالب وعائلته فورًا.

## نصائح

- كن متسقًا — امنح النقاط يوميًا.
- ركّز على الإيجابيات — استهدف نسبة 4:1 من النقاط الإيجابية إلى التصحيحية.
- احتفل بالإنجازات واستخدم الإعلانات لتكريم الطلاب المتميزين.` },
      { title: 'Managing Class Rosters and Student Transfers', title_ar: 'إدارة قوائم الفصل ونقل الطلاب', summary: 'Add, remove, or transfer students between classes throughout the school year.', summary_ar: 'أضف أو أزل أو انقل طلابًا بين الفصول طوال العام الدراسي.', body: `## Overview

Throughout the school year, students may join your class, leave, or transfer to another teacher. String makes it easy to manage your class roster so it always reflects your current student list.

## Adding a Student

1. Open your class and go to the **Students** tab.
2. Click **+ Add Student**.
3. Enter the student's **first name** and **last name**.
4. Optionally, enter a **parent or guardian email** to send an automatic invitation.
5. Click **Add**. The student appears on your roster immediately.

### Adding Multiple Students at Once

1. Go to **Students** > **Import Students**.
2. Download the **CSV template**.
3. Fill in student names and parent contact information.
4. Upload the completed CSV file and click **Import**.
5. Review the preview and click **Confirm**.

## Removing a Student

1. Go to the **Students** tab.
2. Click the **three-dot menu** next to the student's name.
3. Select **Remove from Class**.
4. Confirm the removal. The student's data (points, portfolio entries) is archived and can be restored within 30 days.

## Transferring a Student to Another Class

1. Go to the **Students** tab and click the **three-dot menu** next to the student's name.
2. Select **Transfer Student**.
3. Choose the **destination class** from the dropdown (you can transfer to your own classes or to another teacher's class if permitted by your admin).
4. Choose whether to **transfer data** (points, portfolio, messages) or start fresh.
5. Click **Transfer**. The receiving teacher is notified, and the family's connection automatically updates.

## Viewing Archived Students

- Go to **Students** > **Archived** to see students who have been removed or transferred.
- Click **Restore** to add a student back to your active roster if needed.

## Tips

- **Keep your roster current** — remove students who have left to ensure accurate reports and communications.
- **Use the CSV import** at the start of the year to save time adding students manually.
- **Transfer rather than remove** when a student moves to another class so their data is preserved.
- **Coordinate with your admin** for mid-year transfers that involve classes outside your own.

## Troubleshooting

- **Cannot add a student?** — You may have reached the class size limit. Contact your school admin.
- **Transfer option not available?** — Your school admin may need to enable cross-teacher transfers.
- **Archived student data missing?** — Data is retained for 30 days after removal. After that, contact support.`, body_ar: `## نظرة عامة

خلال العام الدراسي، قد ينضم طلاب إلى فصلك أو يغادرون أو ينتقلون إلى معلم آخر. يسهّل سترينج إدارة قائمة الفصل لتعكس دائمًا قائمة طلابك الحالية.

## إضافة طالب

1. افتح فصلك وانتقل إلى علامة تبويب **الطلاب**.
2. اضغط **+ إضافة طالب**.
3. أدخل **الاسم الأول** و**الاسم الأخير** للطالب.
4. اختياريًا، أدخل بريد ولي الأمر لإرسال دعوة تلقائية.
5. اضغط **إضافة**.

## إزالة طالب

1. انتقل إلى علامة تبويب **الطلاب**.
2. اضغط على **القائمة** بجانب اسم الطالب.
3. اختر **إزالة من الفصل**.
4. أكّد الإزالة. يتم أرشفة بيانات الطالب ويمكن استعادتها خلال 30 يومًا.

## نقل طالب إلى فصل آخر

1. اضغط على **القائمة** بجانب اسم الطالب واختر **نقل الطالب**.
2. اختر **الفصل الوجهة** من القائمة المنسدلة.
3. اختر ما إذا كنت تريد **نقل البيانات** أو البدء من جديد.
4. اضغط **نقل**. يتم إشعار المعلم المستقبل وتحديث اتصال العائلة تلقائيًا.

## نصائح

- حافظ على تحديث قائمتك لضمان دقة التقارير والتواصل.
- استخدم استيراد CSV في بداية العام لتوفير الوقت.
- انقل بدلاً من الإزالة عندما ينتقل طالب لفصل آخر للحفاظ على بياناته.` },
    ],
    'tch_comm': [
      { title: 'Best Practices for Parent-Teacher Communication', title_ar: 'أفضل ممارسات التواصل بين المعلم وولي الأمر', summary: 'Tips for writing clear, professional, and welcoming messages to families.', summary_ar: 'نصائح لكتابة رسائل واضحة ومهنية ومرحبة للعائلات.', body: `## Overview

Effective communication between teachers and families is the foundation of student success. String gives you the tools to reach every family — but the quality of your messages matters just as much as the platform.

## Writing Effective Messages

### Keep It Clear and Concise

- **Lead with the most important information.** Families are busy — put the key detail (date, action needed, deadline) in the first sentence.
- **Use short paragraphs** and bullet points for easy scanning.
- **Avoid jargon.** Write "your child's reading level" instead of "Lexile score benchmarks."

### Be Warm and Professional

- **Start with a positive note** — even brief messages benefit from a friendly opening (e.g., "Hope you had a great weekend!").
- **Use the family's preferred name** when possible. String displays parent names — use them.
- **End with an invitation to respond** — "Feel free to message me with any questions."

## When to Use Different Message Types

| Message Type | Best For | Example |
|-------------|----------|---------|
| **Announcement** | Class-wide updates | Field trip reminder, schedule change |
| **Direct Message** | Private, individual matters | Academic concern, positive feedback |
| **Group Message** | Targeted subgroups | Reading group updates, committee notes |
| **Scheduled Message** | Time-sensitive reminders | Event reminders, deadline alerts |

## Frequency Guidelines

- **Weekly**: Send at least one class update or newsletter to keep families informed.
- **As needed**: Send direct messages for individual student concerns or praise.
- **Avoid over-messaging**: More than 2-3 messages per week may cause families to disengage.

## Tips

- **Proofread before sending** — typos can undermine professionalism.
- **Use translation** — enable auto-translate for families who speak other languages.
- **Save templates** for recurring messages (e.g., weekly newsletters, event reminders).
- **Respond within 24 hours** to family messages during school days to build trust.
- **Document important conversations** by keeping a record in String's message history.

## Troubleshooting

- **Family not seeing your messages?** — Ask them to check their notification settings in the String app.
- **Message sent to wrong group?** — You cannot unsend, but you can send a follow-up correction.`, body_ar: `## نظرة عامة

التواصل الفعّال بين المعلمين والعائلات هو أساس نجاح الطلاب. يمنحك سترينج الأدوات للوصول إلى كل عائلة — لكن جودة رسائلك مهمة بقدر أهمية المنصة نفسها.

## كتابة رسائل فعّالة

### اجعلها واضحة ومختصرة

- ابدأ بالمعلومة الأهم — ضع التفاصيل الرئيسية في الجملة الأولى.
- استخدم فقرات قصيرة ونقاط تعداد.
- تجنب المصطلحات التقنية.

### كن ودودًا ومهنيًا

- ابدأ بملاحظة إيجابية.
- استخدم اسم العائلة المفضل عند الإمكان.
- اختم بدعوة للرد — "لا تترددوا في مراسلتي بأي أسئلة."

## أنواع الرسائل

| نوع الرسالة | الأفضل لـ | مثال |
|-------------|----------|------|
| إعلان | تحديثات الفصل | تذكير برحلة ميدانية |
| رسالة مباشرة | أمور فردية | ملاحظات أكاديمية |
| رسالة جماعية | مجموعات مستهدفة | تحديثات مجموعة القراءة |

## نصائح

- راجع الرسالة قبل الإرسال.
- فعّل الترجمة التلقائية للعائلات متعددة اللغات.
- احفظ قوالب للرسائل المتكررة.
- رد خلال 24 ساعة على رسائل العائلات خلال أيام الدراسة.` },
      { title: 'Using Scheduled Messages and Reminders', title_ar: 'استخدام الرسائل والتذكيرات المجدولة', summary: 'Compose messages in advance and schedule them to send at the perfect time.', summary_ar: 'أنشئ الرسائل مسبقًا وجدولها للإرسال في الوقت المثالي.', body: `## Overview

Scheduled messages let you compose announcements, reminders, and updates ahead of time and deliver them exactly when families need them. This is perfect for weekly newsletters, event reminders, and deadline alerts.

## How to Schedule a Message

1. Go to **Messages** > **New Message**.
2. Select the recipients: an entire class, a group, or individual families.
3. Compose your message as usual.
4. Instead of clicking **Send**, click the **clock icon** next to the Send button.
5. Choose the **date and time** you want the message delivered.
6. Click **Schedule**. The message appears in your **Scheduled** tab with a pending status.

## Managing Scheduled Messages

### Viewing Scheduled Messages

- Go to **Messages** > **Scheduled** to see all upcoming messages.
- Each entry shows the **recipient**, **send date/time**, and a **preview** of the content.

### Editing a Scheduled Message

1. Click on the scheduled message you want to change.
2. Click **Edit**.
3. Update the content, recipients, or send time.
4. Click **Save Changes**. The updated message remains in the queue.

### Canceling a Scheduled Message

1. Click on the scheduled message.
2. Click **Cancel Send**.
3. The message moves to your **Drafts** folder, where you can edit and reschedule it later.

## Setting Up Recurring Reminders

1. When scheduling a message, toggle **Repeat** to On.
2. Choose the frequency: **Daily**, **Weekly**, **Bi-weekly**, or **Monthly**.
3. Set the **end date** or choose **No end date** for ongoing reminders.
4. Click **Schedule**. String will automatically send the message on each recurring date.

## Tips

- **Schedule weekly newsletters** for the same day and time (e.g., every Friday at 3:00 PM) so families know when to expect them.
- **Set reminders 24-48 hours before events** — this gives families time to prepare.
- **Use recurring reminders** for routine communications like "Monday homework is due Friday."
- **Review your scheduled queue weekly** to ensure nothing outdated gets sent.
- **Draft messages in batches** — spend 30 minutes on Sunday evening scheduling the entire week's communications.

## Troubleshooting

- **Message sent at wrong time?** — Check your time zone in **Settings** > **Account** > **Time Zone**.
- **Recurring message not repeating?** — Verify that the **Repeat** toggle is on and the end date has not passed.
- **Cannot find scheduled message?** — Check the **Drafts** and **Sent** tabs. It may have already been delivered.`, body_ar: `## نظرة عامة

تتيح لك الرسائل المجدولة إنشاء الإعلانات والتذكيرات مسبقًا وتسليمها في الوقت المناسب تمامًا. هذا مثالي للنشرات الأسبوعية وتذكيرات الفعاليات.

## كيفية جدولة رسالة

1. انتقل إلى **الرسائل** > **رسالة جديدة**.
2. اختر المستلمين: فصل كامل أو مجموعة أو عائلات فردية.
3. أنشئ رسالتك كالمعتاد.
4. بدلاً من **إرسال**، اضغط على **أيقونة الساعة** بجانب زر الإرسال.
5. اختر **التاريخ والوقت** لتسليم الرسالة.
6. اضغط **جدولة**.

## إدارة الرسائل المجدولة

- انتقل إلى **الرسائل** > **المجدولة** لعرض جميع الرسائل القادمة.
- لتعديل رسالة، اضغط عليها ثم اضغط **تعديل**.
- لإلغاء رسالة، اضغط **إلغاء الإرسال** — تنتقل الرسالة إلى المسودات.

## إعداد تذكيرات متكررة

1. عند جدولة رسالة، فعّل **التكرار**.
2. اختر التردد: يومي أو أسبوعي أو نصف شهري أو شهري.
3. حدد تاريخ الانتهاء أو اختر بلا تاريخ انتهاء.

## نصائح

- جدول النشرات الأسبوعية في نفس اليوم والوقت.
- أرسل تذكيرات قبل 24-48 ساعة من الفعاليات.
- راجع قائمة الرسائل المجدولة أسبوعيًا لضمان عدم إرسال رسائل قديمة.` },
      { title: 'Communicating with Multilingual Families', title_ar: 'التواصل مع العائلات متعددة اللغات', summary: 'Leverage built-in translation to break language barriers with every family.', summary_ar: 'استفد من الترجمة المدمجة لكسر حواجز اللغة مع كل عائلة.', body: `## Overview

String's built-in translation feature helps you communicate with every family, regardless of the language they speak at home. Messages are automatically translated so families can read your updates in their preferred language — and you can read their replies in yours.

## How Translation Works

1. When a family member sets up their String account, they choose their **preferred language**.
2. Every message you send is **automatically translated** into the recipient's language before delivery.
3. When a family replies in their language, the message is **automatically translated into English** (or your preferred language) in your inbox.
4. The original message is always available — click **"Show Original"** to see the untranslated version.

## Supported Languages

String supports translation for **100+ languages**, including:

- Spanish, French, Arabic, Chinese (Simplified & Traditional), Vietnamese, Korean, Portuguese, Tagalog, Russian, Haitian Creole, Somali, Urdu, Hindi, and many more.

## Enabling Translation

Translation is **enabled by default** for all String accounts. To verify or adjust your settings:

1. Go to **Settings** > **Language & Translation**.
2. Confirm your **preferred language** is set correctly.
3. Toggle **Auto-Translate Messages** to On (if not already enabled).

## Tips for Communicating Across Languages

- **Write in simple, clear sentences.** Shorter sentences translate more accurately than long, complex ones.
- **Avoid idioms and slang.** Phrases like "touch base" or "heads up" may not translate well. Use direct language instead.
- **Use bullet points and numbered lists.** Structured content translates more reliably than dense paragraphs.
- **Include key details in bold** (dates, times, locations) so they stand out even after translation.
- **Test your message** by previewing the translation before sending. Click **Preview Translation** in the compose window.

## Translated Content

Translation applies to:

- **Messages and announcements** (both teacher-to-family and family-to-teacher)
- **Class Story captions**
- **Behavior point notifications**
- **Portfolio comments**
- **School-wide announcements** (if enabled by admin)

## Troubleshooting

- **Translation seems inaccurate?** — Simplify your sentence structure and avoid idioms. Machine translation works best with clear, direct language.
- **Family not receiving translated messages?** — Ask them to verify their preferred language in **Settings** > **Language & Translation**.
- **A specific language is not supported?** — Contact String support. New languages are added regularly based on user requests.`, body_ar: `## نظرة عامة

تساعدك ميزة الترجمة المدمجة في سترينج على التواصل مع كل عائلة بغض النظر عن اللغة التي يتحدثونها. يتم ترجمة الرسائل تلقائيًا حتى تتمكن العائلات من قراءة تحديثاتك بلغتهم المفضلة.

## كيف تعمل الترجمة

1. عند إنشاء حسابهم، يختار أفراد العائلة **لغتهم المفضلة**.
2. كل رسالة ترسلها يتم **ترجمتها تلقائيًا** إلى لغة المستلم.
3. عندما ترد عائلة بلغتها، تُترجم الرسالة **تلقائيًا إلى لغتك** في صندوق الوارد.
4. الرسالة الأصلية متاحة دائمًا — اضغط **"عرض الأصل"** لرؤية النص غير المترجم.

## تفعيل الترجمة

الترجمة **مفعّلة افتراضيًا**. للتحقق:

1. انتقل إلى **الإعدادات** > **اللغة والترجمة**.
2. تأكد من تعيين **لغتك المفضلة** بشكل صحيح.
3. تأكد من تفعيل **الترجمة التلقائية للرسائل**.

## نصائح للتواصل عبر اللغات

- اكتب جملًا بسيطة وواضحة — الجمل القصيرة تُترجم بدقة أكبر.
- تجنب التعبيرات الاصطلاحية والعامية.
- استخدم النقاط والقوائم المرقمة.
- أبرز التفاصيل المهمة بالخط العريض (التواريخ، الأوقات، المواقع).
- استعرض الترجمة قبل الإرسال باستخدام **معاينة الترجمة**.` },
    ],
    'tch_materials': [
      { title: 'How to Upload Materials', title_ar: 'كيفية رفع المواد التعليمية', summary: 'A complete guide to uploading, categorizing, and managing teaching materials on String.', summary_ar: 'دليل شامل لرفع وتصنيف وإدارة المواد التعليمية على سترينج.', body: `## How to Upload Materials

Teaching materials are an essential part of the String experience. Whether you want to share worksheets, lesson plans, presentations, or reference links with your students and colleagues, String makes it easy to upload, organize, and manage all your resources in one place.

This guide walks you through every step — from uploading your first file to managing your entire materials library.

---

## Steps to Upload a Material

Follow these steps to upload a new material to your String account:

### 1. Open the Materials Section

From your String dashboard, navigate to the **Materials** section. You can find it in the left sidebar under your class or in the top navigation bar.

### 2. Click "Upload Material"

Click the **"Upload Material"** button (usually located at the top-right of the Materials page). This opens the upload form.

### 3. Choose Your File Type

You can either:

- **Upload a file** — Drag and drop or browse to select a file from your device. Supported formats include:
  - **PDF** documents (.pdf)
  - **Images** (.jpg, .jpeg, .png, .gif)
  - **Documents** (.doc, .docx, .ppt, .pptx, .xls, .xlsx)
  - Maximum file size: **10 MB**

- **Paste an external link** — If your material is hosted online (Google Drive, YouTube, a website, etc.), paste the full URL in the link field instead.

### 4. Add Title, Description, Category, and Grade

Fill in the required details:

| Field | Required? | Description |
|-------|-----------|-------------|
| **Title** | Yes | A clear, descriptive name for the material (e.g., "Chapter 5 Worksheet — Fractions") |
| **Description** | No | An optional short description to help others understand what the material covers |
| **Category** | Yes | Select a subject category: Mathematics, Science, English, Arabic, History, or Other |
| **Grade / Level** | No | Optionally select the target grade level: Kindergarten, Grades 1-3, 4-6, 7-9, or 10-12 |

### 5. Save Your Material

Click the **"Save Material"** button. Your material will be saved and immediately appear in your materials list.

> **Tip:** You'll see a success confirmation message once the upload is complete.

---

## Manage Materials

Once you've uploaded materials, you can manage them from the Materials tab on your dashboard.

### Search and Filter

- Use the **search bar** to find materials by title or description.
- Use the **category filter** dropdown to narrow results by subject (e.g., show only "Science" materials).

### Edit a Material

1. Find the material in your list.
2. Click the **"Edit"** button (pencil icon).
3. Update any fields — title, description, category, grade, file, or link.
4. Click **"Update Material"** to save changes.

### Delete a Material

1. Find the material in your list.
2. Click the **"Delete"** button (trash icon).
3. Confirm the deletion when prompted.

> **Warning:** Deleting a material is permanent and cannot be undone.

### Open / Preview a Material

- **Files** — Click **"Open"** to preview the file directly in the browser (images and PDFs) or download it.
- **Links** — Click **"Open"** to open the external link in a new tab.

### Attach to a Lesson

If your school uses the Lessons feature, you can attach materials to specific lessons:

1. Open a lesson from the **Lessons** tab.
2. Click **"Attach Material"** and select from your uploaded materials.
3. Students will see the material linked directly within the lesson.

---

## Troubleshooting

### Upload Fails

- Check your internet connection and try again.
- Make sure the file is not corrupted — try opening it on your device first.
- Ensure you are logged in to your String account.

### Unsupported File Format

String currently supports: PDF, JPG, JPEG, PNG, GIF, DOC, DOCX, PPT, PPTX, XLS, XLSX.

If your file is in a different format (e.g., .zip, .mp4), convert it to a supported format or upload it to a cloud service (Google Drive, OneDrive) and paste the sharing link instead.

### File Too Large

The maximum upload size is **10 MB**. If your file exceeds this limit:

- **Compress the file** — Use a PDF compressor for documents or reduce image resolution.
- **Split the file** — Break large documents into smaller parts.
- **Use a link instead** — Upload the file to Google Drive or Dropbox and paste the sharing link.

### Slow Upload / Timeout

- Switch to a stable Wi-Fi connection.
- Close other tabs or applications that may be using bandwidth.
- Try uploading during off-peak hours.
- If the problem persists, contact String support.

---

## Frequently Asked Questions

**Q: Can I upload materials for multiple classes at once?**

A: Currently, materials are uploaded to your personal materials library and can be attached to any of your classes. You upload once and reuse across classes.

**Q: What happens to my materials if I leave a school?**

A: Your personal materials remain in your account. Materials shared within a school's shared library may be retained by the school administrator. Contact your school's String admin for details.

**Q: Can students upload materials too?**

A: No, only teachers and school administrators can upload materials. Students can view and download materials shared by their teachers.`, body_ar: `## كيفية رفع المواد التعليمية

المواد التعليمية جزء أساسي من تجربة سترينج. سواء كنت ترغب في مشاركة أوراق عمل أو خطط دروس أو عروض تقديمية أو روابط مرجعية مع طلابك وزملائك، يسهّل سترينج عليك رفع جميع مواردك وتنظيمها وإدارتها في مكان واحد.

يرشدك هذا الدليل خلال كل خطوة — من رفع أول ملف إلى إدارة مكتبة المواد بالكامل.

---

## خطوات رفع مادة تعليمية

اتبع هذه الخطوات لرفع مادة جديدة إلى حسابك على سترينج:

### 1. افتح قسم المواد

من لوحة تحكم سترينج، انتقل إلى قسم **المواد**. يمكنك العثور عليه في الشريط الجانبي تحت فصلك أو في شريط التنقل العلوي.

### 2. اضغط على "رفع مادة"

اضغط على زر **"رفع مادة"** (يقع عادةً في أعلى يسار صفحة المواد). سيفتح هذا نموذج الرفع.

### 3. اختر نوع الملف

يمكنك إما:

- **رفع ملف** — اسحب وأفلت أو تصفح لاختيار ملف من جهازك. التنسيقات المدعومة تشمل:
  - مستندات **PDF** ‏(.pdf)
  - **صور** ‏(.jpg, .jpeg, .png, .gif)
  - **مستندات** ‏(.doc, .docx, .ppt, .pptx, .xls, .xlsx)
  - الحد الأقصى لحجم الملف: **10 ميجابايت**

- **لصق رابط خارجي** — إذا كانت مادتك مستضافة على الإنترنت (Google Drive أو YouTube أو موقع ويب وغيرها)، الصق الرابط الكامل في حقل الرابط بدلاً من ذلك.

### 4. أضف العنوان والوصف والتصنيف والصف

املأ التفاصيل المطلوبة:

| الحقل | مطلوب؟ | الوصف |
|-------|--------|-------|
| **العنوان** | نعم | اسم واضح ووصفي للمادة (مثال: "ورقة عمل الفصل 5 — الكسور") |
| **الوصف** | لا | وصف مختصر اختياري لمساعدة الآخرين على فهم محتوى المادة |
| **التصنيف** | نعم | اختر تصنيف المادة: رياضيات، علوم، إنجليزي، عربي، تاريخ، أو أخرى |
| **الصف / المستوى** | لا | اختر اختيارياً المرحلة الدراسية المستهدفة: الروضة، الصفوف 1-3، 4-6، 7-9، أو 10-12 |

### 5. احفظ المادة

اضغط على زر **"حفظ المادة"**. ستُحفظ مادتك وتظهر فوراً في قائمة المواد.

> **نصيحة:** ستظهر رسالة تأكيد نجاح بمجرد اكتمال الرفع.

---

## إدارة المواد

بمجرد رفع المواد، يمكنك إدارتها من تبويب المواد في لوحة التحكم.

### البحث والتصفية

- استخدم **شريط البحث** للعثور على المواد حسب العنوان أو الوصف.
- استخدم قائمة **تصفية التصنيف** لتضييق النتائج حسب المادة (مثلاً: عرض مواد "العلوم" فقط).

### تعديل مادة

1. ابحث عن المادة في قائمتك.
2. اضغط على زر **"تعديل"** (أيقونة القلم).
3. حدّث أي حقل — العنوان أو الوصف أو التصنيف أو الصف أو الملف أو الرابط.
4. اضغط **"تحديث المادة"** لحفظ التغييرات.

### حذف مادة

1. ابحث عن المادة في قائمتك.
2. اضغط على زر **"حذف"** (أيقونة سلة المحذوفات).
3. أكّد الحذف عند المطالبة.

> **تحذير:** حذف المادة نهائي ولا يمكن التراجع عنه.

### فتح / معاينة مادة

- **الملفات** — اضغط **"فتح"** لمعاينة الملف مباشرة في المتصفح (الصور و PDF) أو تنزيله.
- **الروابط** — اضغط **"فتح"** لفتح الرابط الخارجي في تبويب جديد.

### إرفاق بدرس

إذا كانت مدرستك تستخدم ميزة الدروس، يمكنك إرفاق مواد بدروس محددة:

1. افتح درساً من تبويب **الدروس**.
2. اضغط **"إرفاق مادة"** واختر من المواد المرفوعة.
3. سيرى الطلاب المادة مرتبطة مباشرة بالدرس.

---

## استكشاف الأخطاء وإصلاحها

### فشل الرفع

- تحقق من اتصالك بالإنترنت وحاول مرة أخرى.
- تأكد من أن الملف غير تالف — حاول فتحه على جهازك أولاً.
- تأكد من تسجيل دخولك إلى حساب سترينج.

### تنسيق ملف غير مدعوم

يدعم سترينج حالياً: PDF، JPG، JPEG، PNG، GIF، DOC، DOCX، PPT، PPTX، XLS، XLSX.

إذا كان ملفك بتنسيق مختلف (مثل .zip أو .mp4)، حوّله إلى تنسيق مدعوم أو ارفعه على خدمة سحابية (Google Drive أو OneDrive) والصق رابط المشاركة بدلاً من ذلك.

### حجم الملف كبير جداً

الحد الأقصى لحجم الرفع هو **10 ميجابايت**. إذا تجاوز ملفك هذا الحد:

- **اضغط الملف** — استخدم أداة ضغط PDF للمستندات أو قلل دقة الصورة.
- **قسّم الملف** — قسّم المستندات الكبيرة إلى أجزاء أصغر.
- **استخدم رابطاً بدلاً من ذلك** — ارفع الملف على Google Drive أو Dropbox والصق رابط المشاركة.

### رفع بطيء / انتهاء المهلة

- انتقل إلى اتصال Wi-Fi مستقر.
- أغلق التبويبات أو التطبيقات الأخرى التي قد تستخدم النطاق الترددي.
- حاول الرفع خلال ساعات غير الذروة.
- إذا استمرت المشكلة، تواصل مع دعم سترينج.

---

## الأسئلة الشائعة

**س: هل يمكنني رفع مواد لعدة فصول في نفس الوقت؟**

ج: حالياً، تُرفع المواد إلى مكتبة المواد الشخصية ويمكن إرفاقها بأي من فصولك. ترفع مرة واحدة وتعيد استخدامها عبر الفصول.

**س: ماذا يحدث لموادي إذا غادرت المدرسة؟**

ج: تبقى موادك الشخصية في حسابك. المواد المشاركة في المكتبة المشتركة للمدرسة قد يحتفظ بها مسؤول المدرسة. تواصل مع مسؤول سترينج في مدرستك للتفاصيل.

**س: هل يمكن للطلاب رفع مواد أيضاً؟**

ج: لا، فقط المعلمون ومسؤولو المدرسة يمكنهم رفع المواد. يمكن للطلاب عرض وتنزيل المواد التي شاركها معلموهم.` },
    ],
    's_billing': [
      { title: 'Available Plans', title_ar: 'الخطط المتاحة', summary: 'Compare String\'s free and premium plans to find the right fit for your needs.', summary_ar: 'قارن بين خطط سترينج المجانية والمميزة للعثور على الأنسب لاحتياجاتك.', body: `## Overview

String offers a free plan for all users, with optional premium plans that unlock additional features for teachers, schools, and families.

## Plan Comparison

| Feature | Free | String Plus | String School |
|---------|------|-------------|---------------|
| Messaging | ✓ | ✓ | ✓ |
| Class Story | ✓ | ✓ | ✓ |
| Behavior Points | Basic | Advanced | Advanced |
| Student Portfolios | Up to 5 entries | Unlimited | Unlimited |
| Reports | Weekly summary | Custom reports + PDF export | District-wide analytics |
| Translation | Auto-translate | Auto-translate | Auto-translate |
| Storage | 1 GB | 10 GB | Unlimited |
| Priority Support | — | ✓ | ✓ |
| Admin Dashboard | — | — | ✓ |
| Custom Branding | — | — | ✓ |

## String Plus (For Teachers & Families)

- **$7.99/month** or **$59.99/year** (save 37%)
- Ideal for individual teachers or families who want advanced features.
- Includes unlimited portfolio entries, custom reports, and 10 GB storage.

## String School (For Schools & Districts)

- **Custom pricing** based on school/district size.
- Includes all String Plus features plus admin dashboard, district analytics, and unlimited storage.
- Contact our sales team at **sales@string.education** for a quote.

## Notes

- All plans include a **30-day free trial** of premium features.
- You can switch between plans at any time from your account settings.
- Educational discounts may be available for qualifying institutions.

## Troubleshooting

- **Not sure which plan to choose** — Start with the free trial to explore premium features.
- **Need a quote for your district** — Contact sales@string.education.`, body_ar: `## نظرة عامة

يقدم سترينج خطة مجانية لجميع المستخدمين، مع خطط مميزة اختيارية تفتح ميزات إضافية.

## مقارنة الخطط

| الميزة | مجاني | سترينج بلس | سترينج المدرسي |
|--------|-------|------------|----------------|
| المراسلة | ✓ | ✓ | ✓ |
| قصة الفصل | ✓ | ✓ | ✓ |
| نقاط السلوك | أساسي | متقدم | متقدم |
| ملفات الطلاب | حتى 5 إدخالات | غير محدود | غير محدود |
| التقارير | ملخص أسبوعي | تقارير مخصصة + PDF | تحليلات المنطقة |
| التخزين | 1 جيجابايت | 10 جيجابايت | غير محدود |

## سترينج بلس (للمعلمين والعائلات)

- **$7.99/شهر** أو **$59.99/سنة** (وفّر 37%)
- مثالي للمعلمين أو العائلات الذين يريدون ميزات متقدمة.

## سترينج المدرسي (للمدارس والمناطق)

- **أسعار مخصصة** حسب حجم المدرسة/المنطقة.
- تواصل مع فريق المبيعات على sales@string.education.

## ملاحظات

- جميع الخطط تتضمن **تجربة مجانية لمدة 30 يومًا**.
- يمكنك التبديل بين الخطط في أي وقت.` },
      { title: 'Upgrade Plan', title_ar: 'ترقية الخطة', summary: 'Step-by-step guide to upgrading from the free plan to String Plus or String School.', summary_ar: 'دليل خطوة بخطوة للترقية من الخطة المجانية إلى سترينج بلس أو سترينج المدرسي.', body: `## From the Web

1. Click your **profile icon** > **Settings**.
2. Select the **Subscription** tab.
3. Click **Upgrade Plan**.
4. Choose **String Plus** (individual) or **String School** (institution).
5. Select your billing cycle: **Monthly** or **Annual** (save up to 37%).
6. Enter your **payment information** (credit card, debit card, or PayPal).
7. Review your order and click **Confirm Upgrade**.
8. Your premium features will be activated immediately.

## On iOS

1. Tap **Profile** > **Settings** > **Subscription**.
2. Tap **Upgrade**.
3. Select your plan and billing cycle.
4. Confirm the purchase through the **App Store** (payment is handled by Apple).

## On Android

1. Tap **Profile** > **Settings** > **Subscription**.
2. Tap **Upgrade**.
3. Select your plan and billing cycle.
4. Confirm the purchase through **Google Play** (payment is handled by Google).

## Notes

- When upgrading mid-cycle, you will be charged a prorated amount for the remainder of the current period.
- Annual plans are charged once per year. Monthly plans are charged on the same date each month.
- In-app purchases (iOS/Android) are managed through your App Store or Google Play account.
- School and district upgrades require administrator approval. Contact your school admin for details.

## Troubleshooting

- **Payment declined** — Verify your card details or try a different payment method.
- **Features not unlocked after upgrade** — Log out and log back in to refresh your account.
- **Charged twice** — If you upgraded through both web and app, contact support to resolve duplicate billing.`, body_ar: `## من الويب

1. انقر على **أيقونة ملفك الشخصي** > **الإعدادات**.
2. اختر علامة تبويب **الاشتراك**.
3. انقر على **ترقية الخطة**.
4. اختر **سترينج بلس** أو **سترينج المدرسي**.
5. اختر دورة الفوترة: **شهرية** أو **سنوية**.
6. أدخل **معلومات الدفع**.
7. راجع طلبك وانقر على **تأكيد الترقية**.

## على iOS

1. اضغط على **الملف الشخصي** > **الإعدادات** > **الاشتراك**.
2. اضغط على **ترقية**.
3. اختر خطتك وأكد الشراء عبر **متجر التطبيقات**.

## على أندرويد

1. اضغط على **الملف الشخصي** > **الإعدادات** > **الاشتراك**.
2. اضغط على **ترقية**.
3. أكد الشراء عبر **Google Play**.

## ملاحظات

- عند الترقية في منتصف الدورة، يتم خصم مبلغ تناسبي.
- الخطط السنوية تُحصّل مرة سنويًا.
- المشتريات داخل التطبيق تُدار عبر متجر التطبيقات أو Google Play.` },
      { title: 'Cancel Subscription', title_ar: 'إلغاء الاشتراك', summary: 'How to cancel your premium subscription and what happens to your data afterward.', summary_ar: 'كيفية إلغاء اشتراكك المميز وماذا يحدث لبياناتك بعد ذلك.', body: `## From the Web

1. Click your **profile icon** > **Settings**.
2. Select the **Subscription** tab.
3. Click **Cancel Subscription**.
4. Select a **reason for canceling** (optional feedback).
5. Click **Confirm Cancellation**.
6. You will receive a confirmation email.

## On iOS (App Store)

If you subscribed through the App Store:

1. Open your device **Settings** > **Apple ID** > **Subscriptions**.
2. Find **String** in your subscription list.
3. Tap **Cancel Subscription**.
4. Confirm the cancellation.

## On Android (Google Play)

If you subscribed through Google Play:

1. Open the **Google Play Store** > **Menu** > **Subscriptions**.
2. Find **String**.
3. Tap **Cancel Subscription**.
4. Confirm the cancellation.

## What Happens After Cancellation

- You will retain premium features until the **end of your current billing period**.
- After the period ends, your account will revert to the **free plan**.
- Your data is preserved — portfolio entries, messages, and reports remain accessible.
- Features exclusive to premium (e.g., custom reports, extra storage) will become read-only.

## Notes

- Cancellation takes effect at the end of the current billing cycle. You are not charged again.
- If you change your mind, you can resubscribe at any time from the Subscription tab.
- School/district subscriptions must be canceled by the account administrator.

## Troubleshooting

- **Cannot find cancel button** — If you subscribed through iOS or Android, you must cancel through those platforms (not the web).
- **Still being charged** — Ensure you canceled through the correct platform. Contact support if the issue persists.`, body_ar: `## من الويب

1. انقر على **أيقونة ملفك الشخصي** > **الإعدادات**.
2. اختر علامة تبويب **الاشتراك**.
3. انقر على **إلغاء الاشتراك**.
4. اختر **سبب الإلغاء** (ملاحظات اختيارية).
5. انقر على **تأكيد الإلغاء**.

## على iOS (متجر التطبيقات)

1. افتح **الإعدادات** > **Apple ID** > **الاشتراكات**.
2. ابحث عن **String**.
3. اضغط على **إلغاء الاشتراك**.

## على أندرويد (Google Play)

1. افتح **متجر Google Play** > **القائمة** > **الاشتراكات**.
2. ابحث عن **String**.
3. اضغط على **إلغاء الاشتراك**.

## ماذا يحدث بعد الإلغاء

- ستحتفظ بالميزات المميزة حتى **نهاية فترة الفوترة الحالية**.
- بعد انتهاء الفترة، يعود حسابك إلى **الخطة المجانية**.
- بياناتك محفوظة — الإدخالات والرسائل والتقارير تظل متاحة.

## ملاحظات

- يسري الإلغاء في نهاية دورة الفوترة الحالية.
- يمكنك إعادة الاشتراك في أي وقت.` },
      { title: 'Refund Policy', title_ar: 'سياسة الاسترداد', summary: 'Understand String\'s refund policy for premium subscriptions and in-app purchases.', summary_ar: 'افهم سياسة استرداد سترينج للاشتراكات المميزة والمشتريات داخل التطبيق.', body: `## Overview

String offers refunds under certain conditions. Our policy varies depending on how and when the purchase was made.

## Web Purchases

If you purchased your subscription through the String website:

- **Within 14 days of purchase** — Full refund, no questions asked.
- **After 14 days** — Refunds are evaluated on a case-by-case basis.
- **Annual plans** — Prorated refunds may be available if you cancel within the first 3 months.

### How to Request a Refund

1. Go to **Settings > Subscription**.
2. Click **Request Refund**.
3. Select a reason and provide any additional details.
4. Click **Submit**.
5. Refund requests are processed within **5–7 business days**.

## iOS (App Store) Purchases

Refunds for subscriptions purchased through the App Store are handled by Apple:

1. Go to [reportaproblem.apple.com](https://reportaproblem.apple.com).
2. Sign in with your Apple ID.
3. Find the String purchase and select **Request a Refund**.
4. Apple will review and process your request.

## Android (Google Play) Purchases

Refunds for subscriptions purchased through Google Play are handled by Google:

1. Go to [play.google.com/store/account/orderhistory](https://play.google.com/store/account/orderhistory).
2. Find the String subscription.
3. Click **Request a Refund** or **Report a Problem**.
4. Google will review and process your request.

## Non-Refundable Items

- Free trial conversions after the trial period has ended.
- Partial months on monthly plans (you retain access until the end of the billing period).
- School/district contracts — Contact your account representative for contract-specific terms.

## Notes

- Refunds are issued to the original payment method.
- Processing times vary: credit cards (5–7 days), PayPal (3–5 days), App Store/Google Play (per their policies).
- If you were charged in error, contact support immediately with your transaction details.

## Troubleshooting

- **Refund not received** — Check with your bank or payment provider. Processing can take up to 10 business days.
- **Cannot request refund through app** — In-app purchases must be refunded through Apple or Google, not String directly.`, body_ar: `## نظرة عامة

يقدم سترينج استردادًا بموجب شروط معينة. تختلف سياستنا حسب طريقة ووقت الشراء.

## مشتريات الويب

- **خلال 14 يومًا من الشراء** — استرداد كامل.
- **بعد 14 يومًا** — تُقيّم طلبات الاسترداد حسب كل حالة.
- **الخطط السنوية** — قد يتوفر استرداد تناسبي خلال أول 3 أشهر.

### كيفية طلب استرداد

1. انتقل إلى **الإعدادات > الاشتراك**.
2. انقر على **طلب استرداد**.
3. اختر سببًا وقدم تفاصيل إضافية.
4. انقر على **إرسال**.
5. تُعالج طلبات الاسترداد خلال **5-7 أيام عمل**.

## مشتريات iOS (متجر التطبيقات)

يتم التعامل مع عمليات الاسترداد عبر Apple:
1. انتقل إلى reportaproblem.apple.com.
2. سجّل الدخول بحساب Apple ID.
3. ابحث عن شراء String واطلب **استرداد**.

## مشتريات أندرويد (Google Play)

يتم التعامل مع عمليات الاسترداد عبر Google:
1. انتقل إلى سجل الطلبات في Google Play.
2. ابحث عن اشتراك String.
3. انقر على **طلب استرداد**.

## عناصر غير قابلة للاسترداد

- تحويلات التجربة المجانية بعد انتهاء فترة التجربة.
- الأشهر الجزئية في الخطط الشهرية.

## ملاحظات

- تُصدر المبالغ المستردة إلى طريقة الدفع الأصلية.
- أوقات المعالجة: بطاقات الائتمان (5-7 أيام)، PayPal (3-5 أيام).` },
    ],
  };

  // Derive role tags from section ID prefix
  const getRoleForSection = (sectionId: string): string[] | undefined => {
    if (sectionId.startsWith('sd')) return ['teacher', 'admin'];
    if (sectionId.startsWith('stu_')) return ['student'];
    if (sectionId.startsWith('tch_')) return ['teacher'];
    if (sectionId.startsWith('fam')) return ['parent'];
    return undefined; // general/all audiences
  };

  // 2. Generate realistic articles for other sections
  sections.filter(s => s.id !== 'sd1' && s.id !== 'sd2').forEach(sec => {
    const sectionTitleAr = sectionTitleArMap[sec.id] || sec.title;
    const specificArticles = sectionArticles[sec.id];
    const sectionRole = getRoleForSection(sec.id);

    if (specificArticles) {
      specificArticles.forEach((art, index) => {
        articles.push({
          id: `gen-${sec.id}-${index + 1}`,
          sectionId: sec.id,
          slug: art.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          title: art.title,
          title_ar: art.title_ar,
          summary: art.summary,
          summary_ar: art.summary_ar,
          bodyMarkdown: art.body || stringAppContent(art.title),
          bodyMarkdown_ar: art.body_ar || stringAppContentAr(art.title_ar),
          updatedAt: new Date().toISOString(),
          tags: ['guide', sec.slug],
          role: sectionRole,
        });
      });
    } else {
      // Fallback for any section not yet mapped
      for (let i = 1; i <= 3; i++) {
        const title = `${sec.title} Guide ${i}`;
        const titleAr = `دليل ${sectionTitleArMap[sec.id] || sec.title} ${i}`;
        articles.push({
          id: `gen-${sec.id}-${i}`,
          sectionId: sec.id,
          slug: `${sec.slug}-guide-${i}`,
          title: title,
          title_ar: titleAr,
          summary: `General documentation for ${sec.title}.`,
          summary_ar: `وثائق عامة حول ${sectionTitleArMap[sec.id] || sec.title}.`,
          bodyMarkdown: stringAppContent(title),
          bodyMarkdown_ar: stringAppContentAr(titleAr),
          updatedAt: new Date().toISOString(),
          tags: ['general'],
          role: sectionRole,
        });
      }
    }
  });

  return articles;
};

const faqArticles: Article[] = [
  {
    id: 'faq_1',
    sectionId: 'st_faq',
    slug: 'how-to-start-a-new-lesson',
    title: 'How do I start a new lesson in String Tutor?',
    title_ar: 'كيف أبدأ درسًا جديدًا في معلم سترينج؟',
    summary: 'Learn how to launch your first lesson, choose a subject, and begin learning with the AI tutor.',
    summary_ar: 'تعرف على كيفية بدء درسك الأول واختيار المادة والبدء بالتعلم مع المعلم الذكي.',
    bodyMarkdown: `## Overview

String Tutor provides personalized one-on-one lessons powered by AI. Starting a lesson takes just a few taps whether you are on the web or mobile app.

## Opening the Tutor Dashboard

1. Log in to your String account at **string.education** or open the mobile app.
2. From the main navigation, click or tap **Tutor** in the top menu bar.
3. You will see your Tutor Dashboard showing recent sessions, suggested topics, and your progress summary.

> **Tip:** If you do not see the Tutor tab, ask your teacher or school admin to enable String Tutor for your account.

## Choosing a Subject

String Tutor supports multiple subjects. To pick one:

1. On the Tutor Dashboard, click **Start New Lesson**.
2. Browse the subject list — options include Math, Science, English Language Arts, and more.
3. Select your subject and then choose a specific topic or let the AI recommend one based on your recent activity.

## Starting the Lesson

Once you have selected a topic:

1. Click **Begin Lesson** to launch the interactive session.
2. The AI tutor will greet you and present the first question or explanation.
3. Type your answers or questions in the chat area. The tutor adapts in real time to your responses.
4. Use the **Hint** button if you get stuck — the tutor will guide you without giving away the answer.

## Resuming a Previous Lesson

If you left a lesson in progress:

1. Go to your Tutor Dashboard.
2. Under **Recent Sessions**, find the unfinished lesson.
3. Click **Continue** to pick up exactly where you left off.

## Troubleshooting

- **Lesson won't load:** Refresh the page or restart the app. Check your internet connection.
- **Subject not available:** Your school may not have enabled all subjects. Contact your teacher.
- **AI not responding:** Wait a few seconds and try again. If the issue persists, log out and log back in.`,
    bodyMarkdown_ar: `## نظرة عامة

يقدم معلم سترينج دروسًا فردية مخصصة مدعومة بالذكاء الاصطناعي. بدء الدرس يتطلب بضع نقرات فقط سواء كنت تستخدم الموقع أو التطبيق.

## فتح لوحة المعلم

1. سجل الدخول إلى حسابك في سترينج على **string.education** أو افتح التطبيق.
2. من شريط التنقل الرئيسي، انقر على **المعلم** في القائمة العلوية.
3. ستظهر لك لوحة المعلم التي تعرض الجلسات الأخيرة والمواضيع المقترحة وملخص تقدمك.

> **نصيحة:** إذا لم تجد تبويب المعلم، اطلب من معلمك أو مسؤول المدرسة تفعيل معلم سترينج لحسابك.

## اختيار المادة

يدعم معلم سترينج مواد متعددة. لاختيار مادة:

1. في لوحة المعلم، انقر على **بدء درس جديد**.
2. تصفح قائمة المواد — تشمل الخيارات الرياضيات والعلوم واللغة العربية وغيرها.
3. اختر المادة ثم اختر موضوعًا محددًا أو اترك الذكاء الاصطناعي يقترح واحدًا بناءً على نشاطك الأخير.

## بدء الدرس

بعد اختيار الموضوع:

1. انقر على **ابدأ الدرس** لتشغيل الجلسة التفاعلية.
2. سيرحب بك المعلم الذكي ويعرض أول سؤال أو شرح.
3. اكتب إجاباتك أو أسئلتك في منطقة الدردشة. يتكيف المعلم في الوقت الفعلي مع ردودك.
4. استخدم زر **تلميح** إذا واجهت صعوبة — سيرشدك المعلم دون إعطائك الإجابة مباشرة.

## استئناف درس سابق

إذا تركت درسًا قيد التنفيذ:

1. اذهب إلى لوحة المعلم.
2. تحت **الجلسات الأخيرة**، ابحث عن الدرس غير المكتمل.
3. انقر على **متابعة** للاستكمال من حيث توقفت.

## استكشاف الأخطاء وإصلاحها

- **الدرس لا يُحمّل:** أعد تحميل الصفحة أو أعد تشغيل التطبيق. تحقق من اتصال الإنترنت.
- **المادة غير متاحة:** قد لا تكون مدرستك قد فعّلت جميع المواد. تواصل مع معلمك.
- **الذكاء الاصطناعي لا يستجيب:** انتظر بضع ثوانٍ وحاول مجددًا. إذا استمرت المشكلة، سجل الخروج ثم سجل الدخول مرة أخرى.`,
    updatedAt: '2025-05-10T00:00:00Z',
    tags: ['faq', 'lessons', 'getting-started', 'string-tutor'],
  },
  {
    id: 'faq_2',
    sectionId: 'st_faq',
    slug: 'how-to-track-progress-and-points',
    title: 'How do I track my progress and points?',
    title_ar: 'كيف أتابع تقدمي ونقاطي؟',
    summary: 'Understand where to find your learning progress, earned points, streaks, and performance insights.',
    summary_ar: 'تعرف على مكان عرض تقدمك التعليمي والنقاط المكتسبة وسلاسل الإنجاز ورؤى الأداء.',
    bodyMarkdown: `## Overview

String Tutor tracks every lesson you complete and awards points based on accuracy, effort, and consistency. This guide shows you where to find all your progress data.

## Viewing Your Progress Dashboard

1. Navigate to **Tutor > My Progress** from the main menu.
2. The dashboard displays:
   - **Total Points** earned across all subjects.
   - **Current Streak** — the number of consecutive days you have completed at least one lesson.
   - **Lessons Completed** — a lifetime counter of finished sessions.
   - **Average Score** — your overall accuracy percentage.

## Understanding Points

Points are awarded after each lesson based on:

- **Correct answers** — 10 points per correct response on the first attempt.
- **Hint usage** — 5 points if you answer correctly after using a hint.
- **Completion bonus** — 20 bonus points for finishing an entire lesson without skipping questions.
- **Streak bonus** — An extra 15 points per lesson when you maintain a 7-day streak.

Points are tallied automatically and appear on your dashboard within seconds of completing a lesson.

## Weekly Progress Report

Every Monday, String Tutor generates a **Weekly Progress Report** that includes:

- Total lessons completed during the previous week.
- Points earned and comparison to the week before.
- Strongest and weakest topics based on accuracy.
- Suggested topics for the upcoming week.

Teachers and linked parents can also view your weekly report from their own dashboards.

## Subject Breakdown

For a per-subject view:

1. Go to **My Progress > Subjects**.
2. Click any subject to see your topic-level accuracy, time spent, and number of lessons completed.
3. Topics highlighted in green indicate mastery (above 80% accuracy). Orange topics suggest areas for review.

## Setting Goals

You can set personal goals in **My Progress > Goals**:

1. Click **Add Goal** and choose a target — for example, "Complete 5 math lessons this week."
2. Track your goal progress via the progress bar on the dashboard.
3. Completed goals award a **Goal Badge** visible on your profile.`,
    bodyMarkdown_ar: `## نظرة عامة

يتتبع معلم سترينج كل درس تكمله ويمنحك نقاطًا بناءً على الدقة والجهد والاستمرارية. يوضح هذا الدليل أين تجد جميع بيانات تقدمك.

## عرض لوحة التقدم

1. انتقل إلى **المعلم > تقدمي** من القائمة الرئيسية.
2. تعرض اللوحة:
   - **إجمالي النقاط** المكتسبة في جميع المواد.
   - **السلسلة الحالية** — عدد الأيام المتتالية التي أكملت فيها درسًا واحدًا على الأقل.
   - **الدروس المكتملة** — عداد إجمالي للجلسات المنتهية.
   - **متوسط الدرجة** — نسبة الدقة الإجمالية الخاصة بك.

## فهم النقاط

تُمنح النقاط بعد كل درس بناءً على:

- **الإجابات الصحيحة** — 10 نقاط لكل إجابة صحيحة من المحاولة الأولى.
- **استخدام التلميحات** — 5 نقاط إذا أجبت بشكل صحيح بعد استخدام تلميح.
- **مكافأة الإكمال** — 20 نقطة إضافية لإنهاء الدرس كاملًا دون تخطي أسئلة.
- **مكافأة السلسلة** — 15 نقطة إضافية لكل درس عند الحفاظ على سلسلة 7 أيام.

تُحتسب النقاط تلقائيًا وتظهر على لوحتك خلال ثوانٍ من إكمال الدرس.

## تقرير التقدم الأسبوعي

كل يوم اثنين، يُنشئ معلم سترينج **تقرير تقدم أسبوعي** يتضمن:

- إجمالي الدروس المكتملة خلال الأسبوع السابق.
- النقاط المكتسبة ومقارنتها بالأسبوع الذي قبله.
- أقوى وأضعف المواضيع بناءً على الدقة.
- مواضيع مقترحة للأسبوع القادم.

يمكن للمعلمين وأولياء الأمور المرتبطين أيضًا عرض تقريرك الأسبوعي من لوحاتهم.

## تفصيل حسب المادة

للحصول على عرض لكل مادة:

1. اذهب إلى **تقدمي > المواد**.
2. انقر على أي مادة لمشاهدة دقة مستوى الموضوع والوقت المستغرق وعدد الدروس المكتملة.
3. المواضيع المميزة بالأخضر تشير إلى الإتقان (أعلى من 80% دقة). المواضيع البرتقالية تقترح مجالات للمراجعة.

## تحديد الأهداف

يمكنك تحديد أهداف شخصية في **تقدمي > الأهداف**:

1. انقر على **إضافة هدف** واختر هدفًا — مثلًا "أكمل 5 دروس رياضيات هذا الأسبوع."
2. تابع تقدم هدفك عبر شريط التقدم على اللوحة.
3. الأهداف المكتملة تمنحك **شارة هدف** تظهر على ملفك الشخصي.`,
    updatedAt: '2025-05-10T00:00:00Z',
    tags: ['faq', 'progress', 'points', 'reports', 'string-tutor'],
  },
  {
    id: 'faq_3',
    sectionId: 'st_faq',
    slug: 'how-to-change-app-language',
    title: 'How do I change the app language (English/Arabic)?',
    title_ar: 'كيف أغيّر لغة التطبيق (إنجليزي/عربي)؟',
    summary: 'Switch between English and Arabic without breaking layout or losing your data.',
    summary_ar: 'التبديل بين الإنجليزية والعربية دون التأثير على التخطيط أو فقدان بياناتك.',
    bodyMarkdown: `## Overview

String supports both English and Arabic across the entire platform. Switching languages is instant, preserves all your data, and automatically adjusts the layout direction.

## Changing Language on the Web

1. Look at the **top-right corner** of the navigation bar (or top-left if you are already in Arabic).
2. Click the **globe icon** or the language label (EN / AR).
3. Select your preferred language from the dropdown.
4. The page will refresh instantly in the new language.

Your language preference is saved in your browser and will persist across sessions.

## Changing Language on Mobile

1. Open the String app and tap your **profile icon** in the top corner.
2. Go to **Settings > Language**.
3. Tap **English** or **العربية** (Arabic).
4. The app will reload in the selected language.

## How RTL Layout Works

When you switch to Arabic:

- Text alignment changes from left-to-right to right-to-left.
- Navigation menus, sidebars, and buttons reposition accordingly.
- The String logo and header remain in a consistent position.
- All content — including messages, reports, and lesson text — displays in Arabic if translations are available.

> **Note:** Some technical terms (like "PDF" or "API") remain in English even in Arabic mode.

## Impact on Lessons and Data

Switching languages does **not** affect:

- Your saved progress or points.
- Lesson history or completion records.
- Messages sent or received.
- Any account settings beyond the display language.

All your data is language-independent and stored the same way regardless of your language choice.

## Troubleshooting

- **Language reverts after closing the browser:** Make sure your browser allows localStorage. Clear your cookies and try again.
- **Some text still in English:** Not all content has Arabic translations yet. The team is continuously adding new translations.
- **Layout looks broken:** Hard-refresh the page (Ctrl + Shift + R on desktop, or pull down to refresh on mobile).`,
    bodyMarkdown_ar: `## نظرة عامة

يدعم سترينج كلًا من الإنجليزية والعربية عبر المنصة بأكملها. التبديل بين اللغتين فوري ويحافظ على جميع بياناتك ويعدل اتجاه التخطيط تلقائيًا.

## تغيير اللغة على الويب

1. انظر إلى **الزاوية العلوية اليمنى** من شريط التنقل (أو العلوية اليسرى إذا كنت بالفعل في الوضع العربي).
2. انقر على **أيقونة الكرة الأرضية** أو تسمية اللغة (EN / AR).
3. اختر لغتك المفضلة من القائمة المنسدلة.
4. ستتحدث الصفحة فورًا باللغة الجديدة.

يتم حفظ تفضيل لغتك في المتصفح وسيستمر عبر الجلسات.

## تغيير اللغة على الهاتف

1. افتح تطبيق سترينج وانقر على **أيقونة ملفك الشخصي** في الزاوية العلوية.
2. اذهب إلى **الإعدادات > اللغة**.
3. انقر على **English** أو **العربية**.
4. سيعاد تحميل التطبيق باللغة المحددة.

## كيف يعمل تخطيط RTL

عند التبديل إلى العربية:

- يتغير اتجاه النص من اليسار لليمين إلى اليمين لليسار.
- تتغير مواضع قوائم التنقل والأشرطة الجانبية والأزرار وفقًا لذلك.
- يبقى شعار سترينج والرأس في موضع ثابت.
- يُعرض كل المحتوى — بما في ذلك الرسائل والتقارير ونص الدروس — بالعربية إذا توفرت الترجمات.

> **ملاحظة:** بعض المصطلحات التقنية (مثل "PDF" أو "API") تبقى بالإنجليزية حتى في الوضع العربي.

## التأثير على الدروس والبيانات

تغيير اللغة **لا يؤثر** على:

- تقدمك المحفوظ أو نقاطك.
- سجل الدروس أو سجلات الإكمال.
- الرسائل المرسلة أو المستلمة.
- أي إعدادات حساب بخلاف لغة العرض.

جميع بياناتك مستقلة عن اللغة وتُخزن بنفس الطريقة بغض النظر عن اختيارك للغة.

## استكشاف الأخطاء وإصلاحها

- **اللغة ترجع بعد إغلاق المتصفح:** تأكد أن متصفحك يسمح بالتخزين المحلي. امسح ملفات تعريف الارتباط وحاول مجددًا.
- **بعض النصوص لا تزال بالإنجليزية:** ليس كل المحتوى يحتوي على ترجمات عربية بعد. الفريق يضيف ترجمات جديدة باستمرار.
- **التخطيط يبدو معطلًا:** أعد تحميل الصفحة بالكامل (Ctrl + Shift + R على سطح المكتب، أو اسحب للأسفل للتحديث على الهاتف).`,
    updatedAt: '2025-05-10T00:00:00Z',
    tags: ['faq', 'language', 'arabic', 'rtl', 'settings', 'string-tutor'],
  },
  {
    id: 'faq_4',
    sectionId: 'st_faq',
    slug: 'how-to-download-export-reports',
    title: 'How do I download or export my reports?',
    title_ar: 'كيف أحمّل أو أصدّر تقاريري؟',
    summary: 'Export your progress reports and lesson history as PDF files for printing or sharing.',
    summary_ar: 'صدّر تقارير تقدمك وسجل دروسك كملفات PDF للطباعة أو المشاركة.',
    bodyMarkdown: `## Overview

String Tutor allows students, teachers, and parents to download progress reports in PDF format. This is useful for parent-teacher conferences, student portfolios, or personal record keeping.

## Exporting a Progress Report (Students)

1. Go to **Tutor > My Progress**.
2. Click the **Export** button in the top-right corner of the dashboard.
3. Choose the date range you want to include (Last Week, Last Month, All Time, or Custom Range).
4. Select **PDF** as the export format.
5. Click **Download** — the report will be saved to your device.

The exported PDF includes your total points, lessons completed, accuracy by subject, and weekly trends.

## Exporting Reports (Teachers)

Teachers can export reports for individual students or an entire class:

### Individual Student Report

1. Navigate to **Class > Students** and click on a student's name.
2. Click **Tutor Progress** to view their String Tutor data.
3. Click **Export PDF** to download a single student's progress report.

### Class Summary Report

1. Go to **Class > Reports > Tutor Summary**.
2. Set the desired date range.
3. Click **Export Class Report** to generate a PDF summarizing all students' tutor activity.

## What the Report Includes

Every exported report contains:

- **Student Information** — name, class, and date range.
- **Points Summary** — total earned, daily average, and streak information.
- **Subject Breakdown** — accuracy and completion rates per subject.
- **Lesson Log** — a table of all lessons with dates, topics, scores, and time spent.
- **Recommendations** — AI-generated suggestions for topics to review.

## Sharing Reports

After downloading a PDF:

- Email it as an attachment to parents or administrators.
- Print it for physical student files.
- Upload it to your school's student information system if supported.

## Troubleshooting

- **Export button is grayed out:** You need at least one completed lesson before reports can be generated.
- **PDF won't open:** Make sure you have a PDF reader installed (Adobe Reader, browser built-in viewer, etc.).
- **Data looks incomplete:** Check the date range — it may be filtering out older lessons. Set the range to "All Time" for a complete history.`,
    bodyMarkdown_ar: `## نظرة عامة

يتيح معلم سترينج للطلاب والمعلمين وأولياء الأمور تحميل تقارير التقدم بصيغة PDF. هذا مفيد لمؤتمرات أولياء الأمور والمعلمين وملفات الطلاب أو السجلات الشخصية.

## تصدير تقرير التقدم (للطلاب)

1. اذهب إلى **المعلم > تقدمي**.
2. انقر على زر **تصدير** في الزاوية العلوية اليمنى من اللوحة.
3. اختر النطاق الزمني الذي تريد تضمينه (الأسبوع الماضي، الشهر الماضي، كل الوقت، أو نطاق مخصص).
4. اختر **PDF** كصيغة التصدير.
5. انقر على **تحميل** — سيتم حفظ التقرير على جهازك.

يتضمن ملف PDF المُصدّر إجمالي نقاطك والدروس المكتملة والدقة حسب المادة والاتجاهات الأسبوعية.

## تصدير التقارير (للمعلمين)

يمكن للمعلمين تصدير تقارير لطالب فردي أو فصل كامل:

### تقرير طالب فردي

1. انتقل إلى **الفصل > الطلاب** وانقر على اسم الطالب.
2. انقر على **تقدم المعلم** لعرض بيانات معلم سترينج الخاصة به.
3. انقر على **تصدير PDF** لتحميل تقرير تقدم الطالب.

### تقرير ملخص الفصل

1. اذهب إلى **الفصل > التقارير > ملخص المعلم**.
2. حدد النطاق الزمني المطلوب.
3. انقر على **تصدير تقرير الفصل** لإنشاء PDF يلخص نشاط جميع الطلاب مع المعلم.

## ما يتضمنه التقرير

كل تقرير مُصدّر يحتوي على:

- **معلومات الطالب** — الاسم والفصل والنطاق الزمني.
- **ملخص النقاط** — الإجمالي المكتسب والمتوسط اليومي ومعلومات السلسلة.
- **تفصيل حسب المادة** — نسب الدقة والإكمال لكل مادة.
- **سجل الدروس** — جدول بجميع الدروس مع التواريخ والمواضيع والدرجات والوقت المستغرق.
- **التوصيات** — اقتراحات مولّدة بالذكاء الاصطناعي للمواضيع التي تحتاج مراجعة.

## مشاركة التقارير

بعد تحميل ملف PDF:

- أرسله كمرفق بالبريد الإلكتروني لأولياء الأمور أو الإداريين.
- اطبعه لملفات الطلاب المادية.
- ارفعه إلى نظام معلومات الطلاب في مدرستك إذا كان مدعومًا.

## استكشاف الأخطاء وإصلاحها

- **زر التصدير رمادي:** تحتاج إلى درس واحد مكتمل على الأقل قبل إنشاء التقارير.
- **ملف PDF لا يُفتح:** تأكد من وجود قارئ PDF مثبت (Adobe Reader، عارض المتصفح المدمج، إلخ).
- **البيانات تبدو ناقصة:** تحقق من النطاق الزمني — قد يكون يستبعد الدروس القديمة. اضبط النطاق على "كل الوقت" للحصول على سجل كامل.`,
    updatedAt: '2025-05-10T00:00:00Z',
    tags: ['faq', 'reports', 'export', 'pdf', 'download', 'string-tutor'],
  },
  {
    id: 'faq_5',
    sectionId: 'st_faq',
    slug: 'troubleshooting-common-issues',
    title: 'What should I do if something isn\'t working?',
    title_ar: 'ماذا أفعل إذا كان هناك شيء لا يعمل؟',
    summary: 'Step-by-step troubleshooting for common String Tutor issues like loading errors, frozen screens, and sync problems.',
    summary_ar: 'خطوات استكشاف الأخطاء وإصلاحها لمشاكل معلم سترينج الشائعة مثل أخطاء التحميل والشاشات المتجمدة ومشاكل المزامنة.',
    bodyMarkdown: `## Overview

If you encounter a problem in String Tutor, this guide walks you through the most common issues and how to fix them. Most problems can be resolved in a few simple steps.

## The Page Won't Load

If String Tutor shows a blank screen, loading spinner, or an error message:

1. **Check your internet connection** — open another website to confirm you are online.
2. **Refresh the page** — press F5 or click the refresh button.
3. **Clear your browser cache** — go to your browser settings and clear cached images and files.
4. **Try a different browser** — String works best on Chrome, Firefox, Safari, and Edge.
5. **Disable browser extensions** — ad blockers and privacy extensions can sometimes interfere with String.

## A Lesson is Frozen or Unresponsive

If the AI tutor stops responding during a lesson:

1. Wait **10 seconds** — the AI may be processing a complex response.
2. Click the **chat input field** and type your answer again. Press Enter.
3. If still frozen, click the **back arrow** in the top-left corner and reopen the lesson.
4. Your progress is auto-saved, so you will not lose any completed questions.

## Points Are Not Updating

If your points or streak counter seems incorrect:

1. **Refresh the progress page** — points can take up to 30 seconds to sync.
2. **Check the date range** — make sure you are viewing the correct time period.
3. **Log out and log back in** — this forces a fresh sync with the server.
4. If points are still missing after 5 minutes, **contact your teacher** who can verify from their admin dashboard.

## Audio or Visual Issues

If content does not display correctly:

- **Text is too small:** Use Ctrl + (plus) to zoom in, or adjust text size in Settings.
- **Images not loading:** Check your internet speed. Slow connections may timeout on large images.
- **Colors look wrong:** Ensure your device is not in high-contrast or accessibility mode unintentionally.

## The App Crashes on Mobile

If the String app closes unexpectedly:

1. **Force-close the app** and reopen it.
2. **Update the app** — go to the App Store or Google Play and install the latest version.
3. **Restart your device** — this clears temporary memory issues.
4. **Free up storage** — String needs at least 100 MB of free space to run smoothly.

## Getting Further Help

If none of the above steps resolve your issue:

1. Click the **Submit a request** button in the top navigation bar.
2. Describe the problem in detail — include what you were doing, what happened, and any error messages.
3. Attach a screenshot if possible.
4. The String support team typically responds within **24 hours** on business days.

> **Tip:** Include your device type (phone, tablet, computer), browser name, and operating system in your support request to help the team resolve your issue faster.`,
    bodyMarkdown_ar: `## نظرة عامة

إذا واجهت مشكلة في معلم سترينج، يرشدك هذا الدليل خلال المشاكل الأكثر شيوعًا وكيفية حلها. معظم المشاكل يمكن حلها في بضع خطوات بسيطة.

## الصفحة لا تُحمّل

إذا أظهر معلم سترينج شاشة فارغة أو مؤشر تحميل أو رسالة خطأ:

1. **تحقق من اتصال الإنترنت** — افتح موقعًا آخر لتأكيد أنك متصل.
2. **أعد تحميل الصفحة** — اضغط F5 أو انقر على زر التحديث.
3. **امسح ذاكرة التخزين المؤقت للمتصفح** — اذهب إلى إعدادات المتصفح وامسح الصور والملفات المخزنة.
4. **جرب متصفحًا مختلفًا** — سترينج يعمل بشكل أفضل على Chrome وFirefox وSafari وEdge.
5. **عطّل إضافات المتصفح** — أدوات حظر الإعلانات وإضافات الخصوصية قد تتداخل أحيانًا مع سترينج.

## الدرس متجمد أو لا يستجيب

إذا توقف المعلم الذكي عن الاستجابة أثناء الدرس:

1. انتظر **10 ثوانٍ** — قد يكون الذكاء الاصطناعي يعالج استجابة معقدة.
2. انقر على **حقل إدخال الدردشة** واكتب إجابتك مرة أخرى. اضغط Enter.
3. إذا ظل متجمدًا، انقر على **سهم الرجوع** في الزاوية العلوية اليسرى وأعد فتح الدرس.
4. يتم حفظ تقدمك تلقائيًا، لذا لن تفقد أي أسئلة مكتملة.

## النقاط لا تتحدث

إذا بدا عداد نقاطك أو سلسلتك غير صحيح:

1. **أعد تحميل صفحة التقدم** — قد تستغرق النقاط حتى 30 ثانية للمزامنة.
2. **تحقق من النطاق الزمني** — تأكد أنك تعرض الفترة الزمنية الصحيحة.
3. **سجل الخروج ثم سجل الدخول مرة أخرى** — هذا يفرض مزامنة جديدة مع الخادم.
4. إذا كانت النقاط لا تزال مفقودة بعد 5 دقائق، **تواصل مع معلمك** الذي يمكنه التحقق من لوحة الإدارة.

## مشاكل الصوت أو العرض

إذا لم يُعرض المحتوى بشكل صحيح:

- **النص صغير جدًا:** استخدم Ctrl + (زائد) للتكبير، أو عدّل حجم النص في الإعدادات.
- **الصور لا تُحمّل:** تحقق من سرعة الإنترنت. الاتصالات البطيئة قد تنتهي مهلتها عند الصور الكبيرة.
- **الألوان تبدو خاطئة:** تأكد أن جهازك ليس في وضع التباين العالي أو وضع إمكانية الوصول عن غير قصد.

## التطبيق يتعطل على الهاتف

إذا أُغلق تطبيق سترينج بشكل غير متوقع:

1. **أغلق التطبيق إجباريًا** وأعد فتحه.
2. **حدّث التطبيق** — اذهب إلى App Store أو Google Play وثبّت أحدث إصدار.
3. **أعد تشغيل جهازك** — هذا يمسح مشاكل الذاكرة المؤقتة.
4. **وفّر مساحة تخزين** — يحتاج سترينج إلى 100 ميجابايت على الأقل من المساحة الحرة للعمل بسلاسة.

## الحصول على مساعدة إضافية

إذا لم تحل أي من الخطوات أعلاه مشكلتك:

1. انقر على زر **تقديم طلب** في شريط التنقل العلوي.
2. صف المشكلة بالتفصيل — تضمن ما كنت تفعله وما حدث وأي رسائل خطأ.
3. أرفق لقطة شاشة إن أمكن.
4. فريق دعم سترينج يستجيب عادة خلال **24 ساعة** في أيام العمل.

> **نصيحة:** تضمن نوع جهازك (هاتف، جهاز لوحي، كمبيوتر) واسم المتصفح ونظام التشغيل في طلب الدعم لمساعدة الفريق في حل مشكلتك بشكل أسرع.`,
    updatedAt: '2025-05-10T00:00:00Z',
    tags: ['faq', 'troubleshooting', 'errors', 'support', 'string-tutor'],
  },
];

export const articles: Article[] = [...generateArticles(), ...faqArticles];

/* ═══════════════════════════════════════════════════════
   Feature Categories — role-based feature grid config
   ═══════════════════════════════════════════════════════ */

export interface FeatureCategory {
  slug: string;
  title: string;
  title_ar: string;
  iconSectionId: string;
  sectionId: string;
  /** Override sectionId per role for role-specific content */
  sectionIdByRole?: Partial<Record<'teacher' | 'student', string>>;
  roles: ('teacher' | 'student')[];
}

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  { slug: 'getting-started', title: 'Getting Started', title_ar: 'البدء', iconSectionId: 'sd1', sectionId: 'sd1', sectionIdByRole: { student: 'stu_gs' }, roles: ['teacher', 'student'] },
  { slug: 'account-management', title: 'Account Management', title_ar: 'إدارة الحساب', iconSectionId: 'sd2', sectionId: 'sd2', roles: ['teacher'] },
  { slug: 'class-setup-and-access', title: 'Class Setup and Access', title_ar: 'إعداد الفصل والوصول', iconSectionId: 'sd3', sectionId: 'sd3', roles: ['teacher'] },
  { slug: 'class-messaging', title: 'Class Messaging', title_ar: 'رسائل الفصل', iconSectionId: 'sd4', sectionId: 'sd4', roles: ['teacher'] },
  { slug: 'class-story-and-events', title: 'Class Story and Class Events', title_ar: 'قصة الفصل وفعاليات الفصل', iconSectionId: 'sd5', sectionId: 'sd5', roles: ['teacher'] },
  { slug: 'class-points-and-reports', title: 'Class Points and Reports', title_ar: 'نقاط الفصل والتقارير', iconSectionId: 'sd6', sectionId: 'sd6', roles: ['teacher'] },
  { slug: 'district-features', title: 'District Features', title_ar: 'ميزات المنطقة التعليمية', iconSectionId: 'sd7', sectionId: 'sd7', roles: ['teacher'] },
  { slug: 'student-portfolios', title: 'Student Portfolios', title_ar: 'ملفات الطلاب', iconSectionId: 'sd8', sectionId: 'sd8', roles: ['teacher'] },
  { slug: 'schoolwide-usage', title: 'Schoolwide Usage', title_ar: 'الاستخدام على مستوى المدرسة', iconSectionId: 'sd9', sectionId: 'sd9', roles: ['teacher'] },
  { slug: 'learning-tools', title: 'Learning Tools', title_ar: 'أدوات التعلم', iconSectionId: 'stu_tools', sectionId: 'stu_tools', roles: ['student'] },
  { slug: 'online-safety', title: 'Online Safety', title_ar: 'الأمان عبر الإنترنت', iconSectionId: 'stu_safety', sectionId: 'stu_safety', roles: ['student'] },
  { slug: 'student-account', title: 'Student Account', title_ar: 'حساب الطالب', iconSectionId: 'stu_acct', sectionId: 'stu_acct', roles: ['student'] },
];

export const ROLE_SLUG_MAP: Record<string, string> = {
  'for-teachers': 'teacher',
  'for-students': 'student',
};

export const ROLE_CATEGORY_MAP: Record<string, string> = {
  teacher: 'c10',
  student: 'c9',
};
