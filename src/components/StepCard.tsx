import { useState } from 'react';
import type { StepDef } from '../data/steps';
import type { StepProgress } from '../types';

interface Props {
  step: StepDef;
  progress: StepProgress;
  onChange: (progress: StepProgress) => void;
}

export default function StepCard({ step, progress, onChange }: Props) {
  const [open, setOpen] = useState(false);

  const statusColor = progress.completed
    ? 'bg-teal-600 text-white'
    : progress.started
      ? 'bg-amber-100 text-amber-700 border border-amber-300'
      : 'bg-teal-50 text-teal-600 border border-teal-200';

  return (
    <div className="rounded-2xl bg-white border border-teal-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-4 text-left"
      >
        <span
          className={`flex-none w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold ${statusColor}`}
        >
          {progress.completed ? '✓' : step.number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-sm font-semibold text-teal-900">
            Steg {step.number}: {step.title}
          </span>
          <span className="block text-xs text-teal-500 mt-0.5">
            {progress.completed ? 'Genomfört' : progress.started ? 'Pågår' : 'Ej påbörjat'}
          </span>
        </span>
        <span className={`text-teal-400 transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-teal-50 pt-3">
          <p className="text-sm text-teal-800 leading-relaxed">{step.description}</p>

          <div className="rounded-xl bg-teal-50 px-3 py-2.5">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-1">
              Till eftertanke
            </p>
            <p className="text-sm text-teal-800 italic">{step.reflection}</p>
          </div>

          <div>
            <label htmlFor={`notes-${step.number}`} className="block text-xs font-semibold text-teal-600 uppercase tracking-wide mb-1">
              Dina anteckningar
            </label>
            <textarea
              id={`notes-${step.number}`}
              value={progress.notes}
              onChange={(e) => onChange({ ...progress, notes: e.target.value })}
              placeholder="Skriv fritt här..."
              rows={3}
              className="w-full rounded-xl border border-teal-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onChange({ ...progress, started: true, completed: false })}
              className={`flex-1 rounded-lg py-2 text-sm font-medium border ${
                progress.started && !progress.completed
                  ? 'bg-amber-100 border-amber-300 text-amber-700'
                  : 'border-teal-200 text-teal-600'
              }`}
            >
              Pågår
            </button>
            <button
              onClick={() => onChange({ ...progress, started: true, completed: true })}
              className={`flex-1 rounded-lg py-2 text-sm font-medium border ${
                progress.completed
                  ? 'bg-teal-600 border-teal-600 text-white'
                  : 'border-teal-200 text-teal-600'
              }`}
            >
              Genomfört
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
