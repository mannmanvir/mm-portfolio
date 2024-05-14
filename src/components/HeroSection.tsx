"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I'm Manvir!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I am a{" "}
            <span className="font-semibold text-yellow-500">CS Graduate </span>
            based in Sacramento, CA. Striving to develop software that not only
            simplifies tasks, but also adds meaning to life.
          </p>
          <div className="flex flex-col items-center md:flex-row md:space-x-4 md:items-start">
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-yellow-600 rounded shadow cursor-pointer hover:bg-yellow-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <a
              href="/Manvir_Mann_Resume_20240514.pdf"
              download="Manvir_Mann_Resume_20240514.pdf"
              className="text-neutral-100 font-semibold px-6 py-3 bg-yellow-600 rounded shadow hover:bg-yellow-700 inline-flex items-center space-x-3 mt-4 md:mt-0"
            >
              Download CV
              <AiOutlineArrowDown
                color="white"
                className="h-4 w-4"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
