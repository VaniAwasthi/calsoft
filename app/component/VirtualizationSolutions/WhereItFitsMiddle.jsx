"use client";

import React from "react";
import { Card } from "../sustenance/Guesswork";
import { motion } from "framer-motion";

export default function WhereItFits({
  id = "where-it-fits",
  heading = "Where It Fits",
  title1 = "When OpenStack becomes a smart choice",
  title2 = "OpenStack is ideal when:",
  data = [
    {
      heading: null,
      title: null,
      desc: "Inventory current VM footprint, tagging, ownership, idle ratios",
    },
    {
      heading: null,
      title: null,
      desc: "Categorize assets by environment, lifecycle stage, criticality",
    },
    {
      heading: null,
      title: null,
      desc: "Define governance policy, approval flows, tagging schema",
    },
    {
      heading: null,
      title: null,
      desc: "Set rules for cleanup, expiry alerts, cost visibility",
    },
    {
      heading: null,
      title: null,
      desc: "Train stakeholders, integrate with DevOps/ITSM, and monitor dashboards",
    },
  ],
  output = "You’re transitioning from VMware or legacy virtualization platforms",
}) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-6 container">
      <div className="h-8" />
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent">
          {heading}
        </h1>

        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-2xl text-black"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              {title1}
            </h2>
            {title2 && (
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                {title2}
              </p>
            )}
          </motion.div>
          {/* <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"w-fit"}
            />
          </motion.div> */}
        </div>
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 my-10">
            {data.map((ele, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card data={ele} idx={idx} />
              </motion.div>
            ))}
          </div>
          <p className="text-2xl font-medium bg-[#ffffff] bg-[linear-gradient(270deg,rgba(255,255,255,1)_70%,rgba(0,0,0,0.3)_100%)] px-4 py-2.5">
            {output}
          </p>
        </>
      </div>
    </div>
  );
}
