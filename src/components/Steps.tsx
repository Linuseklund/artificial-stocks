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
    <div className="px-6 pt-10 pb-28 max-w-md mx-auto w-full">
      <h1 className="font-serif text-[34px] leading-[1.1] text-neutral-900 dark:text-neutral-50">
        {t.steps.title}
      </h1>
      <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-3 leading-relaxed">
        {t.steps.subtitle}
      </p>

      <div className="mt-8 flex items-center gap-3">
        <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 relative">
          <div
            className="absolute inset-y-0 left-0 bg-neutral-900 dark:bg-neutral-50 transition-all"
            style={{ width: `${(completedCount / stepList.length) * 100}%` }}
          />
        </div>
        <p className="text-[11px] text-neutral-400 dark:text-neutral-600 tabular-nums">
          {String(completedCount).padStart(2, '0')}/{stepList.length}
        </p>
      </div>

      <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
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
