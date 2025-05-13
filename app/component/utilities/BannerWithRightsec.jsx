"use client";
import React from "react";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";

const BannerWithRightSec = ({
  heroBg,
  title,
  title2,
  description,
  rightImage,
  buttonText,
  buttonImage,
  hoverImage,
  titleOneClass = "",
  titleTwoClass = "",
  descriptionClass = "",
  rightSec = true,
  mainDivClass = "",
  leftSecClass = "",
  rightSecClass = "",
  ImageClass = "",
}) => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Background"
          fill
          className="object-cover w-full h-full [object-position:100%_25%] md:object-center"
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
            <div className={`text-white w-[250px] md:w-1/2 ${leftSecClass}`}>
              <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`font-bold text-left leading-8 md:leading-14 ${titleOneClass}`}
              >
                {title}
              </motion.h2>

              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`font-normal md:my-3 leading-8 md:leading-14 ${titleTwoClass}`}
              >
                {title2}
              </motion.h2>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className={`mt-2 text-sm md:text-lg leading-6 font-light max-w-[90%] md:max-w-[600px] ${descriptionClass}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="md:mt-9 my-6"
              >
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={hoverImage}
                />
              </motion.div>
            </div>

            {/* Right Section - Image */}
            {rightSec && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className={` hidden md:flex justify-start w-full md:w-1/2 ${rightSecClass}`}
              >
                <Image
                  src={rightImage}
                  alt="Right Illustration"
                  width={500}
                  height={500}
                  className={`${ImageClass}`}
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
