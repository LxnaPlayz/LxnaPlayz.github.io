# GitHub Pages - Deprecated Redirect Setup

Dieses Projekt wird nur noch als deprecated Redirect-Site betrieben.

## Ziel

- https://lxnaplayz.site

## Verhalten

- Alle vorhandenen HTML-Einstiegsseiten leiten auf `https://lxnaplayz.site` weiter.
- Ein sichtbarer Link bleibt als manueller Fallback auf jeder Seite.

## Deployment

```bash
git add .
git commit -m "chore: keep deprecated redirect site up to date"
git push origin main
```

## Hinweis zu `CNAME`

`CNAME` bleibt auf der alten Domain, wenn diese Domain weiterhin auf dieses Repository zeigen und nur weiterleiten soll.
