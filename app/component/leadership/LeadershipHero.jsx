import React from "react";
import heroImage from "../../assets/leadership/hero_image.webp";
import img from "@/app/assets/leadership/L&D.png";
import BannerLayout from "../utilities/BannerLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "@/app/assets/home/buttonImg.webp";

export default function LeadershipHero({
  title = "Our focus is simple -\ncontinous learning, continuous growth. From technical certifications to technical programs, we prepare teams for tomorrow",
  designation = "Head of L&D, Calsoft Inc.",
  buttonText = "Explore L&D",
}) {
  return (
    <>
      {/* <BannerLayout
        height="h-[30.5rem]"
        image={heroImage}
        title2={"Our Team"}
        description={
          "Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale."
        }
        titleTwoClass="text-[28px] md:text-5xl md:mt-1"
        descriptionClass="mt-4 text-lg leading-8 max-w-[90%] md:w-full"
        BgClassname="object-contain w-full h-full object-center"
      /> */}
      <div>
        <div className="relative">
          <Image
            src={img}
            alt="leadership hero section"
            height={900}
            className="min-h-screen w-full object-[right_80%] md:object-right object-cover"
          />
          <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <div className="w-full h-full flex justify-between items-center container">
              <div className="flex-1 space-y-8">
                <motion.h1 className="whitespace-pre-line text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {title}
                </motion.h1>
                <motion.p className="text-white text-lg lg:text-xl">
                  {designation}
                </motion.p>
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"whitespace-nowrap"}
                />
              </div>
              <div className="flex-1 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
