"use client";
import BgImage from "../../../assets/caseStudies/whitepaperBg.webp";
import ToKnowMoreBg from "../../../assets/caseStudies/knowmorebg.webp";
import { BusinessValueSection, ToKnowMoreSection } from "../../../component/caseStudies/HeroSecLanding.jsx";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import BusinessValueBg from "../../../assets/caseStudies/BusinessValueBg.webp";

import {

  HeroSectionWhitePaper,
  InfoWithFormSectionWhitePaper,
  ShareSection,
} from "../../../component/whitepaper/expanPage/WhitepaperReadMore.jsx";
import { slugify } from "@/app/component/utilities/helper/SlugGenerator";
import { fetchIndustryReportById, fetchIndustryReportList } from "@/app/store/actions/industryReportActions";
import { baseUrl } from "@/config";

const Page = () => {

  const dispatch = useDispatch();
const { slug } = useParams();

  // Redux state
  const { list, data: industryReport, isLoading, error, selectedId } = useSelector(
    (state) => state.industryreport
  );
  const [matchedId, setMatchedId] = useState(null);
  const industryreportData = useSelector((state) => state.industryreport.data);
  //  fetch industry report list if empty
    useEffect(() => {
      if (!list.length) {
        dispatch(fetchIndustryReportList());
      }
    }, [dispatch, list.length]);
  
    //once list or slug is ready → find match and fetch by ID
    useEffect(() => {
      const idToFetch = selectedId || localStorage.getItem("selectedIndustryReportId");
  
      if (idToFetch) {
        dispatch(fetchIndustryReportById(idToFetch));
      } else if (slug && list.length) {
        const match = list.find((cs) => slugify(cs.hero_title1) === slug);
        if (match) {
          setMatchedId(match._id);
          console.log(match._id,"matched")
          dispatch(fetchIndustryReportById(match._id));
        } else {
          console.error("No industry report found for slug:", slug);
        }
      }
    }, [dispatch, selectedId, slug, list]);
  if (!matchedId && !selectedId && !localStorage.getItem("selectedWhitepaperId")) {
    return <div className="text-red-500 p-8">Missing Industry report ID.</div>;
  }

  if (isLoading) return <div className="p-8">Loading whitepaper...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!industryreportData) return null;


  // Extract Hubspot form data
  const hubspotFormString = industryreportData?.hubspot_form || "";

  const portalId =
    hubspotFormString.match(/portalId:\s*["'](.+?)["']/)?.[1] || "";
  const formId = hubspotFormString.match(/formId:\s*["'](.+?)["']/)?.[1] || "";
  const region =
    hubspotFormString.match(/region:\s*["'](.+?)["']/)?.[1] || "na1";
 const businessValueData2 = industryreportData?.data?.business_cards;
 
  return (
    <>
      <HeroSectionWhitePaper
        image2={`${baseUrl}${industryreportData?.card_one}`}
        image1={`${baseUrl}${industryreportData?.card_two}`}
        title={industryreportData?.hero_title1}
        subtitle={industryreportData?.hero_title2}
        description={industryreportData?.hero_content}
        buttonLabel={industryreportData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
        scrollToId="DownloadSection"
      />
      <ShareSection />
      <InfoWithFormSectionWhitePaper
        heading={industryreportData?.calsoftinfocus_title || "Whitepaper Title"}
        description1={industryreportData?.calsoftinfocus_text}
        buttonLabel="Submit"
        isforLayout={true}
        portalId={portalId}
        formId={formId}
        region={region}
      />
      {/* <BusinessValueSection
      isDivider={false}
        backgroundImage={BusinessValueBg}
        values={businessValueData2}
        title={industryreportData?.businessinvalue_title}
      /> */}
      <ToKnowMoreSection
        backgroundImage={ToKnowMoreBg}
        title="To Know More"
        description="About how we can align our expertise to your requirements, reach out to us."
        buttonLabel="Contact Us"
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        
      />
    </>
  );
};
export default Page;
