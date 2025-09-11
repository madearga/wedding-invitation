# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository overview
- Monorepo managed by Turborepo
- Package manager: bun (declared as "bun@1.2.5")
- Primary app: apps/web (Next.js 15, App Router, TypeScript, Tailwind CSS v4, next-themes, shadcn-style UI primitives)
- Dev server port: 3001

Commands (run from repo root)
- Install dependencies
  - bun install
- Start all apps in dev
  - bun dev
- Start only the web app in dev
  - bun run dev:web
- Build all apps
  - bun build
- Build only the web app
  - bunx turbo -F web build
- Start only the web app in production mode (after building)
  - bunx turbo -F web start
- Type-check across apps
  - bun check-types
- Lint
  - Not configured (no eslint config or lint scripts present)
- Tests
  - Not configured (no test runner or scripts present)

Environment configuration
- apps/web/.env.example defines: NEXT_PUBLIC_SERVER_URL=
- To run locally, create apps/web/.env.local and set NEXT_PUBLIC_SERVER_URL accordingly.

High-level architecture
- Monorepo: Root package.json delegates dev/build/type-check to Turborepo; turbo.json defines task graph with dev (non-cached), build (cached; outputs "dist/**"), lint, and check-types pipelines.
- Web app (apps/web)
  - Next.js App Router under src/app
    - layout.tsx: global fonts (Geist), global styles (src/index.css), top-level Providers wrapper, and Header; sets typed routes and metadata
    - page.tsx: client component; basic landing UI
  - Theming and UI
    - next-themes ThemeProvider (components/theme-provider.tsx) + ModeToggle (components/mode-toggle.tsx)
    - UI primitives in components/ui/* built with class-variance-authority, tailwind-merge, and Radix primitives
    - Tailwind CSS v4 with @tailwindcss/postcss (apps/web/postcss.config.mjs); design tokens and color system defined in src/index.css
  - Global providers
    - components/providers.tsx wraps children with ThemeProvider and Sonner Toaster
  - TypeScript and module resolution
    - apps/web/tsconfig.json enforces strict TS, Next.js plugin, and path alias @/* -> src/*
  - Next.js config
    - next.config.ts enables typedRoutes for safer navigation

Notes from README
- Use bun install then bun dev; open http://localhost:3001 for the web application

Project rules for future agents
- Authentication: If adding auth, prefer Better Auth over Convex Auth (user preference).

