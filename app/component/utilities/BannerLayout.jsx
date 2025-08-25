"use client";

import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import { IoPlayOutline } from "react-icons/io5";

const BannerLayout = ({
  image,
  logo,
  logoClass,
  title,
  title2,
  description,
  knowMoreAboutUs,
  buttonText,
  buttonImage,
  hoverImage,
  bgColor,
  overlayOpacity,
  zIndex,
  titleOneClass,
  titleTwoClass,
  descriptionClass,
  buttonClass = "",
  height = "h-[37.5rem]",
}) => {
  return (
    <div className=" relative">
      {/* Background Image */}
      <div className="h-fit w-full relative">
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className={`${height} w-full relative`}>
          <Image
            src={image}
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content Section - Centered */}
      <div className="absolute top-[10%] md:top-[0%] w-[60%] left-0 z-10 md:w-full container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-start justify-center h-[calc(100vh-20rem)] md:min-h-screen text-white md:pl-20">
          {logo && logo != null && logo != "" && (
            <motion.image
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={logo}
                width={260}
                height={260}
                alt="logo"
                className="w-48"
              />
            </motion.image>
          )}
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`font-semibold  text-left leading-8 md:leading-14 md:w-2/3 ${titleOneClass}`}
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
            className={`mt-2 text-sm md:text-lg leading-6 font-light max-w-[90%] md:max-w-[400px] ${descriptionClass}`}
          >
            {description}
          </motion.p>

          {/* Button */}
          {buttonText && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-9"
            >
              <ButtonLayout
                text={buttonText}
                image={buttonImage}
                hoverImage={hoverImage}
                className={buttonClass}
              />
            </motion.div>
          )}

          {knowMoreAboutUs && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-9 flex gap-3 items-center"
            >
              <div className="flex justify-center items-center border border-red-600 rounded-full p-[0.18rem]">
                <div className="flex justify-center items-center border border-red-600 rounded-full p-1">
                  <IoPlayOutline size={"1.2rem"} className="text-red-600" />
                </div>
              </div>
              <span className="text-xl">Know More About Us</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
