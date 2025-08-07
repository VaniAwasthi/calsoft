import React from "react";
import heroImage from "../../assets/leadership/hero_image.webp";
import BannerLayout from "../utilities/BannerLayout";

export default function LeadershipHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-black/80 overflow-hidden">
      {/* Background Image */}
      {/* <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
        alt="Leadership Team Meeting"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 z-0" /> */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}
      {/* Content */}
      {/* <div className="relative z-20 max-w-4xl mx-auto px-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
        <p className="text-lg md:text-2xl text-white font-light">
          Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale.
        </p>
      </div> */}
      {/* <div className="object-"></div> */}

      <BannerLayout
        image={heroImage}
        title2={"Our Team"}
        description={
          "Engineer smarter outcomes with the right tech and dependable delivery. Designed for your goals, Optimized for cost, time, and scale."
        }
        titleTwoClass="text-[28px] md:text-5xl md:mt-4"
        descriptionClass="mt-4 text-lg leading-8 max-w-[90%] md:w-full"
        BgClassname="object-contain w-full h-full object-center"
      />
    </section>
  );
}
