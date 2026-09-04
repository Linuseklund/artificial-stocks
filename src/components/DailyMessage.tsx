import { durationSince } from '../lib/time';
import { formatStreakPhrase, pickForDay } from '../lib/format';
import { morningMessages, eveningMessages } from '../data/messages';

interface Props {
  soberSince: string;
}

export default function DailyMessage({ soberSince }: Props) {
  const now = new Date();
  const hour = now.getHours();
  const dayKey = now.toISOString().slice(0, 10);
  const duration = durationSince(soberSince, now);
  const streakPhrase = formatStreakPhrase(duration);

  const isMorning = hour >= 4 && hour < 12;
  const isEvening = hour >= 18 || hour < 4;
  const period = isMorning ? 'morning' : isEvening ? 'evening' : 'day';

  let template: string;
  let label: string;
  let emoji: string;

  if (period === 'morning') {
    template = pickForDay(morningMessages, dayKey + '-morning');
    label = 'God morgon';
    emoji = '☀️';
  } else if (period === 'evening') {
    template = pickForDay(eveningMessages, dayKey + '-evening');
    label = 'God kväll';
    emoji = '🌙';
  } else {
    template = 'Du är mitt i din dag, {days} nykter. Fortsätt hålla i, ett ögonblick i taget.';
    label = 'Idag';
    emoji = '🌤️';
  }

  const message = template.replace('{days}', streakPhrase);

  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-100 px-5 py-4 flex gap-3 items-start">
      <span className="text-2xl leading-none">{emoji}</span>
      <div>
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{label}</p>
        <p className="text-amber-900 text-sm leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
