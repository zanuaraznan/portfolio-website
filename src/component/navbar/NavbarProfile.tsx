"use client";
import Image from "next/image";
import { useState } from "react";
import ProfileContextMenu from "./ProfileContextMenu";

const NavbarProfile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative shrink-0">
      <button onClick={() => setOpen((prev) => !prev)}>
        <Image src="/profile_rounded.png" width={1080} height={1080} alt="" className="size-10" />
        <div className="bottom-1 right-0 size-2 rounded-full ring-3 ring-white dark:ring-zinc-800 bg-emerald-600 absolute"></div>
      </button>
      <ProfileContextMenu isOpen={isOpen} />
    </div>
  );
};

export default NavbarProfile;
