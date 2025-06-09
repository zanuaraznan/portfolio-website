"use client";
import { NavbarContextProvider } from "@/context/NavbarContext";
import NavbarList from "./NavbarList";
import NavbarListIndicator from "./NavbarListIndicator";

const NavbarListSection = () => {
  return (
    <nav className="relative p-1 rounded-full bg-gray-200/35 dark:bg-zinc-800/35 backdrop-blur-lg flex items-center">
      <NavbarContextProvider>
        <NavbarListIndicator />
        <NavbarList />
      </NavbarContextProvider>
    </nav>
  );
};

export default NavbarListSection;
