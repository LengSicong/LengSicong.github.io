# lengsicong.github.io

Personal homepage of Sicong Leng — PhD student at NTU.
Live at https://lengsicong.github.io/.

Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).
Deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml` (any push to `master` rebuilds and ships).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output -> ./dist
npm run preview   # serve ./dist locally
```

Requires Node 20+.

## Editing content

Almost all site content lives in `src/data/` as plain TypeScript — no CMS, no markdown indirection.

| What | Where |
|---|---|
| Name, tagline, bio, socials | `src/data/site.ts` |
| News timeline | `src/data/news.ts` |
| Publications | `src/data/publications.ts` |
| Awards | `src/data/awards.ts` |
| Work experience + service | `src/data/experience.ts` |

The `body` of news items and the `authors` of publications support a tiny inline-markdown subset: `**bold**`, `[text](url)`, and `\*` for a literal asterisk (used for equal-contribution markers).

To add a new publication, prepend an entry to `publications`. The two `featured: true` entries (RynnBrain 1.1 and Flora) are the primary homepage projects; Vesta appears below in the compact list, and all entries appear on `/publications/`. Keep the homepage curated and link to Scholar for the full list.

To add news, prepend to `news`. The newest 4 items are visible by default; the rest are behind a "Show N more" toggle.

## Visual customization

The current design takes its warm background, restrained green accents, and clean typography from the Flora release pages.

- Layout and palette: `src/styles/global.css`.
- Fonts and navigation: `src/layouts/Base.astro`.
- Homepage sections: `src/pages/index.astro`.
- Featured research: `src/components/ResearchFeature.astro`; local release videos in `public/videos/` and posters in `public/images/`.
- Use `withBase()` for local routes and assets. `SITE_BASE=/unique-review-slug/ npm run build` creates an isolated review build; normal builds use `/`.
- Author and news disclosures use native HTML, with no client-side JavaScript.

Content sources and outstanding experience dates are documented in `docs/refresh-2026-10.md`.

## Assets

Static files served from the site root come from `public/`:
- `public/images/profile.jpg` — main portrait
- `public/files/*.pdf` — downloadable PDFs
- `public/favicon.svg`

## History

The previous Jekyll/academicpages version of this site is preserved on the `legacy-jekyll` branch.
