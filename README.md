# Sober – day by day

En enkel, tydlig app som stöttar nykterhet med utgångspunkt i tolvstegsprogrammet.

## Funktioner

- **Nykterhetsräknare** – visar hur länge du varit nykter i dagar, timmar och minuter.
- **Morgon- och kvällsmeddelanden** – ett motiverande meddelande varje morgon och kväll som uppmärksammar din nykterhet.
- **"Jag vill dricka"-knappen** – en stor, central knapp som vid tryck visar en anledning att avstå och ett konkret förslag på vad du kan göra istället (ring en vän, ta en promenad, laga mat, gå på bio med mera).
- **Tolvstegsprogrammet** – alla 12 steg med beskrivning, en fråga att reflektera kring, och möjlighet att markera "pågår"/"genomfört" samt skriva egna anteckningar per steg.
- **Notiser** – aktivera webbläsarnotiser och ställ in valfri tid för morgon- och kvällspåminnelse, plus en testnotis-knapp. Detta är lokala, klientdrivna notiser (ingen server) och kräver att appen/fliken är öppen, i förgrunden eller bakgrunden, när tiden slår in – det finns ingen bakomliggande push-tjänst som kan väcka en helt stängd flik.
- **Sex språk** – engelska, svenska, tyska, franska, spanska och italienska. Appen startar på engelska; språket byts i inställningarna och sparas till nästa gång.
- **Modern, avskalad design** – monokrom palett med en enda mättad accentfärg, reserverad för sugknappen. Serif i rubriker, gott om luft, och mörkt läge som följer systemets tema.
- **Röst** – en lugn röst kan läsa upp råden, och du kan prata med appen och få svar. Allt sker i webbläsarens egen talsyntes – ingenting skickas någonstans.
- Installerbar som PWA (lägg till på hemskärmen) tack vare manifest och service worker.
- All data sparas lokalt i webbläsaren (`localStorage`) – inget konto, ingen server.

## Utveckling

```bash
npm install
npm run dev      # starta utvecklingsserver
npm run build    # bygg för produktion
```

Byggd med React, TypeScript, Vite och Tailwind CSS.
