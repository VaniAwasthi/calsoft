import Image from "next/image";
import React from "react";
import WhoWeAre1 from "../../assets/about-us/WhoWeAre1.webp";

export default function WhoWeAre() {
  const data = [
    {
      number: "25+",
      desc: "Years in digital engineering and AI",
    },
    {
      number: "20+",
      desc: "Fortune 500 clients",
    },
    {
      number: "1500+",
      desc: "Global Engineers",
    },
    {
      number: "10+",
      desc: "Technology and platform alliances",
    },
  ];
  return (
    <div className="text-black container">
      <div className="space-y-7 px-4 my-6">
        <p className="text-3xl font-semibold">Who we are</p>
        <div className="space-y-5 font-medium">
          <p>
            Calsoft is an engineering-led digital product partner for global
            ISVs and tech-driven enterprises. Since 1998, we’ve helped customers
            build platforms, modernize systems, and scale with confidence,
            across cloud, AI, and connected ecosystems.
          </p>
          <p>
            With engineering roots in Silicon Valley and delivery strength in
            India, we operate at the intersection of product development,
            intelligent automation, and secure digital transformation.
          </p>
        </div>
      </div>

      <div className="relative md:rounded-lg overflow-hidden md:my-10">
        {/* Image */}
        <Image
          src={WhoWeAre1}
          alt="Analytics data"
          className="w-full h-[32rem] sm:h-[30rem] md:h-72 object-cover z-0"
        />
        <div className="absolute top-0 h-full w-full bg-[#14114467] z-10" />
        <div className="absolute top-0 w-full h-full z-20 flex flex-col md:flex-row md:items-center items-start justify-center gap-6 text-white md:py-20 lg:py-10 md:px-18 py-7 sm:px-12 pl-4 px-2">
          {data.map((ele, idx) => {
            return (
              <>
                {/* Desktop view */}
                <div className="h-full flex-col md:flex hidden gap-3 justify-evenly">
                  <p className="text-5xl lg:text-7xl font-medium">
                    {ele.number}
                  </p>
                  <p className="text-xl lg:text-3xl font-light">{ele.desc}</p>
                </div>
                {/* Mobile view */}
                <div className="flex justify-between w-full md:hidden gap-3">
                  <p className="text-[2.5rem] sm:text-5xl lg:text-7xl font-medium">
                    {ele.number}
                  </p>
                  <div className="flex justify-start w-[60%] items-center">
                    <p className="text-[1.25rem] lg:text-3xl font-light justify-self-end">
                      {ele.desc}
                    </p>
                  </div>
                </div>
                {idx + 1 != data.length && (
                  <div className="bg-white w-px h-[60%] md:block hidden" />
                )}
                {idx + 1 != data.length && (
                  <div className="bg-white w-[60%] h-px md:hidden self-end" />
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="md:h-8" />
    </div>
  );
}
