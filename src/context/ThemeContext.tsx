"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  handleToggle(): void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme, handleToggle }}>{children}</ThemeContext.Provider>;
};

const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeContext harus digunakan di dalam <ThemeContextProvider>");

  return ctx;
};

export { ThemeContextProvider, useThemeContext };
