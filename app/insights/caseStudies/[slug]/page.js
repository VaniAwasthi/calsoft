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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCaseStudies } from "../../../store/actions/caseStudyActions.js";

const Page = () => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.caseStudies);
  useEffect(() => {
    dispatch(fetchCaseStudies());
  }, [dispatch]);
  const CaseStudiesCardData = data?.data;
  console.log(CaseStudiesCardData, "data");
  const businessValueData2 = data?.data?.business_cards;
  const Heroimage1 = `${baseUrl}${CaseStudiesCardData?.card_one}`;
  console.log(Heroimage1, "image");
  const businessValueData = [
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
        image1={`${baseUrl}${CaseStudiesCardData?.card_one}`}
        image2={`${baseUrl}${CaseStudiesCardData?.card_two}`}
        title={CaseStudiesCardData?.hero_title1}
        subtitle={CaseStudiesCardData?.hero_title2}
        description={CaseStudiesCardData?.hero_content}
        buttonLabel={CaseStudiesCardData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
      />
      <InfoWithFormSection
        heading="Calsoft In focus:"
        headingHighlight="Proven Approach"
        description1={CaseStudiesCardData?.calsoftinfocus_text}
        buttonLabel="Submit"
        onSubmit={() => {
          console.log("submit");
        }}
        isforLayout={true}
        isforLayoutData={CaseStudiesCardData?.hubspot_form}
      />
      <BusinessValueSection
        backgroundImage={BusinessValueBg}
        values={businessValueData}
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
