"use client";
import React from "react";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";

const BannerWithRightSec = ({
  heroBg,
  title,

  description,
  rightImage,
  buttonText,
  buttonImage,
  hoverImage,
  rightSec = true,
  mainDivClass = "",
  leftSecClass = "",
  rightSecClass = "",
  ImageClass = "",
  ImageClassname = "",
  backgroundMain = "",
  buttonWidth = "!w-[200px]",
}) => {
  return (
    <div
      className={`relative w-full h-[300px] md:h-[450px] lg:h-[550px] ${backgroundMain}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          className={`object-cover object-[100%_25%] md:object-[100%_100%] md:object-center ${ImageClassname}`}
          priority
        />
      </div>

      {/* Overlay Content Section */}
      <div className="relative z-10 h-full flex items-center">
        <div
          className={`container mx-auto px-4 md:px-20 w-full ${mainDivClass}`}
        >
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            {/* Left Section */}
            <div className={`text-white w-full md:w-[55%] ${leftSecClass}`}>
              <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`font-semibold text-left leading-tight text-[24px] md:text-[40px] lg:text-[55px] `}
              >
                {title}
              </motion.h2>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`mt-4 text-[13px] md:text-[16px] leading-relaxed max-w-[90%] md:max-w-[350px] `}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-6 md:mt-8"
              >
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={hoverImage}
                  className={buttonWidth}
                />
              </motion.div>
            </div>

            {/* Right Section - Image */}
            {rightSec && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`hidden md:flex justify-start w-full md:w-1/2 ${rightSecClass}`}
              >
                <Image
                  src={rightImage}
                  alt="Right Illustration"
                  width={500}
                  height={500}
                  className={`object-contain ${ImageClass}`}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithRightSec;
