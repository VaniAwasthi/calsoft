"use client";

import { motion } from "framer-motion";

function StatShape({ title, subtitle, position, delay = 0 }) {
  const getShapeStyles = () => {
    switch (position) {
      case "top-left":
        return {
          borderTopLeftRadius: "9999px",
          borderBottomLeftRadius: "9999px",
          borderTopRightRadius: "9999px",
          borderBottomRightRadius: "0px",
        };
      case "top-right":
        return {
          borderTopLeftRadius: "9999px",
          borderBottomLeftRadius: "0px",
          borderTopRightRadius: "9999px",
          borderBottomRightRadius: "9999px",
        };
      case "bottom":
        return {
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "9999px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "9999px",
        };
    }
  };

  const getOuterGradient = () => {
    switch (position) {
      case "top-left":
        return "bg-gradient-to-b from-[#2E3092] to-[#ED1C24]";
      case "top-right":
        return "bg-gradient-to-b from-[#2E3092] to-[#ED1C24]";
      case "bottom":
        return "bg-gradient-to-b from-[#2E3092] to-[#ED1C24]";
    }
  };

  const getInnerGradient = () => {
    switch (position) {
      case "top-left":
      case "top-right":
        return "bg-[#2E3092]";
      case "bottom":
        return "bg-gradient-to-b from-[#2E3092] to-[#ED1C24]";
    }
  };

  const shapeStyles = getShapeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full h-full"
    >
      <div
        className={`w-full h-full ${getOuterGradient()} p-[2px] sm:p-[3px]`}
        style={shapeStyles}
      >
        <div
          className="w-full h-full bg-white p-[4px] sm:p-[6px]"
          style={shapeStyles}
        >
          <div
            className={`w-full h-full ${getInnerGradient()} flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8`}
            style={shapeStyles}
          >
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1 sm:mb-2">
              {title}
            </h2>
            <p className="text-white text-sm sm:text-base lg:text-lg font-light leading-tight">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsDisplay() {
  return (
    <div className="w-full mx-auto">
      {/* Top row - two shapes side by side */}
      <div className="flex mb-4">
        <div className="w-1/2 h-48 pr-2">
          <StatShape
            title="1 in 3"
            subtitle="outages are caused by bad deploys"
            position="top-left"
            delay={0.2}
          />
        </div>
        <div className="w-1/2 h-48 pl-2">
          <StatShape
            title="70%"
            subtitle="of DevOps time is spent on environment issues"
            position="top-right"
            delay={0.4}
          />
        </div>
      </div>

      {/* Bottom row - single centered shape */}
      <div className="flex justify-center">
        <div className="w-2/3 h-48">
          <StatShape
            title="45%"
            subtitle="decrease in incident volume for Calsoft clients in 90 days."
            position="bottom"
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
}
