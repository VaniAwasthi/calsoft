"use client"
import React from "react";
import {
  Business,
  Future,
  How,
  Steps,
  Use,
  What,
  Why,
} from "../../../component/FutureReadiness/FutureWhyWhatUseBusinessHowSteps";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { FooterBg } from "../../../component/utilities/DoCases";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

const Page = () => {
  return (
    <>
      <Future />
      <Why />
      <What />
      <Use />
      <section className="banner_light">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title="Enable 100% cloud-native readiness for tomorrow."
          buttonText="Book a Meeting"
          buttonLink="#"
          onButtonClick={()=>showHubSpotForm("book-a-meeting")}
        />
      </section>
      <Business />
      <How />
      <Steps />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Prepare systems and teams for future readiness."
          link="#"
        />
      </div>
    </>
  );
};

export default Page;
