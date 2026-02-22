# Role-Based Permissions — Manual Test Plan & RLS Checklist

## Prerequisites

You need 4 test accounts with different roles in `profiles.role`:

| Account        | Email                   | Role      |
|----------------|-------------------------|-----------|
| Test Admin     | admin@test.com          | `admin`   |
| Test Teacher   | teacher@test.com        | `teacher` |
| Test Student   | student@test.com        | `student` |
| Test Family    | family@test.com         | `family`  |

To change a role, run this in the Supabase SQL Editor:

```sql
UPDATE profiles SET role = 'admin' WHERE email = 'admin@test.com';
```

---

## 1. Manual Test Plan

### 1.1 Admin — Full Access

| #  | Step                                        | Expected Result                                         |
|----|---------------------------------------------|---------------------------------------------------------|
| 1  | Sign in as admin                            | Login succeeds, DEV widget shows role = `admin`         |
| 2  | Navigate to `/blog/new`                     | Blog editor loads normally                              |
| 3  | Create a new blog post (fill title + body)  | Post is saved and visible in `/blog`                    |
| 4  | Edit any blog post (including other authors) | Editor opens, changes save successfully                |
| 5  | Delete any blog post                        | Post is removed from the feed                           |
| 6  | Navigate to `/teacher/dashboard`            | Dashboard loads (admin is in allowedRoles)              |
| 7  | Navigate to `/account`                      | Account settings page loads                             |
| 8  | Like a published blog post                  | Like count increments, button state toggles             |
| 9  | Add a comment on a blog post                | Comment appears below the post                          |

### 1.2 Teacher — Blog Write + Dashboard, No Admin

| #  | Step                                            | Expected Result                                    |
|----|-------------------------------------------------|----------------------------------------------------|
| 1  | Sign in as teacher                              | Login succeeds, DEV widget shows role = `teacher`  |
| 2  | Navigate to `/blog/new`                         | Blog editor loads normally                         |
| 3  | Create a blog post                              | Post is saved successfully                         |
| 4  | Edit own blog post                              | Editor opens, saves changes                        |
| 5  | Try to edit another author's post               | Blocked — `canModifyPost` returns false            |
| 6  | Navigate to `/teacher/dashboard`                | Dashboard loads normally                           |
| 7  | Like and comment on posts                       | Both work as expected                              |

### 1.3 Student — Read Only, No Write Access

| #  | Step                                            | Expected Result                                     |
|----|-------------------------------------------------|-----------------------------------------------------|
| 1  | Sign in as student                              | Login succeeds, DEV widget shows role = `student`   |
| 2  | Navigate to `/blog`                             | Published posts are visible                         |
| 3  | Navigate to `/blog/:postId`                     | Post content is readable                            |
| 4  | Navigate to `/blog/new`                         | **Blocked** — "Not Authorized" message shown        |
| 5  | Navigate to `/teacher/dashboard`                | **Redirected to /unauthorized**                     |
| 6  | Navigate to `/help`, categories, articles       | All public content loads normally                   |
| 7  | Like a blog post                                | Like works (authenticated user)                     |
| 8  | Add a comment                                   | Comment works (authenticated user)                  |
| 9  | Navigate to `/account`                          | Account settings load normally                      |

### 1.4 Family — Same as Student

| #  | Step                                            | Expected Result                                     |
|----|-------------------------------------------------|-----------------------------------------------------|
| 1  | Sign in as family                               | Login succeeds, DEV widget shows role = `family`    |
| 2  | Navigate to `/blog/new`                         | **Blocked** — "Not Authorized" message              |
| 3  | Navigate to `/teacher/dashboard`                | **Redirected to /unauthorized**                     |
| 4  | Browse public content (help, blog, articles)    | All readable                                        |
| 5  | Like and comment                                | Both work (authenticated)                           |

### 1.5 Guest (Not Signed In)

| #  | Step                                            | Expected Result                                     |
|----|-------------------------------------------------|-----------------------------------------------------|
| 1  | Open app without signing in                     | Home page loads, public content visible             |
| 2  | Browse `/help`, categories, articles            | All readable                                        |
| 3  | Browse `/blog` and read published posts         | All readable                                        |
| 4  | Navigate to `/blog/new`                         | **Blocked** — "Sign In Required" message            |
| 5  | Navigate to `/teacher/dashboard`                | **Redirected to /login**                            |
| 6  | Navigate to `/account`                          | **Blocked** — "Sign In Required" message            |
| 7  | Try to like or comment                          | **Blocked** — should prompt sign-in (401 error)     |

---

## 2. Route Guard Summary

