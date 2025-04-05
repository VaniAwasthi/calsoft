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
        <div className="mx-auto px-4 xl:px-20">
          <div className="flex gap-6 md:gap-6 items-center mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 flex items-center justify-center">
              <Image src={icon} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light">Customers</p>
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 4, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-4 gradient-border"
          >
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="pt-8 w-1/2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-[38px] font-normal "
                >
                  <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
                    Proven .
                  </span>{" "}
                  Trusted
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-[38px] font-regular"
                >
                  by industry leaders.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mt-[3rem] text-sm text-[#7E7E7E] w-[300px]">
                    Powering Fortune 500 companies, fast-growing start-ups, and
                    digital innovators in their transformation journey.
                  </p>
                </motion.div>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={20}
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
                        <div className="absolute bottom-4 left-4 text-left text-white px-4 hover:cursor-pointer">
                          <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 4, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-xl lg:text-3xl font-bold hover:scale-105"
                          >
                            {item.value}
                          </motion.p>

                          <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-xl py-2 font-normal hover:scale-105"
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
              viewport={{ once: true }} // Only triggers once when in view
              variants={gridVariants}
              className="grid grid-cols-6 gap-4 mt-[5rem]"
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-300 h-20 rounded-lg"
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
