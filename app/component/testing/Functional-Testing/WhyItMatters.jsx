"use client";

import React from "react";
import ButtonLayout from "../../../component/utilities/ButtonLayout";
import buttonImage from "../../../assets/home/buttonImg.webp";
import FunctionalTestingMatter from "../Functional-Testing-Matter";
import { motion } from "framer-motion";
import { showHubSpotForm } from "../../utilities/showHubSpotForm";

export default function WhyItMatters({
  title = "Cloud Migration Mistakes You Can’t Afford",
  desc = "Many enterprises begin cloud migration with limited visibility into interdependencies, business impact, or future scalability. This results in:",
  desc2 = "Calsoft brings a structured, zero-disruption approach to migration, tuned for enterprise-scale complexity and post-migration optimization.",
  buttonText = "Get in touch",
  Component = FunctionalTestingMatter,
  contentWidth = "",
  buttonClicked=()=>showHubSpotForm("get-in-touch")
}) {
  return (
    <div id="why-it-matters" className="container">
      <div className="h-8" />
      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-x-16 gap-y-10 lg:items-start">
        {/* Left Content */}
        <div className={`space-y-10 ${contentWidth}`}>
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
              <p>{desc2}</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-9"
          >
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"w-fit shadow-2xl"}
              onClick={buttonClicked}
            />
          </motion.div>
        </div>

        <Component />
      </div>
      <div className="h-8" />
    </div>
  );
}
