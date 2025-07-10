"use client";
import { useDispatch } from "react-redux";
import ResourceGrid from "../../component/blog/BlogSec.jsx";
import { BlogsBanner } from "../../component/blog/blogsBanner.jsx";
import { fetchBlogList } from "../../store/actions/blogAction.js";
import cardImg1 from "../../assets/blog/idcBanner1.webp";
import cardImg2 from "../../assets/blog/banner2.webp";
import React, { useEffect } from "react";

const Page = () => {
  const cards = [
    {
      label: "Analyst Report",
      title: "IDC MarketScape: Worldwide Cloud Security Services in the AI Era",
      description:
        "In a fiercely competitive landscape, Trustwave has been named a Major Player.",
      image: cardImg1,
      link: "#",
    },
    {
      label: "Webinar",
      title:
        "2025 Healthcare Risk Radar: Latest Trends in Healthcare Cyber Threats",
      description:
        "An in-depth analysis of the most significant cybersecurity threats facing healthcare.",
      image: cardImg2,
      link: "#",
    },
  ];

  return (
    <>
      <BlogsBanner cards={cards} />
      <ResourceGrid />
    </>
  );
};

export default Page;
