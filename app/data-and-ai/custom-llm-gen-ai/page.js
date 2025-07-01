import {
  AnalyticsSec,
  CustomBanner,
  EnterpriseSec,
  LlmSec,
  SystemSec,
} from "@/app/component/customLlmGenAi/CustomLlmGgenAi";
import { BannerSection } from "../../../app/component/utilities/InfraSectorSec";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../../app/component/utilities/ChallengeSolutionDataAi";

function page() {
  return (
    <>
      <CustomBanner />
      <AnalyticsSec />
      <LlmSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Customize, ground, and scale
            <br className="hidden md:block" />
            enterprise-ready language models
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <EnterpriseSec />
      <SystemSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
