export interface Duration {
  days: number;
  hours: number;
  minutes: number;
  totalHours: number;
}

export function durationSince(startIso: string, now: Date = new Date()): Duration {
  const start = new Date(startIso).getTime();
  const diffMs = Math.max(0, now.getTime() - start);
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  return { days, hours, minutes, totalHours };
}

export function todayKey(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export function isMorning(now: Date = new Date()): boolean {
  const h = now.getHours();
  return h >= 4 && h < 12;
}

export function isEvening(now: Date = new Date()): boolean {
  const h = now.getHours();
  return h >= 18 || h < 4;
}
