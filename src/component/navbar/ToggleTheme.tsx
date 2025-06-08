"use client";

import { useThemeContext } from "@/app/context/themeContext";
import { useEffect } from "react";
import { AiOutlineMoon } from "react-icons/ai";
import { MdOutlineWbSunny } from "react-icons/md";

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeContext();

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex p-3 rounded-full bg-gray-200/35 dark:bg-zinc-700/35 backdrop-blur-lg">
      <button onClick={handleToggle}>
        {theme === "dark" ? <AiOutlineMoon size={18} /> : <MdOutlineWbSunny size={18} />}
      </button>
    </div>
  );
};

export default ToggleTheme;
