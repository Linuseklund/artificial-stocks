import { useState } from 'react';
import { useI18n } from '../i18n/context';

interface Props {
  onComplete: (name: string, soberSince: string) => void;
}

function toLocalInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const fieldClass =
  'w-full rounded-2xl bg-neutral-50 dark:bg-neutral-900 px-4 py-3.5 text-[16px] text-neutral-900 dark:text-neutral-50 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100';

export default function Onboarding({ onComplete }: Props) {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [when, setWhen] = useState(toLocalInputValue(new Date()));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onComplete(name.trim(), new Date(when).toISOString());
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-7 py-12 max-w-md mx-auto w-full">
      <div className="mb-12">
        <h1 className="font-serif text-[44px] leading-[1.05] text-neutral-900 dark:text-neutral-50">
          {t.onboarding.title}
        </h1>
        <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-3 leading-relaxed text-balance">
          {t.onboarding.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-[13px] text-neutral-400 dark:text-neutral-500 mb-2"
          >
            {t.onboarding.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.onboarding.namePlaceholder}
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="when"
            className="block text-[13px] text-neutral-400 dark:text-neutral-500 mb-2"
          >
            {t.onboarding.whenLabel}
          </label>
          <input
            id="when"
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            max={toLocalInputValue(new Date())}
            required
            className={fieldClass}
          />
          <p className="text-[13px] text-neutral-400 dark:text-neutral-600 mt-2">
            {t.onboarding.whenHint}
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 font-medium text-[15px] py-4 hover:opacity-90 transition-opacity"
        >
          {t.onboarding.submit}
        </button>
      </form>
    </div>
  );
}
