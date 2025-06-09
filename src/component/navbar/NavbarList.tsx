import { navList } from "@/data/data";
import { useEffect, useRef } from "react";
import { useHashUrlContext } from "../../app/context/NavbarContext";
import Link from "next/link";

const NavbarList = () => {
  const { currentHash, setCurrentHash } = useHashUrlContext();
  const itemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setCurrentHash(window.location.hash || "#about");
  }, [setCurrentHash]);

  return (
    <div className="nav-list_container flex items-center relative z-1">
      {navList.map(({ label, path }) => (
        <Link
          ref={itemRef}
          key={label}
          href={path}
          onClick={() => setCurrentHash(path)}
          className={`p-2 px-3 ${currentHash === path ? "active" : ""}`}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarList;
