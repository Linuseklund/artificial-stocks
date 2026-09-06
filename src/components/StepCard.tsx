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

  const markerClass = progress.completed
    ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900 border-transparent'
    : progress.started
      ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100'
      : 'border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-600';

  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center gap-4 py-4 text-left">
        <span
          className={`flex-none w-8 h-8 rounded-full border flex items-center justify-center text-[13px] ${markerClass}`}
        >
          {progress.completed ? <Icon name="check" className="w-4 h-4" strokeWidth={2} /> : step.number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[15px] text-neutral-900 dark:text-neutral-100 leading-snug">
            {step.title}
          </span>
          {(progress.started || progress.completed) && (
            <span className="block text-[12px] text-neutral-400 dark:text-neutral-600 mt-0.5">
              {progress.completed ? t.steps.statusDone : t.steps.statusStarted}
            </span>
          )}
        </span>
        <Icon
          name="chevron"
          className={`w-4 h-4 flex-none text-neutral-300 dark:text-neutral-700 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="pb-6 pl-12 space-y-4">
          <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {step.description}
          </p>

          <div>
            <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mb-1">
              {t.steps.reflectionLabel}
            </p>
            <p className="text-[15px] text-neutral-800 dark:text-neutral-200 leading-relaxed">
              {step.reflection}
            </p>
          </div>

          <div>
            <label
              htmlFor={`notes-${step.number}`}
              className="block text-[13px] text-neutral-400 dark:text-neutral-500 mb-1.5"
            >
              {t.steps.notesLabel}
            </label>
            <textarea
              id={`notes-${step.number}`}
              value={progress.notes}
              onChange={(e) => onChange({ ...progress, notes: e.target.value })}
              placeholder={t.steps.notesPlaceholder}
              rows={3}
              className="w-full rounded-xl bg-neutral-50 dark:bg-neutral-900 px-3.5 py-3 text-[15px] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 resize-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onChange({ ...progress, started: true, completed: false })}
              className={`flex-1 rounded-xl py-2.5 text-[14px] transition-colors ${
                progress.started && !progress.completed
                  ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900'
                  : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {t.steps.markStarted}
            </button>
            <button
              onClick={() => onChange({ ...progress, started: true, completed: true })}
              className={`flex-1 rounded-xl py-2.5 text-[14px] transition-colors ${
                progress.completed
                  ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900'
                  : 'bg-neutral-50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400'
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
