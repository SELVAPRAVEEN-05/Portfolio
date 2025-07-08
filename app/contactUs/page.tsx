"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "@/components/assets/cantact.json";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks for reaching out! ✨");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen w-full px-6 py-16 flex flex-col">
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      <h2 className="text-3xl sm:text-4xl font-serif text-center">
        Let's <span className="text-purple-600 font-bold">Connect</span>
      </h2>
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>

      <div className="w-full flex flex-col lg:px-12 xl:px-24 lg:flex-row items-center justify-between gap-12">
        <div className="relative w-full md:w-3/5 lg:w-2/5">
          <Lottie animationData={animationData} loop={true} />
        </div>

        <div className="w-full xl:w-2/5 lg:w-1/2 border border-slate-300 dark:border-slate-700 p-6 rounded-md shadow-lg backdrop-blur-lg bg-white/20 dark:bg-black/20">
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
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Please enter your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-neutral-300 dark:border-neutral-700 text-sm text-black dark:text-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 resize-y min-h-[100px] max-h-[180px]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-10 bg-blue-900 text-white font-semibold rounded-md hover:brightness-110 transition"
            >
              Let's Connect 🚀
            </button>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between">
              <SocialButton
                label="Phone"
                link="tel:+91234567890"
                color="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 mt-6"
              />
              <SocialButton
                label="Whatsapp"
                link="https://wa.me/+911234567890"
                color="bg-gradient-to-r from-green-600 to-green-800 dark:from-emerald-400 dark:to-emerald-600 mt-6"
              />
              <SocialButton
                label="Email"
                link="mailto:selvapraveen2005@gmail.com"
                color="bg-gradient-to-r from-rose-400 to-red-500 dark:from-red-700 dark:to-rose-600 mt-6"
              />
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center text-xs lg:text-sm text-neutral-500 mt-10 flex flex-col md:flex-row items-center justify-center gap-2">
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
      </footer>
    </div>
  );
}

// Reusable input field
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
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
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

// Reusable Social Button
function SocialButton({
  label,
  link,
  color,
}: {
  label: string;
  link: string;
  color: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full sm:w-[calc(33%-0.5rem)] text-center h-10 rounded-md ${color} text-white font-medium flex items-center justify-center hover:opacity-90 transition`}
    >
      {label}
    </a>
  );
}
