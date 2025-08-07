"use client";
import React from "react";
import BannerLayout from "../component/utilities/BannerLayout";
import { Core, Deep, Digital, Ecosystem, Stages, Testing } from "../component/digitalproductengineering/DigitalStagesCoreEcosystemTestingDeep";
import { ContactSecDataAi } from "../component/utilities/ChallengeSolutionDataAi";

const page = () => {
  return (
    <>
      {/* <BannerLayout /> */}
      <Digital />
      <Stages />
      <Core />
      <Ecosystem />
      <Testing />
      <Deep />

      <ContactSecDataAi
        lightContent="Our services speak "
        BoldContent="for themselves, but we can talk too!”"
        link="#"
      />

    </>
  );
};

export default page;
