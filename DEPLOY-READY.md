# Deploy Ready - Deprecated Redirect Site

## Status

Die Seite ist als **deprecated** markiert und auf Weiterleitung eingerichtet.

## Ziel-URL

- https://lxnaplayz.site

## Was aktuell deployed wird

- `index.html` mit Hinweistext und Redirect-Logik
- Doku-Dateien mit Deprecated-Status

## Schnell deployen

```bash
git add .
git commit -m "chore: deploy deprecated redirect site"
git push origin main
```

## Erwartetes Verhalten

- Aufruf der alten Seite -> automatische Weiterleitung zu `https://lxnaplayz.site`
- Falls Weiterleitung blockiert ist -> manueller Link ist sichtbar
