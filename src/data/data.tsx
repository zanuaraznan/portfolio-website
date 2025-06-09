import { LuGithub, LuInstagram } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";

/**
 * @static DATA -- Navigation List
 */

const navList = [
  { label: "About", path: "#about" },
  { label: "Portfolio", path: "#portfolio" },
  { label: "Contact", path: "#contact" },
] as const;

/**
 * @static DATA -- Profile ContextMenu
 */

const ProfileMenu = [
  { label: "Github", path: "https://github.com/zanuaraznan", icon: <LuGithub size={18} /> },
  { label: "Instagram", path: "https://www.instagram.com/zanuar.rsy", icon: <LuInstagram size={18} /> },
  { label: "Tiktok", path: "https://www.tiktok.com/@_zanuarz", icon: <PiTiktokLogo size={18} className="stroke-2" /> },
];

export { navList, ProfileMenu };
