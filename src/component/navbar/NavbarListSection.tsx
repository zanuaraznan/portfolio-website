"use client";
import { HashUrlContextProvider } from "../../app/context/NavbarContext";
import NavbarList from "./NavbarList";
import NavbarListIndicator from "./NavbarListIndicator";

const NavbarListSection = () => {
  return (
    <nav className="relative p-1 rounded-full bg-gray-200/35 dark:bg-zinc-800/35 backdrop-blur-lg flex items-center">
      <HashUrlContextProvider>
        <NavbarListIndicator />
        <NavbarList />
      </HashUrlContextProvider>
    </nav>
  );
};

export default NavbarListSection;
