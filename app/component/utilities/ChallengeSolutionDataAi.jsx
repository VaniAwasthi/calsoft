"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../../assets/Data-Ai/arrowupward.svg";
import ButtonLayout from "./ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ContactImg from "../../assets/Data-Ai/PipeLine/ConnectBg.webp";

export const ChallengeSolutionComp = ({
  data,
  BlackHeading,
  GradientHeading,
}) => {
  return (
    <div className=" max-w-7xl mx-auto px-6 py-3 md:py-12">
      <motion.div
        className="w-full my-1 md:my-5 manrope"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-full w-[300px] text-xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent text-center"
        >
          {GradientHeading}

          <span className="text-black font-semibold px-1">{BlackHeading}</span>
        </motion.h2>
      </motion.div>

      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <h2 className="text-2xl font-bold text-[#2D2DA3] text-center">
            Challenge
          </h2>
          <div></div>
          <h2 className="text-2xl font-bold text-[#2D2DA3] text-center">
            Solution
          </h2>
        </div>

        {/* Rows */}
        <div className="space-y-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[2.6fr_0.8fr_2.6fr] items-center w-full max-w-7xl mx-auto"
            >
              {/* Challenge Pill */}
              <div className="bg-[#F3F3F3]  text-[#333] px-6 py-6 h-[70px] flex items-center justify-start rounded-l-full shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                <span className="text-[14px] px-3">{item.challenge}</span>
              </div>

              {/* Tag Pill (Center - Overlapping) */}
              <div className="bg-gradient-to-r from-[#2D2DA3] to-[#4E51C6] text-white  px-4 py-6 h-[70px] flex items-center justify-center rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.1)] -mx-10 z-10">
                <span className="text-[16px] px-6 font-medium text-center">
                  {item.tag}
                </span>
              </div>

              {/* Solution Pill */}
              <div className="bg-[#B3CFFF]  text-[#333] px-6 py-6 h-[70px] flex items-center justify-start rounded-r-full shadow-[0_8px_16px_rgba(0,0,0,0.08)]">
                <span className="text-[14px] px-6">{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Column Titles */}

      <div className="block md:hidden mt-2">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="!pb-10"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-[#2E3092] rounded-xl shadow-md bg-white text-center max-w-sm mx-auto">
                {/* Title */}
                <div className="bg-[#2D2DA3] text-white text-sm font-medium py-3 rounded-t-xl">
                  {item.tag}
                </div>

                {/* Challenge */}
                <div className="mt-6 px-4">
                  <p className="inline-block bg-[#2E3092] text-white text-[15px] font-medium px-6 py-2 rounded-lg">
                    Challenge
                  </p>
                  <p className="text-[12px] text-[#575757] mt-3">
                    {item.challenge}
                  </p>
                </div>

                {/* Arrow */}
                <div className="my-4 flex justify-center">
                  <Image src={Arrow} alt="Arrow" />
                </div>

                {/* Solution */}
                <div className="px-4 mb-6">
                  <p className="inline-block bg-[#96A94A] text-white text-[15px] font-medium px-6 py-2 rounded-md">
                    Solution
                  </p>
                  <p className="text-[12px] text-[#1E1E1E] mt-3">
                    {item.solution}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination bullets */}
          <div className="swiper-pagination !static mt-6 flex justify-center" />
        </Swiper>
      </div>
    </div>
  );
};
export const DataInfoSection = ({
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
          className="w-full md:w-3/5 manrope flex md:flex-row flex-col md:px-0 px-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/4 mt-8"
          >
            <motion.h2
              key={title}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`text-2xl md:text-[30px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent w-full ${
                imageLeft ? "md:w-[95%]" : "md:w-[65%]"
              }`}
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              key={description}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-sm md:text-[16px] font-semibold mt-3 md:mt-6 mb-6 md:mb-0 w-full md:w-[65%]"
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
                className=" justify-start flex md:mt-8 my-6 "
              >
                <ButtonLayout
                  text={buttonText}
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                  link={link}
                  className="!w-[200px] !h-[50px]"
                />
              </motion.div>
            )}
          </motion.div>

          <div className="grid grid-cols-1 w-full md:w-2/4 mt-3 md:mt-8 items-start px-2">
            {/* What We Do */}
            <div className="md:pr-4">
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

            {/* Business Impact */}
            <div className="mt-2 ">
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className=" text-[#2E3092] font-semibold mb-2 text-[20px]"
              >
                Business impact:
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
          </div>
        </motion.div>

        {/* Image Content */}
        <div className="w-full md:w-2/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={350}
            className="rounded-lg shadow-lg w-full h-60 md:h-[450px]"
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

export const ContactSecDataAi = ({ BoldContent, lightContent, link }) => {
  return (
    <>
      <section>
        <div className="relative mt-4 md:mt-10">
          {/* Background Image */}
          <Image
            src={ContactImg}
            alt="Background Image"
            className="w-full h-[300px] md:h-full md:object-cover object-center"
          />

          {/* Right Side: Overlay Content */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:p-16 p-6 w-1/2 md:w-1/2 text-white">
            <div className="space-y-6 text-left md:text-left">
              <h2 className="text-md md:text-3xl font-normal leading-snug">
                {lightContent} <br />
                <span className="font-bold">{BoldContent}</span>
              </h2>

              <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full sm:w-[300px] h-10 px-6 text-sm text-black bg-white placeholder-gray-500 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
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
