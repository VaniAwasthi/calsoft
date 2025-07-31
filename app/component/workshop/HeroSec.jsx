"use client";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaHourglassHalf } from "react-icons/fa";
import { motion } from "framer-motion";

import bgImage from "../../assets/workshop/workshopBg.webp";
import rightImage from "../../assets/workshop/workshopImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import BgImage from "../../assets/workshop/caseStudy.webp";
import RecommendedIcon from "../../assets/webinar/Icon.svg";

export const HeroSecWorkshop = () => {
  return (
    <section
      className="relative w-full h-[650px] md:h-[500px] lg:h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between py-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white space-y-6 z-10">
          <motion.h1 className="text-3xl md:text-[50px] font-medium leading-tight mt-2">
            Master Regression <br /> Testing with AI
          </motion.h1>
          <p className="text-sm md:text-[25px] font-light text-white/80">
            Speedup your QA with AI | Feat. CalTIA™ Demo
          </p>

          {/* Date-Time-Info */}
          <div className="flex flex-wrap gap-4 text-sm text-white items-center">
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-2"
            >
              <FaCalendarAlt className="text-white" size={20} />
              <span className="text-[16px] font-light">
                16th–18th July 2025
              </span>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-2"
            >
              <FaClock className="text-white" size={20} />
              <span className="text-[16px] font-light">10:30 AM IST</span>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-2"
            >
              <FaHourglassHalf className="text-white" size={20} />
              <span className="text-[16px] font-light">Duration: 2 Hrs.</span>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6"
          >
            <ButtonLayout
              text="Reserve Your Session Now!"
              image={ButtonImage}
              hoverImage={ButtonImage}
              className="!w-[250px] !h-[40px] md:!w-[280px] md:!h-[48px]"
            />
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src={rightImage}
              alt="AI Regression Demo"
              width={500}
              height={400}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const events = [
  {
    date: "15",
    month: "July",
    year: "2024",
    title: "Calsoft partners with Segmind for AI-driven Visual Asset Creation",
    time: "9:15 AM - 2:15 PM",
  },
  {
    date: "15",
    month: "July",
    year: "2024",
    title: "Calsoft partners with Segmind for AI-driven Visual Asset Creation",
    time: "9:15 AM - 2:15 PM",
  },
  {
    date: "15",
    month: "July",
    year: "2024",
    title: "Calsoft partners with Segmind for AI-driven Visual Asset Creation",
    time: "9:15 AM - 2:15 PM",
  },
];

export const RegressionSection = () => {
  return (
    <section className="bg-[#F5F5F5] px-4 md:px-10 py-10 w-full">
      <div className="container mx-auto">
        {/* Heading */}

        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl md:text-2xl lg:text-[40px] font-semibold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]"
        >
          Struggling with Repetitive Regression Testing?
        </motion.h2>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-sm md:text-base mt-2"
        >
          We see CSR as a continuous responsibility. Calsoft will stay focused
          on initiatives that align with our values — supporting education,
          engaging communities, and creating meaningful local impact.
        </motion.p>

        {/* Event List */}
        <div className="mt-10 space-y-6">
          {events.map((event, index) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="border border-dashed border-[#2E3092] rounded-lg px-4 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              {/* Date and Title */}
              <div className="flex items-start  gap-10">
                <div className="flex gap-2  text-center text-[#2E3092]">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-[35px] leading-none text-regular"
                  >
                    {event.date}
                  </motion.div>
                  <div>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[12px] uppercase"
                    >
                      {event.month}
                    </motion.div>
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[12px] text-[#6A329F]"
                    >
                      {event.year}
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="max-w-lg text-sm md:text-[18px] text-black font-medium leading-snug"
                >
                  {event.title}
                </motion.div>
              </div>

              {/* Time and Button */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col justify-between sm:flex-row items-start sm:items-center gap-4 md:gap-14"
              >
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-center text-sm text-[#2E3092]"
                >
                  <FaClock className="mr-2 text-[#2E3092]" />
                  {event.time}
                </motion.div>
                <ButtonLayout
                  text="Book Now"
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                  className="!w-[200px] !h-[40px] md:!w-[200px] md:!h-[48px]"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudySection = ({ recommendedData }) => {
  return (
    <section className="px-4 md:px-16 py-10 w-full">
      <div className="container mx-auto">
        {/* Top Text + Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Text */}
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl md:text-2xl lg:text-[40px] font-semibold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_35%,#ED1C24_77%)]"
          >
            See how a global networking tech leader achieed 40% fastre
            validation with CalTIA
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ButtonLayout
              text="Download Case Study"
              image={ButtonImage}
              hoverImage={ButtonImage}
              className="!w-[300px] !h-[40px] md:!w-[300px] md:!h-[48px]"
            />
          </motion.div>
        </div>

        {/* Image */}
        <div className="my-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src={BgImage}
            alt="Case study meeting"
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-3 grid-cols-1 gap-6"
        >
          {recommendedData.map((item, idx) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex  items-center justify-center space-x-4 "
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <Image
                  src={RecommendedIcon}
                  alt="Recommended Icon"
                  width={40}
                  height={40}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-[#3B3596] font-semibold text-lg"
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
