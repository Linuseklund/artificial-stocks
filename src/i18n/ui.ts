import type { Lang } from './languages';

export interface UiStrings {
  onboarding: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    whenLabel: string;
    whenHint: string;
    submit: string;
  };
  home: {
    greeting: (name: string) => string;
    greetingNoName: string;
    subtitle: string;
  };
  counter: {
    heading: string;
    days: (n: number) => string;
    hours: (n: number) => string;
    minutes: (n: number) => string;
    today: string;
  };
  dailyMessage: {
    morningLabel: string;
    eveningLabel: string;
    dayLabel: string;
    dayFallback: string;
  };
  urge: {
    buttonLabel: string;
    buttonHelper: string;
    modalTitle: string;
    modalSubtitle: string;
    reasonLabel: string;
    reasonAnother: string;
    suggestionLabel: string;
    suggestionAnother: string;
    dismiss: string;
    footer: string;
  };
  steps: {
    title: string;
    subtitle: string;
    progress: (done: number, total: number) => string;
    reflectionLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    statusDone: string;
    statusStarted: string;
    statusNotStarted: string;
    markStarted: string;
    markDone: string;
  };
  settings: {
    title: string;
    subtitle: string;
    nameLabel: string;
    whenLabel: string;
    whenHint: string;
    save: string;
    saved: string;
    languageLabel: string;
    notificationsTitle: string;
    notificationsEnable: string;
    notificationsDescription: string;
    notificationsBlocked: string;
    morningTimeLabel: string;
    eveningTimeLabel: string;
    sendTest: string;
    testSent: string;
    dangerTitle: string;
    dangerDescription: string;
    dangerButton: string;
    dangerConfirm: string;
    dangerCancel: string;
  };
  nav: {
    home: string;
    steps: string;
    settings: string;
  };
  notification: {
    morningTitle: string;
    morningBody: (streak: string) => string;
    eveningTitle: string;
    eveningBody: (streak: string) => string;
    testTitle: string;
    testBody: string;
  };
}

