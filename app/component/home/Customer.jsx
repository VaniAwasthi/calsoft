"use-client";
import React, { useRef } from "react";
import bgimg from "../../assets/home/pattern.svg";
import icon from "../../assets/home/customerIcon.svg";
import Experience from "../../assets/home/experience.webp";
import Inovators from "../../assets/home/Innovator.webp";
import HappyCustomer from "../../assets/home/happycustomer.webp";
import Fortunecustomers from "../../assets/home/Fortunecustomers.svg";
import Partnership from "../../assets/home/partners.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const Customer = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const customerData = [
    {
      id: 1,
      image: Experience,
      value: "27+",
      label: "Years of Experience",
    },
    {
      id: 2,
      image: Inovators,
      value: "1500+",
      label: "Innovators",
    },
    {
      id: 3,
      image: Partnership,
      value: "20+",
      label: "Partnerships",
    },
    {
      id: 4,
      image: HappyCustomer,
      value: "300+",
      label: "Happy Customers",
    },
    {
      id: 5,
      image: Fortunecustomers,
      value: "21+ ",
      label: "Fortune  500 customers",
    },
  ];
  // const logos = [
  //   { id: 1, name: "Dell", image: Dell },
  //   { id: 2, name: "Cisco", image: Cisco },
  //   { id: 3, name: "Hp", image: Hplogo },
  //   { id: 4, name: "Broadcom", image: Broadcom },
  //   { id: 5, name: "Sumologic", image: Sumologic },
  //   { id: 6, name: "OlaKrutrim ", image: OlaKrutrim },
  // ];
  return (
    <>
      <section
        className="md:py-14 py-6"
        style={{
          background: `url(${bgimg.src}) center center/ cover no-repeat`,
        }}
        id="customers"
      >
        <div className="container mx-auto px-4 xl:px-20">
          <div className="flex justify-between items-center mb-2 md:mb-6">
            {/* Left: Icon + Customers */}
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
                <Image src={icon} alt="icon" width={16} height={16} />
              </div>
              <p className="font-light text-sm md:text-base">Customers</p>
            </div>

            {/* Right: Arrows */}
            <div className="flex gap-2 items-center flex justify-center">
              <div ref={prevRef} className="items-center flex justify-center">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 w-8 h-8 text-center items-center flex justify-center">
                  <FaChevronLeft size={12} className="text-center" />
                </button>
              </div>
              <div ref={nextRef} className="items-center flex justify-center">
                <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 w-8 h-8 items-center flex justify-center">
                  <FaChevronRight size={12} className="text-center" />
                </button>
              </div>
            </div>
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
                    Proven.
                  </span>
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
                    Powering 21+ Fortune 500 customers, fast-growing start-ups,
                    and digital innovators in their transformation journey.
                  </p>
                </motion.div>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
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
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 6000 }}
                className="w-full"
              >
                {customerData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 4, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="hover:rounded-lg hover:scale-105 transition-transform duration-300 my-2 px-1"
                    >
                      <div className="relative w-full mb-8  ">
                        {/* Image */}
                        <Image
                          src={item.image}
                          alt={item.label}
                          className="w-full "
                        />

                        {/* Overlay */}

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
            {/* Grid for large screens */}
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              variants={gridVariants}
              viewport={{ once: false, amount: 0.3 }}
              className="hidden md:grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-8 mt-6 lg:mt-[5rem]"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="h-18 md:h-28 rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <Image src={logo.image} alt={logo.name} />
                </motion.div>
              ))}
            </motion.div> */}

            {/* Swiper for smaller screens */}
            {/* <div className="block md:hidden mt-6">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                spaceBetween={10}
                slidesPerView={4}
                loop
              >
                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <div className=" rounded-lg overflow-hidden flex items-center justify-center bg-white shadow">
                      <Image src={logo.image} alt={logo.name} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div> */}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Customer;
