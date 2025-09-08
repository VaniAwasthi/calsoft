"use client"
import React from "react";
import {
  Business,
  Future,
  How,
  Step,
  Use,
  What,
  Why,
} from "../../../component/Connected/FutureWhyWhatUseBusinessHowStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/connected/bgblog.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  return (
    <>
      <Future />
      <Why />
      <What />
      <Use />
      <section className="banner_light padd_sec">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title="Integrate apps 2x faster with open ecosystems."
          buttonText="Book a meeting"
          onButtonClick={()=>showHubSpotForm("book-a-meeting")}
        />
      </section>
      <Business />
      <How />
      <Step />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Connect ecosystems to unlock seamless collaboration."
        
        />
      </div>
    </>
  );
};
export default Page;
