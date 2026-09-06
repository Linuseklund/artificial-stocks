import type { Lang } from '../i18n/languages';

// {days} is replaced with the current streak length, e.g. "3 dagar" / "3 days" or "idag" / "today".

export const morningMessages: Record<Lang, string[]> = {
  sv: [
    'God morgon! Du vaknar upp nykter {days} i rad. Det är inte en slump – det är ett val du gör om och om igen. Bra jobbat.',
    'En ny dag, och du möter den nykter. {days} bakom dig, en ny framför dig. Ta den timme för timme om det behövs.',
    'God morgon. Tänk på hur långt du har kommit: {days} nykter. Du bygger något starkt, en dag i taget.',
    'Du är här, nykter, {days} i rad. Det är ett bevis på styrka, även de dagar det inte känns så.',
    'God morgon! Var stolt över dig själv. {days} nykter är {days} beslut att välja dig själv.',
    'En ny morgon, en ny chans att göra något bra för dig själv. Du har redan {days} nykter i ryggen.',
  ],
  en: [
    "Good morning! You wake up sober {days} in a row. That's not luck – it's a choice you make again and again. Well done.",
    "A new day, and you meet it sober. {days} behind you, a new one ahead. Take it hour by hour if you need to.",
    "Good morning. Think about how far you've come: {days} sober. You're building something strong, one day at a time.",
    "You're here, sober, {days} running. That's proof of strength, even on the days it doesn't feel like it.",
    'Good morning! Be proud of yourself. {days} sober is {days} decisions to choose yourself.',
    "A new morning, a new chance to do something good for yourself. You already have {days} sober behind you.",
  ],
  de: [
    'Guten Morgen! Du wachst {days} nüchtern in Folge auf. Das ist kein Zufall – das ist eine Entscheidung, die du immer wieder triffst. Gut gemacht.',
    'Ein neuer Tag, und du begegnest ihm nüchtern. {days} hinter dir, ein neuer vor dir. Nimm ihn Stunde für Stunde, wenn es sein muss.',
    'Guten Morgen. Denk daran, wie weit du gekommen bist: {days} nüchtern. Du baust etwas Starkes auf, einen Tag nach dem anderen.',
    'Du bist hier, nüchtern, {days} am Stück. Das ist ein Beweis von Stärke, auch an den Tagen, an denen es sich nicht so anfühlt.',
    'Guten Morgen! Sei stolz auf dich. {days} nüchtern sind {days} Entscheidungen, dich für dich selbst zu entscheiden.',
    'Ein neuer Morgen, eine neue Gelegenheit, dir etwas Gutes zu tun. Du hast bereits {days} nüchtern im Rücken.',
  ],
  fr: [
    "Bonjour ! Tu te réveilles sobre depuis {days} d'affilée. Ce n'est pas un hasard – c'est un choix que tu fais encore et encore. Bravo.",
    'Un nouveau jour, et tu l\'abordes sobre. {days} derrière toi, un nouveau devant. Prends-le heure par heure s\'il le faut.',
    "Bonjour. Pense au chemin parcouru : {days} sobre. Tu construis quelque chose de solide, un jour à la fois.",
    "Tu es là, sobre, depuis {days}. C'est une preuve de force, même les jours où ça n'y ressemble pas.",
    'Bonjour ! Sois fier de toi. {days} sobre, ce sont {days} décisions de te choisir toi-même.',
    "Un nouveau matin, une nouvelle occasion de faire quelque chose de bien pour toi. Tu as déjà {days} sobre derrière toi.",
  ],
  es: [
    '¡Buenos días! Te despiertas sobrio {days} seguidos. No es casualidad – es una decisión que tomas una y otra vez. Bien hecho.',
    'Un nuevo día, y lo afrontas sobrio. {days} detrás de ti, uno nuevo por delante. Tómalo hora a hora si hace falta.',
    'Buenos días. Piensa en lo lejos que has llegado: {days} sobrio. Estás construyendo algo fuerte, un día a la vez.',
    'Estás aquí, sobrio, {days} seguidos. Eso es una prueba de fuerza, incluso los días en que no lo parece.',
    '¡Buenos días! Siéntete orgulloso. {days} sobrio son {days} decisiones de elegirte a ti mismo.',
    'Una nueva mañana, una nueva oportunidad de hacer algo bueno por ti. Ya llevas {days} sobrio a tus espaldas.',
  ],
  it: [
    'Buongiorno! Ti svegli sobrio da {days} di fila. Non è un caso – è una scelta che fai ogni volta di nuovo. Bravo.',
    'Un nuovo giorno, e lo affronti da sobrio. {days} alle spalle, uno nuovo davanti. Prendilo ora per ora, se serve.',
    'Buongiorno. Pensa a quanta strada hai fatto: {days} sobrio. Stai costruendo qualcosa di forte, un giorno alla volta.',
    'Sei qui, sobrio, da {days}. È una prova di forza, anche nei giorni in cui non sembra.',
    'Buongiorno! Sii fiero di te. {days} sobrio sono {days} decisioni di scegliere te stesso.',
    'Una nuova mattina, una nuova occasione per fare qualcosa di buono per te. Hai già {days} sobrio alle spalle.',
  ],
};

