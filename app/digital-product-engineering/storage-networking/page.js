"use client"
import {
  AiSec,
  DefinedSec,
  EdgeSec,
  Gateway,
  Hyperconverged,
  NetworkSec,
  SoftwareSec,
  StorageChallenge,
  StorageTab,
} from "../../component/storage-networking/StorageNetworking.jsx";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { showHubSpotForm } from "../../component/utilities/showHubSpotForm"; // import utility

function page() {
  return (
    <>
      <StorageTab />
      <StorageChallenge />
      <SoftwareSec />
      <DefinedSec />
      <Hyperconverged />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Optimize storage ops with 99.9% availability assurance."
        buttonText="Book a Meeting"
        buttonLink="#"
         onButtonClick={() => showHubSpotForm("book-a-meeting")}
      />
      <Gateway />
      <AiSec />
      <NetworkSec />
      <EdgeSec />
      <ContactSecData
        BoldContent="Modernize your storage and networking backbone for agility, resilience, and growth."
        lightContent="How? We can help"
        link="#"
      />
    </>
  );
}

export default page;
