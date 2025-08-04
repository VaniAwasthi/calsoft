import React from 'react'
import ButtonLayout from "./ButtonLayout";
import { motion } from "framer-motion";
import Image from 'next/image';






export const MatterTriangle = ({ title, description, highlight, buttonText, link, cards, heading, ButtonImage, secId }) => {
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
                            <h3 className="text-xl md:text-[26px] font-semibold mb-5">{title}</h3>
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
                                            className="relative w-[200px] md:w-[240px] h-[220px]  text-white text-center"
                                            style={{ backgroundImage: `url('${cards[0].bgshape.src}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        >
                                            <div className="absolute bottom-10 md:bottom-6 inset-0 flex flex-col justify-end items-center   px-4">
                                                <div className='w-[70%] mx-auto'>
                                                    <p className="text-[17px] md:text-2xl font-bold">{cards[0].percent}</p>
                                                    <p className="text-[10px] md:text-[12px] mt-1">{cards[0].text}</p>
                                                </div>
                                            </div>
                                            {/* <Image src={cards[0].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                                        </motion.div>
                                    )}
                                </div>


                                <div className="flex flex-nowrap items-center -mt-16 md:-mt-4">
                                    {/* Left Triangle */}
                                    {cards[1] && (
                                        <motion.div
                                            className="relative -mr-10 md:-mr-20 w-[180px] md:w-[240px] h-[220px] text-white text-center"
                                            style={{ backgroundImage: `url('${cards[1].bgshape.src}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        >
                                            <div className="absolute inset-0 bottom-10 md:bottom-6 flex flex-col justify-end items-center px-4">
                                                <div className='w-[70%] mx-auto'>
                                                    <p className="text-[17px] md:text-2xl font-bold">{cards[1].percent}</p>
                                                    <p className="text-[10px] md:text-[12px] mt-1">{cards[1].text}</p>
                                                </div>
                                            </div>
                                            {/* <Image src={cards[1].bgshape.src} alt="Triangle" width={400} height={400} className="w-full" /> */}
                                        </motion.div>
                                    )}

                                    {/* Center (Bottom) Triangle */}
                                    {cards[2] && (
                                        <motion.div
                                            className="relative -mt-10 w-[100px] md:w-[180px] h-[120px] text-white text-center"
                                            style={{ backgroundImage: `url('${cards[2].bgshape.src}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        >
                                            <div className="absolute inset-0  bottom-4  flex flex-col justify-end items-center px-4">
                                                <div >
                                                    <p className="text-[17px] md:text-2xl font-bold">{cards[2].percent}</p>
                                                    <p className="text-[10px] md:text-[12px] mt-1">{cards[2].text}</p>
                                                </div>
                                            </div>
                                            {/* <Image src={cards[2].bgshape.src} alt="Triangle" width={100} height={100} className="w-full" /> */}
                                        </motion.div>
                                    )}

                                    {/* Right Triangle */}
                                    {cards[3] && (
                                        <motion.div
                                            className="relative -ml-10 md:-ml-20 w-[180px] md:w-[240px] h-[220px] text-white text-center"
                                            style={{ backgroundImage: `url('${cards[3].bgshape.src}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                        >
                                            <div className="absolute inset-0 bottom-10 md:bottom-6 flex flex-col justify-end items-center   px-4">
                                                <div className='w-[70%] mx-auto'>
                                                    <p className="text-[17px] md:text-2xl font-bold">{cards[3].percent}</p>
                                                    <p className="text-[10px] md:text-[12px] mt-1">{cards[3].text}</p>
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
    )
}

