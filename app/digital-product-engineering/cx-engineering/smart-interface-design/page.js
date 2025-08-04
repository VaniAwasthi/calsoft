import React from 'react'
import { Interface, Smart, Start, Step, Uses, What, Why } from '../../../component/SmartInterface/SmartWhyWhatUsesInterfaceStartStep'
import { FooterBg } from '../../../component/utilities/DoCases';
import ContactImg from "../../../assets/Data-Ai/PipeLine/ConnectBg.webp";
import ButtonImage from "../../../assets/home/buttonImg.webp";
import Image from 'next/image';

function page() {
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
                    lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem?  "

                    link="#"
                />
            </div>

        </>
    )
}

export default page