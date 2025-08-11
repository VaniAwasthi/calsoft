"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RecommendedIcon from "../../assets/webinar/Icon.svg";

export const HeroSecWebinar = ({
  FeaturedImage,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonImage,
  hoverImage,
  backgroundImage,
}) => {
  return (
    <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px]">
      <Image
        src={backgroundImage}
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content Section */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            {/* Left Section: Two Images */}

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white lg:w-[56%] md:w-[45%]  max-w-2xl mb-3  "
            >
              <motion.h2
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-2xl sm:text-[30px] xl:text-[50px]  w-full font-bold leading-12 lg:leading-[4rem]"
              >
                {title}
              </motion.h2>

              <motion.p
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6 text-sm md:text-[25px] font-light max-w-sm"
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
                  className="!w-[250px] !h-[40px] md:!w-[280px] md:!h-[48px]"
                />
              </motion.div>
            </motion.div>
            {/* Right Section: Text and Button */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-[40%] md:w-[40%]"
            >
              <Image
                src={FeaturedImage}
                alt="Card 1"
                width={200}
                height={200}
                className="h-full w-full  rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
//CommitmentSection

export const CommitmentSection = ({
  cards,
  description,
  heading,
  gridStyle = "grid-cols-4",
}) => {
  return (
    <section className="mx-auto manrope container py-10  px-4 md:px-12">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10 "
      >
        {heading && (
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl md:text-2xl lg:text-[40px] font-semibold mb-4 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_44%,#ED1C24_70%)]"
          >
            {heading}
          </motion.h2>
        )}
        {description && (
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-normal text-sm md:text-[18px]"
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Desktop Grid */}
      <div className={`hidden lg:grid ${gridStyle} gap-10 mb-[3rem]`}>
        {cards.map((card, index) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className="bg-[#353BA5] text-white p-5 rounded-lg shadow-md"
          >
            <Image src={card.icon} alt="icon" width={50} height={50} />
            <div className="mt-4">
              {card.title && (
                <motion.h4
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="font-semibold text-xl  mb-6 h-12"
                >
                  {card.title}
                </motion.h4>
              )}
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.4 }}
                className="text-lg font-light"
              >
                {card.desc}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="block lg:hidden ">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            401: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-[#353BA5] text-white p-6 rounded-xl shadow-lg h-full flex flex-col justify-between min-h-[180px] "
                >
                  <Image src={card.icon} alt="icons" width={50} height={50} />
                  {card.title && (
                    <motion.h4
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="font-semibold text-lg mt-4 mb-2 h-12"
                    >
                      {card.title}
                    </motion.h4>
                  )}
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-sm"
                  >
                    {card.desc}
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export const RecommendedFor = ({ recommendedData }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="manrope container  mx-auto px-6 py-12">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-left mb-10 "
      >
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-[45px] font-semibold text-[#2E3092] text-center my-10 "
        >
          Recomme
          <span className="bg-gradient-to-r from-[#2E3092] via-[#6A329F] to-[#ED1C24] bg-clip-text text-transparent">
            nded For
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // optional if using delay inside child instead
              },
            },
          }}
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        >
          {recommendedData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.1, // 👈 delays each item based on its index
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex  items-center justify-center space-x-4 px-4"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.4 }}
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
      </motion.div>
    </section>
  );
};
