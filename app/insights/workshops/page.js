import React from "react";
import {
  CardList,
  CardSection,
  HeroSection,
} from "@/app/component/workshop-listing-page/WorkshopListing";
import Connect from "@/app/component/infra/Connect";
import { ContactSecDataAi } from "@/app/component/utilities/ChallengeSolutionDataAi";

export default function Page() {
  return (
    <>
      <HeroSection
        title={"Workshops That Build Skills, Knowledge That Lasts"}
        subTitle={
          " Join us for live and on-demand sessions led by experts. Our workshops bring together practical knowledge, real-world case studies, and actionable strategies, helping you stay ahead in technology, business, and innovation."
        }
        buttonText={"Talk to Experts"}
      />
      {/* <CardSection /> */}
      <CardList />
      <ContactSecDataAi lightContent="Learn by doing with hands-on technology workshops." />
    </>
  );
}
