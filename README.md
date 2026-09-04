# Nykter – dag för dag

En enkel, tydlig app som stöttar nykterhet med utgångspunkt i tolvstegsprogrammet.

## Funktioner

- **Nykterhetsräknare** – visar hur länge du varit nykter i dagar, timmar och minuter.
- **Morgon- och kvällsmeddelanden** – ett motiverande meddelande varje morgon och kväll som uppmärksammar din nykterhet.
- **"Jag vill dricka"-knappen** – en stor, central knapp som vid tryck visar en anledning att avstå och ett konkret förslag på vad du kan göra istället (ring en vän, ta en promenad, laga mat, gå på bio med mera).
- **Tolvstegsprogrammet** – alla 12 steg med beskrivning, en fråga att reflektera kring, och möjlighet att markera "pågår"/"genomfört" samt skriva egna anteckningar per steg.
- **Notiser** – aktivera webbläsarnotiser och ställ in valfri tid för morgon- och kvällspåminnelse, plus en testnotis-knapp. Detta är lokala, klientdrivna notiser (ingen server) och kräver att appen/fliken är öppen, i förgrunden eller bakgrunden, när tiden slår in – det finns ingen bakomliggande push-tjänst som kan väcka en helt stängd flik.
- **Flerspråkig** – svenska och engelska, med automatisk språkdetektering vid första besöket och en språkväljare i inställningarna.
- **Modern, avskalad design** – neutral färgpalett med en grön accent, gott om luft, och stöd för mörkt läge som följer systemets tema automatiskt.
- Installningsbar som PWA (lägg till på hemskärmen) tack vare manifest och service worker.
- All data sparas lokalt i webbläsaren (`localStorage`) – inget konto, ingen server.

## Utveckling

```bash
npm install
npm run dev      # starta utvecklingsserver
npm run build    # bygg för produktion
```

Byggd med React, TypeScript, Vite och Tailwind CSS.
