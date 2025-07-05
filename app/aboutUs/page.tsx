"use client";
import { ImPointRight } from "react-icons/im";
import Image from "next/image";
import laptopImg from "@/public/laptop.png";

export default function AboutUs() {
  return (
    <div className="h-screen px-4 py-4">
      <div className="text-4xl font-serif pt-36 pb-24 text-center w-2/3">
        Know Who <strong className="text-purple-600">I'M</strong>
      </div>
      <div className="flex justify-between">
        <div className="w-2/5  flex justify-center">
          {/* <Image
          src={laptopImg}
          alt="about"
          className="w-full h-auto max-w-sm"
          priority
        /> */}
        <div className="bg-blue-50 w-80">
          hi
        </div>
        </div>
          <div className="w-3/5 pl-32 pr-20 text-xl">
            <p>
              Hi Everyone, I am <span className="text-purple-600 font-semibold">Selvapraveen S</span> from{" "}
              <span className="text-purple-600 font-semibold">Tamil Nadu, India.</span>
              <br />
              I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul className="list-none pl-2 pt-2 space-y-2">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <ImPointRight className="text-purple-500" /> Playing Games
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <ImPointRight className="text-purple-500" /> Watching Movies
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <ImPointRight className="text-purple-500" /> Travelling
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}
