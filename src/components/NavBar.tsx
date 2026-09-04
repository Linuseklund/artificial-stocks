import { useI18n } from '../i18n/context';

export type Tab = 'home' | 'steps' | 'settings';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function NavBar({ active, onChange }: Props) {
  const { t } = useI18n();

  const items: { id: Tab; label: string; icon: string }[] = [
    { id: 'home', label: t.nav.home, icon: '🏠' },
    { id: 'steps', label: t.nav.steps, icon: '🪜' },
    { id: 'settings', label: t.nav.settings, icon: '⚙️' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-md mx-auto flex">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors ${
              active === item.id
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-neutral-400 dark:text-neutral-500'
            }`}
          >
            <span className="text-xl leading-none">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
