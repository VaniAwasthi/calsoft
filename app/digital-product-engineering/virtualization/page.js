import {
  Containerization,
  HypervisorSec,
  MigrateSec,
  OpenSec,
  VirtualizationChallenge,
  VirtualizationSec,
  VirtualizationTab,
} from "../../component/VirtualizationSolutions/Virtualization.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/virtualisation/KnowMorw.svg";
// data
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";

function page() {
  return (
    <>
      <VirtualizationTab />
      <VirtualizationChallenge />
      <VirtualizationSec />
      <Containerization />
      <HypervisorSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title="Lower infra footprint 30 % via virtualization efficiency."
        buttonText="Book a Meeting"
        buttonLink="#"
      />
      <MigrateSec />
      <OpenSec />
      <ContactSecData
        BoldContent="Virtualize, optimize, and scale your infrastructure with confidence"
        lightContent="Talk to us"
        link="#"
      />
    </>
  );
}

export default page;
