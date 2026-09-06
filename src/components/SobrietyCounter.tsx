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
    <div className="py-6">
      <p className="text-[13px] text-neutral-400 dark:text-neutral-500">{t.counter.heading}</p>
      <div className="flex items-baseline gap-2.5 mt-1">
        <span className="text-6xl font-light text-neutral-900 dark:text-neutral-50 tracking-tighter leading-none">
          {days}
        </span>
        <span className="text-lg text-neutral-500 dark:text-neutral-400">{t.counter.days(days)}</span>
      </div>
      <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mt-2.5">
        {hours} {t.counter.hours(hours)} · {minutes} {t.counter.minutes(minutes)}
      </p>
    </div>
  );
}
