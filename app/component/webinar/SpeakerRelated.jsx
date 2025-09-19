"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkdineImg from "../../assets/webinar/linkedin.svg";
import ReferenceBlogImg from "../../assets/webinar/referenceblogImg.svg";

export const SpeakersHostSection = ({ people }) => {
  return (
    <section className="px-6 py-12 md:px-16 bg-[#F5F5F5] my-[4rem]">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto "
      >
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-2 items-start">
          {/* === SPEAKERS === */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 md:pl-2 pt-10 md:pt-0"
          >
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl text-center sm:text-left font-semibold text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_35%,#ED1C24_77%)]"
            >
              Speakers
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-18 md:gap-16 items-center text-black">
              {people.speakers.map((speaker, index) => (
                <div key={index} className="relative  border-[#2E3092] border-[3px] bg-[#F5F5F5] text-black rounded-[20px] flex items-center pl-10 pr-6 py-4 min-h-[110px] w-full max-w-[250px] xl:max-w-2/3 mx-auto">
                  {/* Outer Circle */}
                  <div  className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className="w-[110px] h-[110px] rounded-full border-[6px] border-white flex items-center justify-center bg-[#353BA5]">
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-[4px] border-[#2E3092]">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="ml-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={speaker.linkdin}>
                        <Image
                          src={LinkdineImg}
                          alt="LinkedIn"
                          width={14}
                          height={14}
                          className="object-contain"
                        />
                      </Link>
                    </div>
                    <h4 className="font-semibold text-[14px]">
                      {speaker.name}
                    </h4>
                    <p className="text-[12px]  leading-snug">{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="hidden md:block w-px bg-gray-300 mx-8 my-10 self-stretch"></div>
          {/* === HOST === */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 md:pl-8  pt-10 md:pt-0"
          >
            <h2 className="text-3xl font-semibold text-[#4C3CA3] mb-4">
              <span className="text-[#E31E24]">Hos</span>t
            </h2>
            <div className="grid grid-cols-1 gap-18 md:gap-16 items-center text-white">
              {people.host.map((host, index) => (
                <div key={index} className="relative bg-[#353BA5] text-white rounded-[20px] flex items-center pl-20 pr-6 py-4  min-h-[110px] w-full max-w-[250px] xl:max-w-2/3 mx-auto">
                  {/* Outer Circle */}
                  <div  className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className="w-[110px] h-[110px] rounded-full border-[6px] border-white flex items-center justify-center bg-[#353BA5]">
                      <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-[4px] border-[#353BA5]">
                        <Image
                          src={host.image}
                          alt={host.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="ml-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Link href={host.linkdin}>
                        <Image
                          src={LinkdineImg}
                          alt="LinkedIn"
                          width={14}
                          height={14}
                          className="object-contain"
                        />
                      </Link>
                    </div>
                    <h4 className="font-semibold text-[16px]">{host.name}</h4>
                    <p className="text-sm text-white/80 leading-snug">
                      {host.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export const BlogAndWebinarSection = ({ blogs = [], webinars = [] }) => {
  return (
    <section className="manrope container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-white mb-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-[35%] lg:w-[40%]">
          <Image
            src={ReferenceBlogImg}
            alt="Reference Visual"
            width={600}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[65%] lg:w-[60%] bg-[#353BA5] text-white  px-2 flex flex-col  gap-6 relative">
          {/* Blogs */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[20%] w-[3px] bg-red-500 rounded-full"></span>

          <div className="px-6 mt-10">
            <h3 className="text-[22px] font-semibold mb-2 relative mt-3">
              Reference Blog:
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              {" "}
              {blogs.map((blog, index) => (
                <li key={index} className="text-sm">
                  <div className="flex justify-between items-start">
                    <p className="pr-4">{blog.title}</p>
                    <Link
                      href={blog.link}
                      className="text-[12px] px-3 py-1 border border-white hover:bg-white hover:text-[#353BA5] transition rounded-full"
                    >
                      Read More...
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Webinars */}
          <div className="px-6 ">
            <h3 className="text-[22px] font-semibold mb-2 relative mt-3">
              Watch our previous webinar:
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              {webinars.map((webinar, index) => (
                <li key={index} className="text-sm">
                  <div className="flex justify-between items-start">
                    <p className="pr-4">{webinar.title}</p>
                    <Link
                      href={webinar.link}
                      className="text-xs px-3 py-1 border border-white hover:bg-white hover:text-[#353BA5] transition rounded-full"
                    >
                      Read More...
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
