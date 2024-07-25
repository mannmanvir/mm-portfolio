"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare, BsDownload } from "react-icons/bs";

interface Project {
  name: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  documentDownload?: string;
}

const projects: Project[] = [
  {
    name: "Active Directory Home Lab",
    description:
      "Configured a virtual environment with Windows Server 2022 as the domain controller and joined a Windows 10 client, creating user accounts to explore authentication, authorization, and domain management.",
    image: "/active_directory.png",
  },
  {
    name: "Tea-Rex",
    description:
      "Tea-Rex is a website for a local boba shop allowing customers to place online orders and employees to manage the menu. Built alongside a group of other computer science students.",
    image: "/tea-rex.png",
    github: "https://github.com/khanhtruong0808/tea-rex",
    link: "https://tea-rex.vercel.app",
  },
  {
    name: "Feed",
    description:
      "Feed is a messaging board where users can create accounts and post messages on the main page. It uses a Rest API for account management and posts, along with real-time login and password recovery features.",
    image: "/feed.png",
    github: "https://github.com/TrevorStreng/Feed",
    link: "https://feed-friends.vercel.app",
  },
  {
    name: "Malware Network Forensic Investigation",
    description:
      "Performed network forensic analysis on a pcap file to identify malicious traffic, download sources, and potential malware infections by analyzing network protocols, conversations, and packet data to uncover security incidents.",
    image: "/network.png",
    documentDownload: "/network_forensics.pdf",
  },
  {
    name: "Metasploitable Tikiwiki",
    description:
      "Conducted a SQL injection attack on a purposefully vulnerable website, exploiting vulnerabilities to gain unauthorized access to sensitive employee information, including names, salaries, birth dates, SSNs, and passwords.",
    image: "/tikiwiki.png",
    documentDownload: "/tikiwiki_documentation.pdf",
  },
  {
    name: "Custom Game",
    description:
      "This is a Java-based project in which a custom game engine was provided with the goal of creating a sprite that can interact with the game environment.",
    image: "/130-game.png",
    github: "https://github.com/mannmanvir/Game",
    link: "https://github.com/mannmanvir/Game",
  },
];

const ProjectsSection: React.FC = () => {
  const handleDownload = (path: string) => {
    window.open(path, "_blank");
  };

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  {project.link ? (
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl"
                    />
                  )}
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.documentDownload && (
                      <BsDownload
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                        onClick={() =>
                          project.documentDownload &&
                          handleDownload(project.documentDownload)
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
