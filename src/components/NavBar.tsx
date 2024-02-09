import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
];

const navIcon = [
  {
    name: "Instagram",
    path: "/instagram",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    path: "/",
    icon: <FaFacebookF />,
  },
  {
    name: "Twitter",
    path: "/twitter",
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    path: "/linkedin",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    path: "/github",
    icon: <FaGithub />,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full px-32 py-8 font-medium items-center flex justify-between z-10 fixed">
      <nav>
        {navData?.map((link, index) => {
          return (
            <Link key={index} href={link.path} className="relative group mr-10">
              {link.name}
              <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  pathname === link.path ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          );
        })}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center flex-wrap">
        {navIcon.map((item, index) => {
          return (
            <Link
              href={item.path}
              target={"_blank"}
              key={index}
              className="mr-3 hover:-translate-y-1 text-[24px]"
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
