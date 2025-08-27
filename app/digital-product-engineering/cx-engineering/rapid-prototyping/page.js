import React from "react";
import {
  Rapid,
  Smart,
  Start,
  Step,
  Use,
  What,
  Why,
} from "../../../component/Rapid/RapidWhyWhatUseSmartStartStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/CX/bgimg.webp";

export default function Page() {
  return (
    <>
      <Rapid />
      <Why />
      <What />
      <Use />
      <section className="banner_light1 big_btn2">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title={
            <>
              Drive conversions, adoption, and satisfaction with smarter,
              faster, context-aware experiences built for today’s users.
            </>
          }
          buttonText="Download Solution Report"
          buttonLink="#"
        />
      </section>
      <Smart />
      <Start />
      <Step />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?  "
          link="#"
        />
      </div>
    </>
  );
}
