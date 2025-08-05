import React from "react";
import { Business, Plugin, How, Step, Use, What, Why } from "../../../component/Plugin/PluginWhyWhatUseBusinessHowStep";
import { FooterBg } from "../../../component/utilities/DoCases";
import BannerwithButtonBg from "../../../assets/DigitalEngineering/connected/bgblog.webp";
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import { BannerSection } from "../../../component/utilities/InfraSectorSec";

function page() {
    return (
        <>
            <Plugin />
            <Why />
            <What />
            <Use />
            <section className="banner_light padd_sec">
                <BannerSection
                    backgroundImage={BannerwithButtonBg}
                    title={
                        <>
                            We help SaaS and platform companies turn partner needs into production-ready plugins—secure, scalable, and instantly deployable.
                        </>
                    }
                    buttonText="Request Checklist"
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
                    lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?"
                    link="#"
                />
            </div>
        </>
    )

}

export default page


