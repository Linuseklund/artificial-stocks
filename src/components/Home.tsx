import { useState } from 'react';
import SobrietyCounter from './SobrietyCounter';
import DailyMessage from './DailyMessage';
import UrgeButton from './UrgeButton';
import UrgeModal from './UrgeModal';
import { useI18n } from '../i18n/context';

interface Props {
  name: string;
  soberSince: string;
}

export default function Home({ name, soberSince }: Props) {
  const { t } = useI18n();
  const [showUrge, setShowUrge] = useState(false);

  return (
    <div className="px-4 pt-6 pb-24 max-w-md mx-auto w-full space-y-4">
      <div>
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {name ? t.home.greeting(name) : t.home.greetingNoName}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{t.home.subtitle}</p>
      </div>

      <SobrietyCounter soberSince={soberSince} />
      <DailyMessage soberSince={soberSince} />
      <UrgeButton onPress={() => setShowUrge(true)} />

      {showUrge && <UrgeModal onClose={() => setShowUrge(false)} />}
    </div>
  );
}
