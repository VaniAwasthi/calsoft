"use client";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";

const BannerLayout = ({
  image,
  title,
  title2,
  description,
  buttonText,
  buttonImage,
  hoverImage,
  bgColor,
  overlayOpacity,
  zIndex,
  titleOneClass,
  titleTwoClass,
  descriptionClass,
}) => {
  return (
    <div className=" relative">
      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        className="w-full md:h-full h-[280px] object-cover"
      />
      {/* Overlay (Optional) */}
      {/* <div
        className="absolute top-0 left-0"
        style={{
          backgroundColor: bgColor,
          opacity: overlayOpacity,
          zIndex: zIndex,
        }}
      ></div> */}

      {/* Content Section - Centered */}
      <div className="absolute top-[10%] md:top-[0%] w-[60%] left-0 z-10 md:w-full container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-start justify-center xl:min-h-screen text-white">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`font-bold  text-left leading-8 md:leading-14  ${titleOneClass}`}
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
            className={`mt-2 text-sm md:text-lg leading-6 font-light  max-w-[90%] md:max-w-[400px] ${descriptionClass}`}
          >
            {description}
          </motion.p>

          {/* Button */}
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
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BannerLayout;
