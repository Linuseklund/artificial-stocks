import { useState } from 'react';
import SobrietyCounter from './SobrietyCounter';
import DailyMessage from './DailyMessage';
import UrgeButton from './UrgeButton';
import UrgeModal from './UrgeModal';

interface Props {
  name: string;
  soberSince: string;
}

export default function Home({ name, soberSince }: Props) {
  const [showUrge, setShowUrge] = useState(false);

  return (
    <div className="px-4 pt-4 pb-24 max-w-md mx-auto w-full space-y-4">
      <div>
        <h1 className="text-xl font-bold text-teal-900">
          {name ? `Hej, ${name}` : 'Hej'}
        </h1>
        <p className="text-sm text-teal-600">Bra att du är här idag.</p>
      </div>

      <SobrietyCounter soberSince={soberSince} />
      <DailyMessage soberSince={soberSince} />
      <UrgeButton onPress={() => setShowUrge(true)} />

      {showUrge && <UrgeModal onClose={() => setShowUrge(false)} />}
    </div>
  );
}
