import React from "react";
import {
  CardList,
  CardSection,
  HeroSection,
} from "@/app/component/workshop-listing-page/WorkshopListing";
import Connect from "@/app/component/infra/Connect";

export default function page() {
  return (
    <>
      <HeroSection
        title={"Calsoft Webinars"}
        subTitle={
          "Join us online to learn from experts, expand your skills, and stay ahead of trends in identity, access, and application security through live and on-demand webinars."
        }
        buttonText={"Talk to Experts"}
      />
      <CardSection />
      <CardList />
      <Connect />
    </>
  );
}
