import NavbarListSection from "./NavbarListSection";
import NavbarProfile from "./NavbarProfile";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center gap-4 md:gap-8 sticky top-0 p-8 z-9999 flex-nowrap">
      <NavbarProfile />
      <NavbarListSection />
      <ToggleTheme />
    </header>
  );
};

export default Navbar;