export const ui: Record<Lang, UiStrings> = {
  sv: {
    onboarding: {
      title: 'Välkommen',
      subtitle: 'Den här appen finns här för att stötta dig genom tolvstegsprogrammet, en dag i taget.',
      nameLabel: 'Vad heter du? (valfritt)',
      namePlaceholder: 'Ditt förnamn',
      whenLabel: 'Sedan när är du nykter?',
      whenHint: 'Om du börjar idag, lämna det som det är.',
      submit: 'Kom igång',
    },
    home: {
      greeting: (name) => `Hej, ${name}`,
      greetingNoName: 'Hej',
      subtitle: 'Bra att du är här idag.',
    },
    counter: {
      heading: 'Du har varit nykter i',
      days: (n) => (n === 1 ? 'dag' : 'dagar'),
      hours: (n) => (n === 1 ? 'timme' : 'timmar'),
      minutes: (n) => (n === 1 ? 'minut' : 'minuter'),
      today: 'idag',
    },
    dailyMessage: {
      morningLabel: 'God morgon',
      eveningLabel: 'God kväll',
      dayLabel: 'Idag',
      dayFallback: 'Du är mitt i din dag, {days} nykter. Fortsätt hålla i, ett ögonblick i taget.',
    },
    urge: {
      buttonLabel: 'Jag vill dricka',
      buttonHelper: 'Tryck här när suget kommer. Du får en anledning att stanna och ett förslag på vad du kan göra istället.',
      modalTitle: 'Du klarar den här stunden',
      modalSubtitle: 'Stanna kvar här i två minuter innan du gör något annat.',
      reasonLabel: 'Kom ihåg',
      reasonAnother: 'Visa en annan anledning',
      suggestionLabel: 'Gör det här istället',
      suggestionAnother: 'Föreslå något annat',
      dismiss: 'Jag mår bättre nu',
      footer: 'Om suget känns för starkt att hantera själv, ring en vän, din sponsor eller vården.',
    },
    steps: {
      title: 'Tolvstegsprogrammet',
      subtitle: 'Ta ett steg i taget, i din egen takt. Ingen dömer om det tar tid.',
      progress: (done, total) => `${done} av ${total} steg genomförda`,
      reflectionLabel: 'Till eftertanke',
      notesLabel: 'Dina anteckningar',
      notesPlaceholder: 'Skriv fritt här...',
      statusDone: 'Genomfört',
      statusStarted: 'Pågår',
      statusNotStarted: 'Ej påbörjat',
      markStarted: 'Pågår',
      markDone: 'Genomfört',
    },
    settings: {
      title: 'Inställningar',
      subtitle: 'Justera dina uppgifter när du behöver.',
      nameLabel: 'Namn',
      whenLabel: 'Nykter sedan',
      whenHint: 'Om du fått ett återfall kan du sätta ett nytt startdatum här – det är en del av vägen, inte ett misslyckande.',
      save: 'Spara',
      saved: 'Sparat',
      languageLabel: 'Språk',
      notificationsTitle: 'Notiser',
      notificationsEnable: 'Aktivera påminnelser',
      notificationsDescription: 'Få en notis varje morgon och kväll med uppmuntran, direkt från din webbläsare.',
      notificationsBlocked: 'Notiser är blockerade i webbläsaren. Ändra behörigheten i webbläsarens inställningar för att aktivera dem.',
      morningTimeLabel: 'Morgonpåminnelse',
      eveningTimeLabel: 'Kvällspåminnelse',
      sendTest: 'Skicka testnotis',
      testSent: 'Testnotis skickad',
      dangerTitle: 'Radera all data',
      dangerDescription: 'Tar bort din nykterhetstid, dina anteckningar och din stegframgång permanent från den här enheten.',
      dangerButton: 'Radera data',
      dangerConfirm: 'Ja, radera allt',
      dangerCancel: 'Avbryt',
    },
    nav: {
      home: 'Hem',
      steps: '12 steg',
      settings: 'Inställningar',
    },
    notification: {
      morningTitle: 'God morgon ☀️',
      morningBody: (streak) => `Du är nykter ${streak}. Bra jobbat – fortsätt så idag.`,
      eveningTitle: 'God kväll 🌙',
      eveningBody: (streak) => `Ännu en dag klar, ${streak} nykter totalt. Vila gott.`,
      testTitle: 'Testnotis',
      testBody: 'Om du ser den här funkar dina påminnelser.',
    },
  },
  en: {
    onboarding: {
      title: 'Welcome',
      subtitle: 'This app is here to support you through the twelve-step program, one day at a time.',
      nameLabel: "What's your name? (optional)",
      namePlaceholder: 'Your first name',
      whenLabel: 'Sober since when?',
      whenHint: 'If you are starting today, leave it as is.',
      submit: 'Get started',
    },
    home: {
      greeting: (name) => `Hi, ${name}`,
      greetingNoName: 'Hi',
      subtitle: "Good that you're here today.",
    },
    counter: {
      heading: "You've been sober for",
      days: (n) => (n === 1 ? 'day' : 'days'),
      hours: (n) => (n === 1 ? 'hour' : 'hours'),
      minutes: (n) => (n === 1 ? 'minute' : 'minutes'),
      today: 'today',
    },
    dailyMessage: {
      morningLabel: 'Good morning',
      eveningLabel: 'Good evening',
      dayLabel: 'Today',
      dayFallback: "You're in the middle of your day, {days} sober. Keep going, one moment at a time.",
    },
    urge: {
      buttonLabel: 'I want to drink',
      buttonHelper: "Tap here when the craving hits. You'll get a reason to stay and a suggestion for what to do instead.",
      modalTitle: 'You can get through this moment',
      modalSubtitle: 'Stay here for two minutes before you do anything else.',
      reasonLabel: 'Remember',
      reasonAnother: 'Show another reason',
      suggestionLabel: 'Do this instead',
      suggestionAnother: 'Suggest something else',
      dismiss: "I'm feeling better now",
      footer: 'If the craving feels too strong to handle alone, call a friend, your sponsor, or a helpline.',
    },
    steps: {
      title: 'The Twelve Steps',
      subtitle: "Take one step at a time, at your own pace. No one's judging if it takes time.",
      progress: (done, total) => `${done} of ${total} steps completed`,
      reflectionLabel: 'For reflection',
      notesLabel: 'Your notes',
      notesPlaceholder: 'Write freely here...',
      statusDone: 'Completed',
      statusStarted: 'In progress',
      statusNotStarted: 'Not started',
      markStarted: 'In progress',
      markDone: 'Completed',
    },
    settings: {
      title: 'Settings',
      subtitle: 'Adjust your details whenever you need to.',
      nameLabel: 'Name',
      whenLabel: 'Sober since',
      whenHint: "If you've had a relapse, you can set a new start date here — it's part of the journey, not a failure.",
      save: 'Save',
      saved: 'Saved',
      languageLabel: 'Language',
      notificationsTitle: 'Notifications',
      notificationsEnable: 'Enable reminders',
      notificationsDescription: 'Get a notification every morning and evening with encouragement, straight from your browser.',
      notificationsBlocked: 'Notifications are blocked in your browser. Change the permission in your browser settings to enable them.',
      morningTimeLabel: 'Morning reminder',
      eveningTimeLabel: 'Evening reminder',
      sendTest: 'Send test notification',
      testSent: 'Test notification sent',
      dangerTitle: 'Delete all data',
      dangerDescription: 'Permanently removes your sobriety time, notes, and step progress from this device.',
      dangerButton: 'Delete data',
      dangerConfirm: 'Yes, delete everything',
      dangerCancel: 'Cancel',
    },
    nav: {
      home: 'Home',
      steps: '12 steps',
      settings: 'Settings',
    },
    notification: {
      morningTitle: 'Good morning ☀️',
      morningBody: (streak) => `You're sober ${streak}. Great work — keep it up today.`,
      eveningTitle: 'Good evening 🌙',
      eveningBody: (streak) => `Another day done, ${streak} sober in total. Rest well.`,
      testTitle: 'Test notification',
      testBody: 'If you see this, your reminders are working.',
    },
  },
};
