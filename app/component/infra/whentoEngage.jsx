import Image from "next/image";
import img from "../../assets/infra/FirstStep.webp";

export default function WhenToEngage({
    title = "When to Engage",
    id= "when-to-engage",
    subtitle = "Typical SRE adoption triggers",
    triggers = [
        "Frequent outages or missed SLAs",
        "Observability tooling sprawl but no insights",
        "Expanding to multi-region or multi-cloud deployments",
        "Legacy ops teams under pressure from fast dev teams",
        "DevOps teams stretched thin on incident response",
        "Post-cloud migration operational fatigue",
    ] },
) {

    return (
        <section id={id} className="max-w-7xl mx-auto px-6 container mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-4xl font-bold mb-2 bg-[linear-gradient(to_right,#2E3092_5%,#ED1C24_18%)] bg-clip-text text-transparent leading-20">
                        {title}
                    </h2>
                    <h3 className="text-black text-2xl mt-2 font-bold">
                        {subtitle}
                    </h3>
                    <ul className="mt-4 space-y-3">
                        {triggers.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-start gap-2 text-black text-lg"
                            >
                                {/* Solid triangle arrow */}
                                <span className="text-[#2E3092]">▶</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                            src={img}
                            alt="When to Engage"
                            width={500}
                            height={300}
                            className="object-cover aspect-video"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
