import React from "react";
import Image from "next/image";
import img from "@/app/assets/sustenance/WhyItMatter.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";

export default function WhyItMatters({
  title = "Why It Matters",
  heading = "Why virtual environments spiral out of control",
  desc = "Without governance, virtual machines and assets multiply uncontrollably — resulting in:",
  buttonText = "Download Case Study",
}) {
  return (
    <div className="my-12">
      <div className="container flex">
        <div className="space-y-4">
          <p className="text-[38px] font-bold bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_40%)] bg-clip-text text-transparent">
            {title}
          </p>
          <div className="space-y-4 mb-10">
            <p className="text-[30px] font-semibold">{heading}</p>
            <p className="text-xl font-light">{desc}</p>
          </div>
          <Image
            src={img}
            alt="People discussion"
            width={700}
            height={350}
            className="rounded-xl mb-10 aspect-video object-cover"
          />
          <ButtonLayout
            text={buttonText}
            image={buttonImage}
            hoverImage={buttonImage}
            className={"w-fit"}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

function LifecycleGovernance() {
  return <></>;
}
