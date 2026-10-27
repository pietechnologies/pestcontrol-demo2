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

### Option A — fastest (drag the single file)

1. `npm run build`
2. Create a repo, copy `dist/index.html` into it (root), and add an empty `.nojekyll` file.
3. Repo → **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. Live at `https://<user>.github.io/<repo>/`.

### Option B — GitHub Actions (auto-deploy on push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Pages
on:
  push: { branches: [main] }
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - run: touch dist/.nojekyll
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

Then set **Settings → Pages → Source: GitHub Actions**.

> If you ever remove the single-file plugin from `vite.config.ts`, add
> `base: "/<repo-name>/"` to the Vite config so asset URLs resolve on Pages.

## Notes

All phone numbers, prices, licence numbers and reviews in the demo site are placeholders for
illustration. Swap in the real business data (and wire the booking form to Jobber / Housecall Pro /
FieldRoutes) before going live.
