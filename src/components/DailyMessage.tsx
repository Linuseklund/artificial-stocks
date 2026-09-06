import { durationSince, isMorning as checkMorning, isEvening as checkEvening } from '../lib/time';
import { formatStreakPhrase, pickForDay } from '../lib/format';
import { morningMessages, eveningMessages } from '../data/messages';
import { useI18n } from '../i18n/context';
import Icon, { type IconName } from './Icon';

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
  let icon: IconName;

  if (period === 'morning') {
    template = pickForDay(morningMessages[lang], dayKey + '-morning');
    label = t.dailyMessage.morningLabel;
    icon = 'sun';
  } else if (period === 'evening') {
    template = pickForDay(eveningMessages[lang], dayKey + '-evening');
    label = t.dailyMessage.eveningLabel;
    icon = 'moon';
  } else {
    template = t.dailyMessage.dayFallback;
    label = t.dailyMessage.dayLabel;
    icon = 'cloudSun';
  }

  const message = template.replace('{days}', streakPhrase);

  return (
    <div className="py-6">
      <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
        <Icon name={icon} className="w-4 h-4" />
        <p className="text-[13px]">{label}</p>
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 text-[15px] leading-relaxed mt-2">
        {message}
      </p>
    </div>
  );
}
