// components/WhereItFits.js
import Image from "next/image";
import img from "@/app/assets/security/WhereItFitImg.webp"

export default function WhereItFits() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left column: image */}
      <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={img}   // ✅ replace with your own image name
          alt="Business professionals discussing IAM"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right column: text */}
      <div>
        <h2 className="bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent font-semibold text-4xl mb-1">
          Where It Fits
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Scenarios where IAM is a business enabler
        </h3>

        <p className="mb-6">
          You need Calsoft&apos;s IAM services if:
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            Your cloud and on-prem IAM stacks <br />
            <a href="#" className="text-[#2E3092] underline">don’t talk to each other</a>
          </li>
          <li>
            You’re preparing for <br />
            <a href="#" className="text-[#2E3092] underline">
              SOX, HIPAA, GDPR, or ISO audits
            </a>
          </li>
          <li>
            You’re migrating to <br />
            <a href="#" className="text-[#2E3092] underline">
              Zero Trust or SASE frameworks
            </a>
          </li>
          <li>
            Privilege escalation isn’t governed or tracked
          </li>
          <li>
            Access rights are not revoked on <br />
            <a href="#" className="text-[#2E3092] underline">
              employee exit or role change
            </a>
          </li>
        </ul>

        <p className="mt-6 text-gray-700">
          Calsoft helps enterprises shift IAM from a tactical tool
          to a strategic access enabler.
        </p>

        <button
          className="mt-8 bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition"
        >
          Request Use Cases
        </button>
      </div>
    </section>
  );
}
