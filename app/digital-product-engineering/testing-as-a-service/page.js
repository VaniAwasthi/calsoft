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

import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/testing/KnowMore.svg";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
function page() {
  return (
    <>
      <TestingTab />
      <TestingChallenge />
      <FunctionalSec />
      <CalTIASec />
      <LoadSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Want full continuous and automated
            <br className="hidden md:block" />
            testing control? <b>We can do it</b>
          </>
        }
        buttonText=" Book a Meeting"
        buttonLink="#"
      />
      <TestSec />
      <QaoSec />
      <ProductSec />
      <ContactSecData
        BoldContent="Accelerate releases with automated, ML-driven, and QAOps-integrated testing strategies"
        link="#"
      />
    </>
  );
}

export default page;
