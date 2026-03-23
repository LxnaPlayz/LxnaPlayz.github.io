# Lyna Playz - Social Links Hub

Modern single-page website for social links and a 16:9 picture showcase, built for static hosting on GitHub Pages.

## Features

- Responsive layout for desktop, tablet, and mobile
- Gallery section with 16:9 image slots
- Click-to-enlarge image lightbox (overlay click, close button, ESC key)
- Social cards for TikTok, Instagram, Twitch, and Linktree
- Clean purple/teal visual system with gradients and shadows
- No build pipeline required for production deploys

## Project structure

```text
LxnaPlayz.github.io/
|-- index.html
|-- CNAME
|-- README.md
|-- GITHUB-PAGES.md
|-- DEPLOY-READY.md
`-- res/
    |-- fonts/
    |   `-- FE-FONT.TTF
    |-- js/
    |   `-- main.js
    |-- pictures/
    |   |-- LogoText.png
    |   |-- placeholder-16x9.svg
    |   `-- VRC1.png ... VRC6.png
    `-- styles/
        |-- style.css
        `-- style.scss (optional local source)
```

## Local preview

No install is required for quick testing.

```bash
cd /Users/simon/WebstormProjects/LxnaPlayz.github.io
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Editing workflow

### HTML or JavaScript

1. Edit `index.html` or `res/js/main.js`.
2. Refresh local preview.
3. Commit and push.

### CSS (recommended)

1. Edit `res/styles/style.css` directly.
2. Test locally.
3. Commit and push.

### SCSS (optional local workflow)

`style.scss` can be used locally, but deployment uses `style.css`.

```bash
sass res/styles/style.scss res/styles/style.css
```

## GitHub Pages deployment

This repository is deployable as a static site. Push to `main`, then GitHub Pages serves the files.

```bash
git add .
git commit -m "Update site"
git push origin main
```

For full deployment details, see `GITHUB-PAGES.md`.

## Notes

- The site references `impressum.html` in navigation/footer. Add that file if legal page is required.
- External runtime dependencies: Google Fonts, jQuery CDN, Font Awesome kit.

## License

All rights reserved. Copyright (c) 2026 theLxna_playz.



