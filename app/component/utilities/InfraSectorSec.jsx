"use client";
import Image from "next/image";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Link from "next/link";
import ContactImg from "../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import { useState } from "react";

import CircleArrow from "../../assets/DigitalEngineering/Product/circleArrow.svg";

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
}) => {
  return (
    <section className="bg-white container mx-auto  py-10 px-4 md:px-16 ">
      <div
        className={`flex my-2  ${
          imageLeft
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col-reverse md:flex-row"
        } items-center gap-10`}
      >
        {/* Text Content */}
        <motion.div
          className="w-full md:w-3/4 manrope"
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
            className="text-xl md:text-[35px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:mt-6 md:grid-cols-2 gap-x-6 items-start md:items-center justify-center"
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
                  className="!w-[150px] !h-[60px]"
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
                className="text-[#2E3092] font-semibold mb-2 text-[20px]"
              >
                What we do:
              </motion.h3>
              <ul className="list-disc list-inside text-[#545353] text-[15px] space-y-1 marker:text-[#ED1C24]">
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
                className="hidden md:block text-[#2E3092] font-semibold mb-2 text-[20px]"
              >
                Business Impact:
              </motion.h3>
              <ul className="list-disc list-inside text-[#545353] text-[15px] space-y-1 marker:text-[#ED1C24]">
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
        <div className="w-full md:w-1/4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full h-60 md:h-full"
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
  buttonLink = "#",
  height = "h-[200px] md:h-[250px]",
}) => {
  return (
    <div className="container mx-auto py-15 px-4 md:px-16">
      {/* Wrapper with Relative Position */}
      <div
        className={`relative w-full ${height} rounded-2xl overflow-hidden my-10`}
      >
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          className="object-cover w-full h-full [object-position:70%_15%] md:object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0  flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 text-white">
          {/* Title */}
          <h2 className="text-base md:text-2xl font-medium max-w-2xl text-left md:text-left py-4 md:py-0">
            {title}
          </h2>

          {/* Button */}
          {buttonText && (
            <Link
              href={buttonLink}
              className="bg-[#C00404] hover:bg-red-800 text-white w-[150px] px-6  md:px-8 py-2 rounded-lg text-sm font-medium transition mt-4 md:mt-0"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export const ContactSecData = ({ BoldContent, lightContent, link }) => {
  return (
    <>
      <section>
        <div className="relative mt-4 md:mt-10">
          {/* Background Image */}
          <Image
            src={ContactImg}
            alt="Background Image"
            className="w-full h-[250px] md:h-full md:object-cover object-center"
          />

          {/* Right Side: Overlay Content */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:p-16 p-1 w-1/2 md:w-1/2 text-white">
            <div className="space-y-6 text-left md:text-left">
              <h2 className="text-sm md:text-3xl font-normal leading-snug">
                <span className="font-bold">{BoldContent}</span>
                <br />
                {lightContent}
              </h2>

              <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-[150px] sm:w-[200px] h-8 md:h-10 px-6 text-sm text-black bg-white placeholder-gray-500 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                />{" "}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <ButtonLayout
                    link={link}
                    text="Learn More"
                    image={ButtonImage}
                    hoverImage={ButtonImage}
                    className="!w-[170px] sm:w-[200px] h-8 md:h-10 px-6"
                  />
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const ChallengeToSolution = ({ title, blackTitle, challenges = [] }) => {
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
    <div className="max-w-5xl mx-auto px-4 md:py-10">
      <motion.div
        className="w-full my-5 manrope"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl md:text-[35px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
        >
          {title}
          <span className="text-black font-semibold px-1">{blackTitle}</span>
        </motion.h2>
      </motion.div>

      <div className="space-y-4 w-full">
        {challenges.map((item, index) => (
          <div key={index}>
            <div className="flex w-full overflow-hidden rounded-full shadow-md">
              {/* Left Title */}
              <div
                onClick={() => toggleMobile(index)}
                className="bg-[#2D2A86] uppercase text-white font-semibold text-sm px-6 py-4 flex items-center justify-center w-full md:w-[260px] rounded-l-full cursor-pointer text-center break-words"
              >
                {item.title}
              </div>

              {/* Desktop Flip Card */}
              <div
                className={`hidden md:flex flex-1 pr-0 rounded-r-full challenge-card relative ${
                  flippedIndex === index ? "flipped" : ""
                }`}
                style={{ minHeight: "80px" }}
              >
                <div className="challenge-inner">
                  {/* Front Side */}
                  <div className="challenge-face bg-[#E6E6E6] text-sm text-gray-800">
                    <div className="py-4 break-words">{item.description}</div>
                    <button
                      //   onClick={handleFlip}
                      className="flex items-center bg-[#F4F4F4] text-[#2D2A86] text-sm font-medium h-full rounded-full hover:bg-[#e5e5e5] transition whitespace-nowrap"
                    >
                      <span className="mr-2 px-4 py-4">Hover to Solve</span>
                      <div className="w-20 h-20 relative">
                        <Image
                          src={CircleArrow}
                          alt="arrow"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </button>
                  </div>

                  {/* Back Side */}
                  <div className="challenge-face challenge-back bg-[#D1D5DB] text-sm text-gray-800">
                    <div className="py-4">{item.solution}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View: Expandable Description */}
            {openIndex === index && (
              <div
                onClick={() =>
                  setMobileFlipIndex((prev) => (prev === index ? null : index))
                }
                className={`block md:hidden bg-[#E6E6E6] text-sm text-gray-800 px-4 py-3 rounded-md mt-2 mobile-flip-wrapper ${
                  mobileFlipIndex === index ? "flipped" : ""
                }`}
              >
                <div className="mobile-flip-inner">
                  {/* front face – description */}
                  <div className="mobile-face">{item.description}</div>

                  {/* back face – solution */}
                  <div className="mobile-face mobile-back">{item.solution}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
