"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/infra/FirstStep.webp";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export default function WhereItFits({
  headerContent = {
    title1: "Where It Fits",
    description: "When containers become a necessity",
  },
  buttonText = "Dowload Usecase",
  onButtonClick = () => showHubSpotForm("start-today"),
  data = [
    "You're breaking down monoliths into microservices or modular platforms",
    "Your releases are weekly or daily, requiring reliable rollback and consistency",
    "You’re managing multi-cloud, hybrid, or edge environments",
    "You need zero-downtime deployments and versioned rollouts",
    "Developers need sandboxed, replicable environments across teams",
  ],
}) {
  return (
    <div id="how-to-start" className="container">
      <div className="h-8" />
      <div className="grid lg:grid-cols-2 gap-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6 flex-1"
        >
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-2 flex flex-col">
            <span>{headerContent.title1}</span>
          </div>
          <p className="text-lg">{headerContent.description}</p>
          <ol className="space-y-1">
            {data.map((ele) => (
              <li className="list-disc ml-5 text-lg">{ele}</li>
            ))}
          </ol>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ButtonLayout
              // link={link}
              text={buttonText}
              image={ButtonImage}
              hoverImage={ButtonImage}
              onClick={onButtonClick}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={img}
            alt="FirstStep"
            className="w-full h-72 flex-1 rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
