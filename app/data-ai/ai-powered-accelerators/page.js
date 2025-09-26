"use client";
import {
  AiBanner,
  AiChallengeSec,
  CalPsrSec,
  CalTiaSec,
  CalsoftSec,
  ECalsoftSec,
} from "../../component/aIPoweredAcceleratorsServices/AIPoweredAccelerators.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/Data-Ai/ai-accelerate/KnowMore.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

export default function Page() {
  return (
    <>
      <AiBanner />
      <AiChallengeSec />
      <CalTiaSec />
      <CalPsrSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Accelerate transformation by 40% using Calsoft IPs.
            <br className="hidden md:block" />
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <ECalsoftSec />
      <CalsoftSec />
      <ContactSecDataAi
        lightContent="Power transformation through Calsoft’s AI-driven accelerators."
      />
    </>
  );
}
