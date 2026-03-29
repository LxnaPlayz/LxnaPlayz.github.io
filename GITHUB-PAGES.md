# GitHub Pages - Deprecated Redirect Setup

Dieses Projekt ist als **deprecated redirect site** konfiguriert.

## Ziel

Alle Besucher sollen zur neuen Website weitergeleitet werden:

- https://lxnaplayz.site

## Live-Verhalten

- `index.html` zeigt einen kurzen Hinweis an.
- Die Seite leitet automatisch auf `https://lxnaplayz.site` weiter.
- Ein manueller Link bleibt als Fallback sichtbar.

## Deployment

```bash
git add .
git commit -m "chore: keep deprecated redirect site up to date"
git push origin main
```

## Hinweis zu Domain/CNAME

Wenn alte Domain-Links weiterhin auf dieses Repository zeigen sollen, muss die entsprechende Domain in `CNAME` eingetragen bleiben.
