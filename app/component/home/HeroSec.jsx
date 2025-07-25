"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/home/Hero-sec2.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import BannerLayout from "../utilities/BannerLayout";
import ButtonLayout from "../utilities/ButtonLayout";
const backgroundVideo = "/BannerGif.mp4";

const slides = [
  {
    type: "video",
    title: "Tech-driven growth",
    title2: "on your mind?",
    description:
      "Architect, engineer, modernize, secure, and scale with Calsoft - for AI-powered innovation, faster go-to-market, and higher efficiency.",
    buttonText: "What We Do",
  },
  {
    type: "banner",
    image: BackgroundImage,
    title: "Tech-driven growth",
    title2: "on your mind?",
    description:
      "Architect, engineer, modernize, secure, and scale with Calsoft - for AI-powered innovation, faster go-to-market, and higher efficiency.",
    buttonText: "What We Do",
  },
];

const HeroSec = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full">
          {slide.type === "video" ? (
            <div className="relative w-full h-[600px]">
              {/* Video Background */}
              <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-[600px] object-cover -z-10"
              >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Animated Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col justify-center px-4 md:px-20 py-10 md:py-20 text-white text-left"
              >
                <div className="w-full container mx-auto px-4 md:px-20">
                  <div className="flex flex-col items-start justify-center text-white">
                    <motion.h2
                      initial={{ y: -30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="font-bold md:text-5xl text-[20px] mt-2 text-left"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.h2
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="text-[28px] md:text-5xl md:mt-4 font-normal md:my-3 leading-8 md:leading-14"
                    >
                      {slide.title2}
                    </motion.h2>
                    <motion.p
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="font-light hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-[40%]"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="mt-9"
                    >
                      <ButtonLayout
                        text={slide.buttonText}
                        image={ButtonImage}
                        hoverImage={ButtonImage}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <BannerLayout
              image={slide.image}
              title={slide.title}
              title2={slide.title2}
              description={slide.description}
              buttonText={slide.buttonText}
              buttonImage={ButtonImage}
              hoverImage={ButtonImage}
              titleOneClass="font-bold md:text-5xl text-[20px] mt-2"
              titleTwoClass="text-[28px] md:text-5xl md:mt-4"
              descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-full"
              BgClassname="object-cover w-full h-full object-center"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSec;
