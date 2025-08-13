"use client";

import React from "react";
import ButtonLayout from "../../component/utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import bgshape1 from "../../assets/DigitalEngineering/maturity/shape1.svg";
import bgshape2 from "../../assets/DigitalEngineering/maturity/shape2.svg";
import bgshape3 from "../../assets/DigitalEngineering/maturity/shape3.svg";

export default function WhyItMatters({
  title = "Problem + Solution Fit",
  desc = "Most enterprises operate in a fragmented infra state — with on-prem, cloud-native, and edge setups running in silos. This complexity leads to:",
  buttonText = "Download",
}) {
  const whyItMattersData = {
    heading: "Why It Matters",
    title: "Build Once. Deploy Across Ecosystems.",

    description:
      "With partner ecosystems growing and customers demanding seamless workflows, plugins are no longer optional—they’re a product strategy. But poorly built plugins can cause security risks, UX issues, or slow adoption. Calsoft helps you develop high-performance plugins that drive integration, automation, and business stickiness.",

    buttonText: "Download Case Study",
    link: "#",

    cards: [
      {
        percent: "50%",
        text: "of enterprise buyers expect native plugin support",
        className: "shape1",
        bgshape: bgshape1,
      },
      {
        percent: "70%",
        text: "of SaaS tools with plugin marketplaces grow 2x faster",
        className: "shape2",
        bgshape: bgshape2,
      },
      {
        percent: "40%",
        text: "reduction in time-to- market is achieved by Calsoft clients through our plugin frameworks.",
        className: "shape3",
        bgshape: bgshape3,
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="h-8" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-10">
              <p className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent">
                Why It Matters
              </p>
              <div className="space-y-6">
                <p className="text-3xl font-semibold">{title}</p>
                <p className="text-lg leading-relaxed">{desc}</p>
              </div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="mt-9"
              >
                <ButtonLayout
                  text={"Download Case Study"}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit shadow-2xl"}
                />
              </motion.div>
              <p className="text-2xl font-semibold border border-[#2E3092] border-dashed px-6 py-1.5 rounded-4xl ">
                7 Pitfalls to Avoid in Tech Architecture
              </p>
            </div>

            {/* Right Hexagonal Visualization */}
            {/* <WhyItMatters
              {...whyItMattersData}
              ButtonImage={buttonImage}
              secId="why-it-matters"
            /> */}
            <section
              className={`md:pb-12 pb-0 md:pt-12 pt-6   bg-white`}
              id={secId}
            >
              <div className="container mx-auto px-4 md:px-16">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="flex-1 md:w-2/4"
                  >
                    <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]">
                      {heading}
                    </h2>
                    <h3 className="text-xl md:text-[26px] font-semibold mb-5">
                      {title}
                    </h3>
                    <p
                      className="md:text-base text-sm text-black font-normal"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                    {/* <p className="md:text-base text-sm text-[#2E3092] mb-10 font-normal">
                      {highlight}
                    </p> */}

                    {buttonText && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn"
                      >
                        <ButtonLayout
                          link={whyItMattersData.link}
                          text={buttonText}
                          image={buttonImage}
                          hoverImage={buttonImage}
                        />
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-wrap justify-center gap-4 shape_group md:w-2/4"
                  >
                    {whyItMattersData.cards.map((card, idx) => (
                      <motion.div
                        key={idx}
                        className={`h-[200px] md:h-[240px] bg-gradient-to-br text-white flex pt-8 md:pt-10 items-start justify-center text-center rounded-[2rem] relative transform ${card.className} single_shape bg-contain md:bg-contain bg-no-repeat bg-center`}
                        style={{
                          backgroundImage: `url('${card.bgshape.src}')`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }} // <- Added for mobile tap effect
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                      >
                        <div className="w-[65%] md:w-[40%] mx-auto">
                          <p className="text-[17px] md:text-3xl font-bold pt-[2px] md:pt-0">
                            {card.percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] md:mt-2">
                            {card.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="h-8" />
      </div>
    </>
  );
}
