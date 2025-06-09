import { useNavbarContext } from "@/context/NavbarContext";
import { navList } from "@/data/data";
import Link from "next/link";

const NavbarList = () => {
  const { activeNavIdx, setActiveNavIdx, setIsStretching } = useNavbarContext();

  return (
    <div className="nav-list_container flex items-center relative z-1">
      {navList.map(({ label, path }, i) => (
        <Link
          key={label}
          href={path}
          onClick={() => {
            setActiveNavIdx(i);
            setIsStretching({ stats: true, rtl: i < activeNavIdx });
          }}
          className={`p-2 px-3 ${activeNavIdx === i ? "active" : ""}`}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarList;
