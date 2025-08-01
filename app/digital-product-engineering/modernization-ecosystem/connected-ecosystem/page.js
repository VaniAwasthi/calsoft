import React from "react";
import { Business, Future, How, Step, Use, What, Why } from "../../../component/Connected/FutureWhyWhatUseBusinessHowStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/connected/bgblog.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";

function page() {
    return (
        <>
            <Future />
            <Why />
            <What />
            <Use />
            <section className="banner_light padd_sec">
                <BannerSection
                    backgroundImage={BannerwithButtonBg}
                    title={
                        <>
                            When Everything Connects, Everything Works.
                        </>
                    }
                    buttonText="Read Blog"
                    buttonLink="#"
                />
            </section>
            <Business />
            <How />
            <Step />
            <div className="last_footer">
                <FooterBg
                    ContactImg={ContactImg}
                    ButtonImage={ButtonImage}
                    lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?

                "
                    link="#"
                />
            </div>
        </>
    )

}

export default page


