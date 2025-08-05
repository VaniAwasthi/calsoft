import { ToKnowMoreSection } from "../component/caseStudies/HeroSecLanding";
import CEO from "../component/leadership/CEO";
import LeadershipHero from "../component/leadership/LeadershipHero";
import LeadershipTeam from "../component/leadership/LeadershipTeam";
import knowMore from "../assets/know_more.png";
import ButtonImage from "../assets/home/buttonImg.webp";

export default function LeadershipPage() {
  return (
    <>
      <LeadershipHero />
      <CEO />
      <LeadershipTeam />
      <ToKnowMoreSection
        backgroundImage={knowMore}
        title="To Know More"
        description="About how we can align our expertise to your requirements, reach out to us."
        buttonLabel="Contact Us"
        buttonImage={ButtonImage}
        hoverImage={ButtonImage}
        // onButtonClick={() => {
        //   console.log("submit");
        // }}
      />
    </>
  );
}
