# 🎨 Lyna Playz - Social Links Hub

Eine professionelle und moderne Website für Lyna's Social Media Links mit Portfolio-Showcase.

## ✨ Features

- **Responsives Design** - Optimiert für alle Bildschirmgrößen (Desktop, Tablet, Mobile)
- **Professionelle Farbgebung** - Modernes Purple/Teal Farbschema mit Gradienten
- **Glatte Animationen** - Fade-in, Hover-Effekte und floating Animationen
- **Social Media Integration** - Direktlinks zu TikTok, Instagram, Twitch, Linktree
- **Bild-Galerie** - YouTube und Instagram Inhalte Showcase
- **Moderne Schatten & Effekte** - Backdrop Blur, Box Shadows für Tiefenwirkung

## 📁 Projektstruktur

```
LxnaPlayz.github.io/
├── index.html                  # Hauptseite
├── impressum.html              # Impressum/Legal
├── CNAME                       # GitHub Pages Domain
├── .gitignore                  # Git Ignore Datei
├── README.md                   # Diese Datei
└── res/
    ├── fonts/
    │   └── FE-FONT.TTF
    ├── js/
    │   └── main.js            # JavaScript (optimiert & dokumentiert)
    ├── styles/
    │   ├── style.scss         # Source SCSS (für lokale Entwicklung)
    │   ├── style.css          # Kompilierte CSS (wird gehostet)
    │   └── style.css.map      # CSS Source Map
    └── img/
        ├── willkommen-text.png
        ├── zycan-logo-tran.png
        ├── YouTube.png
        ├── Insta.png
        └── [weitere Bilder]
```

## 🚀 Deployment auf GitHub Pages

### Automatisches Deployment
Die Website wird automatisch deployed wenn Änderungen auf `main` gepusht werden!

```bash
# Änderungen vornehmen
git add .
git commit -m "Update: [Beschreibung der Änderungen]"
git push origin main
```

Die Website ist dann unter deiner Domain abrufbar (siehe CNAME).

### Manuelles Update
Falls du nur kleine CSS/HTML/JS Änderungen machst:

```bash
git add index.html res/styles/style.css res/js/main.js
git commit -m "Fix: [Beschreibung]"
git push origin main
```

## 📝 Lokale Entwicklung & Änderungen

### Nur HTML/JavaScript ändern
1. Editiere `index.html` oder `res/js/main.js`
2. Teste lokal im Browser
3. Pushe zu GitHub

### CSS/Design ändern

Falls du nur kleine CSS-Änderungen machst:
1. Editiere direkt `res/styles/style.css`
2. Pushe zu GitHub

Falls du komplexere SCSS-Änderungen machst (lokal):
1. Editiere `res/styles/style.scss`
2. Kompiliere lokal: `sass res/styles/style.scss res/styles/style.css`
3. Commit & Push

## 🎨 Styling Guide

### Farben (in style.css)
```css
Primary:       #8b3fb6        /* Main purple */
Dark:          #6a2d8a        /* Dark purple */
Light:         #a850c7        /* Light purple */
Accent:        #28756d        /* Teal accent */
Text:          #f5f5f5        /* Main text */
Text Muted:    #b0b0b0        /* Secondary text */
Background:    Gradient       /* 1a0d2e → 3d1f5c */
```

### Schatten
```css
Light:   0 4px 15px rgba(0,0,0,0.1)
Medium:  0 8px 25px rgba(0,0,0,0.15)
Heavy:   0 12px 40px rgba(0,0,0,0.25)
```

## 🔧 Nutzung & Wartung

### CSS Änderungen
1. Editiere die `res/styles/style.css` Datei direkt
2. Speichern und testen
3. Pushe zu GitHub → Website wird automatisch aktualisiert

### Neue Social Media Links hinzufügen

In `index.html` neue Container zu `div.other` hinzufügen:

```html
<div class="other-container">
    <div class="icon-container">
        <button onclick="openSocialLink('https://link-to-platform.com')" title="Follow on Platform">
            <i class="fab fa-[platform-name]"></i>
        </button>
    </div>
    <div class="details-container">
        <h1>Platform Name</h1>
        <p>Beschreibung der Platform...</p>
    </div>
</div>
```

### Bilder austauschen

1. Neue Bilder in `res/img/` ablegen
2. In `index.html` die `src` Attribute aktualisieren
3. Pushe zu GitHub

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 📊 Browser Support

- Chrome/Edge: ✅ Vollständig
- Firefox: ✅ Vollständig
- Safari: ✅ Vollständig (14+)
- Mobile Safari: ✅ Vollständig (12+)

## 🔒 Sicherheit

- Links öffnen sich in neuen Tabs mit `noopener,noreferrer`
- Keine externen Dependencies außer Google Fonts & Font Awesome
- Clean & validiertes HTML5

## 📄 Lizenz

Alle Rechte vorbehalten © 2025 Zycan

## 📞 Kontakt

- TikTok: [@theLxna_playz](https://tiktok.com/theLxna_playz)
- Instagram: [@theLxna_playz](https://www.instagram.com/theLxna_playz)
- Twitch: [@theLxna_playz](https://www.twitch.tv/theLxna_playz)
- Linktree: [linktr.ee/theLxna_playz](https://linktr.ee/theLxna_playz)

---

**Zuletzt aktualisiert**: 5. März 2026



