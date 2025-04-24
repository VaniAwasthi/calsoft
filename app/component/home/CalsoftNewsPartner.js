"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

import img01 from "../../assets/home/News1.webp";
import img02 from "../../assets/home/News2.webp";
import img03 from "../../assets/home/News3.webp";
import img04 from "../../assets/home/News4.webp";
import icon1 from "../../assets/home/icon1.svg";
import border from "../../assets/home/Branch.svg";
import arrow from "../../assets/home/arrow.svg";
import bgimg from "../../assets/home/pattern.svg";
import bgimg1 from "../../assets/home/pattern1.svg";
import icon2 from "../../assets/home/icon2.svg";
import logo1 from "../../assets/home/logo1.png";
import logo2 from "../../assets/home/logo2.png";
import logo3 from "../../assets/home/logo3.png";
import logo4 from "../../assets/home/logo4.png";
import logo5 from "../../assets/home/logo05.png";
import logo6 from "../../assets/home/logo6.png";
import logo7 from "../../assets/home/logo7.png";
import logo8 from "../../assets/home/logo8.png";
import logo9 from "../../assets/home/logo9.png";
import logo10 from "../../assets/home/logo10.png";
import logo11 from "../../assets/home/logo11.png";
import logo12 from "../../assets/home/logo12.png";
import logo13 from "../../assets/home/logo13.png";
import logo14 from "../../assets/home/logo14.png";
import logo15 from "../../assets/home/logo15.png";
import logo16 from "../../assets/home/logo16.png";
import logo17 from "../../assets/home/logo17.png";
import logo18 from "../../assets/home/logo18.png";
import logo19 from "../../assets/home/logo19.png";
import logo20 from "../../assets/home/logo20.png";
import logo21 from "../../assets/home/logo21.png";

import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Link from "next/link";

