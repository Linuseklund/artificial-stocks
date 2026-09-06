import type { Lang } from '../i18n/languages';

/**
 * Spoken content for the voice companion. Written for text-to-speech: short
 * sentences, commas where a calm voice should pause, no abbreviations or
 * symbols that read badly aloud.
 */

export type Intent =
  | 'craving'
  | 'stress'
  | 'lonely'
  | 'sad'
  | 'angry'
  | 'social'
  | 'tired'
  | 'celebrating'
  | 'relapse'
  | 'general';

/** Keywords are matched against the lowercased transcript, longest first. */
export const intentKeywords: Record<Lang, Record<Intent, string[]>> = {
  sv: {
    craving: ['sug', 'sugen', 'vill dricka', 'längtar', 'behöver en öl', 'tänker på sprit', 'vill ha vin', 'törstig efter'],
    stress: ['stressad', 'stress', 'ångest', 'orolig', 'oro', 'panik', 'press', 'nervös', 'jobbigt', 'överväldigad'],
    lonely: ['ensam', 'ensamhet', 'ingen som', 'saknar', 'övergiven', 'isolerad', 'inga vänner'],
    sad: ['ledsen', 'deprimerad', 'nere', 'gråter', 'hopplöst', 'meningslöst', 'tungt', 'orkar ingenting', 'mår dåligt'],
    angry: ['arg', 'förbannad', 'irriterad', 'bråk', 'orättvist', 'skitit sig', 'rasande', 'frustrerad'],
    social: ['fest', 'krog', 'bar', 'middag', 'kalas', 'bjuder', 'after work', 'utekväll', 'alla dricker', 'bröllop'],
    tired: ['trött', 'sömn', 'sover inte', 'utmattad', 'orkar inte', 'sliten', 'somna'],
    celebrating: ['firar', 'fira', 'glad', 'belöning', 'förtjänar', 'skåla', 'framgång'],
    relapse: ['har druckit', 'drack', 'återfall', 'föll', 'misslyckats', 'söp', 'tog ett glas', 'klarade inte'],
    general: [],
  },
  en: {
    craving: ['craving', 'crave', 'want to drink', 'need a drink', 'thinking about booze', 'want a beer', 'want wine', 'urge'],
    stress: ['stressed', 'stress', 'anxiety', 'anxious', 'worried', 'panic', 'pressure', 'nervous', 'overwhelmed'],
    lonely: ['lonely', 'alone', 'no one', 'nobody', 'miss', 'abandoned', 'isolated', 'no friends'],
    sad: ['sad', 'depressed', 'down', 'crying', 'hopeless', 'pointless', 'heavy', 'feel bad', 'miserable'],
    angry: ['angry', 'furious', 'irritated', 'pissed', 'argument', 'unfair', 'rage', 'frustrated'],
    social: ['party', 'bar', 'pub', 'dinner', 'celebration', 'offering', 'after work', 'night out', 'everyone is drinking', 'wedding'],
    tired: ['tired', 'sleep', 'exhausted', 'drained', 'worn out', 'fall asleep', 'no energy'],
    celebrating: ['celebrating', 'celebrate', 'happy', 'reward', 'deserve', 'toast', 'success'],
    relapse: ['i drank', 'relapse', 'slipped', 'failed', 'had a drink', 'fell off', 'broke my streak'],
    general: [],
  },
};

