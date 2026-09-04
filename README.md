# Nykter – dag för dag

En enkel, tydlig app som stöttar nykterhet med utgångspunkt i tolvstegsprogrammet.

## Funktioner

- **Nykterhetsräknare** – visar hur länge du varit nykter i dagar, timmar och minuter.
- **Morgon- och kvällsmeddelanden** – ett motiverande meddelande varje morgon och kväll som uppmärksammar din nykterhet.
- **"Jag vill dricka"-knappen** – en stor, central knapp som vid tryck visar en anledning att avstå och ett konkret förslag på vad du kan göra istället (ring en vän, ta en promenad, laga mat, gå på bio med mera).
- **Tolvstegsprogrammet** – alla 12 steg med beskrivning, en fråga att reflektera kring, och möjlighet att markera "pågår"/"genomfört" samt skriva egna anteckningar per steg.
- All data sparas lokalt i webbläsaren (`localStorage`) – inget konto, ingen server.

## Utveckling

```bash
npm install
npm run dev      # starta utvecklingsserver
npm run build    # bygg för produktion
```

Byggd med React, TypeScript, Vite och Tailwind CSS.
