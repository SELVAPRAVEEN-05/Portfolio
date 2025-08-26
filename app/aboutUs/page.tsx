"use client";
import Image from "next/image";
import Photo from "@/components/assets/photo.jpg";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full py-24">
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      {/* Heading */}
      <div className="flex gap-2 justify-center">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif"
          delay={0.1}
          duration={0.2}
        >
          Know Who
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif text-purple-600 font-bold"
          delay={0.4}
          duration={0.6}
        >
          I'M
        </TextAnimate>
      </div>
      {/* Bottom Divider */}
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 pt-10 px-6 lg:px-16 xl:px-32">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-2/5 lg:w-1/4 h-80 sm:h-96 md:h-80 lg:h-96  overflow-hidden shadow-lg flex items-center justify-center"
        >
          <Image
            src={Photo}
            alt="Laptop"
            className="object-cover w-full h-full rounded-xl"
            priority
          />
        </motion.div>

        {/* Right - Text */}
        <div className="w-full md:w-2/3 text-sm xl:text-xl lg:text-lg leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I am{" "}
            <span className="text-purple-500 font-semibold">
              SELVAPRAVEEN S
            </span>
            , a 21-year-old Full Stack Web Developer and third-year{" "}
            <span className="font-medium">B.E. CSE</span> student at Bannari
            Amman Institute of Technology.
            <span className="hidden xl:inline">
              {" "}
              I'm from Tiruppur and passionate about building modern,
              user-friendly web applications.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6"
          >
            I work mainly with the{" "}
            <span className="text-green-400 font-medium">MERN STACK</span> to
            create responsive websites and full-stack clones.
            <span className="hidden md:inline">
              {" "}
              I'm always exploring new technologies to improve my skills and
              enjoy bringing creative ideas to life through code.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6"
          >
            Beyond coding, I love playing{" "}
            <span className="text-yellow-400 font-semibold">CHESS</span>,
            <span className="hidden md:inline">
              {" "}
              which sharpens my strategic thinking and problem-solving. I'm
              currently focused on personal projects to continue growing as a
              developer.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
