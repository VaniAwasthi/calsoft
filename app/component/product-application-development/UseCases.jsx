"use client";

import Image from "next/image";
import UseCases from "../../assets/infra/UseCases.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import img from "../../assets/infra/agility.webp";
import predict from "../../assets/infra/predictibility.webp";
import { showHubSpotForm } from "../utilities/showHubSpotForm";

export default function Component({
  title = "Where It Works Best.",
  id = "use-cases",
  BussinessId = "",
  description = "Our Infrastructure Roadmap services have unlocked outcomes for:",
  useCaseData = [
    {
      title: "New Product Launch",
      desc: "Define MVP. Select stack. Design for scale.",
    },
    {
      title: "Legacy Modernization",
      desc: "Re-architect monoliths into microservices.",
    },
    {
      title: "Cloud-native Transformation",
      desc: "Design for AWS, Azure, or hybrid deployment.",
    },
  ],
  data = {
    leftSideContent: {
      title: "Beyond Tech- Real Business Outcomes.",
      subTitle: "Enterprises with a documented infrastructure roadmap have:",
      description:
        "Calsoft quantifies ROI for each roadmap milestone —from VM consolidation to cloud-native transitions —and ensures you get board-level buy-in with real data.",
    },
    rightSideContent: [
      {
        title: "35%",
        subTitle: "faster cloud migration cycles",
      },
      {
        title: "18-25%",
        subTitle: "reduction in OpEx via optimized resource usage",
      },
      {
        title: "2X",
        subTitle:
          "better incident response through standardized observability stack",
      },
      {
        title: "Faster",
        subTitle: "innovation cycles with modular, decoupled infra",
      },
    ],
  },
  buttonClick = () => showHubSpotForm("book-a-meeting"),
  buttonClick2,
  bookMeetingData = {
    title: "Reduce design cycle by 30% via architecture-led ideation.",
    buttontext: "Book a Meeting",
  },
}) {
  return (
    <div className="bg-[#ffffff] px-6">
      <div className="h-8" />
      <div className="container space-y-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12 lg:flex-row flex-col items-stretch">
            {/* Left Content */}
            <div className="space-y-2 w-[100%]">
              {/* Header */}
              <div className=" mb-5" id={id}>
                <h2 className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-5">
                  Use Cases
                </h2>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="space-y-1"
                >
                  <h3 className="text-3xl font-bold text-[#000000]">{title}</h3>
                  <p className="text-lg text-[#000000] leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {useCaseData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative w-full h-full p-0.5 bg-[linear-gradient(180deg,#2E3092_0%,#ED1C24_100%)] [clip-path:polygon(100%_0,100%_66%,82%_100%,0_100%,0_0)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <div className="relative w-full h-full p-6 group bg-white [clip-path:polygon(100%_0,100%_66%,82%_100%,0_100%,0_0)] shadow-lg">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,#2E3092_0%,#ED1C24_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [clip-path:polygon(100%_0,100%_66%,82%_100%,0_100%,0_0)]"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h4 className="font-semibold text-2xl mb-2 group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-lg font-light group-hover:text-white transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-[50%] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={UseCases}
                alt="Team collaborating around a laptop in a modern office setting"
                // width={600}
                // height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        {/* Book a meeting */}
        <div
          id="business-value"
          className="w-full h-60 sm:h-40 relative rounded-xl overflow-hidden mt-12"
        >
          <Image
            src={predict}
            alt={"book a meeting"}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
            <div className="w-full h-full flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center items-start gap-5 p-5">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl sm:text-4xl font-medium"
              >
                {bookMeetingData.title}
              </motion.p>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ButtonLayout
                  onClick={buttonClick}
                  text={bookMeetingData.buttontext}
                  className="w-fit whitespace-nowrap"
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Download one pager */}
        <div
          className="w-full h-full relative rounded-xl overflow-hidden"
          id={BussinessId}
        >
          <Image
            src={img}
            alt="agile work culture"
            className="w-full object-cover"
          />
          <div className="absolute top-0 w-full h-full bg-[linear-gradient(90deg,rgba(46,48,146,0.95)_0%,rgba(46,48,146,0.9)_35%,rgba(255,255,255,0.0)_100%)] flex justify-between items-center">
            <div className="w-[65%] h-full text-white">
              <div className="h-full flex gap-8 items-center justify-between">
                {/* Left content */}
                <div className="flex-1 p-10 h-full flex flex-col gap-6 justify-center">
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-3xl font-bold"
                  >
                    {data.leftSideContent.title}
                  </motion.p>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-xl font-semibold"
                  >
                    {data.leftSideContent.subTitle}
                  </motion.p>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-lg"
                  >
                    {data.leftSideContent.description}
                  </motion.p>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ButtonLayout
                      text={"Download One Pager"}
                      onClick={buttonClick2}
                      image={buttonImage}
                      hoverImage={buttonImage}
                      className={"w-fit mt-3"}
                    />
                  </motion.div>
                </div>
                <div className="bg-white w-px h-[70%]" />
                {/* Right Content */}
                <div className="flex-1 flex gap-4 flex-col">
                  {data.rightSideContent.map((ele, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <p className="text-4xl">{ele.title}</p>
                      <p className="text-xl font-light">{ele.subTitle}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="w-[35%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8" />
    </div>
  );
}
