"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import News_bg from "@/app/assets/insights/newspaper/newspaper_bg.webp";
import banner_img from "@/app/assets/insights/newspaper/banner.png";
import cardImage from "@/app/assets/insights/newspaper/card_img.webp";
import Link from "next/link";

export function HeroSection({ title, subTitle, desc }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  return (
    <div>
      <div className="relative">
        <Image
          src={News_bg}
          alt="Coding screen"
          height={800}
          width={1500}
          className="aspect-video"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 w-full h-full bg-[#00000077] flex flex-col justify-center items-center gap-5"
        >
          <div className="container grid grid-cols-2 gap-16">
            <div className="text-white space-y-5">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-[55px] font-bold"
              >
                {title}
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl"
              >
                {subTitle}
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-xl"
              >
                {desc}
              </motion.p>

              {/* Email Subscription */}
              {!subscribed ? (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="mt-10 md:mt-0 w-full md:w-[400px]"
                >
                  <div className="flex items-center relative bg-white rounded-full">
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Add your email*"
                      className="w-full text-[#333333] px-4 py-3 pr-10 bg-transparent rounded-full focus:outline-none"
                    />
                    <motion.button
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: false, amount: 0.3 }}
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
                  viewport={{ once: false, amount: 0.3 }}
                  className="font-semibold"
                >
                  You&apos;re subscribed
                </motion.p>
              )}
            </div>
            <div className="w-full h-96 overflow-hidden rounded-3xl">
              <Image
                src={banner_img}
                alt="newspaper"
                width={1600}
                height={900}
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
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
          className="object-cover"
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
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
    {
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
    {
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
    {
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
    {
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
    {
      imageSrc: cardImage,
      imageAlt: "card_img",
      badgeText: "Collect UI",
      heading: "A collection of daily UI challenges for your inspiration.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      linkHref: "#",
    },
  ],
}) {
  return (
    <div className="py-12">
      <div className="container grid grid-cols-2 gap-12">
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
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
    "December 2021",
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
            <div className="bg-[#2E3092] px-2 py-3 rounded-lg text-white flex items-center justify-center">
              {ele}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
