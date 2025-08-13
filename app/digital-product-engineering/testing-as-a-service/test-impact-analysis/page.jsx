import React from "react";
import HeroSection from "../../../component/testing/HeroSection";
import WhyItMatters from "../../../component/testing/Functional-Testing/WhyItMatters";
import IntelligentPlanning from "../../../component/testing/IntelligentPlanning";
import UseCases from "../../../component/testing/UseCases";
import WhyCalsoft from "../../../component/infra/WhyCalsoft";
import FirstStep from "../../../component/infra/FirstStep";
import Guesswork from "../../../component/testing/Guesswork";
import Agility from "../../../component/infra/Agility";
import Connect from "../../../component/infra/Connect";
import ImpactAnalysisMatter from "../../../component/testing/ImpactAnalysisMatter";

const Page = () => {
  return (
    <>
      <HeroSection
        title="Never Re-Test Everything. Always Test What Matters"
        description="Accelerate release cycles and improve test coverage with Calsoft’s Automated Regression Testing — engineered for speed, stability, and scalability."
        buttonText="Request Free Assessment"
      />
      <WhyItMatters
        title="Outdated Regression = Delayed Releases."
        desc="Manual or partially automated regression testing often fails to keep pace with agile sprints and CI/CD pipelines, leading to:"
        desc2="Calsoft helps QA teams shift from script-heavy testing to impact-driven, maintainable regression automation aligned with release velocity."
        buttonText="Download Case Study"
        Component={ImpactAnalysisMatter}
      />
      <IntelligentPlanning />
      <Agility
        data={{
          leftSideContent: {
            title: "Faster, Safer, Smarter Cloud Transitions",
            subTitle: "Cloud migration done right delivers real impact:",
            description:
              "Calsoft focuses on business-first outcomes — not just technical transition.",
          },
          rightSideContent: [
            {
              title: "Up to 40%",
              subTitle: "reduction in infra costs via right-sized provisioning",
            },
            {
              title: "Zero-downtime",
              subTitle: "cutovers for production-critical systems",
            },
            {
              title: "50–70%",
              subTitle: "faster migration through automation",
            },
            {
              title: "90%",
              subTitle: "improvement in post-migration application performance",
            },
          ],
        }}
        bookMeetingData={{
          title:
            "Book a 30-minute call to stop 80% of your cloud spend from going to waste.",
          buttonText: "Book a Meeting",
        }}
        buttonText="Download ROI Sheet"
      />
      <UseCases />
      <WhyCalsoft
        sectionDescription="Cloud migration is not a copy-paste operation — it’s a strategic transformation. Calsoft is uniquely positioned to deliver:"
        buttonText="Download One Pager"
        data={{
          tableHeadings: ["Capability", "Calsoft", "Standard Providers"],
          tableContent: [
            {
              name: "Engineering-Led Migration Design",
              calsoft: "Deep Technical Depth",
              vendor: "Generic Templates",
            },
            {
              name: "Multi-Cloud Strategy Alignment",
              calsoft: "Azure, AWS, GCP",
              vendor: "Vendor Bias",
            },
            {
              name: "Automated Dependency Discovery",
              calsoft: "Yes",
              vendor: "Manual Analysis",
            },
            {
              name: "Security-First Cutover Planning",
              calsoft: "Integrated Controls",
              vendor: "Post-hoc Remediation",
            },
            {
              name: "Post-Migration Optimization",
              calsoft: "Built-In",
              vendor: "Not Included",
            },
          ],
        }}
      />
      <FirstStep
        headerContent={{
          title1: "Migrate with Method,",
          title2: "Not Momentum",
          description:
            "We take you from readiness to run-state through a risk-mitigated, ROI-led framework. Here's how:",
        }}
        Component={Guesswork}
      />
      <Connect />
    </>
  );
};
export default Page;
