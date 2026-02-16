import { Category, Section, Article } from './types';

export const categories: Category[] = [
  { id: 'c1', slug: 'getting-started', title: 'Getting Started', description: 'Everything you need to know to get up and running with String.', order: 1, icon: '🚀' },
  { id: 'c2', slug: 'account-management', title: 'Account Management', description: 'Manage your profile, security, and preferences.', order: 2, icon: '👤' },
  { id: 'c3', slug: 'billing-and-plans', title: 'Billing & Plans', description: 'Invoices, subscription tiers, and payment methods.', order: 3, icon: '💳' },
  { id: 'c4', slug: 'developer-api', title: 'Developer API', description: 'Technical documentation for integrating with String.', order: 4, icon: '⚡' },
  { id: 'c5', slug: 'for-schools-and-districts', title: 'For Schools and Districts', description: 'I’m a teacher, principal, district leader, etc.', order: 0, icon: '🏫' },
];

export const sections: Section[] = [
  // Getting Started
  { id: 's1', categoryId: 'c1', slug: 'basics', title: 'Basics', description: 'Core concepts and first steps.', order: 1 },
  { id: 's2', categoryId: 'c1', slug: 'installation', title: 'Installation', description: 'Installing String on various platforms.', order: 2 },
  { id: 's3', categoryId: 'c1', slug: 'migration', title: 'Migration', description: 'Importing data from other tools.', order: 3 },
  // Account
  { id: 's4', categoryId: 'c2', slug: 'profile', title: 'Profile Settings', description: 'Update your personal information.', order: 1 },
  { id: 's5', categoryId: 'c2', slug: 'security', title: 'Security', description: '2FA, passwords, and sessions.', order: 2 },
  { id: 's6', categoryId: 'c2', slug: 'notifications', title: 'Notifications', description: 'Email and push preferences.', order: 3 },
  // Billing
  { id: 's7', categoryId: 'c3', slug: 'subscriptions', title: 'Subscriptions', description: 'Managing your plan.', order: 1 },
  { id: 's8', categoryId: 'c3', slug: 'payment-methods', title: 'Payment Methods', description: 'Credit cards and PayPal.', order: 2 },
  { id: 's9', categoryId: 'c3', slug: 'invoices', title: 'Invoices', description: 'View and download history.', order: 3 },
  // API
  { id: 's10', categoryId: 'c4', slug: 'authentication', title: 'Authentication', description: 'OAuth and API Keys.', order: 1 },
  { id: 's11', categoryId: 'c4', slug: 'endpoints', title: 'Endpoints', description: 'REST API reference.', order: 2 },
  { id: 's12', categoryId: 'c4', slug: 'webhooks', title: 'Webhooks', description: 'Real-time event notifications.', order: 3 },
  
  // For Schools and Districts (New Sections)
  { id: 'sd1', categoryId: 'c5', slug: 'getting-started', title: 'Getting Started', description: 'Initial setup for schools.', order: 1, icon: '🏁' },
  { id: 'sd2', categoryId: 'c5', slug: 'account-management', title: 'Account Management', description: 'Roles and permissions.', order: 2, icon: '⚙️' },
  { id: 'sd3', categoryId: 'c5', slug: 'class-setup-and-access', title: 'Class Setup and Access', description: 'Rostering and invitations.', order: 3, icon: '📝' },
  { id: 'sd4', categoryId: 'c5', slug: 'class-messaging', title: 'Class Messaging', description: 'Communication tools.', order: 4, icon: '💬' },
  { id: 'sd5', categoryId: 'c5', slug: 'class-story-and-events', title: 'Class Story and Class Events', description: 'Updates and calendars.', order: 5, icon: '📅' },
  { id: 'sd6', categoryId: 'c5', slug: 'class-points-and-reports', title: 'Class Points and Reports', description: 'Behavior tracking.', order: 6, icon: '📊' },
  { id: 'sd7', categoryId: 'c5', slug: 'district-features', title: 'District Features', description: 'Admin controls.', order: 7, icon: '🏢' },
  { id: 'sd8', categoryId: 'c5', slug: 'student-portfolios', title: 'Student Portfolios', description: 'Work showcases.', order: 8, icon: '🎨' },
  { id: 'sd9', categoryId: 'c5', slug: 'schoolwide-usage', title: 'Schoolwide Usage', description: 'Analytics and engagement.', order: 9, icon: '🏫' },
  { id: 'sd10', categoryId: 'c5', slug: 'student-accounts-islands', title: 'Student Accounts and Dojo Islands', description: 'Gamification elements.', order: 10, icon: '🏝️' },
  { id: 'sd11', categoryId: 'c5', slug: 'paid-products', title: 'Paid Products and Subscriptions', description: 'Premium features.', order: 11, icon: '💎' },
];

