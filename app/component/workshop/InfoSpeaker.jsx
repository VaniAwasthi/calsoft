"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LinkdineImg from "../../assets/webinar/linkedin.svg";

import CalTIAImage from "../../assets/webinar/CtaiaImage.webp";
import Link from "next/link";

export const WhyCalTIA = () => {
  return (
    <section className="px-4 md:px-16 py-10 w-full">
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="manrope container mx-auto  rounded-xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={CalTIAImage}
            alt="CalTIA Illustration"
            className="w-full h-[300px] md:h-[500px] object-cover"
            placeholder="blur"
            height={400}
            width={400}
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 p-6  text-white flex flex-col bg-[#2E3092]">
          <motion.h2
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl md:text-[35px] font-semibold mb-3"
          >
            Why CalTIA?
          </motion.h2>
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            s
            className="text-sm md:text-[20px] mb-4 py-4"
          >
            CalTIA (Calsoft Test Impact Analyzer) is an AI-enabled test
            automation on-prem solution designed to tackle the complexity of
            modern regression testing.
          </motion.p>

          <motion.ul
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="list-disc list-inside space-y-2 text-sm md:text-[15px]"
          >
            <li>Optimizes end-to-end testing with advanced AI/ML</li>
            <li>Executes critical test subsets to reduce regression</li>
            <li>15% faster GTM, leaner and smarter regression</li>
            <li>36% reduction in infrastructure costs</li>
            <li>Seamlessly integrates with CI/CD pipelines</li>
            <li>On-prem solution keeps sensitive data in-house</li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export const SpeakerSecWorkshop = ({ people }) => {
  return (
    <section className="container mx-auto px-6 py-12 md:px-16  ">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" bg-[#F5F5F5]  py-10"
      >
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-2 items-start px-2">
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
              className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_35%)]"
            >
              Speakers
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-18 md:gap-16 items-center text-black">
              {people.speakers.map((speaker, index) => (
                <div className="relative  border-[#2E3092] border-[3px] bg-[#F5F5F5] text-black rounded-[20px] flex items-center pl-10 pr-6 py-4 min-h-[110px] w-full max-w-[250px] xl:max-w-2/3 mx-auto">
                  {/* Outer Circle */}
                  <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
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
          {/* === HOST === */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 md:pl-8  pt-10 md:pt-0"
          >
            <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_30%)]">
              {" "}
              Host
            </h2>
            <div className="grid grid-cols-1 gap-18 md:gap-16 items-center text-white">
              {people.host.map((host, index) => (
                <div className="relative bg-[#353BA5] text-white rounded-[20px] flex items-center pl-20 pr-6 py-4  min-h-[110px] w-full max-w-[250px] xl:max-w-2/3 mx-auto">
                  {/* Outer Circle */}
                  <div className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2">
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
