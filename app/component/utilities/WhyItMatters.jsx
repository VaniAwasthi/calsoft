import React from "react";
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";

const WhyItMatters = ({ title, description, highlight, buttonText, link, cards, heading, ButtonImage }) => {
    return (
        <section className={`md:pb-12 pb-0 md:pt-12 pt-6  md:px-10 lg:px-20 bg-white`}>
            <div className=" px-4 container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-center">

                    <div className="flex-1   md:w-2/4">
                        <h2 className="text-xl md:text-[38px] font-semibold mb-6 md:mb-10 text-transparent bg-clip-text bg-[linear-gradient(to_right,#2E3092_18%,#ED1C24_33%)]">
                            {heading}
                        </h2>
                        <h3 className="text-xl md:text-[26px]  font-semibold mb-5">{title}</h3>

                        <p className="md:text-base text-sm text-black font-normal" dangerouslySetInnerHTML={{ __html: description }} />
                        <p className="md:text-base text-sm text-[#2E3092] mb-10 font-normal">{highlight}</p>
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
                    </div>

                    <div className="flex-1 flex flex-wrap justify-center gap-4  shape_group md:w-2/4">
                        {cards.map((card, idx) => (
                            <div
                                key={idx}
                                className={`h-[200px]  md:h-[240px] bg-gradient-to-br text-white  flex pt-8 md:pt-10  items-start justify-center text-center rounded-[2rem] relative transform ${card.className} single_shape   bg-contain md:bg-contain bg-no-repeat bg-center `}
                                style={{ backgroundImage: `url('${card.bgshape.src}')` }}
                            >
                                <div className="w-[60%]  md:w-[40%] mx-auto">
                                    <p className="text-lg  md:text-3xl font-bold pt-2 md:pt-0">{card.percent}</p>
                                    <p className="text-[10px] md:text-[12px] md:mt-2">{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
