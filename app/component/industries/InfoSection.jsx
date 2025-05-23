"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ButtonImage from "../../assets/home/buttonImg.webp";
import ButtonLayout from "../utilities/ButtonLayout";

const InfoSection = ({
  heading,
  title,
  description,
  points = [],
  buttonText,
  image,
  imagePosition = "right",
  bgColor = "bg-[#FAFAF6]",
  link = "",
  ImageClass = "h-[350px] md:h-full xl:h-[700px] object-cover rounded-l-[30px]",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="container mx-auto px-4 md:px-16 py-10">
      <div
        className={`grid grid-cols-1 md:grid-cols-2  overflow-hidden ${bgColor}`}
      >
        {/* Text Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`flex justify-center py-10 px-6 md:px-12 ${
            isImageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
          }`}
        >
          <motion.div
            className="max-w-xl space-y-4"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-2xl md:text-4xl font-normal text-black"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <span className="font-bold bg-gradient-to-r from-[#2E3092] to-[#ED1C24] bg-clip-text text-transparent">
                {heading}
              </span>{" "}
              {title}
            </motion.h2>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-md md:text-lg text-black leading-relaxed py-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            {points.map((point, index) => (
              <motion.div
                key={index}
                className="space-y-1 my-[2rem]"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.h4
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-md md:text-lg  font-semibold text-[#2E3092]  cursor-pointer hover:text-[#1E1E8F]"
                >
                  {point.pointsTitle}
                </motion.h4>
                <p className="text-md md:text-lg   text-black">
                  {point.pointsdescription}
                </p>
              </motion.div>
            ))}

            <motion.div
              className="pt-4"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <ButtonLayout
                link={link}
                text={buttonText}
                image={ButtonImage}
                hoverImage={ButtonImage}
                className="!w-[150px] !h-[55px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`w-full ${
            isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <Image
            src={image}
            alt="Section Image"
            className={`w-full ${ImageClass}`}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
