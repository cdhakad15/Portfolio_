"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { TwitterIcon } from "./Icons/TwitterIcon";
import { GithubIcon } from "./Icons/GitHubIcon";
import { LinkedInIcon } from "./Icons/LinkedInIcon";
import LeetcodeIcon from "./Icons/LeetcodeIcon";
import { MoonIcon, SunIcon } from "./Icons/ModeIcon";
import useThemeSwitch from "@/hooks/useThemeSwitch";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/services",
    name: "Services",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

function Navbar() {
  const pathname = usePathname();
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" max-w-screen-xl mx-auto px-4 w-full ">
      <div className="flex justify-between items-center py-3">
        {/* logo */}
        <div
          className="text-xl h-14 w-14 bg-[#1b1b1b] flex items-center justify-center rounded-full dark:bg-light cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <p className="text-white text-2xl font-semibold dark:text-dark">CD</p>
        </div>

        {/* page links */}
        <div className="  gap-4 hidden md:flex">
          {links.map((link, idx) => (
            <Link href={link.href} className="text-lg relative group" key={idx}>
              <p className="dark:text-white">{link.name}</p>
              <span
                className={
                  pathname === link.href
                    ? "bg-black w-full h-[2px] absolute dark:bg-white"
                    : "bg-black w-0 h-[2px] absolute group-hover:w-full transition-all ease dark:bg-white"
                }
              ></span>
            </Link>
          ))}
        </div>

        {/* social links */}
        <div className=" gap-4 hidden md:flex">
          <Link
            href={"https://www.linkedin.com/in/chetan-dhakad-018910241/"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <LinkedInIcon className={""} />
          </Link>
          <Link
            href={"https://github.com/cdhakad15"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <GithubIcon className={"dark:bg-light rounded-full"} />
          </Link>
          <Link
            href={"https://leetcode.com/chtn1512/"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <LeetcodeIcon className={""} />
          </Link>

          <Link
            href={"https://twitter.com/ChetanDhak77220"}
            className="hover:translate-y-[-4px] transition-all"
            target="_blank"
          >
            <TwitterIcon className={""} />
          </Link>

          <button
            className=" flex items-center justify-center rounded-full"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon
                className={"fill-dark dark:fill-light dark:text-white"}
              />
            ) : (
              <MoonIcon className={"fill-dark dark:fill-light"} />
            )}
          </button>
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            size={25}
            className="dark:text-white text-dark"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed h-screen w-full top-0 left-0 bottom-0 flex items-center md:hidden justify-center  backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-[320px] flex flex-col items-center gap-16 bg-dark dark:bg-light py-8 px-5 rounded-xl relative"
            whileInView={{
              scale: 1.1,
            }}
          >
            <IoMdClose
              size={25}
              className="dark:text-dark text-light absolute top-3 right-3 hover:scale-120"
              onClick={() => setIsOpen(false)}
            />
            {/* page links */}
            <div className="  gap-4 flex flex-col items-center">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  className="text-lg relative group"
                  key={idx}
                  onClick={() => setIsOpen(false)}
                >
                  <p className="dark:text-dark text-light">{link.name}</p>
                  <span
                    className={
                      pathname === link.href
                        ? "w-full h-[2px] absolute dark:bg-dark bg-light"
                        : "bg-light w-0 h-[2px] absolute group-hover:w-full transition-all ease dark:bg-dark"
                    }
                  ></span>
                </Link>
              ))}
            </div>

            {/* social links */}
            <div className=" gap-4 flex">
              <Link
                href={"https://www.linkedin.com/in/sumit-mahour/"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <LinkedInIcon className={""} />
              </Link>

              <Link
                href={"https://github.com/SumitM28"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <GithubIcon
                  className={
                    "dark:bg-light rounded-full text-light dark:text-dark"
                  }
                />
              </Link>
              <Link
                href={"https://leetcode.com/sumitM28/"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <LeetcodeIcon className={""} />
              </Link>
              <Link
                href={"https://twitter.com/SumitMa65314533"}
                className="hover:translate-y-[-4px] transition-all"
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                <TwitterIcon className={""} />
              </Link>

              <button
                className=" flex items-center justify-center rounded-full "
                onClick={() => {
                  setMode(mode === "light" ? "dark" : "light"),
                    setIsOpen(false);
                }}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark dark:fill-light"} />
                ) : (
                  <MoonIcon
                    className={
                      " fill-light dark:fill-light dark:text-white text-white"
                    }
                  />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
