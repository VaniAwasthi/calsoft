"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import {
  fetchCaseStudiesList,
  fetchCaseStudyById,
} from "../../../store/actions/caseStudyActions.js";

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
import { ShareSection } from "../../../component/whitepaper/expanPage/WhitepaperReadMore";

const Page = () => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
  const { slug } = useParams();

  // Redux state
  const { list, data: caseStudy, isLoading, error, selectedId } = useSelector(
    (state) => state.caseStudy
  );

  const [matchedId, setMatchedId] = useState(null);

  // slugify helper (same as backend logic you used)
  const slugify = (text) =>
    text
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");

  //  fetch case study list if empty
  useEffect(() => {
    if (!list.length) {
      dispatch(fetchCaseStudiesList());
    }
  }, [dispatch, list.length]);

  // 2️⃣ once list or slug is ready → find match and fetch by ID
  useEffect(() => {
    const idToFetch = selectedId || localStorage.getItem("selectedCaseStudyId");

    if (idToFetch) {
      dispatch(fetchCaseStudyById(idToFetch));
    } else if (slug && list.length) {
      const match = list.find((cs) => slugify(cs.hero_title1) === slug);
      if (match) {
        setMatchedId(match._id);
        dispatch(fetchCaseStudyById(match._id));
      } else {
        console.error("No case study found for slug:", slug);
      }
    }
  }, [dispatch, selectedId, slug, list]);

  //handle loading / error states
  if (!matchedId && !selectedId && !localStorage.getItem("selectedCaseStudyId")) {
    return <div className="text-red-500 p-8">Missing case study ID.</div>;
  }
  if (isLoading) return <div className="p-8">Loading case study...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!caseStudy) return null;

  // ✅ normalize API response
  const CaseStudiesCardData = caseStudy.data || caseStudy;
  const businessValueData2 = CaseStudiesCardData?.business_cards;

  // HubSpot form extraction
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
        image1={`${baseUrl}${CaseStudiesCardData?.card_two}`}
        image2={`${baseUrl}${CaseStudiesCardData?.card_one}`}
        title={CaseStudiesCardData?.hero_title1}
        subtitle={CaseStudiesCardData?.hero_title2}
        description={CaseStudiesCardData?.hero_content}
        buttonLabel={CaseStudiesCardData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
        scrollToId="DownloadSection"
        
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
        onButtonClick={() => console.log("submit")}
      />
    </div>
  );
};

export default Page;
