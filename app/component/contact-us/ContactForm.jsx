import React from "react";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-[55px] font-bold text-[#000000] mb-4 leading-tight">
            Get in touch with us.
          </h1>
          <h2 className="text-[55px] font-bold text-[#000000] leading-tight">
            We're here to assist you.
          </h2>
        </div>

        {/* Form Section */}
        <form className="space-y-12">
          {/* Input Row */}
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <label className="block text-2xl text-[#000000] font-medium">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors"
                placeholder=""
              />
            </div>
          </div>

          {/* Message Section */}
          <div className="space-y-2">
            <label className="block text-2xl text-[#000000] font-medium">
              Message
            </label>
            <textarea
              rows="6"
              className="w-full border-b-2 border-[#cacaca] bg-transparent pb-3 text-xl text-[#000000] placeholder-[#cacaca] focus:border-[#000000] focus:outline-none transition-colors resize-none"
              placeholder=""
            />
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="bg-[#ba0007] text-[#ffffff] px-12 py-6 rounded-full text-xl font-medium hover:bg-[#a00006] transition-colors flex items-center gap-3"
            >
              Leave us a Message
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
