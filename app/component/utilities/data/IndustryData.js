import Hitech from "../../../assets/home/hitech.webp";
import industry from "../../../assets/home/Industryimg.webp";
import HitechIcon1 from "../../../assets/Icons/hitech1.svg";
import HitechIcon2 from "../../../assets/Icons/hitech2.svg";
import HitechIcon3 from "../../../assets/Icons/hitech3.svg";
import HitechIcon4 from "../../../assets/Icons/hitech4.svg";
import HitechIcon5 from "../../../assets/Icons/hitech5.svg";
import HitechIcon6 from "../../../assets/Icons/hitech6.svg";
import Retail from "../../../assets/home/Retail.webp";
import RetailIcon1 from "../../../assets/Icons/retail1.svg";
import RetailIcon2 from "../../../assets/Icons/retail2.svg";
import RetailIcon3 from "../../../assets/Icons/retail3.svg";
import RetailIcon4 from "../../../assets/Icons/retail4.svg";
import RetailIcon5 from "../../../assets/Icons/retail5.svg";
import RetailIcon6 from "../../../assets/Icons/retail6.svg";
import TelecomIcon1 from "../../../assets/Icons/Telecom1.svg";
import TelecomIcon2 from "../../../assets/Icons/Telecom2.svg";
import TelecomIcon3 from "../../../assets/Icons/Telecom3.svg";
import TelecomIcon4 from "../../../assets/Icons/Telecom4.svg";
import TelecomIcon5 from "../../../assets/Icons/Telecom5.svg";
import TelecomIcon6 from "../../../assets/Icons/Telecom6.svg";
import Legal from "../../../assets/home/Legal.webp";
import LegalIcon1 from "../../../assets/Icons/Legal1.svg";
import LegalIcon2 from "../../../assets/Icons/Legal2.svg";
import LegalIcon3 from "../../../assets/Icons/Legal3.svg";
import LegalIcon4 from "../../../assets/Icons/Legal4.svg";
import LegalIcon5 from "../../../assets/Icons/Legal5.svg";
import LegalIcon6 from "../../../assets/Icons/Legal6.svg";
import Manufacturing from "../../../assets/home/Manufacturing.webp";
import ManufacturingIcon1 from "../../../assets/Icons/Manufacturing1.svg";
import ManufacturingIcon2 from "../../../assets/Icons/Manufacturing2.svg";
import ManufacturingIcon3 from "../../../assets/Icons/Manufacturing3.svg";
import ManufacturingIcon4 from "../../../assets/Icons/Manufacturing4.svg";
import ManufacturingIcon5 from "../../../assets/Icons/Manufacturing5.svg";
import ManufacturingIcon6 from "../../../assets/Icons/Manufacturing6.svg";
export const IndustryData = [
  {
    id: 1,
    image: Hitech,
    category: "Hi-Tech",
    Pagelink: "/industries/hitech",
    title: "Hi-Tech & digital innovation",
    description:
      "Build smarter products, platforms, and experiences with AI-driven engineering and cloud-native solutions.",
    iconData: [
      {
        id: 1,
        title: "AI & machine learning model development",
        icon: HitechIcon1,
      },
      {
        id: 2,
        title: "Digital product engineering & UX innovation",
        icon: HitechIcon2,
      },

      {
        id: 3,
        title: "Cloud-native & microservices architectures",
        icon: HitechIcon4,
      },
      {
        id: 4,
        title: "Data science & AI-powered decision making",
        icon: HitechIcon5,
      },
      {
        id: 5,
        title: "IoT & edge intelligence for smart environments",
        icon: HitechIcon6,
      },
    ],
  },
  {
    id: 2,
    image: Retail,
    category: "Retail",
    title: "Retail | Smart Retail",
    Pagelink: "/industries/retail",
    description:
      "Enhance customer experiences and streamline operations with AI-driven personalization, predictive analytics, and intelligent automation.",
    iconData: [
      {
        id: 1,
        title: "E-commerce optimization & personalization",
        icon: RetailIcon1,
      },
      {
        id: 2,
        title: "AI-powered retail analytics & inventory forecasting",
        icon: RetailIcon2,
      },
      {
        id: 3,
        title: "Omnichannel shopping & digital storefronts",
        icon: RetailIcon3,
      },
      {
        id: 4,
        title: "Computer vision for in-store analytics",
        icon: RetailIcon4,
      },
      {
        id: 5,
        title: "Supply chain AI & logistics optimization",
        icon: RetailIcon5,
      },
      {
        id: 6,
        title: "Augmented Reality (AR) for virtual experience",
        icon: RetailIcon6,
      },
    ],
  },
  {
    id: 3,
    image: industry,
    category: "Telecom",
    title: "Next-gen telecom & networking",
    Pagelink: "/industries/telecom",
    description:
      "Enable future-ready networks with 5G, SDN/NFV, and AI-driven orchestration for seamless connectivity and service delivery.",
    iconData: [
      {
        id: 1,
        title: "5G network virtualization",
        icon: TelecomIcon1,
      },
      {
        id: 2,
        title: "SDN/NFV for agile networks",
        icon: TelecomIcon2,
      },
      {
        id: 3,
        title: "AI-powered network orchestration",
        icon: TelecomIcon3,
      },
      {
        id: 4,
        title: "Cloud & edge network optimization",
        icon: TelecomIcon4,
      },
      {
        id: 5,
        title: "Zero trust security & network resilience",
        icon: TelecomIcon5,
      },
      {
        id: 6,
        title: "Multi-cloud connectivity & interoperability",
        icon: TelecomIcon6,
      },
    ],
  },
  {
    id: 4,
    image: Manufacturing,
    category: "Manufacturing",
    title: "Manufacturing",
    Pagelink: "/industries/manufacturing",
    description:
      "Drive operational efficiency, reduce downtime, and improve product quality with smart manufacturing solutions powered by AI, IoT, and automation.",
    iconData: [
      {
        id: 1,
        title: "Industrial IoT & smart factory automation",
        icon: ManufacturingIcon1,
      },
      {
        id: 2,
        title: "AI-based predictive maintenance",
        icon: ManufacturingIcon2,
      },
      {
        id: 3,
        title: "AI-driven simulation & process optimization",
        icon: ManufacturingIcon3,
      },
      {
        id: 4,
        title: "Supply chain resilience & inventory forecasting",
        icon: ManufacturingIcon4,
      },
      {
        id: 5,
        title: "Robotics & intelligent automation",
        icon: ManufacturingIcon5,
      },
      {
        id: 6,
        title: "Real-time production monitoring",
        icon: ManufacturingIcon6,
      },
    ],
  },
  {
    id: 5,
    image: Legal,
    category: "LegalTech",
    title: "LegalTech",
    description:
      "Modernize legal workflows with AI-powered contract analysis, seamless document management, and smarter compliance solutions.",
    iconData: [
      {
        id: 1,
        title: "AI-powered contract & document analysis",
        icon: LegalIcon1,
      },
      {
        id: 2,
        title: "Regulatory compliance & risk management",
        icon: LegalIcon2,
      },
      {
        id: 3,
        title: "Legal workflow automation & case management",
        icon: LegalIcon3,
      },
      {
        id: 4,
        title: "Intelligent e-discovery solutions",
        icon: LegalIcon4,
      },
      {
        id: 5,
        title: "Data privacy & security compliance",
        icon: LegalIcon5,
      },
      {
        id: 6,
        title: "Natural Language Processing (NLP",
        icon: LegalIcon6,
      },
    ],
  },
];