export const voiceReplies: Record<Lang, Record<Intent, string[]>> = {
  sv: {
    craving: [
      'Jag hör dig. Suget är starkt just nu, men det är inte farligt, och det kommer att gå över. Andas lugnt med mig. In genom näsan, och långsamt ut. Suget brukar klinga av inom tjugo minuter, även om det känns oändligt just nu. Du behöver inte göra något åt det, du behöver bara låta det passera.',
      'Det där suget är en gammal vana som knackar på. Du behöver inte öppna. Ställ dig upp, drick ett glas vatten, och gå ut i friska luften i tio minuter. Suget tappar nästan alltid greppet när kroppen får röra på sig.',
      'Du känner ett sug, och samtidigt sitter du här och pratar med mig istället för att dricka. Det är precis det som är styrka. Låt oss ta den här stunden tillsammans, minut för minut.',
    ],
    stress: [
      'Det låter tungt. När kroppen är stressad ropar den efter något som dämpar snabbt, och alkohol lovar just det. Men den lånar bara lugn av morgondagen, och tar ränta. Låt oss sänka pulsen istället. Andas in på fyra, och ut på sex. Gör det med mig några gånger.',
      'Stress gör suget starkare, det är helt normalt. Prova att lägga en hand på bröstet och en på magen, och andas ner i magen. Din kropp behöver få veta att den är trygg just nu.',
      'Du bär mycket just nu. Kom ihåg att du inte måste lösa allt ikväll. Det enda du behöver klara är den här kvällen, nykter. Resten kan vänta till imorgon.',
    ],
    lonely: [
      'Ensamhet är ett av de svåraste sugen att bära. Alkoholen känns som sällskap, men den lämnar dig ännu mer ensam efteråt. Finns det någon du kan ringa just nu? Även ett kort samtal bryter känslan mer än du tror.',
      'Jag är här med dig. Du är inte den enda som sitter med den här känslan ikväll, även om det känns så. Skriv till någon, eller gå till ett möte om du kan. Kontakt är det som verkligen dämpar ensamheten.',
      'Att känna sig ensam är inte samma sak som att vara ensam. Det finns människor som skulle bli glada att höra från dig, även om rösten inuti säger något annat.',
    ],
    sad: [
      'Det gör ont, och du behöver inte förklara bort det. Ledsenhet får finnas. Alkohol skulle bara bedöva den en stund, och sedan göra den tyngre. Var snäll mot dig själv ikväll, precis som du hade varit mot en vän.',
      'Tunga känslor kommer i vågor, och vågor rullar alltid vidare. Du behöver inte känna dig bättre nu. Du behöver bara ta dig igenom kvällen, och det gör du redan.',
      'Jag hör att du mår dåligt. Ta hand om det mest grundläggande först. Ät något, drick vatten, och lägg dig tidigt. Imorgon ser saker nästan alltid annorlunda ut.',
    ],
    angry: [
      'Ilska är energi som vill någonstans. Ge den en annan väg än glaset. Gå en snabb promenad, ta i något tungt, eller skriv ner exakt vad du är arg över, utan filter.',
      'Det låter orättvist, och du har rätt att vara arg. Men att dricka på ilska brukar bara ge fler saker att vara arg över imorgon. Låt ilskan brinna ut först, sedan bestämmer du.',
      'När pulsen är hög fattar vi sämre beslut. Ge dig själv tjugo minuter innan du gör någonting alls. Ilskan sjunker, och du står kvar med ditt val i behåll.',
    ],
    social: [
      'Sociala sammanhang är svåra i början. Ha en plan innan du går. Ta något alkoholfritt i handen direkt, så slipper du frågor. Och bestäm redan nu när du ska åka hem.',
      'Du behöver inte förklara dig för någon. Ett enkelt, nej tack, jag kör ikväll, räcker nästan alltid. Och de som verkligen bryr sig om dig kommer inte att pressa dig.',
      'Det är helt okej att lämna tidigt. Att gå hem nykter är alltid ett bättre kvällsslut än att stanna kvar och ångra sig. Du har inget att bevisa för någon.',
    ],
    tired: [
      'Trötthet gör allt svårare, och den försvagar försvaret mot suget. Alkohol förstör sömnen även om den känns avslappnande. Det bästa du kan göra just nu är att gå och lägga dig.',
      'När du är utmattad är hjärnan sämre på att säga nej. Ta det som ett tecken på att dagen är slut, inte på att du behöver ett glas. Släck ner, och ge kroppen vila istället.',
      'Du har gjort tillräckligt idag. Låt kvällen ta slut här. Suget är nästan alltid svagare efter en natts sömn.',
    ],
    celebrating: [
      'Vad roligt att du har något att fira. Du förtjänar verkligen att belöna dig, men fråga dig vad du egentligen vill ha ut av kvällen. Ett glas skulle sudda ut minnet av just det du firar.',
      'Fira på ett sätt som du minns imorgon. Beställ maten du älskar, köp något du velat ha, eller ring någon och berätta. Glädjen blir din att behålla då.',
      'Framgången är din, alkoholen skulle bara låna den. Fira nykter, så vaknar du imorgon med både minnet och stoltheten kvar.',
    ],
    relapse: [
      'Tack för att du berättar. Ett återfall raderar inte allt du byggt, det är en del av vägen för väldigt många. Var inte hård mot dig själv nu, det gör bara nästa steg tyngre. Drick vatten, ät något, och sov.',
      'Det här betyder inte att du misslyckats. Det betyder att du är människa. Det viktiga är vad du gör härnäst, och att du hör av dig till någon du litar på idag.',
      'Börja om från idag, inte från noll. Allt du lärt dig finns kvar. Om du har en sponsor eller någon i vården, hör av dig till dem nu, du behöver inte bära det här ensam.',
    ],
    general: [
      'Jag är här. Berätta gärna mer om hur du känner dig just nu, så pratar vi oss igenom det tillsammans.',
      'Vad du än känner just nu, så är det okej. Andas lugnt med mig en stund. Du behöver inte fatta några stora beslut ikväll, bara det här enda, att inte dricka just nu.',
      'Du gjorde något bra när du öppnade appen istället för att gå mot flaskan. Stanna kvar en stund. Det brukar räcka längre än man tror.',
    ],
  },
  en: {
    craving: [
      'I hear you. The craving is strong right now, but it is not dangerous, and it will pass. Breathe slowly with me. In through your nose, and slowly out. Cravings usually fade within twenty minutes, even when they feel endless.',
      'That craving is an old habit knocking. You do not have to answer. Stand up, drink a glass of water, and step outside for ten minutes. Cravings almost always loosen their grip once your body moves.',
      'You feel a craving, and yet here you are, talking to me instead of drinking. That is exactly what strength looks like. Let us take this moment together, minute by minute.',
    ],
    stress: [
      'That sounds heavy. When your body is stressed it calls for something that soothes fast, and alcohol promises exactly that. But it only borrows calm from tomorrow, with interest. Let us slow your pulse instead. Breathe in for four, and out for six.',
      'Stress makes cravings stronger, and that is completely normal. Put one hand on your chest and one on your belly, and breathe down into your belly. Your body needs to know it is safe right now.',
      'You are carrying a lot. Remember that you do not have to solve everything tonight. The only thing you need to get through is this evening, sober. The rest can wait until tomorrow.',
    ],
    lonely: [
      'Loneliness is one of the hardest cravings to carry. Alcohol feels like company, but it leaves you lonelier afterwards. Is there someone you could call right now? Even a short conversation breaks the feeling more than you think.',
      'I am here with you. You are not the only one sitting with this feeling tonight, even if it feels that way. Message someone, or go to a meeting if you can. Connection is what truly eases loneliness.',
      'Feeling alone is not the same as being alone. There are people who would be glad to hear from you, even when the voice inside says otherwise.',
    ],
    sad: [
      'It hurts, and you do not have to explain it away. Sadness is allowed to be here. Alcohol would only numb it for a while, and then make it heavier. Be kind to yourself tonight, the way you would be to a friend.',
      'Heavy feelings come in waves, and waves always roll on. You do not have to feel better right now. You just have to get through the evening, and you already are.',
      'I hear that you are hurting. Take care of the basics first. Eat something, drink water, and go to bed early. Tomorrow almost always looks different.',
    ],
    angry: [
      'Anger is energy that wants somewhere to go. Give it a route other than the glass. Take a brisk walk, lift something heavy, or write down exactly what you are angry about, unfiltered.',
      'That sounds unfair, and you have every right to be angry. But drinking on anger usually just creates more things to be angry about tomorrow. Let the anger burn out first, then decide.',
      'When your pulse is high, decisions get worse. Give yourself twenty minutes before doing anything at all. The anger drops, and your choice stays yours.',
    ],
    social: [
      'Social situations are hard in the beginning. Have a plan before you go. Put something non alcoholic in your hand right away, so the questions never start. And decide now when you are heading home.',
      'You do not owe anyone an explanation. A simple, no thanks, I am driving tonight, works almost every time. And the people who truly care about you will not push.',
      'It is completely fine to leave early. Going home sober is always a better ending than staying and regretting it. You have nothing to prove to anyone.',
    ],
    tired: [
      'Tiredness makes everything harder, and it weakens your defence against cravings. Alcohol wrecks your sleep even when it feels relaxing. The best thing you can do right now is go to bed.',
      'When you are exhausted, your brain is worse at saying no. Take that as a sign the day is over, not that you need a drink. Shut things down, and give your body rest instead.',
      'You have done enough today. Let the evening end here. The craving is almost always weaker after a night of sleep.',
    ],
    celebrating: [
      'I am glad you have something to celebrate. You truly deserve a reward, but ask yourself what you actually want from tonight. A drink would blur out the very thing you are celebrating.',
      'Celebrate in a way you will remember tomorrow. Order the food you love, buy something you have wanted, or call someone and tell them. Then the joy stays yours to keep.',
      'The success is yours, alcohol would only borrow it. Celebrate sober, and you wake up tomorrow with both the memory and the pride intact.',
    ],
    relapse: [
      'Thank you for telling me. A relapse does not erase what you have built, it is part of the road for a great many people. Do not be harsh with yourself now, that only makes the next step heavier. Drink water, eat something, and sleep.',
      'This does not mean you failed. It means you are human. What matters is what you do next, and that you reach out to someone you trust today.',
      'Start again from today, not from zero. Everything you have learned is still there. If you have a sponsor or someone in health care, contact them now, you do not have to carry this alone.',
    ],
    general: [
      'I am here. Tell me more about how you are feeling right now, and we will talk our way through it together.',
      'Whatever you are feeling right now, it is okay. Breathe calmly with me for a moment. You do not have to make any big decisions tonight, only this one, not to drink right now.',
      'You did something good when you opened this app instead of reaching for the bottle. Stay here a while. It usually carries you further than you expect.',
    ],
  },
};

