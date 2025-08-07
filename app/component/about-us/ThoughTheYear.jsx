// import Image from "next/image";
// import React from "react";
// // import Path from "../../assets/about-us/Vector.svg";
// import Path from "../../assets/about-us/Vector.png";

// export default function ThoughTheYear() {
//   const data = [
//     {
//       icon: (
//         <svg
//           width="16"
//           height="19"
//           viewBox="0 0 16 19"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M15.823 16.5879H14.9232V9.12675C14.9205 8.91527 14.6468 8.96649 14.4981 8.96153V5.62738V0.330497C14.4981 0.148758 14.3386 6.34286e-05 14.1438 6.34286e-05C13.949 6.34286e-05 13.7896 0.148758 13.7896 0.330497V1.94136L11.2106 3.31184V0.330434C11.2106 0.148694 11.0511 0 10.8563 0C10.6579 0 10.502 0.148694 10.502 0.330434V3.87437C10.495 3.87024 10.5074 8.95893 10.502 8.96147H10.2505C10.1549 8.96147 10.0734 9.03416 10.0734 9.12668V16.5878H9.17713C9.07794 16.5878 9 16.6638 9 16.753V18.8348C9 18.9273 9.07794 19 9.17713 19H15.8229C15.9221 19 16 18.9273 16 18.8348V16.753C16 16.6638 15.9222 16.5879 15.823 16.5879ZM11.2105 7.94713L12.8082 8.79634H11.2105V7.94713ZM13.7895 8.55842L11.5719 7.37878L13.7895 6.19914V8.55842ZM13.7895 2.7024V5.0608L11.571 3.88115L13.7895 2.70151V2.7024ZM13.4291 5.63009C13.4291 5.63092 11.2105 6.80974 11.2105 6.81056V4.45132L13.4291 5.63009Z"
//             fill="#2E3092"
//           />
//           <path
//             d="M5.84827 16.5872H5.08005V9.12394C5.07625 8.91075 4.84016 8.96363 4.71264 8.95867V0.325373C4.70808 -0.102653 4.1137 -0.114224 4.10534 0.325373V1.93753L1.89478 3.3084V0.325289C1.88946 -0.101913 1.29508 -0.114309 1.28748 0.325289V8.95859C1.16374 8.96354 0.923102 8.91231 0.923102 9.12385V16.5871H0.151824C0.0668027 16.5871 0 16.6632 0 16.7524V18.8347C0 18.9273 0.0668027 19 0.151824 19H5.84818C5.9332 19 6 18.9273 6 18.8347V16.7524C6 16.6632 5.9333 16.5872 5.84827 16.5872ZM1.89472 7.94397L3.26418 8.79343H1.89472V7.94397ZM4.10528 8.55545L2.20445 7.37547L4.10528 6.19549V8.55545ZM4.10528 2.69838V5.05661L2.20445 3.87745L4.10528 2.69838ZM3.79709 5.62607C3.79784 5.62689 1.89548 6.80605 1.89472 6.80687V4.44611L3.79709 5.62607Z"
//             fill="#2E3092"
//           />
//         </svg>
//       ),
//       title: "Foundation phase",
//       timeline: "1998–2002",
//     },
//   ];
//   return (
//     <div>
//       <div className="h-10" />
//       <div>
//         <p className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent text-center leading-16">
//           Through the years
//         </p>
//         {/* <div>{Path}</div> */}
//         <Image src={Path} className="w-full" />
//       </div>
//     </div>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Globe,
  Compass,
  PieChart,
  Sun,
  Lightbulb,
  Target,
  Cog,
  FastForward,
} from "lucide-react";
import Image from "next/image";
import Path from "../../assets/about-us/Vector.png";

// Data for the timeline points positioned along the actual path
const timelineData = [
  {
    year: "1998-2002",
    title: "Foundation phase",
    Icon: Users,
    position: { top: "-4.5%", left: "90%" },
    labelAlignment: "right",
  },
  {
    year: "2003-2007",
    title: "Deep-tech specialization",
    Icon: Globe,
    position: { top: "-4%", left: "67%" },
    labelAlignment: "top",
  },
  {
    year: "2008-2012",
    title: "Expansion and maturity",
    Icon: Compass,
    position: { top: "4%", left: "36.2%" },
    labelAlignment: "top",
  },
  {
    year: "2013-2017",
    title: "Broadening the portfolio",
    Icon: PieChart,
    position: { top: "11%", left: "85%" },
    labelAlignment: "left",
  },
  {
    year: "2018-2020",
    title: "Data and automation focus",
    Icon: Sun,
    position: { top: "23%", left: "50%" },
    labelAlignment: "top",
  },
  {
    year: "2021-2023",
    title: "Product-led innovation at scale",
    Icon: Lightbulb,
    position: { top: "31%", left: "23%" },
    labelAlignment: "top",
  },
  {
    year: "2024",
    title: "AI as core strategy",
    Icon: Target,
    position: { top: "39%", left: "65%" },
    labelAlignment: "top",
  },
  {
    year: "2025",
    title: "Consulting-led, vertical expansion",
    Icon: Cog,
    position: { top: "54%", left: "45%" },
    labelAlignment: "top",
  },
  {
    year: "2026 & beyond",
    title: "Looking Ahead",
    Icon: FastForward,
    position: { top: "65%", left: "23%" },
    labelAlignment: "top",
  },
];

const TimelineItemComponent = ({ item, index, isInView }) => {
  const { year, title, Icon, position, labelAlignment } = item;

  const variants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        delay: index * 0.2,
      },
    },
  };

  const getLabelPosition = () => {
    switch (labelAlignment) {
      case "top":
        return "flex-col mb-6";
      case "bottom":
        return "flex-col-reverse mt-6";
      case "left":
        return "flex-row mr-6";
      case "right":
        return "flex-row-reverse ml-6";
      default:
        return "flex-col mb-6";
    }
  };

  const getTextAlignment = () => {
    switch (labelAlignment) {
      case "left":
        return "text-right";
      case "right":
        return "text-left";
      default:
        return "text-center";
    }
  };

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: position.top, left: position.left }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className={`flex items-center ${getLabelPosition()}`}>
        {/* Year and Title */}
        <div className={getTextAlignment()}>
          <p className="font-bold text-xl text-[#2e3092] mb-1 whitespace-nowrap">
            {year}
          </p>
          <p className="text-sm text-gray-700 font-medium max-w-[140px] whitespace-nowrap">
            {title}
          </p>
        </div>

        {/* Timeline Pointer - Always Vertical */}
        <div className="flex flex-col items-center">
          {/* Icon Circle */}
          <div className="w-16 h-16 bg-[#2e3092] rounded-full flex items-center justify-center z-10 shadow-lg border-4 border-white">
            <Icon className="w-8 h-8 text-white" />
          </div>

          {/* Vertical Connector Line - Always the same */}
          <div className="w-1 h-8 bg-[#2e3092] -mt-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: false });

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center p-8 sm:p-16 overflow-hidden">
      {/* Title */}
      <div className="w-full max-w-7xl mb-25">
        <p className="text-4xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent leading-20">
          Through the years
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={ref} className="relative w-full max-w-7xl h-[800px]">
        {/* Background Path Image */}
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center"
          //   style={{
          //     backgroundImage: "url('../../assets/about-us/Vector.png')",
          //     backgroundSize: "100% 100%",
          //   }}
        >
          <Image src={Path} className="w-full h-full" />
        </div>

        {/* Timeline Points */}
        {timelineData.map((item, index) => (
          <TimelineItemComponent
            key={item.year}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}
