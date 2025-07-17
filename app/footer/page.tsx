import Image from 'next/image';
import Link from 'next/link';
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { ImPhone } from "react-icons/im";
import { IoMailOpen } from 'react-icons/io5';
import { MdMarkEmailUnread } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 px-6 xl:px-32">
      <div className='flex justify-between'>

        <div>
          <div className="gap-3 ml-[-7px]">
          <Link className="flex justify-start items-center gap-1 mb-4" href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40} 
              height={40}/>
            <p className="font-bold text-inherit">PortFolio</p>
          </Link>
        </div>
        <p>

        </p>
          <div className="flex gap-2 py-1 items-center">
            <ImPhone className="text-lg" />
            <h1 className=" text-gray-400 ">Phone :</h1>
          </div>
          <div className='mb-6'>+919025174530</div>
          <div className="flex gap-2 py-1 items-center">
            <MdMarkEmailUnread className="text-xl" />
            <h1 className=" text-gray-400 ">E-mail :</h1>
          </div>
          <div>selvapraveen2005@gmail.com</div>
        </div>
        <div>
          
        </div>
        <div>
          <div className="flex gap-2 py-4">
            <FaLink className="text-xl" />
            <h1 className=" text-sm text-gray-400 ">Connect with me</h1>
          </div>
          <div className='flex flex-col gap-4'>
            <Link
              href="https://github.com/SELVAPRAVEEN-05"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Github</h1>
            </Link>
            <Link
              href="https://www.linkedin.com/in/selvapraveen-s-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="md:text-3xl text-2xl" />
              <h1 className="text-sm">LinkedIn</h1>
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaTwitter className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Twitter</h1>
            </Link>
            <Link
              href="https://www.instagram.com/selva_praveen05?igsh=MXB4YjVvcmhodDh4cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <AiFillInstagram className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Instagram</h1>
            </Link>
            <Link
              href="mailto:selvapraveen2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IoMailOpen className="md:text-3xl text-2xl" />
              <h1 className="text-sm">Mail</h1>
            </Link>
          </div>
        </div>
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
