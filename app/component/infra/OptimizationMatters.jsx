"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OptimizationMatters({
  data = [
    "32% of cloud spend is wasted annually (Flexera)",
    "Shadow IT and untagged workloads cause billing blind spots",
    "Static sizing and legacy procurement models ignore elasticity",
    "FinOps alignment is often missing between engineering and finance",
    "Reserved instances go underutilized due to poor workload forecasting",
  ],
}) {
  return (
    <div className="xl:w-[40rem] flex justify-center py-8">
      <div className="relative w-[37rem] md:w-[40rem] h-72 md:h-[23.55rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 -left-[6.5rem] hover:scale-105 transition-all"
        >
          <div className="relative flex justify-center items-center">
            <svg
              width="232"
              height="261"
              viewBox="0 0 232 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.523 0.636719L0.0234375 144.555H19.343C18.3997 150.079 17.8917 155.749 17.8917 161.549C17.8917 216.285 61.6101 260.637 115.523 260.637C169.437 260.637 213.155 216.266 213.155 161.549C213.155 155.749 212.629 150.079 211.704 144.555H231.023L115.523 0.636719Z"
                fill="url(#paint0_linear_152_7)"
              />
              <path
                d="M204.346 164.071C206.448 114.445 168.482 72.4864 119.547 70.3544C70.6114 68.2224 29.2371 106.724 27.1347 156.35C25.0324 205.976 62.9981 247.934 111.934 250.066C160.869 252.198 202.243 213.697 204.346 164.071Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_152_7"
                  x1="115.523"
                  y1="0.636719"
                  x2="115.523"
                  y2="302.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.451923" stopColor="#2E3092" />
                  <stop offset="1" stopColor="#BA0007" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-36 absolute bottom-16 text-center font-semibold">
              {data[0]}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 left-[1.65rem] hover:scale-105 transition-all"
        >
          <div className="relative flex justify-center items-center">
            <svg
              width="232"
              height="261"
              viewBox="0 0 232 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-y-[-1]"
            >
              <path
                d="M115.523 0.636719L0.0234375 144.555H19.343C18.3997 150.079 17.8917 155.749 17.8917 161.549C17.8917 216.285 61.6101 260.637 115.523 260.637C169.437 260.637 213.155 216.266 213.155 161.549C213.155 155.749 212.629 150.079 211.704 144.555H231.023L115.523 0.636719Z"
                fill="url(#paint0_linear_152_7)"
              />
              <path
                d="M204.346 164.071C206.448 114.445 168.482 72.4864 119.547 70.3544C70.6114 68.2224 29.2371 106.724 27.1347 156.35C25.0324 205.976 62.9981 247.934 111.934 250.066C160.869 252.198 202.243 213.697 204.346 164.071Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_152_7"
                  x1="115.523"
                  y1="0.636719"
                  x2="115.523"
                  y2="302.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.451923" stopColor="#2E3092" />
                  <stop offset="1" stopColor="#BA0007" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-36 absolute top-12 text-center font-semibold">
              {data[1]}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 left-[9.75rem] hover:scale-105 transition-all"
        >
          <div className="relative flex justify-center items-center">
            <svg
              width="232"
              height="261"
              viewBox="0 0 232 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.523 0.636719L0.0234375 144.555H19.343C18.3997 150.079 17.8917 155.749 17.8917 161.549C17.8917 216.285 61.6101 260.637 115.523 260.637C169.437 260.637 213.155 216.266 213.155 161.549C213.155 155.749 212.629 150.079 211.704 144.555H231.023L115.523 0.636719Z"
                fill="url(#paint0_linear_152_7)"
              />
              <path
                d="M204.346 164.071C206.448 114.445 168.482 72.4864 119.547 70.3544C70.6114 68.2224 29.2371 106.724 27.1347 156.35C25.0324 205.976 62.9981 247.934 111.934 250.066C160.869 252.198 202.243 213.697 204.346 164.071Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_152_7"
                  x1="115.523"
                  y1="0.636719"
                  x2="115.523"
                  y2="302.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.451923" stopColor="#2E3092" />
                  <stop offset="1" stopColor="#BA0007" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-36 absolute bottom-9 text-center font-semibold">
              {data[2]}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 left-[17.9rem] hover:scale-105 transition-all"
        >
          <div className="relative flex justify-center items-center">
            <svg
              width="232"
              height="261"
              viewBox="0 0 232 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-y-[-1]"
            >
              <path
                d="M115.523 0.636719L0.0234375 144.555H19.343C18.3997 150.079 17.8917 155.749 17.8917 161.549C17.8917 216.285 61.6101 260.637 115.523 260.637C169.437 260.637 213.155 216.266 213.155 161.549C213.155 155.749 212.629 150.079 211.704 144.555H231.023L115.523 0.636719Z"
                fill="url(#paint0_linear_152_7)"
              />
              <path
                d="M204.346 164.071C206.448 114.445 168.482 72.4864 119.547 70.3544C70.6114 68.2224 29.2371 106.724 27.1347 156.35C25.0324 205.976 62.9981 247.934 111.934 250.066C160.869 252.198 202.243 213.697 204.346 164.071Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_152_7"
                  x1="115.523"
                  y1="0.636719"
                  x2="115.523"
                  y2="302.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.451923" stopColor="#2E3092" />
                  <stop offset="1" stopColor="#BA0007" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-36 absolute top-12 text-center font-semibold">
              {data[3]}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 left-[26rem] hover:scale-105 transition-all"
        >
          <div className="relative flex justify-center items-center">
            <svg
              width="232"
              height="261"
              viewBox="0 0 232 261"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.523 0.636719L0.0234375 144.555H19.343C18.3997 150.079 17.8917 155.749 17.8917 161.549C17.8917 216.285 61.6101 260.637 115.523 260.637C169.437 260.637 213.155 216.266 213.155 161.549C213.155 155.749 212.629 150.079 211.704 144.555H231.023L115.523 0.636719Z"
                fill="url(#paint0_linear_152_7)"
              />
              <path
                d="M204.346 164.071C206.448 114.445 168.482 72.4864 119.547 70.3544C70.6114 68.2224 29.2371 106.724 27.1347 156.35C25.0324 205.976 62.9981 247.934 111.934 250.066C160.869 252.198 202.243 213.697 204.346 164.071Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_152_7"
                  x1="115.523"
                  y1="0.636719"
                  x2="115.523"
                  y2="302.612"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.451923" stopColor="#2E3092" />
                  <stop offset="1" stopColor="#BA0007" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-36 absolute bottom-10 text-center font-semibold">
              {data[4]}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
