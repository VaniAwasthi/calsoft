"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonLayout from "./ButtonLayout";
import ButtonImage from "../../assets/home/buttonImg.webp";

const InfoImageSection = ({
  id,
  title,
  description,
  pointsTitle,
  points = [],
  impactTitle,
  impactPoints = [],
  buttonText,
  image,
  imagePosition = "right",
  bgColor = "",
  link = "",
  rounded = "",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section id={id} className="container mx-auto px-6 my-5 xl:px-20 py-3">
      <div className={`${bgColor}  px-0 mt-[3rem]`}>
        {/* Text Section with BG */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className={`flex ${
            isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
          }  py-6  md:py-8  px-5`}
        >
          <div className="space-y-2 max-w-3xl md:mx-auto px-8">
            <motion.h2
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl md:text-4xl font-semibold text-black"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-black text-[16px] md:py-2 py-1 "
              dangerouslySetInnerHTML={{ __html: description }}
            ></motion.p>

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
                  className="text-xl font-semibold mb-1 md:mt-2 mt-1 text-black"
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
                  className="text-lg font-semibold mb-1 md:mt-3 mt-1 text-black"
                >
                  {impactTitle}
                </motion.h4>
                <ul className="list-disc text-md py-3 pl-5 text-gray-800 space-y-1">
                  {impactPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}

            <ButtonLayout
              link={link}
              text={buttonText}
              image={ButtonImage}
              hoverImage={ButtonImage}
              className="!w-[150px] !h-[55px]"
            />
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`w-full md:h-[100%] xl-h-auto ${
            isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2 "
          }`}
        >
          <div className="relative w-full  overflow-hidden group md:h-[100%] xl-h-auto">
            <Image
              src={image}
              alt="Section Image"
              className={`w-full transition duration-300 ease-in-out object-cover md:h-[100%] xl-h-auto ${rounded}`}
              priority
            />
            {/* Overlay for light blue shade on hover */}
            <div
              className={`absolute inset-0 bg-[#2E3092]/70 opacity-50 group-hover:opacity-0 transition duration-300 ${rounded} `}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoImageSection;
