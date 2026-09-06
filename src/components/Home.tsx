import { useState } from 'react';
import SobrietyCounter from './SobrietyCounter';
import DailyMessage from './DailyMessage';
import UrgeButton from './UrgeButton';
import UrgeModal from './UrgeModal';
import VoiceCompanion from './VoiceCompanion';
import type { VoiceSettings } from '../types';
import { useI18n } from '../i18n/context';

interface Props {
  name: string;
  soberSince: string;
  voice: VoiceSettings;
}

export default function Home({ name, soberSince, voice }: Props) {
  const { t } = useI18n();
  const [showUrge, setShowUrge] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

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

      <button
        onClick={() => setShowVoice(true)}
        className="w-full rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-5 py-4 flex items-center gap-4 text-left hover:border-emerald-600 transition-colors"
      >
        <span className="flex-none w-11 h-11 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-xl">
          🎧
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {t.voice.openButton}
          </span>
          <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
            {t.voice.openHelper}
          </span>
        </span>
      </button>

      {showUrge && <UrgeModal voice={voice} onClose={() => setShowUrge(false)} />}
      {showVoice && <VoiceCompanion voice={voice} onClose={() => setShowVoice(false)} />}
    </div>
  );
}