| Route                  | Guard Component  | Admin | Teacher | Student | Family | Guest     |
|------------------------|------------------|-------|---------|---------|--------|-----------|
| `/help/*`              | None             | OK    | OK      | OK      | OK     | OK        |
| `/blog`                | None             | OK    | OK      | OK      | OK     | OK        |
| `/blog/:id`            | None             | OK    | OK      | OK      | OK     | OK        |
| `/blog/new`            | BlogWriteRoute   | OK    | OK      | Denied  | Denied | Sign In   |
| `/blog/:id/edit`       | BlogWriteRoute   | OK    | OK      | Denied  | Denied | Sign In   |
| `/teacher/dashboard`   | RoleRoute        | OK    | OK      | /unauth | /unauth| /login    |
| `/account`             | PrivateRoute     | OK    | OK      | OK      | OK     | Sign In   |
| `/unauthorized`        | None             | OK    | OK      | OK      | OK     | OK        |

---

## 3. DEV Debug Widget

- **Location**: Fixed bottom-left corner of the viewport
- **Visibility**: Only when `import.meta.env.DEV === true` (Vite dev server)
- **Features**:
  - Shows current user's role (color-coded badge), name, email, user ID
  - Logout button
  - Collapsible (click "DEV" pill to expand, X to collapse)
- **Does NOT** allow role switching — roles must be changed via DB

---

## 4. RLS Verification Checklist

### 4.1 How to confirm non-admin requests fail

Open your browser console or use the Supabase client while signed in as a **student/family** user:

```javascript
// This should FAIL with permission denied for non-admin users
const { data, error } = await supabase
  .from('categories')
  .insert({ id: 'test', slug: 'test', title: 'Test', description: 'test' });

console.log(error);
// Expected: { message: "new row violates row-level security policy", code: "42501" }
```

### 4.2 Forbidden operations by role

#### a) Student/Family tries to INSERT a category

```javascript
// Signed in as student@test.com
const { error } = await supabase
  .from('categories')
  .insert({ id: 'hack-cat', slug: 'hack', title: 'Hacked', description: 'x' });

// Expected error:
// code: "42501"
// message: "new row violates row-level security policy for table \"categories\""
```

#### b) Student/Family tries to UPDATE an article

```javascript
// Signed in as student@test.com
const { error } = await supabase
  .from('articles')
  .update({ title: 'Hacked Title' })
  .eq('slug', 'some-article-slug');

// Expected: error code "42501" — row-level security violation
// OR: data returns empty (0 rows updated) because policy blocks the operation
```

#### c) Student/Family tries to DELETE a category

```javascript
// Signed in as family@test.com
const { error } = await supabase
  .from('categories')
  .delete()
  .eq('slug', 'for-families');

// Expected: error code "42501" or 0 rows deleted
```

#### d) Student tries to UPDATE another user's profile role

```javascript
// Signed in as student@test.com
const { error } = await supabase
  .from('profiles')
  .update({ role: 'admin' })
  .eq('email', 'student@test.com');

// Expected: fails because profiles_update_own policy only allows updating `name`
// The role column change should be blocked
```

#### e) Non-admin tries to read other profiles

```javascript
// Signed in as teacher@test.com
const { data, error } = await supabase
  .from('profiles')
  .select('*');

// Expected: only returns the current user's own profile row
// Admin would get all rows
```

### 4.3 Quick verification steps

1. **Open Supabase Dashboard** > Authentication > Users — verify test accounts exist
2. **Open SQL Editor** and run:
   ```sql
   SELECT id, email, role FROM profiles ORDER BY role;
   ```
   Confirm each user has the correct role.
3. **Sign in as student** in the app, open browser DevTools console
4. Run the insert/update/delete snippets above
5. **Confirm every write attempt returns error code `42501`** or empty results
6. **Sign in as admin** and repeat — confirm all operations succeed

### 4.4 Policies reference (from schema.sql)

| Table        | Policy Name             | Operation | Who                     |
|--------------|-------------------------|-----------|-------------------------|
| `profiles`   | profiles_select_own     | SELECT    | Own row only            |
| `profiles`   | profiles_select_admin   | SELECT    | Admin reads all         |
| `profiles`   | profiles_update_own     | UPDATE    | Own row, name only      |
| `profiles`   | profiles_update_admin   | UPDATE    | Admin updates any       |
| `profiles`   | profiles_insert_own     | INSERT    | Own row during signup   |
| `categories` | (public read)           | SELECT    | Everyone                |
| `categories` | (admin write)           | INSERT/UPDATE/DELETE | Admin only   |
| `articles`   | (public read)           | SELECT    | Everyone                |
| `articles`   | (admin write)           | INSERT/UPDATE/DELETE | Admin only   |
