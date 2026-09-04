import { useEffect, useState } from 'react';
import { durationSince } from '../lib/time';
import { useI18n } from '../i18n/context';

interface Props {
  soberSince: string;
}

export default function SobrietyCounter({ soberSince }: Props) {
  const { t } = useI18n();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes } = durationSince(soberSince, now);

  return (
    <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-6 py-7 text-center">
      <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
        {t.counter.heading}
      </p>
      <div className="flex items-end justify-center gap-6">
        <TimeBlock value={days} label={t.counter.days(days)} />
        <TimeBlock value={hours} label={t.counter.hours(hours)} />
        <TimeBlock value={minutes} label={t.counter.minutes(minutes)} />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-14">
      <span className="text-4xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums tracking-tight">
        {value}
      </span>
      <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">{label}</span>
    </div>
  );
}
