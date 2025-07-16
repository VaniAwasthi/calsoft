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
        title={
          <>
            Talk to our storage and networking{" "}
            <br className="hidden md:block" />
            experts - <b>Schedule a consultation</b>
          </>
        }
        buttonText="Know More"
        buttonLink="#"
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
