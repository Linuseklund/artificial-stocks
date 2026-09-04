import { steps } from '../data/steps';
import type { StepDef } from '../data/steps';
import type { AppState, StepProgress } from '../types';
import StepCard from './StepCard';

const emptyProgress: StepProgress = { started: false, completed: false, notes: '' };

interface Props {
  state: AppState;
  onUpdateStep: (number: number, progress: StepProgress) => void;
}

export default function Steps({ state, onUpdateStep }: Props) {
  const completedCount = steps.filter((s) => state.steps[s.number]?.completed).length;

  return (
    <div className="px-4 pt-4 pb-24 max-w-md mx-auto w-full">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-teal-900">Tolvstegsprogrammet</h1>
        <p className="text-sm text-teal-600 mt-1">
          Ta ett steg i taget, i din egen takt. Ingen dömer om det tar tid.
        </p>
        <div className="mt-3 h-2 rounded-full bg-teal-100 overflow-hidden">
          <div
            className="h-full bg-teal-600 rounded-full transition-all"
            style={{ width: `${(completedCount / steps.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-teal-500 mt-1">{completedCount} av {steps.length} steg genomförda</p>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
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
