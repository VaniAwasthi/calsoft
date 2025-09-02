"use client";

import Image from "next/image";
import React from "react";
import BgImage from "../../assets/career/Bg_LifeAtCalsoft.webp";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import Life_1 from "../../assets/career/Life_1.webp";
import Life_2 from "../../assets/career/Life_2.webp";
import Life_3 from "../../assets/career/Life_3.webp";
import { motion } from "framer-motion";

// function ButtonLayout({ link, text, image, hoverImage }) {
//   return (
//     <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
//       <span>{text}</span>
//       <Image src={image || "/placeholder.svg"} alt="" width={20} height={20} />
//     </button>
//   );
// }

export default function LifeAtCalsoft() {
  return (
    <div className="relative lg:h-auto">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={BgImage || "/placeholder.svg"}
          alt="Life at Calsoft background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="relative z-10 w-full h-full py-4 sm:py-6 md:py-8 lg:py-12 xl:py-20 text-white">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-screen lg:min-h-0">
            {/* Left Content */}
            <div className="flex-1 lg:w-[44%] space-y-6 md:space-y-8 xl:space-y-12 pt-8 lg:pt-12">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                Life @Calsoft
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed max-w-2xl"
              >
                From social gatherings to festivities, our culture is shaped by
                employee-driven experiences.
              </motion.p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
                className="pt-4"
              >
                <ButtonLayout
                  link=""
                  text="Learn More"
                  image={ButtonImage}
                  hoverImage={ButtonImage}
                />
              </motion.div>
            </div>

            {/* Right Images Section */}
            <div className="flex-1 lg:w-[56%] mt-8 lg:mt-0">
              {/* Mobile Layout - Single Column */}
              <div className="lg:hidden space-y-6">
                {/* Image 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative w-full max-w-sm mx-auto"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <div className="absolute inset-0 border-2 border-[#4197EA] rounded-3xl translate-x-3 translate-y-3" />
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                      <Image
                        src={Life_1 || "/placeholder.svg"}
                        alt="Life at Calsoft 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Images 2 & 3 */}
                <div className="flex gap-4 justify-center">
                  {/* Images 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative w-32 sm:w-40"
                  >
                    <div className="relative aspect-square">
                      <div className="absolute inset-0 border-2 border-[#4197EA] rounded-2xl translate-x-2 translate-y-2" />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={Life_2 || "/placeholder.svg"}
                          alt="Life at Calsoft 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Images 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative w-32 sm:w-40"
                  >
                    <div className="relative aspect-square">
                      <div className="absolute inset-0 border-2 border-[#4197EA] rounded-2xl translate-x-2 translate-y-2" />
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={Life_3 || "/placeholder.svg"}
                          alt="Life at Calsoft 3"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Layout - Grid */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-8 xl:gap-x-14 gap-y-6 xl:gap-y-8 h-full">
                {/* Large Image - spans 2 rows */}
                <div className="relative row-span-2 pr-4 pb-4">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-[#4197EA] rounded-4xl translate-x-4 translate-y-4" />
                    <div className="relative w-full h-full rounded-4xl overflow-hidden">
                      <Image
                        src={Life_1 || "/placeholder.svg"}
                        alt="Life at Calsoft 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Medium Image - top right */}
                <div className="relative pr-4 pb-4">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-[#4197EA] rounded-4xl translate-x-3 translate-y-3" />
                    <div className="relative w-full h-full rounded-4xl overflow-hidden">
                      <Image
                        src={Life_2 || "/placeholder.svg"}
                        alt="Life at Calsoft 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Small Image - bottom right */}
                <div className="relative pr-4 pb-4 w-4/5">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-[#4197EA] rounded-4xl translate-x-2 translate-y-4" />
                    <div className="relative w-full h-full rounded-4xl overflow-hidden">
                      <Image
                        src={Life_3 || "/placeholder.svg"}
                        alt="Life at Calsoft 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
