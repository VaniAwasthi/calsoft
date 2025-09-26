"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-0 bg-black">
      <img
        src="/404Giff.gif" // file inside public/
        alt="Page Not Found"
        className="max-w-sm w-full h-auto"
      />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg sm:text-xl lg:text-2xl text-white"
      >
        This page got lost in the cloud...still waiting for directions
      </motion.p>
      <Link href={"/"}>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="hover:cursor-pointer underline transition-all hover:scale-105 sm:text-lg lg:text-xl mt-3.5 bg-white px-2.5 py-1 rounded-[5px] hover:py-1.5 hover:px-3"
        >
          Back to Home
        </motion.button>
      </Link>
    </main>
  );
}
