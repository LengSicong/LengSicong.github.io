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

To add a new publication, prepend an entry to `publications`. Set `featured: true` to show it on the home page; all entries appear on `/publications/`.

To add news, prepend to `news`. The newest 8 items are visible by default; the rest are behind a "Show N more" toggle.

## Visual customization

- **Colors** — `tailwind.config.mjs` `theme.extend.colors` (Anthropic-inspired warm palette: `ivory`, `bone`, `charcoal`, `clay`, `sienna`, `sand`).
- **Fonts** — `tailwind.config.mjs` `fontFamily` + the Google Fonts `<link>` in `src/layouts/Base.astro`.
- **Hero copy** — `src/data/site.ts` `tagline` + structure in `src/components/Hero.astro`.
- **Section ordering** — `src/pages/index.astro` (each section is a self-contained block).

## Assets

Static files served from the site root come from `public/`:
- `public/images/profile.jpg` — main portrait
- `public/files/*.pdf` — downloadable PDFs
- `public/favicon.svg`

## History

The previous Jekyll/academicpages version of this site is preserved on the `legacy-jekyll` branch.
