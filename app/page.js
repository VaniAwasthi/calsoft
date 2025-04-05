"use client";
import {
  CalsoftNews,
  CalsoftPartner,
} from "./component/home/CalsoftNewsPartner";
import Customer from "./component/home/Customer";
import DigitalJounery from "./component/home/DigitalJourney";
import HeroSec from "./component/home/HeroSec";
import Nextgen from "./component/home/Nextgen";
import Image from "next/image";
import { Casestudy, Services } from "./component/home/ServicesCasestudyBlog";

export default function Home() {
  return (
    <>
      <HeroSec />
      <DigitalJounery />
      <Customer />
      <Nextgen />
      <CalsoftNews />
      <CalsoftPartner />
      <Services />
      <Casestudy />
    </>
  );
}
