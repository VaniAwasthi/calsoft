"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import tabImg from "@/app/assets/caltia/TabContentImg.webp";
import BookMeeting from "@/app/component/utilities/BookMeeting";
import meeting from "@/app/assets/caltia/meeting.webp";

export default function TabsComponent({
  tabsData = [
    {
      id: "predictive-test",
      title: "Predictive Test\n Recommendation",
      content: {
        img: tabImg,
        features: [
          "Intelligently selects the most relevant tests based on code changes using predictive test analytics",
          "Executes essential test subsets, reducing regression time",
          "Ensure efficient and optimized testing cycles",
          "Accelerates release cycles and lowers infrastructure costs with automated regression testing",
        ],
      },
    },
    {
      id: "intuitive-interface",
      title: "Intuitive Interface\n and Reporting",
      content: {
        img: tabImg,
        features: [
          "User-friendly dashboard with comprehensive test analytics",
          "Real-time reporting and visualization of test results",
          "Customizable reports and metrics tracking",
          "Easy-to-understand test coverage and performance insights",
        ],
      },
    },
    {
      id: "zero-touch",
      title: "Zero-Touch\n Workflow",
      content: {
        img: tabImg,
        features: [
          "Fully automated testing pipeline with minimal manual intervention",
          "Seamless integration with existing development workflows",
          "Automatic test execution on code commits and deployments",
          "Self-healing test maintenance and optimization",
        ],
      },
    },
    {
      id: "easy-integration",
      title: "Easy Integration with\n DevOps Pipeline",
      content: {
        img: tabImg,
        features: [
          "Compatible with popular CI/CD tools and platforms",
          "Simple setup and configuration process",
          "API-first approach for custom integrations",
          "Support for multiple deployment environments",
        ],
      },
    },
    {
      id: "programming-language",
      title: "Programming language\n and Domain Agnostic",
      content: {
        img: tabImg,
        features: [
          "Support for multiple programming languages and frameworks",
          "Domain-independent testing capabilities",
          "Flexible test execution across different technology stacks",
          "Universal compatibility with various application types",
        ],
      },
    },
    {
      id: "on-prem",
      title: "On-Prem Solution",
      content: {
        img: tabImg,
        features: [
          "Complete on-premises deployment option",
          "Full data control and security compliance",
          "No external dependencies or cloud requirements",
          "Customizable infrastructure and scaling options",
        ],
      },
    },
    {
      id: "optimizing-quality",
      title: "Optimizing Software\n Quality Assurance",
      content: {
        img: tabImg,
        features: [
          "Advanced quality metrics and analysis",
          "Continuous improvement recommendations",
          "Risk assessment and mitigation strategies",
          "Comprehensive quality assurance automation",
        ],
      },
    },
  ],
}) {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="flex flex-col gap-y-5">
        <div className="mt-8 mb-5">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[38px] font-semibold bg-[linear-gradient(to_right,#2E3092_0%,#ED1C24_50%)] bg-clip-text text-transparent container"
          >
            One Platform. Multiple Features. Smarter Testing
          </motion.p>
        </div>
        {/* Tab Headers */}
        <div className="overflow-x-auto h-[6.5rem] [scrollbar-height:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative container">
          <div className="flex min-w-max gap-3">
            {tabsData.map((tab, idx) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative whitespace-pre-line ${
                  activeTab === tab.id
                    ? "bg-[#2e3092] text-white scale-105"
                    : "bg-[#f4f4f4] text-[#4e4e4e] hover:bg-[#f3f3f3]"
                }`}
              >
                {tab.title}
                {/* Triangle indicator */}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#2e3092]"></div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-[#f4f4f4] min-h-[400px] p-8">
          <div className="flex flex-col lg:flex-row gap-8 container">
            {/* Left side - Features */}
            <div className="flex-1">
              <div className="space-y-6">
                {activeTabData?.content.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-[#4e4e4e] text-lg leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Dashboard mockup */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:h-[350px] flex items-center justify-center">
                <Image
                  src={activeTabData.content.img}
                  alt="Dashboard Interface"
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14">
        <div className="container">
          <BookMeeting
            img={meeting}
            title="Cut testing time by 60% with CalTIA."
          />
        </div>
      </div>
    </>
  );
}
