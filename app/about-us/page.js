import HeroSection from "../component/about-us/HeroSection";
import WhoWeAre from "../component/about-us/WhoWeAre";
import WeWork from "../component/about-us/WeWork";
import Benefits from "../component/about-us/Benefits";
import Vision from "../component/about-us/Vision";
import Values from "../component/about-us/Values";
import BuildSomething from "../component/about-us/BuildSomething";
import ThoughTheYear from "../component/about-us/ThoughTheYear";

export default function Page() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WeWork />
      <Benefits />
      <Vision />
      <Values />
      <ThoughTheYear />
      <BuildSomething />
    </>
  );
}
