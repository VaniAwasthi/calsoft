"use client";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        When User Input Lines Are Blurred: Indirect Prompt Injection Attack
        Vulnerabilities in AI LLMs
      </h1>

      <div className="text-sm text-gray-500 space-x-2">
        <span>December 10, 2024</span> •<span>7 Minute Read</span> •
        <span>
          by <span className="text-black font-medium">Tom Nawa</span>
        </span>
      </div>

      <div className="relative w-full h-60 md:h-80">
        <Image
          src="/spider-llm.png"
          alt="Spider AI"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};
export const ArticleContent = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {/* Left: Main Content */}
      <div className="md:col-span-2 space-y-6 text-gray-800 text-lg leading-relaxed">
        <p>
          It was a cold and wet Thursday morning, sometime in early 2006. There
          I was sitting at the very top back row of an awe-inspiring lecture
          theatre inside Royal Holloway’s Founder’s Building...
        </p>
        <p>
          The first rule of software security back then was never to trust user
          input...
        </p>
        <p>
          An SIEM system’s UI could be seen as an application of an “API” of the
          second kind...
        </p>
        <p>When I originally saw my “concern” come from the LLMs...</p>

        {/* Social Share */}
        <div className="flex space-x-3 mt-8">
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
            🔗
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
            💼
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
            ✉️
          </button>
          <button className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition">
            📘
          </button>
        </div>
      </div>

      {/* Right: Sidebar */}
      <aside className="space-y-6">
        {/* Subscribe box */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Stay Informed</h2>
          <p className="text-sm text-gray-600 mb-4">
            Sign up to receive the latest security news and threat insights.
          </p>
          <input
            type="email"
            placeholder="Business Email*"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
          />
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Subscribe
          </button>
        </div>

        {/* Tags */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
              Emerging Threats
            </span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
              Vulnerabilities
            </span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
              Artificial Intelligence
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
};
