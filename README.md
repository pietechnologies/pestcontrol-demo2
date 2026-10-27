# First Choice Pest Control — Website Audit + Sample Rebuild

Two things in one small React + Vite + Tailwind app:

1. **📋 Audit & Competitor Gaps** — what `firstchoicepestcontrolllc.com` is missing today, how it
   compares feature-by-feature to BREDA, Arrow, Terminix, Massey and Northwest Exterminating, 12 new
   ideas, and a 90-day action plan.
2. **🖥️ Sample Rebuilt Website** — a working demo of what the site *should* look like: instant price
   estimator, ZIP coverage checker, transparent plan pricing, written guarantee block, reviews,
   pest library, Georgia pest season calendar, FAQ, 4-step online booking and a mobile
   call/text/book bar.

Use the switcher at the very top of the page to move between them.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs a single self-contained dist/index.html
```

The build inlines all CSS and JS into one `index.html`, so there is **no base-path problem** on
GitHub Pages.

## Deploy to GitHub Pages

Deployment is automated by `.github/workflows/deploy.yml`. On every push to `main` it runs
`npm ci && npm run build` and publishes `dist/` with `actions/deploy-pages`.

One-time setup (already done for this repo):

1. Repo → **Settings → Pages → Source: GitHub Actions** (not "Deploy from a branch").
2. Push to `main` — the workflow builds and publishes automatically.
3. Live at `https://<user>.github.io/<repo>/`.

> ⚠️ Do **not** point Pages at `main` / `(root)`. The root `index.html` is the Vite *dev* entry
> (`<script src="/src/main.tsx">`). Browsers cannot execute `.tsx` files, so Pages serves a blank
> page. Pages must publish the **built `dist/` output only**, never the source tree.

> The single-file plugin inlines all CSS, JS and the logo into one `dist/index.html`, and
> `base: "./"` is set in `vite.config.ts`, so the build also works from a repo sub-path.

### Manual build for a one-off upload

```bash
npm run build        # -> dist/index.html (self-contained)
```

Upload the **contents of `dist/`** (the built `index.html`, not the source one) plus an empty
`.nojekyll` file.

## Notes

All phone numbers, prices, licence numbers and reviews in the demo site are placeholders for
illustration. Swap in the real business data (and wire the booking form to Jobber / Housecall Pro /
FieldRoutes) before going live.
