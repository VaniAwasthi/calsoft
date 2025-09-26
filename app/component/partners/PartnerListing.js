"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Amazon from "../../assets/home/logo3.png";
import MicrosoftAzure from "../../assets/home/logo2.png";
import GoogleCloud from "../../assets/home/logo1.png";
import SnowFlakes from "../../assets/home/logo4.png";
import Octopai from "../../assets/home/logo5.png";
import Vmware from "../../assets/home/logo11.png";
import Citrix from "../../assets/home/logo12.png";
import MicrosoftCloud from "../../assets/home/logo13.png";
import Software from "../../assets/home/logo16.png";
import Pentaho from "../../assets/home/logo19.png";
import Intel from "../../assets/home/logo15.png";

const sections = [
  {
    title: "Cloud Partnerships",
    partners: [
      {
        name: "Amazon Web Services",
        logo: Amazon,
        desc: "Partnering with AWS to build secure, scalable cloud solutions that accelerate enterprise modernization.",
      },
      {
        name: "Microsoft Azure",
        logo: MicrosoftAzure,
        desc: "Delivering agile, cloud-native platforms with Azure to enable faster innovation and resilience.",
      },
      {
        name: "Google Cloud Partner",
        logo: GoogleCloud,
        desc: "Leveraging Google Cloud to modernize infrastructure and unlock AI-driven efficiency.",
      },
    ],
  },
  {
    title: "Data & Analytics Partnerships",
    partners: [
      {
        name: "Snowflake",
        logo: SnowFlakes,
        desc: "Using Snowflake to unify, scale, and analyze data for smarter decision-making.",
      },
      {
        name: "Octopai",
        logo: Octopai,
        desc: "Simplifying data lineage and governance with Octopai to improve accuracy and compliance.",
      },
    ],
  },
  {
    title: "Technology Partners",
    partners: [
      {
        name: "VMware",
        logo: Vmware,
        desc: "Streamlining virtualization and accelerating hybrid cloud adoption with VMware.",
      },
      {
        name: "Citrix",
        logo: Citrix,
        desc: "Enhancing secure digital workspaces with Citrix for improved user productivity and experience.",
      },
      {
        name: "Microsoft Gold Partner",
        logo: MicrosoftCloud,
        desc: "Delivering trusted enterprise IT, cloud, and app solutions as a Microsoft Gold Partner.",
      },
      {
        name: "Software",
        logo: Software,
        desc: "Enabling integration and digital transformation at scale with Software AG.",
      },
      {
        name: "Pentaho",
        logo: Pentaho,
        desc: "Enabling integration and digital transformation at scale with Software AG.",
      },
      {
        name: "Intel",
        logo: Intel,
        desc: "Leveraging Intel technologies to deliver high-performance, reliable, and scalable solutions.",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Partnerships() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {sections.map((section, idx) => {
        const isTwoCards = section.partners.length === 2;

        return (
          <div key={idx} className="mb-16">
            {/* Section Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-[38px] font-normal py-5 text-center"
            >
              <span className="font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
                {section.title}
              </span>
            </motion.h2>

            {/* Cards */}
            <div
              className={`grid gap-6 ${
                isTwoCards
                  ? "grid-cols-1 sm:grid-cols-2 justify-center max-w-3xl mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              }`}
            >
              {section.partners.map((partner, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {/* Logo */}
                  <div className="w-40 h-20 relative mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{partner.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
