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
};
