"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonLayout from "../utilities/ButtonLayout";
import { useEffect } from "react";
import Icon from "../../assets/caseStudies/BusinessValueIcon1.svg";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export const HeroSectionLanding = ({
  image1,
  image2,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonImage,
  hoverImage,
  backgroundImage,
  backgroundMain = "",
  scrollToId,
}) => {
  const handleScroll = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <div
      className={`relative w-full h-[700px] md:min-h-screen ${backgroundMain}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className={`object-cover w-full h-full object-[top_left] md:object-center`}
          priority
        />
      </div>

      {/* Overlay Content Section */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            {/* Left Section: Two Images */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex  gap-4 md:gap-5 lg:w-[40%] md:w-[50%] flex-row md:items-end"
            >
              <Image
                src={image2}
                alt="Card 1"
                width={200}
                height={200}
                className="w-20 mb-0 md:mt-8 md:h-full md:w-full -translate-y-10 rounded-lg"
              />
              <Image
                src={image1}
                width={200}
                height={200}
                alt="Card 2"
                className="w-40 md:w-full md:mb-0  h-40 md:h-full rounded-lg"
              />
            </motion.div>

            {/* Right Section: Text and Button */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white lg:w-[50%] md:w-[45%]  max-w-2xl mb-3 ml-3 px-5"
            >
              <motion.h2
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl xl:text-[40px]  w-full font-bold leading-tight"
              >
                {title}
              </motion.h2>

              {subtitle && (
                <motion.p
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-sm md:text-[24px] w-full font-light mt-6"
                >
                  {subtitle}
                </motion.p>
              )}
              <motion.p
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6 text-sm xl:text-[16px]"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-6 cursor-pointer"
                 onClick={handleScroll} 
              >
                <ButtonLayout
                  text={buttonLabel}
                  image={buttonImage}
                  hoverImage={hoverImage}
                  className="!w-[210px] !h-[40px] md:!w-[220px] md:!h-[48px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfoWithFormSection = ({
  heading,
  headingHighlight,
  description1,
  buttonLabel,
  portalId,
  formId,
  region = "na1", 
  isforLayout = false,
}) => {
  useEffect(() => {
    if (!isforLayout || !portalId || !formId) return;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId,
          formId,
          region,
          target: "#hubspotFormWrapper",
        });
      }
    };
    document.body.appendChild(script);
  }, [portalId, formId, region, isforLayout]);

  return (
    <div className="container mx-auto px-6 py-3 md:py-12" id="DownloadSection">
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 my-3">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl md:text-[40px] font-bold text-[#2E3092] text-center my-10 md:text-left"
          >
            {heading}
            <span className="bg-gradient-to-r from-[#2E3092] via-[#6A329F] to-[#ED1C24] bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>

          <div
            className="text-[#4C4C4C] text-base md:text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: description1 }}
          ></div>
        </div>

        {/* Right: Form */}
        <div id="hubspotFormWrapper" className="w-full md:w-1/2  mt-12" />
      </div>
    </div>
  );
};

export const BusinessValueSection = ({ title, values, backgroundImage ,isDivider=true}) => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";

  return (
    <section className="w-full max-w-7xl mx-auto px-2 md:px-8 md:my-[3rem] my-10">
      {isDivider &&<div className="bg-[#1E1E1E] w-full h-[1px] my-6" />}
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-[40px] font-bold text-[#2E3092] text-center my-10 md:text-left"
      >
        Business{" "}
        <span className="bg-gradient-to-r from-[#2E3092] via-[#6A329F] to-[#ED1C24] bg-clip-text text-transparent">
          Value
        </span>
      </motion.h2>
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className={`object-cover w-full h-full object-[top_left] md:object-center`}
            priority
          />
        </div>
        {/* Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-stretch justify-between text-white p-4 md:p-8 gap-4 md:gap-0">
          {values?.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[200px] flex flex-col items-center justify-center text-center px-2 md:px-4 py-4 md:py-0 relative"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.image ? `${baseUrl}/${item.image}` : Icon}
                  alt={item.number}
                  width={35}
                  height={35}
                  className="mx-auto"
                />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-lg md:text-xl font-bold mb-1 px-2 mt-2"
                >
                  {item.number}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-[13px] font-light opacity-90 mb-2"
                >
                  {item.content}
                </motion.div>
              </motion.div>
              {/* Divider: only show on desktop and not for last item */}
              {idx !== values.length - 1 && (
                <div
                  className="hidden md:block absolute mt-[8rem] right-0 transform -translate-y-1/2 h-3/5 border-r border-white/30"
                  style={{ height: "60%", minHeight: 60 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ToKnowMoreSection = ({
  title = "To Know More",
  description = "About how we can align our expertise to your requirements, reach out to us.",
  buttonLabel = "Contact Us",
 
  backgroundImage,
  buttonImage,
  hoverImage,
}) => {
    const router = useRouter();
  
  const ButtonClick=()=>{
      router.push(`/contact-us`);
  }
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] ">
      <div className="w-full h-full bg-[linear-gradient(90deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0)_100%)] absolute z-10" />
      <Image
        src={backgroundImage}
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center md:items-center justify-start md:justify-start min-h-[220px] w-full h-full p-6 md:p-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white text-2xl md:text-3xl font-semibold mb-2"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white/80 text-base md:text-lg mb-6 max-w-md"
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
              onClick={ButtonClick}
              className="!w-[210px] !h-[40px] md:!w-[220px] md:!h-[48px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
