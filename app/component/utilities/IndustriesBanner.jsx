"use client";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import TransparentButtonLayout from "./TransparentButtonLayout";

const IndustriesBanner = ({
  image,
  title,
  title2,
  description,
  buttonText,
  buttonImage,
  hoverImage,
  titleOneClass,
  titleTwoClass,
  descriptionClass,
  isCaseStudyButton,
}) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={image}
        alt="Background Image"
        className="w-full h-[300px] md:h-[700px] lg:h-[700px] object-center"
      />

      {/* Content Section - Centered */}
      <div className="absolute top-[5%] md:top-[10%] w-[65%] left-0 z-10 md:w-full container mx-auto ">
        <div className="flex flex-col items-start justify-center md:px-20 px-4 py-8 md:py-12 text-white">
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
            className={`font-normal md:my-3 leading-8 md:leading-14  ${titleTwoClass}`}
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
          ></motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-9 flex flex-col md:flex-row gap-4"
          >
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={hoverImage}
            />

            {isCaseStudyButton && (
              <TransparentButtonLayout
                text="View Case Study"
                onClick={() => console.log("Case Study clicked")}
                className="hidden md:block"
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesBanner;
