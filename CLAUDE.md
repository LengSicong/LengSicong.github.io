# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Personal academic homepage for Sicong Leng, deployed at https://lengsicong.github.io/. Built with **Astro 4 + Tailwind CSS 3** (no React/Vue/etc — Astro's own component syntax). Output is fully static, deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml` on every push to `master`.

The previous Jekyll/academicpages incarnation lives on the `legacy-jekyll` branch and can be referenced for content history.

## Local commands

```bash
npm install
npm run dev       # http://localhost:4321 with HMR
npm run build     # static output to ./dist (this is what GitHub Actions runs)
npm run preview   # serve the built dist/ locally to verify the production build
```

Node 20+. The deploy workflow pins Node 20 — match it locally to catch CI parity issues early.

## Architecture

**Content is data, not Markdown files.** All site content lives as typed TypeScript in `src/data/`:

| File | Owns |
|---|---|
| `src/data/site.ts` | name, tagline, bio paragraph, affiliation, socials |
| `src/data/news.ts` | news timeline (newest first) |
| `src/data/publications.ts` | publications (with `featured` flag controlling home-page inclusion) |
| `src/data/awards.ts` | conference awards |
| `src/data/experience.ts` | work experience + service (reviewer/PC) |

This was a deliberate choice over Astro content collections — the site has a small fixed set of types and editing a `.ts` array is faster than authoring frontmatter.

**Inline markdown for prose fields.** `news[].body`, `publications[].authors`, and `site.bio` accept a minimal subset rendered by `src/lib/markdown-lite.ts`:
- `**bold**` → `<strong>`
- `[text](url)` → `<a class="link-clay" ...>`
- `\*` → literal `*` (used in author lists for equal-contribution markers; the backslash protects them from the `**bold**` regex)
- `\n` → `<br/>`
- Everything else is HTML-escaped

When a component renders one of these, it uses Astro's `set:html={renderInline(value)}` directive. Do not bypass the renderer — it does the escaping.

**Pages**: `src/pages/index.astro` is the single long-scroll home (Hero → About → News → Selected Pubs → Awards → Service → Experience). `src/pages/publications.astro` is the full list grouped by year. `src/layouts/Base.astro` provides `<head>` (SEO, OG, fonts) and the global Footer; the index page sets `showNav={false}` because it has a custom inline sticky nav that appears after the hero.

**Styling**: Tailwind utility classes throughout. The Anthropic-inspired palette (`ivory`, `bone`, `charcoal`, `graphite`, `mist`, `border`, `clay`, `sienna`, `sand`) is defined in `tailwind.config.mjs` `theme.extend.colors`. A handful of component-level utilities (`.link-clay`, `.pill-clay`, `.section-divider`, etc.) live in `src/styles/global.css` under `@layer components`.

**Fonts**: Loaded from Google Fonts in `Base.astro` — Fraunces (serif, used for hero name + section titles), Inter (sans, body), JetBrains Mono (mono, eyebrows/labels/dates).

## Common edits

- **Add a publication**: prepend to the array in `src/data/publications.ts`. Set `featured: true` to surface on the home page. Mark equal-contribution authors with `\*`; mark yourself with `**Sicong Leng**`.
- **Add news**: prepend to `src/data/news.ts`. Set `highlight: true` to add a clay-colored left border (use sparingly for awards/orals).
- **Change hero copy**: `src/data/site.ts` `tagline` (supports `\n` for line break) and `affiliation`. The visual structure lives in `src/components/Hero.astro`.
- **Recolor**: edit `tailwind.config.mjs` `theme.extend.colors`. A full rebuild picks it up; dev mode HMRs automatically.
- **Reorder home sections**: edit `src/pages/index.astro` — each `<section>` is independent.

## Deployment

GitHub Pages source must be set to **"GitHub Actions"** (Settings → Pages → Source). The workflow at `.github/workflows/deploy.yml` runs `npm ci && npm run build`, uploads `./dist` as the Pages artifact, and deploys. The `master` branch is the only deploy trigger.

If a deploy ever fails and the site is down, the `legacy-jekyll` branch is a complete pre-redesign snapshot — Pages source can be temporarily pointed at it as a rollback.

## Things not to do

- Don't reintroduce a Markdown-content workflow for news/publications without removing the data files first — having both would split sources of truth.
- Don't add a React/Vue/Solid integration unless a section genuinely needs reactivity; current site is intentionally zero-JS apart from one tiny `is:inline` script for the news "Show more" toggle.
- Don't commit `node_modules/`, `dist/`, or `.astro/` — `.gitignore` already excludes them.
