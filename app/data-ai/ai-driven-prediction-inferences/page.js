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

function page() {
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
      />
      <InferentialSec />
      <ModelSec />
      <ContactSecDataAi
        BoldContent="Let’s talk!"
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
}

export default page;
