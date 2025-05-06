"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const InfoImageSection = ({
  title,
  description,
  pointsTitle,
  points = [],
  impactTitle,
  impactPoints = [],
  buttonText,
  image,
  imagePosition = "right",
  bgColor = "bg-[#FDF7F5]",
  isgradientheading,
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="container mx-auto px-10  md:px-20 py-3">
      <div className={`${bgColor} grid grid-cols-1 md:grid-cols-2 px-0`}>
        {/* Text Section with BG */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`flex ${
            isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
          }  py-6 px-6 md:py-8 `}
        >
          <div className="space-y-1 max-w-xl mx-auto">
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-sm md:text-4xl font-semibold text-black"
            >
              <span
                className={`font-semibold ${
                  isgradientheading
                    ? "bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent"
                    : "text-black"
                }`}
              >
                {title}
              </span>
            </motion.h2>

            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-black text-lg md:py-2 py-1 "
            >
              {description}
            </motion.p>

            {points.length > 0 && (
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.h4
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`text-xl font-semibold mb-1 md:mt-2 mt-1 ${
                    !isImageLeft ? "text-black" : "text-[#2E3092]"
                  }`}
                >
                  {pointsTitle}
                </motion.h4>
                <ul className="list-disc pl-5 text-lg py-4 text-gray-800 space-y-1">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            {impactPoints.length > 0 && (
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.h4
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className={`text-xl font-semibold mb-1 md:mt-3 mt-1 ${
                    !isImageLeft ? "text-black" : "text-[#2E3092]"
                  }`}
                >
                  {impactTitle}
                </motion.h4>
                <ul className="list-disc text-lg py-3 pl-5 text-gray-800 space-y-1">
                  {impactPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.button
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-2 bg-red-600 text-white rounded-full px-6 py-2 hover:bg-red-700 transition-all flex items-center gap-2 text-sm md:text-base"
            >
              {buttonText} <span className="text-xl">&rarr;</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`w-full h-auto ${
            isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <Image
            src={image}
            alt="Section Image"
            className="object-cover w-full h-[300px] md:h-full  xl:h-[600px] rounded-l-4xl md:rounded-l-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoImageSection;
