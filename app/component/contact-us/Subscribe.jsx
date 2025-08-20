"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Subscribe() {
  return (
    <div className="bg-[#2E3092] py-16">
      <div className="container text-white flex md:flex-row flex-col justify-between gap-5 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 space-y-3"
        >
          <p className="text-[40px] font-semibold">
            Subcribe to our Newsletter
          </p>
          <p className="text-xl">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.{" "}
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[#ffffff33] flex-1 rounded-xl flex justify-between w-full"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="placeholder-white text-white
             focus:outline-none focus:ring-0 pl-8 py-3"
          />
          <button className="text-[#2E3092] p-7 rounded-lg bg-white">
            Subcribe
          </button>
        </motion.div>
      </div>
    </div>
  );
}
