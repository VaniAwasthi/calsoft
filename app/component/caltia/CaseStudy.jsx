"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card_1 from "@/app/assets/caltia/Card_1.webp";
import Card_2 from "@/app/assets/caltia/Card_2.webp";
import Card_3 from "@/app/assets/caltia/Card_3.webp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientCaseStudy({
  heading = "Client Case Study",
  cardData = [
    {
      id: 1,
      title: "A Global Networking Tech Enterprise",
      description:
        "Accelerated product releases and optimised testing, achieving",
      image: Card_1,
    },
    {
      id: 2,
      title: "Fortune-500 Storage Equipment Manufacturer",
      description:
        "Saved 1000+ man hours with automated test case generation and missing test case creation",
      image: Card_2,
    },
    {
      id: 3,
      title: "An Industry Leader in Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: Card_3,
    },
    {
      id: 4,
      title: "Enterprise Cloud Solutions Provider",
      description:
        "Reduced deployment time by 75% through automated testing and continuous integration",
      image: Card_1,
    },
  ],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (width < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : Math.max(0, cardData.length - visibleCards)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < cardData.length - visibleCards ? prev + 1 : 0
    );
  };

  const visibleCases = cardData.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-[38px] font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          {heading}
        </h2>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-[#2e3092] hover:bg-[#2e3092] hover:text-white transition-all bg-transparent flex justify-center items-center"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-[#2e3092] hover:bg-[#2e3092] hover:text-white transition-all bg-transparent flex justify-center items-center"
            disabled={currentIndex >= cardData.length - visibleCards}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex gap-6 overflow-hidden">
        {visibleCases.map((caseStudy, index) => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all delay-75 duration-300 ease-out group flex-shrink-0 ${
              visibleCards === 1
                ? "w-full"
                : visibleCards === 2
                ? "w-[calc(50%-12px)]"
                : "w-[calc(33.333%-16px)]"
            }`}
          >
            {/* Image */}
            <div className="aspect-[498/280] overflow-hidden">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#2e3092] mb-4 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              {/* Read More Link */}
              <button className="flex items-center gap-2 text-[#2e3092] font-semibold hover:gap-3 transition-all duration-200 group/link">
                <span>Read more</span>
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
