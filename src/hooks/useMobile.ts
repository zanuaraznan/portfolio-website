import { useEffect, useState } from "react";

export const useMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 768 ? setMobile(false) : setMobile(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
