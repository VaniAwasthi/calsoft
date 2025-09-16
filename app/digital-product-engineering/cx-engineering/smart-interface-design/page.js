import React from "react";
import {
  Interface,
  Smart,
  Start,
  Step,
  Uses,
  What,
  Why,
} from "../../../component/SmartInterface/SmartWhyWhatUsesInterfaceStartStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";

export default function Page() {
  return (
    <>
      <Smart />
      <Why />
      <What />
      <Uses />
      <Interface />
      <Start />
      <Step />
      <div className="last_footer">
        <FooterBg
          ContactImg={ContactImg}
          ButtonImage={ButtonImage}
          lightContent="Design intuitive interfaces that delight and engage users."
        />
      </div>
    </>
  );
}
