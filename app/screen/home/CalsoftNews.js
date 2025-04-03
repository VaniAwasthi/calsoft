"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import img01 from "../../assets/home/News1.webp"
import img02 from "../../assets/home/News3.webp"
import img03 from "../../assets/home/News2.webp"
import img04 from "../../assets/home/News1.webp"



const data = [
  {
    id: 1,
    img: img01,
    title: "Accelerate high-quality software products.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    img: img02,
    title: "Enhance Your Development Process",
    description: "Discover innovative solutions for modern software development."
  },
  {
    id: 3,
    img: img03,
    title: "Next-Gen Technology Solutions",
    description: "Explore new trends and advancements in technology for the future."
  },
  {
    id: 4,
    img: img04,
    title: "Revolutionizing the IT Industry",
    description: "Bringing positive changes through digital transformation."
  }
];
export const CalsoftNews = () => {
  const [selected, setSelected] = useState(data[0]);
  return (
    <>

<div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <motion.h2
          key={selected.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-medium text-[#1B453C]"
        >
          {selected.title}
        </motion.h2>
        <motion.p
          key={selected.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-lg text-gray-600"
        >
          {selected.description}
        </motion.p>
        <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition">
          Explore More →
        </button>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold">Calsoft News Section</h3>
        <p className="mt-2 text-gray-600">
          We focus on bringing positivity to the world and focus on stories that showcase the best of humanity.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ${
                selected.id === item.id ? "w-64" : "w-40"
              }`}
              onClick={() => setSelected(item)}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="object-cover rounded-lg"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    </>
  )
}
