"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLayout from "../utilities/ButtonLayout";

export const HeroSectionLanding = ({
  image1,
  image2,
  title,
  title2,
  subtitle,
  subtitle2,
  description,
  buttonLabel,
  buttonImage,
  hoverImage,
  backgroundImage,
  backgroundMain = "",
  ImageClassname = "",
}) => {
  return (
    <div
      className={`relative w-full h-[700px] md:min-h-screen ${backgroundMain}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className={`object-cover w-full h-full object-[top_left] md:object-center`}
          priority
        />
      </div>

      {/* Overlay Content Section */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            {/* Left Section: Two Images */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex  gap-4 md:gap-8 flex-row md:items-end"
            >
              <Image
                src={image2}
                alt="Card 1"
                className="w-20 mb-0 md:mt-8 md:h-[400px] md:w-[200px] -translate-y-10"
              />
              <Image
                src={image1}
                alt="Card 2"
                className="w-40 md:w-[220px] md:mb-0  h-40 md:h-[300px]"
              />
            </motion.div>

            {/* Right Section: Text and Button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white max-w-xl mb-3 ml-3 px-5"
            >
              <motion.h2
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl xl:text-[40px] font-bold leading-tight"
              >
                {title}
                <br className="md:block hidden" />s{title2}
              </motion.h2>

              {subtitle && (
                <motion.p
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-sm md:text-[24px] font-light mt-6"
                >
                  {subtitle}
                  <br className="md:block hidden" />
                  {subtitle2}
                </motion.p>
              )}
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6 text-sm xl:text-[16px]"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6"
              >
                <ButtonLayout
                  text={buttonLabel}
                  image={buttonImage}
                  hoverImage={hoverImage}
                  className="!w-[210px] !h-[40px] md:!w-[220px] md:!h-[48px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  responsive InfoWithFormSection component
export const InfoWithFormSection = ({
  heading,
  headingHighlight,
  description1,
  description2,
  checkboxLabel,
  buttonLabel,
  onSubmit = () => {},
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 py-10 px-2 md:px-10">
      {/* Left: Text */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-2xl md:text-[40px] font-bold text-[#2B3990] mb-4 p-1">
          {heading}
          <br className="md:block hidden" />
          {headingHighlight}
        </h2>
        <p className="text[#4C4C4C] text-base md:text-lg mb-4">
          {description1}
        </p>
        <p className="text[#4C4C4C] text-base md:text-lg">{description2}</p>
      </div>
      {/* Right: Form */}
      <form
        className="flex-1  rounded-lg  p-4 md:p-8 max-w-2xl w-full"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="flex flex-col md:flex-row gap-7 mb-3">
          <input
            type="text"
            placeholder="First Name*"
            className="flex-1 bg-[#F5F5F5] border border-gray-300 rounded px-4 py-4 my-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B3990]"
            required
          />
          <input
            type="text"
            placeholder="Last name*"
            className="flex-1 bg-[#F5F5F5] border border-gray-300 rounded px-3 py-4 my-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2B3990]"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Work Email*"
          className="w-full bg-[#F5F5F5] border border-gray-300 rounded px-3 py-4 my-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#2B3990]"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full bg-[#F5F5F5] border border-gray-300 rounded px-3 py-4 my-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#2B3990]"
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="download-report"
            className="mr-2 accent-[#2B3990]"
          />
          <label htmlFor="download-report" className="text-xs text-gray-700">
            {checkboxLabel}
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#C00] hover:bg-[#a00] text-white font-semibold rounded-md py-4 my-3 text-base flex items-center justify-center gap-2 transition"
        >
          {buttonLabel}
          <span className="ml-1">➔</span>
        </button>
      </form>
    </div>
  );
};

//  responsive BusinessValueSection component
export const BusinessValueSection = ({ title, values, backgroundImage }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 md:px-8 md:my-[3rem] my-10">
      <div className="bg-[#1E1E1E] w-full h-[1px] my-6" />
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-[40px] font-bold text-[#2E3092] text-center my-10 md:text-left"
      >
        Business{" "}
        <span className="bg-gradient-to-r from-[#2E3092] via-[#6A329F] to-[#ED1C24] bg-clip-text text-transparent">
          Value
        </span>
      </motion.h2>
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className={`object-cover w-full h-full object-[top_left] md:object-center`}
            priority
          />
        </div>
        {/* Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-stretch justify-between text-white p-4 md:p-8 gap-4 md:gap-0">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] flex flex-col items-center justify-center text-center px-2 md:px-4 py-4 md:py-0 relative"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-lg md:text-2xl font-bold mb-1 px-2 mt-2"
                >
                  {item.title}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xs md:text-sm font-light opacity-90 mb-2"
                >
                  {item.subtitle}
                </motion.div>
              </motion.div>
              {/* Divider: only show on desktop and not for last item */}
              {idx !== values.length - 1 && (
                <div
                  className="hidden md:block absolute mt-[6rem] right-0 transform -translate-y-1/2 h-3/5 border-r border-white/30"
                  style={{ height: "60%", minHeight: 60 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable, responsive ToKnowMoreSection component
export const ToKnowMoreSection = ({
  title = "To Know More",
  description = "About how we can align our expertise to your requirements, reach out to us.",
  buttonLabel = "Contact Us",
  onButtonClick = () => {},
  backgroundImage,
  buttonImage,
  hoverImage,
}) => {
  return (
    <section className="w-full  mx-auto  relative flex items-center justify-center overflow-hidden min-h-[500px]">
      {/* Background Image for entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className={`object-cover w-full h-full object-[top_left] md:object-center`}
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center md:items-center justify-start md:justify-start min-h-[220px] w-full h-full p-6 md:p-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-6 max-w-md">
            {description}
          </p>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6"
          >
            <ButtonLayout
              text={buttonLabel}
              image={buttonImage}
              hoverImage={hoverImage}
              className="!w-[210px] !h-[40px] md:!w-[220px] md:!h-[48px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
