import Image from "next/image";
import UseCases from "../../assets/infra/UseCases.webp";
import ButtonLayout from "../utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { Check } from "lucide-react";

export default function Component() {
  const useCases = [
    "ISVs migrating monoliths to containerized microservices",
    "Healthcare firms ensuring HIPAA-aligned infra blueprints",
    "FinTechs building cloud DR strategy with 99.99% uptime SLAs",
    "Retail giants integrating edge & cloud workloads across geos",
    "Product companies needing DevOps-first infra planning",
  ];

  return (
    <div className="bg-[#ffffff] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-12 items-stretch">
          {/* Left Content */}
          <div className="space-y-2 w-[100%]">
            {/* Header */}
            <div className=" mb-5">
              <h2 className="text-4xl font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent mb-5">
                Use Cases
              </h2>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-[#000000]">
                  Where It Works Best.
                </h3>
                <p className="text-lg text-[#000000] leading-relaxed">
                  Our Infrastructure Roadmap services have unlocked outcomes
                  for:
                </p>
              </div>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First row - 3 cards */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCases.slice(0, 3).map((useCase, index) => (
                  <div
                    key={index}
                    className="p-0.5 rounded-lg bg-gradient-to-t from-[#ba0007] to-[#2e3092]"
                  >
                    <div className="bg-[#ffffff] rounded-[calc(0.5rem-2px)] p-6 h-full space-y-4">
                      <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#ffffff]" />
                        {/* <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 0C8.0568 0 0 8.0604 0 18C0 27.9432 8.0568 36 18 36C27.9396 36 36 27.9432 36 18C36 8.0604 27.9396 0 18 0ZM14.3748 26.6508L7.4736 19.2492L10.6308 16.3008L14.472 20.4192L25.4592 9.3528L28.5264 12.3984L14.3748 26.6508Z"
                            fill="#2E3092"
                          />
                        </svg> */}
                      </div>
                      <p className="text-[#000000] font-medium leading-tight">
                        {useCase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row - 2 cards */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {useCases.slice(3, 5).map((useCase, index) => (
                  <div
                    key={index + 3}
                    className="p-0.5 rounded-lg bg-gradient-to-t from-[#ba0007] to-[#2e3092]"
                  >
                    <div className="bg-[#ffffff] rounded-[calc(0.5rem-2px)] p-6 h-full space-y-4">
                      <div className="w-8 h-8 bg-[#2e3092] rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#ffffff]" />
                        {/* <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 0C8.0568 0 0 8.0604 0 18C0 27.9432 8.0568 36 18 36C27.9396 36 36 27.9432 36 18C36 8.0604 27.9396 0 18 0ZM14.3748 26.6508L7.4736 19.2492L10.6308 16.3008L14.472 20.4192L25.4592 9.3528L28.5264 12.3984L14.3748 26.6508Z"
                            fill="#2E3092"
                          />
                        </svg> */}
                      </div>
                      <p className="text-[#000000] font-medium leading-tight">
                        {useCase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <ButtonLayout
                text={"Talk to Infra Strategist"}
                image={buttonImage}
                hoverImage={buttonImage}
                className={"w-fit"}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[50%] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={UseCases}
              alt="Team collaborating around a laptop in a modern office setting"
              // width={600}
              // height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
