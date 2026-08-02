# Time Ledger

Attendance & payroll tracker for small teams — punch in/out, late & overtime
calculations, and Excel export. Runs entirely in the browser; no backend.

## Structure

```
index.html        the app
about.html         about / feature overview page
css/styles.css      app styles (Tailwind output + base rules)
css/about.css        about page styles
js/app.js             the React app (JSX, compiled in-browser by Babel)
images/favicon.svg      site icon
```

React, ReactDOM, Babel Standalone, and SheetJS (xlsx) are loaded from CDN in
`index.html` — nothing to install or build.

## Publish with GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it
   (`index.html` should sit at the repo root, not inside a subfolder).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   pick the `main` branch and `/ (root)` folder, then **Save**.
4. GitHub gives you a URL a minute or two later, usually
   `https://<your-username>.github.io/<repo-name>/`.

## Run locally

Any static file server works, e.g. from this folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`. Opening `index.html` directly by
double-clicking also works in most browsers.

## Data & backups

All attendance and staff records are stored in this browser's local storage,
under keys prefixed `timeledger:`. Nothing is sent to a server. Use
**Settings → Export Backup** in the app to save a copy, and **Import Backup**
to restore it (or move it to another device/browser).
