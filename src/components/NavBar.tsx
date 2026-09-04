export type Tab = 'home' | 'steps' | 'settings';

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const items: { id: Tab; label: string; icon: string }[] = [
  { id: 'home', label: 'Hem', icon: '🏠' },
  { id: 'steps', label: '12 steg', icon: '🪜' },
  { id: 'settings', label: 'Inställningar', icon: '⚙️' },
];

export default function NavBar({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-teal-100 pb-safe">
      <div className="max-w-md mx-auto flex">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition-colors ${
              active === item.id ? 'text-teal-700' : 'text-teal-400'
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
