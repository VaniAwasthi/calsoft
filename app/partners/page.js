import React from 'react'
import { HeroSection } from '../component/newpaper/Newpaper'
import partnerBanner from "../assets/partner/partnerRight.webp"
import { ShareSection } from '../component/whitepaper/expanPage/WhitepaperReadMore'
import Partnerships from '../component/partners/PartnerListing'

const Page = () => {
  return (
    <>
     <HeroSection
     bgmainClass='!h-[500px]'
            title={"Powering Ahead, Together"}
        
            desc={
              "Our alliances with global technology giants, innovators, and disruptors help us provide value to every business relationship."
            }
            isInput={false}
            rightImage={partnerBanner}
          />
                <ShareSection/>
                <Partnerships/>
          
    </>
  )
}

export default Page
