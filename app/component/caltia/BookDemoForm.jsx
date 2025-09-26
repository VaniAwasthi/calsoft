"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoForm() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-5xl font-bold mb-6 bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_68%)] bg-clip-text text-transparent"
            >
              Book a Demo
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl leading-relaxed text-black max-w-lg"
            >
              Discover how CalTIA™ optimizes your testing process and
              accelerates product releases with intelligent solutions.
            </motion.p>
          </div>
 <motion.button
        onClick={() => setOpen(true)}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="cursor-pointer flex items-center gap-3 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#2e3092" }}
      >
        
            <span>Watch the Teaser</span>
            <div className="flex items-center gap-1">
              <svg
                width="45"
                height="28"
                viewBox="0 0 45 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.1131 0H2.11719C0.929697 0 0 0.921536 0 2.01181V25.9882C0 27.0784 0.929697 28 2.11719 28H30.1131C31.3006 28 32.2303 27.0785 32.2303 25.9882V2.01181C32.2303 0.921581 31.3006 0 30.1131 0ZM34.576 10.1586V17.8398L43.3145 23.5127C44.0215 23.9708 45 23.5127 45 22.7226V5.27507C45 4.4849 44.0215 4.02679 43.3145 4.48667L34.576 10.1586ZM13.0566 6.75999C14.2011 7.5022 22.873 13.0298 23.1485 13.383C23.5235 13.8624 23.4005 14.5247 22.8731 14.8656L13.1292 21.1922C12.2678 21.7959 11.2053 21.21 11.2053 20.3719V7.62639H11.2092C11.2073 6.78649 12.2753 6.25393 13.0566 6.75999ZM20.1835 13.9994L13.5526 18.3053L13.5506 9.69542L20.1835 13.9994Z"
                  fill="white"
                />
              </svg>
            </div>
          </motion.button>

          {/* Modal */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                {/* Modal Content */}
                <motion.div
                  className="relative bg-black rounded-lg shadow-lg w-[90%] md:w-[800px] aspect-video"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-1 right-0 text-white text-3xl font-bold"
                  >
                    ✕
                  </button>

                  {/* YouTube Embed */}
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/dUqpOX1JCdA?autoplay=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column - Form */}
        <div className="space-y-6">
          {/* First Row - Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <input
                type="text"
                placeholder="First Name*"
                className="w-full px-4 py-4 rounded-lg border-0 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: "#f5f5f5" }}
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <input
                type="email"
                placeholder="Work Email*"
                className="w-full px-4 py-4 rounded-lg border-0 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ backgroundColor: "#f5f5f5" }}
              />
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-4 rounded-lg border-0 text-base placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#f5f5f5" }}
            />
          </motion.div>

          {/* GDPR Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-lg" style={{ color: "#2e3092" }}>
              GDPR / Privacy Declaration*
            </h3>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="gdpr-consent"
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
                style={{ accentColor: "#2e3092" }}
              />
              <label
                htmlFor="gdpr-consent"
                className="text-base text-gray-600 leading-relaxed"
              >
                I accept the GDPR / Privacy Declaration of Calsoft Inc
              </label>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="cursor-pointer w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-white font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ba0007" }}
          >
            <span>Submit</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
