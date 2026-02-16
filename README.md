# String Help Center

A professional, React-based Help Center application designed for the product "String".

## Tech Stack

*   **Core:** React 18, TypeScript, Vite
*   **Styling:** TailwindCSS
*   **Routing:** React Router DOM (HashRouter)
*   **Markdown:** `react-markdown`, `remark-gfm`
*   **Icons:** Heroicons (via SVG in code)

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install react react-dom react-router-dom react-markdown remark-gfm clsx tailwind-merge
    npm install -D typescript vite @types/react @types/react-dom @types/node autoprefixer postcss tailwindcss
    ```
    *(Note: Tailwind is included via CDN in index.html for this demo, but the npm packages are recommended for a production build)*

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Content Management

The application currently uses a local "File-based CMS" approach located in `src/data.ts`.

### Data Model

1.  **Categories (`Category`):** Top-level groupings (e.g., Billing, API).
2.  **Sections (`Section`):** Sub-groupings within categories (e.g., Invoices, Auth).
3.  **Articles (`Article`):** The actual content.

### Adding Content

To add a new article:
1.  Open `src/data.ts`.
2.  Add a new object to the `articles` array.
3.  Ensure the `sectionId` matches an existing section.
4.  The `bodyMarkdown` field supports standard Markdown + GFM (tables, task lists).

### Migrating to an API

To replace the local data with a real Backend/CMS:
1.  Modify `src/lib/api.ts`.
2.  Replace the direct array filters with `fetch()` calls to your API endpoint.
3.  Ensure your API returns JSON matching the interfaces in `src/types.ts`.

## Search Logic

Search is handled client-side in `src/lib/api.ts` -> `searchArticles()`.
It uses a weighted scoring algorithm:
1.  **Title Match:** 10 points.
2.  **Tag Match:** 5 points.
3.  **Summary Match:** 3 points.
4.  **Body Content Match:** 1 point per keyword occurrence.

## Features

*   **Global Search:** Query param based (`?q=`), shareable URLs.
*   **Breadcrumbs:** Auto-generated based on the route hierarchy.
*   **Table of Contents:** Auto-generated from H2/H3 tags in the rendered Markdown.
*   **Persistence:** "Recently Viewed" and "Helpful" votes are stored in `localStorage`.
*   **Responsive:** Mobile-first design using Tailwind grid/flex patterns.
