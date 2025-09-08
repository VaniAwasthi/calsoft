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
          title="Top 5 Signs Your Tech Stack is Aging Out."
          buttonText="Read Blog"
          buttonLink="#"
        />
      </section>
      <Business />
      <How />
      <Steps />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?

                "
          link="#"
        />
      </div>
    </>
  );
};

export default Page;
