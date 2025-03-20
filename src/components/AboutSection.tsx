import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  ["Windows Server 2022", "https://learn.microsoft.com/en-us/windows-server/"],
  [
    "Active Directory",
    "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services",
  ],
  ["Oracle VM VirtualBox", "https://www.virtualbox.org/wiki/Documentation"],
  ["Linux", "https://www.linux.org/"],
  ["Kali Linux", "https://www.kali.org/docs/"],
  ["Wireshark", "https://www.wireshark.org/docs/"],
  ["WinHex", "https://www.x-ways.net/winhex/"],
  ["OSForensics", "https://www.osforensics.com/"],
  ["Autopsy", "https://www.autopsy.com/about/"],
  ["NIST", "https://www.nist.gov/"],
  ["ITIL", "https://www.axelos.com/certifications/itil-service-management"],
  ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
  [
    "Microsoft Office 365",
    "https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide",
  ],
  ["Google Workspace", "https://workspace.google.com/"],
  ["TCP/IP", "https://www.fortinet.com/resources/cyberglossary/tcp-ip"],
  ["Visual Studio Code", "https://code.visualstudio.com/docs"],
  ["GitHub", "https://docs.github.com/en"],
  ["Git", "https://git-scm.com/doc"],
  ["Jira", "https://confluence.atlassian.com/jira"],
  ["HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["Java", "https://docs.oracle.com/en/java/javase/17/"],
  ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["TypeScript", "https://www.typescriptlang.org/docs/"],
  ["React.js", "https://react.dev/"],
  ["Next.js", "https://nextjs.org"],
  ["Tailwind CSS", "https://tailwindcss.com/"],
  ["Vercel", "https://vercel.com/docs"],
  ["Prisma", "https://www.prisma.io/"],
  ["Express", "https://expressjs.com/"],
].map(([skill, docs]) => ({ skill, docs }));

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
              Hi, my name is Manvir Singh Mann and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> computer science
              graduate based in Sacramento, CA.
            </p>
            <br />
            <p>
              I am currently{" "}
              <span className="font-bold text-yellow-500">open to work</span>{" "}
              and welcome any opportunities that would allow me to keep
              following my passion and gaining knowledge in this industry in
              order to leave my positive mark on the world and those around me
              through my contributions. I am always looking forward to not only
              learning new skills, but further diversifying those that I already
              have.
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
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start gap-2">
              {skills.map((item, idx) => {
                return (
                  <Link key={idx} href={item.docs} target="_blank">
                    <p className="bg-zinc-300 px-4 py-2 text-zinc-800 rounded font-semibold hover:bg-zinc-400 hover:text-gray-900 hover:scale-105 transition flex-grow-0">
                      {item.skill}
                    </p>
                  </Link>
                );
              })}
            </div>
            <Image
              src="/about-image.gif"
              alt=""
              width={400}
              height={400}
              className="hidden md:block md:relative md:bottom-2 md:left-35 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
