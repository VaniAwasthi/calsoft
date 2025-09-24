"use client";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Link from "next/link";
import ContactImg from "../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import { useState } from "react";

import CircleArrow from "../../assets/DigitalEngineering/Product/circleArrow.svg";
import { showHubSpotForm } from "../utilities/showHubSpotForm"; // import utility

export const InfraSection = ({
  description,
  buttonText,
  whatWeDo = [],
  businessImpact = [],
  imageSrc,
  imageAlt = "",
  imageLeft = false,
  link = "#",
  title,
  isDivider,
  secId,
}) => {
  return (
    <section
      className="bg-white container mx-auto py-[3rem] px-4 md:px-16 "
      id={secId}
    >
      <div
        className={`flex my-[4rem]   ${
          imageLeft
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col-reverse md:flex-row"
        } items-center gap-10`}
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-[55%] manrope"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            key={title}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl md:text-[30px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 md:mt-6 ${
              buttonText ? "md:grid-cols-2" : "md:grid-cols-1"
            } gap-x-6 items-start md:items-center justify-center`}
          >
            {/* Description */}
            <motion.p
              key={description}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-sm md:text-[18px] font-semibold  mt-2 mb-6 md:mb-0"
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
                className="hidden md:justify-center md:flex md:mt-0 my-6"
              >
                <ButtonLayout
                  text={buttonText}
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                  link={link}
                  className=" !h-[50px] whitespace-nowrap"
                />
              </motion.div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-6 md:mt-8 items-start">
            {/* What We Do */}
            <div className="hidden md:block md:pr-4">
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-[#2E3092] font-semibold mb-2 text-[18px]"
              >
                What We Do:
              </motion.h3>
              <ul className="list-disc list-inside text-[#545353] text-[16px] space-y-1 marker:text-[#ED1C24]">
                {whatWeDo.map((item, index) => (
                  <motion.li
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    key={index}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-full bg-gray-300 mx-auto"></div>

            {/* Business Impact */}
            <div className="md:pl-4">
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="hidden md:block text-[#2E3092] font-semibold mb-2 text-[18px]"
              >
                Business Impact:
              </motion.h3>
              <ul className="list-disc list-inside text-[#545353] text-[16px] space-y-1 marker:text-[#ED1C24]">
                {businessImpact.map((item, index) => (
                  <motion.li
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    key={index}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            {buttonText && (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex md:justify-center md:hidden mt-0"
              >
                <ButtonLayout
                  text={buttonText}
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                  link={link}
                  className="!w-[150px] !h-[60px]"
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Image Content */}
        <div className="relative w-full md:w-[40%] aspect-[13/10]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      {/* Divider */}
      {isDivider ? (
        <div className="my-[3rem] w-full h-px bg-gray-300 mx-auto"></div>
      ) : null}
    </section>
  );
};

export const BannerSection = ({
  backgroundImage,
  title,
  buttonText = "Know More",
  height = "h-[200px] md:h-[150px]",
  link,
  onButtonClick, // <-- add this
}) => {
  return (
    <div className="container mx-auto py-15 px-4 md:px-16">
      <div
        className={`relative w-full ${height} rounded-2xl overflow-hidden my-10`}
      >
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          className="object-cover w-full h-full [object-position:70%_15%] md:object-center"
          priority
        />

        <div className="absolute inset-0 flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 text-white">
          <h2 className="text-base md:text-3xl font-medium max-w-2xl text-left md:text-left py-4 md:py-0">
            {title}
          </h2>

          {buttonText && (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <ButtonLayout
                link={link}
                onClick={onButtonClick} // <-- pass it here
                text={buttonText}
                image={ButtonImage}
                hoverImage={ButtonImage}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ContactSecData = ({
  BoldContent,
  lightContent,
  link,
  buttonClicked = () => showHubSpotForm("contact-us-popup"),
}) => {
  return (
    <>
      <section>
        <div className="relative mt-4 md:mt-10">
          {/* Background Image */}
          <Image
            src={ContactImg}
            alt="Background Image"
            className="w-full h-[250px] md:h-[300px] md:object-cover object-center"
          />

          {/* Right Side: Overlay Content */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:p-16 p-1 w-1/2 md:w-1/2 text-white">
            <div className="space-y-6 text-left md:text-left">
              <h2 className="text-sm md:text-3xl font-normal leading-snug">
                <span className="font-bold">{BoldContent}</span>
                <br />
                {lightContent}
              </h2>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <ButtonLayout
                  link={link}
                  text="Contact Us" //add popup
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                  className="!w-[170px] sm:w-[200px] h-8 md:h-10 px-6"
                  onClick={buttonClicked}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const ChallengeToSolution = ({
  title,
  blackTitle,
  challenges = [],
  secId,
}) => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileFlipIndex, setMobileFlipIndex] = useState(null);

  //   const handleFlip = (index) => {
  //     setFlippedIndex((prev) => (prev === index ? null : index));
  //   };

  const toggleMobile = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id={secId}>
      <div className="container mx-auto px-4 md:py-8 my-[2rem]">
        <motion.div
          className="w-full my-5 manrope flex justify-center items-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl text-center md:text-[31px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text  text-transparent"
          >
            {title}
            <span className="text-black font-semibold px-1">{blackTitle}</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-8 w-full">
          {challenges.map((item, index) => (
            <div key={index}>
              <div className="flex w-full overflow-hidden rounded-full shadow-md">
                {/* Left Title */}
                <div
                  onClick={() => toggleMobile(index)}
                  className="bg-[#2D2A86]  text-white font-semibold text-sm md:text-[18px] px-6 py-4 flex items-center justify-center w-full md:w-[300px] rounded-l-full cursor-pointer text-center break-words"
                >
                  {item.title}
                </div>

                {/* Desktop slide Card */}
                <div
                  className={`hidden md:flex flex-1 pr-0 rounded-r-full challenge-card relative`}
                  style={{ minHeight: "80px" }}
                >
                  <motion.div
                    className="challenge-inner relative w-full h-full overflow-hidden"
                    whileHover="hover"
                    initial="initial"
                    variants={{
                      initial: {},
                      hover: {},
                    }}
                  >
                    {/* Front Side */}
                    <motion.div
                      className="challenge-face bg-[#E6E6E6] text-sm text-gray-800 absolute w-full h-full top-0 left-0 z-20"
                      variants={{
                        initial: { x: 0, opacity: 1 },
                        hover: { x: -300, opacity: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="py-4 text-[18px] break-words">
                        {item.description}
                      </div>
                      <button className="flex items-center bg-[#F4F4F4] text-[#2D2A86] text-md font-medium h-full rounded-full hover:bg-[#e5e5e5] transition whitespace-nowrap">
                        <div className="w-20 h-20 relative">
                          <Image
                            src={CircleArrow}
                            alt="arrow"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </button>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div
                      className="challenge-face challenge-back bg-[#D1D5DB] text-[18px] text-gray-800 absolute w-full h-full top-0 left-0 z-10"
                      variants={{
                        initial: { x: 300, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="py-4">{item.solution}</div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile View: Expandable Description */}
              {openIndex === index && (
                <div
                  onClick={() =>
                    setMobileFlipIndex((prev) =>
                      prev === index ? null : index
                    )
                  }
                  className={`block md:hidden bg-[#E6E6E6] text-sm text-gray-800 px-4 py-3 rounded-md mt-2 mobile-flip-wrapper ${
                    mobileFlipIndex === index ? "flipped" : ""
                  }`}
                >
                  <div className="mobile-flip-inner">
                    {/* front face – description */}
                    <div className="mobile-face">{item.description}</div>

                    {/* back face – solution */}
                    <div className="mobile-face mobile-back">
                      {item.solution}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
