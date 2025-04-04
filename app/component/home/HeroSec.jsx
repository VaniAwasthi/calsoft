"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import BackgroundImage from "../../assets/home/Hero-sec.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import BannerLayout from "../utilities/BannerLayout";

const slides = [
  {
    title: "Tech-driven growth ",
    title2: "on your mind?",
    description:
      "Architect, engineer, modernize, secure, and scale with Calsoft - for AI-powered innovation, faster go-to-market, and higher efficiency.",
    buttonText: "What we do",
    image: BackgroundImage,
  },
];

const HeroSec = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full min-h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative w-full h-full">
          <BannerLayout
            image={slide.image}
            title={slide.title}
            title2={slide.title2}
            description={slide.description}
            buttonText={slide.buttonText}
            buttonImage={ButtonImage}
            hoverImage={ButtonImage}
            titleOneClass="font-bold md:text-5xl text-xl mt-2 "
            titleTwoClass="text-lg md:text-5xl mt-4"
            descriptionClass="mt-4 text-lg leading-8 w-[200px] md:w-full"
            BgClassname="object-cover w-full h-full object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSec;
