"use client";

import ProjectCard from '@/components/projectCard';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Projects() {
  const { theme } = useTheme();

  const projectsData = [
    {
      title: "Dev-Union",
      description:
        "Dev Union is a full-stack app enabling users to create chat rooms and collaborate on projects with real-time video calls and screen-sharing.",
      tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
      githubLink: "https://github.com/MayankUghade/Code-Together",
      liveLink: "https://dev-union.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
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
        "HuggingFace AI",
      ],
      githubLink: "https://github.com/MayankUghade/NewsNugget",
      liveLink: "https://news-nugget.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
    {
      title: "InsightFul",
      description:
        "InsightFul is a fullstack tool that helps saas developers collect valuable user feedback and insights to improve your product and delight your customers.",
      tags: ["React", "Next.js", "Tailwind", "Next-Auth", "MongoDB", "Vercel"],
      githubLink: "https://github.com/MayankUghade/InsightFul",
      liveLink: "https://insightful-two.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
    {
      title: "Epic-Energize",
      description:
        "Epic-Energize is a fitness app with a comprehensive exercise database and RapidAPI integration, providing structured workouts.",
      tags: ["React", "Tailwind", "RapidAPI"],
      githubLink: "https://github.com/MayankUghade/Epic-Energize",
      liveLink: "https://epic-energize.vercel.app/",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
  ];

  return (
    <div className="min-h-screen mb-10 w-full flex flex-col items-center justify-center mt-[200px]">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>

      <button className="mt-6 underline text-sm text-purple-500 hover:text-purple-600 transition">
        <Link href="/myprojects">More Projects</Link>
      </button>
    </div>
  );
}
