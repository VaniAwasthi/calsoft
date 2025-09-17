"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function RealWorldImpact({
  heading = "Real-World Impact",
  title = "Turn Unknowns Into Predictable Outcomes",
  desc = "Benchmarking before critical changes reduces risk and enhances decision-making:",
  buttonText = "Download ROI Sheet",
  cardData = [
    {
      title: "30-50%",
      desc: "better architectural decisions through data-backed comparisons",
    },
    {
      title: "Up to 40%",
      desc: "better architectural decisions through data-backed comparisons",
    },
    {
      title: "Faster stakeholder",
      desc: "alignment with objective performance visibility",
    },
    {
      title: "Improved vendor",
      desc: "selection for infra, platforms, or cloud",
    },
    {
      title: "Confidence in modernization",
      desc: "outcomes through pre-post validation",
    },
  ],
  bottomContent = {
    text: "Documentation isn’t just about writing — it’s about engineering clarity.",
    btnText: "Download ROI Sheet",
  },
  arrow = true
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Destroy existing navigation
      swiperInstance.navigation.destroy();

      // Reassign elements
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // Reinitialize navigation
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <div
      id="business-value"
      className={`${buttonText && "bg-[#f9f9f9]"} py-10`}
    >
      <div className="container">
        <div className={`space-y-8`}>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_20%)] bg-clip-text text-transparent"
          >
            {heading}
          </motion.p>
          <div className="flex justify-between lg:flex-row flex-col gap-5">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-4"
            >
              <p className="text-3xl font-semibold max-w-3xl">{title}</p>
              <p className="text-lg leading-relaxed font-light max-w-2xl">
                {desc}
              </p>
            </motion.div>
            {buttonText && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"whitespace-nowrap"}
                />
                {arrow && (
                  <div className="flex justify-center items-center gap-5">
                    <button
                      ref={prevRef}
                      className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border-2 border-[#2E3092] transition-opacity duration-200 hover:opacity-80 hover:shadow-xl"
                      style={{ visibility: "visible", display: "flex", zIndex: 40 }}
                    >
                      <svg
                        width="11"
                        height="18"
                        viewBox="0 0 11 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.44893 0.488596L10.7459 1.79007L3.39405 9.11124L10.7578 16.7272L9.4379 18.0039L0.813932 9.08735L9.44893 0.488596Z"
                          fill="#2E3092"
                        />
                      </svg>
                    </button>
                    <button
                      ref={nextRef}
                      className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border-2 border-[#2E3092] transition-opacity duration-200 hover:opacity-80 hover:shadow-xl"
                      style={{ visibility: "visible", display: "flex", zIndex: 40 }}
                    >
                      <svg
                        width="11"
                        height="18"
                        viewBox="0 0 11 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.55108 17.8981L0.254129 16.5966L7.60595 9.27548L0.242188 1.65949L1.5621 0.382812L10.1861 9.29936L1.55108 17.8981Z"
                          fill="#2E3092"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 6000 }}
          className="w-full h-full z-0 py-14"
          style={{ height: "250px", minHeight: "250px" }}
        >
          <div className="flex xl:flex-nowrap flex-wrap justify-center gap-x-6 gap-y-3 md:gap-y-0 mt-8 mb-2">
            {cardData.map((ele, idx) => (
              <SwiperSlide key={idx} className="z-10 !h-full">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative hover:scale-105 transition-all"
                >
                  <div className="absolute top-0 w-full h-full text-center flex flex-col justify-start items-center p-3.5 pt-12">
                    <p className="text-[24px] font-bold bg-[linear-gradient(to_right,#2E3092_40%,#ED1C24_80%)] bg-clip-text text-transparent">
                      {ele.title}
                    </p>
                    <p className="text-lg">{ele.desc}</p>
                  </div>
                  <svg
                    width="220"
                    height="268"
                    viewBox="0 0 220 268"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M219.523 196.528V89.4299C219.523 83.3525 216.28 77.7347 211.018 74.6972L118.268 21.1471C113.006 18.1072 106.52 18.1072 101.255 21.1471L8.50542 74.6972C3.24304 77.7347 0 83.3525 0 89.4299V196.528C0 202.605 3.24304 208.22 8.50542 211.26L101.255 264.808C106.517 267.848 113.003 267.848 118.268 264.808L211.018 211.26C216.28 208.22 219.523 202.605 219.523 196.528Z"
                      fill="#2E3092"
                    />
                    <mask
                      id="mask0_32_9"
                      x="0"
                      y="0"
                      width="220"
                      height="249"
                      masktype="luminance"
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        d="M219.523 177.662V70.5638C219.523 64.4864 216.28 58.8685 211.018 55.8311L118.268 2.28099C113.006 -0.758906 106.52 -0.758906 101.255 2.28099L8.50536 55.8311C3.24298 58.8685 -6.50656e-05 64.4864 -6.50656e-05 70.5638V177.662C-6.50656e-05 183.739 3.24298 189.357 8.50536 192.394L101.255 245.942C106.517 248.982 113.003 248.982 118.268 245.942L211.018 192.394C216.28 189.354 219.523 183.739 219.523 177.662Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_32_9)">
                      <path
                        d="M219.523 177.661V70.5632C219.523 64.4859 216.28 58.868 211.018 55.8305L118.268 2.28044C113.006 -0.759455 106.52 -0.759455 101.255 2.28044L8.50542 55.8305C3.24304 58.868 0 64.4859 0 70.5632V177.661C0 183.738 3.24304 189.356 8.50542 192.394L101.255 245.941C106.517 248.981 113.003 248.981 118.268 245.941L211.018 192.394C216.28 189.354 219.523 183.738 219.523 177.661Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        {bottomContent && (
          <div className="flex justify-center lg:items-center mt-10 lg:flex-row flex-col items-start">
            <p className="text-2xl font-semibold w-10/12">
              {bottomContent.text}
            </p>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <ButtonLayout
                text={bottomContent.btnText}
                image={buttonImage}
                hoverImage={buttonImage}
                className={"whitespace-nowrap"}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
