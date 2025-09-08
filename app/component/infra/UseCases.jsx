"use client";

import Image from "next/image";
import UseCases from "../../assets/infra/UseCases.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Component({
  title = "Where It Works Best.",
  desc = "Our Infrastructure Roadmap services have unlocked outcomes for:",
  useCases = [
    "ISVs migrating monoliths to containerized microservices",
    "Healthcare firms ensuring HIPAA-aligned infra blueprints",
    "FinTechs building cloud DR strategy with 99.99% uptime SLAs",
    "Retail giants integrating edge & cloud workloads across geos",
    "Product companies needing DevOps-first infra planning",
  ],
}) {
  return (
    <div id="use-cases" className="bg-[#ffffff] px-6">
      <div className="container">
        <div className="h-8" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Content */}
            <div className="space-y-2 w-[100%]">
              {/* Header */}
              <div className=" mb-5">
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
                  <h3 className="text-3xl font-bold text-[#000000]">
                    {title}
                  </h3>
                  <p className="text-lg text-[#000000] leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              </div>

              {/* Use Cases Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First row - 3 cards */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {useCases.slice(0, 3).map((useCase, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="p-0.5 rounded-lg bg-gradient-to-t from-[#ba0007] to-[#2e3092] hover:scale-105 transition-all"
                    >
                      <div className="bg-[#ffffff] rounded-[calc(0.5rem-2px)] p-6 h-full space-y-4">
                        <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-[#ffffff]" />
                        </div>
                        <p className="text-[#000000] font-medium leading-tight">
                          {useCase}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Second row - 2 cards */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                  {useCases.slice(3, 5).map((useCase, idx) => (
                    <motion.div
                      key={idx + 3}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="p-0.5 rounded-lg bg-gradient-to-t from-[#ba0007] to-[#2e3092] hover:scale-105 transition-all"
                    >
                      <div className="bg-[#ffffff] rounded-[calc(0.5rem-2px)] p-6 h-full space-y-4">
                        <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-[#ffffff]" />
                        </div>
                        <p className="text-[#000000] font-medium leading-tight">
                          {useCase}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="pt-4"
              >
                <ButtonLayout
                  text={"Request Use Cases"}
                  image={buttonImage}
                  hoverImage={buttonImage}
                  className={"w-fit"}
                />
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-[50%] h-[30rem] lg:h-auto overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src={UseCases}
                alt="Team collaborating around a laptop in a modern office setting"
                // width={600}
                // height={600}
                className="w-full h-full object-cover object-[center_20%] lg:object-center"
              />
            </motion.div>
          </div>
        </div>
        <div className="h-8" />
      </div>
    </div>
  );
}
