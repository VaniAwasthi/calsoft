"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/infra/FirstStep.webp";
import Guesswork from "./GuessWork";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp"
import { showHubSpotForm } from "../utilities/showHubSpotForm";
export default function FirstStep({
  headerContent = {
    title1: "Take the First Step –",
    title2: "Without the Guesswork",
    description:
      "We don’t ask you to commit to a massive overhaul. Instead, we guide you step-by-step — from discovery to deployment — with zero ambiguity and measurable outcomes.",
  },
  Component = Guesswork,
  guessworkData,
  output,
  buttonText="Start Today",
  onButtonClick=()=>showHubSpotForm("start-today")
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
          className="space-y-8 flex-1"
        >
          <div className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-8 leading-[2.5rem] flex flex-col">
            <span>{headerContent.title1}</span>
            <span>{headerContent.title2}</span>
          </div>
          <p className="text-lg">{headerContent.description}</p>
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
      <Component stepsData={guessworkData} output={output} />
       <div className="md:flex justify-center mb-12 -mt-[120px] hidden">
                <div className="w-1/2 ml-auto">
                  {buttonText && (
                    <div className="text-center mt-10">
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                      >
                        <ButtonLayout
                          // link={link}
                          text={buttonText}
                          image={ButtonImage}
                          hoverImage={ButtonImage}
                          onClick={onButtonClick}
                        />
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
    </div>
  );
}
