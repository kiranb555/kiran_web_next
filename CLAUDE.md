# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start dev server with Turbopack at localhost:3000
yarn build      # Production build (static export to out/)
yarn start      # Start production server
yarn lint       # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 15 personal portfolio site** using the App Router, configured for **static export** (`output: 'export'`) targeting both GitHub Pages and Vercel.

### Deployment dual-mode
[next.config.ts](next.config.ts) detects the target environment at build time:
- **GitHub Pages**: sets `basePath: '/kiran_web_next'` and `distDir: 'out'` when `NODE_ENV === 'production'` and `VERCEL !== '1'`
- **Vercel**: no basePath, standard output
- GitHub Actions workflow in [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml) handles CI deployment to GitHub Pages

### Key structural decisions
- All site content/data lives in [src/data/data.json](src/data/data.json) — edit this to update portfolio content
- Technology constants are in [src/constants/technologies.ts](src/constants/technologies.ts)
- Theme (dark/light) is managed by `next-themes` via [src/components/Providers.tsx](src/components/Providers.tsx) and [src/context/ThemeContext.tsx](src/context/ThemeContext.tsx); Tailwind uses `darkMode: 'class'`
- The contact form POSTs to `/api/sendMail` ([src/app/api/sendMail/route.ts](src/app/api/sendMail/route.ts)) which uses Nodemailer — requires `.env` with mail credentials. **Note:** API routes don't work on GitHub Pages (static export); they only function on Vercel.

### Component layout
Each section of the page is a standalone component under [src/components/](src/components/) (Banner, About, Experience, Awards, Hobby, Contact, etc.) assembled in [src/app/page.tsx](src/app/page.tsx). The `ParticleBackground` component uses `tsparticles` and must be a client component.

### Image paths
Because of the basePath duality, use the `NEXT_PUBLIC_BASE_PATH` env variable when constructing image `src` paths for assets in `public/`, or they will break on GitHub Pages.

### Package manager
This project uses **Yarn** (yarn.lock present). Do not use npm or pnpm.
