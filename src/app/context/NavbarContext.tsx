"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type NavbarContextType = {
  activeNavIdx: number;
  isStretching: {
    stats: boolean;
    rtl: boolean;
  };
  setActiveNavIdx: Dispatch<SetStateAction<number>>;
  setIsStretching: Dispatch<SetStateAction<{ stats: boolean; rtl: boolean }>>;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const NavbarContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeNavIdx, setActiveNavIdx] = useState(0);
  const [isStretching, setIsStretching] = useState({ stats: false, rtl: false });

  useEffect(() => {
    if (isStretching.stats !== true) return;

    const timeout = setTimeout(
      () =>
        setIsStretching((prev) => ({
          ...prev,
          stats: false,
        })),
      300
    );
    return () => clearTimeout(timeout);
  }, [isStretching.stats]);

  return (
    <NavbarContext.Provider value={{ activeNavIdx, setActiveNavIdx, isStretching, setIsStretching }}>
      {children}
    </NavbarContext.Provider>
  );
};

const useNavbarContext = () => {
  const ctx = useContext(NavbarContext);
  if (!ctx) throw new Error("NavbarContext harus digunakan di dalam <NavbarContextProvider>");
  return ctx;
};

export { NavbarContextProvider, useNavbarContext };
