"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type HashUrlContextType = {
  currentHash: string;
  setCurrentHash: Dispatch<SetStateAction<string>>;
};

const HashUrlContext = createContext<HashUrlContextType | undefined>(undefined);

const HashUrlContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentHash, setCurrentHash] = useState("#about");
  return <HashUrlContext.Provider value={{ currentHash, setCurrentHash }}>{children}</HashUrlContext.Provider>;
};

const useHashUrlContext = () => {
  const ctx = useContext(HashUrlContext);
  if (!ctx) throw new Error("useHashUrlContext harus digunakan di dalam <HashUrlContextProvider>");
  return ctx;
};

export { HashUrlContextProvider, useHashUrlContext };
