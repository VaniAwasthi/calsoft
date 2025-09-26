// components/WhereItFits.js
import Image from "next/image";
import img from "@/app/assets/security/WhereItFitImg.webp";
import { motion } from "framer-motion";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";


export default function WhereItFits({
  alt = "Illustration",
  title = "Where IT Fits",
  subtitle = "Scenarios where IAM is a business enabler",
  intro = "You need Calsoft’s IAM services if:",
  points = [
    {
      text: "Your cloud and on-prem IAM stacks don’t talk to each other",
      link: { href: "#", label: "don’t talk to each other" },
    },
    {
      text: "You’re preparing for",
      link: { href: "#", label: "SOX, HIPAA, GDPR, or ISO audits" },
    },
    {
      text: "You’re migrating to",
      link: { href: "#", label: "Zero Trust or SASE frameworks" },
    },
    { text: "Privilege escalation isn’t governed or tracked" },
    {
      text: "Access rights are not revoked on",
      link: { href: "#", label: "employee exit or role change" },
    },
  ],
  outro = "Calsoft helps enterprises shift IAM from a tactical tool to a strategic access enabler.",
  buttonText = "Request UseCases",
  buttonLink = "#",
}) {
  return (
    <section className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-10 items-stretch">
      {/* Left column: image */}
      <div className="relative w-full h-[350px] md:h-full rounded-xl overflow-hidden">
        <Image
          src={img}
          alt={alt}
          className="object-cover"
          priority
        />
      </div>


      {/* Right column: text */}
      <div className="flex flex-col justify-center">
        {title && (
          <h2 className="bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent font-semibold text-4xl mb-1">
            {title}
          </h2>
        )}

        {subtitle && (
          <h3 className="text-2xl md:text-2xl font-bold mb-1 mt-2">
            {subtitle}
          </h3>
        )}

        {intro && <p className="mb-6 text-lg">{intro}</p>}

        {points.length > 0 && (
          <ul className="space-y-4 text-gray-700 text-lg">
            {points.map((point, idx) => (
              <li key={idx}>
                {point.text} <br />
                {point.link && (
                  <a
                    href={point.link.href}
                    className="text-[#2E3092] underline"
                  >
                    {point.link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="pt-4"
        >

          {outro && <p className="mt-6 text-gray-700 text-lg">{outro}</p>}

        </motion.div>

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
    </section>
  );
}
