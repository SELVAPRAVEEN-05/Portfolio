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
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full sm:w-[90%] md:w-[45%] xl:w-[39%]"
    >
      <Card className="rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
        <div className="relative w-full h-48">
          <Image
            src={data.imageUrl || "/fallback.png"}
            alt={`${data.title} thumbnail`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="/blur-placeholder.png" // Add a 10x10 base64 blur image in public folder
          />
        </div>

        <CardContent className="p-6 space-y-4 flex flex-col flex-grow justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{data.title}</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              {data.description}
            </CardDescription>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Technologies Used:</div>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: any) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-auto">
            <Link
              href={data.githubLink}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </Link>
            <Link
              href={data.liveLink}
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGlobe className="w-4 h-4" />
              Live Demo
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
