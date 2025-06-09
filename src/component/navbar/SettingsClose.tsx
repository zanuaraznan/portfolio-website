import { useModalContext } from "@/context/ModalContext";
import { MdClose } from "react-icons/md";

const SettingsClose = () => {
  const { close } = useModalContext();
  return (
    <button onClick={() => close()} className="p-2 rounded-lg ml-auto">
      <MdClose size={18} />
    </button>
  );
};

export default SettingsClose;
