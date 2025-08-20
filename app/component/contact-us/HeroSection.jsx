import React from "react";
import BannerLayout from "../utilities/BannerLayout";
import heroImg from "@/app/assets/contact-us/Contact-HeroImg.webp";

export default function HeroSection() {
  return (
    <div>
      <BannerLayout
        image={heroImg}
        title2="Contact Us"
        description="Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale."
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="mt-4 text-lg leading-8 max-w-[90%] md:w-full"
        BgClassname="object-contain w-full h-full object-center"
      />
    </div>
  );
}
