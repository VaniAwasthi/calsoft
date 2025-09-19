"use client";

import React from "react";
import Image from "next/image";
import img from "../../assets/infra/agility.webp";
import predict from "../../assets/infra/predictibility.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export default function Agility({
  id = "business-value",
  data = {
    leftSideContent: {
      title: "Beyond Tech- Real Business Outcomes.",
      subTitle: "Enterprises with a documented infrastructure roadmap have:",
      description:
        "Calsoft quantifies ROI for each roadmap milestone —from VM consolidation to cloud-native transitions —and ensures you get board-level buy-in with real data.",
    },
    rightSideContent: [
      {
        title: "35%",
        subTitle: "faster cloud migration cycles",
      },
      {
        title: "18-25%",
        subTitle: "reduction in OpEx via optimized resource usage",
      },
      {
        title: "2X",
        subTitle:
          "better incident response through standardized observability stack",
      },
      {
        title: "Faster",
        subTitle: "innovation cycles with modular, decoupled infra",
      },
    ],
  },
  bookMeetingData = {
    title: "Build scalable infra plans with 40% cost predictability.",
    buttonText: "Book a Meeting",
    onButtonClicked: () => showHubSpotForm("book-a-meeting"),
  },
  buttonText = "Download One Pager",
  onPagerButton = () => showHubSpotForm("infra-roadmap-one-pg"),
}) {
  return (
    <div id={id} className="container">
      <div className="h-6 lg:h-8" />
      <div className="w-full h-full relative rounded-xl overflow-hidden">
        <Image
          src={img}
          alt="agile work culture"
          className="w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(90deg,rgba(46,48,146,0.95)_0%,rgba(46,48,146,0.9)_35%,rgba(255,255,255,0.0)_100%)] flex justify-between items-center">
          <div className="w-[70%] h-full text-white">
            <div className="h-full flex gap-8 items-center justify-between">
              {/* Left content */}
              <div className="flex-1 p-10 h-full flex flex-col gap-6 justify-center">
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-2xl font-bold"
                >
                  {data.leftSideContent.title}
                </motion.p>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-xl font-semibold"
                >
                  {data.leftSideContent.subTitle}
                </motion.p>
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-lg"
                >
                  {data.leftSideContent.description}
                </motion.p>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <ButtonLayout
                    text={buttonText}
                    image={buttonImage}
                    hoverImage={buttonImage}
                    className={"w-fit mt-3"}
                    onClick={onPagerButton}
                  />
                </motion.div>
              </div>
              <div className="bg-white w-px h-[70%]" />
              {/* Right Content */}
              <div className="flex-1 flex gap-4 flex-col">
                {data.rightSideContent.map((ele, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <p className="text-4xl">{ele.title}</p>
                    <p className="text-xl font-light">{ele.subTitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-[35%]"></div>
          </div>
        </div>
      </div>
      {bookMeetingData && (
        <div className="w-full h-40 relative rounded-xl overflow-hidden mt-10">
          <Image
            src={predict}
            alt="book a meeting"
            className="w-full object-cover"
          />
          <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
            <div className="w-full h-full flex justify-between items-center gap-5 p-5">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-[20px] font-medium"
              >
                {bookMeetingData.title}
              </motion.p>
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg  font-medium px-6 py-2.5 bg-[#BA0007] rounded-lg"
                onClick={bookMeetingData.onButtonClicked}
              >
                {bookMeetingData.buttonText}
              </motion.button>
            </div>
          </div>
        </div>
      )}
      <div className="h-4 lg:h-8" />
    </div>
  );
}
