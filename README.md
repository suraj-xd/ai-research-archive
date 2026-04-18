# AI Researcher Hub

A curated learning hub for people who want to become AI researchers — books, papers, playlists, courses, blogs, glossaries, interview questions, challenges, jobs, and roadmaps, all in one place.

Live: **[your-deployment-url]**

## What's inside

- **Curriculum & tracks** — structured learning paths from fundamentals to research
- **Resources** — hand-picked books, YouTube playlists, courses, and platforms
- **Papers** — canonical and recent research papers worth reading
- **Domain pages** — Deep Learning, Machine Learning, Reinforcement Learning, GPU & CUDA, Systems Design
- **Glossary** — ~150 terms with clear definitions and module cross-refs
- **Challenges & interviews** — practice problems and interview questions
- **Community** — Discord, Reddit, X/Twitter profiles worth following
- **Jobs** — AI/ML job listings cached from Adzuna + Remotive

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **React Router v7**
- **Lucide React** icons
- **Vercel** for hosting + analytics

## Local setup

```bash
git clone https://github.com/suraj-xd/ai-researcher-hub.git
cd ai-researcher-hub
npm install
cp .env.example .env   # optional: only needed if you want to refresh the jobs cache
npm run dev
```

Open http://localhost:5173.

### Environment variables

The frontend itself needs **no** environment variables — it reads a pre-built `public/jobs-cache.json`.

If you want to regenerate that cache locally, get free Adzuna credentials from https://developer.adzuna.com and set them in `.env`:

```
VITE_ADZUNA_APP_ID=your_app_id_here
VITE_ADZUNA_APP_KEY=your_app_key_here
VITE_ADZUNA_COUNTRY=in
```

## Scripts

```bash
npm run dev       # start Vite dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
npm run lint      # eslint
```

## Project structure

```
src/
  components/   # reusable UI (Sidebar, Layout, section components)
  pages/        # one file per route
  data/         # all content lives here as typed TS modules
  hooks/        # custom hooks
  utils/        # small helpers
public/         # static assets — fonts, covers, sprites, og-images, jobs-cache.json
```

All content (books, papers, playlists, glossary terms, etc.) is plain TypeScript in `src/data/`. Add or edit entries there and the UI picks them up automatically.

## Deploying to Vercel

The repo includes `vercel.json` with an SPA rewrite. Import the repo in Vercel and it builds with zero config. No server env vars required for the frontend.

## Contributing

Issues and PRs welcome — especially additions to `src/data/` (new papers, blogs, tools, glossary terms). Keep entries short, accurate, and link to primary sources.

## License

[MIT](./LICENSE)
