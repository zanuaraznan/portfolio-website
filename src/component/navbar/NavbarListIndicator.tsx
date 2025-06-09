import { useNavbarContext } from "@/app/context/NavbarContext";
import { useEffect, useState } from "react";

type TargetInfoType = {
  width: number;
  left: number;
};

const NavbarListIndicator = () => {
  const [targetInfo, setTargetInfo] = useState<TargetInfoType | undefined>(undefined);
  const { activeNavIdx, isStretching } = useNavbarContext();

  useEffect(() => {
    console.log(isStretching.rtl);
    const navContainer = document.querySelector(".nav-list_container") as Element;
    const navActive = navContainer?.querySelector(".active") as Element;

    setTargetInfo({
      width: navActive.getBoundingClientRect().width,
      left: navActive.getBoundingClientRect().left - navContainer.getBoundingClientRect().left,
    });
  }, [activeNavIdx]);

  if (!targetInfo) return null;

  return (
    <div
      className="absolute top-1 bottom-1 left-0 transition-all duration-500 ease-in-out"
      style={{
        transform: isStretching.stats ? "scale(1.5, 0.8)" : "scale(1)",
        transformOrigin: isStretching.rtl ? "left" : "right",
        width: targetInfo?.width,
        left: (targetInfo?.left ?? 0) + 4,
      }}>
      <div className="h-full w-full rounded-full bg-white dark:bg-zinc-700"></div>
    </div>
  );
};

export default NavbarListIndicator;
