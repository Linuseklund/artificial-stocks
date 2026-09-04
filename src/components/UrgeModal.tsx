import { useMemo, useState } from 'react';
import { reasons } from '../data/reasons';
import { suggestions } from '../data/suggestions';

interface Props {
  onClose: () => void;
}

function pickRandom<T>(arr: T[], excludeIndex?: number): { item: T; index: number } {
  let index = Math.floor(Math.random() * arr.length);
  if (arr.length > 1 && index === excludeIndex) {
    index = (index + 1) % arr.length;
  }
  return { item: arr[index], index };
}

export default function UrgeModal({ onClose }: Props) {
  const initialReason = useMemo(() => pickRandom(reasons), []);
  const initialSuggestion = useMemo(() => pickRandom(suggestions), []);

  const [reason, setReason] = useState(initialReason);
  const [suggestion, setSuggestion] = useState(initialSuggestion);

  function newSuggestion() {
    setSuggestion((prev) => pickRandom(suggestions, prev.index));
  }

  function newReason() {
    setReason((prev) => pickRandom(reasons, prev.index));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="text-4xl mb-2">🫶</div>
          <h2 className="text-lg font-bold text-teal-900">Du klarar den här stunden</h2>
          <p className="text-sm text-teal-600 mt-1">Stanna kvar här i två minuter innan du gör något annat.</p>
        </div>

        <div className="px-6 py-4 space-y-4">
          <section className="rounded-2xl bg-teal-50 border border-teal-100 p-4">
            <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">
              Kom ihåg
            </p>
            <p className="text-teal-900 text-sm leading-relaxed">{reason.item}</p>
            <button
              onClick={newReason}
              className="mt-3 text-xs font-medium text-teal-700 underline underline-offset-2"
            >
              Visa en annan anledning
            </button>
          </section>

          <section className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
            <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">
              Gör det här istället
            </p>
            <div className="flex items-start gap-3">
              <span className="text-2xl leading-none">{suggestion.item.icon}</span>
              <p className="text-orange-900 text-sm leading-relaxed">{suggestion.item.text}</p>
            </div>
            <button
              onClick={newSuggestion}
              className="mt-3 text-xs font-medium text-orange-700 underline underline-offset-2"
            >
              Föreslå något annat
            </button>
          </section>
        </div>

        <div className="px-6 pb-6 pt-2 space-y-2">
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-teal-600 text-white font-semibold text-base py-3.5 hover:bg-teal-700 active:bg-teal-800 transition-colors"
          >
            Jag mår bättre nu
          </button>
          <p className="text-center text-xs text-teal-500 pt-1">
            Om suget känns för starkt att hantera själv, ring en vän, din sponsor eller vården.
          </p>
        </div>
      </div>
    </div>
  );
}
