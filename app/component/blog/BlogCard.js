import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";

export const BlogCard = ({ data }) => {
  return (
    <>
      <motion.div
        className="group relative bg-white "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={data.image}
          alt="Slide"
          className="w-full h-44 md:h-56 rounded-2xl object-cover"
        />

        <div className="py-4">
          <p className="text-base font-medium text-black">{data.title}</p>
        </div>

        <motion.div
          whileHover={{ y: -8 }}
          className="absolute -top-4 -right-4 bg-white p-2 border-2 border-[#2E3092] rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
        >
          <Link href={data.link} className="cursor-pointer">
            <LuArrowUpRight className="text-3xl text-[#2E3092]" />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};
