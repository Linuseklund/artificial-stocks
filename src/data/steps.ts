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
};
