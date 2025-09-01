"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

import Logo from "../../assets/logo.png";
import user from "../../assets/webinar.png";
import IsoImg from "../../assets/isoLogo.png";
import React, { useState } from "react";
import { toast } from "sonner";
// import { showHubSpotForm } from "./showHubSpotForm"; // <-- Utility import

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  return (
    <>
      {/* Webinar Floating Button */}
      <button
        className="fixed rounded-full cursor-pointer w-18 h-18 md:w-20 md:h-20 flex p-3 gap-0 flex-wrap items-center z-90 right-10 md:right-6 bottom-8 justify-center bg-[#ED1C24] text-white"
        style={{
          boxShadow:
            "0px 2px 4px rgba(0, 0, 0, 0.53), 0px 7px 7px rgba(0, 0, 0, 0.46), 0px 16px 10px rgba(0, 0, 0, 0.27), 0px 29px 12px rgba(0, 0, 0, 0.08), 0px 46px 13px rgba(0, 0, 0, 0.01)",
        }}
        // onClick={() => showHubSpotForm("webinar")}
      >
        <Image
          src={user}
          alt="Webinar Icon"
          width={40}
          height={40}
          className="h-8 object-contain"
        />
        <span className="text-[10px] md:text-xs">Webinar</span>
      </button>

      {/* Main Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-6 xl:px-15">
          <div className="flex flex-col md:flex-row justify-between items-start pt-8 pb-8">
            <div>
              <Image src={Logo} alt="Calsoft Logo" width={150} height={50} />
            </div>

            {/* Email Subscription */}
            {!subscribed ? (
              <div className="mt-10 md:mt-0 w-full md:w-[400px]">
                <div className="flex items-center relative bg-[#333333] rounded-full">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Add your email*"
                    className="w-full text-gray-300 px-4 py-3 pr-10 bg-transparent rounded-full focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (email.length > 0) {
                        if (isEmail(email)) setSubscribed(true);
                        else
                          toast.error("Email is invalid", {
                            duration: 3000,
                          });
                      } else
                        toast.error("Email field is empty", {
                          duration: 3000,
                        });
                    }}
                    className="bg-[#2E3092] text-white rounded-full px-4 flex items-center gap-2 py-3 absolute right-0"
                  >
                    <GoArrowRight /> Subscribe
                  </button>
                </div>
              </div>
            ) : (
              <p>You&apos;re subscribed</p>
            )}
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm md:text-base">
            {/* Services */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/digital-product-engineering">
                    Digital Product Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/data-ai">Data and Artificial Intelligence</Link>
                </li>
                <li>
                  <Link href="/digital-product-engineering/sustenance-support">
                    Sustaining & Support
                  </Link>
                </li>
                <li>
                  <Link href="/digital-product-engineering/testing-as-a-service">
                    Managed Testing Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/insights/blogs">Blog</Link>
                </li>
                <li>
                  <Link href="/insights/case-studies">Case Study</Link>
                </li>
                <li>
                  <Link href="/insights/whitepaper">Whitepapers</Link>
                </li>
                <li>
                  <Link href="/insights/industry-report">Industry Reports</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/leadership">Leadership</Link>
                </li>
                <li>
                  <Link href="/career">Careers</Link>
                </li>
                <li>
                  <Link href="/insights/webinars">Press</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Headquarters */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4">Headquarters</h3>
              <ul className="space-y-2 text-sm">
                <li>USA - San Jose</li>
                <li>INDIA - Pune</li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>

            {/* Social Presence */}
            <div>
              <h3 className="text-[20px] font-semibold mb-4">
                Social Presence
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/calsoft/"
                  target="_blank"
                  className="rounded-full w-8 h-8 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="https://x.com/CalsoftInc"
                  target="_blank"
                  className="rounded-full w-8 h-8 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaXTwitter size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/user/TheCalsoftInc?themeRefresh=1"
                  className="rounded-full w-8 h-8 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Calsoft"
                  className="rounded-full w-8 h-8 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/calsoftinc/"
                  className="rounded-full w-8 h-8 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaInstagram size={20} />
                </a>
                <div className="rounded-full w-10 h-10 flex items-center justify-center ">
                  <Image src={IsoImg} alt="isoImg" width={30} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="bg-[#2E3092] mt-8">
          <div className="container mx-auto px-4 py-4 md:px-20 text-sm text-white text-center">
            ©2024 Calsoft | Designed by Crux
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
