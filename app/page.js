"use client";
import Customer from "./component/home/Customer";
import DigitalJounery from "./component/home/DigitalJourney";
import HeroSec from "./component/home/HeroSec";
import Nextgen from "./component/home/Nextgen";
import Image from "next/image";
import { CalsoftNews, CalsoftPartner } from "./screen/home/CalsoftNewsPartner";
import { Casestudy, Services } from "./screen/home/ServicesCasestudyBlog";

export default function Home() {
  return (
    <>
      <HeroSec />
      <DigitalJounery />
      <Nextgen />
      <CalsoftNews />
      <Services />
      <Casestudy />
    </>
  );
}
