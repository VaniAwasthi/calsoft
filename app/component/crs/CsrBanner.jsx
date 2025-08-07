"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import videoThumbnail from "../../assets/csr/csrBanner.webp";
import ReactPlayer from "react-player";
import BannerBg from "../../assets/csr/BannerBg.webp";

export default function CSRBanner() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <motion.section
      className="relative text-white"
      style={{
        backgroundImage: `url(${BannerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-full h-full">
        <div className="manrope max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center max-w-md"
          >
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-light mb-4 leading-tight">
              Calsoft’s CSR initiatives
            </h1>
            <p className="text-base sm:text-xl opacity-90 max-w-lg">
              Our corporate social responsibility efforts reflect our core
              commitments to sustainability, community upliftment, and
              inclusion.
            </p>
          </motion.div>

          {/* Right Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96"
          >
            {!playVideo ? (
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setPlayVideo(true)}
              >
                <Image
                  src={videoThumbnail}
                  alt="Video Thumbnail"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <button className=" text-white p-3 sm:p-8 rounded-full text-2xl font-bold shadow-md transition hover:scale-105">
                    ▶
                  </button>
                </div>
              </div>
            ) : (
              <ReactPlayer
                url="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                playing
                width="100%"
                height="100%"
                className="rounded-lg overflow-hidden"
              />
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
