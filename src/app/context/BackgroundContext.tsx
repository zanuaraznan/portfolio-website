"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type BackgroundContextType = {
  isBG: boolean;
  setIsBG: Dispatch<SetStateAction<boolean>>;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

const BackgroundContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBG, setIsBG] = useState(true);
  return <BackgroundContext.Provider value={{ isBG, setIsBG }}>{children}</BackgroundContext.Provider>;
};

const useBackgroundContext = () => {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error("BackgroundContext harus digunakan di dalam <BackgroundContextProvider>");
  return ctx;
};

export { BackgroundContextProvider, useBackgroundContext };
