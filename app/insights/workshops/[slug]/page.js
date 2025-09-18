"use client";
import {
  CaseStudySection,
  HeroSecWorkshop,
  RegressionSection,
} from "../../component/workshop/HeroSec";
import CommitmentIcon1 from "../../assets/webinar/commitmentIcon1.svg";
import CommitmentIcon2 from "../../assets/webinar/commitmentIcon2.svg";
import CommitmentIcon3 from "../../assets/webinar/commitmentIcon3.svg";
import CommitmentIcon4 from "../../assets/webinar/commitmentIcon4.svg";
import { CommitmentSection } from "../../component/webinar/HeroSec";
import {
  SpeakerSecWorkshop,
  WhyCalTIA,
} from "../../component/workshop/InfoSpeaker";
import RichaImg from "../../assets/webinar/richa.svg";
import KundanImg from "../../assets/webinar/kunal.svg";
import VinodImg from "../../assets/webinar/binod.svg";
const Page = () => {
  const cards = [
    {
      id: 1,
      desc: "Pain Points in regression testing that delay development",
      icon: CommitmentIcon1,
    },
    {
      id: 2,
      desc: "The shift to smart, AI-driven testing, where CalTIA comes in",
      icon: CommitmentIcon2,
    },
    {
      id: 3,
      desc: "Best practices to reduce test execution time and cost",
      icon: CommitmentIcon3,
    },
    {
      id: 4,
      desc: "Success story highlights of CalTIA: 40% faster test cycles, 60% less Regression Time",
      icon: CommitmentIcon4,
    },
  ];
  const recommendedData = [
    {
      title: "Qa Leaders",
      description: "To cut regression time without losing quality",
    },
    {
      title: "Engineering Managers",
      description: "To scale smart test automation",
    },
    {
      title: "Test Architects",
      description: "To Apply AI for test optimization",
    },
    {
      title: "DevOps Heads",
      description: "To speed up releases with precise test runs",
    },
    {
      title: "Product Owners",
      description: "To ship faster with more confidence",
    },
  ];
  const people = {
    speakers: [
      {
        name: "Vinod Borole",
        title: "Senior Architect – Cloud Competency, Calsoft Inc.",
        image: VinodImg,
        linkdin: "#",
      },
      {
        name: "Kundan Vyas",
        title: "Product Manager, StreamNative",
        image: KundanImg,
        linkdin: "#",
      },
    ],
    host: [
      {
        name: "Richa Thomas",
        title: "Director – Marketing, Calsoft Inc.",
        image: RichaImg,
        linkdin: "#",
      },
    ],
  };
  return (
    <>
      <HeroSecWorkshop />
      <RegressionSection />
      <CommitmentSection
        cards={cards}
        heading="What You’ll Gain from This Workshop"
      />
      <CaseStudySection recommendedData={recommendedData} />
      <WhyCalTIA />
      <SpeakerSecWorkshop people={people} />
    </>
  );
};

export default Page;
