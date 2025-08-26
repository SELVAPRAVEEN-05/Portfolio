"use client";
import Lottie from "lottie-react";
import animationData from "../../public/animations/laptop.json";
import Type from "@/components/type";
import { useTheme } from "next-themes";
import Script from "next/script";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

declare global {
  interface Window {
    particlesJS: (elementId: string, config: object) => void;
  }
}

export default function Home() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined" && window?.particlesJS) {
      window?.particlesJS("particles-js", getParticlesConfig(resolvedTheme));
    }
  }, [resolvedTheme]);

  const getParticlesConfig = (theme: string | undefined) => {
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
          speed: 10,
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="min-h-screen relative bg-gray-100 dark:bg-transparent">
          <div id="particles-js" className="absolute inset-0 z-0" />
          <div className="px-7 md:px-7 lg:px-20 xl:px-32 py-20 sm:py-24 md:py-40">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="w-full md:w-7/12 flex flex-col items-center md:items-start md:text-left">
                <div className="flex gap-2 mt-7">
                  <TextAnimate
                    animation="slideLeft"
                    by="character"
                    className="text-3xl sm:text-4xl font-bold mb-4 "
                    delay={0.1}
                    duration={0.6}
                  >
                    Hi There!
                  </TextAnimate>
                  <TextAnimate
                    animation="slideLeft"
                    by="word"
                    className="wave text-3xl sm:text-4xl font-bold"
                    delay={0.7}
                    duration={0.6}
                  >
                    👋🏻
                  </TextAnimate>
                </div>
                <div className="flex gap-2">
                  <TextAnimate
                    animation="slideLeft"
                    by="character"
                    className="text-2xl sm:text-3xl font-semibold"
                    delay={0.1}
                    duration={0.6}
                  >
                    I'M
                  </TextAnimate>
                  <TextAnimate
                    animation="slideLeft"
                    by="character"
                    className="text-2xl sm:text-3xl font-semibold text-primary"
                    delay={0.7}
                    duration={0.6}
                  >
                    SELVAPRAVEEN S
                  </TextAnimate>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Type />
                </div>
              </div>

              {/* Lottie Animation Section */}
              <div className="w-full md:w-5/12 flex md:justify-end justify-center">
                <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px]">
                  <Lottie animationData={animationData} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
