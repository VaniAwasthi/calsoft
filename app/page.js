"use client";
import {
  CalsoftNews,
  CalsoftPartner,
} from "./component/home/CalsoftNewsPartner";
import Customer from "./component/home/Customer";
import DigitalJounery from "./component/home/DigitalJourney";
import HeroSec from "./component/home/HeroSec";
import Nextgen from "./component/home/Nextgen";
import { Casestudy, Services } from "./component/home/ServicesCasestudyBlog";
import ZigzagJourney from "./component/home/JourneyMobile";
import { IndustrySection } from "./component/home/IndustriesMobile";

export default function Home() {
  return (
    <>
      <HeroSec />
      <DigitalJounery />
      <ZigzagJourney />
      <Customer />
      <Nextgen />
      <IndustrySection />
      <CalsoftNews />
      <CalsoftPartner />
      <Services />
      <Casestudy />
    </>
  );
}
