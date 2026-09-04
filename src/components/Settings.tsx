import { useState } from 'react';
import type { AppState } from '../types';

interface Props {
  state: AppState;
  onUpdate: (name: string, soberSince: string) => void;
  onReset: () => void;
}

function toLocalInputValue(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Settings({ state, onUpdate, onReset }: Props) {
  const [name, setName] = useState(state.name);
  const [when, setWhen] = useState(state.soberSince ? toLocalInputValue(state.soberSince) : '');
  const [confirmReset, setConfirmReset] = useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!when) return;
    onUpdate(name.trim(), new Date(when).toISOString());
  }

  return (
    <div className="px-4 pt-4 pb-24 max-w-md mx-auto w-full space-y-6">
      <div>
        <h1 className="text-xl font-bold text-teal-900">Inställningar</h1>
        <p className="text-sm text-teal-600 mt-1">Justera dina uppgifter när du behöver.</p>
      </div>

      <form onSubmit={save} className="space-y-4 bg-white rounded-2xl border border-teal-100 p-4 shadow-sm">
        <div>
          <label htmlFor="s-name" className="block text-sm font-medium text-teal-900 mb-1">Namn</label>
          <input
            id="s-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="s-when" className="block text-sm font-medium text-teal-900 mb-1">Nykter sedan</label>
          <input
            id="s-when"
            type="datetime-local"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            max={toLocalInputValue(new Date().toISOString())}
            className="w-full rounded-xl border border-teal-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <p className="text-xs text-teal-500 mt-1">
            Om du fått ett återfall kan du sätta ett nytt startdatum här – det är en del av vägen, inte ett misslyckande.
          </p>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 text-white font-semibold py-3 hover:bg-teal-700 active:bg-teal-800 transition-colors"
        >
          Spara
        </button>
      </form>

      <div className="bg-white rounded-2xl border border-red-100 p-4 shadow-sm">
        <p className="text-sm font-medium text-red-700 mb-2">Radera all data</p>
        <p className="text-xs text-red-500 mb-3">
          Tar bort din nykterhetstid, dina anteckningar och din stegframgång permanent från den här enheten.
        </p>
        {confirmReset ? (
          <div className="flex gap-2">
            <button
              onClick={onReset}
              className="flex-1 rounded-lg bg-red-600 text-white text-sm font-medium py-2.5"
            >
              Ja, radera allt
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="flex-1 rounded-lg border border-teal-200 text-teal-700 text-sm font-medium py-2.5"
            >
              Avbryt
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmReset(true)}
            className="w-full rounded-lg border border-red-200 text-red-600 text-sm font-medium py-2.5"
          >
            Radera data
          </button>
        )}
      </div>
    </div>
  );
}
