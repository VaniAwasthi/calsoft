import ButtonLayout from "../../component/utilities/ButtonLayout";
import buttonImage from "../../assets/home/buttonImg.webp";
import { motion } from "framer-motion";

export default function WhyItMatters({
  buttonText = "Download Case Study",
  buttonClicked,
}) {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
        {/* Left Side */}
        <div>
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-bold bg-[linear-gradient(to_right,#2E3092_10%,#ED1C24_28%)] bg-clip-text text-transparent">
            Why It Matters
          </h2>

          {/* Button */}

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-9"
          >
            <ButtonLayout
              text={buttonText}
              image={buttonImage}
              hoverImage={buttonImage}
              className={"w-fit shadow-2xl"}
              onClick={buttonClicked}
            />
          </motion.div>
        </div>

        {/* Right Side Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-md shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E3092] to-[#ED1C24] text-white px-4 flex justify-center items-center h-40 lg:h-22 font-semibold text-2xl">
              What You Know:
            </div>
            <div className="bg-white p-4  text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Your interface looks modern.</li>
                <li>It has menus, modals, tabs, themes.</li>
                <li>It checks the UI/UX design box.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-md shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E3092] to-[#ED1C24] text-white px-4 flex justify-center items-center h-40 lg:h-22  font-semibold text-2xl">
              What You May Not Know:
            </div>
            <div className="bg-white p-4  text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>87% of users still navigate via guesswork.</li>
                <li>42% of enterprise app UIs assume fixed workflows.</li>
                <li>
                  65% of clicks happen on elements that don’t result in the
                  expected outcome.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-md shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[#2E3092] to-[#ED1C24] text-white px-4 flex justify-center items-center h-40 lg:h-22 font-semibold text-2xl">
              What We Do:
            </div>
            <div className="bg-white p-4 text-gray-700">
              <p>
                We transform UIs from static interaction layers into dynamic,
                feedback-aware, user-sensitive ecosystems—that learn, adapt, and
                guide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
