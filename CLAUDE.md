# Homepage development

Personal academic homepage for Sicong Leng. Astro 4 + Tailwind CSS 3; fully static output. The production deployment is GitHub Pages at https://lengsicong.github.io/.

## Commands

Use Node 20+ and npm 9.6.5+.

- `npm ci`
- `npm run dev` — local preview
- `npm run astro -- check` — type and template diagnostics
- `npm run build` — production build in `dist/`
- `SITE_BASE=/unique-review-slug/ npm run build` — isolated static review build

Pushes to `master` trigger `.github/workflows/deploy.yml`. The previous Jekyll site remains on `legacy-jekyll`.

## Content

- `src/data/site.ts`: identity, biography, contacts, last update date.
- `src/data/experience.ts`: experience. Do not invent dates to fill gaps.
- `src/data/publications.ts`: publications. The two entries with `featured: true` receive large homepage features: Flora, then RynnBrain 1.1. Vesta appears in the compact selected-work list in `src/pages/index.astro`; Scholar remains the complete list.
- `src/data/news.ts`: updates, newest first.
- `docs/refresh-2026-10.md`: source evidence, including owner-confirmed LinkedIn titles and dates.

Use the existing inline Markdown renderer for authored prose; it escapes HTML. Keep full author order in the data. Do not add claims about conference acceptance or contributions without source evidence.

## Presentation

The October 2026 design follows Flora's light release theme: warm paper, restrained green, Inter, IBM Plex Mono, and thin dividers. `src/styles/global.css` owns responsive layout and tokens. `ResearchFeature.astro` embeds the official release videos as local H.264/AAC MP4s in `public/videos/`, with posters in `public/images/`. Preserve their full content and audio; native controls and `preload="none"` keep playback user-initiated. LinkedIn leads the hero links, prose is concise, and Jim Fan's original quote is retained. News and author disclosures use native `details`; no client framework is needed.

Use `withBase` from `src/lib/paths.ts` for internal routes and static assets, so the same site works under review subpaths. Canonical links continue to point at production.

Do not commit `node_modules/`, `dist/`, `.astro/`, credentials, or private source records. Review bundles contain only the built, inspected static site.
