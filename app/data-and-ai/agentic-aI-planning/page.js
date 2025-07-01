import React from 'react'
import { AgenticBanner, AgenticChallengeSec, AiOopsSec, LifecycleSec, MonitorSec, UseSec } from '@/app/component/AgenticAIPlanning/AgenticAIPlanning'
import { BannerSection } from '@/app/component/utilities/InfraSectorSec'
import BannerwithButtonBg from "../../assets/DigitalEngineering/Product/BannerwithButton.webp";
import { ContactSecDataAi } from '@/app/component/utilities/ChallengeSolutionDataAi';



function page() {
    return (
        <>
            <AgenticBanner />
            <AgenticChallengeSec />
            <AiOopsSec />
            <UseSec />
            <BannerSection
                backgroundImage={BannerwithButtonBg}
                title={
                    <>
                        Deploy AI agents with built-in oversight,
                        <br className="hidden md:block" />
                        we help you scale responsibly
                    </>
                }
                buttonText="Know More"
                buttonLink="#"
            />
            <MonitorSec/>
            <LifecycleSec/>
            <ContactSecDataAi
                BoldContent="Let’s talk!"
                lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
                link="#"
            />
        </>
    )
}

export default page