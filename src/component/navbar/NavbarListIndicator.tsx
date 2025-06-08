"use client";
import { useEffect, useState } from "react";
import { useHashUrlContext } from "./NavbarContext";

type TargetInfoType = {
  width: number;
  left: number;
};

const NavbarListIndicator = () => {
  const [targetInfo, setTargetInfo] = useState<TargetInfoType | undefined>(undefined);
  const { currentHash } = useHashUrlContext();

  useEffect(() => {
    const navContainer = document.querySelector(".nav-list_container") as Element;
    const navActive = navContainer?.querySelector(".active") as Element;

    setTargetInfo({
      width: navActive.getBoundingClientRect().width,
      left: navActive.getBoundingClientRect().left - navContainer.getBoundingClientRect().left,
    });
  }, [currentHash]);

  return (
    <div
      className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-zinc-700 transition-all"
      style={{ width: targetInfo?.width, left: (targetInfo?.left ?? 0) + 4 }}></div>
  );
};

export default NavbarListIndicator;
