import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaGithub,
} from "react-icons/fa6";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { MoonIcon, SunIcon } from "./SwitchIcon";
import { motion } from "framer-motion";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Articles", path: "/articles" },
];

const navIcon = [
  {
    name: "Instagram",
    path: "https://www.instagram.com/sodiqardianto/",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/sodiqardianto.wk/",
    icon: <FaFacebookF />,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/sodiqardianto",
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/sodiqardianto/",
    icon: <FaLinkedin />,
  },
  {
    name: "Github",
    path: "https://github.com/sodiqardianto",
    icon: <FaGithub />,
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1021) {
        setIsOpen(false);
        setIsBlurred(false);
      } else {
        setIsBlurred(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* MOBILE MENU */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center text-light dark:text-dark">
            {navData?.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="relative group my-1"
                  onClick={() => handleClick()}
                >
                  {link.name}
                  <span
                    className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                      pathname === link.path ? "w-full" : "w-0"
                    } dark:bg-dark`}
                  ></span>
                </Link>
              );
            })}
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 text-light dark:text-dark">
            {navIcon.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  target={"_blank"}
                  key={index}
                  className="mx-2 sm:mx-1 hover:-translate-y-1 text-[24px] sm:text-lg"
                >
                  {item.icon}
                </Link>
              );
            })}
            <button
              onClick={() => {
                if (typeof setMode === "function") {
                  setMode(mode === "light" ? "dark" : "light");
                }
              }}
              className={`flex items-center justify-center rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : (
        ""
      )}
      {/* MOBILE MENU */}

      <header
        className={`w-full px-32 py-8 font-medium items-center flex justify-between z-10 fixed dark:text-light ${
          isBlurred ? "backdrop-blur-md" : ""
        }`}
      >
        {/* BURGER BUTTON */}
        <button
          className="hidden lg:flex flex-col justify-center items-center bg-dark p-3 rounded-lg dark:bg-light lg:left-0 lg:ml-8 lg:-bottom-0 lg:top-auto lg:absolute"
          onClick={handleClick}
        >
          <span
            className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {/* BURGER BUTTON */}

        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            {navData?.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className="relative group mr-10"
                >
                  {link.name}
                  <span
                    className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                      pathname === link.path ? "w-full" : "w-0"
                    } dark:bg-light`}
                  ></span>
                </Link>
              );
            })}
          </nav>
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
            <button
              onClick={() => {
                if (typeof setMode === "function") {
                  setMode(mode === "light" ? "dark" : "light");
                }
              }}
              className={`flex items-center justify-center rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
