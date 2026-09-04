import { steps } from '../data/steps';
import type { StepDef } from '../data/steps';
import type { AppState, StepProgress } from '../types';
import StepCard from './StepCard';
import { useI18n } from '../i18n/context';

const emptyProgress: StepProgress = { started: false, completed: false, notes: '' };

interface Props {
  state: AppState;
  onUpdateStep: (number: number, progress: StepProgress) => void;
}

export default function Steps({ state, onUpdateStep }: Props) {
  const { t, lang } = useI18n();
  const stepList = steps[lang];
  const completedCount = stepList.filter((s) => state.steps[s.number]?.completed).length;

  return (
    <div className="px-4 pt-6 pb-24 max-w-md mx-auto w-full">
      <div className="mb-5">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {t.steps.title}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{t.steps.subtitle}</p>
        <div className="mt-3 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
          <div
            className="h-full bg-emerald-600 rounded-full transition-all"
            style={{ width: `${(completedCount / stepList.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1.5">
          {t.steps.progress(completedCount, stepList.length)}
        </p>
      </div>

      <div className="space-y-2.5">
        {stepList.map((step) => (
          <StepCardWrapper
            key={step.number}
            step={step}
            progress={state.steps[step.number] ?? emptyProgress}
            onUpdateStep={onUpdateStep}
          />
        ))}
      </div>
    </div>
  );
}

function StepCardWrapper({
  step,
  progress,
  onUpdateStep,
}: {
  step: StepDef;
  progress: StepProgress;
  onUpdateStep: (number: number, progress: StepProgress) => void;
}) {
  return (
    <StepCard step={step} progress={progress} onChange={(p) => onUpdateStep(step.number, p)} />
  );
}
