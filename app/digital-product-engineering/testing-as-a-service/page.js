"use client";

import {
  CalTIASec,
  FunctionalSec,
  LoadSec,
  ProductSec,
  QaoSec,
  TestSec,
  TestingChallenge,
  TestingTab,
} from "../../component/testingAs/TestingAs.jsx";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/testing/KnowMore.svg";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";

export default function Page() {
  return (
    <>
      <TestingTab />
      <TestingChallenge />
      <FunctionalSec />
      <CalTIASec />
      <LoadSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Achieve 90% test automation coverage with CalTIA."
        buttonText=" Book a Meeting"
        buttonLink="#"
        onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <TestSec />
      <QaoSec />
      <ProductSec />
      <ContactSecData
        BoldContent="Accelerate releases with automated, ML-driven, and QAOps-integrated testing strategies"
      />
    </>
  );
}
