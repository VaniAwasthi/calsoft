// import React from "react";
// import Image from "next/image";
// import Career from "../../assets/about-us/Career.webp";
// import Prospects from "../../assets/about-us/Prospects.webp";
// import ButtonImage from "../../assets/home/buttonImg.webp";
// import { motion } from "framer-motion";
// import ButtonLayout from "../utilities/BannerLayout";

"use client";

import Image from "next/image";
import Career from "../../assets/about-us/Career.webp";
import prospect from "../../assets/about-us/Prospects.webp";
import { motion } from "framer-motion";

// export default function BuildSomething() {
//   return (
//     <div className="container">
//       <div>
//         <p className="text-3xl sm:text-4xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent text-center leading-16">
//           Let’s build something scalable together
//         </p>
//       </div>

//       <div>
//         {/* Upper */}
//         <div className="flex bg-[#e4e4e4]">
//           <div className="flex-1">
//             <Image src={Career} className="w-full h-full" />
//           </div>
//           <div className="flex-1 ml-16">
//             <p className="font-semibold text-3xl">Careers</p>
//             <p className="text-2xl">
//               Team up with the best to build for the future, in a place that
//               encourages talent and ambition.
//             </p>
//             <button>Learn More</button>
//           </div>
//         </div>
//         {/* Low */}
//         <div></div>
//       </div>

//       <div className="h-32" />
//     </div>
//     // <div className="max-w-4xl mx-auto flex gap-6 p-6">
//     //   {/* Careers Card */}
//     //   <div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-center p-4">
//     //     <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-center">
//     //       <Image
//     //         src={Career} // Change to your actual image path
//     //         alt="Careers Signpost"
//     //         width={140}
//     //         height={90}
//     //         className="rounded"
//     //         style={{ objectFit: "cover" }}
//     //       />
//     //     </div>
//     //     <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
//     //       <div>
//     //         <h3 className="text-lg font-bold text-gray-900 mb-1">Careers</h3>
//     //         <p className="text-gray-700 text-sm">
//     //           Team up with the best to build for the future, in a place that
//     //           encourages talent and ambition.
//     //         </p>
//     //       </div>
//     //       <button className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full py-2 px-5 font-semibold self-start transition-colors">
//     //         Learn More
//     //       </button>
//     //     </div>
//     //   </div>

//     //   {/* Prospects Card */}
//     //   <div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-center p-4">
//     //     <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-center">
//     //       <Image
//     //         src={Prospects} // Change to your actual image path
//     //         alt="Prospects Magnifier"
//     //         width={140}
//     //         height={90}
//     //         className="rounded"
//     //         style={{ objectFit: "cover" }}
//     //       />
//     //     </div>
//     //     <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
//     //       <div>
//     //         <h3 className="text-lg font-bold text-gray-900 mb-1">Prospects</h3>
//     //         <p className="text-gray-700 text-sm">
//     //           Let's turn complexity into clarity, connect with us to start the
//     //           conversation.
//     //         </p>
//     //       </div>
//     //       <button className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full py-2 px-5 font-semibold self-start transition-colors">
//     //         Learn More
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

export default function CareersPage() {
  return (
    <div className="min-h-screen container">
      <p className="text-4xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent text-center mb-4 leading-20">
        Let’s build something scalable together
      </p>
      <div className="hidden lg:flex flex-col gap-10">
        {/* Top Left - Careers Sign Image */}
        <div className="flex rounded-xl overflow-hidden">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative overflow-hidden flex-1"
          >
            <Image
              src={Career}
              alt="Careers sign against blue sky"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Top Right - Careers Content */}
          <div className="bg-gray-200 flex items-center justify-center flex-1">
            <div className="max-w-md">
              <motion.h1
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-black text-5xl font-bold mb-6"
              >
                Careers
              </motion.h1>
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-black text-lg leading-relaxed mb-8"
              >
                Team up with the best to build for the future, in a place that
                encourages talent and ambition.
              </motion.p>
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Left - Prospects Content */}
        <div className="flex rounded-xl overflow-hidden">
          <div className="bg-gray-200 flex items-center justify-center flex-1">
            <div className="max-w-md">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-black text-5xl font-bold mb-6"
              >
                Prospects
              </motion.h2>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-black text-lg leading-relaxed mb-8"
              >
                Let's turn complexity into clarity, connect with us to start the
                conversation.
              </motion.p>
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Bottom Right - Puzzle/Magnifying Glass Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative overflow-hidden flex-1"
          >
            <Image
              src={prospect}
              alt="Puzzle pieces with magnifying glass and business icons"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout - Stacked Vertically */}
      <div className="lg:hidden">
        {/* Careers Sign Image - Mobile */}
        <div className="relative h-64 rounded-t-xl overflow-hidden">
          <Image
            src={Career}
            alt="Careers sign against blue sky"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Careers Content - Mobile */}
        <div className="bg-gray-200 px-6 py-12">
          <div className="max-w-sm mx-auto">
            <h1 className="text-black text-3xl font-bold mb-4">Careers</h1>
            <p className="text-black text-base leading-relaxed mb-6">
              Team up with the best to build for the future, in a place that
              encourages talent and ambition.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 w-fit transition-colors">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Puzzle/Magnifying Glass Image - Mobile */}
        <div className="relative h-64 overflow-hidden mt-8 rounded-t-xl">
          <Image
            src={prospect}
            alt="Puzzle pieces with magnifying glass and business icons"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Prospects Content - Mobile */}
        <div className="bg-gray-200 px-6 py-12">
          <div className="max-w-sm mx-auto">
            <h2 className="text-black text-3xl font-bold mb-4">Prospects</h2>
            <p className="text-black text-base leading-relaxed mb-6">
              Let's turn complexity into clarity, connect with us to start the
              conversation.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-colors">
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}
