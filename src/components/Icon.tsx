/**
 * Line icons used across the interface. Stroke-based and inheriting
 * currentColor, so they stay quiet next to text and adapt to both themes.
 */

export type IconName =
  | 'home'
  | 'steps'
  | 'settings'
  | 'mic'
  | 'waveform'
  | 'sun'
  | 'moon'
  | 'cloudSun'
  | 'speaker'
  | 'stop'
  | 'check'
  | 'chevron'
  | 'hand';

interface Props {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

const paths: Record<IconName, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5" />,
  steps: (
    <>
      <path d="M4 19h4v-4h4v-4h4V7h4" />
      <path d="M4 19v-4M8 15v-4M12 11V7" />
    </>
  ),
  settings: (
    <>
      <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
      <circle cx="16" cy="7" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  waveform: <path d="M4 12h2M8 8v8M12 5v14M16 9v6M20 12h0" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />,
  cloudSun: (
    <>
      <path d="M8 6.5a3.5 3.5 0 0 1 6.6 1.2" />
      <path d="M6 19h10a3.5 3.5 0 0 0 0-7 5 5 0 0 0-9.6 1.4A3 3 0 0 0 6 19Z" />
      <path d="M11 3v1.5M5.4 5.4l1 1M3.5 11H5" />
    </>
  ),
  speaker: (
    <>
      <path d="M11 5 6.5 9H3v6h3.5L11 19V5Z" />
      <path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10" />
    </>
  ),
  stop: <rect x="6" y="6" width="12" height="12" rx="2" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  hand: (
    <>
      <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V11M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7" />
      <path d="M8 11V9a1.5 1.5 0 0 0-3 0v5a7 7 0 0 0 12 5" />
    </>
  ),
};

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.5 }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
