"use client";

import React from "react";
import ButtonLayout from "../../component/utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import DevopsSREMatters from "./DevopsSREMatters";
import { motion } from "framer-motion";

export default function WhyItMatters({
  title = "Don’t Build Blind. Architect to Win.",
  desc = "75% of digital product failures stem from poor early decisions—wrong tech stack, unclear user flows, or over-engineered features. Calsoft helps you cut through ambiguity and shape a scalable, cloud-first, cost-efficient architecture that aligns with your business goals from Day 1.",
  desc2,
  buttonText = "Download Case Study",
  ButtonComponent = <></>,
  MainComponenent = DevopsSREMatters,
  contentClass = "",
  mainComponenentClass = "",
  gridClass = "",
  id=""
}) {
  return (
    <>
      <div className="container">
        <div className="h-12" id={id} />
        <div
          className={`flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-16 items-start ${gridClass}`}
        >
          {/* Left Content */}
          <div className={`space-y-10 ${contentClass}`}>
            {/* <div className={`space-y-10`}> */}
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent"
            >
              Why It Matters
            </motion.p>
            <div className="space-y-6">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl font-semibold"
              >
                {title}
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-6 text-black text-lg leading-relaxed"
              >
                <p className="font-light">{desc}</p>
                {desc2 && <p>{desc2}</p>}
              </motion.div>
            </div>
            {/* bug: When wrapped into motion.div the button is not visible */}
            <div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-9"
            >
              <ButtonLayout
                text={buttonText}
                image={buttonImage}
                hoverImage={buttonImage}
                className={"w-fit shadow-2xl"}
              />
            </div>
          </div>
          <div
            className={`sm:flex hidden justify-center items-center ${mainComponenentClass}`}
          >
            <MainComponenent />
          </div>
        </div>
        <div className="h-12" />
      </div>
    </>
  );
}
