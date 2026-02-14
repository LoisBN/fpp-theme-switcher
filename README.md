# Theme Switcher — Global State with Zustand

Build a theme switcher using Zustand for global state management across components.

## What You'll Learn

- Zustand store creation and usage
- Global state management
- Consuming state in multiple components
- Persisting state

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript
- **Zustand** — lightweight global state management

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-theme-switcher.git
cd fpp-theme-switcher

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
app/
├── routes/
│   └── home.tsx          ← Main page with theme display
├── components/
│   └── Navbar.tsx        ← Theme toggle button
├── store/
│   └── theme.ts          ← Zustand theme store (you'll create this)
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles (Tailwind)
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

## Your Exercise Tasks

See the exercise instructions on the course platform for the full task list. The short version:

1. Clone the repo and run the dev server
2. Create a Zustand store for theme state
3. Add a toggle button in Navbar using the store
4. Apply theme classes to the app
5. Add multiple theme options (light, dark, auto)

## Hints

- Zustand stores are simple functions that return an object
- Components can call store functions directly without context
- Use Zustand's persist middleware to save theme preference

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
