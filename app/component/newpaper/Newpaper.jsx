"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import News_bg from "@/app/assets/insights/newspaper/newspaper_bg.webp";
import banner_img from "@/app/assets/insights/newspaper/banner.png";
import cardImage from "@/app/assets/insights/newspaper/card_img.webp";
import Link from "next/link";

export function HeroSection({
  title,
  subTitle,
  desc,
  rightImage = banner_img,
  isInput = true,
  bgmainClass = "h-[700px] ",
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

  return (
    <div className={`relative w-full ${bgmainClass}`}>
      {/* Full width background image */}
      <Image
        src={News_bg}
        alt="Coding screen"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay with Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 bg-[#00000077] flex flex-col justify-center items-center"
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">
          {/* Left side text */}
          <div className="text-white space-y-5">
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[55px] font-bold"
            >
              {title}
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl"
            >
              {subTitle}
            </motion.p>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl"
            >
              {desc}
            </motion.p>

            {/* Email Subscription */}
            {isInput && (
              <>
                {!subscribed ? (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 w-full md:w-[400px]"
                  >
                    <div className="flex items-center relative bg-white rounded-full">
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Add your email*"
                        className="w-full text-[#333333] px-4 py-3 pr-28 bg-transparent rounded-full focus:outline-none"
                      />
                      <motion.button
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        onClick={() => {
                          if (email.length > 0) {
                            if (isEmail(email)) setSubscribed(true);
                            else
                              toast.error("Email is invalid", {
                                duration: 3000,
                              });
                          } else
                            toast.error("Email field is empty", {
                              duration: 3000,
                            });
                        }}
                        className="bg-[#BA0007] text-white rounded-full px-4 flex items-center gap-2 py-3 absolute right-0"
                      >
                        Subscribe
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-semibold"
                  >
                    You&apos;re subscribed
                  </motion.p>
                )}
              </>
            )}
          </div>

          {/* Right side image */}
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-3xl relative">
            <Image
              src={rightImage}
              alt="newspaper"
              fill
              className="object-cover object-[center_45%]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductDesignCard({
  imageSrc,
  imageAlt,
  badgeText,
  heading,
  description,
  linkHref,
}) {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Image Grid */}
      <div className="w-full aspect-video relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="aspect-video"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Badge */}
        <div className="inline-block text-white px-4 py-2 rounded text-sm font-medium mb-4 bg-[#2E3092]">
          {badgeText}
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl font-bold leading-tight mb-4 text-[#2E3092]">
          {heading}
        </h2>

        {/* Body Text */}
        <p className="text-black text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Read More Link */}
        <Link
          href={linkHref}
          className="flex items-center font-medium text-base hover:underline cursor-pointer gap-5 text-[#2E3092]"
          onClick={() => {}}
        >
          <span>Read more</span>
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.96028 6.14283C7.17996 6.3625 7.17996 6.71861 6.96028 6.93828L1.22541 12.6731C1.00573 12.8928 0.649631 12.8928 0.429956 12.6731L0.164756 12.408C-0.0549187 12.1883 -0.0549187 11.8321 0.164756 11.6125L5.23671 6.54055L0.164756 1.46861C-0.0549186 1.24893 -0.0549186 0.892829 0.164756 0.673155L0.429956 0.407955C0.649631 0.18828 1.00573 0.18828 1.22541 0.407955L6.96028 6.14283Z"
              fill="#2E3092"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function Newspapers({
  data = [
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/09/Hyphen-Newsletter-Header-july.jpg",
      imageAlt: "card_img",
      badgeText: "July 2025",
      heading: "Monthly Newsletter July 2025",
      description:
        "Hey there, Welcome to the monthly edition of the Hyphen Newsletter! From bots that don’t break, to QA that’s lightning-fast,...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/06/Hyphen-Newsletter-Header-June.jpg",
      imageAlt: "card_img",
      badgeText: "June 2025",
      heading: "Monthly Newsletter June 2025",
      description:
        "Welcome to Hyphen, Calsoft’s monthly dive into the future of tech. See how Calsoft is helping enterprises migrate faster, test...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/05/Hyphen-Newsletter-Header-August-2.png",
      imageAlt: "card_img",
      badgeText: "May 2025",
      heading: "Monthly Newsletter May 2025",
      description:
        "Welcome to Hyphen monthly Newsletter from Calsoft, we have got a lot to share this month: Let’s dive into what’s...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/04/Hyphen-Newsletter-Header-march-2025.png",
      imageAlt: "card_img",
      badgeText: "March 2025",
      heading: "Monthly Newsletter March 2025",
      description:
        "In Focus: CalTIA™: Stay updated with the latest in AI, IoT, and tech innovation! This edition covers expert insights, industry...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/02/Hyphen-Newsletter-Header-February-2025.png",
      imageAlt: "card_img",
      badgeText: "February 2025",
      heading: "Monthly Newsletter February 2025",
      description:
        "In Focus: CalTIA™: Transform Your Testing Strategy with AI-Powered Insights , Modernize Your Infrastructure with VMware Migration, Generative AI in...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2025/01/Hyphen-Newsletter-Header-December.jpg",
      imageAlt: "card_img",
      badgeText: "December 2024",
      heading: "Monthly Newsletter December 2024",
      description:
        "In Focus: Maximize Your Cloud-Native Streaming Capabilities, Transform your IT Infrastructure with Seamless Migration, SOAR in Cybersecurity, and more. Maximize...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2024/11/Monthly-Newsletter-November-2024.png",
      imageAlt: "card_img",
      badgeText: "November 2024",
      heading: "Monthly Newsletter November 2024",
      description:
        "In Focus: Calsoft at NVIDIA AI Summit India, Advanced Threat Protection Brochure, Calsoft’s ServiceNow Expertise, and more...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2024/11/Monthly-Newsletter-October-2024.png",
      imageAlt: "card_img",
      badgeText: "October 2024",
      heading: "Monthly Newsletter October 2024",
      description:
        "In Focus: Calsoft Partners with SmartHub.ai, Panel Discussion, Calsoft Exhibiting at NVIDIA AI Summit 2024, and more. Calsoft Partners with...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2024/09/Hyphen-Newsletter-Header-September.jpg",
      imageAlt: "card_img",
      badgeText: "September 2024",
      heading: "Monthly Newsletter September 2024",
      description:
        "In Focus: Calsoft Featured in Times of India and NVIDIA Blog, L&D Leadership Summit, New Delhi and More. Calsoft Tackles...",
      linkHref: "#",
    },
    {
      imageSrc:
        "https://www.calsoftinc.com/wp-content/uploads/2024/08/Hyphen-Newsletter-Header-August-1.png",
      imageAlt: "card_img",
      badgeText: "August 2024",
      heading: "Monthly Newsletter August 2024",
      description:
        "In Focus: Celebrating 26 Years of Calsoft, Calsoft Wins the Best Employer Award, Partnership with LlamaIndex, and More...",
      linkHref: "#",
    },
  ],
}) {
  return (
    <div className="py-12">
      <div className="container grid grid-cols-2 gap-6 2xl:gap-10">
        {data.map((ele, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 * idx }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProductDesignCard
              heading={ele.heading}
              description={ele.description}
              badgeText={ele.badgeText}
              imageAlt={ele.imageAlt}
              imageSrc={ele.imageSrc}
              linkHref={ele.linkHref}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PreviousNewspaper({
  data = [
    "January 2021",
    "Febuary 2021",
    "March 2021",
    "April 2021",
    "May 2021",
    "June 2021",
    "July 2021",
    "August 2021",
    "September 2021",
    "October 2021",
    "November 2021",
    "December 2021",
    "January 2022",
    "Febuary 2022",
    "March 2022",
    "April 2022",
    "May 2022",
    "June 2022",
  ],
}) {
  return (
    <div className="pt-4 pb-12">
      <div className="container space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent w-full text-center"
        >
          Previous Newsletter Release
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-6 gap-4"
        >
          {data.map((ele) => (
            <Link
              href={`/insights/newspaper/monthly-newsletter-${ele
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="bg-[#2E3092] px-2 py-3 rounded-lg text-white flex items-center justify-center"
            >
              {ele}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
