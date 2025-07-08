"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "@/components/magicui/particles";
import Skills from "@/app/skills/page";
import AboutUs from "@/app/aboutUs/page";
import Projects from "@/app/projects/page";
import ContactUs from "@/app/contactUs/page";
import Home from "@/app/home/page";

export default function LayoutPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative overflow-hidden bg-background">
      {/* <section id="home"><Home /></section> */}
      {/* <section id="about"><AboutUs /></section> */}
      {/* <section id="skills"><Skills /></section> */}
      <section id="projects"><Projects /></section>
      {/* <section id="contact"><ContactUs /></section> */}
      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      /> */}
    </div>
  );
}
