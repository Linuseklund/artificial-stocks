import { useState } from 'react';
import SobrietyCounter from './SobrietyCounter';
import DailyMessage from './DailyMessage';
import UrgeButton from './UrgeButton';
import UrgeModal from './UrgeModal';
import VoiceCompanion from './VoiceCompanion';
import Icon from './Icon';
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
    <div className="px-6 pt-10 pb-28 max-w-md mx-auto w-full">
      <h1 className="text-[22px] font-medium text-neutral-900 dark:text-neutral-50 tracking-tight">
        {name ? t.home.greeting(name) : t.home.greetingNoName}
      </h1>
      <p className="text-[15px] text-neutral-400 dark:text-neutral-500 mt-1">{t.home.subtitle}</p>

      <div className="divide-y divide-neutral-100 dark:divide-neutral-900 mt-4">
        <SobrietyCounter soberSince={soberSince} />
        <DailyMessage soberSince={soberSince} />
      </div>

      <UrgeButton onPress={() => setShowUrge(true)} />

      <button
        onClick={() => setShowVoice(true)}
        className="w-full flex items-center gap-3.5 py-4 text-left border-t border-neutral-100 dark:border-neutral-900 group"
      >
        <Icon
          name="waveform"
          className="w-5 h-5 flex-none text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors"
        />
        <span className="min-w-0">
          <span className="block text-[15px] text-neutral-900 dark:text-neutral-100">
            {t.voice.openButton}
          </span>
          <span className="block text-[13px] text-neutral-400 dark:text-neutral-500 mt-0.5 leading-relaxed">
            {t.voice.openHelper}
          </span>
        </span>
      </button>

      {showUrge && <UrgeModal voice={voice} onClose={() => setShowUrge(false)} />}
      {showVoice && <VoiceCompanion voice={voice} onClose={() => setShowVoice(false)} />}
    </div>
  );
}
