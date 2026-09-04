import { durationSince, isMorning as checkMorning, isEvening as checkEvening } from '../lib/time';
import { formatStreakPhrase, pickForDay } from '../lib/format';
import { morningMessages, eveningMessages } from '../data/messages';
import { useI18n } from '../i18n/context';

interface Props {
  soberSince: string;
}

export default function DailyMessage({ soberSince }: Props) {
  const { t, lang } = useI18n();
  const now = new Date();
  const dayKey = now.toISOString().slice(0, 10);
  const duration = durationSince(soberSince, now);
  const streakPhrase = formatStreakPhrase(duration, t);

  const morning = checkMorning(now);
  const evening = checkEvening(now);
  const period = morning ? 'morning' : evening ? 'evening' : 'day';

  let template: string;
  let label: string;
  let emoji: string;

  if (period === 'morning') {
    template = pickForDay(morningMessages[lang], dayKey + '-morning');
    label = t.dailyMessage.morningLabel;
    emoji = '☀️';
  } else if (period === 'evening') {
    template = pickForDay(eveningMessages[lang], dayKey + '-evening');
    label = t.dailyMessage.eveningLabel;
    emoji = '🌙';
  } else {
    template = t.dailyMessage.dayFallback;
    label = t.dailyMessage.dayLabel;
    emoji = '🌤️';
  }

  const message = template.replace('{days}', streakPhrase);

  return (
    <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 px-5 py-4 flex gap-3 items-start">
      <span className="text-xl leading-none mt-0.5">{emoji}</span>
      <div>
        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-emerald-950 dark:text-emerald-100 text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
