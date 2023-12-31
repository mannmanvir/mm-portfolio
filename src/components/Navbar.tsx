"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [border, setBorder] = useState("");

  const navBorder = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight >= 30 ? setBorder("shadow dark:border-b") : setBorder("");
    }
  };

  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", navBorder);

    return () => {
      window.removeEventListener("scroll", navBorder);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-zinc-900 dark:border-b dark:border-stone-400">
      {" "}
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <ScrollLink
              to="home"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold cursor-pointer hover:-translate-y-1 hover:text-gray-400 transition-transform">
                  Manvir Mann
                </h2>
              </div>
            </ScrollLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose
                    size={30}
                    color={currentTheme === "dark" ? "white" : "black"}
                  />
                ) : (
                  <IoMdMenu
                    size={30}
                    color={currentTheme === "dark" ? "white" : "black"}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-2 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 hover:dark:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
