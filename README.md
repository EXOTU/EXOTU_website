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

## Notifications & Monitoring

GitHub Actions sends email on failures via an SMTP step, and a scheduled uptime workflow pings production and emails if it’s down.

1) Set repository secrets (Settings → Secrets and variables → Actions):
- `SMTP_SERVER` – e.g., smtp.gmail.com
- `SMTP_PORT` – e.g., 465 (SSL) or 587 (TLS)
- `SMTP_USERNAME` – SMTP account
- `SMTP_PASSWORD` – SMTP password/app password
- `NOTIFY_TO_EMAIL` – recipient(s), comma-separated
- `NOTIFY_FROM_EMAIL` – sender address
- `PROD_URL` – your live site (e.g., https://your-domain.vercel.app)

2) Workflows:
- `.github/workflows/ci.yml` – typecheck, lint, build, and emails on CI failure
- `.github/workflows/uptime.yml` – runs every 15 minutes and emails on downtime
- `.github/workflows/release.yml` – automatic semantic versioning and releases
- `.github/workflows/security.yml` – weekly security audit of dependencies
- `.github/workflows/bundle-size.yml` – analyzes and tracks bundle size on PRs
- `.github/workflows/commitlint.yml` – validates commit messages follow Conventional Commits

Tip: In Vercel Project Settings, enable deployment notifications and Integrations (e.g., Email, Slack) for additional alerts.

## Semantic Versioning

The project uses automatic semantic versioning based on [Conventional Commits](https://www.conventionalcommits.org/).

### How it works:
- **Patch** (0.1.0 → 0.1.1): Default for any commit
- **Minor** (0.1.0 → 0.2.0): Commits starting with `feat:` or `feat(scope):`
- **Major** (0.1.0 → 1.0.0): Commits with `BREAKING CHANGE:` or `feat(scope)!:`

### Commit message format:
```
feat: add new sponsor tier
fix: resolve hero animation bug
feat(api)!: change authentication method (BREAKING CHANGE)
```

### What happens on merge to main:
1. Workflow analyzes commits since last tag
2. Determines version bump (patch/minor/major)
3. Updates `package.json` version
4. Creates git tag (e.g., `v0.2.0`)
5. Creates GitHub Release with changelog
6. Sends release notification email

### Skip release:
Add `[skip release]` to your commit message to skip automatic versioning.

### Manual release:
You can also trigger a release manually via GitHub Actions → Release → Run workflow.

## Pipeline Features

### Security Audit
- Runs on every PR and push to main
- Weekly scheduled audit (Mondays)
- Fails on high/critical vulnerabilities
- Uses `npm audit` to check dependencies

### Bundle Size Analysis
- Runs on PRs to track bundle size changes
- Reports file sizes in PR comments
- Enforces 5MB total bundle size limit (configurable)
- Helps prevent accidental bundle bloat

### Commit Message Linting
- Validates all commits in PRs follow Conventional Commits
- Format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, perf, test, chore, build, ci, revert
- Ensures consistent commit history for semantic versioning

### Build Verification
- Verifies build output exists and is not empty
- Catches silent build failures early

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
