"use client";

import BgImage from "../../../assets/caseStudies/caseStudyLanding.webp";
import BusinessValueBg from "../../../assets/caseStudies/BusinessValueBg.webp";
import ToKnowMoreBg from "../../../assets/caseStudies/knowmorebg.webp";
import { useParams } from "next/navigation";

import {
  BusinessValueSection,
  HeroSectionLanding,
  InfoWithFormSection,
  ToKnowMoreSection,
} from "../../../component/caseStudies/HeroSecLanding.jsx";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ShareSection } from "../../../component/whitepaper/expanPage/WhitepaperReadMore";
import { fetchDatasheetById, fetchDatasheetList } from "../../../store/actions/datasheetAction";

const Page = () => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";
  const dispatch = useDispatch();
const { slug } = useParams();

  // Redux state
  const { list, data: datasheets, isLoading, error, selectedId } = useSelector(
    (state) => state.datasheets
  );

  const [matchedId, setMatchedId] = useState(null);

  // slugify helper (same as backend logic you used)
  const slugify = (text) =>
    text
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");

  // 1️⃣ fetch case study list if empty
  useEffect(() => {
    if (!list.length) {
      dispatch(fetchDatasheetList());
    }
  }, [dispatch, list.length]);

  // 2️⃣ once list or slug is ready → find match and fetch by ID
  useEffect(() => {
    const idToFetch = selectedId || localStorage.getItem("selectedDateSheetId");

    if (idToFetch) {
      dispatch(fetchDatasheetById(idToFetch));
    } else if (slug && list.length) {
      const match = list.find((cs) => slugify(cs.hero_title1) === slug);
      if (match) {
        setMatchedId(match._id);
        dispatch(fetchDatasheetById(match._id));
      } else {
        console.error("No datesheet found for slug:", slug);
      }
    }
  }, [dispatch, selectedId, slug, list]);

  // 3️⃣ handle loading / error states
  if (!matchedId && !selectedId && !localStorage.getItem("selectedDateSheetId")) {
    return <div className="text-red-500 p-8">Missing case study ID.</div>;
  }



  if (isLoading) return <div className="p-8">Loading case study...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!datasheets) return null;

  const DatasheetCardData = datasheets.data;
  const businessValueData2 = datasheets?.data?.business_cards;
  const Heroimage1 = `${baseUrl}${DatasheetCardData?.card_one}`;

  // Extract from hubspot_form string
  const hubspotFormString = DatasheetCardData?.hubspot_form || "";

  const portalIdMatch = hubspotFormString.match(/portalId:\s*["'](.+?)["']/);
  const formIdMatch = hubspotFormString.match(/formId:\s*["'](.+?)["']/);
  const regionMatch = hubspotFormString.match(/region:\s*["'](.+?)["']/);

  const portalId = portalIdMatch?.[1] || "";
  const formId = formIdMatch?.[1] || "";
  const region = regionMatch?.[1] || "na1";

  return (
    <div>
      <HeroSectionLanding
        image2={`${baseUrl}${DatasheetCardData?.card_one}`}
        image1={`${baseUrl}${DatasheetCardData?.card_two}`}
        title={DatasheetCardData?.hero_title1}
        subtitle={DatasheetCardData?.hero_title2}
        description={DatasheetCardData?.hero_content}
        buttonLabel={DatasheetCardData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
      />
      <ShareSection />

      <InfoWithFormSection
        heading="Calsoft In focus:"
        headingHighlight="Proven Approach"
        description1={DatasheetCardData?.calsoftinfocus_text}
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
