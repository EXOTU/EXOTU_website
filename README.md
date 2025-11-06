# EXOTU Website

A React + Vite + TypeScript + Tailwind site. Includes animated hero, tiered sponsors page, projects, team, and more.

## Prerequisites
- Node.js 18+ (recommended LTS)
- pnpm, npm, or yarn (examples below use npm)

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev
```

## Type Checking and Linting

```bash
# Type check only
npm run typecheck

# Lint
npm run lint
```

## Production Build

```bash
# Build to the dist/ folder
npm run build

# Preview a production build locally
npm run preview
```

## Deploying to Vercel

This project is a static SPA built with Vite. The build output is `dist/`.

You can deploy in two ways:

### 1) Vercel Dashboard (no CLI)
- Push this repository to GitHub/GitLab/Bitbucket.
- In Vercel, click "New Project" and import the repo.
- Framework Preset: "Vite"
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: none required by default.
- Deploy.

### 2) Vercel CLI
```bash
npm i -g vercel
# first time only
vercel login

# link the project (answer prompts)
vercel

# deploy production
vercel --prod
```

### SPA Routing
`vercel.json` is included to ensure single-page app routing works (rewrites unknown routes to `index.html`) and to make the static build explicit.

## Project Structure

```
project/
  src/
    components/      # UI sections like Hero, Navigation, Footer
    pages/           # High-level pages (About, Sponsors, etc.)
    main.tsx         # App bootstrap
    App.tsx          # Top-level app with simple page switching
  index.html         # Vite HTML entry
  tailwind.config.js # Tailwind setup
  vite.config.ts     # Vite config
```

## Tailwind
Tailwind is already configured. Global styles are in `src/index.css`.

## Troubleshooting
- If you see a blank page after deployment, open the browser console for errors.
- Verify the build output exists (`dist/`) and that Vercel is serving it.
- Ensure Node 18+ in your environment.

---
Maintained by the EXOTU team.
