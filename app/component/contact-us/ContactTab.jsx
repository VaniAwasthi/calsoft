"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LocationIcon = () => (
  <svg
    width="34"
    height="47"
    viewBox="0 0 34 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.126 0.0989333C30.8923 1.13702 37.3649 16.1424 30.1009 26.6901C26.736 31.5777 19.9521 41.4155 16.5786 46.2926C13.2032 41.405 6.42122 31.5859 3.05628 26.6922C-5.06491 15.1019 4.03951 -1.43034 18.126 0.0989333ZM9.24716 16.5958C9.28267 20.6186 12.5536 23.8625 16.5786 23.8625C20.6036 23.8625 23.8747 20.6187 23.91 16.5958C23.8745 12.5709 20.6036 9.32906 16.5786 9.32906C12.5536 9.32906 9.28246 12.5707 9.24716 16.5958Z"
      fill="#BA0007"
    />
  </svg>
);

const officeData = {
  India: [
    {
      title: "PUNE (HQ)",
      description:
        "Calsoft Pvt Ltd, S.No.320/1/C, Bavdhan (BK), Near Pune- Bengaluru highway, Mulshi, Pune, Maharashtra 411021",
    },
    {
      title: "HINJEWADI",
      description:
        "Mississippi Block 1.2, 1st Floor, B wing, Embassy office Tech Park, Plot No. PL3, Rajiv Gandhi IT Park, Hinjewadi, Phase 2, Pune - 411057",
    },
    {
      title: "INDORE",
      description:
        "Calsoft Inc. Brilliant Solitaire, Ground floor, Plot No. 6-A, Scheme No. 78-II, Vijay Nagar, Indore - 452010",
    },
    {
      title: "BENGALURU",
      description:
        "Calsoft Pvt Ltd. Mindcomp Tech Park, 1st Floor, A Wing Export Promotion Industrial Park 3, 149, Whitefield, Basavanna Nagar, Bengaluru, Karnataka 560048",
    },
    {
      title: "KOLKATA",
      description:
        "1702, 17th Floor, Calsoft Inc, EcoCentre Ambuja Neotia 4, Street Number 13, EM Block, Sector V, Bidhannagar, West Bengal 700091",
    },
  ],
  USA: [
    {
      title: "SAN JOSE (HQ)",
      description:
        "Calsoft Inc, 2860 Zanker Road, Suite 201, San Jose, CA 95134, United States",
    },
    {
      title: "AUSTIN",
      description:
        "Calsoft Inc, 9442 Capital of Texas Hwy N, Plaza 1, Suite 500, Austin, TX 78759, United States",
    },
    {
      title: "BOSTON",
      description:
        "Calsoft Inc, 101 Federal Street, Suite 1900, Boston, MA 02110, United States",
    },
  ],
};

export default function OurOffices() {
  const [activeTab, setActiveTab] = useState("India");

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-normal text-[#000000] text-center mb-16">
          Our Offices
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex">
            {/* India Tab */}
            <div className="relative">
              <button
                onClick={() => setActiveTab("India")}
                className={`px-16 py-4 text-2xl font-normal transition-colors duration-200 ${
                  activeTab === "India"
                    ? "text-[#000000] border-b-2 border-[#2e3092]"
                    : "text-[#808080] border-b-2 border-[#d9d9d9]"
                }`}
              >
                India
              </button>
              {/* Triangle indicator */}
              {activeTab === "India" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-7">
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2e3092]" />
                </div>
              )}
            </div>

            {/* USA Tab */}
            <div className="relative ml-16">
              <button
                onClick={() => setActiveTab("USA")}
                className={`px-16 py-4 text-2xl font-normal transition-colors duration-200 ${
                  activeTab === "USA"
                    ? "text-[#000000] border-b-2 border-[#2e3092]"
                    : "text-[#808080] border-b-2 border-[#d9d9d9]"
                }`}
              >
                USA
              </button>
              {/* Triangle indicator */}
              {activeTab === "USA" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-7">
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#2e3092]" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeData[activeTab].map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#ffffff] rounded-lg p-8 shadow-sm border border-[#d9d9d9]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <LocationIcon />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">
                    {office.title}
                  </h3>
                  <p className="text-[#808080] text-sm leading-relaxed">
                    {office.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
