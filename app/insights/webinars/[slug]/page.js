"use client";
import {
  CommitmentSection,
  HeroSecWebinar,
  RecommendedFor,
} from "../../../component/webinar/HeroSec";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import HeroBg from "../../../assets/caseStudies/whitepaperBg.webp";
import FeatureImage from "../../../assets/webinar/WebninarFeature.webp";
import React, { useEffect, useState } from "react";
import { InfoWithFormSectionWhitePaper, ShareSection } from "../../../component/whitepaper/expanPage/WhitepaperReadMore";
import CommitmentIcon1 from "../../../assets/webinar/commitmentIcon1.svg";
import CommitmentIcon2 from "../../../assets/webinar/commitmentIcon2.svg";
import CommitmentIcon3 from "../../../assets/webinar/commitmentIcon3.svg";
import CommitmentIcon4 from "../../../assets/webinar/commitmentIcon4.svg";
import {
  SpeakersHostSection,
  BlogAndWebinarSection,
} from "../../../component/webinar/SpeakerRelated";
import RichaImg from "../../../assets/webinar/richa.svg";
import KundanImg from "../../../assets/webinar/kunal.svg";
import VinodImg from "../../../assets/webinar/binod.svg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { fetchWebinarsById, fetchWebinarsList } from "@/app/store/actions/webinarAction";
import { baseUrl } from "@/config";
import { InfoWithFormSection } from "@/app/component/caseStudies/HeroSecLanding";
const Page = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  // Redux state
  const { list, data: webinars, isLoading, error, selectedId } = useSelector(
    (state) => state.webinars
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
      dispatch(fetchWebinarsList());
    }
  }, [dispatch, list.length]);

  // 2️⃣ once list or slug is ready → find match and fetch by ID
  useEffect(() => {
    const idToFetch = selectedId || localStorage.getItem("selectedWebinarId");

    if (idToFetch) {
      dispatch(fetchWebinarsById(idToFetch));
    } else if (slug && list.length) {
      const match = list.find((cs) => slugify(cs.hero_title1) === slug);
      if (match) {
        setMatchedId(match._id);
        dispatch(fetchWebinarsById(match._id));
      } else {
        console.error("No webinar found for slug:", slug);
      }
    }
  }, [dispatch, selectedId, slug, list]);

  //handle loading / error states
  if (!matchedId && !selectedId && !localStorage.getItem("selectedWebinarId")) {
    return <div className="text-red-500 p-8">Missing case study ID.</div>;
  }
  if (isLoading) return <div className="p-8">Loading case study...</div>;
  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!webinars) return null;

  // ✅ normalize API response
const WebinarData = webinars?.data || webinars;
  // const businessValueData2 = CaseStudiesCardData?.business_cards;

  // HubSpot form extraction
  const hubspotFormString = WebinarData?.hubspot_form || "";

  const portalId =
    hubspotFormString.match(/portalId:\s*["'](.+?)["']/)?.[1] || "";
  const formId = hubspotFormString.match(/formId:\s*["'](.+?)["']/)?.[1] || "";
  const region =
    hubspotFormString.match(/region:\s*["'](.+?)["']/)?.[1] || "na1";
const cards = WebinarData?.business_cards?.map((data, index) => ({
  id: data?.id,
  title: data?.number,
  desc: data?.content,
  icon: data?.image ? `${baseUrl}${data?.image}` : CommitmentIcon1,
}));

const recommendedData = WebinarData?.business_cards1?.map((data, index) => ({
  id: data?.id,
  title: data?.number,
  description: data?.content,
}));

 
const people = {
  speakers: WebinarData?.speakers?.map((data) => ({
    name: data?.name,
    title: data?.designation,
    image: `${baseUrl}${data?.image}`, 
    linkdin: data?.linkdin || "#",
  })) || [],

  host: WebinarData?.hosts?.map((data) => ({
    name: data?.name,
    title: data?.designation,
    image: `${baseUrl}${data?.image}`,
    linkdin: data?.linkdin || "#",
  })) || [],
};


  return (
    <>
      <HeroSecWebinar
        FeaturedImage={`${baseUrl}/${WebinarData?.featured_image}`}
        title={WebinarData?.hero_title1}
        description={WebinarData?.hero_title2}
        buttonLabel={WebinarData?.herobtn_text}
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        backgroundImage={HeroBg}
        videoUrl={WebinarData?.embedurl}
        isVideo={true}
      />
      <ShareSection />
    <InfoWithFormSectionWhitePaper
            heading={WebinarData?.calsoftinfocus_title || "Webinar Title"}
            description1={WebinarData?.calsoftinfocus_text}
            buttonLabel="Submit"
            isforLayout={true}
            portalId={portalId}
            formId={formId}
            region={region}
          />
      <CommitmentSection
        cards={cards}
        heading={WebinarData?.continuingcommitment_title}
        description=" We see CSR as a continuous responsibility. Calsonit will stay focused
          on initiatives that align with our values – supporting education,
          engaging communities, and creating meaningful local impact."
      />
      <RecommendedFor recommendedData={recommendedData} />
      <SpeakersHostSection people={people} />
      {/* <ReferenceBlogSection /> */}
      <BlogAndWebinarSection
        blogs={[
          {
            title:
              "Cut Kafka Costs by 95%: The Power of Leaderless Architecture and Lakehouse Storage",
            link: "#",
          },
          {
            title: "How We Run a 5 GB/s Kafka Workload for Just $50 per Hour",
            link: "#",
          },
        ]}
        webinars={[
          {
            title: "Is Gen AI the Future of QA and Software Testing?",
            link: "#",
          },
          {
            title: "Generative AI for the SDLC",
            link: "#",
          },
        ]}
      />
    </>
  );
};

export default Page;
