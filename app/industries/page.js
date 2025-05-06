import React from "react";
import BannerLayout from "../component/utilities/BannerLayout";
import BackgroundImage from "../assets/home/Hero-sec.webp";
import ButtonImage from "../assets/home/buttonImg.webp";
import IndustriesBanner from "../component/utilities/IndustriesBanner";

const slide = {
  title: "Hi-Tech | Software & Product",
  title2: "Innovation in quick time",
  description: `Innovation is the highway for success in hi-tech. Create better software, improve processes, and gain competitive edge with your tech – here’s how.<br/><br/>
Calsoft helps you build your ‘ideal’ products/ software from planning to deployment at lower costs, higher quality, and faster go-to-market.`,
  buttonText: "What we do",
  image: BackgroundImage,
};

const page = () => {
  return (
    <>
      <IndustriesBanner
        image={slide.image}
        title={slide.title}
        title2={slide.title2}
        description={slide.description}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        titleOneClass="font-normal md:text-5xl text-[20px] mt-2 "
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="hidden md:block mt-4 text-[10px] leading-6 w-[200px] md:w-full"
        BgClassname="object-cover w-full h-full object-center"
        isCaseStudyButton={true}
      />
    </>
  );
};

export default page;
