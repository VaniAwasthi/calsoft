"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Icon1 from "../../assets/csr/icon1.svg";
import Icon2 from "../../assets/csr/icon2.svg";
import Icon3 from "../../assets/csr/icon3.svg";
import BgImage from "../../assets/workshop/caseStudy.webp";
import Image from "next/image";

const data = [
  {
    title: "Our philosophy",
    content:
      "Calsoft’s corporate philosophy embraces social responsibility and welfare. We believe in supporting our communities.",
    icon: Icon1,
  },
  {
    title: "Where we focus",
    content:
      "Our efforts are directed toward education and healthcare for underserved and vulnerable groups.",
    icon: Icon2,
  },
  {
    title: "How we act",
    content:
      "We collaborate with NGOs and encourage employee involvement to drive on-ground, community-focused initiatives.",
    icon: Icon3,
  },
];

export const CSRFocusSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-14">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex items-center bg-gray-100 rounded-lg shadow border border-gray-200 px-6 py-6"
            >
              {/* Icon - left outside the card */}
              <div className="absolute -left-8 w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                <img src={item.icon.src} alt={item.title} className="w-8 h-8" />
              </div>

              {/* Text */}
              <div className="ml-12">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            spaceBetween={20}
            loop
            breakpoints={{
              320: { slidesPerView: 1 }, // mobile
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }, // desktop
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="!overflow-visible">
                <motion.div className="w-[270px] sm:w-[360px] relative flex items-center bg-gray-100 rounded-lg shadow border border-gray-200 px-6 py-6 mx-auto">
                  {/* Icon */}
                  <div className="absolute -left-8 w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={item.icon.src}
                      alt={item.title}
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Text */}
                  <div className="ml-10">
                    <h3 className="text-lg font-bold text-blue-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export const CaresBannerSec = () => {
  return (
    <section className="px-4 md:px-16 py-10 w-full">
      <div className="container mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl md:text-2xl lg:text-[40px] font-semibold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_20%)]"
        >
          Calsoft Cares!
        </motion.h2>

        {/* Image */}
        <div className="my-6 rounded-lg overflow-hidden shadow-md">
          <Image
            src={BgImage}
            alt="Who care"
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export const ScholarshipSection = ({
  isRight = true,
  title,
  description,
  reachPoints = [],
  helpPoints = [],
  imageSrc,
  imageAlt,
  bgColor = "#fafafa",
  pointsTitle1,
  pointsTitle2,
}) => {
  return (
    <section
      className={`w-full py-12 my-10 `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-10 md:px-16">
        <div
          className={`flex flex-col lg:flex-row items-stretch justify-between gap-10 ${
            isRight ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-between"
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-lg text-xl md:text-2xl lg:text-[40px] font-semibold mb-6 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_90%)]"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-md text-base text-black leading-relaxed mb-6"
            >
              {description}
            </motion.p>

            <hr className="border border-gray-300 mt-auto" />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`flex-1 flex  justify-center ${
              isRight ? "items-end" : "items-start"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-[550px] h-[300px] object-cover rounded-xl"
              placeholder="blur"
            />
          </motion.div>
        </div>

        {/* Points Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div>
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg font-semibold mb-2"
            >
              {pointsTitle1}
            </motion.h3>
            <ul className="list-disc list-inside  space-y-1">
              {reachPoints.map((point, idx) => (
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={idx}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg font-semibold mb-2"
            >
              {pointsTitle2}
            </motion.h3>
            <ul className="list-disc list-inside  space-y-1">
              {helpPoints.map((point, idx) => (
                <motion.li
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  key={idx}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
