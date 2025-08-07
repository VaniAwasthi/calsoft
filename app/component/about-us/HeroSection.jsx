import React from "react";
import heroImage from "../../assets/about-us/Hero_image.webp";
import BannerLayout from "../utilities/BannerLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";
import logo from "../../assets/about-us/logo.webp";

export default function HeroSection() {
  return (
    <section className="w-full">
      <BannerLayout
        image={heroImage}
        logo={logo}
        // title={"Calsoft’s Digital"}
        title2={"Technology-first partner"}
        description={
          "Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale."
        }
        knowMoreAboutUs={true}
        buttonText={"Get in touch"}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="md:text-5xl text-[20px] mt-2"
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
      />
    </section>
  );
}