const data = [
  {
    id: 1,
    img: img01,
    title: "Calsoft Partner’s with IBM WatsonX to deliver AI-driven Solutions",
    description:
      "Maximize enterprise AI investments with IBM WatsonX & Calsoft",
    link: "https://www.calsoftinc.com/calsoft-partners-with-ibm-watsonx/",
  },
  {
    id: 2,
    img: img02,
    title:
      "Calsoft & StreamNative Partner to Cut Streaming Costs, Boost Performance",
    description:
      "Discover how enterprises can reduce Kafka costs by up to 50% without compromising on real-time performance",
    link: "https://www.californiaentertainmentpress.com/article/800036888-calsoft-and-streamnative-join-forces-to-optimize-cost-and-performance-in-real-time-data-streaming",
  },
  {
    id: 3,
    img: img03,
    title: "Calsoft x Segmind: AI-Powered Visuals for Smarter E-Commerce",
    description:
      "Transforming product imagery with speed, scale, and creativity.",
    link: "https://www.americanbusinesstimes.com/article/779940243-calsoft-partners-with-segmind-for-ai-driven-visual-asset-creation-in-e-commerce",
  },
  {
    id: 4,
    img: img04,
    title: "Calsoft x SmartHub.ai: Advancing AI at the Edge",
    description:
      "Delivering intelligent automation and security for next-gen connected infrastructure",
    link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
  },
  {
    id: 5,
    img: img01,
    title: "Accelerate high-quality software products.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
  },
  {
    id: 6,
    img: img02,
    title: "Enhance Your Development Process",
    description:
      "Discover innovative solutions for modern software development.",
    link: "https://www.calsoftinc.com/news/calsoft-partners-with-smarthub-ai-to-advance-ai-ml-based-edge-automation-security-solutions/",
  },
];
export const CalsoftNews = () => {
  const [selected, setSelected] = useState(data[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <section
        className="md:py-8 py-10 pb-0 "
        style={{
          background: `url(${bgimg.src}) center center/ cover no-repeat`,
        }}
        id="whats-new"
      >
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex gap-6 md:gap-6 items-center mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
              <Image src={icon1} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-sm md:text-base ">What&rsquo;s New</p>
          </div>
          <div className="flex gap-4">
            {/* <div className="min-w-6 text-center">
          <Image src={border} alt="icon"  width={3} className="h-full mx-auto" />
          </div> */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="pt-8 gradient-border">
                <motion.h2
                  key={selected.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent"
                >
                  {selected.title}
                </motion.h2>
                <motion.p
                  key={selected.description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-2 text-base md:text-xl text-black mb-8 md:mb-12"
                >
                  {selected.description}
                </motion.p>

                <Link
                  href={selected.link}
                  className="relative flex w-[180px] md:w-[220px] gap-2 md:justify-between items-center py-3 justify-center px-4 md:px-8 md:py-4 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                  style={{ boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25" }}
                >
                  <span className="relative justify-center z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500 text-sm md:text-base">
                    Explore More
                    <IoArrowForwardCircleSharp className="text-3xl tra" />
                  </span>
                  <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-26 mb-6 mt-14 md:mt-20">
            <div className="hidden md:col-span-4 md:pl-6">
              {/* {!isMobile ? (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl mb-8   flex gap-6 items-center md:text-[36px] font-semibold text-black">
                    Calsoft News
                    <Link href="#">
                      <Image
                        className="transition-all duration-500 hover:-mt-4"
                        src={arrow}
                        alt="arrow"
                      />
                    </Link>
                  </h3>
                  <p className="mt-2 text-[#959595] text-sm md:text-[15px]">
                    We focus on bringing positivity to the world and focus on
                    stories that showcase the best of humanity.
                  </p>
                </motion.div>
              ) : ( */}
              <div>
                <h3 className="text-2xl md:text-3xl mb-8 w-[80%] md:w-full flex gap-6 items-center md:text-[36px] font-semibold text-black">
                  Calsoft News Section
                  <Link href="#">
                    <Image
                      className="transition-all w-10 md:w-auto duration-500 hover:-mt-4"
                      src={arrow}
                      alt="arrow"
                    />
                  </Link>
                </h3>
                <p className="mt-2 text-[#959595] text-sm md:text-[15px]">
                  We focus on bringing positivity to the world and focus on
                  stories that showcase the best of humanity.
                </p>
              </div>
              {/* )} */}
            </div>

            <div className="md:col-span-8">
              {!isMobile ? (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                      640: { slidesPerView: 3, spaceBetween: 10 },
                      768: { slidesPerView: 3, spaceBetween: 10 },
                      1024: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                    scrollbar={{ hide: false }}
                    modules={[Scrollbar]}
                    className="w-full"
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id} className="items-center">
                        <motion.div
                          className={`cursor-pointer rounded-lg mb-6 transition-all duration-500 ${
                            selected.id === item.id ? "scale-100" : "scale-70"
                          }`}
                          onClick={() => setSelected(item)}
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="object-cover rounded-lg"
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              ) : (
                <div>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                      640: { slidesPerView: 3, spaceBetween: 10 },
                      768: { slidesPerView: 3, spaceBetween: 10 },
                      1024: { slidesPerView: 4, spaceBetween: 10 },
                    }}
                    scrollbar={{ hide: false }}
                    modules={[Scrollbar]}
                    className="w-full"
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id} className="items-center">
                        <div
                          className={`cursor-pointer rounded-lg mb-6 transition-all duration-500 ${
                            selected.id === item.id ? "scale-100" : "scale-70"
                          }`}
                          onClick={() => setSelected(item)}
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CalsoftPartner = () => {
  const title = "Partners";
  const heading = "Powering Ahead, Together.";
  const data = [
    {
      title: "Cloud Partnerships",
      colSpan: 3,
      gridCols: 2,
      logos: [
        { src: logo1, colSpan: 2 },
        { src: logo2, colSpan: 1 },
        { src: logo3, colSpan: 1 },
      ],
    },
    {
      title: "Data & Analytics Partnerships",
      colSpan: 3,
      gridCols: 1,
      logos: [logo4, logo5],
    },
    {
      title: "Gen AI",
      colSpan: 6,
      gridCols: 3,
      logos: [logo6, logo7, logo8, logo9, logo10],
    },
    {
      title: "Technology Partners",
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
    },
    {
      title: "Industry Partnerships",
      colSpan: 3,
      gridCols: 1,
      logos: [logo20, logo21],
    },
  ];

  return (
    <section
      className="md:py-8 py-10"
      style={{
        background: `url(${bgimg1.src}) center center / cover no-repeat`,
      }}
      id="partners"
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex gap-6 items-center mb-2 md:mb-6">
          <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
            <Image src={icon2} alt="icon" width={16} height={16} />
          </div>
          <p className="font-light">{title}</p>
        </div>

        <div className="pt-8 gradient-border">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2 className="text-2xl md:text-3xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent">
              {heading}
            </motion.h2>
          </motion.div>

          {/* Grid Container */}
          <div className="grid  grid-cols-12 md:grid-cols-12 gap-6 md:gap-8 mb-6 mt-10">
            {/* Cloud Partnerships */}
            <div className="col-span-4 md:col-span-3 md:order-none order-1 flex flex-col h-full">
              <motion.div
                // initial={{ opacity: 1, x: -100 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1 }}
                // viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-full !opacity-100"
              >
                <p className="mb-4 md:font-semibold md:text-base text-xs">
                  Cloud Partnerships
                </p>
                <div className="relative p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                  <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                  <div className="relative bg-white rounded-[17px] p-2 md:p-4 shadow-md flex flex-col h-full">
                    <Image
                      src={logo1}
                      className="max-h-32 w-32 object-contain mx-auto"
                      alt="logo"
                    />
                    <div className="flex gap-4 justify-between items-center">
                      <Image
                        src={logo2}
                        className="max-h-32 md:w-32 min-w-10 object-contain mx-auto"
                        alt="logo"
                      />
                      <Image
                        src={logo3}
                        className="md:max-h-16 md:w-16 md:min-h-8 min-w-6 object-contain mx-auto"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Data & Analytics Partnerships */}
            <div className="md:col-span-3 col-span-4 md:order-none order-2 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-full"
              >
                <p className="mb-4 md:font-semibold md:text-base text-xs">
                  Data & Analytics Partnerships
                </p>
                <div className="relative p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                  <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                  <div className="relative bg-white grid gap-4 rounded-[17px] p-4 shadow-md h-full">
                    <Image
                      src={logo4}
                      className="max-h-42 w-42 object-contain mx-auto"
                      alt="logo"
                    />
                    <Image
                      src={logo5}
                      className="max-h-42 w-42 object-contain mx-auto"
                      alt="logo"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gen AI */}
            <div className="md:col-span-6 col-span-12 md:order-none order-5 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-full"
              >
                <p className="mb-4 md:font-semibold md:text-base text-xs">
                  Gen AI
                </p>
                <div className="relative p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                  <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                  <div className="relative bg-white rounded-[17px] p-4 shadow-md h-full grid grid-cols-3 gap-4 items-center">
                    {[logo6, logo7, logo8, logo9, logo10].map((logo, i) => (
                      <Image
                        key={i}
                        src={logo}
                        className="max-h-32 w-32 object-contain mx-auto"
                        alt={`logo-${i}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technology Partners */}
            <div className="md:col-span-9 col-span-12 md:order-none order-6 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-full"
              >
                <p className="mb-4 md:font-semibold md:text-base text-xs">
                  Technology Partners
                </p>
                <div className="relative p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                  <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                  <div className="relative bg-white rounded-[17px] p-4 shadow-md h-full flex flex-col gap-4">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      {[logo11, logo12, logo13, logo14, logo15].map(
                        (logo, i) => (
                          <Image
                            key={i}
                            src={logo}
                            className="max-h-32 w-32 object-contain mx-auto"
                            alt={`logo-${i}`}
                          />
                        )
                      )}
                    </div>
                    <div className="grid grid-cols-5 gap-4 items-center">
                      {[logo16, logo17, logo18, logo19].map((logo, i) => (
                        <Image
                          key={i}
                          src={logo}
                          className="max-h-32 w-32 object-contain mx-auto"
                          alt={`logo-${i + 5}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Industry Partnerships */}
            <div className="md:col-span-3 col-span-4 md:order-none order-3 flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col h-full"
              >
                <p className="mb-4 md:font-semibold md:text-base text-xs">
                  Industry Partnerships
                </p>
                <div className="relative p-[2px] backdrop-blur-[4px] rounded-[20px] flex-grow flex flex-col">
                  <div className="absolute inset-0 rounded-[20px] p-[3px] bg-gradient-to-b from-[rgba(46,48,146,0.4)] to-[rgba(14,14,44,0.0)]"></div>
                  <div className="relative bg-white grid gap-4 items-center rounded-[17px] p-4 shadow-md h-full">
                    <Image
                      src={logo20}
                      className="max-h-32 w-32 object-contain mx-auto"
                      alt="logo"
                    />
                    <Image
                      src={logo21}
                      className="md:min-h-20 md:w-32 h-6 object-contain mx-auto"
                      alt="logo"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
