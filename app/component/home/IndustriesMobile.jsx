"use client";

import { useState } from "react";
import Image from "next/image";
import Hitech from "../../assets/home/hitech.webp";
import Retail from "../../assets/home/Retail.webp";
import industry from "../../assets/home/Industryimg.webp";
import Manufacturing from "../../assets/home/Manufacturing.webp";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "High-tech",
    title: "Next-gen telecom & networking",
    description:
      "Enable future-ready networks with 5G, SDN/NFV, and AI-driven orchestration for seamless connectivity and service delivery.",
    image: Hitech,
  },
  {
    label: "Telecom",
    title: "Advanced Telecom Solutions",
    description:
      "Revolutionize telecom with cutting-edge technologies and AI-driven infrastructure modernization.",
    image: industry,
  },
  {
    label: "Retail",
    title: "Smart Retail Transformations",
    description:
      "Empower retail with AI, IoT, and personalized experiences for next-level customer engagement.",
    image: Retail,
  },
  {
    label: "Manufacturing",
    title: "Industry 4.0 Manufacturing",
    description:
      "Boost efficiency with automation, digital twins, and smart factory innovations.",
    image: Manufacturing,
  },
];

export const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState(0); // 0 = High-tech initially

  return (
    <section className="bg-[#021553] py-10 px-2 md:px-16 block md:hidden">
      <div className="flex flex-col  items-start gap-8">
        {/* Sidebar */}
        <h3 className="text-white text-sm mb-4">Industry</h3>
        <div className="flex flex-row  space-y-6 text-white text-sm">
          {/* Vertical Line and Tabs */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative flex justify-between flex-col space-y-8 border-l-8 border-[#2F35B5] "
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="relative text-left my-4"
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`py-2 px-4 text-sm ${
                    activeTab === index
                      ? "bg-[#4A4FBF] text-white font-medium rounded-tr-2xl rounded-br-2xl"
                      : "text-[#7C89C0]"
                  }`}
                >
                  {tab.label}
                </motion.span>
              </button>
            ))}
          </motion.div>
          {/* Main Content */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mx-2 flex flex-col "
          >
            {/* Image */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative w-full h-40 md:h-52 rounded-lg overflow-hidden"
            >
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-white mt-4"
            >
              <h2 className="text-[16px] font-semibold">
                {tabs[activeTab].title.split(" ")[0]}{" "}
                <span className="font-normal">
                  {tabs[activeTab].title.split(" ").slice(1).join(" ")}
                </span>
              </h2>
              <p className="mt-3 text-[#AEB8D0] text-[10px] max-w-lg">
                {tabs[activeTab].description}
              </p>
            </motion.div>

            {/* Button */}
            <div>
              <button className="mt-5 flex items-center gap-2 bg-[#FF3D3D] text-white px-5 py-1 rounded-full text-sm">
                Case Study
                <span className="text-lg">➔</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
