"use client"
import React from "react";
import {
  Business,
  Plugin,
  How,
  Step,
  Use,
  What,
  Why,
} from "../../../component/Plugin/PluginWhyWhatUseBusinessHowStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/connected/bgblog.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

function Page() {
  return (
    <>
      <Plugin />
      <Why />
      <What />
      <Use />
      <section className="banner_light padd_sec">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title="We help SaaS and plaform companies turn partner needs into production-ready plugin-secure, scalable, and instantly deployable."
          buttonText="Request Checklist"
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
          lightContent="Extend capabilities with secure and efficient plugins."
        />
      </div>
    </>
  );
}

export default Page;
