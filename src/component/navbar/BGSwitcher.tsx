import { useBackgroundContext } from "@/app/context/BackgroundContext";

const BGSwitcher = () => {
  const { isBG, setIsBG } = useBackgroundContext();

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setIsBG((prev) => !prev)}
        className={`flex flex-col h-7 p-0.5 rounded-full transition-all ${
          isBG ? "bg-slate-600" : "bg-gray-300 dark:bg-gray-400"
        }`}>
        <span className={`w-4 h-4 rounded-full bg-white transition-all ${isBG ? "translate-y-2" : ""}`}></span>
      </button>
      <p className="text-nowrap">BG particle</p>
    </div>
  );
};

export default BGSwitcher;
