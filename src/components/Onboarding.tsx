import { useState } from 'react';
import { useI18n } from '../i18n/context';

interface Props {
  onComplete: (name: string, soberSince: string) => void;
}

function toLocalInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Onboarding({ onComplete }: Props) {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [when, setWhen] = useState(toLocalInputValue(new Date()));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const iso = new Date(when).toISOString();
    onComplete(name.trim(), iso);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-neutral-50 dark:bg-neutral-950">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="w-12 h-12 rounded-full bg-emerald-600 mx-auto mb-5" />
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {t.onboarding.title}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-[15px] leading-relaxed">
            {t.onboarding.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t.onboarding.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.onboarding.namePlaceholder}
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-base text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="when" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
              {t.onboarding.whenLabel}
            </label>
            <input
              id="when"
              type="datetime-local"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              max={toLocalInputValue(new Date())}
              required
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 py-3 text-base text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <p className="text-xs text-neutral-400 mt-1.5">{t.onboarding.whenHint}</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-neutral-900 dark:bg-emerald-600 text-white font-medium text-base py-3.5 hover:bg-neutral-800 dark:hover:bg-emerald-500 active:bg-neutral-950 transition-colors"
          >
            {t.onboarding.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
