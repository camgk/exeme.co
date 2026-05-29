# Exeme

Premium static website for Exeme: websites, Shopify storefronts, and AI-powered growth systems for premium ecommerce brands.

Built with Astro, TypeScript, static Markdown content, and GitHub Pages deployment.

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Astro will print the local URL, usually `http://localhost:4321`.

## Typecheck

```bash
npm run check
```

## Build locally

```bash
npm run build
```

The production output is written to `dist/`.

## Preview the production build

```bash
npm run preview
```

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages.

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

## Site URL and base path

GitHub Pages configuration lives in `astro.config.ts`.

For a custom domain:

```bash
SITE=https://exeme.co
BASE_PATH=/
```

For a project page such as `https://username.github.io/exeme.co.uk/`:

```bash
SITE=https://username.github.io
BASE_PATH=/exeme.co.uk
```

The deploy workflow also exposes `SITE` and `BASE_PATH` in the build step. Update those values if the production URL changes.

## Custom domain

The current custom domain file is `public/CNAME` and contains:

```text
exeme.co
```

Update this file if the GitHub Pages custom domain changes.

## Content

Insight posts live in `src/content/insights/` as Markdown files with frontmatter.

## Contact form

The contact form is intentionally static for GitHub Pages v1. It uses a `mailto:` fallback and includes a TODO in `src/pages/contact.astro` for future form integration.
