"use client";

import BgImage from "../../../assets/caseStudies/caseStudyLanding.webp";
import BusinessValueBg from "../../../assets/caseStudies/BusinessValueBg.webp";
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
import { fetchCaseStudyById } from "../../../store/actions/caseStudyActions.js";
import { useSearchParams } from "next/navigation";
import { ShareSection } from "../../../component/whitepaper/expanPage/WhitepaperReadMore";

const Page = () => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  // 1. Get ID from Redux if available
  const selectedId = useSelector((state) => state.caseStudy.selectedId);

  // 2. Get ID from query params as fallback
  const idFromQuery = searchParams.get("id");

  // 3. Get case study data from Redux
  const caseStudy = useSelector((state) => state.caseStudy.data);
  const isLoading = useSelector((state) => state.caseStudy.isLoading);
  const error = useSelector((state) => state.caseStudy.error);

  useEffect(() => {
    const idToFetch = selectedId || idFromQuery;
    if (idToFetch) {
      dispatch(fetchCaseStudyById(idToFetch));
    }
  }, [dispatch, selectedId, idFromQuery]);

  if (!selectedId && !idFromQuery) {
    return <div className="text-red-500 p-8">Missing case study ID.</div>;
  }

  if (isLoading) return <div className="p-8">Loading case study...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!caseStudy) return null;

  const CaseStudiesCardData = caseStudy.data;
  console.log(CaseStudiesCardData, "data");
  const businessValueData2 = caseStudy?.data?.business_cards;
  const Heroimage1 = `${baseUrl}${CaseStudiesCardData?.card_one}`;

  // Extract from hubspot_form string
  const hubspotFormString = CaseStudiesCardData?.hubspot_form || "";

  const portalIdMatch = hubspotFormString.match(/portalId:\s*["'](.+?)["']/);
  const formIdMatch = hubspotFormString.match(/formId:\s*["'](.+?)["']/);
  const regionMatch = hubspotFormString.match(/region:\s*["'](.+?)["']/);

  const portalId = portalIdMatch?.[1] || "";
  const formId = formIdMatch?.[1] || "";
  const region = regionMatch?.[1] || "na1";

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
      <ShareSection />

      <InfoWithFormSection
        heading="Calsoft In focus:"
        headingHighlight="Proven Approach"
        description1={CaseStudiesCardData?.calsoftinfocus_text}
        buttonLabel="Submit"
        isforLayout={true}
        portalId={portalId}
        formId={formId}
        region={region}
      />
      <BusinessValueSection
        backgroundImage={BusinessValueBg}
        values={businessValueData2}
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
