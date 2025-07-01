import {
  Containerization,
  HypervisorSec,
  MigrateSec,
  OpenSec,
  VirtualizationChallenge,
  VirtualizationSec,
  VirtualizationTab,
} from "../../../app/component/VirtualizationSolutions/Virtualization";
import React from "react";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import {
  BannerSection,
  ContactSecData,
} from "../../../app/component/utilities/InfraSectorSec";

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
            Design and deploy agile, scalable virtual
            <br className="hidden md:block" />
            environments <b>– We can help</b>
          </>
        }
        buttonText="Know More"
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
