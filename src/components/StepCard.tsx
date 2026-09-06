import { useState } from 'react';
import type { StepDef } from '../data/steps';
import type { StepProgress } from '../types';
import { useI18n } from '../i18n/context';
import Icon from './Icon';

interface Props {
  step: StepDef;
  progress: StepProgress;
  onChange: (progress: StepProgress) => void;
}

export default function StepCard({ step, progress, onChange }: Props) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const status = progress.completed
    ? t.steps.statusDone
    : progress.started
      ? t.steps.statusStarted
      : t.steps.statusNotStarted;

  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} className="w-full py-6 text-left">
        {/* Small grey meta line above a large serif title, as in the reference's
            editorial lists. */}
        <span className="flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-600">
          <span className="flex items-center gap-2">
            <span className="tabular-nums">{String(step.number).padStart(2, '0')}</span>
            <span className="w-4 h-px bg-neutral-300 dark:bg-neutral-700" />
            <span>{status}</span>
          </span>
          <span className="flex items-center gap-2">
            {progress.completed && <Icon name="check" className="w-3.5 h-3.5" strokeWidth={2} />}
            <Icon
              name="chevron"
              className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </span>
        <span
          className={`block font-serif text-[26px] leading-[1.15] mt-2 ${
            progress.completed
              ? 'text-neutral-400 dark:text-neutral-600'
              : 'text-neutral-900 dark:text-neutral-50'
          }`}
        >
          {step.title}
        </span>
      </button>

      {open && (
        <div className="pb-8 space-y-6">
          <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {step.description}
          </p>

          <div>
            <p className="text-[11px] text-neutral-400 dark:text-neutral-600 mb-2">
              {t.steps.reflectionLabel}
            </p>
            <p className="font-serif text-[19px] leading-snug text-neutral-800 dark:text-neutral-200">
              {step.reflection}
            </p>
          </div>

          <div>
            <label
              htmlFor={`notes-${step.number}`}
              className="block text-[11px] text-neutral-400 dark:text-neutral-600 mb-2"
            >
              {t.steps.notesLabel}
            </label>
            <textarea
              id={`notes-${step.number}`}
              value={progress.notes}
              onChange={(e) => onChange({ ...progress, notes: e.target.value })}
              placeholder={t.steps.notesPlaceholder}
              rows={3}
              className="w-full bg-neutral-50 dark:bg-neutral-900 px-4 py-3.5 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 resize-none"
            />
          </div>

          <div className="flex gap-px bg-neutral-200 dark:bg-neutral-800">
            <button
              onClick={() => onChange({ ...progress, started: true, completed: false })}
              className={`flex-1 py-3 text-[13px] transition-colors ${
                progress.started && !progress.completed
                  ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900'
                  : 'bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {t.steps.markStarted}
            </button>
            <button
              onClick={() => onChange({ ...progress, started: true, completed: true })}
              className={`flex-1 py-3 text-[13px] transition-colors ${
                progress.completed
                  ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900'
                  : 'bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {t.steps.markDone}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
