import NavbarListSection from "./NavbarListSection";
import NavbarProfile from "./NavbarProfile";
import SettingsSection from "./SettingsSection";

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-center gap-4 md:gap-8 sticky top-0 p-8 z-9999 flex-nowrap">
      <NavbarProfile />
      <NavbarListSection />
      <SettingsSection />
    </header>
  );
};

export default Navbar;
