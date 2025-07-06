"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import lottie to avoid SSR mismatch
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../../public/animations/cantact.json";

export default function ContactUs() {
  const emailLink = "mailto:selvapraveen2005@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks for reaching out! ✨");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-20 px-6 flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center relative z-10">
        Contact Me
      </h1>

      {/* Main Content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Lottie */}
        <div className="w-full max-w-sm">
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Form */}
        <div className="relative w-full max-w-lg border border-slate-300 dark:border-slate-700 p-6 shadow-lg rounded-md backdrop-blur-xl">
          <form onSubmit={handleSubmit}>
            <InputField
              label="Name"
              id="name"
              type="text"
              placeholder="Please enter your name here"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              id="email"
              type="email"
              placeholder="Please enter your email here"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="flex flex-col mb-4 space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                placeholder="Please enter your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-neutral-300 dark:border-neutral-700 text-sm text-black dark:text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-y min-h-[80px] max-h-[135px]"
                required
              />
            </div>

            <button
              type="submit"
              className="relative my-6 h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-semibold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:bg-neutral-900"
            >
              <p className="py-1 border border-neutral-700 hover:bg-neutral-950 rounded">
                Let's Connect 🚀
              </p>
            </button>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
              <SocialButton label="LinkedIn" link="https://www.linkedin.com/in/amar-tripathi" color="bg-[#0077B5]" />
              <SocialButton label="GitHub" link="https://github.com/amartripathi0" color="bg-[#333333]" />
              <SocialButton label="Email" link={emailLink} color="bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-neutral-500 mt-10 text-center">
        <span>
          Designed & Developed by{" "}
          <a href="/" className="text-purple-400 underline decoration-blue-400">SELVAPRAVEEN S</a>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="font-semibold">© 2025 SELVAPRAVEEN S</span>
        <span className="hidden sm:inline">|</span>
        <span>selvapraveen2005@gmail.com</span>
      </footer>
    </section>
  );
}

// Input field reusable
function InputField({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col mb-4 space-y-2">
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-neutral-300 dark:border-neutral-700 text-sm text-black dark:text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        required
      />
    </div>
  );
}

// Social button reusable
function SocialButton({ label, link, color }: { label: string; link: string; color: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full h-10 rounded-md ${color} px-4 text-sm text-white font-medium shadow-md hover:opacity-90 transition`}
    >
      {label}
    </a>
  );
}
