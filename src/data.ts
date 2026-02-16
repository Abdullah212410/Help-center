import { Category, Section, Group, Article } from './types';

export const categories: Category[] = [
  { id: 'c5', slug: 'for-schools-and-districts', title: 'For Schools and Districts', description: 'Resources for teachers, admins, and district leaders.', order: 1, icon: '🏫' },
  { id: 'c6', slug: 'for-families', title: 'For Families', description: 'Guides for parents and guardians.', order: 2, icon: '🏠' },
  { id: 'c1', slug: 'getting-started', title: 'General Getting Started', description: 'Basic setup for everyone.', order: 3, icon: '🚀' },
  { id: 'c2', slug: 'account-management', title: 'Account Management', description: 'Profile and security settings.', order: 4, icon: '👤' },
  { id: 'c3', slug: 'billing-and-plans', title: 'Billing & Plans', description: 'Subscription and payment info.', order: 5, icon: '💳' },
  { id: 'c4', slug: 'developer-api', title: 'Developer API', description: 'Integration documentation.', order: 6, icon: '⚡' },
  { id: 'c7', slug: 'safety-and-privacy', title: 'Safety and Privacy', description: 'Data protection policies.', order: 7, icon: '🛡️' },
  { id: 'c8', slug: 'string-tutor', title: 'String Tutor', description: 'One-on-one support guides.', order: 8, icon: '🎓' },
];

export const sections: Section[] = [
  // For Schools and Districts - Specific Order from Prompt
  { id: 'sd1', categoryId: 'c5', slug: 'getting-started', title: 'Getting Started', description: 'Initial setup for schools.', order: 1, icon: '🏁' },
  { id: 'sd2', categoryId: 'c5', slug: 'account-management', title: 'Account Management', description: 'Managing your profile and school settings.', order: 2, icon: '⚙️' },
  { id: 'sd3', categoryId: 'c5', slug: 'class-setup-and-access', title: 'Class Setup and Access', description: 'Creating classes and adding students.', order: 3, icon: '📝' },
  { id: 'sd4', categoryId: 'c5', slug: 'class-messaging', title: 'Class Messaging', description: 'Communicating with families.', order: 4, icon: '💬' },
  { id: 'sd5', categoryId: 'c5', slug: 'class-story-and-events', title: 'Class Story and Class Events', description: 'Sharing moments and scheduling.', order: 5, icon: '📅' },
  { id: 'sd6', categoryId: 'c5', slug: 'class-points-and-reports', title: 'Class Points and Reports', description: 'Behavior tracking and analytics.', order: 6, icon: '📊' },
  { id: 'sd7', categoryId: 'c5', slug: 'district-features', title: 'District Features', description: 'Administrative tools for districts.', order: 7, icon: '🏢' },
  { id: 'sd8', categoryId: 'c5', slug: 'student-portfolios', title: 'Student Portfolios', description: 'Student work and voice.', order: 8, icon: '🎨' },
  { id: 'sd9', categoryId: 'c5', slug: 'schoolwide-usage', title: 'Schoolwide Usage', description: 'Engagement stats.', order: 9, icon: '🏫' },
  { id: 'sd10', categoryId: 'c5', slug: 'student-accounts-islands', title: 'Student Accounts and Dojo Islands', description: 'Student login and gamification.', order: 10, icon: '🏝️' },
  { id: 'sd11', categoryId: 'c5', slug: 'paid-products', title: 'Paid Products and Subscriptions', description: 'Premium features.', order: 11, icon: '💎' },

  // Placeholders for other categories
  { id: 's1', categoryId: 'c1', slug: 'basics', title: 'Basics', description: 'Core concepts.', order: 1 },
  { id: 'fam1', categoryId: 'c6', slug: 'parent-setup', title: 'Parent Setup', description: 'Getting started for parents.', order: 1 },
];

export const groups: Group[] = [
  // Groups for "Getting Started" (sd1)
  { id: 'g1', sectionId: 'sd1', title: 'Creating an Account', description: 'Steps to join the String community.', order: 1 },
  { id: 'g2', sectionId: 'sd1', title: 'Roles and Permissions', description: 'Who can do what in your school.', order: 2 },
  { id: 'g3', sectionId: 'sd1', title: 'Joining Your School', description: 'Connecting to your organization.', order: 3 },
  { id: 'g4', sectionId: 'sd1', title: 'School Approval', description: 'Verifying your teacher status.', order: 4 },
  { id: 'g5', sectionId: 'sd1', title: 'Connecting Families', description: 'Inviting parents to join.', order: 5 },

  // Groups for "Account Management" (sd2)
  { id: 'g_am_1', sectionId: 'sd2', title: 'Basics', description: 'Manage your personal information.', order: 1 },
  { id: 'g_am_2', sectionId: 'sd2', title: 'Technical Support and Compatibility', description: 'System requirements and troubleshooting.', order: 2 },
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

  Object.entries(groupArticles).forEach(([groupId, titles]) => {
    titles.forEach((title, index) => {
      articles.push({
        id: `art-${groupId}-${index}`,
        sectionId: groupId.startsWith('g_am') ? 'sd2' : 'sd1',
        groupId: groupId,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        title: title,
        summary: `Complete guide on ${title}.`,
        bodyMarkdown: stringAppContent(title),
        updatedAt: new Date().toISOString(),
        tags: ['guide', 'getting-started', 'string-app'],
        isTop: index === 0,
      });
    });
  });

  // 2. Generate generic articles for other sections
  sections.filter(s => s.id !== 'sd1' && s.id !== 'sd2').forEach(sec => {
    for (let i = 1; i <= 3; i++) {
      const title = `${sec.title} Guide ${i}`;
      articles.push({
        id: `gen-${sec.id}-${i}`,
        sectionId: sec.id,
        slug: `${sec.slug}-guide-${i}`,
        title: title,
        summary: `General documentation for ${sec.title}.`,
        bodyMarkdown: stringAppContent(title),
        updatedAt: new Date().toISOString(),
        tags: ['general'],
      });
    }
  });

  return articles;
};

export const articles: Article[] = generateArticles();