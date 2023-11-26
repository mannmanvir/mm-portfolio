import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-neutral-100" : "text-neutral-900";

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div
          className={`flex flex-row items-center justify-center space-x-1 ${textColor}`}
        >
          © 2023 Manvir Mann<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/mannmanvir"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${textColor}`}
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mannmanvir/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className={`hover:-translate-y-1 transition-transform cursor-pointer ${textColor}`}
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
