import React from "react";
import CSRBanner from "../component/crs/CsrBanner";
import {
  CaresBannerSec,
  CSRFocusSection,
  ScholarshipSection,
} from "../component/crs/CRSFocusSec";
import CsrImg1 from "../assets/csr/CSRImg1.webp";
import CsrImg2 from "../assets/csr/CSRImg2.webp";
import CommitmentIcon1 from "../assets/csr/IconCommt-1.svg";
import CommitmentIcon2 from "../assets/csr/IconCommt-2.svg";
import CommitmentIcon3 from "../assets/csr/IconCommt-3.svg";
import { CommitmentSection } from "../component/webinar/HeroSec";

const Page = () => {
  const cards = [
    {
      title: "Environmental",
      desc: "We promote sustainability and environmental awareness across our activities.",
      icon: CommitmentIcon1,
    },
    {
      title: "Social",
      desc: "We value diversity, inclusiveness, and equal opportunity in all our engagements.",
      icon: CommitmentIcon2,
    },
    {
      title: "Governance",
      desc: "We follow ethical, transparent, and responsible practices in all operations.",
      icon: CommitmentIcon3,
    },
  ];
  return (
    <>
      <CSRBanner />
      <CSRFocusSection />
      <CaresBannerSec />
      <ScholarshipSection
        bgColor="#FBFBF2"
        isRight={true}
        title="Calsoft Scholarship
Program (CSP)"
        description="As part of our commitment to academic excellence, Calsoft has endowed a Chair Professorship at the Indian Institute of Technology (IIT) Bombay."
        imageSrc={CsrImg1}
        imageAlt="Calsoft Scholarship Group Photo"
        pointsTitle1="Reach and impact"
        pointsTitle2="How it helps"
        reachPoints={[
          "400+ students supported to date",
          "Focused on economically disadvantaged backgrounds",
          "Enables students to complete technical education",
        ]}
        helpPoints={[
          "Covers essential academic expenses",
          "Supports long-term learning continuity",
          "Encourages skilled graduates ready for the tech workforce",
        ]}
      />
      <ScholarshipSection
        bgColor="#F8F9FA"
        isRight={false}
        title="IIT Bombay chair professorship"
        description="As part of our commitment to academic excellence, Calsoft has endowed a Chair Professorship at the Indian Institute of Technology (IIT) Bombay."
        imageSrc={CsrImg2}
        imageAlt="Calsoft Scholarship Group Photo"
        pointsTitle1="About the initiative"
        pointsTitle2="Objective"
        reachPoints={[
          "Endowed in the Department of Computer Science at IIT Bombay",
          "Focused on the fields of Artificial Intelligence and Machine Learning",
          "Supports advanced research and academic leadership",
        ]}
        helpPoints={[
          "Promote innovation in core technology domains",
          "Enable knowledge exchange between academia and industry",
          "Strengthen India’s research capabilities in emerging tech",
        ]}
      />
      <CommitmentSection
        gridStyle="grid-cols-3"
        cards={cards}
        heading="Our Continuing Commitment"
        description=" We see CSR as a continuous responsibility. Calsonit will stay focused
                on initiatives that align with our values – supporting education,
                engaging communities, and creating meaningful local impact."
      />
    </>
  );
};

export default Page;
