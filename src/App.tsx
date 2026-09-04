import { useState } from 'react';
import type { AppState, StepProgress } from './types';
import { loadState, saveState, defaultState } from './lib/storage';
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

  function handleOnboardingComplete(name: string, soberSince: string) {
    update({ ...state, name, soberSince });
  }

  function handleUpdateStep(number: number, progress: StepProgress) {
    update({ ...state, steps: { ...state.steps, [number]: progress } });
  }

  function handleSettingsUpdate(name: string, soberSince: string) {
    update({ ...state, name, soberSince });
    setTab('home');
  }

  function handleReset() {
    update({ ...defaultState });
    setTab('home');
  }

  if (!state.soberSince) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#f4f7f6]">
      {tab === 'home' && <Home name={state.name} soberSince={state.soberSince} />}
      {tab === 'steps' && <Steps state={state} onUpdateStep={handleUpdateStep} />}
      {tab === 'settings' && (
        <Settings state={state} onUpdate={handleSettingsUpdate} onReset={handleReset} />
      )}
      <NavBar active={tab} onChange={setTab} />
    </div>
  );
}
