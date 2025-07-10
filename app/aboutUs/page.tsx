"use client";
import Image from "next/image";
import laptopImg from "@/public/images/photo.jpg";

export default function AboutUs() {
  return (
    <section className="min-h-screen w-full py-24">
      {/* Top Divider */}
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-serif text-center">
        Know Who <span className="text-purple-600 font-bold">I'M</span>
      </h2>
      {/* Bottom Divider */}
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 pt-10 px-6 lg:px-16 xl:px-32">
        {/* Left - Image */}
        <div className="w-full md:w-2/5 lg:w-1/4 h-80 sm:h-96 md:h-80 lg:h-96  overflow-hidden shadow-lg flex items-center justify-center">
          <Image
            src={laptopImg}
            alt="Laptop"
            className="object-cover w-full h-full rounded-xl"
            priority
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-2/3 text-sm xl:text-xl lg:text-lg leading-relaxed">
          <p>
            Hi, I am <span className="text-purple-500 font-semibold">SELVAPRAVEEN S</span>, a 21-year-old Full Stack Web Developer and
            third-year <span className="font-medium">B.E. CSE</span> student at Bannari Amman Institute of Technology.<span className="hidden xl:inline"> I'm from Tiruppur and passionate about building modern, user-friendly web applications.</span>
          </p>

          <p className="mt-6">
            I work mainly with the <span className="text-green-400 font-medium">MERN STACK</span> to create responsive websites and
            full-stack clones.<span className="hidden md:inline"> I'm always exploring new technologies to improve my skills and enjoy bringing creative ideas to life through code.</span>
          </p>

          <p className="mt-6">
            Beyond coding, I love playing{" "}
            <span className="text-yellow-400 font-semibold">CHESS</span>,
            <span className="hidden md:inline">
              {" "}
              which sharpens my strategic thinking and problem-solving. I'm currently
              focused on personal projects to continue growing as a developer.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
