# Joseph Kasongo Portfolio

Personal portfolio for Joseph Kasongo, a full stack software developer based in Cape Town, South Africa.

## Overview

This site presents Joseph's developer profile, skills, project work, services, contact links, and downloadable CV. It is built as a modern single-page portfolio with smooth section navigation, responsive layouts, dark mode support, SEO metadata, and Vercel Analytics.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes
- lucide-react
- Vercel Analytics

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Project Structure

- `app/` contains the Next.js app routes, global styles, and metadata.
- `components/` contains portfolio sections and reusable UI components.
- `public/docs/CV.pdf` contains the downloadable CV.
- `public/pics/` contains profile, Open Graph, and project preview images.

## Deployment

The portfolio is configured for deployment on Vercel. Run `pnpm build` before deployment to verify production readiness.
