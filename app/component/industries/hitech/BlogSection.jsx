"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bgimg from "../../../assets/home/pattern.svg";
import blogimg1 from "../../../assets/home/blog1.webp";
import blogimg2 from "../../../assets/home/blog2.webp";
import blogimg3 from "../../../assets/home/blog3.webp";
import { LuArrowUpRight } from "react-icons/lu";
import logo11 from "../../../assets/home/logo11.png";
import logo12 from "../../../assets/home/logo12.png";
import logo13 from "../../../assets/home/logo13.png";
import logo14 from "../../../assets/home/logo14.png";
import logo15 from "../../../assets/home/logo15.png";
import logo16 from "../../../assets/home/logo16.png";
import logo17 from "../../../assets/home/logo17.png";
import logo18 from "../../../assets/home/logo18.png";
import logo19 from "../../../assets/home/logo19.png";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import ContactImg from "../../../assets/industries/hitech/contactbg.webp";
import ButtonLayout from "../../utilities/ButtonLayout";
import ServiceImge from "../../../assets/industries/hitech/Intellegence.webp";
import ServiceImgeMobile from "../../../assets/industries/hitech/IntellegentMobile.webp";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogListLimit } from "../../../store/actions/blogAction";
import { baseUrl } from "../../../../config";
import Link from "next/link";
import { showHubSpotForm } from "../../utilities/showHubSpotForm";

export const BlogSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogListLimit(5));
  }, [dispatch]);
  const data = useSelector((state) => state.blogs.limitedList);
  const sliderData = data?.map((item, index) => {
    // Create slug from title
    const slug = item.title
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return {
      id: index,
      image: item.image ? `${baseUrl}${item.image}` : blogimg1,
      title: item.title,
      link: `/insights/blogs/${slug}`,
    };
  });

  return (
    <>
      <section id="case-studies" className="md:py-10">
        <div className="container mx-auto px-4 xl:px-20">
          <h1 className="text-4xl font-bold">Latest Case Studies</h1>
          <div className="relative w-full py-8">
            <Swiper
              className="custom-blog-swiper"
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Scrollbar, Pagination]}
              scrollbar={{
                hide: false,
                draggable: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {sliderData?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    className="group relative bg-white cursor-pointer mb-10 px-3"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <Link href={item.link}>
                      <Image
                        src={item.image}
                        alt="Slide"
                        width={300}
                        height={200}
                        className="w-full h-44 md:h-56 rounded-xl object-cover"
                      />
                      <div className="py-5 block">
                        <p className="text-base font-medium text-black">
                          {item.title}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ y: -8 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="absolute -top-4 -right-4 bg-white p-2 border-2 border-[#2E3092] rounded-full shadow-md group-hover:scale-105 transition-transform duration-300"
                      >
                        <LuArrowUpRight
                          className="text-3xl  text-[#2E3092]"
                          strokeWidth={4}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export const TopPartners = ({secId}) => {
  const data = {
    colSpan: 9,
    gridCols: 5,
    logos: [
      logo11,
      logo12,
      logo13,
      logo14,
      logo15,
      logo16,
      logo17,
      logo18,
      logo19,
    ],
  };
  return (
    <>
      <section className="md:py-14" id={secId}>
        <div className="container mx-auto px-4 xl:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-[38px] font-normal mt-4"
          >
            <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
              Top Partners
            </span>{" "}
          </motion.h2>
          <div className=" col-span-12  flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col h-full"
            >
              <div className="relative mt-4 p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                <div className="relative bg-white rounded-[17px] p-4 shadow-md h-full flex flex-col gap-4">
                  <div className="grid grid-cols-7 gap-2 items-center">
                    {[
                      logo11,
                      logo12,
                      logo13,
                      logo14,
                      logo15,
                      logo16,
                      logo18,
                    ].map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        className="max-h-32 w-32 object-contain mx-auto"
                        alt={`logo-${i}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export const ContactSec = ({ lightContent, link, buttonClicked }) => {
  return (
    <>
      <section>
        <div className="relative mt-4 md:mt-2">
          {/* Background Image */}
          <Image
            src={ContactImg}
            alt="Background Image"
            className="w-full h-[300px] md:h-full md:object-cover object-center"
          />

          {/* Right Side: Overlay Content */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:p-16 p-6 w-1/2 md:w-1/2 text-white">
            <div className="space-y-6 text-left md:text-left">
              <h2 className="text-md md:text-3xl font-normal leading-snug">
                {lightContent} <br />
              </h2>

              {/* <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full sm:w-[300px] h-10 px-6 text-sm text-black bg-white placeholder-gray-500 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
                />{" "} */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <ButtonLayout
                    link={link}
                    text="Contact Us"
                    image={ButtonImage}
                    hoverImage={ButtonImage}
                    onClick={()=>showHubSpotForm("contact-us-popup")}
                  />
                </motion.div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const ServicesSec = () => {
  return (
    <section
      className="md:py-14"
      style={{
        background: `url(${bgimg.src}) center center/ cover no-repeat`,
      }}
      id="services"
    >
      <div className="container mx-auto px-4 xl:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-[38px] font-normal mt-4"
        >
          <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>
        <Image
          alt="CloudImage"
          src={ServiceImge}
          className="w-full h-full hidden md:block"
        />
        <Image
          alt="CloudImage"
          src={ServiceImgeMobile}
          className="w-full h-full block md:hidden"
        />
      </div>
    </section>
  );
};
