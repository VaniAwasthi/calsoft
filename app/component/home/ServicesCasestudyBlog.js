"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icon3 from "../../assets/home/icon3.svg";
import service1 from "../../assets/home/service1.svg";
import service2 from "../../assets/home/service2.svg";
import service3 from "../../assets/home/service3.svg";
import service4 from "../../assets/home/service4.svg";
import service5 from "../../assets/home/service5.svg";
import service6 from "../../assets/home/service6.svg";
import icon2 from "../../assets/home/icon4.svg";
// import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import logo2 from "../../assets/home/logo2.png";

import blogimg1 from "../../assets/home/blog1.webp";
import blogimg2 from "../../assets/home/blog2.webp";
import blogimg3 from "../../assets/home/blog3.webp";
import { LuArrowUpRight } from "react-icons/lu";
// import { BlogCard } from "../../component/blog/BlogCard";
import Casestudybg from "../../assets/home/casestudybg.webp";
export const Services = () => {
  const title = "Services";
  const heading = "Services | Expertise-infused and business-optimized.";
  const services = [
    {
      icon: service1,
      title: "AI-Powered Test Automation",
      description:
        "Accelerate releases with intelligent,self-healing automation frameworks.",
      link: "/",
    },
    {
      icon: service2,
      title: "Cloud-Native Product Engineering",
      description:
        "Build and scale modern apps with microservices & agile delivery.",
      link: "/",
    },
    {
      icon: service3,
      title: "AI & ML Integration",
      description:
        "Deploy and operationalize AI/ML models with enterprise-grade readiness.",
      link: "/",
    },
    {
      icon: service4,
      title: "Edge & IoT Security Automation",
      description:
        "Automate threat detection & control at the edge with AI-driven tools.",
      link: "/",
    },
    {
      icon: service5,
      title: "Storage & Data Lifecycle Management",
      description:
        "Modernize storage for performance, cost-efficiency, and compliance.",
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
        <div className="container mx-auto px-4 xl:px-20">
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
              <motion.h2 className="text-xl md:text-[36px] font-normal text-white">
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
                  className="bg-[#2E3092] text-white  py-6 md:p-8 md:py-10 rounded-[20px] flex flex-col items-start"
                >
                  <div className="flex justify-center items-center gap-0 w-full md:gap-6  md:flex-nowrap  md:w-full">
                    <div className="md:w-40 w-20">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="mb-4 md:w-full md:h-full h-12 object-contain"
                      />
                    </div>

                    <div className="w-full">
                      <h3 className="text-[10px] md:text-lg w-full font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="hidden md:block text-white line-clamp-3  text-xs md:text-sm font-[200] md:font-light">
                        {service.description}
                      </p>
                      {/* <Link
                        href={service.link}
                        className="mt-4 text-xs  md:text-sm inline-block text-white font-light"
                      >
                        Know more...
                      </Link> */}
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
  const heading = `Cloud Provider Accelerates VMware Migration <span className="text-black font-normal"> with Calsoft’s CLI Tool</span>`;
  // data for case studies
  const caseStudyDataArray = [
    {
      id: 1,
      title:
        " Accelerating Quality at Scale: How a Global Networking Giant Cut Test Time by 40% with CalTIA",
      description: [
        "<strong>Abstract:</strong> Faced with long test cycles and high infrastructure costs, a global networking leader turned to Calsoft to bring speed and precision to their software validation process. By implementing CalTIA, Calsoft’s AI-powered test intelligence platform, the company replaced manual test selection with intelligent automation—cutting waste, accelerating releases, and improving engineering efficiency. What once slowed down delivery is now a competitive edge.",
      ],
      buttonText: "Case Study",
      pdfLink: "/pdfs/case1.pdf",
      stats: [
        { count: "40%", text: " faster validation cycles" },
        { count: "30% ", text: "lower infrastructure costs" },
        { count: "20% ", text: "increase in test accuracy" },
      ],
    },
    {
      id: 2,
      title: "AI-powered test optimization with CalTIA",
      description: [
        "<strong>Abstract:</strong> To ensure performance across diverse and complex network environments, a global networking solutions leader partnered with Calsoft to modernize its test validation process. By integrating a custom-trained Large Language Model (LLM), the company automated the generation of real-world test scenarios from topology diagrams and device configurations. This shift from manual to AI-led validation enabled the team to cover edge cases with greater accuracy, reduce testing cycles, and scale test coverage effortlessly across unique deployments.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoftinc.com/blogs/the-impact-of-ai-on-software-testing-from-automation-to-intelligent-qa.html",
      stats: [
        { count: "60%", text: "reduction in manual effort for test creation" },
        { count: "3X", text: "faster validation cycles" },
        { count: "40%", text: " improvement in test coverage accuracy" },
      ],
    },
    {
      id: 3,
      title:
        "Cloud Provider Accelerates VMware Migration with Calsoft’s CLI Tool",
      description: [
        "<strong>Insight:</strong> A leading computing and edge cloud provider needed a robust, self-service migration framework to help customers transition from VMware-based environments to its proprietary cloud. Calsoft developed a lightweight, CLI-based migration tool that automated discovery, conversion, and validation—enabling fast, error-free virtual machine (VM) migrations at scale. With platform-neutral packaging, parallel execution, and built-in consistency checks, the solution accelerated onboarding and empowered customers with operational autonomy.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoft.ai/success-stories/ai-powered-optimization-of-data-center-operations/",
      stats: [
        {
          count: "50%",
          text: " faster onboarding with automated VM migration",
        },
        { count: "3x ", text: "migration speed via parallel execution" },
        { count: " Zero GUI dependency  ", text: "with CLI-driven operations" },
      ],
    },
    {
      id: 4,
      title:
        "Accelerating VMware Workload Migration with Calsoft’s Migration Server",
      description: [
        "<strong>Insight:</strong> A leading cloud infrastructure provider partnered with Calsoft to simplify and scale its VMware workload migration strategy. With growing licensing costs and the need for platform flexibility, the client needed a secure, self-contained, and repeatable solution to move workloads to Red Hat OpenShift and AWS. Calsoft’s Migration Server-based framework offered full lifecycle support—automating discovery, conversion, cost planning, and validation—while minimizing disruption and improving operational efficiency.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoft.ai/success-stories/ai-powered-optimization-of-data-center-operations/",
      stats: [
        {
          count: "60%",
          text: " less manual effort with automation",
        },
        { count: "40%", text: "faster migration to OpenShift and AWS" },
        { count: "3x", text: "framework reuse across teams and workloads" },
      ],
    },
    {
      id: 5,
      title:
        "Streamlining Legal Case Classification with Calsoft’s GenAI Copilot",
      description: [
        "<strong>Insight:</strong> Calsoft partnered with one of the largest personal injury law firms in the United States to streamline legal operations using a GenAI-powered case classification solution. By integrating GPT-based intelligence into the firm’s existing workflow, Calsoft enabled smarter, faster, and more reliable decisions on case viability and team allocation—significantly reducing manual overhead and accelerating legal turnaround times.",
      ],
      buttonText: "Case Study",
      pdfLink:
        "https://www.calsoft.ai/success-stories/ai-powered-optimization-of-data-center-operations/",
      stats: [
        {
          count: "30%",
          text: " reduction in dependency on manual legal review",
        },
        { count: "24x7 ", text: "availability of legal case evaluation" },
        {
          count: " Real-time decisions",
          text: "powered by integrated AI Copilot",
        },
      ],
    },
  ];

  const sliderData = [
    {
      id: 1,
      image: blogimg1,
      title:
        "Accelerating Quality at Scale: How a Global Networking Giant Cut Test Time by 40% with CalTIA",
    },
    {
      id: 2,
      image: blogimg2,
      title: "AI-powered test optimization with CalTIA",
    },
    {
      id: 3,
      image: blogimg3,
      title:
        "Cloud Provider Accelerates VMware Migration with Calsoft’s CLI Tool",
    },
    {
      id: 4,
      image: blogimg3,
      title:
        "Accelerating VMware Workload Migration with Calsoft’s Migration Server",
    },
    {
      id: 5,
      image: blogimg3,
      title:
        "Streamlining Legal Case Classification with Calsoft’s GenAI Copilot",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const caseStudyData = caseStudyDataArray[selectedIndex];
  return (
    <>
      <section className="md:py-8 py-10" id="case-studies">
        <div className="container mx-auto px-4 xl:px-20">
          <div className="flex gap-6 items-center mb-2 md:mb-6">
            <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 hidden md:flex items-center justify-center">
              <Image src={icon2} alt="icon" width={16} height={16} />
            </div>
            <p className="font-light text-sm md:text-base ">Case Studies</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="pt-8 gradient-border"
          >
            <motion.h2
              key={caseStudyData.title}
              className="text-xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent"
            >
              Cloud Provider Accelerates VMware Migration
              <span className="text-black font-normal px-3">
                with Calsoft’s CLI Tool
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch"
            >
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
                <h2 className="text-[15px] font-medium md:text-2xl md:font-semibold mt-[4rem]">
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
                    className="relative flex mt-6 md:mt-10  w-[180px] md:w-[220px] gap-2 md:justify-between items-center py-3 justify-center px-4 md:px-8 md:py-4 rounded-full shadow-md bg-[#BA0007] text-white transition-all duration-500 overflow-hidden group"
                    style={{ boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25)" }}
                    whileHover={{ scale: 1.03 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <span className="relative justify-center  z-10 group-hover:text-[#BA0007] w-full flex gap-4 items-center transition-colors duration-500 text-sm md:text-base">
                      {caseStudyData.buttonText}{" "}
                      <IoArrowForwardCircleSharp className="text-3xl" />
                    </span>
                    <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                  </motion.a>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                {/* Swiper for mobile */}
                <div className="block md:hidden ">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={2}
                    loop
                    autoplay={{ delay: 6000 }}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
                      {caseStudyData.stats.map((stat, index) => (
                        <SwiperSlide key={index}>
                          <motion.div
                            className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-2 my-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileHover={{ x: -30 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            style={{ boxShadow: "0px 1px 9px 0px #D9DBF1" }}
                          >
                            <p className="text-lg font-semibold text-gray-700">
                              {stat.count}
                            </p>
                            <div className="text-sm text-gray-500 leading-tight px-2">
                              {stat.text}
                            </div>
                          </motion.div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>

                {/* Original flex layout for md+ */}
                <div className="hidden md:block space-y-4">
                  {caseStudyData.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-white rounded-xl shadow-lg flex items-center space-x-4 space-y-2 my-[2rem]"
                      initial={{ opacity: 0, x: 50 }}
                      whileHover={{ x: -30 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                      style={{ boxShadow: "0px 2px 9px #D9DBF1" }}
                    >
                      <p className="text-2xl font-semibold text-gray-700">
                        {stat.count}
                      </p>
                      <div className="text-sm text-gray-500 leading-tight">
                        {stat.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="relative w-full py-8">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
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
