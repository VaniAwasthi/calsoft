"use client";
import {
  AnalyticsSec,
  CustomBanner,
  EnterpriseSec,
  LlmSec,
  RagSec,
  SystemSec,
} from "../../component/customLlmGenAi/CustomLlmGgenAi.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/Data-Ai/customllm/Knowmore.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

export default function Page() {
  return (
    <>
      <CustomBanner />
      <AnalyticsSec />
      <LlmSec />
      <RagSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Deploy fine-tuned LLMs with 90% accuracy gains.
            <br className="hidden md:block px-1" />
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <EnterpriseSec />
      <SystemSec />
      <ContactSecDataAi
        lightContent="Move beyond generic AI. Deploy domain-aware, explainable systems with Calsoft"
      />
    </>
  );
}
