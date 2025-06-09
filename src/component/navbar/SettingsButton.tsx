"use client";

import { useModalContext } from "@/app/context/ModalContext";
import { LuSettings } from "react-icons/lu";

const SettingsButton = () => {
  const { open } = useModalContext();
  return (
    <button
      title="Pengaturan"
      aria-label="Pengaturan"
      onClick={() => open()}
      className="p-3 rounded-full bg-gray-200/35 backdrop-blur-lg transition-all duration-300 transform hover:rotate-90 hover:bg-gray-200">
      <LuSettings aria-hidden size={18} />
    </button>
  );
};

export default SettingsButton;
