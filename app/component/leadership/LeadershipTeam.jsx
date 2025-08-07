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

export default function LeadershipTeam() {
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
  ];
  return (
    <div className="my-5 pb-12 space-y-10 container">
      <div className="flex flex-col justify-center items-center gap-5 max-w-3xl mx-auto">
        <p className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(to_right,#2E3092_25%,#ED1C24_88%)] bg-clip-text text-transparent">
          Leadership Team
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
        {data.map((ele, idx) => (
          <Card key={idx} data={ele} />
        ))}
      </div>
      <div className="h-6"></div>
    </div>
  );
}
