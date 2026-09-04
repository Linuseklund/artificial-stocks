import { useEffect, useState } from 'react';
import { durationSince } from '../lib/time';

interface Props {
  soberSince: string;
}

export default function SobrietyCounter({ soberSince }: Props) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes } = durationSince(soberSince, now);

  return (
    <div className="rounded-3xl bg-white shadow-sm border border-teal-100 px-6 py-6 text-center">
      <p className="text-sm font-medium text-teal-600 uppercase tracking-wide mb-3">
        Du har varit nykter i
      </p>
      <div className="flex items-end justify-center gap-4">
        <TimeBlock value={days} label={days === 1 ? 'dag' : 'dagar'} />
        <TimeBlock value={hours} label={hours === 1 ? 'timme' : 'timmar'} />
        <TimeBlock value={minutes} label={minutes === 1 ? 'minut' : 'minuter'} />
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-16">
      <span className="text-4xl font-bold text-teal-900 tabular-nums">{value}</span>
      <span className="text-xs text-teal-600 mt-1">{label}</span>
    </div>
  );
}
