import React from "react";
import Card from "./Card";
import anupam from "../../assets/leadership/Anupam.webp";
import sharmila from "../../assets/leadership/Sharmila.webp";
import parag from "../../assets/leadership/Parag.webp";
import anshul from "../../assets/leadership/Anshul.webp";
import uday from "../../assets/leadership/Uday.webp";
import pradipta from "../../assets/leadership/Pradipta.webp";
import somenath from "../../assets/leadership/Somenath.webp";
import vipin from "../../assets/leadership/Vipin.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipTeam() {
//   const truncateWords = (text, limit) => {
//   const words = text.split(" ");
//   return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
// };
  const data = [
    {
      image: anupam,
      name: "Anupam Bhide",
      post: "Co-founder & CEO",
      description:
        "Dr. Anupam Bhide founded Calsoft in 1998 and leads the company with over 22 years in tech. Renowned for his integrity and innovative mindset, he previously led development teams at HP....",
      link: "",
    },
    {
      image: sharmila,
      name: "Sharmila Bhide",
      post: "Co-founder, CFO & Chief Mentor",
      description:
        "Sharmila Bhide co-founded Calsoft and directs finance and business strategy. Before Calsoft, she managed Oracle Receivables and integrated features in Oracle Payables and General Ledger.",
      link: "",
    },
    {
      image: parag,
      name: "Parag Kulkarni",
      post: "COO",
      description:
        "Parag Kulkarni oversees Calsoft’s operations, ensuring delivery excellence. With over 30 years in product development, he previously led Veritas/Symantec’s Database Edition on Windows....",
      link: "",
    },
    {
      image: anshul,
      name: "Anshul Bhide",
      post: "Whole Time Director & AI/ML Practice Head",
      description:
        "Anshul Bhide leads Calsoft’s overall strategy, marketing, and heads the AI/ML practice. He brings a decade of experience spanning strategy, venture capital, and tech operations. Previously...",
      link: "",
    },
    
    {
      image: uday,
      name: "Uday Ketkar",
      post: "Associate Chief Operations Officer",
      description:
        "Uday Ketkar manages IT, TA, RMG, admin, HR, and engineering operations at Calsoft. With 27 years in IT services, his strengths span infrastructure, telecom, retail, utilities, and manufacturing sectors.",
      link: "",
    },
    {
      image: pradipta,
      name: "Pradipta Mitra ",
      post: "Senior VP - Sales",
      description:
        "Pradipta Mitra has 30+ years in hi‑tech, leading storage, compute, software, and platform initiatives across the US, UK, and India. He aligns sales strategies with engineering and product teams...",
      link: "",
    },
    {
      image: somenath,
      name: "Somenath Nag",
      post: "Sr. Vice President",
      description:
        "Somenath Nag is a seasoned leader with nearly 30 years of experience in Telecom, Networking, and IoT. He spearheads business growth at Calsoft, managing strategic accounts and offshore teams.",
      link: "",
    },
     {
      image: vipin,
      name: "Vipin Shankar",
      post: "Senior Vice President Technology& Head of Presales",
      description:
        "Vipin Shankar leads the Technology Office and presales at Calsoft, with 25+ years building engineering teams and technology roadmaps. He has developed cloud‑based EDA, MDM, storage, disaster‑recovery...",
      link: "",
    },
   
  ];
  return (
    <div className="my-10 pb-12 space-y-20 container">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col justify-center items-center gap-5 max-w-3xl mx-auto"
      >
        <p className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          Leadership Team
        </p>
        <p className="text-center">
          Calsoft’s leadership team brings decades of experience and a
          technology-first vision to guide our customers’ success
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
        {data.map((ele, idx) => (
       <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: idx * 0.1 }}
  viewport={{ once: false, amount: 0.3 }}
  className="manrope relative group rounded-lg overflow-hidden shadow-md cursor-pointer my-10"
>
  {/* Default Image */}
  <Image
    src={ele.image}
    alt={ele.name}
    width={400}
    height={300}
    className="w-full h-[350px] object-cover transition-all duration-300 group-hover:opacity-0 border-gray-300 border"
  />

  {/* Blue strip (default state) */}
  <div className="h-[80px] absolute bottom-0 left-0 w-full bg-[#2E3092]/90 text-white px-3 py-2 transition-all duration-300 group-hover:opacity-0">
    <p className="text-[18px] font-semibold">{ele.name}</p>
    <p className="text-[12px]">{ele.post}</p>
  </div>

  {/* Floating overlay on hover */}
  <div className="absolute inset-0 bg-[#2E3092] text-white opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-center items-left p-4 text-left">
    <p className="text-lg font-medium">{ele.name}</p>
    <p className="text-sm italic">{ele.post}</p>
    <p className="text-xs mt-2">{ele.description}</p>
  </div>
</motion.div>


        ))}
      </div>
    </div>
  );
}
