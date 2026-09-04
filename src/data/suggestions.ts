import type { Lang } from '../i18n/languages';

export interface Suggestion {
  icon: string;
  text: string;
}

export const suggestions: Record<Lang, Suggestion[]> = {
  sv: [
    { icon: '📞', text: 'Ring en vän, familjemedlem eller din sponsor och berätta hur du känner.' },
    { icon: '🚶', text: 'Ta en promenad ute i minst tio minuter, gärna i ett snabbt tempo.' },
    { icon: '🍲', text: 'Laga eller värm något du tycker om att äta.' },
    { icon: '🎬', text: 'Gå på bio eller sätt på en film du sett fram emot.' },
    { icon: '🚿', text: 'Ta en dusch eller ett bad – låt vattnet bryta tankarna.' },
    { icon: '📝', text: 'Skriv ner exakt vad du känner just nu, utan att bedöma det.' },
    { icon: '🧘', text: 'Sitt still och andas långsamt i två minuter. In på fyra, ut på sex.' },
    { icon: '🏃', text: 'Gör något fysiskt – jogga, träna eller dansa till musik du gillar.' },
    { icon: '👥', text: 'Gå till ett möte, fysiskt eller digitalt, om du har ett tillgängligt.' },
    { icon: '🎮', text: 'Gör något som kräver din fulla uppmärksamhet, som ett spel eller pussel.' },
    { icon: '🛏️', text: 'Om du är trött – lägg dig och vila. Suget är ofta svagare efter sömn.' },
    { icon: '🌳', text: 'Gå ut i naturen eller sätt dig någonstans med utsikt en stund.' },
    { icon: '☕', text: 'Gör dig en kopp te eller kaffe och sätt dig ner med den, i lugn och ro.' },
    { icon: '📖', text: 'Läs något du tycker om, eller lyssna på en podd eller bok.' },
  ],
  en: [
    { icon: '📞', text: 'Call a friend, family member, or your sponsor and tell them how you feel.' },
    { icon: '🚶', text: 'Take a walk outside for at least ten minutes, at a brisk pace.' },
    { icon: '🍲', text: 'Cook or warm up something you enjoy eating.' },
    { icon: '🎬', text: 'Go to the movies or put on a film you have been looking forward to.' },
    { icon: '🚿', text: 'Take a shower or a bath – let the water break up the thoughts.' },
    { icon: '📝', text: 'Write down exactly what you feel right now, without judging it.' },
    { icon: '🧘', text: 'Sit still and breathe slowly for two minutes. In for four, out for six.' },
    { icon: '🏃', text: 'Do something physical – jog, work out, or dance to music you like.' },
    { icon: '👥', text: 'Go to a meeting, in person or online, if you have one available.' },
    { icon: '🎮', text: 'Do something that needs your full focus, like a game or a puzzle.' },
    { icon: '🛏️', text: "If you're tired – lie down and rest. Cravings are often weaker after sleep." },
    { icon: '🌳', text: 'Go out into nature or sit somewhere with a view for a while.' },
    { icon: '☕', text: 'Make yourself a cup of tea or coffee and sit down with it, calmly.' },
    { icon: '📖', text: 'Read something you enjoy, or listen to a podcast or audiobook.' },
  ],
};
