"use client";
import Image from "next/image";
import BlogImage from "../../../assets/blog/imageBlog.webp";
import { FaFacebookF, FaLink, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import blogexpanImage from "../../../assets/blog/blogexpanImage.webp";
import sanitizeHtml from "sanitize-html";
import ProfileDummy from "../../../assets/caseStudies/Profile.webp";
import { baseUrl } from "@/config";
import { showHubSpotForm } from "../../utilities/showHubSpotForm";
export const Banner = ({ blog }) => {
  const baseUrl = "http://35.162.115.74/admin/assets/dist";

  return (
    <section className="md:py-7 px-7 md:px-20">
      <div className="container mx-auto   w-full border-b-[2px] border-[#F05A39] pb-4 ">
        <Image
          width={500}
          height={100}
          src={blog?.image ? `${baseUrl}${blog?.image}` : blogexpanImage}
          alt="Vlog-expan-image"
          className="w-full"
        />
        <div className="grid  grid-cols-12 items-center gap-6">
          <h1 className="col-span-12 md:col-span-9  text-3xl md:text-5xl font-bold leading-tight my-4">
            {blog?.title}
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

  const cleanHtml = sanitizeHtml(blog?.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "h1",
      "h2",
      "h3",
      "h4",
      "table",
      "thead",
      "tbody",
      "tr",
      "td",
      "th",
      "img",
      "ul",
      "li",
      "em",
      "strong",
      "a",
    ]),
    allowedAttributes: {
      "*": [
        "style",
        "href",
        "src",
        "alt",
        "target",
        "rel",
        "colspan",
        "rowspan",
        "className",
      ],
    },
    allowedSchemes: ["http", "https", "mailto"],
  });

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
    )}&text=${encodeURIComponent(blog?.title)}`,
    email: `mailto:?subject=${encodeURIComponent(
      blog?.title
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
                {new Date(blog?.date).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span>|</span>
              <span>{blog?.read_time} min read</span>
              <span>|</span>
              {blog?.authorData ? (
                <>
                  <span className="text-[#E36C0A]">{blog?.authorData?.name}</span>
                </>
              ) : (
                <span className="text-gray-400">Unknown Author</span>
              )}
            </div>
            {/* Blog Paragraphs */}
            {/* <p
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className={` text-xs md:text-base text-[black] `}
            ></p> */}

            <div
              dangerouslySetInnerHTML={{ __html: cleanHtml }}
              className="blog-content text-xs md:text-base text-black"
            ></div>
          </div>

          {/* Right Side: Sidebar */}
          <section className="col-span-12 md:col-span-4 mt-10 md:mt-2 space-y-10">
            {/* Profile Section */}

            <div className="w-[320px] h-[350px] bg-[#2E3092] manrope text-white rounded-2xl p-4 shadow-lg text-left">
  <div className="flex justify-start mb-4">
    <div className="rounded-xl overflow-hidden">
      {Array.isArray(blog?.authorData) ? (
        blog.authorData[0]?.image ? (
          <Image
            src={`${baseUrl}${blog.authorData.image}`}
            alt="Profile Image"
            width={150}
            height={200}
            className="object-cover"
          />
        ) : (
          <Image
            src={blogexpanImage}
            alt="Default Profile Image"
            width={150}
            height={200}
            className="object-cover"
          />
        )
      ) : blog?.authorData?.image ? (
        <Image
          src={`${baseUrl}${blog?.authorData?.image}`}
          alt="Profile Image"
          width={150}
          height={200}
          className="object-cover"
        />
      ) : (
        <Image
          src={blogexpanImage}
          alt="Default Profile Image"
          width={150}
          height={200}
          className="object-cover"
        />
      )}
    </div>
  </div>

  {/* Handle authorData */}
  {Array.isArray(blog?.authorData) ? (
    blog.authorData.map((auth, idx) => (
      <div key={idx}>
        <h3 className="text-[15px] font-bold mb-2">{auth.name}</h3>
        <p
          className="text-[12px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: auth.about }}
        />
      </div>
    ))
  ) : blog?.authorData ? (
    <div>
      <h3 className="text-[15px] font-bold mb-2">{blog.authorData.name}</h3>
      <p
        className="text-[12px] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.authorData.about }}
      />
    </div>
  ) : (
    <div>
      <h3 className="text-[20px] font-bold mb-2">Tom Neaves</h3>
      <p className="text-[15px] leading-relaxed">
        Lorem ipsum is a dummy or placeholder text commonly used in
        graphic design, publishing, and web development.
      </p>
    </div>
  )}
</div>

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
              {/* <input
                type="email"
                placeholder="Business Email*"
                className="w-[250px] lg:w-3/4 px-3 py-2 border border-gray-300 rounded-xl text-sm mb-[2rem]"
              /> */}
              <button onClick={()=>showHubSpotForm("subscribe")} className="w-[200px] xl:w-1/3 bg-[#BA0007] text-white py-2  hover:bg-[#BA0007] transition text-sm font-semibold rounded-xl">
                Subscribe
              </button>
            </div>

            {/* Tags */}
            <div>
              <div className="flex  flex-wrap gap-2 my-2">
                {Array.isArray(blog?.tagData) &&
                  blog.tagData.map((tag, idx) => (
                    <>
                     <span
                        key={idx}
                        className="text-[#E36C0A] font-semibold text-[18px]  rounded flex items-center"
                      >
                        {tag.name}
                        {idx !== blog.tagData.length - 1 && (
                          <span className="mx-2 text-[#E36C0A]">|</span>
                        )}
                      </span>
                    
                    </>
                    // <span
                    //   key={idx}
                    //   className="bg-[#2E3092] text-white w-[40%] text-center rounded-3xl text-sm px-4 py-4"
                    // >
                    //   {tag.name}
                    // </span>
                   
                  ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
