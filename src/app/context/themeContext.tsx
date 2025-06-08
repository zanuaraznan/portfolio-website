"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => {} });

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeContext harus digunakan di dalam <ThemeContextProvider>");

  return ctx;
};

export { ThemeContextProvider, useThemeContext };
