"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SmartDevelopmentMatters() {
  return (
    <div className="w-[34.5rem] h-[23.3rem] flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-44 h-44 bg-blue-800 absolute top-7 left-52 rotate-45 rounded-4xl text-white group hover:scale-[103%] transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center space-y-1.5 flex flex-col justify-center items-center p-5">
          <p className="text-3xl font-bold">40%</p>
          <p>of critical bugs found post-release</p>
        </div>
        <div className="-rotate-45 absolute -top-9 -left-[2.35rem] group-hover:scale-[97%] transition-all">
          <svg
            width="244"
            height="259"
            viewBox="0 0 244 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M167.636 15.7241L205.309 53.4206C206.074 54.1856 206.074 55.4274 205.309 56.1952C204.545 56.9602 203.303 56.9602 202.536 56.1952L164.863 18.4987C145.439 -0.936754 113.831 -0.936754 94.4043 18.4987L19.0571 93.8916C-0.36662 113.327 -0.36662 144.954 19.0571 164.393L94.4043 239.786C113.828 259.221 145.436 259.221 164.863 239.786L239.933 164.67C240.697 163.905 241.938 163.905 242.705 164.67C243.473 165.435 243.47 166.677 242.705 167.445L167.636 242.56C146.683 263.526 112.587 263.526 91.6341 242.56L16.2869 167.167C-4.66594 146.202 -4.66594 112.085 16.2869 91.1197L91.6368 15.7241C112.59 -5.24138 146.685 -5.24138 167.638 15.7241H167.636Z"
              fill="#2E3092"
            />
          </svg>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-44 h-44 bg-[linear-gradient(135deg,#2E3092_20%,#BA0007_115%)] absolute bottom-6 left-[3.65rem] rotate-45 rounded-4xl text-white hover:scale-[103%] group transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center space-y-1.5 flex flex-col justify-center items-center p-5">
          <p className="text-3xl font-bold">35%</p>
          <p>drop in rework for Calsoft clients during the first 3 sprints.</p>
        </div>
        <div className="-rotate-45 absolute bottom-4 -left-[2.6rem] group-hover:scale-[97%] transition-all group-hover:bottom-[15px]">
          <svg
            width="392"
            height="206"
            viewBox="0 0 392 206"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7146 114.83L91.0619 190.223C112.015 211.188 146.11 211.188 167.063 190.223L242.133 115.107C261.557 95.6718 293.165 95.6691 312.592 115.107L387.939 190.5C388.703 191.265 389.944 191.265 390.712 190.5C391.479 189.735 391.476 188.493 390.712 187.726L315.365 112.333C294.412 91.3671 260.316 91.3671 239.363 112.333L164.293 187.448C144.867 206.886 113.261 206.884 93.8347 187.448L18.4875 112.055C-0.936187 92.6197 -0.93888 60.9923 18.4875 41.5542L56.0211 3.99779C56.7857 3.23276 56.7857 1.99094 56.0211 1.22322C55.2566 0.455498 54.0155 0.458191 53.2482 1.22322L15.7146 38.7796C-5.23821 59.7451 -5.23821 93.8615 15.7146 114.827V114.83Z"
              fill="url(#paint0_linear_11513_1165)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11513_1165"
                x1="195.643"
                y1="0.648437"
                x2="195.643"
                y2="225.404"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.490396" stopColor="#2E3092" />
                <stop offset="1" stopColor="#BA0007" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-44 h-44 bg-[linear-gradient(135deg,#2E3092_30%,#BA0007_105%)] absolute bottom-6 right-[1rem] rotate-45 rounded-4xl text-white group hover:scale-[103%] transition-all"
      >
        <div className="w-full h-full -rotate-45 text-center flex flex-col justify-center items-center p-6">
          <p className="text-[29px] font-bold">60%</p>
          <p className="text-[15.5px]">
            of QA time is wasted on repeated manual tests
          </p>
        </div>
        <div className="-rotate-45 absolute -bottom-[2.35rem] -right-10 group hover:scale-[97%] transition-all">
          <svg
            width="243"
            height="260"
            viewBox="0 0 243 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M151.94 16.6721L227.287 92.065C248.24 113.031 248.24 147.147 227.287 168.113L151.94 243.505C130.987 264.471 96.8911 264.471 75.9382 243.505L0.591001 168.113C-0.173563 167.347 -0.173563 166.106 0.591001 165.338C1.35556 164.573 2.59665 164.573 3.3639 165.338L78.7111 240.731C98.1375 260.169 129.743 260.166 149.169 240.731L224.517 165.338C243.94 145.902 243.943 114.275 224.517 94.8369L149.169 19.444C129.743 0.005876 98.1375 0.00857031 78.7111 19.444L3.64117 94.5595C2.8766 95.3245 1.63555 95.3245 0.868298 94.5595C0.101042 93.7944 0.103734 92.5526 0.868298 91.7849L75.9382 16.6694C96.8911 -4.29607 130.987 -4.29607 151.94 16.6694V16.6721Z"
              fill="url(#paint0_linear_11513_1164)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11513_1164"
                x1="121.51"
                y1="259.23"
                x2="121.51"
                y2="0.945312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BA0007" />
                <stop offset="0.499616" stopColor="#2E3092" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
