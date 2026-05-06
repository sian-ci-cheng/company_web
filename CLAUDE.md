# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # TypeScript type check (tsc --noEmit)
npm run clean     # Remove dist/
```

## Environment Setup

Copy `.env.example` to `.env.local` and set:
- `GEMINI_API_KEY` — required for Google Gemini AI integration
- `APP_URL` — deployment URL (used in self-referential links)

## Architecture

**Single-page React marketing website** for Omni Nexus Tech's autonomous drone/logistics products.

- **[src/App.tsx](src/App.tsx)** — entire UI lives here: navigation, hero, product cards, CTA, footer. All UI logic is in one component.
- **[src/index.css](src/index.css)** — global styles; Tailwind v4 + custom font declarations
- **[src/main.tsx](src/main.tsx)** — React entry point

**Internationalization**: a hard-coded `translations` object (English/Chinese) is toggled via a `useState` hook (`language` state). There is no i18n library.

**Animations**: uses the `motion` library (not Framer Motion) with scroll-linked transforms for parallax effects.

**Path alias**: `@/*` resolves to the project root (configured in both `vite.config.ts` and `tsconfig.json`).

**HMR**: disabled via `DISABLE_HMR=true` env var (used in AI Studio/cloud environments).

**Deployment**: `express` serves the built `dist/` for cloud deployment (e.g., Cloud Run).
