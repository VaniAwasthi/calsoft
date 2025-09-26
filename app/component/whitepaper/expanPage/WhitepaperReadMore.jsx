"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import EmailIcon from "../../../assets/social-icon/email.svg";
import TwitterIcon from "../../../assets/social-icon/twiter.svg";
import LinkedInIcon from "../../../assets/social-icon/linkdine.svg";
import WhatsappIcon from "../../../assets/social-icon/whatapp.svg";
import Image from "next/image";
import ButtonLayout from "../../utilities/ButtonLayout";

export const HeroSectionWhitePaper = ({
  image1,
  image2,
  title,
  subtitle,
  description,
  buttonLabel,
  buttonImage,
  hoverImage,
  backgroundImage,

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
    <div className="relative w-full h-[600px] sm:h-[400px] md:h-[600px]">
      <Image
        src={backgroundImage}
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content Section */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-20 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
            
            {/* Left Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white lg:w-[50%] md:w-[45%] max-w-2xl mb-3 ml-3 px-5"
            >
              <motion.h2
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl xl:text-[40px] w-full font-bold leading-tight"
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
                className="mt-6"
              >
                <div onClick={handleScroll} className="cursor-pointer">
                  <ButtonLayout
                    text={buttonLabel}
                    image={buttonImage}
                    hoverImage={hoverImage}
                    className="!w-[230px] !h-[40px] md:!w-[250px] md:!h-[48px]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-4 md:gap-5 lg:w-[40%] md:w-[50%] flex-row md:items-end"
            >
              <Image
                src={image2}
                alt="Card 1"
                width={200}
                height={200}
                className="h-full w-full rounded-lg"
              />
              <Image
                src={image1}
                width={200}
                height={200}
                alt="Card 2"
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const AccordionSection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto  px-6 md:px-10 py-8 manrope">
      <div className="my-10">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl md:text-[40px] font-semibold text-[#2E3092]  my-3 text-left"
        >
          Why Read This{" "}
          <span className="bg-gradient-to-r from-[#2E3092] via-[#6A329F] to-[#ED1C24] bg-clip-text text-transparent">
            Whitepaper ?
          </span>
        </motion.h2>

        {items.map((item, index) => (
          <div
            key={index}
            className="py-4 cursor-pointer "
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-start gap-3">
              <motion.div
                
                transition={{ duration: 0.3 }}
                className="mt-2 cursor-pointer "
              >
                <IoChevronForwardCircleOutline
                  className="text-[#3B3BA5]"
                  size={30}
                />
              </motion.div>
              <div>
                <h3 className="font-medium text-md md:text-xl">{item.title}</h3>
                <p className="text-[#4C4C4C] text-[14px] md:text-[16px]">
                  {item.content}
                </p>
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export const ShareSection = ({ title, description }) => {
  if (typeof window === "undefined") return null; // ✅ avoid SSR issue

  const currentUrl = encodeURIComponent(window.location.href);
  const encodedText = encodeURIComponent(`${title} - ${description}`);

  const shareLinks = {
    email: `mailto:?subject=${encodedText}&body=${currentUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}%20${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodedText}`,
  };

  return (
    <div className="bg-[#102F9B] text-white p-1 w-full">
      <div className="flex items-center justify-center my-1 space-x-4">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Share on:
        </motion.p>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={shareLinks.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={EmailIcon} alt="email" width={30} height={30} />
        </motion.a>

        {/* Twitter */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={TwitterIcon} alt="twitter" width={30} height={30} />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={WhatsappIcon} alt="whatsapp" width={30} height={30} />
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={LinkedInIcon} alt="linkedin" width={30} height={30} />
        </motion.a>
      </div>
    </div>
  );
};

export const InfoWithFormSectionWhitePaper = ({
  heading,

  description1,
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
          </motion.h2>

          <p
            className="text-[#4C4C4C] text-base md:text-md mb-4"
            dangerouslySetInnerHTML={{ __html: description1 }}
          ></p>
        </div>

        {/* Right: Form */}
        <div id="hubspotFormWrapper" className="w-full md:w-1/2  mt-12" />
      </div>
      <div className="bg-black h-[1px] w-full"></div>
    </div>
  );
};
