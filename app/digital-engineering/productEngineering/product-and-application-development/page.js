"use client";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  BannerSection,
  ContactSecData,
} from "../../../component/utilities/InfraSectorSec.jsx";

import {
  AccelerateSec,
  DeploymentSec,
  DevelopmentSec,
  DevOpsSec,
  HeroSectionProductandApplicationDev,
  IdeationSec,
  ProdandAppChallengeSec,
  QualityengineeringSec,
} from "../../../component/product&applicationdev/HeroChallengeInfo.jsx";
const page = () => {
  return (
    <>
      <HeroSectionProductandApplicationDev />
      <ProdandAppChallengeSec />
      <IdeationSec />
      <DevelopmentSec />
      <QualityengineeringSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Let’s build great products and
            <br className="hidden md:block" />
            rapplications-<b>Talk to us</b>
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <DevOpsSec />
      <DeploymentSec />
      <AccelerateSec />
      <ContactSecData
        BoldContent="Engineer your next product idea
into a future-ready reality."
        lightContent="Get in touch"
        link="#"
      />
    </>
  );
};

export default page;
