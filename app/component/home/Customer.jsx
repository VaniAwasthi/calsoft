"use-client";
import React from "react";
import bgimg from "../../assets/home/pattern.svg";
import icon from "../../assets/home/customerIcon.svg";
import Experience from "../../assets/home/experience.webp";
import Inovators from "../../assets/home/Innovator.webp";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
const gridVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }, // Stagger effect
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const Customer = () => {
  const customerData = [
    {
      id: 1,
      image: Experience,
      value: "25+",
      label: "Years' Experience",
    },
    {
      id: 2,
      image: Inovators,
      value: "1500+",
      label: "Innovators",
    },
    {
      id: 3,
      image: Experience,
      value: "10+",
      label: "Partnerships",
    },
    {
      id: 4,
      image: Experience,
      value: "25+",
      label: "Years' Experience",
    },
    {
      id: 5,
      image: Experience,
      value: "25+",
      label: "Years' Experience",
    },
  ];
  return (
    <>
      <section
        className="md:py-14"
        style={{
          background: `url(${bgimg.src}) center center/ cover no-repeat`,
        }}
        id="customers"
      >
        <div className="max-w-8xl py-8 md:py-0 px-4 xl:px-20 xl:ml-[2rem]  ">
          <div className="flex gap-6 md:gap-6 items-center mb-2 md:mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
              <Image src={icon} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-sm md:text-base">Customers</p>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="my-4 gradient-border"
          >
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="md:pt-8 w-full md:w-1/2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-[38px] font-normal "
                >
                  <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
                    Proven .
                  </span>{" "}
                  Trusted
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-2xl md:text-[38px] font-regular"
                >
                  by industry leaders.
                </motion.h2>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <p className="mt-4 w-full md:mt-[3rem] text-[13px] md:text-base mb-8 text-[#7E7E7E] md:w-[300px]">
                    Powering Fortune 500 companies, fast-growing start-ups, and
                    digital innovators in their transformation journey.
                  </p>
                </motion.div>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Scrollbar]}
                scrollbar={{
                  hide: false,
                }}
                className="w-full"
              >
                {customerData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative w-full mb-8 ">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.label}
                          className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>

                        {/* Text (Left-Aligned) */}
                        <div className="absolute px-2 bottom-0 md:bottom-4 md:left-4 text-left text-white md:px-4 hover:cursor-pointer">
                          <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.2,
                            }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-[24px] lg:text-3xl !opacity-100 !translate-y-2 font-bold hover:scale-105"
                          >
                            {item.value}
                          </motion.p>

                          <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                              delay: 0.2,
                            }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-sm md:text-xl py-2 font-normal hover:scale-105"
                          >
                            {item.label}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className="w-full h-[2px] bg-gray-300 mt-4"></div> */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={gridVariants}
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 mt-6 lg:mt-[5rem]"
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#EAEAEA] border border-[#CCCBCB] h-18 md:h-28 rounded-lg"
                ></motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Customer;
