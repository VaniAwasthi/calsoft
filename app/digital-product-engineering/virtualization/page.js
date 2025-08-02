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
        title={
          <>
            Design and deploy agile, scalable virtual{" "}
            <br className="hidden md:block" />
            environments <b>– We can help</b>
          </>
        }
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
