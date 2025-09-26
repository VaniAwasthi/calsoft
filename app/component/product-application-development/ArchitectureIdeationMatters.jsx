"use client";

import React from "react";

export default function ArchitectureIdeationMatters() {
  return (
    <div className="w-96 xl:w-full h-[23rem] flex xl:justify-center">
      <div className="relative w-full">
        <div className="absolute top-0 right-[6rem] hover:scale-105 transition-all">
          {/* w-265; h-285 */}
          <svg
            width="212"
            height="228"
            viewBox="0 0 265 285"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256.072 184.792L133.728 284.877H132.163L9.81898 184.792C0.606692 177.25 -1.75678 164.298 4.18867 153.983L73.16 34.5172C85.6391 12.9098 107.992 0 132.94 0C157.888 0 180.252 12.9098 192.72 34.5172L261.692 153.983C267.658 164.298 265.284 177.25 256.072 184.792Z"
              fill="#2E3092"
            />
          </svg>
          <div className="absolute top-8 p-5 flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-4xl font-bold">30%</p>
            <p className="text-lg">fail due to wrong stack</p>
          </div>
        </div>
        <div className="absolute top-[10.4rem] right-[13.4rem] hover:scale-105 transition-all">
          <svg
            width="188"
            height="194"
            viewBox="0 0 236 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M235.811 101.182V219.03C235.811 231.824 225.412 242.234 212.607 242.234H69.1495C44.5484 242.234 22.5103 229.514 10.2098 208.211C-2.09076 186.908 -2.09076 161.456 10.2098 140.153L84.2022 11.9901C87.6161 6.08664 93.425 1.98997 100.127 0.760969C101.513 0.508865 102.921 0.382812 104.307 0.382812C109.612 0.382812 114.812 2.20005 118.982 5.62446L235.801 101.193L235.811 101.182Z"
              fill="url(#paint0_linear_11242_807)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11242_807"
                x1="116.451"
                y1="282.463"
                x2="158.912"
                y2="-10.0634"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BA0007" />
                <stop offset="0.658654" stopColor="#2E3092" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-8 p-5 flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-4xl font-bold">22%</p>
            <p className="text-lg">due to unclear MVP scope</p>
          </div>
        </div>
        <div className="absolute top-[10.4rem] right-0 hover:scale-105 transition-all">
          <svg
            width="188"
            height="194"
            viewBox="0 0 237 244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M227.531 209.694C216.438 228.875 197.593 241.197 176.039 243.718H19.4087C9.97584 241.785 2.51776 234.316 0.584961 224.894V101.311L117.267 5.86838C122.771 1.37253 129.935 -0.476218 136.931 0.794804C143.927 2.07633 149.977 6.34108 153.528 12.4966L227.531 140.66C240.01 162.267 240.01 188.076 227.531 209.694Z"
              fill="url(#paint0_linear_11242_811)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11242_811"
                x1="116.779"
                y1="284.19"
                x2="159.487"
                y2="-10.11"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#BA0007" />
                <stop offset="0.658654" stopColor="#2E3092" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-8 p-5 flex flex-col items-center justify-center gap-2 text-center text-white">
            <p className="text-4xl font-bold">15%</p>
            <p className="text-lg">doverbudget due to bad infra decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
