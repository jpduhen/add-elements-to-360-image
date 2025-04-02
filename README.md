# 360° Foto Overlay Tool

Met deze tool kun je eenvoudig 360-graden foto's bewerken voor trainingsdoeleinden, zoals het toevoegen van rook of vuur, en bekijken in een VR-preview.

## 📁 Bestanden

Deze map bevat:
- `src/VRImageOverlayTool.jsx` — React-component voor bewerking van 360-foto's.
- `public/index.html` — Ingang voor de app.
- `package.json` — Projectinstellingen voor Vite + React.
- `vite.config.js` — Vite configuratie.

## 🚀 Lokaal draaien

1. Installeer Node.js (https://nodejs.org)
2. Open een terminal in de map van het project
3. Installeer afhankelijkheden:

```bash
npm install
```

4. Start de ontwikkelserver:

```bash
npm run dev
```

De app opent op `http://localhost:5173`.

## 🌐 Publiceren op GitHub Pages

1. Maak een nieuwe GitHub repository aan.
2. Upload de volledige inhoud van deze map.
3. Ga naar `Settings > Pages` op GitHub.
4. Kies `Deploy from a branch`, selecteer `main` en de root (`/`) map.
5. Sla op — je app is binnen een minuut online!

Voorbeeld URL:  
`https://<gebruikersnaam>.github.io/<repo-naam>`

## 🛠 Functionaliteit

- Upload een 360° afbeelding in equirectangular formaat.
- Upload PNG-overlay(s) met transparantie (rook, vuur, etc.).
- Klik op de afbeelding om overlay-elementen te plaatsen.
- Bekijk het resultaat als VR-preview (via pannellum.org).
- Download het resultaat als `.png`.

## 👀 Preview modus

De preview toont hoe de afbeelding er in een VR-bril uit komt te zien. Dit is handig voor trainingen of presentaties.

---

© Brandweer Gelderland Midden — Tool voor educatieve doeleinden.
