import { useEffect, useState } from 'react';
import { durationSince } from '../lib/time';
import { useI18n } from '../i18n/context';

interface Props {
  soberSince: string;
}

export default function SobrietyCounter({ soberSince }: Props) {
  const { t, lang } = useI18n();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes } = durationSince(soberSince, now);
  const since = new Date(soberSince).toLocaleDateString(lang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="py-10">
      <p className="text-[13px] text-neutral-400 dark:text-neutral-500">{t.counter.heading}</p>

      <div className="flex items-baseline gap-3 mt-3">
        <span className="font-serif text-[5.5rem] leading-[0.85] text-neutral-900 dark:text-neutral-50">
          {days}
        </span>
        <span className="font-serif text-2xl text-neutral-400 dark:text-neutral-500">
          {t.counter.days(days)}
        </span>
      </div>

      {/* Hairline with the exact figures beneath, in the reference's annotation style. */}
      <div className="mt-5 pt-2.5 border-t border-neutral-200 dark:border-neutral-800 flex justify-between text-[11px] text-neutral-400 dark:text-neutral-600">
        <span>
          {hours} {t.counter.hours(hours)} · {minutes} {t.counter.minutes(minutes)}
        </span>
        <span>{since}</span>
      </div>
    </div>
  );
}
