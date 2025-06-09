import { ProfileMenu } from "@/data/data";
import Link from "next/link";
import BGSwitcher from "./BGSwitcher";

const ProfileContextMenu = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute p-4 top-[120%] flex flex-col gap-6 rounded-xl bg-white dark:bg-zinc-800
      ">
      {ProfileMenu.map(({ label, path, icon }) => (
        <Link key={label} href={path} aria-label={label} className="flex items-center gap-4">
          {icon}
          <span>{label}</span>
        </Link>
      ))}
      <BGSwitcher />
    </div>
  );
};

export default ProfileContextMenu;
