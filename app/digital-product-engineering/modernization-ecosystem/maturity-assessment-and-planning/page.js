"use client"
import React from "react";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import {
  Business,
  DoUs,
  Howstart,
  Leftcontent,
  Matters,
  Maturity,
  Sprint,
  Use,
} from "../../../component/MaturityAssessment/MaturityLeftcontentDoUse";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import modernizationImg from "../../../assets/DigitalEngineering/maturity/leftimg.webp";
import { FooterBg } from "../../../component/utilities/DoCases";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import { showHubSpotForm } from "@/app/component/utilities/showHubSpotForm";

function Page() {
  return (
    <>
      <Maturity />
      <Matters />
      <DoUs />
      <Use />
      <section className="banner_light">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title={
            <>
              Reduce tech debt by 45% with maturity mapping.
            </>
          }
          buttonText="Book a Meeting"
          buttonLink="#"
          onButtonClick={()=>showHubSpotForm("book-a-meeting")}
        />
      </section>
      <Business />
      <Howstart />
      <Sprint />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Assess maturity and plan transformation with confidence."
              
        />
      </div>
    </>
  );
}

export default Page;
