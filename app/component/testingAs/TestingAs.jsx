"use client";
import React, { useState } from "react";
import BackgroundImage from "../../assets/DigitalEngineering/testing/Banner.svg";
import BannerWithRightSec from "../utilities/BannerWithRightsec";
import Submenu from "../utilities/Submenu";
import ButtonImage from "../../assets/home/buttonImg.webp";
import { ChallengeToSolution, InfraSection } from "../utilities/InfraSectorSec";
import Info1 from "../../assets/DigitalEngineering/testing/Info1.svg";
import Info2 from "../../assets/DigitalEngineering/testing/Info2.svg";
import Info3 from "../../assets/DigitalEngineering/testing/Info3.svg";
import Info4 from "../../assets/DigitalEngineering/testing/Info4.svg";
import Info5 from "../../assets/DigitalEngineering/testing/Info5.svg";
import Info6 from "../../assets/DigitalEngineering/testing/Info6.svg";
export const TestingTab = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const slide = {
    title: "Testing as a Service",
    description: `Deliver reliable, scalable products with comprehensive testing across the development lifecycle.`,
    buttonText: "Download Datasheet",
    image: BackgroundImage,
  };
  const navItems = [
    "Benefits",
    "Testing",
    "CalTIA",
    "Load + Stress",
    "Test impact",
    "QAOps",
    "Benchmarking",
  ];
  return (
    <>
      <BannerWithRightSec
        heroBg={BackgroundImage}
        title={slide.title}
        description={slide.description}
        rightImage={slide.rightImage}
        buttonText={slide.buttonText}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        rightSec={false}
      />
      <Submenu
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </>
  );
};

export const TestingChallenge = () => {
  const challengesData = [
    {
      title: "Functional and non-functional validation",
      description:
        "Manual testing cycles slow down releases and miss key risks",
      solution:
        "Automate comprehensive functional and non-functional testing aligned to release goals",
    },
    {
      title: "Regression testing",
      description:
        "Frequent changes introduce untested regressions across modules",
      solution:
        "Implement automated regression testing pipelines using CalTIA and continuous validation models",
    },
    {
      title: "Scalability and load testing",
      description:
        "Applications fail under real-world usage spikes and stress conditions",
      solution:
        "Simulate load, conduct stress tests, and optimize scalability bottlenecks pre-deployment",
    },
    {
      title: "Test impact analysis",
      description:
        "Testing cycles are long and inefficient without focusing on high-risk areas",
      solution:
        "Apply ML-driven test impact analysis to prioritize critical test cases dynamically",
    },
    {
      title: "QAOps integration",
      description: "Testing remains siloed, slowing DevOps and CI/CD pipelines",
      solution:
        "Embed QA into DevOps workflows through QAOps frameworks and shift-left testing",
    },
  ];

  return (
    <ChallengeToSolution
      title="Challenge to solution:"
      blackTitle="End-to-end testing for high quality deliveries"
      challenges={challengesData}
      secId="Benefits"
    />
  );
};

export const FunctionalSec = () => {
  return (
    <>
      <InfraSection
        title="Functional and non-functional testing"
        description="Ensure functionality, security, and usability
                across every stage of product development."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Test all modules for expected use",
          "Check security, speed, and usability",
          "Start testing early to find bugs fast",
        ]}
        businessImpact={[
          "Fix issues before code goes live",
          "Meet user and system needs fully",
          "Launch stable apps, every time",
        ]}
        imageSrc={Info1}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="testing"
      />
    </>
  );
};

export const CalTIASec = () => {
  return (
    <>
      <InfraSection
        title="CalTIA | Automated regression testing"
        description="Speed up releases with intelligent, risk-prioritized automated regression testing."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Run risk-based regression with CalTIA",
          "Sync tests with build pipelines",
          "Track test changes by version",
        ]}
        businessImpact={[
          "Quicker test cycles per release",
          "Save effort with focused tests",
          "Stop regressions before release",
        ]}
        imageSrc={Info2}
        imageAlt="Image"
        imageLeft={true}
        isDivider={true}
        secId="caltia"
      />
    </>
  );
};

export const LoadSec = () => {
  return (
    <>
      <InfraSection
        title="Load and stress testing for scalability"
        description="Validate application performance and resilience under real-world and extreme load conditions."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Simulate user peaks and traffic loads",
          "Push systems to find weak points",
          "Tune based on stress test results",
        ]}
        businessImpact={[
          "Handle traffic without failure",
          "Find scale limits before users do",
          "Plan capacity with real data",
        ]}
        imageSrc={Info3}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="load-+-stress"
      />
    </>
  );
};
export const TestSec = () => {
  return (
    <>
      <InfraSection
        title="Test impact analysis using ML models"
        description="Prioritize high-risk areas and streamline validation with ML-driven test impact analysis."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Use ML to flag risk areas post-change",
          "Cut unnecessary test cycles",
          "Update test focus using system learnings",
        ]}
        businessImpact={[
          "Test smarter for higher efficiency",
          "Less user downtime or wait time",
          "Testing improves over each cycle",
        ]}
        imageSrc={Info4}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={true}
        secId="test-impact"
      />
    </>
  );
};
export const QaoSec = () => {
  return (
    <>
      <InfraSection
        title="QAOps with CI/CD pipeline integration"
        description="Integrate testing seamlessly into DevOps workflows for faster, reliable releases."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Embed tests into DevOps workflows",
          "Run tests early and post-deploy",
          "Set quality gates into each stage",
        ]}
        businessImpact={[
          "Stop bugs quickly and decisively",
          "Faster, tested code in pipeline",
          "Live systems stay dependable",
        ]}
        imageSrc={Info5}
        imageAlt="Infrastructure globe"
        imageLeft={true}
        isDivider={true}
        secId="qaops"
      />
    </>
  );
};

export const ProductSec = () => {
  return (
    <>
      <InfraSection
        title="Product and ecosystem benchmarking"
        description="Test product performance, quality, and scalability against industry standards and best practices."
        buttonText="Learn More"
        link="#"
        whatWeDo={[
          "Compare performance to market norms",
          "Test product fit in wider platforms",
          "Find gaps using benchmark reports",
        ]}
        businessImpact={[
          "Know how you stack up in market",
          "Improve readiness for platform use",
          "Spot areas that limit adoption",
        ]}
        imageSrc={Info6}
        imageAlt="Infrastructure globe"
        imageLeft={false}
        isDivider={false}
        secId="benchmarking"
      />
    </>
  );
};
