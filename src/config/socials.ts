import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";

type Social = {
    name: string;
    url: string;
    icon: IconType;
};

const socials: Social[] = [
    {
        name: "Github",
        url: "https://github.com/zanuaraznan",
        icon: FaGithub,
    },
    {
        name: "Instagram",
        url: "https://instagram.com/zanuar.rsy",
        icon: FaInstagram,
    },
    {
        name: "Linkedin",
        url: "/",
        icon: FaLinkedin,
    },
    {
        name: "Tiktok",
        url: "/",
        icon: FaTiktok,
    },
];

export default socials;
