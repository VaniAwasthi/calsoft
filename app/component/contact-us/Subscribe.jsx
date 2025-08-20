import React from "react";

export default function Subscribe() {
  return (
    <div className="bg-[#2E3092]">
      <div className="container text-white flex md:flex-row flex-col justify-between gap-5 items-center">
        <div className="flex-1 space-y-3 my-16">
          <p className="text-[40px] font-semibold">
            Subcribe to our Newsletter
          </p>
          <p className="text-xl">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.{" "}
          </p>
        </div>
        <div className="bg-[#ffffff33] flex-1 rounded-xl flex justify-between">
          <input
            type="text"
            placeholder="Enter your email"
            className="placeholder-white text-white
             focus:outline-none focus:ring-0 pl-8 py-3"
          />
          <button className="text-[#2E3092] p-7 rounded-lg bg-white">
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
}
