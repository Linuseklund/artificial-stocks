import type { Duration } from './time';

export function formatStreakPhrase(d: Duration): string {
  if (d.totalHours < 24) return 'idag';
  return `${d.days} ${d.days === 1 ? 'dag' : 'dagar'}`;
}

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function pickForDay(pool: string[], dayKey: string): string {
  if (pool.length === 0) return '';
  return pool[hashString(dayKey) % pool.length];
}
