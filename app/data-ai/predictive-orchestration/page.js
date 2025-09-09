"use client";
import React from "react";
import {
  DrivenBanner,
  DrivenChallengeSec,
  PredictiveSec,
  PatternSec,
  InferentialSec,
  ModelSec,
} from "../../component/AIDrivenPredictionAndInferences/AIDrivenPredictionAndInferences.jsx";
import { BannerSection } from "../../component/utilities/InfraSectorSec.jsx";
import BannerwithButtonBg from "../../assets/Data-Ai/dataDriven/KnowMore.webp";
import { ContactSecDataAi } from "../../component/utilities/ChallengeSolutionDataAi.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

export default function Page() {
  return (
    <>
      <DrivenBanner />
      <DrivenChallengeSec />
      <PredictiveSec />
      <PatternSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Harness artificial intelligence to {""}
            <br className="hidden md:block" />
            anticipate, adapt, and boost business
          </>
        }
        buttonText="Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <InferentialSec />
      <ModelSec />
      <ContactSecDataAi
        BoldContent=""
        lightContent="Let us help guide predictive insights into action with productive outcomes"
        link="#"
      />
    </>
  );
}
