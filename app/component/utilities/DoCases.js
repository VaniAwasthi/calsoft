"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { motion } from "framer-motion";
import ButtonLayout from './ButtonLayout';
import { IoIosCheckmarkCircle } from "react-icons/io";
import line1 from "../../assets/DigitalEngineering/maturity/line1.svg"
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





export const Do = ({ offerings, timeline, highlights, heading, subtitle, desc, ButtonImage, buttonText, link }) => {
    return (
        <>
            <section className="bg-[#F4F4F4] pb-8 py-6 md:py-10 md:pb-20 mt-8">
                <div className='px-4 container mx-auto'>
                    <div className="mb-10">
                        <h2 className="gradient_h text-xl md:text-[36px] font-bold mb-4 md:mb-6 ">
                            {heading}
                        </h2>
                        <h3 className="text-xl md:text-[26px] font-semibold mt-4">
                            {subtitle}
                        </h3>
                        <p className="mt-2 max-w-4xl text-black md:text-base text-sm">
                            {desc}
                        </p>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            320: { slidesPerView: 3, spaceBetween: 10 },
                            500: { slidesPerView: 2 },
                            600: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                            1200: { slidesPerView: 6 },
                        }}
                        pagination={true}
                        modules={[Pagination]}
                        className="!pb-10 blue_pagination"
                    >
                        {offerings.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-[#2E3092] rounded-xl text-white p-4 md:p-6 h-full flex flex-col  md:items-center  md:text-center min-h-52 md:min-h-64 ">
                                    <div className="mb-4 bg-white h-12 w-12 md:h-18 md:w-18 rounded-full p-2 flex items-center justify-center">
                                        <Image src={item.icon} alt="icon" height={100} width={100} className="md:h-12 md:w-12 h-8 w-8" />

                                    </div>
                                    <p className="text-[13px] md:text-base">{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='flex md:flex-nowrap flex-wrap md:gap-10 gap-6'>
                        <div className='md:w-1/2'>
                            {highlights && highlights.length > 0 && (
                                <div
                                    className={`grid md:gap-6 gap-4  mt-6 ${timeline ? 'md:grid-cols-1' : 'md:grid-cols-1'
                                        }`}
                                >
                                    {highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex md:gap-6 gap-4  items-center">
                                            <div className="   flex items-center justify-center">
                                                <Image src={highlight.icon} alt="icon" height={100} width={100} className="md:h-8 md:w-8 w-12 h-12" />
                                            </div>
                                            <p
                                                className="text-sm md:text-base text-black"
                                                dangerouslySetInnerHTML={{ __html: highlight.text }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='md:w-1/2'>
                            {timeline ? (
                                <div className="grid md:grid-cols-1 gap-6 pt-6 md:pl-12 items-center md:pt-0 md:border-t-0 border-t md:border-l border-[#ACACAC] mt-4 md:mt-6">
                                    <div>
                                        <h4 className="font-semibold text-lg md:text-xl mb-2">Delivery Timeline:</h4>
                                        <p className="text-black font-medium text-md">{timeline}</p>
                                        {buttonText && (
                                            <motion.div
                                                initial={{ x: -50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.8 }}
                                                viewport={{ once: false, amount: 0.3 }}
                                                className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn mt-10"
                                            >
                                                <ButtonLayout
                                                    link={link}
                                                    text={buttonText}
                                                    image={ButtonImage}
                                                    hoverImage={ButtonImage}
                                                />
                                            </motion.div>
                                        )}
                                    </div>

                                </div>
                            ) : (
                                <div className="flex justify-start md:justify-center mt-10">
                                    {buttonText && (
                                        <motion.div
                                            initial={{ x: -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn"
                                        >
                                            <ButtonLayout
                                                link={link}
                                                text={buttonText}
                                                image={ButtonImage}
                                                hoverImage={ButtonImage}
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export const Cases = ({ image, heading, subheading, description, buttonText, link, cards, ButtonImage }) => {
    return (
        <>
            <section className="!py-10 md:!py-16 !pb-8 px-4 container mx-auto  md:px-16 use_Sec">
                <div className='flex md:flex-nowrap flex-nowrap md:gap-12 gap-6'>
                    <div className='w-1/2 md:w-[40%]'>
                        <Image
                            src={image}
                            alt={heading}
                            width={600}
                            height={500}
                            className="rounded-xl w-full h-auto"
                        />
                    </div>

                    <div className='w-1/2 md:w-[60%]'>
                        <h2 className="bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]  text-xl md:text-[36px] font-bold mb-3 md:mb-5 text-transparent bg-clip-text">
                            {heading}
                        </h2>
                        <p className="text-lg md:text-[26px]  font-semibold mb-2 md:mb-4">{subheading}</p>
                        <p className="text-black mb-6 md:text-base text-sm">{description}</p>

                        {buttonText && (
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn"
                            >
                                <ButtonLayout
                                    link={link}
                                    text={buttonText}
                                    image={ButtonImage}
                                    hoverImage={ButtonImage}
                                />
                            </motion.div>
                        )}

                        <div className="mt-10 md:mt-14 hidden md:grid  md:grid-cols-3 gap-4">
                            {cards.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative h-full p-[2px] group"
                                >

                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#2E3092_0%,#ED1C24_100%)] clip-diagonal z-0 group-hover:bg-transparent"></div>


                                    <div
                                        className="relative w-full h-full clip-diagonal p-6 z-10 transition-all duration-300"
                                        style={{
                                            background: 'white',
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 z-[-1] transition-all duration-300 opacity-0 group-hover:opacity-100"
                                            style={{
                                                background: 'linear-gradient(180deg, #2E3092 46.45%, #BA0007 109.78%)',
                                                borderRadius: 'inherit',
                                                clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0% 100%)',
                                            }}
                                        ></div>

                                        <h4 className="font-semibold text-lg md:text-2xl mb-2 group-hover:text-white">{item.title}</h4>
                                        <p className="text-sm md:text-[15px] text-[#4C4C4C] group-hover:text-white">{item.description}</p>
                                    </div>
                                </div>

                            ))}
                        </div>


                    </div>

                </div>
                <div className='md:hidden '>
                    <div className="mt-10 md:mt-14 grid grid-cols-3 gap-2">
                        {cards.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative h-full p-[2px] group"
                            >

                                <div className="absolute inset-0 bg-[linear-gradient(180deg,#2E3092_0%,#ED1C24_100%)] clip-diagonal z-0 group-hover:bg-transparent"></div>


                                <div
                                    className="relative w-full h-full clip-diagonal p-2 py-4 z-10 transition-all duration-300"
                                    style={{
                                        background: 'white',
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 z-[-1] transition-all duration-300 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: 'linear-gradient(180deg, #2E3092 46.45%, #BA0007 109.78%)',
                                            borderRadius: 'inherit',
                                            clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0% 100%)',
                                        }}
                                    ></div>

                                    <h4 className="font-semibold text-sm md:text-2xl mb-2 group-hover:text-white">{item.title}</h4>
                                    <p className="text-sm md:text-[15px] text-[#4C4C4C] group-hover:text-white hidden">{item.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}



export const BusinessValue = ({
    heading,
    subheading,
    description,
    buttonText,
    link,
    backgroundImage,
    valueItems,
    ButtonImage
}) => {
    return (
        <>
            <section
                className="relative container mx-auto  py-15  !px-0  md:!px-4 !my-10 md:!my-16"

            >
                <div className='bg-cover bg-center text-white md:rounded-[16px] md:px-10 px-4' style={{ backgroundImage: `url(${backgroundImage.src})` }}>

                    <div className="relative z-10 max-w-7xl mx-auto md:px-4 py-10 md:py-16 text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-xl md:text-[36px] font-bold mb-4 md:mb-8"
                        >
                            {heading}
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mt-4 text-lg md:text-[26px] font-semibold md:w-full w-[90%]"
                        >
                            {subheading}
                        </motion.h3>
                        <p className="mt-2 max-w-3xl text-sm sm:text-lg text-gray-200  md:w-full w-[90%]">
                            {description}
                        </p>


                        {buttonText && (
                            <div className='big_btn w-[250px] md:w-[300px] mt-10'>
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="flex flex-col md:flex-row gap-4"
                                >
                                    <ButtonLayout
                                        link={link}
                                        text={buttonText}
                                        image={ButtonImage}
                                        hoverImage={ButtonImage}
                                    />
                                </motion.div>
                            </div>
                        )}


                        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
                            {valueItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index }}
                                    className=' md:border-r border-white/30 last:border-0 '
                                >
                                    <h4 className="text-[22px] md:text-[32px] font-normal">{item.title}</h4>
                                    <p className="text-sm md:text-base font-light w-[85%] text-gray-200">{item.subtitle}</p>

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export const StartSection = ({ data }) => {
    return (
        <>
            <section className="relative  container mx-auto  px-4 !mb-8 md:!mb-16"

            >
                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ">

                    <div className="lg:w-1/2  lg:text-left">
                        <h2 className="bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_40%)]  text-xl md:text-[36px] font-bold mb-4 text-transparent bg-clip-text">
                            {data.title}
                        </h2>
                        <h3 className="text-lg md:text-2xl font-bold md:mb-2">{data.heading}</h3>
                        <h4 className="text-lg md:text-2xl text-black font-medium mb-4">{data.subheading}</h4>
                        <p className="text-sm md:text-base text-black">{data.description}</p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <Image
                            src={data.image}
                            alt={data.alt}
                            width={700}
                            height={400}
                            className="rounded-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}



export const SprintTimeline = ({ steps, heading, buttonText, link, ButtonImage }) => {
    return (
        <>
            <section className="  container mx-auto  px-4 py-12 !pb-6">
                <h2 className="text-xl md:text-[36px] font-bold mb-4">
                    {heading}
                </h2>
                <div className='first_img md:mr-[30%]'>
                    <Image
                        src={line1}
                        alt="Arrow"
                        width={200}
                        height={200}
                        className="mx-auto h-ful"
                    />
                </div>

                <div className=" space-y-6 md:space-y-8 relative alter_space">
                    {steps.map((step, index) => (
                        <div key={index} className="relative w-[75%] md:w-1/2 arrow_main">
                            {step.arrowDesktop && (
                                <>
                                    {/* Desktop Arrow */}
                                    <div className="hidden md:block absolute arrow_img top-0 mt-3 z-0">
                                        <Image
                                            src={step.arrowDesktop}
                                            alt="Arrow Desktop"
                                            width={200}
                                            height={200}
                                            className="mx-auto"
                                        />
                                    </div>
                                    {/* Mobile Arrow */}
                                    <div className="md:hidden absolute arrow_img top-0 mt-3 z-0">
                                        <Image
                                            src={step.arrowMobile}
                                            alt="Arrow Mobile"
                                            width={100}
                                            height={100}
                                            className=" w-24 "
                                        />
                                    </div>
                                </>
                            )}


                            <div className="flex  flex-col   md:items-start items-center gap-4 z-10 relative">
                                <div className=" py-0 flex items-center  ">
                                    <span className='bg-[#2E3092] text-white min-w-[100px] py-1 md:py-2 md:px-4 px-3 md:min-w-[160px] text-center font-semibold text-sm md:text-2xl flex items-center h-[60px] md:h-full rounded-tl-[10px]'> {step.day}</span>
                                    <span className='bg-[#F2F0F5] text-black min-w-[180px] py-1 md:py-2 md:px-4 px-3 md:min-w-[400px] text-center font-semibold text-sm md:text-2xl flex items-center h-[60px] md:h-full rounded-tr-[10px]'>{step.title}</span>
                                </div>

                                <div className="p-1 w-full">

                                    <ul className="md:mt-4 space-y-3">
                                        {step.points.map((text, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sm text-[#2E3092]"
                                            >
                                                <IoIosCheckmarkCircle className='text-xl' />

                                                <span className='text-black text-sm md:text-base'>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 font-medium text-sm md:text-base text-black ml-8">
                                        <strong>Output: {step.output}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="md:flex justify-center mb-12 -mt-[120px] hidden">
                    <div className='w-1/2 ml-auto'>
                        {buttonText && (
                            <div className=' text-center mt-10'>
                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="flex flex-col md:flex-row gap-4 justify-center"
                                >
                                    <ButtonLayout
                                        link={link}
                                        text={buttonText}
                                        image={ButtonImage}
                                        hoverImage={ButtonImage}
                                    />
                                </motion.div>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}


export const FooterBg = ({ lightContent, link, ContactImg, ButtonImage }) => {
    return (
        <>
            <section>
                <div className="relative mt-4 md:mt-10">

                    <Image
                        src={ContactImg}
                        alt="Background Image"
                        className="w-full h-[300px] md:h-[350px] md:object-cover object-center"
                    />

                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 md:p-16 p-6 w-1/2 md:w-1/2 text-white">
                        <div className="space-y-6 text-left md:text-left">
                            <h2 className="text-md md:text-3xl font-normal leading-snug">
                                {lightContent}

                            </h2>

                            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4">

                                <motion.div
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="flex flex-col md:flex-row gap-4"
                                >
                                    <ButtonLayout
                                        link={link}
                                        text="Start Today"
                                        image={ButtonImage}
                                        hoverImage={ButtonImage}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


