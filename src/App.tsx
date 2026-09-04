import { useEffect, useState } from 'react';
import type { AppState, StepProgress } from './types';
import type { Lang } from './i18n/languages';
import { loadState, saveState, makeDefaultState } from './lib/storage';
import { I18nContext } from './i18n/context';
import { ui } from './i18n/ui';
import { useNotificationScheduler } from './lib/notifications';
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import Steps from './components/Steps';
import Settings from './components/Settings';
import NavBar, { type Tab } from './components/NavBar';

export default function App() {
  const [state, setState] = useState<AppState>(() => loadState());
  const [tab, setTab] = useState<Tab>('home');

  function update(next: AppState) {
    setState(next);
    saveState(next);
  }

  const setLang = (lang: Lang) => update({ ...state, lang });

  const i18nValue = { lang: state.lang, t: ui[state.lang], setLang };

  useNotificationScheduler(state, update);

  useEffect(() => {
    document.documentElement.lang = state.lang;
  }, [state.lang]);

  function handleOnboardingComplete(name: string, soberSince: string) {
    update({ ...state, name, soberSince });
  }

  function handleUpdateStep(number: number, progress: StepProgress) {
    update({ ...state, steps: { ...state.steps, [number]: progress } });
  }

  function handleSettingsUpdate(name: string, soberSince: string) {
    update({ ...state, name, soberSince });
  }

  function handleReset() {
    update(makeDefaultState());
    setTab('home');
  }

  return (
    <I18nContext.Provider value={i18nValue}>
      {!state.soberSince ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
          {tab === 'home' && <Home name={state.name} soberSince={state.soberSince} />}
          {tab === 'steps' && <Steps state={state} onUpdateStep={handleUpdateStep} />}
          {tab === 'settings' && (
            <Settings state={state} onUpdateProfile={handleSettingsUpdate} onUpdateState={update} onReset={handleReset} />
          )}
          <NavBar active={tab} onChange={setTab} />
        </div>
      )}
    </I18nContext.Provider>
  );
}
