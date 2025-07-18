"use client";

import ProjectCard from '@/components/projectCard';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import FoodWeb from '@/components/assets/FoodWeb.png';

export default function Projects() {
  const { theme } = useTheme();

  const projectsData = [
    {
      title: "Food Web",
      description:
        "Dev Union is a full-stack app enabling users to create chat rooms and collaborate on projects with real-time video calls and screen-sharing.",
      tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
      githubLink: "https://github.com/SELVAPRAVEEN-05/food-web",
      liveLink: "https://food-web-flax.vercel.app/",
      imageUrl:FoodWeb
    },
    {
      title: "NewsNugget",
      description:
        "NewsNugget, powered by HuggingFace AI, condenses Times of India articles into 60-word summaries for quick and easy updates.",
      tags: [
        "React",
        "Next.js",
        "PostgreSQL",
        "Tailwind",
        "Prisma",
      ],
      githubLink: "https://github.com/SELVAPRAVEEN-05/Movie-Watchlist-Web",
      liveLink: "https://movie-watchlist-web.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
    {
      title: "InsightFul",
      description:
        "InsightFul is a fullstack tool that helps saas developers collect valuable user feedback and insights to improve your product and delight your customers.",
      tags: ["React", "Next.js", "Tailwind", "Next-Auth", "Mongo DB", "Vercel"],
      githubLink: "https://github.com/MayankUghade/InsightFul",
      liveLink: "https://insightful-two.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
    {
      title: "Epic-Energize",
      description:
        "Epic-Energize is a fitness app with a comprehensive exercise database and RapidAPI integration, providing structured workouts.",
      tags: ["React", "Tailwind", "RapidAPI","Node", "Vercel"],
      githubLink: "https://github.com/MayankUghade/Epic-Energize",
      liveLink: "https://epic-energize.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
  ];

  return (
    <div className="min-h-screen py-20 w-full flex flex-col justify-center">
      
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-serif text-center">
       A small selection of{" "} <span className="text-purple-600 font-bold">Recent projects</span>
      </h2>
      {/* Bottom Divider */}
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
