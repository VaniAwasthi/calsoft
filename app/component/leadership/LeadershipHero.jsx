import React from "react";
import heroImage from "../../assets/leadership/hero_image.webp";
import BannerLayout from "../utilities/BannerLayout";

export default function LeadershipHero() {
  return (
    <BannerLayout
      image={heroImage}
      title2={"Our Team"}
      description={
        "Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale."
      }
      titleTwoClass="text-[28px] md:text-5xl md:mt-4"
      descriptionClass="mt-4 text-lg leading-8 max-w-[90%] md:w-full"
      BgClassname="object-contain w-full h-full object-center"
    />
  );
}
