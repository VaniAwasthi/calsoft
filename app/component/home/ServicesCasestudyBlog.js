"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import icon3 from "../../assets/home/icon3.svg";
import service1 from "../../assets/home/service1.svg";
import service2 from "../../assets/home/service2.svg";
import service3 from "../../assets/home/service3.svg";
import service4 from "../../assets/home/service4.svg";
import service5 from "../../assets/home/service5.svg";
import service6 from "../../assets/home/service6.svg";
import icon2 from "../../assets/home/icon4.svg";
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import logo2 from "../../assets/home/logo2.png";
import man1 from "../../assets/home/man1.webp";
import man2 from "../../assets/home/man2.webp";
import man3 from "../../assets/home/man3.webp";
import blogimg1 from "../../assets/home/blog1.webp";
import blogimg2 from "../../assets/home/blog2.webp";
import blogimg3 from "../../assets/home/blog3.webp";
import { LuArrowUpRight } from "react-icons/lu";
import { BlogCard } from "../../component/blog/BlogCard";
import Casestudybg from "../../assets/home/casestudybg.webp";
export const Services = () => {
  const title = "Services";
  const heading = "Services | Expertise-infused and business-optimized.";
  const services = [
    {
      icon: service1,
      title: "Product Engineering",
      description:
        "Build reliable software, improve products, and scale your digital platforms.",
      link: "/",
    },
    {
      icon: service2,
      title: "Digital Engineering",
      description:
        "Design smarter systems with cloud, IoT, and user-friendly interfaces.",
      link: "/",
    },
    {
      icon: service3,
      title: "Managed Testing Services",
      description:
        "Ensure high performance and reliability through comprehensive testing.",
      link: "/",
    },
    {
      icon: service4,
      title: "Sustaining & Support",
      description:
        "Maintain your system with expert support and future-ready solutions.",
      link: "/",
    },
    {
      icon: service5,
      title: "Data",
      description:
        "Harness the power of your data to uncover insights and drive decisions.",
      link: "/",
    },
    {
      icon: service6,
      title: "Artificial Intelligence",
      description:
        "Add intelligence to your business with AI-powered tools and analytics.",
      link: "/",
    },
  ];
  return (
    <>
      <section className="py-10 md:py-8 bg-[#021553]" id="services">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex gap-6 items-center mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
              <Image src={icon3} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-white text-sm md:text-base">
              {title}
            </p>
          </div>

          <div className="pt-8 gradient-border">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h2 className="text-2xl md:text-[36px] font-normal text-white">
                {heading}
              </motion.h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6 md:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-[#2E3092] text-white  p-3 py-6 md:p-8 md:py-10 rounded-[20px] flex flex-col items-start"
                >
                  <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap w-[95%] md:w-full">
                    <div className="w-42">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={50}
                        height={50}
                        className="mb-4 md:w-full md:h-full h-8 object-contain"
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="text-sm md:text-lg md:w-full w-[90%] font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white line-clamp-3  text-xs md:text-sm font-[200] md:font-light">
                        {service.description}
                      </p>
                      <Link
                        href={service.link}
                        className="mt-4 text-xs  md:text-sm inline-block text-white font-light"
                      >
                        Know more...
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Casestudy = () => {
  const title = "Case Studies";
  const heading = `Real results. <span className="text-black font-normal">Proven success</span>`;
  // data for case studies
  const caseStudyDataArray = [
    {
      id: 1,
      title: " GenAI-Driven Production-Centric Test Generation",
      description: [
        "<strong>Abstract:</strong> FModern network environments are highly complex, comprising diverse devices, configurations, and architectures. Ensuring seamless functionality across various conditions requires precise solution-level testing to validate end-to-end system behaviour.",
        "A leading networking provider partnered with Calsoft to enhance use case validation using an LLM-driven approach. By generating production-centric tests, the solution enabled real-world scenario validation, improving accuracy, reliability, and overall network performance. This approach ensures comprehensive coverage, addressing diverse deployment scenarios and edge cases while optimizing network efficiency.",
      ],
      buttonText: "Case Study",
      pdfLink: "/pdfs/case1.pdf",
      stats: [
        { count: "25%", text: "Accelerated Validation Cycles" },
        { count: "50k+", text: "Reduced Human Errors" },
        { count: "50k+", text: "Optimal Test Coverage" },
      ],
    },
    {
      id: 2,
      title: "AI-powered test optimization with CalTIA",
      description: [
        "<strong>Abstract:</strong> Calsoft integrated CalTIA, an AI-powered Test Intelligence Platform, into a global networking, security, and IT infrastructure provider’s development lifecycle to optimize test execution. With AI-driven test prioritization and automated regression testing, CalTIA streamlined test selection, eliminated redundant tests, and accelerated Pull Request (PR) validation. This approach reduced regression cycle time, minimized resource utilization, and improved software quality, enabling faster and more reliable releases.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoftinc.com/blogs/the-impact-of-ai-on-software-testing-from-automation-to-intelligent-qa.html",
      stats: [
        { count: "60%", text: "Faster validation cycles" },
        { count: "80k+", text: "Optimized resource utilization" },
      ],
    },
    {
      id: 3,
      title: "AI-Powered Optimization of Data Center Operations",
      description: [
        "<strong>Insight:</strong> The digital transformation journey has increased the prominence of Data Centers (DCs) for business success. The futuristic DCs are intricate systems that demand scrupulous monitoring to maintain higher operational efficiency and availability. Calsoft partnered with a technology company that provides a wide range of hardware and software services, including storage, security, and networking solutions, and developed a solution to realize predictive maintenance and management to diagnose and prevent Data Centre failures.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoft.ai/success-stories/ai-powered-optimization-of-data-center-operations/",
      stats: [
        {
          count: "40%",
          text: "Reduction in issues",
        },
        { count: "100k+", text: "maximizing ROI" },
      ],
    },
  ];

  const sliderData = [
    { id: 1, image: blogimg1, title: "Case Study One" },
    { id: 2, image: blogimg2, title: "Case Study Two" },
    { id: 3, image: blogimg3, title: "Case Study Three" },
    { id: 4, image: blogimg3, title: "Case Study four" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const caseStudyData = caseStudyDataArray[selectedIndex];
  return (
    <>
      <section className="md:py-8 py-10" id="case-studies">
        <div className="container mx-auto px-4 md:px-20">
          <div className="flex gap-6 items-center mb-2 md:mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
              <Image src={icon2} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-sm md:text-base ">Case Studies</p>
          </div>

          <div className="pt-8 gradient-border">
            <motion.h2
              key={caseStudyData.title}
              className="text-2xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></motion.h2>

            <main className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
              <motion.div
                className=" text-white p-4 md:p-8 rounded-[20px]  md:w-2/3 flex flex-col justify-center bg-cover bg-center"
                initial={{ opacity: 0, x: -50 }}
                style={{
                  backgroundImage: `url(${Casestudybg.src})`,
                }}
                transition={{ duration: 0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <div className="w-36 h-32 mb-6 bg-white rounded-2xl flex justify-center items-center p-2">
                  <Image
                    src={logo2}
                    className="w-full brightness-1 invert-100"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="text-lg font-medium md:text-2xl md:font-semibold mt-[4rem]">
                  {caseStudyData.title}
                </h2>
              </motion.div>

              <div className="  md:w-2/3 flex flex-col justify-between">
                <div>
                  {caseStudyData.description.map((desc, index) => (
                    <motion.p
                      key={index}
                      className="text-[#959595] text-sm md:text-[15px] font-light p-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      dangerouslySetInnerHTML={{ __html: desc }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                    />
                  ))}
                  <motion.a
                    href={caseStudyData.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex mt-6 md:mt-10  w-[180px] md:w-[220px] gap-2 md:justify-between items-center py-3 justify-center px-4 md:px-8 md:py-4 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                    style={{ boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25)" }}
                    whileHover={{ scale: 1.03 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <span className="relative justify-center  z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500 text-sm md:text-base">
                      {caseStudyData.buttonText}{" "}
                      <IoArrowForwardCircleSharp className="text-3xl" />
                    </span>
                    <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </motion.a>
                </div>
              </div>

              <div className="w-full  md:w-2/3">
                <div className="space-y-4 md:block flex gap-4">
                  {caseStudyData.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl h-full p-4 flex-wrap flex gap-4 items-center justify-between cursor-pointer transition-transform md:w-full w-2/4"
                      initial={{ opacity: 0, x: 50 }}
                      whileHover={{ x: -30 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                      style={{ boxShadow: "0px 2px 9px #D9DBF1" }}
                    >
                      <div className="flex w-[40%] gap-4 flex-wrap justify-between">
                        <p className="text-black text-sm">{stat.count}</p>
                        <div className="flex gap-0 -mt-2">
                          <Image src={man1} alt="man" width={40} height={40} />
                          <Image
                            src={man2}
                            alt="man"
                            className="-ml-2"
                            width={40}
                            height={40}
                          />
                          <Image
                            src={man3}
                            alt="man"
                            className="-ml-2"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                      <div className="flex gap-4 md:w-[50%] flex-wrap justify-between">
                        <p className="md:font-semibold md:text-base text-sm font-medium">
                          {stat.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </main>
          </div>
          <div className="relative w-full py-8">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              navigation
              className="slider_t play_slider"
            >
              {sliderData.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    onClick={() => setSelectedIndex(index)}
                    className="group relative bg-white cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt="Slide"
                      className="w-full h-44 md:h-56 rounded-xl object-cover"
                    />
                    <div className="py-4">
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
                        className="text-4xl  text-[#2E3092]"
                        strokeWidth={4}
                      />
                    </motion.div>
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

export const Blog = () => {
  return <div>Blog</div>;
};
