import { useState } from 'react';
import type { StepDef } from '../data/steps';
import type { StepProgress } from '../types';
import { useI18n } from '../i18n/context';

interface Props {
  step: StepDef;
  progress: StepProgress;
  onChange: (progress: StepProgress) => void;
}

export default function StepCard({ step, progress, onChange }: Props) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const statusColor = progress.completed
    ? 'bg-emerald-600 text-white'
    : progress.started
      ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400'
      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400';

  return (
    <div className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left"
      >
        <span
          className={`flex-none w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${statusColor}`}
        >
          {progress.completed ? '✓' : step.number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {step.number}. {step.title}
          </span>
          <span className="block text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
            {progress.completed
              ? t.steps.statusDone
              : progress.started
                ? t.steps.statusStarted
                : t.steps.statusNotStarted}
          </span>
        </span>
        <span
          className={`text-neutral-300 dark:text-neutral-600 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-neutral-100 dark:border-neutral-800 pt-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{step.description}</p>

          <div className="rounded-xl bg-neutral-50 dark:bg-neutral-800/60 px-3 py-2.5">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
              {t.steps.reflectionLabel}
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 italic">{step.reflection}</p>
          </div>

          <div>
            <label
              htmlFor={`notes-${step.number}`}
              className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1"
            >
              {t.steps.notesLabel}
            </label>
            <textarea
              id={`notes-${step.number}`}
              value={progress.notes}
              onChange={(e) => onChange({ ...progress, notes: e.target.value })}
              placeholder={t.steps.notesPlaceholder}
              rows={3}
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onChange({ ...progress, started: true, completed: false })}
              className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                progress.started && !progress.completed
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400'
              }`}
            >
              {t.steps.markStarted}
            </button>
            <button
              onClick={() => onChange({ ...progress, started: true, completed: true })}
              className={`flex-1 rounded-lg py-2 text-sm font-medium border transition-colors ${
                progress.completed
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400'
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
