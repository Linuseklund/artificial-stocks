import type { Duration } from './time';
import type { UiStrings } from '../i18n/ui';

export function formatStreakPhrase(d: Duration, t: UiStrings): string {
  if (d.totalHours < 24) return t.counter.today;
  return `${d.days} ${t.counter.daysPhrase(d.days)}`;
}

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function pickForDay<T>(pool: T[], dayKey: string): T {
  return pool[hashString(dayKey) % pool.length];
}
