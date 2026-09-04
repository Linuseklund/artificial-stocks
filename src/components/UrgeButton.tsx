import { useI18n } from '../i18n/context';

interface Props {
  onPress: () => void;
}

export default function UrgeButton({ onPress }: Props) {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center py-5">
      <button
        onClick={onPress}
        aria-label={t.urge.buttonLabel}
        className="w-40 h-40 rounded-full bg-amber-500 text-white shadow-lg shadow-amber-500/20 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-500/30"
      >
        <span className="text-3xl">✋</span>
        <span className="text-base font-semibold leading-tight px-5 text-center">
          {t.urge.buttonLabel}
        </span>
      </button>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 text-center max-w-xs leading-relaxed">
        {t.urge.buttonHelper}
      </p>
    </div>
  );
}
