import Image from "next/image";
import Link from "next/link";

const NavbarProfile = () => {
  return (
    <Link href="/" className="relative shrink-0">
      <Image src="/profile_rounded.png" width={1080} height={1080} alt="" className="size-10" />
      <div className="bottom-0 right-0 size-2 rounded-full ring-3 ring-white dark:ring-zinc-800 bg-emerald-600 absolute"></div>
    </Link>
  );
};

export default NavbarProfile;
