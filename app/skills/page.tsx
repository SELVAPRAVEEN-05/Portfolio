import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  FaGitAlt,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaReact,
  FaTwitter
} from "react-icons/fa6";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoMailOpen,
} from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";

import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";
import { Globe } from "@/components/magicui/globe";

const skills = [
  { name: "HTML", icon: <IoLogoHtml5 className="text-4xl" /> },
  { name: "CSS", icon: <IoLogoCss3 className="text-4xl" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl" /> },
  { name: "TypeScript", icon: <BiLogoTypescript className="text-4xl" /> },
  { name: "ReactJS", icon: <FaReact className="text-4xl" /> },
  { name: "NextJS", icon: <SiNextdotjs className="text-4xl" /> },
  { name: "NodeJS", icon: <IoLogoNodejs className="text-4xl" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-4xl" /> },
  { name: "Python", icon: <IoLogoPython className="text-4xl" /> },
];

const ReviewCard = ({ icon, name }: { icon: any; name: string }) => (
  <figure className="flex items-center gap-2 p-2 rounded-xl border bg-white/5 hover:bg-white/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
    {icon}
    <span>{name}</span>
  </figure>
);

export default function Skills() {
  const firstRow = skills.slice(0, skills.length / 2);
  const secondRow = skills.slice(skills.length / 2);

  return (
    <div className="min-h-screen relative flex py-40 lg:px-20 xl:px-32">
      {/* Top Divider */}
      <div className="w-3/5">
        <div className="pt-10 px-6 w-full">
        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {firstRow.map((skill) => (
            <ReviewCard key={skill.name} {...skill} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s] w-full">
          {secondRow.map((skill) => (
            <ReviewCard key={skill.name} {...skill} />
          ))}
        </Marquee>
      </div>
        <div className="flex w-1/3 flex-col gap-5 px-5 pt-5 border rounded-lg">
          <div className="flex gap-2 ">
            <FaLink className="text-xl" />
            <h1 className=" text-sm text-gray-400">Connect with me</h1>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <Link
              href="https://github.com/MayankUghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Github</h1>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mayank-ughade-63aab7229/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="md:text-3xl text-2xl" />
              <h1 className="text-sm">LinkedIn</h1>
            </Link>
            <Link
              href="https://x.com/MayankUghade3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaTwitter className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Twitter</h1>
            </Link>
            <Link
              href="https://www.instagram.com/mayank_ughade/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaInstagram className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Instagram</h1>
            </Link>
            <Link
              href="mailto:mayank14ughade@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMailOpen className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Mail</h1>
            </Link>
          </div>
      </div>
      </div>
      <div className="relative flex size-full w-2/5 h-[600px] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pt-8">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="bottom-0" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    </div>
  );
}


{/* <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      <h2 className="text-3xl sm:text-4xl font-serif text-center">
        <span className="text-purple-600 font-bold">Skills</span>{" "}Known
      </h2>
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div> */}