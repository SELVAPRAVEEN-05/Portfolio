"use client";

import Blogix from "@/components/assets/blogix.png";
import FoodWeb from "@/components/assets/FoodWeb.png";
import MovieWeb from "@/components/assets/movieWeb.png";
import RP from "@/components/assets/RP.png";
import { TextAnimate } from "@/components/magicui/text-animate";
import ProjectCard from "@/components/projectCard";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Projects() {
  const { theme } = useTheme();

  const projectsData = [
    {
      title: "Movie Web - Movie Search & Watchlist web app",
      description:
        "Movie search and movie app using TMDB API where users can search, filter, sort, watch trailers, and manage a watchlist.",
      tags: [
        "React",
        "Next.js",
        "Hero UI",
        "Tailwind",
        "TMDB API",
        "Vercel",
        "TypeScript",
        "Framer Motion",
      ],
      githubLink: "https://github.com/SELVAPRAVEEN-05/Movie-Watchlist-Web",
      liveLink: "https://movie-watchlist-web.vercel.app/",
      imageUrl: MovieWeb,
    },
    {
      title: "Blogix - AI-Powered Blogging Platform",
      description:
        "InsightFul is a fullstack tool that helps saas developers collect valuable user feedback and insights to improve your product and delight your customers.",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        " PostgreSQL",
        "Vector Db",
        "Typescript",
        "Vercel",
        "Prisma",
      ],
      githubLink: "https://github.com/MayankUghade/InsightFul",
      liveLink: "https://insightful-two.vercel.app/",
      imageUrl: Blogix,
    },
    {
      title: "Food Web - Food Delivery Web App",
      description:
        "A food delivery web app that allows users to Book a table and order food online for birthday parties, weddings, and other events.",
      tags: [
        "React",
        "Next.js",
        "Hero UI",
        "Tailwind",
        "MUI",
        "Vercel",
        "TypeScript",
      ],
      githubLink: "https://github.com/SELVAPRAVEEN-05/food-web",
      liveLink: "https://food-web-flax.vercel.app/",
      imageUrl: FoodWeb,
    },

    {
      title: "Event Manager - Event Booking & Points System",
      description:
        "Developed an event management app to replace Google Forms, boosting student participation by 30%",
      tags: [
        "React",
        "vite",
        "MUI",
        "Node",
        "MySQL",
        "Express",
        "Axios",
        "Tailwind",
        "Figma",
      ],
      githubLink: "https://github.com/MayankUghade/Epic-Energize",
      liveLink: "https://epic-energize.vercel.app/",
      imageUrl: RP,
    },
  ];

  return (
    <div className="min-h-screen py-20 w-full flex flex-col justify-center">
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      <div className="flex flex-col text-center sm:flex-row gap-2 justify-center ">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif"
          delay={0.1}
          duration={0.6}
        >
          A small selection of
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif text-purple-600 font-bold"
          delay={0.7}
          duration={0.6}
        >
          Recent projects
        </TextAnimate>
      </div>
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 px-6 lg:px-16 xl:px-32">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>

      <button className="mt-8 underline text-sm text-purple-500 hover:text-purple-600 transition">
        <Link href={"https://github.com"}>More Projects</Link>
      </button>
    </div>
  );
}
