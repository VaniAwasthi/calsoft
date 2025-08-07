import React from "react";
import WeWorkImg from "../../assets/about-us/WeWork.webp";
import Image from "next/image";

export default function WeWork() {
  return (
    <div className="container mx-auto my-10">
      <div className="w-full h-[50rem] xs:h-[45rem] sm:h-[52rem] md:h-[35rem] lg:h-[35rem] xl:h-[30rem] bg-[#2E3092] md:rounded-lg flex md:flex-row flex-col justify-between">
        <div className="md:w-[50%] md:pl-14 md:p-6 lg:p-8 p-4 lg:py-16 text-white space-y-8">
          <p className="text-4xl">The way we work</p>
          <div className="flex flex-col gap-5 text-lg">
            <p>
              Our relevance comes from staying aligned with evolving business
              needs and keeping our engineering approach clear, scalable, and
              outcomes-focused.
            </p>
            <p>
              We want you to succeed in your projects, short and long-term
              goals, and achieve your overarching vision for the near future.
            </p>
            <p>
              Our engineering DNA, flexible engagement models, and focus on
              operational alignment help us become an extension of our
              customer’s teams.
            </p>
          </div>
        </div>
        <div className="relative -bottom-0 px-5 xs:px-8 md:px-0 md:w-[40%] h-full z-10">
          <Image
            src={WeWorkImg}
            alt={"Image"}
            className="w-full h-full object-cover rounded-lg aspect-square"
          />
          <div class="w-0 h-0 absolute xs:-right-[0.6rem] md:-right-[4.1rem] -right-[1.4rem] md:-bottom-[0.91rem] -bottom-[0.6rem] md:border-l-[6.2rem] border-l-[4rem] md:border-r-[6.2rem] border-r-[4rem] md:border-b-[6.2rem] border-b-[4rem] border-l-transparent border-r-transparent border-b-white rotate-[135deg]"></div>
        </div>
      </div>
      <div className="h-32 md:h-8" />
    </div>
  );
}
