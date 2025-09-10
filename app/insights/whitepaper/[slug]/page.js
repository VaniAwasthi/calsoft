"use client";

import BgImage from "../../../assets/caseStudies/whitepaperBg.webp";
import ToKnowMoreBg from "../../../assets/caseStudies/knowmorebg.webp";
import { ToKnowMoreSection } from "../../../component/caseStudies/HeroSecLanding.jsx";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import {
  AccordionSection,
  HeroSectionWhitePaper,
  InfoWithFormSectionWhitePaper,
  ShareSection,
} from "../../../component/whitepaper/expanPage/WhitepaperReadMore.jsx";
import { fetchWhitepaperById, fetchWhitepaperList } from "../../../store/actions/whitepaperAction";
import { slugify } from "@/app/component/utilities/helper/SlugGenerator";
import { baseUrl } from "@/config";

const Page = () => {
  const dispatch = useDispatch();
const { slug } = useParams();

  // Redux state
  const { list, data: whitepapers, isLoading, error, selectedId } = useSelector(
    (state) => state.whitepaper
  );
  const [matchedId, setMatchedId] = useState(null);
  const whitepaperData = useSelector((state) => state.whitepaper.data);
  //  fetch case study list if empty
    useEffect(() => {
      if (!list.length) {
        dispatch(fetchWhitepaperList());
      }
    }, [dispatch, list.length]);
  
    //once list or slug is ready → find match and fetch by ID
    useEffect(() => {
      const idToFetch = selectedId || localStorage.getItem("selectedWhitepaperId");
  
      if (idToFetch) {
        dispatch(fetchWhitepaperById(idToFetch));
      } else if (slug && list.length) {
        const match = list.find((cs) => slugify(cs.hero_title1) === slug);
        if (match) {
          setMatchedId(match._id);
          console.log(match._id,"matched")
          dispatch(fetchWhitepaperById(match._id));
        } else {
          console.error("No whitepaper found for slug:", slug);
        }
      }
    }, [dispatch, selectedId, slug, list]);
  if (!matchedId && !selectedId && !localStorage.getItem("selectedWhitepaperId")) {
    return <div className="text-red-500 p-8">Missing Whitepaper ID.</div>;
  }

  if (isLoading) return <div className="p-8">Loading whitepaper...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!whitepaperData) return null;
  console.log(whitepaperData, "data");
  const heroImage = `${baseUrl}${whitepaperData?.card_one}`;

  // Extract Hubspot form data
  const hubspotFormString = whitepaperData?.hubspot_form || "";

  const portalId =
    hubspotFormString.match(/portalId:\s*["'](.+?)["']/)?.[1] || "";
  const formId = hubspotFormString.match(/formId:\s*["'](.+?)["']/)?.[1] || "";
  const region =
    hubspotFormString.match(/region:\s*["'](.+?)["']/)?.[1] || "na1";

  const items = [
    {
      title: "Understand the technical comparisons",
      content:
        "Learn how StreamNative and AWS MSK perform under distinct conditions and workloads.",
    },
    {
      title: "Data-Driven Decision Making",
      content:
        "Use our performance metrics and analysis to opt the best solution for your unique business needs.",
    },
    {
      title: "Competitive Edge",
      content:
        "Stay informed on how top cloud-native streaming platforms compare in real-world scenarios.",
    },
  ];
  return (
    <>
      <HeroSectionWhitePaper
        image2={`${baseUrl}${whitepaperData?.card_one}`}
        image1={`${baseUrl}${whitepaperData?.card_two}`}
        title={whitepaperData?.hero_title1}
        subtitle={whitepaperData?.hero_title2}
        description={whitepaperData?.hero_content}
        buttonLabel={whitepaperData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={BgImage}
        scrollToId="DownloadSection"
      />
      <ShareSection />
      <InfoWithFormSectionWhitePaper
        heading={whitepaperData?.calsoftinfocus_title || "Whitepaper Title"}
        description1={whitepaperData?.calsoftinfocus_text}
        buttonLabel="Submit"
        isforLayout={true}
        portalId={portalId}
        formId={formId}
        region={region}
      />
      <AccordionSection items={items} />
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
    </>
  );
};
export default Page;
