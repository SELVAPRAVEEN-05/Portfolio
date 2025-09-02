"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import AboutUs from "@/app/aboutUs/page";
import ContactUs from "@/app/contactUs/page";
import Footer from "@/app/footer/page";
import Home from "@/app/home/page";
import Projects from "@/app/projects/page";
import Skills from "@/app/skills/page";
import { Particles } from "@/components/magicui/particles";

export default function LayoutPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative overflow-hidden bg-background">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
