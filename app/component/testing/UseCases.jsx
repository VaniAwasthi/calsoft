"use client";

import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import Image from "next/image";
import img from "../../assets/infra/UseCases.webp";
import { motion } from "framer-motion";

export default function UseCases({
  data = [
    {
      title: "ISVs",
      subTitle:
        "shifting legacy platforms to containerized microservices on AWS & Azure",
    },
    {
      title: "Healthcare & Life Sciences",
      subTitle: "migrating workloads with PHI/HIPAA compliance",
    },
    {
      title: "Manufacturing enterprises",
      subTitle: "moving ERPs to hybrid cloud",
    },
    {
      title: "FinTech companies",
      subTitle: "building real-time, cloud-native transaction platforms",
    },
    {
      title: "Media houses",
      subTitle: "migrating storage-heavy assets to cloud object storage",
    },
  ],
  title = "Use Cases",
  heading = "Where It Works Best",
  description = "Our Infrastructure Roadmap services have unlocked outcomes for:",
}) {
  return (
    <div id="use-cases" className="container">
      <div className="h-8" />
      <div className="mb-14">
        <h1 className="text-4xl font-bold mb-3 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent leading-16">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-5">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[#000000] text-3xl font-bold mb-4"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-[#000000] text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ButtonLayout
              text={"Request Use Cases"}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"whitespace-nowrap"}
            />
          </motion.div>
        </div>
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {data.map((ele, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative rounded-lg bg-[#BA0007] bg-[linear-gradient(0deg,rgba(186,0,7,1)_0%,rgba(46,48,146,1)_100%)] p-0.5`}
            >
              <div className="absolute -top-2 -left-2 bg-[#2E3092] rounded-lg w-full h-11/12 -z-10" />
              <div className="p-6 space-y-4 bg-white w-full h-full rounded-lg z-20">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8221 0C7.97716 0 0 7.98073 0 17.8221C0 27.667 7.97716 35.6442 17.8221 35.6442C27.6634 35.6442 35.6442 27.667 35.6442 17.8221C35.6442 7.98073 27.6634 0 17.8221 0ZM17.832 22.7624C15.867 24.7414 12.6509 24.6909 10.7491 22.6511L8.85709 20.622C8.05203 19.7585 8.09881 18.4061 8.96162 17.6003C9.82529 16.7938 11.1794 16.8405 11.9854 17.7047L12.3914 18.14C13.4492 19.2742 15.2377 19.3021 16.3304 18.2015L23.6998 10.7789C24.5325 9.94026 25.8874 9.93543 26.726 10.7682C27.5646 11.6008 27.5694 12.9557 26.7368 13.7943L17.832 22.7624Z"
                    fill="#2E3092"
                  />
                </svg>
                <p className="text-2xl font-bold">{ele.title}</p>
                <p className="text-lg">{ele.subTitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Image
          src={img}
          alt="image"
          className="w-full h-72 object-cover rounded-b-xl object-[center_25%]"
        />
      </div>
      <div className="h-10" />
    </div>
  );
}
