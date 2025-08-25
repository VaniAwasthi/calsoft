import React from "react";
import BannerLayout from "../utilities/BannerLayout";
import heroImage from "../../assets/infra/Hero_bg.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import Submenu from "../utilities/Submenu";

export default function HeroSection({
  navItems,
  activeTab,setActiveTab,
  title = "Technology-first partner",
  description = "Accelerate cloud adoption through risk-aware, business-aligned migration strategies — backed by automation, security, and predictable ROI.",
  buttonText = "Access Readiness",
}) {
  return (
    <>
      <BannerLayout
        image={heroImage}
        // title={"Calsoft’s Digital"}
        title2={title}
        description={description}
        buttonText={buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="md:text-5xl text-[20px] mt-2"
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="hidden md:block mt-4 text-lg leading-8 w-[200px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
      />
        <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
}
