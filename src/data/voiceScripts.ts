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
  de: {
    craving: ['verlangen', 'suchtdruck', 'will trinken', 'lust auf', 'brauche ein bier', 'denke an alkohol', 'will wein', 'durst auf'],
    stress: ['gestresst', 'stress', 'angst', 'unruhig', 'sorgen', 'panik', 'druck', 'nervös', 'überfordert'],
    lonely: ['einsam', 'einsamkeit', 'allein', 'niemand', 'vermisse', 'verlassen', 'isoliert', 'keine freunde'],
    sad: ['traurig', 'deprimiert', 'niedergeschlagen', 'weine', 'hoffnungslos', 'sinnlos', 'schwer', 'geht mir schlecht'],
    angry: ['wütend', 'sauer', 'genervt', 'streit', 'ungerecht', 'zornig', 'frustriert'],
    social: ['party', 'kneipe', 'bar', 'abendessen', 'feier', 'eingeladen', 'feierabend', 'alle trinken', 'hochzeit'],
    tired: ['müde', 'schlaf', 'schlafe nicht', 'erschöpft', 'keine kraft', 'kaputt', 'einschlafen'],
    celebrating: ['feiere', 'feiern', 'froh', 'belohnung', 'verdient', 'anstoßen', 'erfolg'],
    relapse: ['habe getrunken', 'getrunken', 'rückfall', 'rückfällig', 'versagt', 'ein glas genommen', 'nicht geschafft'],
    general: [],
  },
  fr: {
    craving: ['envie', 'besoin de boire', 'veux boire', 'manque', 'une bière', 'pense à alcool', 'veux du vin', 'soif de'],
    stress: ['stressé', 'stress', 'angoisse', 'anxieux', 'inquiet', 'panique', 'pression', 'nerveux', 'débordé'],
    lonely: ['seul', 'solitude', 'personne', 'manque quelqu', 'abandonné', 'isolé', 'pas d\'amis'],
    sad: ['triste', 'déprimé', 'mal', 'pleure', 'désespéré', 'inutile', 'lourd', 'vais pas bien'],
    angry: ['colère', 'énervé', 'furieux', 'irrité', 'dispute', 'injuste', 'frustré'],
    social: ['fête', 'bar', 'soirée', 'dîner', 'apéro', 'invité', 'tout le monde boit', 'mariage'],
    tired: ['fatigué', 'sommeil', 'dors pas', 'épuisé', 'plus de force', 'crevé', "m'endormir"],
    celebrating: ['fête quelque chose', 'célébrer', 'content', 'récompense', 'mérite', 'trinquer', 'réussite'],
    relapse: ["j'ai bu", 'rechute', 'rechuté', 'craqué', 'échoué', 'pris un verre', 'pas tenu'],
    general: [],
  },
  es: {
    craving: ['ganas', 'antojo', 'quiero beber', 'necesito un trago', 'pienso en alcohol', 'quiero vino', 'una cerveza', 'sed de'],
    stress: ['estresado', 'estrés', 'ansiedad', 'ansioso', 'preocupado', 'pánico', 'presión', 'nervioso', 'desbordado'],
    lonely: ['solo', 'soledad', 'nadie', 'echo de menos', 'abandonado', 'aislado', 'sin amigos'],
    sad: ['triste', 'deprimido', 'bajón', 'lloro', 'sin esperanza', 'sin sentido', 'pesado', 'me siento mal'],
    angry: ['enfadado', 'enojado', 'cabreado', 'irritado', 'discusión', 'injusto', 'furioso', 'frustrado'],
    social: ['fiesta', 'bar', 'copas', 'cena', 'celebración', 'me invitan', 'todos beben', 'boda'],
    tired: ['cansado', 'sueño', 'no duermo', 'agotado', 'sin energía', 'reventado', 'dormirme'],
    celebrating: ['celebrando', 'celebrar', 'contento', 'recompensa', 'me lo merezco', 'brindar', 'éxito'],
    relapse: ['he bebido', 'bebí', 'recaída', 'recaí', 'fallé', 'tomé una copa', 'no aguanté'],
    general: [],
  },
  it: {
    craving: ['voglia', 'desiderio', 'voglio bere', 'ho bisogno di bere', 'penso all', 'voglio vino', 'una birra', 'sete di'],
    stress: ['stressato', 'stress', 'ansia', 'ansioso', 'preoccupato', 'panico', 'pressione', 'nervoso', 'sopraffatto'],
    lonely: ['solo', 'solitudine', 'nessuno', 'mi manca', 'abbandonato', 'isolato', 'senza amici'],
    sad: ['triste', 'depresso', 'giù', 'piango', 'senza speranza', 'inutile', 'pesante', 'sto male'],
    angry: ['arrabbiato', 'furioso', 'irritato', 'litigio', 'ingiusto', 'incazzato', 'frustrato'],
    social: ['festa', 'bar', 'locale', 'cena', 'aperitivo', 'mi offrono', 'bevono tutti', 'matrimonio'],
    tired: ['stanco', 'sonno', 'non dormo', 'esausto', 'senza energie', 'distrutto', 'addormentarmi'],
    celebrating: ['festeggio', 'festeggiare', 'contento', 'ricompensa', 'me lo merito', 'brindare', 'successo'],
    relapse: ['ho bevuto', 'ricaduta', 'sono ricaduto', 'fallito', 'preso un bicchiere', 'non ce l\'ho fatta'],
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
  de: {
    craving: [
      'Ich höre dich. Das Verlangen ist gerade stark, aber es ist nicht gefährlich, und es geht vorbei. Atme ruhig mit mir. Durch die Nase ein, und langsam wieder aus. Verlangen klingt meist innerhalb von zwanzig Minuten ab, auch wenn es sich gerade endlos anfühlt.',
      'Dieses Verlangen ist eine alte Gewohnheit, die anklopft. Du musst nicht öffnen. Steh auf, trink ein Glas Wasser, und geh zehn Minuten an die frische Luft. Das Verlangen verliert fast immer seinen Griff, wenn der Körper sich bewegt.',
      'Du spürst ein Verlangen, und trotzdem sitzt du hier und sprichst mit mir, statt zu trinken. Genau das ist Stärke. Lass uns diesen Moment zusammen nehmen, Minute für Minute.',
    ],
    stress: [
      'Das klingt schwer. Wenn der Körper gestresst ist, ruft er nach etwas, das schnell dämpft, und Alkohol verspricht genau das. Aber er leiht die Ruhe nur vom morgigen Tag, und nimmt Zinsen. Lass uns stattdessen den Puls senken. Atme auf vier ein, und auf sechs aus.',
      'Stress macht das Verlangen stärker, das ist ganz normal. Leg eine Hand auf die Brust und eine auf den Bauch, und atme in den Bauch. Dein Körper muss erfahren, dass er gerade sicher ist.',
      'Du trägst gerade viel. Denk daran, dass du heute Abend nicht alles lösen musst. Das Einzige, was du schaffen musst, ist dieser Abend, nüchtern. Der Rest kann bis morgen warten.',
    ],
    lonely: [
      'Einsamkeit ist eines der schwersten Gefühle in dieser Zeit. Alkohol fühlt sich wie Gesellschaft an, lässt dich danach aber noch einsamer zurück. Gibt es jemanden, den du jetzt anrufen könntest? Schon ein kurzes Gespräch durchbricht das Gefühl mehr, als du denkst.',
      'Ich bin hier bei dir. Du bist heute Abend nicht der Einzige mit diesem Gefühl, auch wenn es sich so anfühlt. Schreib jemandem, oder geh zu einem Treffen, wenn du kannst. Kontakt ist das, was Einsamkeit wirklich lindert.',
      'Sich einsam zu fühlen ist nicht dasselbe wie allein zu sein. Es gibt Menschen, die sich freuen würden, von dir zu hören, auch wenn die Stimme in dir etwas anderes sagt.',
    ],
    sad: [
      'Es tut weh, und du musst es nicht wegerklären. Traurigkeit darf da sein. Alkohol würde sie nur eine Weile betäuben und danach schwerer machen. Sei heute Abend freundlich zu dir, so wie du es zu einer Freundin wärst.',
      'Schwere Gefühle kommen in Wellen, und Wellen laufen immer weiter. Du musst dich jetzt nicht besser fühlen. Du musst nur durch den Abend kommen, und das tust du bereits.',
      'Ich höre, dass es dir schlecht geht. Kümmere dich zuerst um das Grundlegende. Iss etwas, trink Wasser, und geh früh ins Bett. Morgen sieht fast alles anders aus.',
    ],
    angry: [
      'Wut ist Energie, die irgendwohin will. Gib ihr einen anderen Weg als das Glas. Geh zügig spazieren, heb etwas Schweres, oder schreib ungefiltert auf, worüber du wütend bist.',
      'Das klingt ungerecht, und du hast jedes Recht, wütend zu sein. Aber auf Wut zu trinken schafft meistens nur mehr Gründe, morgen wütend zu sein. Lass die Wut erst ausbrennen, dann entscheidest du.',
      'Wenn der Puls hoch ist, werden die Entscheidungen schlechter. Gib dir zwanzig Minuten, bevor du überhaupt etwas tust. Die Wut sinkt, und deine Entscheidung bleibt deine.',
    ],
    social: [
      'Soziale Anlässe sind am Anfang schwer. Hab einen Plan, bevor du hingehst. Nimm dir sofort etwas Alkoholfreies in die Hand, dann kommen die Fragen gar nicht erst. Und leg jetzt schon fest, wann du nach Hause gehst.',
      'Du schuldest niemandem eine Erklärung. Ein einfaches, nein danke, ich fahre heute, reicht fast immer. Und die Menschen, denen du wirklich wichtig bist, werden nicht drängen.',
      'Es ist völlig in Ordnung, früh zu gehen. Nüchtern nach Hause zu kommen ist immer ein besseres Ende als zu bleiben und es zu bereuen. Du musst niemandem etwas beweisen.',
    ],
    tired: [
      'Müdigkeit macht alles schwerer und schwächt die Abwehr gegen das Verlangen. Alkohol zerstört den Schlaf, auch wenn er sich entspannend anfühlt. Das Beste, was du jetzt tun kannst, ist schlafen zu gehen.',
      'Wenn du erschöpft bist, kann dein Gehirn schlechter Nein sagen. Nimm das als Zeichen, dass der Tag vorbei ist, nicht dass du ein Glas brauchst. Fahr alles herunter und gib dem Körper stattdessen Ruhe.',
      'Du hast heute genug getan. Lass den Abend hier enden. Nach einer Nacht Schlaf ist das Verlangen fast immer schwächer.',
    ],
    celebrating: [
      'Schön, dass du etwas zu feiern hast. Du hast eine Belohnung wirklich verdient, aber frag dich, was du heute Abend eigentlich willst. Ein Glas würde genau das verwischen, was du feierst.',
      'Feiere so, dass du dich morgen daran erinnerst. Bestell das Essen, das du liebst, kauf dir etwas, das du dir gewünscht hast, oder ruf jemanden an und erzähl davon. Dann bleibt die Freude dir.',
      'Der Erfolg gehört dir, der Alkohol würde ihn sich nur ausleihen. Feiere nüchtern, dann wachst du morgen mit der Erinnerung und dem Stolz auf.',
    ],
    relapse: [
      'Danke, dass du es erzählst. Ein Rückfall löscht nicht aus, was du aufgebaut hast, er gehört für sehr viele zum Weg dazu. Sei jetzt nicht hart zu dir, das macht den nächsten Schritt nur schwerer. Trink Wasser, iss etwas, und schlaf.',
      'Das bedeutet nicht, dass du versagt hast. Es bedeutet, dass du ein Mensch bist. Wichtig ist, was du als Nächstes tust, und dass du dich heute bei jemandem meldest, dem du vertraust.',
      'Fang bei heute wieder an, nicht bei null. Alles, was du gelernt hast, ist noch da. Wenn du einen Sponsor hast oder jemanden in der Behandlung, melde dich jetzt bei ihnen, du musst das nicht allein tragen.',
    ],
    general: [
      'Ich bin hier. Erzähl gern mehr davon, wie du dich gerade fühlst, dann sprechen wir uns gemeinsam durch.',
      'Was auch immer du gerade fühlst, es ist in Ordnung. Atme eine Weile ruhig mit mir. Du musst heute Abend keine großen Entscheidungen treffen, nur diese eine, jetzt nicht zu trinken.',
      'Du hast etwas Gutes getan, als du die App geöffnet hast, statt zur Flasche zu greifen. Bleib eine Weile hier. Das trägt meistens weiter, als man denkt.',
    ],
  },
  fr: {
    craving: [
      "Je t'entends. L'envie est forte en ce moment, mais elle n'est pas dangereuse, et elle passera. Respire doucement avec moi. Inspire par le nez, et expire lentement. Les envies s'estompent souvent en vingt minutes, même quand elles semblent sans fin.",
      "Cette envie, c'est une vieille habitude qui frappe à la porte. Tu n'es pas obligé d'ouvrir. Lève-toi, bois un verre d'eau, et sors dix minutes à l'air libre. L'envie lâche presque toujours prise quand le corps bouge.",
      "Tu ressens une envie, et pourtant tu es là, à me parler plutôt qu'à boire. C'est exactement ça, la force. Prenons ce moment ensemble, minute par minute.",
    ],
    stress: [
      "Ça a l'air lourd. Quand le corps est stressé, il réclame quelque chose qui apaise vite, et l'alcool promet exactement ça. Mais il emprunte le calme à demain, avec des intérêts. Faisons plutôt baisser ton pouls. Inspire sur quatre, expire sur six.",
      "Le stress rend les envies plus fortes, c'est tout à fait normal. Pose une main sur la poitrine et une sur le ventre, et respire dans le ventre. Ton corps a besoin de savoir qu'il est en sécurité maintenant.",
      "Tu portes beaucoup en ce moment. Rappelle-toi que tu n'as pas à tout régler ce soir. La seule chose à traverser, c'est cette soirée, sobre. Le reste peut attendre demain.",
    ],
    lonely: [
      "La solitude est l'une des envies les plus dures à porter. L'alcool ressemble à de la compagnie, mais il te laisse encore plus seul après. Y a-t-il quelqu'un que tu pourrais appeler maintenant ? Même une courte conversation casse ce sentiment plus que tu ne le crois.",
      "Je suis là avec toi. Tu n'es pas le seul à ressentir ça ce soir, même si ça en a l'air. Écris à quelqu'un, ou va à une réunion si tu peux. C'est le lien qui apaise vraiment la solitude.",
      "Se sentir seul n'est pas la même chose qu'être seul. Il y a des gens qui seraient contents d'avoir de tes nouvelles, même si la voix intérieure dit le contraire.",
    ],
    sad: [
      "Ça fait mal, et tu n'as pas à l'expliquer. La tristesse a le droit d'être là. L'alcool ne ferait que l'anesthésier un moment, puis la rendre plus lourde. Sois doux avec toi ce soir, comme tu le serais avec un ami.",
      "Les émotions lourdes viennent par vagues, et les vagues finissent toujours par passer. Tu n'as pas besoin d'aller mieux maintenant. Tu as seulement à traverser la soirée, et c'est déjà ce que tu fais.",
      "J'entends que tu vas mal. Occupe-toi d'abord de l'essentiel. Mange quelque chose, bois de l'eau, et couche-toi tôt. Demain, les choses ont presque toujours un autre visage.",
    ],
    angry: [
      "La colère est une énergie qui veut aller quelque part. Donne-lui un autre chemin que le verre. Marche vite, soulève quelque chose de lourd, ou écris sans filtre ce qui te met en colère.",
      "Ça a l'air injuste, et tu as le droit d'être en colère. Mais boire sur la colère crée en général d'autres raisons d'être en colère demain. Laisse d'abord la colère s'épuiser, ensuite tu décideras.",
      "Quand le pouls est élevé, les décisions sont moins bonnes. Donne-toi vingt minutes avant de faire quoi que ce soit. La colère redescend, et ton choix reste le tien.",
    ],
    social: [
      "Les situations sociales sont difficiles au début. Aie un plan avant d'y aller. Prends tout de suite quelque chose sans alcool dans la main, et les questions ne viendront pas. Et décide dès maintenant à quelle heure tu rentres.",
      "Tu ne dois d'explication à personne. Un simple, non merci, je conduis ce soir, suffit presque toujours. Et ceux qui tiennent vraiment à toi n'insisteront pas.",
      "C'est tout à fait normal de partir tôt. Rentrer sobre est toujours une meilleure fin de soirée que rester et le regretter. Tu n'as rien à prouver à personne.",
    ],
    tired: [
      "La fatigue rend tout plus difficile et affaiblit ta défense contre l'envie. L'alcool détruit le sommeil même quand il paraît relaxant. La meilleure chose à faire maintenant, c'est d'aller te coucher.",
      "Quand tu es épuisé, ton cerveau sait moins bien dire non. Prends-le comme un signe que la journée est finie, pas que tu as besoin d'un verre. Éteins tout, et offre plutôt du repos à ton corps.",
      "Tu en as assez fait aujourd'hui. Laisse la soirée s'arrêter ici. L'envie est presque toujours plus faible après une nuit de sommeil.",
    ],
    celebrating: [
      "Je suis content que tu aies quelque chose à fêter. Tu mérites vraiment une récompense, mais demande-toi ce que tu veux vraiment de cette soirée. Un verre effacerait justement ce que tu célèbres.",
      "Fête d'une manière dont tu te souviendras demain. Commande le plat que tu adores, achète-toi ce dont tu avais envie, ou appelle quelqu'un pour le raconter. La joie restera à toi.",
      "La réussite est à toi, l'alcool ne ferait que l'emprunter. Fête sobre, et tu te réveilleras demain avec le souvenir et la fierté intacts.",
    ],
    relapse: [
      "Merci de me le dire. Une rechute n'efface pas ce que tu as construit, elle fait partie du chemin pour beaucoup de gens. Ne sois pas dur avec toi maintenant, ça ne rend le pas suivant que plus lourd. Bois de l'eau, mange quelque chose, et dors.",
      "Ça ne veut pas dire que tu as échoué. Ça veut dire que tu es humain. Ce qui compte, c'est ce que tu fais ensuite, et que tu contactes aujourd'hui quelqu'un en qui tu as confiance.",
      "Repars d'aujourd'hui, pas de zéro. Tout ce que tu as appris est encore là. Si tu as un parrain ou quelqu'un dans le soin, contacte-le maintenant, tu n'as pas à porter ça seul.",
    ],
    general: [
      "Je suis là. Raconte-moi comment tu te sens en ce moment, et on traversera ça ensemble.",
      "Quoi que tu ressentes maintenant, c'est normal. Respire calmement avec moi un instant. Tu n'as aucune grande décision à prendre ce soir, seulement celle-ci : ne pas boire maintenant.",
      "Tu as fait quelque chose de bien en ouvrant cette application plutôt que d'aller vers la bouteille. Reste ici un moment. Ça porte souvent plus loin qu'on ne le croit.",
    ],
  },
  es: {
    craving: [
      'Te escucho. El deseo es fuerte ahora mismo, pero no es peligroso, y va a pasar. Respira despacio conmigo. Inhala por la nariz, y suelta el aire lentamente. Los deseos suelen bajar en veinte minutos, aunque ahora parezcan infinitos.',
      'Ese deseo es una vieja costumbre que llama a la puerta. No tienes que abrir. Levántate, bebe un vaso de agua, y sal al aire libre diez minutos. El deseo casi siempre afloja cuando el cuerpo se mueve.',
      'Sientes un deseo, y aun así estás aquí hablando conmigo en lugar de beber. Eso es exactamente lo que es la fuerza. Vamos a pasar este momento juntos, minuto a minuto.',
    ],
    stress: [
      'Suena pesado. Cuando el cuerpo está estresado pide algo que calme rápido, y el alcohol promete justo eso. Pero solo toma prestada la calma del día siguiente, y cobra intereses. Vamos a bajar el pulso en su lugar. Inhala en cuatro, y exhala en seis.',
      'El estrés hace el deseo más fuerte, y eso es completamente normal. Pon una mano en el pecho y otra en la barriga, y respira hacia la barriga. Tu cuerpo necesita saber que ahora está a salvo.',
      'Estás cargando mucho ahora. Recuerda que no tienes que resolverlo todo esta noche. Lo único que necesitas superar es esta noche, sobrio. El resto puede esperar a mañana.',
    ],
    lonely: [
      'La soledad es uno de los deseos más difíciles de sostener. El alcohol se siente como compañía, pero te deja más solo después. ¿Hay alguien a quien puedas llamar ahora? Incluso una conversación corta rompe esa sensación más de lo que crees.',
      'Estoy aquí contigo. No eres el único con esta sensación esta noche, aunque lo parezca. Escríbele a alguien, o ve a una reunión si puedes. El contacto es lo que de verdad alivia la soledad.',
      'Sentirse solo no es lo mismo que estar solo. Hay personas que se alegrarían de saber de ti, aunque la voz de dentro diga otra cosa.',
    ],
    sad: [
      'Duele, y no tienes que explicarlo. La tristeza tiene derecho a estar. El alcohol solo la adormecería un rato, y luego la haría más pesada. Sé amable contigo esta noche, como lo serías con un amigo.',
      'Las emociones pesadas vienen en olas, y las olas siempre siguen su curso. No necesitas sentirte mejor ahora. Solo tienes que atravesar la noche, y ya lo estás haciendo.',
      'Escucho que lo estás pasando mal. Ocúpate primero de lo básico. Come algo, bebe agua, y acuéstate temprano. Mañana casi siempre se ve distinto.',
    ],
    angry: [
      'La rabia es energía que quiere ir a algún sitio. Dale otro camino que no sea el vaso. Camina rápido, levanta algo pesado, o escribe sin filtro exactamente qué te enfada.',
      'Suena injusto, y tienes todo el derecho a estar enfadado. Pero beber sobre la rabia suele crear más motivos para estar enfadado mañana. Deja que la rabia se consuma primero, y luego decides.',
      'Cuando el pulso está alto, las decisiones salen peor. Date veinte minutos antes de hacer nada. La rabia baja, y tu decisión sigue siendo tuya.',
    ],
    social: [
      'Las situaciones sociales son difíciles al principio. Ten un plan antes de ir. Ponte algo sin alcohol en la mano desde el principio, así ni empiezan las preguntas. Y decide ya a qué hora te vas a casa.',
      'No le debes una explicación a nadie. Un simple, no gracias, hoy conduzco, funciona casi siempre. Y quienes de verdad te aprecian no van a insistir.',
      'Está totalmente bien irse pronto. Volver a casa sobrio siempre es mejor final que quedarse y arrepentirse. No tienes que demostrarle nada a nadie.',
    ],
    tired: [
      'El cansancio lo hace todo más difícil, y debilita tu defensa frente al deseo. El alcohol destroza el sueño aunque parezca relajante. Lo mejor que puedes hacer ahora es irte a dormir.',
      'Cuando estás agotado, tu cerebro sabe decir que no mucho peor. Tómalo como señal de que el día terminó, no de que necesitas una copa. Apaga todo y dale descanso al cuerpo.',
      'Ya has hecho suficiente hoy. Deja que la noche termine aquí. El deseo casi siempre es más débil después de dormir.',
    ],
    celebrating: [
      'Me alegro de que tengas algo que celebrar. De verdad mereces premiarte, pero pregúntate qué quieres realmente de esta noche. Una copa borraría justo aquello que estás celebrando.',
      'Celebra de una forma que recuerdes mañana. Pide la comida que te encanta, cómprate eso que querías, o llama a alguien y cuéntaselo. Así la alegría se queda contigo.',
      'El logro es tuyo, el alcohol solo lo tomaría prestado. Celebra sobrio, y mañana despertarás con el recuerdo y el orgullo intactos.',
    ],
    relapse: [
      'Gracias por contármelo. Una recaída no borra lo que has construido, forma parte del camino para muchísimas personas. No seas duro contigo ahora, eso solo hace más pesado el siguiente paso. Bebe agua, come algo, y duerme.',
      'Esto no significa que hayas fracasado. Significa que eres humano. Lo que importa es lo que haces a continuación, y que hoy hables con alguien en quien confíes.',
      'Empieza de nuevo desde hoy, no desde cero. Todo lo que has aprendido sigue ahí. Si tienes padrino o alguien en tu tratamiento, contáctale ahora, no tienes que cargar esto solo.',
    ],
    general: [
      'Estoy aquí. Cuéntame más sobre cómo te sientes ahora, y lo atravesamos juntos.',
      'Sea lo que sea que sientas ahora, está bien. Respira tranquilo conmigo un momento. No tienes que tomar grandes decisiones esta noche, solo esta: no beber ahora.',
      'Hiciste algo bueno al abrir la aplicación en lugar de ir hacia la botella. Quédate aquí un rato. Suele llevarte más lejos de lo que esperas.',
    ],
  },
  it: {
    craving: [
      'Ti sento. Il desiderio è forte adesso, ma non è pericoloso, e passerà. Respira piano con me. Inspira dal naso, ed espira lentamente. Il desiderio di solito si attenua entro venti minuti, anche quando sembra infinito.',
      'Quel desiderio è una vecchia abitudine che bussa. Non sei obbligato ad aprire. Alzati, bevi un bicchiere d\'acqua, ed esci all\'aria aperta per dieci minuti. Il desiderio quasi sempre molla la presa quando il corpo si muove.',
      'Senti un desiderio, eppure sei qui a parlare con me invece di bere. È esattamente questo, la forza. Prendiamoci questo momento insieme, minuto per minuto.',
    ],
    stress: [
      "Sembra pesante. Quando il corpo è sotto stress chiede qualcosa che calmi in fretta, e l'alcol promette proprio quello. Ma prende in prestito la calma dal giorno dopo, con gli interessi. Abbassiamo invece il battito. Inspira su quattro, ed espira su sei.",
      'Lo stress rende il desiderio più forte, ed è del tutto normale. Metti una mano sul petto e una sulla pancia, e respira nella pancia. Il tuo corpo ha bisogno di sapere che adesso è al sicuro.',
      'Stai portando molto in questo momento. Ricorda che non devi risolvere tutto stasera. L\'unica cosa da superare è questa serata, da sobrio. Il resto può aspettare domani.',
    ],
    lonely: [
      "La solitudine è uno dei desideri più difficili da sostenere. L'alcol sembra compagnia, ma ti lascia ancora più solo dopo. C'è qualcuno che potresti chiamare adesso? Anche una conversazione breve spezza quella sensazione più di quanto pensi.",
      'Sono qui con te. Non sei l\'unico con questa sensazione stasera, anche se sembra così. Scrivi a qualcuno, o vai a un incontro se puoi. È il contatto che allevia davvero la solitudine.',
      'Sentirsi soli non è la stessa cosa che essere soli. Ci sono persone che sarebbero contente di sentirti, anche se la voce dentro dice il contrario.',
    ],
    sad: [
      "Fa male, e non devi spiegarlo via. La tristezza ha il diritto di esserci. L'alcol la anestetizzerebbe solo per un po', e poi la renderebbe più pesante. Sii gentile con te stasera, come lo saresti con un amico.",
      'Le emozioni pesanti arrivano a ondate, e le onde passano sempre. Non devi stare meglio adesso. Devi solo attraversare la serata, e lo stai già facendo.',
      'Sento che stai male. Occupati prima delle cose essenziali. Mangia qualcosa, bevi acqua, e vai a letto presto. Domani quasi sempre le cose sembrano diverse.',
    ],
    angry: [
      'La rabbia è energia che vuole andare da qualche parte. Dalle una strada diversa dal bicchiere. Fai una camminata veloce, solleva qualcosa di pesante, o scrivi senza filtri esattamente cosa ti fa arrabbiare.',
      'Sembra ingiusto, e hai tutto il diritto di essere arrabbiato. Ma bere sulla rabbia di solito crea solo altri motivi per essere arrabbiato domani. Lascia prima che la rabbia si consumi, poi decidi.',
      'Quando il battito è alto, le decisioni peggiorano. Datti venti minuti prima di fare qualsiasi cosa. La rabbia scende, e la tua scelta resta tua.',
    ],
    social: [
      "Le situazioni sociali sono difficili all'inizio. Fatti un piano prima di andare. Prendi subito in mano qualcosa di analcolico, così le domande non iniziano nemmeno. E decidi già adesso a che ora torni a casa.",
      'Non devi spiegazioni a nessuno. Un semplice, no grazie, stasera guido, funziona quasi sempre. E chi tiene davvero a te non insisterà.',
      'Va benissimo andare via presto. Tornare a casa sobrio è sempre un finale migliore che restare e pentirsene. Non devi dimostrare niente a nessuno.',
    ],
    tired: [
      "La stanchezza rende tutto più difficile, e indebolisce la difesa contro il desiderio. L'alcol rovina il sonno anche quando sembra rilassante. La cosa migliore che puoi fare adesso è andare a dormire.",
      'Quando sei esausto, il cervello sa dire di no molto peggio. Prendilo come segno che la giornata è finita, non che ti serve un bicchiere. Spegni tutto, e dai riposo al corpo.',
      'Hai fatto abbastanza oggi. Lascia che la serata finisca qui. Il desiderio è quasi sempre più debole dopo una notte di sonno.',
    ],
    celebrating: [
      'Sono contento che tu abbia qualcosa da festeggiare. Meriti davvero una ricompensa, ma chiediti cosa vuoi veramente da questa serata. Un bicchiere cancellerebbe proprio quello che stai festeggiando.',
      'Festeggia in un modo che ricorderai domani. Ordina il cibo che ami, comprati qualcosa che volevi, o chiama qualcuno e raccontaglielo. Così la gioia resta tua.',
      "Il successo è tuo, l'alcol lo prenderebbe solo in prestito. Festeggia da sobrio, e domani ti sveglierai con il ricordo e l'orgoglio intatti.",
    ],
    relapse: [
      'Grazie per avermelo detto. Una ricaduta non cancella quello che hai costruito, fa parte del percorso per moltissime persone. Non essere duro con te adesso, rende solo più pesante il passo successivo. Bevi acqua, mangia qualcosa, e dormi.',
      'Questo non significa che hai fallito. Significa che sei umano. Quello che conta è cosa fai adesso, e che oggi ti rivolga a qualcuno di cui ti fidi.',
      'Ricomincia da oggi, non da zero. Tutto quello che hai imparato è ancora lì. Se hai uno sponsor o qualcuno che ti segue, contattalo adesso, non devi portare questo peso da solo.',
    ],
    general: [
      'Sono qui. Raccontami di più su come ti senti adesso, e ci passiamo attraverso insieme.',
      'Qualunque cosa tu senta adesso, va bene. Respira con calma insieme a me per un momento. Non devi prendere grandi decisioni stasera, solo questa: non bere adesso.',
      "Hai fatto qualcosa di buono aprendo l'app invece di andare verso la bottiglia. Resta qui un po'. Di solito porta più lontano di quanto ci si aspetti.",
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
  de: [
    'Hallo. Ich bin hier bei dir. Erzähl mir, wie du dich gerade fühlst, ich höre zu.',
    'Schön, dass du dich meldest. Lass dir Zeit, und erzähl, was gerade in dir vorgeht.',
    'Hallo, ich höre zu. Du musst es nicht perfekt formulieren, sag es einfach, wie es ist.',
  ],
  fr: [
    "Bonjour. Je suis là avec toi. Dis-moi comment tu te sens en ce moment, je t'écoute.",
    'Je suis content que tu me parles. Prends ton temps, et raconte ce qui se passe en toi.',
    "Bonjour, je t'écoute. Tu n'as pas besoin de bien le formuler, dis-le simplement comme c'est.",
  ],
  es: [
    'Hola. Estoy aquí contigo. Cuéntame cómo te sientes ahora, y te escucho.',
    'Me alegro de que hables conmigo. Tómate tu tiempo y cuéntame qué está pasando dentro de ti.',
    'Hola, te escucho. No hace falta que lo digas perfecto, dilo tal como es.',
  ],
  it: [
    'Ciao. Sono qui con te. Raccontami come ti senti adesso, ti ascolto.',
    'Sono contento che tu mi parli. Prenditi il tuo tempo, e racconta cosa succede dentro di te.',
    'Ciao, ti ascolto. Non devi dirlo in modo perfetto, dillo semplicemente com\'è.',
  ],
};

/** A guided calm-down sequence, spoken as one continuous passage. */
export const calmingSession: Record<Lang, string> = {
  sv: 'Sätt dig ner, eller ställ dig stadigt med båda fötterna i golvet. Släpp ner axlarna. Vi andas tillsammans nu. Andas in genom näsan, ett, två, tre, fyra. Håll kvar en liten stund. Och släpp ut luften långsamt, ett, två, tre, fyra, fem, sex. En gång till. In genom näsan, ett, två, tre, fyra. Och långsamt ut, ett, två, tre, fyra, fem, sex. Känn hur kroppen blir tyngre mot underlaget. Suget finns kanske kvar, men det bestämmer inte över dig. Du behöver inte göra någonting åt det just nu. Det enda du behöver göra, är att sitta kvar här, och andas. Du klarar den här stunden. Du har klarat varenda en hittills.',
  en: 'Sit down, or stand steady with both feet on the floor. Let your shoulders drop. We are breathing together now. Breathe in through your nose, one, two, three, four. Hold it for a moment. And let the air out slowly, one, two, three, four, five, six. Once more. In through your nose, one, two, three, four. And slowly out, one, two, three, four, five, six. Feel your body growing heavier against the ground. The craving may still be there, but it does not decide for you. You do not have to do anything about it right now. The only thing you need to do, is stay here, and breathe. You can get through this moment. You have gotten through every one so far.',
  de: 'Setz dich hin, oder stell dich fest hin, mit beiden Füßen auf dem Boden. Lass die Schultern sinken. Wir atmen jetzt zusammen. Atme durch die Nase ein, eins, zwei, drei, vier. Halt es einen Moment. Und lass die Luft langsam wieder heraus, eins, zwei, drei, vier, fünf, sechs. Noch einmal. Durch die Nase ein, eins, zwei, drei, vier. Und langsam aus, eins, zwei, drei, vier, fünf, sechs. Spür, wie dein Körper schwerer wird auf dem Boden. Das Verlangen ist vielleicht noch da, aber es bestimmt nicht über dich. Du musst gerade nichts dagegen tun. Das Einzige, was du tun musst, ist hier sitzen zu bleiben, und zu atmen. Du schaffst diesen Moment. Du hast bisher jeden einzelnen geschafft.',
  fr: "Assieds-toi, ou tiens-toi bien stable, les deux pieds au sol. Laisse tomber tes épaules. On respire ensemble maintenant. Inspire par le nez, un, deux, trois, quatre. Retiens un instant. Et laisse sortir l'air lentement, un, deux, trois, quatre, cinq, six. Encore une fois. Inspire par le nez, un, deux, trois, quatre. Et expire lentement, un, deux, trois, quatre, cinq, six. Sens ton corps devenir plus lourd contre le sol. L'envie est peut-être encore là, mais elle ne décide pas pour toi. Tu n'as rien à faire contre elle maintenant. La seule chose à faire, c'est de rester ici, et de respirer. Tu peux traverser ce moment. Tu as traversé tous les autres jusqu'ici.",
  es: 'Siéntate, o quédate de pie firme, con los dos pies en el suelo. Deja caer los hombros. Vamos a respirar juntos ahora. Inhala por la nariz, uno, dos, tres, cuatro. Sostén un momento. Y suelta el aire despacio, uno, dos, tres, cuatro, cinco, seis. Una vez más. Inhala por la nariz, uno, dos, tres, cuatro. Y suelta despacio, uno, dos, tres, cuatro, cinco, seis. Siente cómo tu cuerpo se vuelve más pesado contra el suelo. Puede que el deseo siga ahí, pero no decide por ti. No tienes que hacer nada al respecto ahora. Lo único que necesitas hacer es quedarte aquí, y respirar. Puedes superar este momento. Has superado todos los anteriores.',
  it: 'Siediti, oppure resta in piedi ben saldo, con entrambi i piedi a terra. Lascia scendere le spalle. Adesso respiriamo insieme. Inspira dal naso, uno, due, tre, quattro. Trattieni un momento. E lascia uscire l\'aria lentamente, uno, due, tre, quattro, cinque, sei. Ancora una volta. Inspira dal naso, uno, due, tre, quattro. Ed espira lentamente, uno, due, tre, quattro, cinque, sei. Senti il tuo corpo farsi più pesante contro il suolo. Il desiderio forse è ancora lì, ma non decide al posto tuo. Non devi farci niente adesso. L\'unica cosa che devi fare è restare qui, e respirare. Ce la fai a superare questo momento. Li hai superati tutti finora.',
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
