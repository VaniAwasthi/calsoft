"use client";

import { useRef, useState, useEffect } from "react";
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
import mobilePath from "@/app/assets/about-us/Vector.svg";

const getResponsiveTimelineData = (screenSize) => {
  const baseData = [
    {
      year: "1998-2002",
      title: "Foundation phase",
      Icon: Users,
      // Different positions for different screen sizes
      position: {
        desktop: { top: "-4.5%", left: "90%" },
        tablet: { top: "-6%", left: "85%" },
        mobile: { top: "-2.5%", left: "80%" },
      },
      labelAlignment: {
        desktop: "right",
        tablet: "top",
        mobile: "top",
      },
    },
    {
      year: "2003-2007",
      title: "Deep-tech specialization",
      Icon: Globe,
      position: {
        desktop: { top: "-4%", left: "67%" },
        tablet: { top: "-0.5%", left: "55%" },
        mobile: { top: "4%", left: "28%" },
      },
      labelAlignment: {
        desktop: "top",
        tablet: "left",
        mobile: "left",
      },
    },
    {
      year: "2008-2012",
      title: "Expansion and maturity",
      Icon: Compass,
      position: {
        desktop: { top: "3.5%", left: "41.4%" },
        tablet: { top: "10.5%", left: "60%" },
        mobile: { top: "11%", left: "75%" },
      },
      labelAlignment: {
        desktop: "top",
        tablet: "right",
        mobile: "top",
      },
    },
    {
      year: "2013-2017",
      title: "Broadening the portfolio",
      Icon: PieChart,
      position: {
        desktop: { top: "10%", left: "88%" },
        tablet: { top: "22.5%", left: "70%" },
        mobile: { top: "23%", left: "68%" },
      },
      labelAlignment: {
        desktop: "right",
        tablet: "left",
        mobile: "left",
      },
    },
    {
      year: "2018-2020",
      title: "Data and automation focus",
      Icon: Sun,
      position: {
        desktop: { top: "23%", left: "50%" },
        tablet: { top: "30%", left: "30%" },
        mobile: { top: "30%", left: "38%" },
      },
      labelAlignment: {
        desktop: "left",
        tablet: "top",
        mobile: "top",
      },
    },
    {
      year: "2021-2023",
      title: "Product-led innovation at scale",
      Icon: Lightbulb,
      position: {
        desktop: { top: "28%", left: "22%" },
        tablet: { top: "37%", left: "72%" },
        mobile: { top: "40%", left: "75%" },
      },
      labelAlignment: {
        desktop: "left",
        tablet: "right",
        mobile: "right",
      },
    },
    {
      year: "2024",
      title: "AI as core strategy",
      Icon: Target,
      position: {
        desktop: { top: "39%", left: "74%" },
        tablet: { top: "53%", left: "45%" },
        mobile: { top: "52%", left: "46%" },
      },
      labelAlignment: {
        desktop: "right",
        tablet: "left",
        mobile: "left",
      },
    },
    {
      year: "2025",
      title: "Consulting-led, vertical expansion",
      Icon: Cog,
      position: {
        desktop: { top: "54%", left: "42%" },
        tablet: { top: "62%", left: "50%" },
        mobile: { top: "60%", left: "60%" },
      },
      labelAlignment: {
        desktop: "left",
        tablet: "right",
        mobile: "right",
      },
    },
    {
      year: "2026 & beyond",
      title: "Looking Ahead",
      Icon: FastForward,
      position: {
        desktop: { top: "65%", left: "23%" },
        tablet: { top: "75%", left: "20%" },
        mobile: { top: "70%", left: "20%" },
      },
      labelAlignment: {
        desktop: "left",
        tablet: "right",
        mobile: "top",
      },
    },
  ];

  return baseData.map((item) => ({
    ...item,
    position: item.position[screenSize],
    labelAlignment: item.labelAlignment[screenSize],
  }));
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 520) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

const TimelineItemComponent = ({ item, index, isInView, screenSize }) => {
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
        return "flex-col mb-3 xs:mb-4 lg:mb-6";
      case "bottom":
        return "flex-col-reverse mt-3 xs:mt-4 lg:mt-6";
      case "left":
        return "flex-row mr-3 xs:mr-4 lg:mr-6";
      case "right":
        return "flex-row-reverse ml-3 xs:ml-4 lg:ml-6";
      default:
        return "flex-col mb-3 xs:mb-4 lg:mb-6";
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
      <div className={`flex items-start ${getLabelPosition()} gap-1 xs:gap-2`}>
        {/* Year and Title */}
        <div className={getTextAlignment()}>
          <p className="font-bold text-[10px] xs:text-sm md:text-lg lg:text-xl text-[#2e3092] mb-0.5 xs:mb-1 whitespace-nowrap leading-tight">
            {year}
          </p>
          <p className="text-[10px] xs:text-xs md:text-sm text-gray-700 font-medium leading-tight max-w-[120px] xs:max-w-none">
            {title}
          </p>
        </div>

        {/* Timeline Pointer - Responsive sizes */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 xs:w-12 xs:h-12 lg:w-16 lg:h-16 bg-[#2e3092] rounded-full flex items-center justify-center z-10 shadow-lg border-2 xs:border-3 lg:border-4 border-white">
            <Icon className="w-4 h-4 xs:w-6 xs:h-6 lg:w-8 lg:h-8 text-white" />
          </div>

          <div className="w-0.5 xs:w-0.5 lg:w-1 h-4 xs:h-6 lg:h-8 bg-[#2e3092] -mt-1 xs:-mt-1.5 lg:-mt-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: false });

  const screenSize = useScreenSize();
  const timelineData = getResponsiveTimelineData(screenSize);

  return (
    <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center p-3 xs:p-8 lg:p-16 overflow-hidden">
      <div className="w-full max-w-7xl mb-8 xs:mb-16 lg:mb-25">
        <p className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent leading-tight xs:leading-normal lg:leading-20">
          Through the years
        </p>
      </div>

      <div ref={ref} className="relative w-full max-w-7xl h-[800px]">
        {/* Background Path Image */}
        {/* <div className="absolute inset-0 w-full h-full">
          <Image
            src={Path}
            width={1200}
            height={800}
            className="w-full h-full object-contain"
            alt="Timeline path"
          />
        </div> */}
        <div className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center">
          <Image
            // src={screenSize !== "mobile" ? Path : mobilePath}
            src={Path}
            className="w-full h-full object-fill"
            alt="Timeline path"
          />
        </div>

        {/* Timeline Points */}
        {timelineData.map((item, index) => (
          <TimelineItemComponent
            key={item.year}
            item={item}
            index={index}
            isInView={isInView}
            screenSize={screenSize}
          />
        ))}
      </div>
    </div>
  );
}
