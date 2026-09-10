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
    /** Unit label shown under the number in the counter. */
    days: (n: number) => string;
    /**
     * The same unit inside a running sentence ("{days} sober"). German needs a
     * separate form: dative "Tagen" after "seit" in the counter, nominative
     * "Tage" everywhere else.
     */
    daysPhrase: (n: number) => string;
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
  voice: {
    openButton: string;
    openHelper: string;
    title: string;
    subtitle: string;
    listenButton: string;
    listening: string;
    speaking: string;
    stop: string;
    calmingSession: string;
    youSaid: string;
    moodPrompt: string;
    repeat: string;
    close: string;
    micDenied: string;
    micFailed: string;
    micUnsupported: string;
    speechUnsupported: string;
    speechMuted: string;
    listenAloud: string;
    moods: {
      craving: string;
      stress: string;
      lonely: string;
      sad: string;
      angry: string;
      social: string;
      tired: string;
      celebrating: string;
      relapse: string;
      general: string;
    };
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
    voiceTitle: string;
    voiceEnable: string;
    voiceDescription: string;
    voiceUnsupported: string;
    voiceSpeedLabel: string;
    voiceSpeedSlow: string;
    voiceSpeedCalm: string;
    voiceSpeedNormal: string;
    voicePickLabel: string;
    voiceAuto: string;
    voiceQualityHint: string;
    voiceTest: string;
    voiceAutoSpeakUrge: string;
    shareTitle: string;
    shareDescription: string;
    shareButton: string;
    shareCopied: string;
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
      daysPhrase: (n) => (n === 1 ? 'dag' : 'dagar'),
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
    voice: {
      openButton: 'Prata med mig',
      openHelper: 'En lugn röst som lyssnar och pratar dig igenom stunden.',
      title: 'Prata med mig',
      subtitle: 'Berätta hur du känner dig, så svarar jag med lugn röst.',
      listenButton: 'Tryck och prata',
      listening: 'Jag lyssnar…',
      speaking: 'Talar…',
      stop: 'Stoppa',
      calmingSession: 'Lugnande andning',
      youSaid: 'Du sa',
      moodPrompt: 'Eller välj hur du känner dig',
      repeat: 'Säg igen',
      close: 'Stäng',
      micDenied: 'Mikrofonen är blockerad. Tillåt mikrofon i webbläsarens inställningar, eller välj en känsla nedan.',
      micFailed: 'Jag kunde inte höra dig. Försök igen, eller välj en känsla nedan.',
      micUnsupported: 'Taligenkänning stöds inte här – välj en känsla nedan istället.',
      speechUnsupported: 'Din webbläsare kan inte läsa upp text, så svaren visas i text istället.',
      speechMuted: 'Rösten är avstängd i inställningarna – svaren visas i text.',
      listenAloud: 'Lyssna',
      moods: {
        craving: 'Sug',
        stress: 'Stress',
        lonely: 'Ensam',
        sad: 'Ledsen',
        angry: 'Arg',
        social: 'Fest',
        tired: 'Trött',
        celebrating: 'Firar',
        relapse: 'Återfall',
        general: 'Vet inte',
      },
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
      voiceTitle: 'Röst',
      voiceEnable: 'Läs upp med röst',
      voiceDescription: 'En lugn röst läser upp råden. Allt sker i din webbläsare – inget skickas någonstans.',
      voiceUnsupported: 'Din webbläsare stödjer inte uppläsning, så råden visas bara i text.',
      voiceSpeedLabel: 'Talhastighet',
      voiceSpeedSlow: 'Långsam',
      voiceSpeedCalm: 'Lugn',
      voiceSpeedNormal: 'Normal',
      voicePickLabel: 'Röst',
      voiceAuto: 'Välj automatiskt',
      voiceQualityHint: 'Låter rösten mekanisk? De flesta system har mänskligare röster att ladda ner. iPhone: Inställningar → Tillgänglighet → Talat innehåll → Röster. Android: Inställningar → Tillgänglighet → Text till tal.',
      voiceTest: 'Testa rösten',
      voiceAutoSpeakUrge: 'Läs upp automatiskt när jag trycker på sugknappen',
      shareTitle: 'Dela appen',
      shareDescription: 'Appen är gratis och kräver inget konto. Skicka länken till någon som kan ha nytta av den.',
      shareButton: 'Dela länken',
      shareCopied: 'Länken är kopierad',
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
      daysPhrase: (n) => (n === 1 ? 'day' : 'days'),
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
    voice: {
      openButton: 'Talk to me',
      openHelper: 'A calm voice that listens and talks you through the moment.',
      title: 'Talk to me',
      subtitle: 'Tell me how you are feeling, and I will answer in a calm voice.',
      listenButton: 'Tap and speak',
      listening: 'I am listening…',
      speaking: 'Speaking…',
      stop: 'Stop',
      calmingSession: 'Calming breath',
      youSaid: 'You said',
      moodPrompt: 'Or pick how you feel',
      repeat: 'Say it again',
      close: 'Close',
      micDenied: 'The microphone is blocked. Allow microphone access in your browser settings, or pick a feeling below.',
      micFailed: "I couldn't hear you. Try again, or pick a feeling below.",
      micUnsupported: 'Speech recognition is not supported here – pick a feeling below instead.',
      speechUnsupported: 'Your browser cannot read text aloud, so the answers are shown as text instead.',
      speechMuted: 'The voice is turned off in settings – answers are shown as text.',
      listenAloud: 'Listen',
      moods: {
        craving: 'Craving',
        stress: 'Stress',
        lonely: 'Lonely',
        sad: 'Sad',
        angry: 'Angry',
        social: 'Party',
        tired: 'Tired',
        celebrating: 'Celebrating',
        relapse: 'Relapse',
        general: 'Not sure',
      },
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
      voiceTitle: 'Voice',
      voiceEnable: 'Read aloud with voice',
      voiceDescription: 'A calm voice reads the advice aloud. Everything runs in your browser – nothing is sent anywhere.',
      voiceUnsupported: 'Your browser does not support speech, so advice is shown as text only.',
      voiceSpeedLabel: 'Speaking speed',
      voiceSpeedSlow: 'Slow',
      voiceSpeedCalm: 'Calm',
      voiceSpeedNormal: 'Normal',
      voicePickLabel: 'Voice',
      voiceAuto: 'Choose automatically',
      voiceQualityHint: 'Does the voice sound robotic? Most systems have more human voices available to download. iPhone: Settings → Accessibility → Spoken Content → Voices. Android: Settings → Accessibility → Text-to-speech.',
      voiceTest: 'Test the voice',
      voiceAutoSpeakUrge: 'Read aloud automatically when I tap the craving button',
      shareTitle: 'Share the app',
      shareDescription: 'The app is free and needs no account. Send the link to someone it could help.',
      shareButton: 'Share the link',
      shareCopied: 'Link copied',
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
  de: {
    onboarding: {
      title: 'Willkommen',
      subtitle: 'Diese App ist da, um dich durch das Zwölf-Schritte-Programm zu begleiten, einen Tag nach dem anderen.',
      nameLabel: 'Wie heißt du? (optional)',
      namePlaceholder: 'Dein Vorname',
      whenLabel: 'Seit wann bist du nüchtern?',
      whenHint: 'Wenn du heute anfängst, lass es einfach so stehen.',
      submit: 'Los geht’s',
    },
    home: {
      greeting: (name) => `Hallo, ${name}`,
      greetingNoName: 'Hallo',
      subtitle: 'Schön, dass du heute hier bist.',
    },
    counter: {
      heading: 'Du bist nüchtern seit',
      days: (n) => (n === 1 ? 'Tag' : 'Tagen'),
      daysPhrase: (n) => (n === 1 ? 'Tag' : 'Tage'),
      hours: (n) => (n === 1 ? 'Stunde' : 'Stunden'),
      minutes: (n) => (n === 1 ? 'Minute' : 'Minuten'),
      today: 'seit heute',
    },
    dailyMessage: {
      morningLabel: 'Guten Morgen',
      eveningLabel: 'Guten Abend',
      dayLabel: 'Heute',
      dayFallback: 'Du bist mitten im Tag, {days} nüchtern. Halt weiter durch, einen Moment nach dem anderen.',
    },
    urge: {
      buttonLabel: 'Ich will trinken',
      buttonHelper: 'Tipp hier, wenn das Verlangen kommt. Du bekommst einen Grund zu bleiben und einen Vorschlag, was du stattdessen tun kannst.',
      modalTitle: 'Du schaffst diesen Moment',
      modalSubtitle: 'Bleib zwei Minuten hier, bevor du etwas anderes tust.',
      reasonLabel: 'Denk daran',
      reasonAnother: 'Anderen Grund zeigen',
      suggestionLabel: 'Mach stattdessen das hier',
      suggestionAnother: 'Etwas anderes vorschlagen',
      dismiss: 'Mir geht es jetzt besser',
      footer: 'Wenn das Verlangen zu stark ist, um es allein zu bewältigen, ruf eine Freundin, deinen Sponsor oder eine Beratungsstelle an.',
    },
    voice: {
      openButton: 'Sprich mit mir',
      openHelper: 'Eine ruhige Stimme, die zuhört und dich durch den Moment begleitet.',
      title: 'Sprich mit mir',
      subtitle: 'Erzähl mir, wie du dich fühlst, und ich antworte mit ruhiger Stimme.',
      listenButton: 'Tippen und sprechen',
      listening: 'Ich höre zu …',
      speaking: 'Spricht …',
      stop: 'Stopp',
      calmingSession: 'Beruhigendes Atmen',
      youSaid: 'Du hast gesagt',
      moodPrompt: 'Oder wähle, wie du dich fühlst',
      repeat: 'Noch einmal sagen',
      close: 'Schließen',
      micDenied: 'Das Mikrofon ist blockiert. Erlaube den Mikrofonzugriff in den Browsereinstellungen, oder wähle unten ein Gefühl.',
      micFailed: 'Ich konnte dich nicht hören. Versuch es noch einmal, oder wähle unten ein Gefühl.',
      micUnsupported: 'Spracherkennung wird hier nicht unterstützt – wähle stattdessen unten ein Gefühl.',
      speechUnsupported: 'Dein Browser kann keinen Text vorlesen, deshalb erscheinen die Antworten als Text.',
      speechMuted: 'Die Stimme ist in den Einstellungen ausgeschaltet – die Antworten erscheinen als Text.',
      listenAloud: 'Anhören',
      moods: {
        craving: 'Verlangen',
        stress: 'Stress',
        lonely: 'Einsam',
        sad: 'Traurig',
        angry: 'Wütend',
        social: 'Feier',
        tired: 'Müde',
        celebrating: 'Feiere',
        relapse: 'Rückfall',
        general: 'Weiß nicht',
      },
    },
    steps: {
      title: 'Das Zwölf-Schritte-Programm',
      subtitle: 'Geh einen Schritt nach dem anderen, in deinem Tempo. Niemand urteilt, wenn es dauert.',
      progress: (done, total) => `${done} von ${total} Schritten abgeschlossen`,
      reflectionLabel: 'Zum Nachdenken',
      notesLabel: 'Deine Notizen',
      notesPlaceholder: 'Schreib hier frei …',
      statusDone: 'Abgeschlossen',
      statusStarted: 'Läuft',
      statusNotStarted: 'Nicht begonnen',
      markStarted: 'Läuft',
      markDone: 'Abgeschlossen',
    },
    settings: {
      title: 'Einstellungen',
      subtitle: 'Pass deine Angaben an, wann immer du willst.',
      nameLabel: 'Name',
      whenLabel: 'Nüchtern seit',
      whenHint: 'Wenn du einen Rückfall hattest, kannst du hier ein neues Startdatum setzen – das gehört zum Weg dazu, es ist kein Scheitern.',
      save: 'Speichern',
      saved: 'Gespeichert',
      languageLabel: 'Sprache',
      notificationsTitle: 'Benachrichtigungen',
      notificationsEnable: 'Erinnerungen aktivieren',
      notificationsDescription: 'Bekomme morgens und abends eine Nachricht mit Zuspruch, direkt aus deinem Browser.',
      notificationsBlocked: 'Benachrichtigungen sind im Browser blockiert. Ändere die Berechtigung in den Browsereinstellungen, um sie zu aktivieren.',
      morningTimeLabel: 'Morgens',
      eveningTimeLabel: 'Abends',
      sendTest: 'Testbenachrichtigung senden',
      testSent: 'Testbenachrichtigung gesendet',
      voiceTitle: 'Stimme',
      voiceEnable: 'Mit Stimme vorlesen',
      voiceDescription: 'Eine ruhige Stimme liest die Ratschläge vor. Alles passiert in deinem Browser – nichts wird irgendwohin gesendet.',
      voiceUnsupported: 'Dein Browser unterstützt keine Sprachausgabe, deshalb erscheinen die Ratschläge nur als Text.',
      voiceSpeedLabel: 'Sprechtempo',
      voiceSpeedSlow: 'Langsam',
      voiceSpeedCalm: 'Ruhig',
      voiceSpeedNormal: 'Normal',
      voicePickLabel: 'Stimme',
      voiceAuto: 'Automatisch wählen',
      voiceQualityHint: 'Klingt die Stimme mechanisch? Die meisten Systeme haben natürlichere Stimmen zum Herunterladen. iPhone: Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen. Android: Einstellungen → Bedienungshilfen → Text-in-Sprache.',
      voiceTest: 'Stimme testen',
      voiceAutoSpeakUrge: 'Automatisch vorlesen, wenn ich auf den Verlangen-Knopf tippe',
      shareTitle: 'App teilen',
      shareDescription: 'Die App ist kostenlos und braucht kein Konto. Schick den Link an jemanden, dem sie helfen könnte.',
      shareButton: 'Link teilen',
      shareCopied: 'Link kopiert',
      dangerTitle: 'Alle Daten löschen',
      dangerDescription: 'Entfernt deine nüchterne Zeit, deine Notizen und deinen Fortschritt dauerhaft von diesem Gerät.',
      dangerButton: 'Daten löschen',
      dangerConfirm: 'Ja, alles löschen',
      dangerCancel: 'Abbrechen',
    },
    nav: {
      home: 'Start',
      steps: '12 Schritte',
      settings: 'Einstellungen',
    },
    notification: {
      morningTitle: 'Guten Morgen ☀️',
      morningBody: (streak) => `Du bist ${streak} nüchtern. Gut gemacht – bleib heute dran.`,
      eveningTitle: 'Guten Abend 🌙',
      eveningBody: (streak) => `Noch ein Tag geschafft, insgesamt ${streak} nüchtern. Ruh dich gut aus.`,
      testTitle: 'Testbenachrichtigung',
      testBody: 'Wenn du das siehst, funktionieren deine Erinnerungen.',
    },
  },
  fr: {
    onboarding: {
      title: 'Bienvenue',
      subtitle: 'Cette application est là pour t’accompagner à travers le programme en douze étapes, un jour à la fois.',
      nameLabel: 'Comment t’appelles-tu ? (facultatif)',
      namePlaceholder: 'Ton prénom',
      whenLabel: 'Sobre depuis quand ?',
      whenHint: 'Si tu commences aujourd’hui, laisse tel quel.',
      submit: 'Commencer',
    },
    home: {
      greeting: (name) => `Bonjour, ${name}`,
      greetingNoName: 'Bonjour',
      subtitle: 'Content que tu sois là aujourd’hui.',
    },
    counter: {
      heading: 'Tu es sobre depuis',
      days: (n) => (n === 1 ? 'jour' : 'jours'),
      daysPhrase: (n) => (n === 1 ? 'jour' : 'jours'),
      hours: (n) => (n === 1 ? 'heure' : 'heures'),
      minutes: (n) => (n === 1 ? 'minute' : 'minutes'),
      today: 'aujourd’hui',
    },
    dailyMessage: {
      morningLabel: 'Bonjour',
      eveningLabel: 'Bonsoir',
      dayLabel: 'Aujourd’hui',
      dayFallback: 'Tu es en pleine journée, sobre depuis {days}. Continue, un moment à la fois.',
    },
    urge: {
      buttonLabel: 'J’ai envie de boire',
      buttonHelper: 'Appuie ici quand l’envie arrive. Tu recevras une raison de tenir et une idée de ce que tu peux faire à la place.',
      modalTitle: 'Tu peux traverser ce moment',
      modalSubtitle: 'Reste ici deux minutes avant de faire quoi que ce soit d’autre.',
      reasonLabel: 'Souviens-toi',
      reasonAnother: 'Montrer une autre raison',
      suggestionLabel: 'Fais plutôt ceci',
      suggestionAnother: 'Proposer autre chose',
      dismiss: 'Je me sens mieux maintenant',
      footer: 'Si l’envie est trop forte à gérer seul, appelle un ami, ton parrain ou une ligne d’écoute.',
    },
    voice: {
      openButton: 'Parle-moi',
      openHelper: 'Une voix calme qui écoute et t’accompagne à travers le moment.',
      title: 'Parle-moi',
      subtitle: 'Dis-moi comment tu te sens, et je te réponds d’une voix calme.',
      listenButton: 'Appuie et parle',
      listening: 'Je t’écoute…',
      speaking: 'Parle…',
      stop: 'Arrêter',
      calmingSession: 'Respiration apaisante',
      youSaid: 'Tu as dit',
      moodPrompt: 'Ou choisis comment tu te sens',
      repeat: 'Redis-le',
      close: 'Fermer',
      micDenied: 'Le micro est bloqué. Autorise le microphone dans les réglages du navigateur, ou choisis un ressenti ci-dessous.',
      micFailed: 'Je n’ai pas réussi à t’entendre. Réessaie, ou choisis un ressenti ci-dessous.',
      micUnsupported: 'La reconnaissance vocale n’est pas prise en charge ici – choisis plutôt un ressenti ci-dessous.',
      speechUnsupported: 'Ton navigateur ne peut pas lire le texte à voix haute, les réponses s’affichent donc en texte.',
      speechMuted: 'La voix est désactivée dans les réglages – les réponses s’affichent en texte.',
      listenAloud: 'Écouter',
      moods: {
        craving: 'Envie',
        stress: 'Stress',
        lonely: 'Seul',
        sad: 'Triste',
        angry: 'En colère',
        social: 'Fête',
        tired: 'Fatigué',
        celebrating: 'Je fête',
        relapse: 'Rechute',
        general: 'Je ne sais pas',
      },
    },
    steps: {
      title: 'Le programme en douze étapes',
      subtitle: 'Avance une étape à la fois, à ton rythme. Personne ne juge si ça prend du temps.',
      progress: (done, total) => `${done} étapes sur ${total} terminées`,
      reflectionLabel: 'À méditer',
      notesLabel: 'Tes notes',
      notesPlaceholder: 'Écris librement ici…',
      statusDone: 'Terminée',
      statusStarted: 'En cours',
      statusNotStarted: 'Pas commencée',
      markStarted: 'En cours',
      markDone: 'Terminée',
    },
    settings: {
      title: 'Réglages',
      subtitle: 'Ajuste tes informations quand tu en as besoin.',
      nameLabel: 'Nom',
      whenLabel: 'Sobre depuis',
      whenHint: 'Si tu as eu une rechute, tu peux fixer une nouvelle date de départ ici – ça fait partie du chemin, ce n’est pas un échec.',
      save: 'Enregistrer',
      saved: 'Enregistré',
      languageLabel: 'Langue',
      notificationsTitle: 'Notifications',
      notificationsEnable: 'Activer les rappels',
      notificationsDescription: 'Reçois un message d’encouragement chaque matin et chaque soir, directement depuis ton navigateur.',
      notificationsBlocked: 'Les notifications sont bloquées dans le navigateur. Modifie l’autorisation dans les réglages pour les activer.',
      morningTimeLabel: 'Rappel du matin',
      eveningTimeLabel: 'Rappel du soir',
      sendTest: 'Envoyer une notification test',
      testSent: 'Notification test envoyée',
      voiceTitle: 'Voix',
      voiceEnable: 'Lire à voix haute',
      voiceDescription: 'Une voix calme lit les conseils. Tout se passe dans ton navigateur – rien n’est envoyé nulle part.',
      voiceUnsupported: 'Ton navigateur ne prend pas en charge la synthèse vocale, les conseils s’affichent donc en texte seulement.',
      voiceSpeedLabel: 'Vitesse de parole',
      voiceSpeedSlow: 'Lente',
      voiceSpeedCalm: 'Calme',
      voiceSpeedNormal: 'Normale',
      voicePickLabel: 'Voix',
      voiceAuto: 'Choisir automatiquement',
      voiceQualityHint: 'La voix sonne mécanique ? La plupart des systèmes proposent des voix plus humaines à télécharger. iPhone : Réglages → Accessibilité → Contenu énoncé → Voix. Android : Paramètres → Accessibilité → Synthèse vocale.',
      voiceTest: 'Tester la voix',
      voiceAutoSpeakUrge: 'Lire automatiquement quand j’appuie sur le bouton d’envie',
      shareTitle: 'Partager l\'application',
      shareDescription: 'L\'application est gratuite et ne demande aucun compte. Envoyez le lien à quelqu\'un que cela pourrait aider.',
      shareButton: 'Partager le lien',
      shareCopied: 'Lien copié',
      dangerTitle: 'Supprimer toutes les données',
      dangerDescription: 'Supprime définitivement de cet appareil ton temps de sobriété, tes notes et ta progression.',
      dangerButton: 'Supprimer les données',
      dangerConfirm: 'Oui, tout supprimer',
      dangerCancel: 'Annuler',
    },
    nav: {
      home: 'Accueil',
      steps: '12 étapes',
      settings: 'Réglages',
    },
    notification: {
      morningTitle: 'Bonjour ☀️',
      morningBody: (streak) => `Tu es sobre depuis ${streak}. Bravo – continue comme ça aujourd’hui.`,
      eveningTitle: 'Bonsoir 🌙',
      eveningBody: (streak) => `Encore une journée de faite, ${streak} sobre au total. Repose-toi bien.`,
      testTitle: 'Notification test',
      testBody: 'Si tu vois ceci, tes rappels fonctionnent.',
    },
  },
  es: {
    onboarding: {
      title: 'Bienvenido',
      subtitle: 'Esta aplicación está aquí para acompañarte a través del programa de doce pasos, un día a la vez.',
      nameLabel: '¿Cómo te llamas? (opcional)',
      namePlaceholder: 'Tu nombre',
      whenLabel: '¿Desde cuándo estás sobrio?',
      whenHint: 'Si empiezas hoy, déjalo como está.',
      submit: 'Empezar',
    },
    home: {
      greeting: (name) => `Hola, ${name}`,
      greetingNoName: 'Hola',
      subtitle: 'Qué bien que estés aquí hoy.',
    },
    counter: {
      heading: 'Llevas sobrio',
      days: (n) => (n === 1 ? 'día' : 'días'),
      daysPhrase: (n) => (n === 1 ? 'día' : 'días'),
      hours: (n) => (n === 1 ? 'hora' : 'horas'),
      minutes: (n) => (n === 1 ? 'minuto' : 'minutos'),
      today: 'desde hoy',
    },
    dailyMessage: {
      morningLabel: 'Buenos días',
      eveningLabel: 'Buenas noches',
      dayLabel: 'Hoy',
      dayFallback: 'Estás en mitad del día, {days} sobrio. Sigue aguantando, un momento a la vez.',
    },
    urge: {
      buttonLabel: 'Quiero beber',
      buttonHelper: 'Pulsa aquí cuando lleguen las ganas. Recibirás una razón para aguantar y una idea de qué hacer en su lugar.',
      modalTitle: 'Puedes superar este momento',
      modalSubtitle: 'Quédate aquí dos minutos antes de hacer cualquier otra cosa.',
      reasonLabel: 'Recuerda',
      reasonAnother: 'Ver otra razón',
      suggestionLabel: 'Haz esto en su lugar',
      suggestionAnother: 'Sugerir otra cosa',
      dismiss: 'Ya me siento mejor',
      footer: 'Si las ganas son demasiado fuertes para manejarlas solo, llama a un amigo, a tu padrino o a un servicio de ayuda.',
    },
    voice: {
      openButton: 'Habla conmigo',
      openHelper: 'Una voz tranquila que escucha y te acompaña en el momento.',
      title: 'Habla conmigo',
      subtitle: 'Cuéntame cómo te sientes y te respondo con voz tranquila.',
      listenButton: 'Pulsa y habla',
      listening: 'Te escucho…',
      speaking: 'Hablando…',
      stop: 'Parar',
      calmingSession: 'Respiración calmante',
      youSaid: 'Has dicho',
      moodPrompt: 'O elige cómo te sientes',
      repeat: 'Dilo otra vez',
      close: 'Cerrar',
      micDenied: 'El micrófono está bloqueado. Permite el micrófono en los ajustes del navegador, o elige una emoción abajo.',
      micFailed: 'No he podido oírte. Inténtalo otra vez, o elige una emoción abajo.',
      micUnsupported: 'El reconocimiento de voz no funciona aquí – elige una emoción abajo en su lugar.',
      speechUnsupported: 'Tu navegador no puede leer texto en voz alta, así que las respuestas se muestran como texto.',
      speechMuted: 'La voz está desactivada en los ajustes – las respuestas se muestran como texto.',
      listenAloud: 'Escuchar',
      moods: {
        craving: 'Ganas',
        stress: 'Estrés',
        lonely: 'Solo',
        sad: 'Triste',
        angry: 'Enfadado',
        social: 'Fiesta',
        tired: 'Cansado',
        celebrating: 'Celebro',
        relapse: 'Recaída',
        general: 'No sé',
      },
    },
    steps: {
      title: 'El programa de doce pasos',
      subtitle: 'Ve paso a paso, a tu ritmo. Nadie juzga si lleva tiempo.',
      progress: (done, total) => `${done} de ${total} pasos completados`,
      reflectionLabel: 'Para reflexionar',
      notesLabel: 'Tus notas',
      notesPlaceholder: 'Escribe libremente aquí…',
      statusDone: 'Completado',
      statusStarted: 'En curso',
      statusNotStarted: 'Sin empezar',
      markStarted: 'En curso',
      markDone: 'Completado',
    },
    settings: {
      title: 'Ajustes',
      subtitle: 'Cambia tus datos cuando lo necesites.',
      nameLabel: 'Nombre',
      whenLabel: 'Sobrio desde',
      whenHint: 'Si has tenido una recaída, puedes poner una nueva fecha de inicio aquí – forma parte del camino, no es un fracaso.',
      save: 'Guardar',
      saved: 'Guardado',
      languageLabel: 'Idioma',
      notificationsTitle: 'Notificaciones',
      notificationsEnable: 'Activar recordatorios',
      notificationsDescription: 'Recibe un mensaje de ánimo cada mañana y cada noche, directamente desde tu navegador.',
      notificationsBlocked: 'Las notificaciones están bloqueadas en el navegador. Cambia el permiso en los ajustes para activarlas.',
      morningTimeLabel: 'Recordatorio de la mañana',
      eveningTimeLabel: 'Recordatorio de la noche',
      sendTest: 'Enviar notificación de prueba',
      testSent: 'Notificación de prueba enviada',
      voiceTitle: 'Voz',
      voiceEnable: 'Leer en voz alta',
      voiceDescription: 'Una voz tranquila lee los consejos. Todo ocurre en tu navegador – no se envía nada a ningún sitio.',
      voiceUnsupported: 'Tu navegador no admite la lectura en voz alta, así que los consejos se muestran solo como texto.',
      voiceSpeedLabel: 'Velocidad del habla',
      voiceSpeedSlow: 'Lenta',
      voiceSpeedCalm: 'Tranquila',
      voiceSpeedNormal: 'Normal',
      voicePickLabel: 'Voz',
      voiceAuto: 'Elegir automáticamente',
      voiceQualityHint: '¿La voz suena robótica? La mayoría de los sistemas tienen voces más humanas para descargar. iPhone: Ajustes → Accesibilidad → Contenido hablado → Voces. Android: Ajustes → Accesibilidad → Texto a voz.',
      voiceTest: 'Probar la voz',
      voiceAutoSpeakUrge: 'Leer automáticamente cuando pulse el botón de ganas',
      shareTitle: 'Compartir la aplicación',
      shareDescription: 'La aplicación es gratuita y no requiere cuenta. Envía el enlace a alguien a quien pueda ayudar.',
      shareButton: 'Compartir el enlace',
      shareCopied: 'Enlace copiado',
      dangerTitle: 'Borrar todos los datos',
      dangerDescription: 'Elimina de forma permanente de este dispositivo tu tiempo sobrio, tus notas y tu progreso.',
      dangerButton: 'Borrar datos',
      dangerConfirm: 'Sí, borrar todo',
      dangerCancel: 'Cancelar',
    },
    nav: {
      home: 'Inicio',
      steps: '12 pasos',
      settings: 'Ajustes',
    },
    notification: {
      morningTitle: 'Buenos días ☀️',
      morningBody: (streak) => `Llevas ${streak} sobrio. Muy bien – sigue así hoy.`,
      eveningTitle: 'Buenas noches 🌙',
      eveningBody: (streak) => `Otro día hecho, ${streak} sobrio en total. Descansa bien.`,
      testTitle: 'Notificación de prueba',
      testBody: 'Si ves esto, tus recordatorios funcionan.',
    },
  },
  it: {
    onboarding: {
      title: 'Benvenuto',
      subtitle: 'Questa app è qui per accompagnarti nel programma dei dodici passi, un giorno alla volta.',
      nameLabel: 'Come ti chiami? (facoltativo)',
      namePlaceholder: 'Il tuo nome',
      whenLabel: 'Da quando sei sobrio?',
      whenHint: 'Se inizi oggi, lascia pure com’è.',
      submit: 'Iniziamo',
    },
    home: {
      greeting: (name) => `Ciao, ${name}`,
      greetingNoName: 'Ciao',
      subtitle: 'Bello che tu sia qui oggi.',
    },
    counter: {
      heading: 'Sei sobrio da',
      days: (n) => (n === 1 ? 'giorno' : 'giorni'),
      daysPhrase: (n) => (n === 1 ? 'giorno' : 'giorni'),
      hours: (n) => (n === 1 ? 'ora' : 'ore'),
      minutes: (n) => (n === 1 ? 'minuto' : 'minuti'),
      today: 'da oggi',
    },
    dailyMessage: {
      morningLabel: 'Buongiorno',
      eveningLabel: 'Buonasera',
      dayLabel: 'Oggi',
      dayFallback: 'Sei nel mezzo della giornata, sobrio da {days}. Continua a tenere duro, un momento alla volta.',
    },
    urge: {
      buttonLabel: 'Voglio bere',
      buttonHelper: 'Tocca qui quando arriva il desiderio. Riceverai un motivo per resistere e un’idea di cosa fare invece.',
      modalTitle: 'Ce la fai a superare questo momento',
      modalSubtitle: 'Resta qui due minuti prima di fare qualsiasi altra cosa.',
      reasonLabel: 'Ricorda',
      reasonAnother: 'Mostra un altro motivo',
      suggestionLabel: 'Fai questo invece',
      suggestionAnother: 'Proponi qualcos’altro',
      dismiss: 'Adesso sto meglio',
      footer: 'Se il desiderio è troppo forte da gestire da solo, chiama un amico, il tuo sponsor o un servizio di ascolto.',
    },
    voice: {
      openButton: 'Parla con me',
      openHelper: 'Una voce calma che ascolta e ti accompagna attraverso il momento.',
      title: 'Parla con me',
      subtitle: 'Raccontami come ti senti, e ti rispondo con voce calma.',
      listenButton: 'Tocca e parla',
      listening: 'Ti ascolto…',
      speaking: 'Sto parlando…',
      stop: 'Ferma',
      calmingSession: 'Respirazione calmante',
      youSaid: 'Hai detto',
      moodPrompt: 'Oppure scegli come ti senti',
      repeat: 'Ripetilo',
      close: 'Chiudi',
      micDenied: 'Il microfono è bloccato. Consenti il microfono nelle impostazioni del browser, o scegli un’emozione qui sotto.',
      micFailed: 'Non sono riuscito a sentirti. Riprova, oppure scegli un’emozione qui sotto.',
      micUnsupported: 'Il riconoscimento vocale non è supportato qui – scegli invece un’emozione qui sotto.',
      speechUnsupported: 'Il tuo browser non può leggere il testo ad alta voce, quindi le risposte compaiono come testo.',
      speechMuted: 'La voce è disattivata nelle impostazioni – le risposte compaiono come testo.',
      listenAloud: 'Ascolta',
      moods: {
        craving: 'Desiderio',
        stress: 'Stress',
        lonely: 'Solo',
        sad: 'Triste',
        angry: 'Arrabbiato',
        social: 'Festa',
        tired: 'Stanco',
        celebrating: 'Festeggio',
        relapse: 'Ricaduta',
        general: 'Non so',
      },
    },
    steps: {
      title: 'Il programma dei dodici passi',
      subtitle: 'Fai un passo alla volta, con i tuoi tempi. Nessuno giudica se ci vuole tempo.',
      progress: (done, total) => `${done} passi su ${total} completati`,
      reflectionLabel: 'Da riflettere',
      notesLabel: 'I tuoi appunti',
      notesPlaceholder: 'Scrivi liberamente qui…',
      statusDone: 'Completato',
      statusStarted: 'In corso',
      statusNotStarted: 'Non iniziato',
      markStarted: 'In corso',
      markDone: 'Completato',
    },
    settings: {
      title: 'Impostazioni',
      subtitle: 'Modifica i tuoi dati quando ne hai bisogno.',
      nameLabel: 'Nome',
      whenLabel: 'Sobrio da',
      whenHint: 'Se hai avuto una ricaduta, puoi impostare qui una nuova data di partenza – fa parte del percorso, non è un fallimento.',
      save: 'Salva',
      saved: 'Salvato',
      languageLabel: 'Lingua',
      notificationsTitle: 'Notifiche',
      notificationsEnable: 'Attiva i promemoria',
      notificationsDescription: 'Ricevi un messaggio di incoraggiamento ogni mattina e ogni sera, direttamente dal tuo browser.',
      notificationsBlocked: 'Le notifiche sono bloccate nel browser. Cambia l’autorizzazione nelle impostazioni per attivarle.',
      morningTimeLabel: 'Promemoria del mattino',
      eveningTimeLabel: 'Promemoria della sera',
      sendTest: 'Invia notifica di prova',
      testSent: 'Notifica di prova inviata',
      voiceTitle: 'Voce',
      voiceEnable: 'Leggi ad alta voce',
      voiceDescription: 'Una voce calma legge i consigli. Tutto avviene nel tuo browser – non viene inviato nulla da nessuna parte.',
      voiceUnsupported: 'Il tuo browser non supporta la sintesi vocale, quindi i consigli compaiono solo come testo.',
      voiceSpeedLabel: 'Velocità del parlato',
      voiceSpeedSlow: 'Lenta',
      voiceSpeedCalm: 'Calma',
      voiceSpeedNormal: 'Normale',
      voicePickLabel: 'Voce',
      voiceAuto: 'Scegli automaticamente',
      voiceQualityHint: 'La voce suona meccanica? La maggior parte dei sistemi ha voci più umane da scaricare. iPhone: Impostazioni → Accessibilità → Contenuto pronunciato → Voci. Android: Impostazioni → Accessibilità → Sintesi vocale.',
      voiceTest: 'Prova la voce',
      voiceAutoSpeakUrge: 'Leggi automaticamente quando tocco il pulsante del desiderio',
      shareTitle: 'Condividi l\'app',
      shareDescription: 'L\'app è gratuita e non richiede alcun account. Manda il link a qualcuno a cui può servire.',
      shareButton: 'Condividi il link',
      shareCopied: 'Link copiato',
      dangerTitle: 'Elimina tutti i dati',
      dangerDescription: 'Rimuove definitivamente da questo dispositivo il tuo tempo da sobrio, i tuoi appunti e i tuoi progressi.',
      dangerButton: 'Elimina i dati',
      dangerConfirm: 'Sì, elimina tutto',
      dangerCancel: 'Annulla',
    },
    nav: {
      home: 'Home',
      steps: '12 passi',
      settings: 'Impostazioni',
    },
    notification: {
      morningTitle: 'Buongiorno ☀️',
      morningBody: (streak) => `Sei sobrio da ${streak}. Bravo – continua così oggi.`,
      eveningTitle: 'Buonasera 🌙',
      eveningBody: (streak) => `Un altro giorno fatto, ${streak} sobrio in totale. Riposa bene.`,
      testTitle: 'Notifica di prova',
      testBody: 'Se vedi questo, i tuoi promemoria funzionano.',
    },
  },
};
