import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { IoMailOpen } from 'react-icons/io5'

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 px-6 xl:px-32">
        <div>
          <div className="flex gap-2 py-4">
            <FaLink className="text-xl" />
            <h1 className=" text-sm text-gray-400 ">Connect with me</h1>
          </div>
          <Link
              href="https://github.com/MayankUghade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Github</h1>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mayank-ughade-63aab7229/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="md:text-3xl text-2xl" />
              <h1 className="text-sm">LinkedIn</h1>
            </Link>
            <Link
              href="https://x.com/MayankUghade3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaTwitter className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Twitter</h1>
            </Link>
            <Link
              href="https://www.instagram.com/mayank_ughade/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaInstagram className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Instagram</h1>
            </Link>
            <Link
              href="mailto:mayank14ughade@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMailOpen className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Mail</h1>
            </Link>
        </div>
        <div className="text-center text-xs lg:text-sm text-neutral-500 mt-10 flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="flex gap-2">
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
  )
}
