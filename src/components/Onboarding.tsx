import { useState } from 'react';

interface Props {
  onComplete: (name: string, soberSince: string) => void;
}

function toLocalInputValue(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function Onboarding({ onComplete }: Props) {
  const [name, setName] = useState('');
  const [when, setWhen] = useState(toLocalInputValue(new Date()));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const iso = new Date(when).toISOString();
    onComplete(name.trim(), iso);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-teal-50 to-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🌱</div>
          <h1 className="text-2xl font-bold text-teal-900">Välkommen</h1>
          <p className="text-teal-700 mt-2">
            Den här appen finns här för att stötta dig genom tolvstegsprogrammet, en dag i taget.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-teal-900 mb-1">
              Vad heter du? (valfritt)
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ditt förnamn"
              className="w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="when" className="block text-sm font-medium text-teal-900 mb-1">
              Sedan när är du nykter?
            </label>
            <input
              id="when"
              type="datetime-local"
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              max={toLocalInputValue(new Date())}
              required
              className="w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="text-xs text-teal-600 mt-1">
              Om du börjar idag, lämna det som det är.
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-teal-600 text-white font-semibold text-lg py-3.5 shadow-sm hover:bg-teal-700 active:bg-teal-800 transition-colors"
          >
            Kom igång
          </button>
        </form>
      </div>
    </div>
  );
}
