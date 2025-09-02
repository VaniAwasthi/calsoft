"use client";

import Image from "next/image";
import React, { useState } from "react";
import sendResume from "../../assets/career/SendResume.webp";
import { motion } from "framer-motion";
import JobApplicationModal from "./JobForm";

export default function SendResume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute top-0 h-full w-full bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0)_100%)]">
        <div className="container text-white">
          {" "}
          <div className="py-8 sm:py-16 md:py-20 flex md:flex-row flex-col md:gap-0 gap-4 2xs:gap-8 justify-between md:items-center items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-2"
            >
              <p className="text-4xl font-bold">Didn’t find relevant jobs?</p>
              <p className="text-2xl">Send us your resume anyway.</p>
            </motion.div>
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              Send Resume
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
            <JobApplicationModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </div>
      <Image
        src={sendResume}
        className="w-full h-full object-cover object-[center_50%]"
        alt="send resume"
      />
    </div>
  );
}
