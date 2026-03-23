# GitHub Pages Deployment Guide

This project is a static website. No build step is required for deployment.

## 1) One-time GitHub Pages setup

1. Open repository `Settings` -> `Pages`.
2. Set `Source` to `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Save.

If you use a custom domain, keep `CNAME` in the repository root.

## 2) Deploy updates

```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Pages usually publishes in about 1-2 minutes.

## 3) What to edit

- `index.html`: layout, gallery items, social cards
- `res/styles/style.css`: production styling
- `res/js/main.js`: interactions (scrolling, social links, lightbox)
- `res/pictures/`: image assets used by the gallery and branding

## Optional SCSS workflow (local only)

If you prefer SCSS locally, compile to CSS before pushing.

```bash
sass res/styles/style.scss res/styles/style.css
```

Deployment still serves `res/styles/style.css`.

## Publish checklist

- [ ] `index.html` references `res/styles/style.css`
- [ ] New images are committed under `res/pictures/`
- [ ] Latest `res/js/main.js` is committed
- [ ] `CNAME` is correct (if using custom domain)
- [ ] Changes are pushed to `main`

## Troubleshooting

- If updates do not appear, hard refresh the browser (`Cmd+Shift+R`).
- Verify the latest commit exists on GitHub.
- Check `Settings` -> `Pages` for deployment status/errors.

