"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/magicui/card";
import { Badge } from "@/components/magicui/badge";
import { FaGithub } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <Card className="rounded-lg overflow-hidden shadow-lg flex flex-col">
        <div className="relative h-[13rem] md:h-[16rem]">
          <Image
            src={data.imageUrl || "/fallback.png"}
            alt={`${data.title} thumbnail`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
          />
        </div>

        <CardContent className="p-6 space-y-4 flex flex-col flex-grow justify-between">
          <div>
            <CardTitle className="text-[18px] lg:text-xl xl:text-2xl font-semibold">
              {data.title}
            </CardTitle>
            <CardDescription className="text-sm xl:text-[16px] mt-2">
              {data.description}
            </CardDescription>
          </div>

          <div className="space-y-4">
            <div className="lg:text-sm xl:text-[16px] font-medium">
              Technologies Used:
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-3 w-full md:overflow-x-scroll md:scrollbar-hide">
              {data.tags.map((tag: any) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs lg:text-sm xl:text-[16px] md:whitespace-nowrap"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <Link
              href={data.githubLink}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="md:w-4 md:h-4" />
              GitHub
            </Link>
            <Link
              href={data.liveLink}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-xs md:text-sm font-medium shadow-sm transition-colors hover:bg-violet-200 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGlobe className="md:w-4 md:h-4" />
              Live Demo
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