const loremMd = (topic: string) => `
## Introduction

Welcome to the documentation for **${topic}**. This guide will help you understand the core concepts and how to effectively use this feature within String.

> **Note:** This feature is available on all plans unless specified otherwise.

## Prerequisites

Before you begin, ensure you have:
1. An active String account.
2. Verified your email address.
3. Administrator permissions (if applicable).

## Step-by-Step Guide

### 1. Configuration

Navigate to your dashboard and select **Settings**. From there, you can locate the ${topic} configuration panel.

\`\`\`json
{
  "feature": "${topic}",
  "enabled": true,
  "config_id": "12345"
}
\`\`\`

### 2. Usage

Once configured, you can start using ${topic} immediately. 

*   **Efficiency:** Designed to save you time.
*   **Reliability:** Backed by our 99.9% uptime SLA.
*   **Security:** Encrypted at rest and in transit.

## Common Issues

| Issue | Potential Cause | Solution |
| :--- | :--- | :--- |
| Feature not visible | Permissions | Check your role settings |
| Error 404 | Network | Refresh the page |
| Slow loading | Browser cache | Clear cache |

## Conclusion

We hope this guide helped you master ${topic}. If you have further questions, please contact support.
`;

const generateArticles = (): Article[] => {
  const articles: Article[] = [];
  let count = 0;
  
  sections.forEach(sec => {
    // Generate standard articles
    for (let i = 1; i <= 5; i++) {
      count++;
      const title = `${sec.title} - Guide ${i}`;
      articles.push({
        id: `a${count}`,
        sectionId: sec.id,
        slug: `${sec.slug}-guide-${i}`,
        title: title,
        summary: `Learn how to handle ${sec.title.toLowerCase()} in guide ${i}. Essential tips and tricks included.`,
        bodyMarkdown: loremMd(title),
        updatedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
        tags: [sec.slug, 'guide', 'tutorial'],
        isTop: i === 1,
        isFeatured: false
      });
    }
  });

  // Add specific featured articles for the new category
  const schoolsCategorySections = sections.filter(s => s.categoryId === 'c5');
  if (schoolsCategorySections.length > 0) {
      articles.push({
          id: 'feat1',
          sectionId: 'sd1', // Getting Started
          slug: 'how-to-setup-your-school',
          title: 'How to setup your school dashboard in 5 minutes',
          summary: 'A quick start guide for principals and administrators to get their school online.',
          bodyMarkdown: loremMd('School Setup'),
          updatedAt: new Date().toISOString(),
          tags: ['setup', 'school', 'admin'],
          isFeatured: true
      });
      articles.push({
          id: 'feat2',
          sectionId: 'sd4', // Class Messaging
          slug: 'messaging-best-practices',
          title: 'Best practices for messaging parents and students',
          summary: 'Ensure clear communication while maintaining privacy and professional boundaries.',
          bodyMarkdown: loremMd('Messaging Best Practices'),
          updatedAt: new Date().toISOString(),
          tags: ['messaging', 'privacy', 'communication'],
          isFeatured: true
      });
      articles.push({
          id: 'feat3',
          sectionId: 'sd7', // District Features
          slug: 'district-wide-analytics',
          title: 'Understanding District-wide Analytics',
          summary: 'Deep dive into engagement metrics across all schools in your district.',
          bodyMarkdown: loremMd('District Analytics'),
          updatedAt: new Date().toISOString(),
          tags: ['analytics', 'district', 'data'],
          isFeatured: true
      });
  }

  return articles;
};

export const articles: Article[] = generateArticles();