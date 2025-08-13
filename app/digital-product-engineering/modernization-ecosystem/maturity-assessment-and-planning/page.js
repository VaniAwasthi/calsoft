import React from "react";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";
import {
  Business,
  DoUs,
  Howstart,
  Leftcontent,
  Matters,
  Maturity,
  Sprint,
  Use,
} from "../../../component/MaturityAssessment/MaturityLeftcontentDoUse";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import modernizationImg from "../../../assets/DigitalEngineering/maturity/leftimg.webp";
import { FooterBg } from "../../../component/utilities/DoCases";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";

function Page() {
  return (
    <>
      <Maturity />
      <Matters />
      <DoUs />
      <Use />
      <section className="banner_light">
        <BannerSection
          backgroundImage={BannerwithButtonBg}
          title={
            <>
              Calsoft’s Modernization Maturity Assessment helps you pinpoint
              gaps across your tech ecosystem
            </>
          }
          buttonText="Know More"
          buttonLink="#"
        />
      </section>
      <Business />
      <Howstart />
      <Sprint />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?
                "
          link="#"
        />
      </div>
    </>
  );
}

export default Page;
