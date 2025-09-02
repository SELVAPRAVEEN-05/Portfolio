"use client";

import animationData from "@/components/assets/cantact.json";
import { Button } from "@/components/buttonCard";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
    <div className="relative min-h-screen w-svw py-16 flex flex-col">
      <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      <div className="flex gap-2 justify-center">
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif"
          delay={0.1}
          duration={0.6}
        >
          Let's
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          className="text-3xl sm:text-4xl font-serif text-purple-600 font-bold"
          delay={0.6}
          duration={0.6}
        >
          Connect
        </TextAnimate>
      </div>
      <div className="w-full flex justify-end">
        <div className="bg-primary h-[1px] w-3/5 my-7"></div>
      </div>
      <div className="w-full flex flex-col px-6 lg:px-16 xl:px-32 lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -300, y: 0 }}
          whileInView={{ opacity: 1, x: 10, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative w-full md:w-3/5 lg:w-2/5"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300, y: 0 }}
          whileInView={{ opacity: 1, x: -10, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Button
            as="div"
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "transparent",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 p-6  bg-white/20 dark:bg-black/20 xl:w-[30rem] lg:w-[24rem] md:w-[45rem] w-[24rem] shadow-lg backdrop-blur-md border"
          >
            <form onSubmit={handleSubmit} className="w-full">
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

              {/* ✅ now safe inside form */}
              <button
                type="submit"
                className="w-full h-10 bg-blue-900 text-white font-semibold rounded-md hover:brightness-110 transition"
              >
                Let's Connect 🚀
              </button>

              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between">
                <SocialButton
                  label="Phone"
                  link="tel:+919025174530"
                  icon={<FaPhone className="mr-2" />}
                  color="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 mt-6"
                />
                <SocialButton
                  label="Whatsapp"
                  link="https://wa.me/+919025174530"
                  icon={<FaWhatsapp className="mr-2" />}
                  color="bg-gradient-to-r from-green-600 to-green-800 dark:from-emerald-400 dark:to-emerald-600 mt-6"
                />
                <SocialButton
                  label="Email"
                  link="mailto:selvapraveen2005@gmail.com"
                  icon={<FaEnvelope className="mr-2" />}
                  color="bg-gradient-to-r from-rose-400 to-red-500 dark:from-red-700 dark:to-rose-600 mt-6"
                />
              </div>
            </form>
          </Button>
        </motion.div>
      </div>
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

// Reusable Social Button with Icon
function SocialButton({
  label,
  link,
  color,
  icon,
}: {
  label: string;
  link: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full sm:w-[calc(33%-0.5rem)] text-center h-10 rounded-md ${color} text-white font-medium flex items-center justify-center hover:opacity-90 transition`}
    >
      {icon}
      {label}
    </a>
  );
}
