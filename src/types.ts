export interface StepProgress {
  started: boolean;
  completed: boolean;
  notes: string;
}

export interface AppState {
  soberSince: string | null; // ISO date string
  name: string;
  steps: Record<number, StepProgress>;
  lastCheckIn: {
    morningDate: string | null; // yyyy-mm-dd of last shown morning message
    eveningDate: string | null; // yyyy-mm-dd of last shown evening message
  };
}
