import type { Lang } from '../i18n/languages';

export interface StepDef {
  number: number;
  title: string;
  description: string;
  reflection: string;
}

export const steps: Record<Lang, StepDef[]> = {
  sv: [
    {
      number: 1,
      title: 'Erkänn att du inte har kontroll',
      description:
        'Inse och acceptera att alkoholen har tagit över och att du inte kan hantera den på egen hand längre. Det är utgångspunkten för all förändring.',
      reflection: 'På vilka sätt har alkoholen gjort ditt liv svårare att hantera?',
    },
    {
      number: 2,
      title: 'Tro på att förändring är möjlig',
      description:
        'Börja tro att det finns hjälp och kraft större än dig själv – i en grupp, i andra människor, i något du väljer att kalla ditt eget – som kan hjälpa dig tillbaka till balans.',
      reflection: 'Vad eller vem ger dig hopp om att du kan förändras?',
    },
    {
      number: 3,
      title: 'Bestäm dig för att lita på processen',
      description:
        'Fatta ett aktivt beslut att överlämna kontrollen och följa en väg mot återhämtning, i stället för att försöka lösa allt själv.',
      reflection: 'Vad hindrar dig från att lita på att processen fungerar?',
    },
    {
      number: 4,
      title: 'Gör en ärlig självrannsakan',
      description:
        'Skriv ner en ärlig och grundlig genomgång av dig själv – styrkor, svagheter, skador du orsakat och skador du burit.',
      reflection: 'Vilka mönster i ditt liv vill du se tydligare?',
    },
    {
      number: 5,
      title: 'Berätta sanningen för någon annan',
      description:
        'Dela din självrannsakan med dig själv, med någon du litar på och med det du tror på. Hemligheter förlorar makt när de sägs högt.',
      reflection: 'Vem känner du dig trygg att öppna dig för?',
    },
    {
      number: 6,
      title: 'Bli redo att förändras på riktigt',
      description:
        'Var villig att låta gå av gamla, destruktiva drag och beteendemönster, även de som känts bekväma eller skyddande.',
      reflection: 'Vilket beteende är du fortfarande inte helt redo att släppa?',
    },
    {
      number: 7,
      title: 'Be om hjälp att förändras',
      description:
        'Be aktivt om hjälp – från andra, från ditt sammanhang, från det du tror på – att bli av med de brister som håller dig kvar i gamla mönster.',
      reflection: 'Vad skulle det innebära för dig att på riktigt släppa taget?',
    },
    {
      number: 8,
      title: 'Lista dem du skadat',
      description:
        'Gör en lista över människor du sårat under din tid med alkohol, och bli villig att gottgöra dem.',
      reflection: 'Vem finns på din lista, och varför är just den relationen viktig att läka?',
    },
    {
      number: 9,
      title: 'Gottgör där du kan',
      description:
        'Ta direkt kontakt och gottgör de du skadat, där det är möjligt – utom när det skulle skada dem eller andra ytterligare.',
      reflection: 'Vilket första steg kan du ta för att gottgöra någon på din lista?',
    },
    {
      number: 10,
      title: 'Fortsätt hålla koll på dig själv',
      description:
        'Gör självrannsakan till en vana. Erkänn misstag snabbt när de händer, istället för att låta dem samlas.',
      reflection: 'Finns det något från idag du behöver erkänna för dig själv?',
    },
    {
      number: 11,
      title: 'Sök inre lugn och riktning',
      description:
        'Arbeta medvetet med reflektion, eftertanke eller bön för att stärka din kontakt med det du tror på, och för att hitta riktning i livet.',
      reflection: 'Vad hjälper dig att hitta lugn och riktning i vardagen?',
    },
    {
      number: 12,
      title: 'För kunskapen vidare',
      description:
        'När förändringen börjar bära frukt – dela det du lärt dig med andra som kämpar, och lev efter dina nya principer i allt du gör.',
      reflection: 'Vem skulle kunna ha nytta av att höra din historia?',
    },
  ],
  en: [
    {
      number: 1,
      title: "Admit you don't have control",
      description:
        "Recognize and accept that alcohol has taken over and that you can no longer manage it on your own. This is the starting point for all change.",
      reflection: 'In what ways has alcohol made your life harder to manage?',
    },
    {
      number: 2,
      title: 'Believe that change is possible',
      description:
        'Begin to believe there is help and a power greater than yourself – in a group, in other people, in something you choose to call your own – that can help restore you to balance.',
      reflection: 'What or who gives you hope that you can change?',
    },
    {
      number: 3,
      title: 'Decide to trust the process',
      description:
        'Make an active decision to hand over control and follow a path toward recovery, instead of trying to solve everything on your own.',
      reflection: "What's stopping you from trusting that the process works?",
    },
    {
      number: 4,
      title: 'Take an honest inventory of yourself',
      description:
        'Write down an honest and thorough review of yourself – strengths, weaknesses, harm you have caused, and harm you have carried.',
      reflection: 'Which patterns in your life do you want to see more clearly?',
    },
    {
      number: 5,
      title: 'Tell someone else the truth',
      description:
        'Share your self-examination with yourself, with someone you trust, and with what you believe in. Secrets lose their power when spoken out loud.',
      reflection: 'Who do you feel safe opening up to?',
    },
    {
      number: 6,
      title: 'Become ready to really change',
      description:
        'Be willing to let go of old, destructive traits and behavior patterns, even the ones that have felt comfortable or protective.',
      reflection: "Which behavior are you still not fully ready to let go of?",
    },
    {
      number: 7,
      title: 'Ask for help to change',
      description:
        'Actively ask for help – from others, from your community, from what you believe in – to be rid of the flaws that keep you stuck in old patterns.',
      reflection: 'What would it mean for you to truly let go?',
    },
    {
      number: 8,
      title: 'List those you have harmed',
      description:
        'Make a list of people you have hurt during your time with alcohol, and become willing to make amends to them.',
      reflection: 'Who is on your list, and why is that relationship important to heal?',
    },
    {
      number: 9,
      title: 'Make amends where you can',
      description:
        'Reach out directly and make amends to those you have harmed, wherever possible – except when doing so would harm them or others further.',
      reflection: 'What first step can you take to make amends with someone on your list?',
    },
    {
      number: 10,
      title: 'Keep checking in with yourself',
      description:
        'Make self-examination a habit. Admit mistakes quickly when they happen, instead of letting them pile up.',
      reflection: 'Is there anything from today you need to admit to yourself?',
    },
    {
      number: 11,
      title: 'Seek inner calm and direction',
      description:
        'Work deliberately with reflection, contemplation, or prayer to strengthen your connection with what you believe in, and to find direction in life.',
      reflection: 'What helps you find calm and direction in everyday life?',
    },
    {
      number: 12,
      title: 'Carry the message forward',
      description:
        'As the change starts to bear fruit – share what you have learned with others who are struggling, and live by your new principles in everything you do.',
      reflection: 'Who might benefit from hearing your story?',
    },
  ],
  de: [
    {
      number: 1,
      title: 'Erkenne an, dass du keine Kontrolle hast',
      description:
        'Erkenne und akzeptiere, dass der Alkohol die Oberhand gewonnen hat und du ihn allein nicht mehr im Griff hast. Das ist der Ausgangspunkt jeder Veränderung.',
      reflection: 'Auf welche Weise hat der Alkohol dein Leben schwerer zu bewältigen gemacht?',
    },
    {
      number: 2,
      title: 'Glaube daran, dass Veränderung möglich ist',
      description:
        'Fang an zu glauben, dass es Hilfe und eine Kraft gibt, die größer ist als du – in einer Gruppe, in anderen Menschen, in etwas, das du selbst so nennen möchtest – und die dich zurück ins Gleichgewicht bringen kann.',
      reflection: 'Was oder wer gibt dir Hoffnung, dass du dich verändern kannst?',
    },
    {
      number: 3,
      title: 'Entscheide dich, dem Weg zu vertrauen',
      description:
        'Triff die aktive Entscheidung, die Kontrolle abzugeben und einem Weg der Genesung zu folgen, statt alles allein lösen zu wollen.',
      reflection: 'Was hindert dich daran, darauf zu vertrauen, dass dieser Weg funktioniert?',
    },
    {
      number: 4,
      title: 'Mach eine ehrliche Selbstprüfung',
      description:
        'Schreib eine ehrliche und gründliche Bestandsaufnahme über dich auf – Stärken, Schwächen, Schaden, den du angerichtet hast, und Schaden, den du getragen hast.',
      reflection: 'Welche Muster in deinem Leben möchtest du klarer sehen?',
    },
    {
      number: 5,
      title: 'Sag jemand anderem die Wahrheit',
      description:
        'Teile deine Selbstprüfung mit dir selbst, mit einem Menschen, dem du vertraust, und mit dem, woran du glaubst. Geheimnisse verlieren ihre Macht, wenn sie ausgesprochen werden.',
      reflection: 'Wem gegenüber fühlst du dich sicher genug, dich zu öffnen?',
    },
    {
      number: 6,
      title: 'Werde bereit, dich wirklich zu verändern',
      description:
        'Sei bereit, alte, zerstörerische Züge und Verhaltensmuster loszulassen, auch die, die sich bequem oder schützend angefühlt haben.',
      reflection: 'Welches Verhalten bist du noch nicht ganz bereit loszulassen?',
    },
    {
      number: 7,
      title: 'Bitte um Hilfe bei der Veränderung',
      description:
        'Bitte aktiv um Hilfe – bei anderen, in deinem Umfeld, bei dem, woran du glaubst – um die Schwächen loszuwerden, die dich in alten Mustern festhalten.',
      reflection: 'Was würde es für dich bedeuten, wirklich loszulassen?',
    },
    {
      number: 8,
      title: 'Schreib auf, wem du geschadet hast',
      description:
        'Mach eine Liste der Menschen, die du in deiner Zeit mit dem Alkohol verletzt hast, und werde bereit, es bei ihnen wiedergutzumachen.',
      reflection: 'Wer steht auf deiner Liste, und warum ist gerade diese Beziehung wichtig zu heilen?',
    },
    {
      number: 9,
      title: 'Mach wieder gut, wo du kannst',
      description:
        'Nimm direkt Kontakt auf und mach bei denen wieder gut, denen du geschadet hast, wo immer es möglich ist – außer wenn es ihnen oder anderen weiteren Schaden zufügen würde.',
      reflection: 'Welchen ersten Schritt kannst du gehen, um es bei jemandem auf deiner Liste wiedergutzumachen?',
    },
    {
      number: 10,
      title: 'Behalte dich weiterhin im Blick',
      description:
        'Mach die Selbstprüfung zur Gewohnheit. Gib Fehler schnell zu, wenn sie passieren, statt sie sich ansammeln zu lassen.',
      reflection: 'Gibt es etwas vom heutigen Tag, das du dir selbst eingestehen musst?',
    },
    {
      number: 11,
      title: 'Such innere Ruhe und Richtung',
      description:
        'Arbeite bewusst mit Reflexion, Besinnung oder Gebet, um deine Verbindung zu dem zu stärken, woran du glaubst, und um Richtung im Leben zu finden.',
      reflection: 'Was hilft dir, im Alltag Ruhe und Richtung zu finden?',
    },
    {
      number: 12,
      title: 'Gib das Gelernte weiter',
      description:
        'Wenn die Veränderung Früchte trägt – teile, was du gelernt hast, mit anderen, die kämpfen, und lebe nach deinen neuen Grundsätzen in allem, was du tust.',
      reflection: 'Wem könnte es helfen, deine Geschichte zu hören?',
    },
  ],
  fr: [
    {
      number: 1,
      title: "Admets que tu n'as pas le contrôle",
      description:
        "Reconnais et accepte que l'alcool a pris le dessus et que tu ne peux plus le gérer seul. C'est le point de départ de tout changement.",
      reflection: "De quelles manières l'alcool a-t-il rendu ta vie plus difficile à gérer ?",
    },
    {
      number: 2,
      title: 'Crois que le changement est possible',
      description:
        "Commence à croire qu'il existe de l'aide et une force plus grande que toi – dans un groupe, chez d'autres personnes, dans ce que tu choisis d'appeler ainsi – capable de te ramener à l'équilibre.",
      reflection: "Qu'est-ce qui, ou qui, te donne l'espoir de pouvoir changer ?",
    },
    {
      number: 3,
      title: 'Décide de faire confiance au chemin',
      description:
        "Prends la décision active de lâcher le contrôle et de suivre un chemin vers le rétablissement, plutôt que de vouloir tout résoudre seul.",
      reflection: "Qu'est-ce qui t'empêche de croire que ce chemin fonctionne ?",
    },
    {
      number: 4,
      title: 'Fais un inventaire honnête de toi-même',
      description:
        "Écris un bilan honnête et approfondi de toi-même – tes forces, tes faiblesses, le mal que tu as causé et celui que tu as porté.",
      reflection: 'Quels schémas dans ta vie voudrais-tu voir plus clairement ?',
    },
    {
      number: 5,
      title: "Dis la vérité à quelqu'un d'autre",
      description:
        "Partage ton inventaire avec toi-même, avec une personne de confiance et avec ce en quoi tu crois. Les secrets perdent leur pouvoir quand ils sont dits à voix haute.",
      reflection: "Auprès de qui te sens-tu en sécurité pour t'ouvrir ?",
    },
    {
      number: 6,
      title: 'Deviens prêt à changer vraiment',
      description:
        "Sois prêt à laisser partir les anciens traits et comportements destructeurs, même ceux qui te semblaient confortables ou protecteurs.",
      reflection: "Quel comportement n'es-tu pas encore tout à fait prêt à lâcher ?",
    },
    {
      number: 7,
      title: "Demande de l'aide pour changer",
      description:
        "Demande activement de l'aide – aux autres, à ton entourage, à ce en quoi tu crois – pour te libérer des défauts qui te maintiennent dans tes anciens schémas.",
      reflection: 'Que signifierait pour toi de lâcher prise pour de bon ?',
    },
    {
      number: 8,
      title: 'Fais la liste de ceux à qui tu as fait du mal',
      description:
        "Dresse la liste des personnes que tu as blessées pendant ta période avec l'alcool, et deviens prêt à réparer.",
      reflection: 'Qui figure sur ta liste, et pourquoi cette relation-là compte-t-elle particulièrement ?',
    },
    {
      number: 9,
      title: 'Répare là où tu le peux',
      description:
        "Prends contact directement et répare auprès de ceux à qui tu as fait du mal, chaque fois que c'est possible – sauf si cela leur nuirait davantage, à eux ou à d'autres.",
      reflection: 'Quel premier pas peux-tu faire pour réparer avec quelqu\'un de ta liste ?',
    },
    {
      number: 10,
      title: 'Continue de faire le point sur toi',
      description:
        "Fais de l'examen de toi-même une habitude. Reconnais vite tes erreurs quand elles arrivent, au lieu de les laisser s'accumuler.",
      reflection: "Y a-t-il quelque chose d'aujourd'hui que tu dois t'avouer à toi-même ?",
    },
    {
      number: 11,
      title: 'Cherche le calme intérieur et une direction',
      description:
        "Travaille consciemment avec la réflexion, la méditation ou la prière pour renforcer ton lien avec ce en quoi tu crois, et pour trouver une direction dans ta vie.",
      reflection: "Qu'est-ce qui t'aide à trouver du calme et une direction au quotidien ?",
    },
    {
      number: 12,
      title: 'Transmets ce que tu as appris',
      description:
        "Quand le changement commence à porter ses fruits – partage ce que tu as appris avec d'autres qui luttent, et vis selon tes nouveaux principes dans tout ce que tu fais.",
      reflection: 'À qui ton histoire pourrait-elle être utile ?',
    },
  ],
  es: [
    {
      number: 1,
      title: 'Admite que no tienes el control',
      description:
        'Reconoce y acepta que el alcohol ha tomado el mando y que ya no puedes manejarlo solo. Ese es el punto de partida de todo cambio.',
      reflection: '¿De qué maneras ha hecho el alcohol que tu vida sea más difícil de manejar?',
    },
    {
      number: 2,
      title: 'Cree que el cambio es posible',
      description:
        'Empieza a creer que existe ayuda y una fuerza mayor que tú – en un grupo, en otras personas, en aquello que elijas llamar así – capaz de devolverte el equilibrio.',
      reflection: '¿Qué o quién te da esperanza de que puedes cambiar?',
    },
    {
      number: 3,
      title: 'Decide confiar en el proceso',
      description:
        'Toma la decisión activa de soltar el control y seguir un camino hacia la recuperación, en lugar de intentar resolverlo todo solo.',
      reflection: '¿Qué te impide confiar en que este proceso funciona?',
    },
    {
      number: 4,
      title: 'Haz un inventario honesto de ti mismo',
      description:
        'Escribe un repaso honesto y a fondo sobre ti – tus fortalezas, tus debilidades, el daño que has causado y el que has cargado.',
      reflection: '¿Qué patrones de tu vida quieres ver con más claridad?',
    },
    {
      number: 5,
      title: 'Dile la verdad a otra persona',
      description:
        'Comparte tu inventario contigo mismo, con alguien en quien confíes y con aquello en lo que crees. Los secretos pierden su poder cuando se dicen en voz alta.',
      reflection: '¿Con quién te sientes seguro para abrirte?',
    },
    {
      number: 6,
      title: 'Prepárate para cambiar de verdad',
      description:
        'Está dispuesto a soltar los rasgos y patrones destructivos antiguos, incluso los que te resultaban cómodos o protectores.',
      reflection: '¿Qué comportamiento aún no estás del todo listo para soltar?',
    },
    {
      number: 7,
      title: 'Pide ayuda para cambiar',
      description:
        'Pide ayuda activamente – a otras personas, a tu entorno, a aquello en lo que crees – para librarte de los defectos que te mantienen en los viejos patrones.',
      reflection: '¿Qué significaría para ti soltar de verdad?',
    },
    {
      number: 8,
      title: 'Haz una lista de a quién has dañado',
      description:
        'Haz una lista de las personas a las que heriste durante tu tiempo con el alcohol, y prepárate para reparar el daño.',
      reflection: '¿Quién está en tu lista, y por qué es importante sanar esa relación en concreto?',
    },
    {
      number: 9,
      title: 'Repara donde puedas',
      description:
        'Ponte en contacto directo y repara el daño con quienes lo sufrieron, siempre que sea posible – salvo cuando hacerlo les perjudicara más a ellos o a otros.',
      reflection: '¿Qué primer paso puedes dar para reparar con alguien de tu lista?',
    },
    {
      number: 10,
      title: 'Sigue revisándote a ti mismo',
      description:
        'Haz del examen personal un hábito. Admite los errores rápido cuando ocurran, en vez de dejar que se acumulen.',
      reflection: '¿Hay algo de hoy que necesitas admitir ante ti mismo?',
    },
    {
      number: 11,
      title: 'Busca calma y dirección interior',
      description:
        'Trabaja de forma consciente con la reflexión, la meditación o la oración para fortalecer tu conexión con aquello en lo que crees, y para encontrar dirección en la vida.',
      reflection: '¿Qué te ayuda a encontrar calma y dirección en el día a día?',
    },
    {
      number: 12,
      title: 'Transmite lo aprendido',
      description:
        'Cuando el cambio empiece a dar frutos – comparte lo que has aprendido con otros que están luchando, y vive según tus nuevos principios en todo lo que hagas.',
      reflection: '¿A quién le podría servir escuchar tu historia?',
    },
  ],
  it: [
    {
      number: 1,
      title: 'Ammetti di non avere il controllo',
      description:
        "Riconosci e accetta che l'alcol ha preso il sopravvento e che da solo non riesci più a gestirlo. È il punto di partenza di ogni cambiamento.",
      reflection: "In che modi l'alcol ha reso la tua vita più difficile da gestire?",
    },
    {
      number: 2,
      title: 'Credi che il cambiamento sia possibile',
      description:
        "Inizia a credere che esistano un aiuto e una forza più grandi di te – in un gruppo, in altre persone, in ciò che scegli di chiamare così – capaci di riportarti in equilibrio.",
      reflection: 'Cosa o chi ti dà speranza di poter cambiare?',
    },
    {
      number: 3,
      title: 'Decidi di fidarti del percorso',
      description:
        'Prendi la decisione attiva di lasciare il controllo e seguire una strada verso la guarigione, invece di provare a risolvere tutto da solo.',
      reflection: 'Cosa ti impedisce di fidarti che questo percorso funzioni?',
    },
    {
      number: 4,
      title: 'Fai un esame onesto di te stesso',
      description:
        'Scrivi un bilancio onesto e approfondito su di te – i tuoi punti di forza, le debolezze, il male che hai fatto e quello che hai portato.',
      reflection: 'Quali schemi della tua vita vuoi vedere più chiaramente?',
    },
    {
      number: 5,
      title: 'Di la verità a qualcun altro',
      description:
        'Condividi il tuo esame con te stesso, con una persona di cui ti fidi e con ciò in cui credi. I segreti perdono potere quando vengono detti ad alta voce.',
      reflection: 'Con chi ti senti al sicuro nell\'aprirti?',
    },
    {
      number: 6,
      title: 'Renditi pronto a cambiare davvero',
      description:
        'Sii disposto a lasciar andare i vecchi tratti e comportamenti distruttivi, anche quelli che ti sembravano comodi o protettivi.',
      reflection: 'Quale comportamento non sei ancora del tutto pronto a lasciare?',
    },
    {
      number: 7,
      title: 'Chiedi aiuto per cambiare',
      description:
        'Chiedi aiuto attivamente – agli altri, al tuo ambiente, a ciò in cui credi – per liberarti dei difetti che ti tengono nei vecchi schemi.',
      reflection: 'Cosa significherebbe per te lasciare andare davvero?',
    },
    {
      number: 8,
      title: 'Elenca le persone a cui hai fatto del male',
      description:
        "Fai una lista delle persone che hai ferito nel tuo periodo con l'alcol, e renditi disponibile a rimediare.",
      reflection: 'Chi c\'è nella tua lista, e perché proprio quella relazione è importante da sanare?',
    },
    {
      number: 9,
      title: 'Rimedia dove puoi',
      description:
        'Contatta direttamente e rimedia con chi hai ferito, ovunque sia possibile – tranne quando farlo danneggerebbe ulteriormente loro o altri.',
      reflection: 'Qual è il primo passo che puoi fare per rimediare con qualcuno della tua lista?',
    },
    {
      number: 10,
      title: 'Continua a tenerti d\'occhio',
      description:
        'Rendi l\'esame di te stesso un\'abitudine. Ammetti gli errori in fretta quando accadono, invece di lasciarli accumulare.',
      reflection: 'C\'è qualcosa di oggi che devi ammettere a te stesso?',
    },
    {
      number: 11,
      title: 'Cerca calma e direzione interiore',
      description:
        'Lavora consapevolmente con la riflessione, la meditazione o la preghiera per rafforzare il legame con ciò in cui credi, e per trovare una direzione nella vita.',
      reflection: 'Cosa ti aiuta a trovare calma e direzione nella vita di tutti i giorni?',
    },
    {
      number: 12,
      title: 'Trasmetti quello che hai imparato',
      description:
        'Quando il cambiamento inizia a dare frutti – condividi quello che hai imparato con altri che stanno lottando, e vivi secondo i tuoi nuovi principi in tutto quello che fai.',
      reflection: 'A chi potrebbe servire ascoltare la tua storia?',
    },
  ],
};
