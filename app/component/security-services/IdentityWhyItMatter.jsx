// components/WhyItMatters.js
import Image from "next/image";
import WhyItMatterimg from "@/app/assets/security/IdenityImg.webp";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";

export default function IdentityWhyItMatters({cards=[
        {
            text: "80% of breaches involve stolen or misused credentials",
            type: "filled",
        },
        {
            text: "Most orgs manage identities in 3+ fragmented systems",
            type: "outline",
        },
        {
            text: "Privilege creep and shadow IT continue to grow",
            type: "outline",
        },
        {
            text: "Manual provisioning delays employee onboarding",
            type: "outline",
        },
        {
            text: "Compliance fines surge due to audit trail gaps",
            type: "outline",
        },
    ],
    buttonText = "Download Case Study"
}) {
    

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-14 items-start">
            {/* Left column */}
            <div>
                <h2 className="bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent font-bold text-3xl md:text-4xl mb-4">
                    Why It Matters
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    More users. More devices. More access risks.
                </h3>

                <p className="text-gray-700 mb-6 text-lg">
                    Calsoft modernizes IAM to deliver centralized identity governance,
                    context-aware access control, and adaptive trust models — without
                    compromising agility.
                </p>

                <div className="relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-md mb-6">
                    <Image
                        src={WhyItMatterimg}
                        alt="IAM visualization"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="pt-4"
                >
                    <ButtonLayout
                        text={buttonText}
                        onClick={() => showHubSpotForm("Talk-to-Expert")}
                        image={buttonImage}
                        hoverImage={buttonImage}
                        className={"w-fit"}
                    />
                </motion.div>
            </div>

            {/* Right column */}
            <div className="mt-10 pt-15">
                {/* ✅ Content above cards */}
                <p className="text-gray-600 mb-6 pb-6 text-lg">
                    As businesses embrace cloud-native and remote-first models, traditional IAM approaches are breaking down:
                </p>

                {/* ✅ Cards grid */}
                <div className="grid sm:grid-cols-3 gap-4">
                    {cards.map((card, i) => (

                        <div
                            key={i}
                            className={`p-4 text-base font-medium shadow-sm transition ${card.type === "filled"
                                ? "bg-[#2E3092] text-white"
                                : "border border-[#2E3092] text-gray-800"
                                } rounded-tl-[40px] rounded-br-[40px]`}

                        >
                            {card.text}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
