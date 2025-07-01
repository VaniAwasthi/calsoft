import React from "react";
import {
  DrivenBanner,
  DrivenChallengeSec,
  PredictiveSec,
  PatternSec,
  InferentialSec,
  ModelSec,
} from "../../../component/AIDrivenPredictionAndInferences/AIDrivenPredictionAndInferences.jsx";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from "../../../component/utilities/ChallengeSolutionDataAi";

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
            Harness artificial intelligence to
            <br className="hidden md:block" />
            anticipate, adapt, and boost business
          </>
        }
        buttonText="Know More"
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
