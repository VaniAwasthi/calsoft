import {
  DevSec,
  Endpoint,
  IdentitySec,
  SecurityChallenge,
  SecurityTab,
  ServiceSec,
  SreSec,
  ZeroSec,
} from "../../component/security-services/SecurityChllengeInfo.jsx";
import {
  BannerSection,
  ContactSecData,
} from "../../component/utilities/InfraSectorSec.jsx";
import React from "react";
import BannerwithButtonBg from "../../assets/DigitalEngineering/security/knowMore.svg";
function page() {
  return (
    <>
      <SecurityTab />
      <SecurityChallenge />
      <Endpoint />
      <IdentitySec />
      <DevSec />
      <BannerSection
        backgroundImage={BannerwithButtonBg}
        title={
          <>
            Embed security into DevOps and architect{" "}
            <br className="hidden md:block" />
            Zero Trust environments <b>with Calsoft</b>
          </>
        }
        buttonText="Know More"
        buttonLink="#"
      />
      <ZeroSec />
      <ServiceSec />
      <SreSec />
      <ContactSecData
        BoldContent="Protect endpoints, identities, and networks with multi-layered security strategies"
        lightContent="Calsoft"
        link="#"
      />
    </>
  );
}

export default page;
