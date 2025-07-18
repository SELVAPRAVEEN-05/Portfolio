"use client"

import { Button } from "@/components/buttonCard";
import { Marquee } from "@/components/magicui/marquee";
import Link from "next/link";
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

  
const workExperience = [
  {
    id: 1,
    title: "Frontend Developer - Crayond",
    desc: "I completed a one-year internship at Crayond, where I built fully responsive websites using Next.js, Tailwind CSS, and HeroUI. During my internship, I contributed to multiple projects, including Fynro, a finance management platform, and Revature, an educational website.",
    className: "md:col-span-2",
    thumbnail: "https://www.shutterstock.com/image-vector/logo-design-houses-residences-villages-260nw-2462964785.jpg",
  },
];

  return (
    <div className="relative py-24">
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      <h2 className="text-3xl sm:text-4xl font-serif text-center">
        My <span className="text-purple-600 font-bold">Skills</span>
      </h2>
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>
        <div className="pt-10 px-6 lg:px-20 xl:px-32 w-full">
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
      {/* <div className="px-6 lg:px-20 xl:px-32 flex w-full mt-10 justify-between"> */}
      <div className="w-full px-6 lg:px-20 xl:px-32 mt-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "transparent",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      {/* <div className="w-full md:w-5/12">
        <div className="flex w-full flex-col gap-5 p-5 border rounded-lg">
          

          <div className="flex flex-col gap-6 mt-5">
            
            
          </div>
      </div>
      </div> */}
    </div>
  );
}