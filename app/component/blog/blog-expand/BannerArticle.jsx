"use client";
import Image from "next/image";
import BlogImage from "../../../assets/blog/imageBlog.webp";
import { FaFacebookF, FaLink, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import blogexpanImage from "../../../assets/blog/blogexpanImage.webp";
export const Banner = ({ blog }) => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";

  return (
    <section className="md:py-7 px-7 md:px-20">
      <div className="container mx-auto   w-full border-b-[2px] border-[#F05A39] pb-4 ">
        <Image
          width={500}
          height={100}
          src={blog.image ? `${baseUrl}${blog.image}` : blogexpanImage}
          alt="Vlog-expan-image"
          className="w-full"
        />
        <div className="grid  grid-cols-12 items-center gap-6">
          <h1 className="col-span-12 md:col-span-9  text-3xl md:text-5xl font-bold leading-tight my-4">
            {blog.title}
          </h1>
          {/* <div className="relative col-span-12 md:col-span-3 w-full h-48 md:h-64">
            <Image
              src={BlogImage}
              alt="Blog banner"
              fill
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export const ArticleContent = ({ blog }) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(blog.title)}`,
    email: `mailto:?subject=${encodeURIComponent(
      blog.title
    )}&body=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
  };

  return (
    <section className="md:py-7 px-3 py-14 ">
      <div className="container mx-auto md:px-20 xl:px-20 w-full">
        <div className="grid grid-cols-12 md:gap-10">
          {/* Left Side: Main Content */}
          <div className="col-span-12 md:col-span-8  space-y-6">
            {/* Date, Read Time, Author */}
            <div className="text-sm text-gray-500 flex gap-3">
              <span className="text-[#939393]">
                {new Date(blog.date).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>|</span>
              <span>{blog.read_time} min read</span>
              <span>|</span>
              {blog.authorData ? (
                <>
                  <span className="text-[#E36C0A]">{blog.authorData.name}</span>
                  <span className="text-[#939393]">
                    {new Date(blog.authorData.createdAt).toLocaleString(
                      "en-IN",
                      {
                        timeZone: "Asia/Kolkata",
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>
                </>
              ) : (
                <span className="text-gray-400">Unknown Author</span>
              )}
            </div>
            {/* Blog Paragraphs */}
            <p
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className={` text-xs md:text-base text-[black] `}
            ></p>
          </div>

          {/* Right Side: Sidebar */}
          <section className="col-span-12 md:col-span-4 mt-10 md:mt-2 space-y-10">
            {/* Share Icons */}
            <div className="flex flex-wrap gap-8  items-center">
              <h3 className="text-[15px] font-normal mb-3">Share:</h3>
              <div className="flex space-x-3">
                <span
                  onClick={handleCopy}
                  className="bg-[#2E3092] hover:bg-[#BA0007] transition p-2 rounded"
                >
                  <FaLink className="text-lg text-white" />
                </span>
                {copied && (
                  <span className="text-sm text-green-600">Link copied!</span>
                )}
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2E3092] hover:bg-[#BA0007] transition p-2 rounded"
                >
                  <FaLinkedin className="text-lg text-white" />
                </a>
                <a
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2E3092] hover:bg-[#BA0007] transition p-2 rounded"
                >
                  <FaXTwitter className="text-lg text-white" />
                </a>
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2E3092] hover:bg-[#BA0007] transition p-2 rounded"
                >
                  <FaFacebookF className="text-lg text-white" />
                </a>
              </div>
            </div>

            {/* Stay Informed */}
            <div className="p-2">
              <h2 className="text-base font-semibold mb-2">Stay Informed</h2>
              <p className="text-[15px]   mb-4 w-full ">
                Sign up to receive the latest security news and threat insights
                in your inbox from Threatsense.
              </p>
              <input
                type="email"
                placeholder="Business Email*"
                className="w-[250px] lg:w-3/4 px-3 py-2 border border-gray-300 rounded-xl text-sm mb-[2rem]"
              />
              <button className="w-[200px] xl:w-1/3 bg-[#BA0007] text-white py-2  hover:bg-[#BA0007] transition text-sm font-semibold rounded-xl">
                Subscribe
              </button>
            </div>

            {/* Tags */}
            <div>
              <div className="flex flex-col flex-wrap gap-2 my-2">
                {Array.isArray(blog?.tagData) &&
                  blog.tagData.map((tag) => (
                    <span
                      key={tag._id}
                      className="bg-black text-white w-[40%] text-center rounded-3xl text-sm px-4 py-4"
                    >
                      {tag.name}
                    </span>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
