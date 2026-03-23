# Deployment Readiness Status

Current status: ready for static GitHub Pages deployment.

## What is configured

- `index.html` loads `res/styles/style.css` directly.
- Production assets are plain static files (HTML/CSS/JS/images/fonts).
- `CNAME` exists for custom domain usage.
- No mandatory build step is required before deploy.

## Repository paths to use

- Styles: `res/styles/style.css`
- Scripts: `res/js/main.js`
- Images: `res/pictures/`
- Docs: `README.md`, `GITHUB-PAGES.md`, `DEPLOY-READY.md`

## Quick deploy

```bash
cd /Users/simon/WebstormProjects/LxnaPlayz.github.io
git add .
git commit -m "Deploy update"
git push origin main
```

## Readiness checklist

- [x] Static entry file exists: `index.html`
- [x] CSS linked directly from HTML
- [x] JavaScript committed in `res/js/main.js`
- [x] Media files stored in `res/pictures/`
- [x] GitHub Pages domain file present: `CNAME`
- [x] Deployment docs available and updated

## Notes

- `res/styles/style.scss` is optional local source and is ignored by `.gitignore`.
- If you edit SCSS locally, compile to `res/styles/style.css` before pushing.
- The site currently links to `impressum.html`; add that file if required for legal compliance.

## Verification after push

1. Open repository `Settings` -> `Pages` and confirm the latest deployment succeeded.
2. Open your domain and hard refresh the page (`Cmd+Shift+R`).
3. Validate key interactions: gallery lightbox open/close and social link buttons.

