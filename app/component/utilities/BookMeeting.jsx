import React from "react";
import predict from "@/app/assets/infra/predictibility.webp";
import Image from "next/image";

export default function BookMeeting({
  img = predict,
  title = "Build scalable infra plans with 40% cost predictability.",
  buttonText = "Book a Meeting",
}) {
  return (
    <div className="w-full h-40 relative rounded-xl overflow-hidden mt-10">
      <Image src={img} alt="image" className="w-full object-cover" />
      <div className="absolute top-0 w-full h-full bg-[#2e309293] bg-[linear-gradient(90deg,rgba(46,48,146,0.7)_0%,rgba(46,48,146,0.5)_60%,rgba(255,255,255,0)_100%)] text-white">
        <div className="w-full h-full flex justify-between items-center gap-5 p-5">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-medium"
          >
            {title}
          </motion.p>
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-xl  font-medium px-6 py-2.5 bg-[#BA0007] rounded-lg"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
