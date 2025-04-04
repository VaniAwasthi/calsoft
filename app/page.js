"use client";
import Customer from "./component/home/Customer";
import DigitalJounery from "./component/home/DigitalJourney";
import HeroSec from "./component/home/HeroSec";
import Nextgen from "./component/home/Nextgen";

export default function Home() {
  return (
    <>
      <HeroSec />
      <DigitalJounery />
      <Customer />
      <Nextgen />
    </>
  );
}
