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
