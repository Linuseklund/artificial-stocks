import type { AppState } from '../types';

const STORAGE_KEY = 'nykter-appstate-v1';

export const defaultState: AppState = {
  soberSince: null,
  name: '',
  steps: {},
  lastCheckIn: { morningDate: null, eveningDate: null },
};

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      lastCheckIn: { ...defaultState.lastCheckIn, ...(parsed.lastCheckIn ?? {}) },
    };
  } catch {
    return { ...defaultState };
  }
}

export function saveState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage unavailable (private mode etc) — fail silently, app still works in-memory
  }
}