/** Spoken when the user opens the voice companion. */
export const voiceGreetings: Record<Lang, string[]> = {
  sv: [
    'Hej. Jag är här med dig. Berätta hur du känner dig just nu, så lyssnar jag.',
    'Vad skönt att du hör av dig. Ta det lugnt, och berätta vad som händer inom dig just nu.',
    'Hej, jag lyssnar. Du behöver inte formulera det perfekt, säg bara som det är.',
  ],
  en: [
    'Hello. I am here with you. Tell me how you are feeling right now, and I will listen.',
    'I am glad you reached out. Take your time, and tell me what is going on inside you right now.',
    'Hello, I am listening. You do not have to put it perfectly, just say it as it is.',
  ],
};

/** A guided calm-down sequence, spoken as one continuous passage. */
export const calmingSession: Record<Lang, string> = {
  sv: 'Sätt dig ner, eller ställ dig stadigt med båda fötterna i golvet. Släpp ner axlarna. Vi andas tillsammans nu. Andas in genom näsan, ett, två, tre, fyra. Håll kvar en liten stund. Och släpp ut luften långsamt, ett, två, tre, fyra, fem, sex. En gång till. In genom näsan, ett, två, tre, fyra. Och långsamt ut, ett, två, tre, fyra, fem, sex. Känn hur kroppen blir tyngre mot underlaget. Suget finns kanske kvar, men det bestämmer inte över dig. Du behöver inte göra någonting åt det just nu. Det enda du behöver göra, är att sitta kvar här, och andas. Du klarar den här stunden. Du har klarat varenda en hittills.',
  en: 'Sit down, or stand steady with both feet on the floor. Let your shoulders drop. We are breathing together now. Breathe in through your nose, one, two, three, four. Hold it for a moment. And let the air out slowly, one, two, three, four, five, six. Once more. In through your nose, one, two, three, four. And slowly out, one, two, three, four, five, six. Feel your body growing heavier against the ground. The craving may still be there, but it does not decide for you. You do not have to do anything about it right now. The only thing you need to do, is stay here, and breathe. You can get through this moment. You have gotten through every one so far.',
};

export function matchIntent(transcript: string, lang: Lang): Intent {
  const text = transcript.toLowerCase();
  const keywords = intentKeywords[lang];

  let best: { intent: Intent; length: number } | null = null;
  for (const intent of Object.keys(keywords) as Intent[]) {
    for (const keyword of keywords[intent]) {
      if (text.includes(keyword) && (!best || keyword.length > best.length)) {
        best = { intent, length: keyword.length };
      }
    }
  }

  return best?.intent ?? 'general';
}

export function replyFor(intent: Intent, lang: Lang, previous?: string): string {
  const options = voiceReplies[lang][intent];
  const fresh = options.filter((line) => line !== previous);
  const pool = fresh.length > 0 ? fresh : options;
  return pool[Math.floor(Math.random() * pool.length)];
}
