import { useI18n } from '../i18n/context';

interface Props {
  onPress: () => void;
}

export default function UrgeButton({ onPress }: Props) {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center py-8">
      <button
        onClick={onPress}
        aria-label={t.urge.buttonLabel}
        className="w-44 h-44 rounded-full bg-accent text-white flex items-center justify-center px-8 active:scale-[0.97] transition-transform hover:bg-accent-strong focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30"
      >
        <span className="font-serif text-[22px] leading-tight text-center text-balance">
          {t.urge.buttonLabel}
        </span>
      </button>
      <p className="text-[13px] text-neutral-400 dark:text-neutral-500 mt-5 text-center max-w-[17rem] leading-relaxed">
        {t.urge.buttonHelper}
      </p>
    </div>
  );
}
