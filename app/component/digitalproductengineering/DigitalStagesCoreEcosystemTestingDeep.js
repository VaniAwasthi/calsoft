"use client";
import React, { useState } from "react";
import Submenu from "../utilities/Submenu";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import BackgroundImage from "../../assets/digital/banner.webp";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Imagethree, StepsSection } from "../utilities/Shape";
import image1 from "../../assets/digital/image1.webp";
import image2 from "../../assets/digital/image2.webp";
import image3 from "../../assets/digital/image3.webp";
import image4 from "../../assets/digital/image4.webp";
import image5 from "../../assets/digital/image5.webp";
import image6 from "../../assets/digital/image6.webp";
import image7 from "../../assets/digital/image7.webp";
import image8 from "../../assets/digital/image8.webp";
import image9 from "../../assets/digital/image9.webp";
import deep from "../../assets/digital/deep.webp";
import { showHubSpotForm } from "../utilities/showHubSpotForm";
import { useRouter } from "next/navigation";

export const Digital = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Calsoft’s Digital Product Engineering",

    description: `Full-stack digital product engineering, modernization, cloud, and QA services for software-driven enterprises.`,
    buttonText: "Get in touch",
    image: BackgroundImage,
  };
  const navItems = [
    "Journey",
    "Expertise",
    "Industries",
    "Latest at Calsoft",
    "Partners",
    "Services",
    "Case Studies",
  ];

  return (
    <>
      <div className="custom_banner">
        <BannerWithRightSec
          heroBg={BackgroundImage}
          title={slide.title}
          description={slide.description}
          rightImage={slide.rightImage}
          buttonText={slide.buttonText}
          buttonImage={ButtonImage}
          hoverImage={ButtonImage}
          rightSec={false}
          buttonWidth="!w-[250px]"
        onButtonClick={() => showHubSpotForm("get-in-touch")}
        />
      </div>
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const Stages = () => {
  const stepsData = [
    {
      title: "Concept & architect",
      description: "Validate ideas and define scalable, secure architectures.",
    },
    {
      title: "Build & integrate",
      description: "Develop full-stack apps and embed partner integrations.",
    },
    {
      title: "Modernize & migrate",
      description: "Refactor legacy assets and adopt cloud-native practices",
    },
    {
      title: "Assure & secure",
      description:
        "Ensure performance, security, and release readiness continuously.",
    },
    {
      title: "Support & evolve",
      description:
        "Maintain uptime, release updates, and optimize post-launch.",
    },
  ];
  return (
    <>
      <main>
        <StepsSection
          heading="Comprehensive engineering for all stages"
          steps={stepsData}
        />
      </main>
    </>
  );
};

export const Core = () => {
  const data = [
    {
      image: image1,
      title: "Product & application development",
      description:
        "Agile, full-cycle engineering with DevOps, quality, and architecture alignment.",
        link:"/digital-product-engineering/product-application-development"
    },
    {
      image: image2,

      title: "CX engineering",
      description:
        "Design modern, responsive, and user-centric interfaces across web and mobile",
        link:"/digital-product-engineering/cx-engineering"
    },
    {
      image: image3,

      title: "Cloud services",
      description:
        "Cloud-native engineering, deployment pipelines, and multi-cloud readiness.",
        link:"/digital-product-engineering/cloud"
    },
  ];
  return (
    <>
      <Imagethree heading="Core product engineering" data={data} islearnMoreButton={true} />
    </>
  );
};

export const Ecosystem = () => {
  const data = [
    {
      image: image4,
      title: "Modernization & ecosystem",
      description:
        "Re-architect legacy apps and extend into digital ecosystems with partner-ready interfaces.",
        link:"/digital-product-engineering/modernization-ecosystem"
    },
    {
      image: image5,

      title: "Storage & networking",
      description:
        "Agile, scalable infrastructure design with SDS, SDN, HCI, and edge integration.",
        link:"/digital-product-engineering/storage-networking"
    },
    {
      image: image6,

      title: "Virtualization",
      description:
        "Manage VMs, containers, and orchestration across hybrid and multi-cloud setups.",
        link:"/digital-product-engineering/virtualization"
    },
  ];
  return (
    <>
      <Imagethree
        heading="Ecosystem and infrastructure alignment"
        data={data}
        islearnMoreButton={true}
      />
    </>
  );
};

export const Testing = () => {
  const data = [
    {
      image: image7,
      title: "Testing as a Service (TaaS)",
      description:
        "Automated functional and non-functional testing integrated into CI/CD pipelines.",
        link:"/digital-product-engineering/testing-as-a-service"
    },
    {
      image: image8,

      title: "Security",
      description:
        "DevSecOps, Zero Trust, IAM, and business continuity for secure engineering at scale.",
        link:"/digital-product-engineering/security"
    },
    {
      image: image9,

      title: "Sustenance & support",
      description:
        "Release planning, uptime monitoring, documentation, and tiered support frameworks.",
        link:"/digital-product-engineering/sustenance-support"
    },
  ];
  return (
    <>
      <Imagethree heading="Testing, support, and sustenance" data={data} islearnMoreButton={true} />
    </>
  );
};

export const Deep = () => {
  const router=useRouter()
  const buttonImage = ButtonImage;
  const hoverImage = ButtonImage;
  const buttonText = "Know More";
  const knowMoreClick=()=>{
    router.push("/industries")
  }
  return (
    <>
      <section className=" pb-6 md:pb-10 md:pt-20 pt-12   bg-white">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex md:flex-nowrap flex-wrap gap-6 justify-between">
            <div className="w-full md:w-2/3">
              <h2 className="text-xl md:text-[38px] font-semibold text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_80%)] ">
                Deep industry and tech expertise across all
              </h2>
              <h2 className="text-xl md:text-[38px] font-semibold mb-0 md:mb-10 text-[#2E3092] ">
                engineering services
              </h2>
            </div>
            <div className="w-full md:w-2/6 md:ml-auto ">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-0 md:mt-8"
              >
                <ButtonLayout
                  text={buttonText}
                  image={buttonImage}
                  hoverImage={hoverImage}
                  className="!w-[200px] md:ml-auto"
                  onClick={knowMoreClick}
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full mt-8 md:mt-0">
            <Image
              src={deep}
              alt="deep"
              width={800}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};
