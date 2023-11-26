import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { skill: "HTML", docs: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { skill: "CSS", docs: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  {
    skill: "Java",
    docs: "https://docs.oracle.com/en/java/javase/17/",
  },
  { skill: "TypeScript", docs: "https://www.typescriptlang.org/docs/" },
  { skill: "React", docs: "https://react.dev/" },
  { skill: "Next.js", docs: "https://nextjs.org" },
  { skill: "Tailwind CSS", docs: "https://tailwindcss.com/" },
  { skill: "Github", docs: "https://docs.github.com/en" },
  { skill: "Jira", docs: "https://confluence.atlassian.com/jira" },
  { skill: "Prisma", docs: "https://www.prisma.io/" },
  { skill: "Express", docs: "https://expressjs.com/" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-yellow-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Manvir Mann and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> computer science
              student based in Sacramento, CA.
            </p>
            <br />
            <p>
              I am currently pursuing a BS in Computer Science at California
              State University, Sacramento, and I anticipate graduating in Fall
              2023.
            </p>
            <br />
            <p>
              When I have free time, I like reading, playing videogames, and
              spending time with my family. I am always looking forward to
              learning new things and broadening my perspective on life.
            </p>
            <br />
            <p>
              I think you should{" "}
              <span className="font-bold text-yellow-500">
                always keep growing
              </span>
              , and that's what I aim for. I love tech, and I'm always trying to
              push what's possible. I am excited to see where my career goes and
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <Link key={idx} href={item.docs} target="_blank">
                    <p className="bg-zinc-300 px-4 py-2 mr-2 mt-2 text-zinc-800 rounded font-semibold hover:bg-zinc-400 hover:text-gray-900 hover:scale-105 transition">
                      {item.skill}
                    </p>
                  </Link>
                );
              })}
            </div>
            <Image
              src="/about-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:-bottom-1 md:left-35 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
