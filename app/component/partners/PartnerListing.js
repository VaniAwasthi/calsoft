"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Amazon from "../../assets/home/logo3.png"
import MicrosoftAzure from "../../assets/home/logo2.png"
import GoogleCloud from "../../assets/home/logo1.png"
import SnowFlakes from "../../assets/home/logo4.png"
import Octopai from "../../assets/home/logo5.png"
import Vmware from "../../assets/home/logo11.png"
import Citrix from "../../assets/home/logo12.png"
import MicrosoftCloud from "../../assets/home/logo13.png"
import Software from "../../assets/home/logo16.png"
import Pentaho from "../../assets/home/logo19.png"
import Intel from "../../assets/home/logo15.png"
const sections = [
  {
    title: "Cloud Partnerships",
    partners: [
      { name: "Amazon Web Services", logo: Amazon },
      { name: "Microsoft Azure", logo: MicrosoftAzure },
      { name: "Google Cloud Partner", logo: GoogleCloud },
    ],
  },
  {
    title: "Data & Analytics Partnerships",
    partners: [
      { name: "Snowflake", logo: SnowFlakes },
      { name: "Octopai", logo: Octopai },
    ],
  },
  {
    title: "Technology Partners",
    partners: [
      { name: "VMware", logo: Vmware },
      { name: "Citrix", logo: Citrix },
      { name: "Microsoft Gold Partner", logo: MicrosoftCloud },
      { name: "Software", logo: Software },
      { name: "Pentaho", logo: Pentaho },
      { name: "Intel", logo: Intel },
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
                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum is a dummy or placeholder text commonly used in
                    graphic design, publishing, and web development.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>

   
  );
}
