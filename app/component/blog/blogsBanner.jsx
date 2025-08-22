"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export const BlogsBanner = ({ cards, onCardClick }) => {
  return (
    <section className="bg-[#2b2eae] text-white py-15 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Heading */}
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="Inter text-3xl md:text-5xl font-light inline-block py-5 mb-8"
        >
          Latest Blogs
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {cards?.map((card, index) => (
            <div key={index} className="border-t border-white pt-4">
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="Inter text-xs tracking-wide text-white uppercase"
              >
                {card.label}
              </motion.p>
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="Inter text-xl md:text-3xl font-light my-4 leading-snug"
              >
                {card.title}
              </motion.h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1">
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="Inter text-sm text-white mt-3 max-w-md"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  ></motion.p>
                  <motion.button
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    onClick={() => onCardClick(card)}
                    className="Inter text-sm text-white hover:underline flex items-center gap-1 mt-4"
                  >
                    Read Now <span>→</span>
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-60 h-40 relative flex-shrink-0"
                >
                  <Image
                    src={card.image}
                    alt="Resource Image"
                    width={100}
                    height={100}
                    className="object-center rounded-full w-100 h-full"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
