"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import icon3 from "../../assets/home/icon3.svg"
import service1 from "../../assets/home/service1.svg"
import service2 from "../../assets/home/service2.svg"
import service3 from "../../assets/home/service3.svg"
import service4 from "../../assets/home/service4.svg"
import service5 from "../../assets/home/service5.svg"
import service6 from "../../assets/home/service6.svg"
import icon2 from "../../assets/home/icon2.svg"
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import logo2 from "../../assets/home/logo2.png"
import man1 from "../../assets/home/man1.webp"
import man2 from "../../assets/home/man2.webp"
import man3 from "../../assets/home/man3.webp"
import blogimg1 from "../../assets/home/blog1.webp"
import { BlogCard } from "../../component/blog/BlogCard";









export const Services = () => {
    const title = "Services"
    const heading = "Services | Expertise-infused and business-optimized."
    const services = [
        {
            icon: service1,
            title: "Product Engineering",
            description:
                "Build reliable software, improve products, and scale your digital platforms.",
            link: "/"
        },
        {
            icon: service2,
            title: "Digital Engineering",
            description:
                "Design smarter systems with cloud, IoT, and user-friendly interfaces.",
            link: "/"
        },
        {
            icon: service3,
            title: "Managed Testing Services",
            description:
                "Ensure high performance and reliability through comprehensive testing.",
            link: "/"
        },
        {
            icon: service4,
            title: "Sustaining & Support",
            description:
                "Maintain your system with expert support and future-ready solutions.",
            link: "/"
        },
        {
            icon: service5,
            title: "Data",
            description:
                "Harness the power of your data to uncover insights and drive decisions.",
            link: "/"
        },
        {
            icon: service6,
            title: "Artificial Intelligence",
            description:
                "Add intelligence to your business with AI-powered tools and analytics.",
            link: "/"
        },
    ];
    return (
        <>
            <section
                className="py-10 md:py-14 bg-[#021553]">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="flex gap-6 items-center mb-6">
                        <div className="rounded-full bg-white w-8 h-8 p-2 flex items-center justify-center">
                            <Image src={icon3} alt="icon" width={16} height={16} />

                        </div>
                        <p className="font-light text-white">{title}</p>
                    </div>

                    <div className="pt-8 gradient-border">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2 className="text-3xl md:text-[36px] font-normal text-white">
                                {heading}
                            </motion.h2>
                        </motion.div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6 md:gap-10">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-[#2E3092] text-white p-6 py-8 md:p-8 md:py-10 rounded-[20px] flex flex-col items-start"
                                >
                                    <div className="flex gap-6 flex-wrap md:flex-nowrap">
                                        <div className="w-42">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={50}
                                                height={50}
                                                className="mb-4 w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                            <p className="text-white text-sm font-light">{service.description}</p>
                                            <Link href={service.link} className="mt-4 text-sm inline-block text-white font-light">
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
    )
}



export const Casestudy = () => {
    const title = "Case Studies"
    const heading = `Real results. <span className="text-black font-normal">Proven success</span>`
    const caseStudyData = {
        title: "A leading networking solutions provider",
        description: [
            "Modern network environments are highly complex, comprising diverse devices, configurations, and architectures. Ensuring seamless functionality across various conditions requires precise solution-level testing to validate end-to-end system behaviour.",
            "A leading networking provider partnered with Calsoft to enhance use case validation using an LLM-driven approach."
        ],
        buttonText: "Case Study",
        stats: [
            { count: "More 3k+", text: "Accelerated Validation Cycles" },
            { count: "More 1k+", text: "Reduced Human Errors" },
            { count: "More 2k+", text: "Optimal Test Coverage" }
        ]
    };
    const sliderData = [
        {
            id: 1,
            image: blogimg1,
            title: "Lorem Ipsum is simply dummy text of the printing",
            link: "#",
        },
        {
            id: 2,
            image: blogimg1,
            title: "Lorem Ipsum is simply dummy text of the printing",
            link: "#",
        },
        {
            id: 3,
            image: blogimg1,
            title: "Lorem Ipsum is simply dummy text of the printing",
            link: "#",
        },
        {
            id: 4,
            image: blogimg1,
            title: "Lorem Ipsum is simply dummy text of the printing",
            link: "#",
        },
    ]
    return (
        <>

            <section
                className="md:py-14 py-10">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="flex gap-6 items-center mb-6">
                        <div className="rounded-full bg-[#2E3092] w-8 h-8 p-2 flex items-center justify-center">
                            <Image src={icon2} alt="icon" width={16} height={16} />
                        </div>
                        <p className="font-light">{title}</p>
                    </div>

                    <div className="pt-8 gradient-border">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <motion.h2 className="text-3xl md:text-[36px] font-semibold bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)] bg-clip-text text-transparent" dangerouslySetInnerHTML={{ __html: heading }}>

                            </motion.h2>
                        </motion.div>
                        <main className="mt-8 flex flex-col md:flex-row gap-8 md:gap-12 items-stretch ">

                            <motion.div
                                className="bg-[#2E3092] text-white p-4 md:p-8 rounded-[20px] w-full md:w-2/3 flex flex-col justify-center"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-32 h-24 mb-6 bg-[#484A97] rounded-2xl flex justify-center items-center p-2">
                                    <Image src={logo2} className="w-full brightness-1 invert-100" alt="logo" width={100} height={100} />
                                </div>
                                <h2 className="text-2xl font-semibold">{caseStudyData.title}</h2>
                            </motion.div>

                            <div className="w-full md:w-2/3 flex flex-col justify-between">

                                <div>
                                    {caseStudyData.description.map((desc, index) => (
                                        <motion.p
                                            key={index}
                                            className="text-[#959595] text-sm md:text-[15px] font-light p-2"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            dangerouslySetInnerHTML={{ __html: desc }}
                                        />
                                    ))}
                                    <motion.button
                                        className="relative flex mt-6 md:mt-10 w-[220px] gap-2 justify-between items-center px-8 py-4 rounded-full shadow-md bg-[#E8282B] text-white transition-all duration-500 overflow-hidden group"
                                        style={{ boxShadow: "0px 12px 16px rgba(0, 54, 19, 0.25)" }}
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <span className="relative z-10 group-hover:text-[#E8282B] w-full flex gap-4 items-center transition-colors duration-500">
                                            {caseStudyData.buttonText} <IoArrowForwardCircleSharp className="text-3xl" />
                                        </span>
                                        <span className="absolute inset-0 bg-white w-full h-full left-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                                    </motion.button>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <div className="space-y-4">
                                    {caseStudyData.stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-2xl p-4 flex items-center justify-between w-full cursor-pointer transition-transform"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            whileHover={{ x: -30 }} style={{ boxShadow: "0px 2px 9px #D9DBF1" }}>
                                            <div className="flex w-[30%] gap-4 flex-wrap justify-between">
                                                <p className="text-black text-sm">{stat.count}</p>
                                                <div className="flex gap-0 -mt-2">
                                                    <Image src={man1} alt="man" width={40} height={40} />
                                                    <Image src={man2} alt="man" className="-ml-2" width={40} height={40} />
                                                    <Image src={man3} alt="man" className="-ml-2" width={40} height={40} />

                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex gap-4 md:w-[70%] flex-wrap justify-between">
                                                    <p className="font-semibold">{stat.text}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </main>

                        <div className="relative w-full py-10">
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
                                {sliderData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <BlogCard data={item} />

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}


export const Blog = () => {
    return (
        <div>Blog</div>
    )
}

