"use client";
import {
  CommitmentSection,
  HeroSecWebinar,
  RecommendedFor,
} from "../../../component/webinar/HeroSec";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import HeroBg from "../../../assets/caseStudies/whitepaperBg.webp";
import FeatureImage from "../../../assets/webinar/WebninarFeature.webp";
import React from "react";
import { ShareSection } from "../../../component/whitepaper/expanPage/WhitepaperReadMore";
import CommitmentIcon1 from "../../../assets/webinar/commitmentIcon1.svg";
import CommitmentIcon2 from "../../../assets/webinar/commitmentIcon2.svg";
import CommitmentIcon3 from "../../../assets/webinar/commitmentIcon3.svg";
import CommitmentIcon4 from "../../../assets/webinar/commitmentIcon4.svg";
import {
  SpeakersHostSection,
  BlogAndWebinarSection,
} from "../../../component/webinar/SpeakerRelated";
import RichaImg from "../../../assets/webinar/richa.svg";
import KundanImg from "../../../assets/webinar/kunal.svg";
import VinodImg from "../../../assets/webinar/binod.svg";
const page = () => {
  const cards = [
    {
      title: "Real-Time Data Streaming",
      desc: "This approach will save data streaming by enhancing and improving mechanisms and cost techniques.",
      icon: CommitmentIcon1,
    },
    {
      title: "Ursa Engine",
      desc: "How to achieve 25% cost savings on SGBs/SaaS workloads with seamless architecture & low-latency storage.",
      icon: CommitmentIcon2,
    },
    {
      title: "Benchmarking Results",
      desc: "Compare Streamline Cloud on Arm-based CSP workloads, benchmarking cost, integration, performance & deployment.",
      icon: CommitmentIcon3,
    },
    {
      title: "Key Takeaways & Next Steps",
      desc: "Address organization challenges, maximize efficiency, and access key insights and demo access.",
      icon: CommitmentIcon4,
    },
  ];
  const recommendedData = [
    {
      title: "CTOs & CIOs",
      description:
        "Who define data strategy and require scalable, cost-effective streaming solutions.",
    },
    {
      title: "Data Architects & Engineers",
      description:
        "Who design real-time data pipelines and need in-depth platform comparisons.",
    },
    {
      title: "DevOps & Cloud Engineers",
      description: "Who integrate and optimize cloud-native streaming systems.",
    },
    {
      title: "Business Leaders & Analysts",
      description:
        "Who leverage real-time data for strategic, data-driven decision making.",
    },
    {
      title: "Solution Architects",
      description:
        "Who evaluate multiple platforms to balance performance, cost, and integration.",
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
      {
        name: "Richa Thomas",
        title: "Director – Marketing, Calsoft Inc.",
        image: RichaImg,
        linkdin: "#",
      },
      {
        name: "Richa Thomas",
        title: "Director – Marketing, Calsoft Inc.",
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
      <HeroSecWebinar
        FeaturedImage={FeatureImage}
        title="Maximizing Cost Savings in
Data Streaming"
        description="Smarter Solutions to Optimize
Kafka Workloads"
        buttonLabel="Request Webinar Recording"
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={HeroBg}
      />
      <ShareSection />
      <CommitmentSection
        cards={cards}
        heading="Our Continuing Commitment"
        description=" We see CSR as a continuous responsibility. Calsonit will stay focused
          on initiatives that align with our values – supporting education,
          engaging communities, and creating meaningful local impact."
      />
      <RecommendedFor recommendedData={recommendedData} />
      <SpeakersHostSection people={people} />
      {/* <ReferenceBlogSection /> */}
      <BlogAndWebinarSection
        blogs={[
          {
            title:
              "Cut Kafka Costs by 95%: The Power of Leaderless Architecture and Lakehouse Storage",
            link: "#",
          },
          {
            title: "How We Run a 5 GB/s Kafka Workload for Just $50 per Hour",
            link: "#",
          },
        ]}
        webinars={[
          {
            title: "Is Gen AI the Future of QA and Software Testing?",
            link: "#",
          },
          {
            title: "Generative AI for the SDLC",
            link: "#",
          },
        ]}
      />
    </>
  );
};

export default page;
