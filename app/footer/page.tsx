"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLink, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { IoMailOpen } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <div className="py-8 px-6 xl:px-32 bg-gray-100 dark:bg-slate-900 dark:text-gray-300">
      {/* Grid wrapper for responsiveness */}
      <div className="grid grid-cols-1 md:flex justify-between gap-10 ">
        {/* Left Section */}
        <div>
          <div className="gap-3 ml-[-7px]">
            <Link
              className="flex justify-start items-center gap-1 mb-4"
              href="/"
            >
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
              <p className="font-bold text-inherit">PortFolio</p>
            </Link>
            <p className="py-2 mb-2">Thanks for visiting my Portfolio ❤️</p>
          </div>
          <div className="flex gap-2 py-1 items-center">
            <ImPhone className="text-lg" />
            <h1 className="text-gray-400">Phone :</h1>
          </div>
          <div className="mb-6">+919025174530</div>
          <div className="flex gap-2 py-1 items-center">
            <MdMarkEmailUnread className="text-xl" />
            <h1 className="text-gray-400">E-mail :</h1>
          </div>
          <div>selvapraveen2005@gmail.com</div>
        </div>

        {/* Middle Section */}
        <div className="hidden lg:block">
          <div className="flex gap-2 pb-4 ">
            <FaLink className="text-xl" />
            <h1 className="text-sm text-gray-400">Quick Links</h1>
          </div>
          <div className="flex flex-col gap-5">
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-left text-sm hover:text-purple-400 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="pr-20">
          <div className="flex gap-2 pb-4">
            <FaLink className="text-xl" />
            <h1 className="text-sm text-gray-400">Connect with me</h1>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="https://github.com/SELVAPRAVEEN-05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="md:text-3xl text-2xl transition hover:text-black hover:scale-110" />
              <h1 className="text-sm">Github</h1>
            </Link>

            <Link
              href="https://www.linkedin.com/in/selvapraveen-s-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="md:text-3xl text-2xl transition hover:text-[#0077b5] hover:scale-110" />
              <h1 className="text-sm">LinkedIn</h1>
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaTwitter className="md:text-3xl text-2xl transition hover:text-[#1DA1F2] hover:scale-110" />
              <h1 className="text-sm">Twitter</h1>
            </Link>

            <Link
              href="https://www.instagram.com/selva_praveen05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <AiFillInstagram className="md:text-3xl text-2xl transition hover:text-pink-500 hover:scale-110" />
              <h1 className="text-sm">Instagram</h1>
            </Link>

            <Link
              href="mailto:selvapraveen2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMailOpen className="md:text-3xl text-2xl transition hover:text-[#EA4335] hover:scale-110" />
              <h1 className="text-sm">Mail</h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs lg:text-sm text-neutral-500 mt-10 flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex gap-2 flex-wrap justify-center">
          <p>Designed & Developed by</p>
          <p>
            <a
              href="/"
              className="text-purple-400 underline decoration-blue-400"
            >
              SELVAPRAVEEN S
            </a>
          </p>
        </div>
        <span className="hidden sm:inline">|</span>
        <span className="font-semibold">© 2025 SELVAPRAVEEN S</span>
        <span className="hidden sm:inline">|</span>
        <span>© selvapraveen2005@gmail.com</span>
      </div>
    </div>
  );
}
