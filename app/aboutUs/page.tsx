"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import Script from "next/script";
declare global{
 interface Window {
   particlesJS: (elementId: string, config: object) => void;
 }
}
export default function AboutUs() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined" && window?.particlesJS) {
      window?.particlesJS("particles-js", getParticlesConfig(resolvedTheme));
    }
  }, [resolvedTheme]);

  const getParticlesConfig = (theme: string|undefined) => {
    const isDark = theme === "dark";

    return {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: isDark ? "#ffffff" : "#000000",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 5,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: isDark ? "#ffffff" : "#000000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    };
  };

  return (
    <>
      <Script src="/particles.min.js" strategy="beforeInteractive" />
      <div className="h-[500px] mb-10 relative">
        <div id="particles-js" className="absolute inset-0 z-0" />
        <div className="relative z-10 dark:text-white text-black">
          About Us Content
        </div>
      </div>
    </>
  );
}
