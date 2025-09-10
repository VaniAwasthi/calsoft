import React from "react";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function ArchitectureSprint({
  gradientText = "Want to see if you qualify for a Free Architecture Sprint?",
  buttonText = "See My Sprint Eligibility",
}) {
  return (
    <div className="container">
      <div className="h-4"></div>
      <div className="bg-[#C3C3C3] w-full h-px" />
      <div className="h-10"></div>
      <div className="h-fit flex flex-col lg:flex-row  justify-between items-start lg:items-center gap-8 lg:gap-10">
        <p className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(to_right,#2E3092_15%,#ED1C24_68%)] bg-clip-text text-transparent">
          {gradientText}
        </p>
        <ButtonLayout
          text={buttonText}
          image={buttonImage}
          hoverImage={buttonImage}
          className={"w-96 xl:w-80 whitespace-nowrap"}
        />
      </div>
    </div>
  );
}
