# True World Library — website

A small, static site (plain HTML/CSS/JS, no build step) for True World Library
in Kumher, Rajasthan. Deploys straight to GitHub Pages.

## What's in here

- `index.html` — all page content
- `styles.css` — all styling
- `script.js` — one small load animation, nothing else

## Before you deploy — check these

Some details are placeholders I wrote based on the little the page shares
(hours, phone, address, "air conditioned reading room"). Please review and
edit before publishing:

- **Facilities list** (`#facilities` in `index.html`) — I described plausible
  facilities (individual desks, exam-prep shelf, water/washrooms, quiet
  policy). Confirm these are accurate, or replace them with what's actually
  there.
- **Map embed** (`#visit`) — currently a generic Google Maps search for
  "Sonkh-Kumher Road, Kumher, Rajasthan." Replace the `src` in the `iframe`
  with your exact pinned location for accuracy.
- **Phone link** — set to `+91 8690556169`. Double-check the country code
  and number.

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `true-world-library`).
2. Push these three files (plus this README) to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to "Deploy from a branch,"
   branch `main`, folder `/ (root)`.
5. Save. Your site will publish at:
   `https://<your-username>.github.io/<your-repo>/`

No build tools, frameworks, or `npm install` needed — it's ready to serve as-is.
