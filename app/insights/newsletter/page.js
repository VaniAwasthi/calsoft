import {
  HeroSection,
  Newspapers,
  PreviousNewspaper,
} from "@/app/component/newpaper/Newpaper";
import { ShareSection } from "@/app/component/whitepaper/expanPage/WhitepaperReadMore";
import React from "react";

export default function Page() {
  return (
    <>
      <HeroSection
        title={"Subscribe Now to Hyphen Newsletter"}
        subTitle={"Don’t miss our Latest Newsletters"}
        desc={
          "Join our mailing list and get notified when we record new episodes."
        }
      />
      <ShareSection />
      <Newspapers />
      <PreviousNewspaper />
    </>
  );
}
