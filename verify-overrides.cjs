const fs = require('fs');
const content = fs.readFileSync('src/data.ts', 'utf8');

const groupArticles = {
  'g1': ['Teacher Sign Up Guide', 'School Leader Account Setup', 'District Admin Account Creation', 'Google SSO Integration', 'Troubleshooting Sign Up Errors'],
  'g2': ['Understanding Admin vs Teacher', 'Mentor Permissions', 'Student Leader Roles', 'Parent Access Rights', 'Managing Staff Directory'],
  'g3': ['Finding Your School by Zip Code', 'Requesting to Join a Locked School', 'What if my school isn\'t listed?', 'Leaving a School Network', 'Multiple School Affiliations'],
  'g4': ['Verifying Teacher Requests', 'School Leader Approval Workflow', 'Denied Join Requests', 'Badge Verification', 'Annual Re-verification'],
  'g5': ['Printing Parent Invites', 'Email and SMS Invitations', 'Connecting via Class Code', 'Handling Unconnected Families', 'Translating Invites'],
  'g_am_1': ['Changing Your Password', 'Updating Your Email Address', 'Changing Profile Picture', 'Language and Timezone Settings', 'Deleting Your Account'],
  'g_am_2': ['Supported Browsers and Devices', 'Troubleshooting Connection Issues', 'Clearing Browser Cache', 'Mobile App System Requirements', 'Whitelisting String Domains']
};

let missing = [];
Object.entries(groupArticles).forEach(([groupId, titles]) => {
  titles.forEach(title => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (!content.includes(slug + ':')) {
      missing.push(groupId + ': ' + slug);
    }
  });
});

if (missing.length === 0) {
  console.log('ALL group articles have matching overrides!');
} else {
  console.log('Missing overrides:');
  missing.forEach(m => console.log('  - ' + m));
}
