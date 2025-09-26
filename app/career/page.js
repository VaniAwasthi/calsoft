import React from "react";
import HeroSection from "../component/career/HeroSection";
import WorkWithUs from "../component/career/WorkWithUs";
import Award from "../component/career/Awards";
import Promises from "../component/career/Promises";
import LifeAtCalsoft from "../component/career/LifeAtCalsoft";
import SendResume from "../component/career/SendResume";
import ReferSomeone from "../component/career/ReferSomeone";
import OpenVacancies from "../component/career/OpenVacancies";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WorkWithUs />
      <Award />
      <OpenVacancies />
      <Promises />
      <LifeAtCalsoft />
      <SendResume />
    </>
  );
}
