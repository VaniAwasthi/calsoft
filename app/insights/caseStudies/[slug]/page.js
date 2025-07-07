"use client";

import BgImage from "../../../assets/caseStudies/caseStudyLanding.webp";
import HeroRight1 from "../../../assets/caseStudies/hero1.webp";
import HeroRight2 from "../../../assets/caseStudies/hero2.webp";
import BusinessValueBg from "../../../assets/caseStudies/BusinessValueBg.webp";
import BusinessIcon1 from "../../../assets/caseStudies/BusinessValueIcon1.svg";
import BusinessIcon2 from "../../../assets/caseStudies/BusinessValueIcon2.svg";
import BusinessIcon3 from "../../../assets/caseStudies/BusinessValueIcon3.svg";
import BusinessIcon4 from "../../../assets/caseStudies/BusinessValueIcon4.svg";
import ToKnowMoreBg from "../../../assets/caseStudies/knowmorebg.webp";
import {
  BusinessValueSection,
  HeroSectionLanding,
  InfoWithFormSection,
  ToKnowMoreSection,
} from "../../../component/caseStudies/HeroSecLanding.jsx";
import ButtonImage from "../../../assets/home/buttonImg.webp";

const Page = () => {
  const data = [
    {
      icon: BusinessIcon1,
      title: "Increased",
      subtitle: "Operational autonomy and scalability",
    },
    {
      icon: BusinessIcon2,
      title: "Increased",
      subtitle: "Operational autonomy and scalability",
    },
    {
      icon: BusinessIcon3,
      title: "Increased",
      subtitle: "Operational autonomy and scalability",
    },
    {
      icon: BusinessIcon4,
      title: "Increased",
      subtitle: "Operational autonomy and scalability",
    },
  ];
  return (
    <div>
      <HeroSectionLanding
        image1={HeroRight1}
        image2={HeroRight2}
        title="VMware Migration"
        title2="for Cloud & Edge Providers"
        subtitle="Smart Legacy "
        subtitle2="Infrastructure Modernization"
        description="Simplifying VMware migration to the cloud – minimal downtime and engineering effort"
        buttonLabel="Download Case Study"
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
      />
      <InfoWithFormSection
        heading="Calsoft In focus:"
        headingHighlight="Proven Approach"
        description1="Calsoft built a lightweight, Command-Line Interface (CLI)-based migration tool to simplify and standardize the entire VM migration process. This solution approach enabled customers to manage migrations independently without needing deep platform expertise or support, while ensuring a consistent, reliable migration experience."
        description2="The solution seamlessly fits into existing infrastructure workflows and automation pipelines, supporting both manual and programmatic execution."
        checkboxLabel="Download VMware Workload Migration Solution Report"
        buttonLabel="Submit"
        onSubmit={() => {
          console.log("submit");
        }}
      />
      <BusinessValueSection
        backgroundImage={BusinessValueBg}
        values={data}
        title="Business Value"
      />
      <ToKnowMoreSection
        backgroundImage={ToKnowMoreBg}
        title="To Know More"
        description="About how we can align our expertise to your requirements, reach out to us."
        buttonLabel="Contact Us"
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        onButtonClick={() => {
          console.log("submit");
        }}
      />
    </div>
  );
};
export default Page;