export const eveningMessages: Record<Lang, string[]> = {
  sv: [
    'God kväll. Du klarade dagen nykter. {days} sammanlagt nu. Vila gott – du har förtjänat det.',
    'Ännu en dag i mål, nykter. {days}. Oavsett hur dagen var, så höll du kursen. Det räknas.',
    'God kväll. Ta ett ögonblick och kännas efter: du gjorde det igen idag. {days} nykter, och räknas fortfarande.',
    'Dagen är snart slut och du är kvar på din väg. {days} nykter. Imorgon fortsätter du därifrån.',
    'God kväll. Var snäll mot dig själv ikväll – du har hållit dig nykter i {days}. Det är ingen liten sak.',
    'En dag till avklarad. {days} nykter totalt. Sov gott, du gjorde bra ifrån dig idag.',
  ],
  en: [
    'Good evening. You made it through the day sober. {days} in total now. Rest well – you earned it.',
    "Another day in the books, sober. {days}. Whatever today looked like, you held the course. That counts.",
    'Good evening. Take a moment and notice: you did it again today. {days} sober, and still counting.',
    "The day is almost over and you're still on your path. {days} sober. Tomorrow you continue from here.",
    "Good evening. Be kind to yourself tonight – you've stayed sober for {days}. That's no small thing.",
    'Another day done. {days} sober in total. Sleep well, you did great today.',
  ],
  de: [
    'Guten Abend. Du hast den Tag nüchtern geschafft. Insgesamt {days}. Ruh dich gut aus – du hast es dir verdient.',
    'Noch ein Tag geschafft, nüchtern. {days}. Wie der Tag auch war, du bist auf Kurs geblieben. Das zählt.',
    'Guten Abend. Nimm dir einen Moment und spür nach: Du hast es heute wieder geschafft. {days} nüchtern, und es läuft weiter.',
    'Der Tag geht zu Ende und du bist immer noch auf deinem Weg. {days} nüchtern. Morgen machst du von hier aus weiter.',
    'Guten Abend. Sei heute Abend freundlich zu dir – du bist seit {days} nüchtern. Das ist keine Kleinigkeit.',
    'Noch ein Tag geschafft. Insgesamt {days} nüchtern. Schlaf gut, du hast das heute gut gemacht.',
  ],
  fr: [
    "Bonsoir. Tu as traversé la journée sobre. {days} au total maintenant. Repose-toi bien – tu l'as mérité.",
    "Encore une journée bouclée, sobre. {days}. Quelle qu'ait été la journée, tu as tenu le cap. Ça compte.",
    "Bonsoir. Prends un instant pour le sentir : tu l'as encore fait aujourd'hui. {days} sobre, et ça continue.",
    "La journée se termine et tu es toujours sur ton chemin. {days} sobre. Demain, tu repars d'ici.",
    "Bonsoir. Sois doux avec toi ce soir – tu es sobre depuis {days}. Ce n'est pas rien.",
    'Encore une journée de faite. {days} sobre au total. Dors bien, tu as bien tenu aujourd\'hui.',
  ],
  es: [
    'Buenas noches. Has pasado el día sobrio. {days} en total ahora. Descansa bien – te lo has ganado.',
    'Otro día completado, sobrio. {days}. Como haya sido el día, mantuviste el rumbo. Eso cuenta.',
    'Buenas noches. Tómate un momento y nótalo: lo has vuelto a hacer hoy. {days} sobrio, y sigue contando.',
    'El día se acaba y sigues en tu camino. {days} sobrio. Mañana continúas desde aquí.',
    'Buenas noches. Sé amable contigo esta noche – llevas {days} sobrio. No es poca cosa.',
    'Otro día hecho. {days} sobrio en total. Duerme bien, hoy lo has hecho muy bien.',
  ],
  it: [
    'Buonasera. Hai attraversato la giornata da sobrio. {days} in totale adesso. Riposa bene – te lo sei meritato.',
    'Un altro giorno portato a casa, da sobrio. {days}. Com\'è andata la giornata, hai tenuto la rotta. Questo conta.',
    'Buonasera. Prenditi un momento e sentilo: ce l\'hai fatta di nuovo oggi. {days} sobrio, e si continua.',
    'La giornata sta finendo e sei ancora sulla tua strada. {days} sobrio. Domani riparti da qui.',
    'Buonasera. Sii gentile con te stesso stasera – sei sobrio da {days}. Non è poco.',
    'Un altro giorno fatto. {days} sobrio in totale. Dormi bene, oggi te la sei cavata bene.',
  ],
};
