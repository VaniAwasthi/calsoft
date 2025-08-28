"use client"
import { BannerInfo } from '@/app/component/infographic/BannerTabsFilter'
import { PressReleaseCard } from '@/app/component/press-release/PressReleaseCards'
import React from 'react'
import Banner from "../../assets/insights/industry-report.webp"
import { PostcastSec } from '@/app/component/podcast/PodcastSec'

const Page = () => {
  return (
    <>
     <BannerInfo heading="" BannerBg={Banner} />
    <PostcastSec/> 
    </>
  )
}

export default Page