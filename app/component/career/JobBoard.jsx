"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import JobApplicationModal from "./JobForm";

export default function JobBoard({ jobData }) {
  const [expandedJob, setExpandedJob] = useState(jobData[0].id);
  const [isModalOpenForJobId, setIsModalOpenForJobId] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const headerVariants = {
    collapsed: {
      backgroundColor: "transparent",
      borderRadius: "0px",
    },
    expanded: {
      backgroundColor: "#2e3092",
      borderRadius: "0px",
    },
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    collapsed: {
      rotate: 0,
      transition: { duration: 0.2 },
    },
    expanded: {
      rotate: 90,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Job Accordion */}
      <div className="">
        {/* <div className="px-8"> */}
        {jobData.map((job, index) => {
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="mb-0.5"
            >
              {/* Job Header - Clickable */}
              <motion.div
                onClick={() => toggleJob(job.id)}
                variants={headerVariants}
                animate={expandedJob === job.id ? "expanded" : "collapsed"}
                whileHover={{ scale: 1.001 }}
                className=""
              >
                <div className="py-5">
                  <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center cursor-pointer transition-colors duration-300 container">
                    <div
                      className={`text-base font-medium transition-colors duration-300 ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.position}
                    </div>
                    <div
                      className={`text-base transition-colors duration-300 hidden md:block ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.location}
                    </div>
                    <div
                      className={`text-base transition-colors duration-300 hidden md:block ${
                        expandedJob === job.id ? "text-white" : "text-black"
                      }`}
                    >
                      {job.type}
                    </div>
                    <div className="flex justify-end">
                      <motion.button
                        variants={iconVariants}
                        animate={
                          expandedJob === job.id ? "expanded" : "collapsed"
                        }
                        className={`bg-transparent border-none text-xl cursor-pointer transition-colors duration-300 ${
                          expandedJob === job.id
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >
                        <svg
                          width="48"
                          height="47"
                          viewBox="0 0 48 47"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="24"
                            cy="23.0691"
                            rx="24"
                            ry="23.0691"
                            fill="#E1E1E1"
                          />
                          {expandedJob !== job.id && (
                            <line
                              x1="12"
                              y1="22.5693"
                              x2="36"
                              y2="22.5693"
                              stroke="black"
                            />
                          )}
                          <line
                            x1="23.5"
                            y1="34.6035"
                            x2="23.5"
                            y2="11.5344"
                            stroke="black"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              {/* Content-width Divider - Only show if not expanded and not last item */}
              {expandedJob !== job.id && index < jobData.length - 1 && (
                <div className="px-8 sm:px-12 md:px-15">
                  <div className="border-b border-gray-300"></div>
                </div>
              )}

              {/* Expanded Job Details - Full Width */}
              <AnimatePresence>
                {expandedJob === job.id && (
                  <motion.div
                    variants={contentVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="w-full relative bg-[#2e3092] overflow-hidden"
                    style={{ borderRadius: "0px" }}
                  >
                    {/* Content Container - Centered with max width */}
                    <div className="px-8 sm:px-12 md:px-15">
                      {/* Job Details */}
                      <div className="py-8">
                        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-2.5">
                                Company Description:
                              </h3>
                              <p className="text-white text-sm leading-6 m-0">
                                {job.companyDescription}
                              </p>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-4">
                                Qualifications:
                              </h3>
                              <ol className="text-white text-sm leading-6 pl-5 m-0">
                                {job.qualifications.map((qual, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.2 + index * 0.05,
                                    }}
                                  >
                                    {qual}
                                  </motion.li>
                                ))}
                              </ol>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-white text-base font-semibold mb-2.5">
                                Role Description
                              </h3>
                              <p className="text-white text-sm leading-6 m-0 mb-4">
                                {job.roleDescription}
                              </p>
                            </div>

                            <div className="mb-8">
                              <h3 className="text-white text-base font-semibold mb-4">
                                Responsibilities
                              </h3>
                              <ul className="text-white text-sm leading-6 pl-5 m-0">
                                {job.responsibilities.map((resp, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: 0.4 + index * 0.05,
                                    }}
                                  >
                                    {resp}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <motion.button
                              onClick={() => setIsModalOpenForJobId(job.id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="bg-white text-[#2e3092] border-none py-3 px-8 rounded-full text-sm font-semibold cursor-pointer flex items-center gap-2"
                            >
                              Apply Now →
                            </motion.button>
                            <JobApplicationModal
                              isOpen={isModalOpenForJobId === job.id}
                              onClose={() => setIsModalOpenForJobId(null)}
                              jobTitle={job.position}
                            />
                          </motion.div>

                          {/* Image Grid */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="hidden md:grid grid-cols-2 gap-4"
                          >
                            {job.images.map((image, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  //   delay: 0.3 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="relative aspect-square rounded-lg overflow-hidden"
                              >
                                <Image
                                  src={image.src}
                                  alt={image.title}
                                  className="w-auto h-full object-cover z-0"
                                />
                                <div className="absolute top-0 w-full h-full text-white font-medium bg-[#00000059] z-10 p-4 flex justify-center items-end">
                                  {image.title}
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Content-width Divider after expanded content - Only show if not last item */}
              {expandedJob === job.id && index < jobData.length - 1 && (
                <div className="px-5 sm:px-7 md:px-10 mt-0.5">
                  <div className="border-b border-gray-300"></div>
                </div>
              )}
            </motion.div>
          );
        })}
        {/* </div> */}
      </div>
      <div className="h-8" />
    </div>
  );
}
