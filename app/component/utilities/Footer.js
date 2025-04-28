import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import user from "../../assets/webinar.png";

import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <>
      <button
        className="fixed rounded-full cursor-pointer w-18 h-18 md:w-20 md:h-20 flex p-3 gap-0 flex-wrap items-center z-10 right-10 md:right-6 bottom-8 justify-center bg-[#ED1C24] text-white"
        style={{
          boxShadow:
            "0px 2px 4px rgba(0, 0, 0, 0.53), 0px 7px 7px rgba(0, 0, 0, 0.46), 0px 16px 10px rgba(0, 0, 0, 0.27), 0px 29px 12px rgba(0, 0, 0, 0.08), 0px 46px 13px rgba(0, 0, 0, 0.01)",
        }}
      >
        <Image
          src={user}
          alt="Calsoft Logo"
          width={40}
          height={40}
          className="md:h-auto h-8 object-contain"
        />
        <span className=" text-[10px] md:text-xs">Webinar</span>
      </button>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-6 xl:px-20 ">
          <div className="flex flex-col md:flex-row md:justify-between items-start pt-4 pb-6 ">
            <Image src={Logo} alt="Calsoft Logo" width={150} height={50} />
            <div className=" md:hidden mt-10 mb-10 md:-mt-14 w-full flex ">
              <div className="flex items-center justify-between relative w-full md:w-2/4 bg-[#333333] rounded-full">
                <input
                  type="email"
                  placeholder="Add your email*"
                  className="w-full md:w-[500px]  text-gray-300 px-4 py-3 pr-10  focus:outline-none"
                />
                <button className=" bg-[#2E3092] text-white rounded-full px-4 min-w-34 md:min-w-40 -ml-6 flex items-center gap-4 py-3 ">
                  <GoArrowRight /> Subscribe
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 col-span-2 md:col-span-3 md:gap-4 gap-6">
              {/* Company */}
              <div>
                <h3 className="md:text-lg text-base font-semibold mb-2 md:mb-8">
                  Company
                </h3>
                <ul className="mt-4 space-y-2 text-white">
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="md:text-lg text-base font-semibold mb-2 md:mb-8">
                  Industries
                </h3>
                <ul className="mt-4 space-y-2 text-white">
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Product Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Digital Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Managed Testing Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Sustaining & Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Data
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Artificial Intelligence
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="md:text-lg text-base font-semibold mb-2 md:mb-8">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2 text-white">
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs md:text-base font-light">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Row: Information Sections */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-8"> */}
          {/* Information - Full width on mobile, 1/4 on desktop */}
          {/* <div className="col-span-1 md:col-span-1">
              <h3 className="text-sm md:text-lg font-semibold md:mb-8">
                Calsoft Inc.
              </h3>
              <p className="text-xs font-light md:font-normal md:text-sm text-white mt-2">
                Calsoft is a leading technology-first partner, providing digital
                and product engineering services. For over 25 years, Calsoft has
                helped its customers solve their business challenges using
                technologies in Storage, virtualization, networking, security,
                cloud, AI/ML, IoT, and telecom.
              </p>
            </div> */}

          {/* Group the remaining 3 columns inside a grid for mobile */}

          {/* </div> */}
          <div className="hidden  mt-10 md:-mt-14 w-full md:flex ">
            <div className="flex items-center justify-between relative w-full md:w-2/4 bg-[#333333] rounded-full">
              <input
                type="email"
                placeholder="Add your email*"
                className="w-full md:w-[500px]  text-gray-300 px-4 py-3 pr-10  focus:outline-none"
              />
              <button className=" bg-[#2E3092] text-white rounded-full px-4 min-w-34 md:min-w-40 -ml-6 flex items-center gap-4 py-3 ">
                <GoArrowRight /> Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#2E3092] mt-8  ">
          <div className="container mx-auto px-4 py-4 md:px-20 ">
            <div className="flex flex-wrap gap-4  md:flex-row flex-col-reverse items-center justify-between">
              <p className="text-sm md:text-[15px] text-white block text-left w-full md:w-auto">
                © 2024 Calsoft | Designed by Crux
              </p>

              {/* Social Media Links */}
              <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
                <span className="text-white w-full md:w-auto">
                  Social Presence:
                </span>
                <Link
                  href="#"
                  className="rounded-full md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href="#"
                  className="rounded-full md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaXTwitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="rounded-full md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaYoutube size={20} />
                </Link>
                <Link
                  href="#"
                  className="rounded-full md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  href="#"
                  className="rounded-full md:w-12 md:h-12 w-10 h-10 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"
                >
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
