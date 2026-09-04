interface Props {
  onPress: () => void;
}

export default function UrgeButton({ onPress }: Props) {
  return (
    <div className="flex flex-col items-center py-4">
      <button
        onClick={onPress}
        aria-label="Jag känner att jag vill dricka"
        className="w-44 h-44 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200 flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
      >
        <span className="text-4xl">🤚</span>
        <span className="text-base font-bold leading-tight px-4 text-center">
          Jag vill dricka
        </span>
      </button>
      <p className="text-sm text-teal-600 mt-4 text-center max-w-xs">
        Tryck här när suget kommer. Du får en anledning att stanna och ett förslag på vad du kan göra istället.
      </p>
    </div>
  );
}
