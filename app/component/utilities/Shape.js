import React from "react";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonImage from "../../assets/home/buttonImg.webp";

export const MatterTriangle = ({
  title,
  description,
  highlight,
  buttonText,
  link,
  cards,
  heading,
  ButtonImage,
  secId,
}) => {
  return (
    <>
      <section className={`md:pb-12 pb-0 md:pt-12 pt-6   bg-white`} id={secId}>
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="flex-1 md:w-2/4"
            >
              <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]">
                {heading}
              </h2>
              <h3 className="text-xl md:text-[26px] font-semibold mb-5">
                {title}
              </h3>
              <p
                className="md:text-base text-sm text-black font-normal"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <p className="md:text-base text-sm text-[#2E3092] mb-10 font-normal">
                {highlight}
              </p>

              {buttonText && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn"
                >
                  <ButtonLayout
                    link={link}
                    text={buttonText}
                    image={ButtonImage}
                    hoverImage={ButtonImage}
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-wrap justify-center gap-4 shape_group md:w-2/4"
            >
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="relative w-[50%] flex justify-center">
                  {cards[0] && (
                    <motion.div
                      className="relative w-[180px] md:w-[240px] h-[220px]  text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[0].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute bottom-10 md:bottom-6 inset-0 flex flex-col justify-end items-center   px-4">
                        <div className="w-[70%] mx-auto">
                          <p className="text-[17px] md:text-2xl font-bold">
                            {cards[0].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[0].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[0].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                    </motion.div>
                  )}
                </div>

                <div className="flex flex-nowrap items-center -mt-19 md:-mt-4">
                  {/* Left Triangle */}
                  {cards[1] && (
                    <motion.div
                      className="relative -mr-12 md:-mr-20 w-[180px] md:w-[240px] h-[220px] text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[1].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute inset-0 bottom-10 md:bottom-6 flex flex-col justify-end items-center px-4">
                        <div className="w-[70%] mx-auto">
                          <p className="text-[17px] md:text-2xl font-bold">
                            {cards[1].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[1].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[1].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                    </motion.div>
                  )}

                  {/* Center (Bottom) Triangle */}
                  {cards[2] && (
                    <motion.div
                      className="relative -mt-10 w-[100px] md:w-[180px] h-[120px] text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[2].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute inset-0  bottom-4  flex flex-col justify-end items-center px-4">
                        <div>
                          <p className="text-[17px] md:text-2xl font-bold">
                            {cards[2].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[2].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[2].bgshape.src} alt="Triangle" width={100} height={100} className="w-full" /> */}
                    </motion.div>
                  )}

                  {/* Right Triangle */}
                  {cards[3] && (
                    <motion.div
                      className="relative -ml-12 md:-ml-20 w-[180px] md:w-[240px] h-[220px] text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[3].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute inset-0 bottom-10 md:bottom-6 flex flex-col justify-end items-center   px-4">
                        <div className="w-[70%] mx-auto">
                          <p className="text-[17px] md:text-2xl font-bold">
                            {cards[3].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[3].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[3].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export const MatterCircle = ({
  title,
  description,
  highlight,
  buttonText,
  link,
  cards,
  heading,
  ButtonImage,
  secId,
}) => {
  return (
    <>
      <section className={`md:pb-12 pb-0 md:pt-12 pt-6   bg-white`} id={secId}>
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="flex-1 md:w-2/4"
            >
              <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]">
                {heading}
              </h2>
              <h3 className="text-xl md:text-[26px] font-semibold mb-5">
                {title}
              </h3>
              <p
                className="md:text-base text-sm text-black font-normal"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <p className="md:text-base text-sm text-[#2E3092] mb-10 font-normal">
                {highlight}
              </p>

              {buttonText && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex flex-col md:flex-row gap-4 increse_btn shadow_btn"
                >
                  <ButtonLayout
                    link={link}
                    text={buttonText}
                    image={ButtonImage}
                    hoverImage={ButtonImage}
                  />
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-wrap justify-center gap-4 shape_group md:w-2/4"
            >
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="relative w-[50%] flex justify-center">
                  {cards[0] && (
                    <motion.div
                      className="relative w-[200px] -ml-4 md:ml-0 md:w-[220px] h-[220px]  text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[0].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute bottom-10 md:bottom-6 inset-0 flex flex-col justify-center items-center   px-4">
                        <div className="w-[70%] mx-auto">
                          <p className="text-xl md:text-2xl font-bold">
                            {cards[0].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[0].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[0].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                    </motion.div>
                  )}
                </div>

                <div className="flex flex-nowrap items-center -mt-16 md:-mt-4">
                  {/* Center (Bottom) Triangle */}
                  {cards[1] && (
                    <motion.div
                      className="relative -mt-7 md:-mt-12 ml-0  w-[180px] md:w-[220px] h-[220px] text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[1].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute inset-0  bottom-4  flex flex-col justify-center items-center px-4">
                        <div className="pt-4">
                          <p className="text-xl md:text-2xl font-bold">
                            {cards[1].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[1].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[2].bgshape.src} alt="Triangle" width={100} height={100} className="w-full" /> */}
                    </motion.div>
                  )}

                  {/* Right Triangle */}
                  {cards[2] && (
                    <motion.div
                      className="relative -ml-2 -mt-4 md:-ml-5 md:-mt-14 w-[180px] md:w-[220px] h-[220px] text-white text-center"
                      style={{
                        backgroundImage: `url('${cards[2].bgshape.src}')`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="absolute inset-0 bottom-10 md:bottom-6 flex flex-col justify-center items-center   px-4">
                        <div className="w-[70%] mx-auto">
                          <p className="text-xl md:text-2xl font-bold">
                            {cards[2].percent}
                          </p>
                          <p className="text-[10px] md:text-[12px] mt-1">
                            {cards[2].text}
                          </p>
                        </div>
                      </div>
                      {/* <Image src={cards[3].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export const StepsSection = ({ heading, steps }) => {
  return (
    <section className="md:pb-12 pb-0 md:pt-12 pt-6   bg-white">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_60%)] ">
          {heading.split(" ").map((word, idx) =>
            word === "all" || word === "stages" ? (
              <span
                key={idx}
                className={`${
                  word === "all" ? "text-gradient-purple" : "text-gradient-red"
                }`}
              >
                {word + " "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-0 relative max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-[#2E3092] text-white  py-8 flex-1 text-left border-1 md:border-2 border-r border-white ${
                index % 2 !== 0 ? "bg-[#021553]" : "bg-[#2E3092]"
              }`}
            >
              {index !== steps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-[30%] white_after -right-8 transform z-10 -translate-y-1/2 w-12 h-16 ${
                    index % 2 !== 0 ? "bg-[#021553]" : "bg-[#2E3092]"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                  }}
                ></div>
              )}

              {/* Downward arrow for mobile */}
              {index !== steps.length - 1 && (
                <div
                  className={`block md:hidden absolute left-2/4 white_after after_mobile -bottom-8 transform z-10  -translate-x-1/2 w-12 h-8 ${
                    index % 2 !== 0 ? "bg-[#021553]" : "bg-[#2E3092]"
                  }`}
                  style={{
                    clipPath: "polygon(100% 0, 0 0, 50% 100%)",
                  }}
                ></div>
              )}
              <div className="w-[80%] m-auto py-6 md:py-8">
                <h3 className="text-lg md:text-xl mb-4 md:mb-6 md:w-[80%] mx-auto">
                  {step.title}
                </h3>
                <p className="text-[15px] font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Imagethree = ({
  heading,
  data,
  gridStyle = "md:grid-cols-3",
  buttonText,
  isButton = false,
}) => {
  return (
    <section className="  md:pt-16 pt-8   bg-white">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_30%)] ">
          {heading}
        </h2>
        <div className={`grid ${gridStyle} grid-cols-1 gap-6 md:gap-10`}>
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-[#2E3092] rounded overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded w-full h-auto"
              />
              <div className="py-4 px-6 !pb-10  md:py-6 md:px-10 text-center">
                <h2 className="text-black text-lg md:text-[20px] font-semibold">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-black mt-2">
                  {item.description}
                </p>
                {isButton && (
                  <div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-6 md:mt-2 flex justify-center items-center"
                  >
                    <ButtonLayout
                      text={buttonText}
                      image={ButtonImage}
                      hoverImage={ButtonImage}
                      className="!w-[200px]"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
