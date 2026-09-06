import { useI18n } from '../i18n/context';
import Icon, { type IconName } from './Icon';

export type Tab = 'home' | 'steps' | 'settings';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function NavBar({ active, onChange }: Props) {
  const { t } = useI18n();

  const items: { id: Tab; label: string; icon: IconName }[] = [
    { id: 'home', label: t.nav.home, icon: 'home' },
    { id: 'steps', label: t.nav.steps, icon: 'steps' },
    { id: 'settings', label: t.nav.settings, icon: 'settings' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-md mx-auto flex px-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            aria-current={active === item.id ? 'page' : undefined}
            className={`flex-1 flex flex-col items-center gap-1 py-3 text-[11px] transition-colors ${
              active === item.id
                ? 'text-neutral-900 dark:text-neutral-50'
                : 'text-neutral-400 dark:text-neutral-600'
            }`}
          >
            <Icon name={item.icon} className="w-[22px] h-[22px]" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
