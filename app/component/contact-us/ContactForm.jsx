"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-bold text-[#000000] mb-4 leading-tight">
            Get in touch with us.
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-[55px] font-bold text-[#000000] leading-tight">
            We're here to assist you.
          </h2>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Input Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
          </div>

          {/* Message Section */}
          <div className="space-y-2">
            <label className="block text-2xl text-[#000000] font-medium">
              Message
            </label>
            <textarea
              rows="6"
              className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors resize-none"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#ba0007] text-[#ffffff] px-8 lg:px-12 py-4 lg:py-6 rounded-full text-xl font-medium hover:bg-[#a00006] transition-colors flex items-center gap-3"
            >
              Leave us a Message
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
