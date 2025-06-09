"use client";
import Image from "next/image";
import { useState } from "react";
import ProfileContextMenu from "./ProfileContextMenu";

const NavbarProfile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative shrink-0">
      <button title="Click me! (Profile)" aria-label="Profile" onClick={() => setOpen((prev) => !prev)}>
        <Image src="/profile_rounded.png" width={1080} height={1080} alt="" className="size-10" />
        <div
          title="Tersedia untuk bekerja"
          aria-label="Tersedia untuk bekerja"
          className="bottom-1 right-0 size-2 rounded-full ring-3 ring-gray-100 dark:ring-zinc-800 bg-emerald-600 absolute"></div>
      </button>
      <ProfileContextMenu isOpen={isOpen} />
    </div>
  );
};

export default NavbarProfile;
