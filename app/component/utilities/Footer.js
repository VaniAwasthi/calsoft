import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn , FaXTwitter, FaYoutube, FaFacebookF , FaInstagram } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import user from "../../assets/webinar.png";


import { GoArrowRight } from "react-icons/go";


const Footer = () => {
  return (
    <>
    <button className="fixed rounded-full cursor-pointer w-24 h-24 flex p-3 gap-0 flex-wrap items-center z-10 right-6 bottom-8 justify-center bg-[#ED1C24] text-white" style={{boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.53), 0px 7px 7px rgba(0, 0, 0, 0.46), 0px 16px 10px rgba(0, 0, 0, 0.27), 0px 29px 12px rgba(0, 0, 0, 0.08), 0px 46px 13px rgba(0, 0, 0, 0.01)"}}>
    <Image src={user} alt="Calsoft Logo" width={50} height={50} />
    <span className="-mt-1 text-sm">Webinar</span>

    </button>

    <footer className="bg-black text-white">

      <div className="container mx-auto px-4 py-10 md:px-20 ">
         <div className="flex flex-col md:flex-row justify-between items-center pt-4 pb-6">
        <Image src={Logo} alt="Calsoft Logo" width={150} height={50} />
        <div className="mt-6 md:mt-0 w-full flex justify-end self-end">
          <div className="flex items-center justify-between relative w-2/4 bg-[#333333] rounded-full" >
            <input
              type="email"
              placeholder="Add your email*"
              className="w-full md:w-[500px]  text-gray-300 px-4 py-3 pr-10  focus:outline-none"
            />
            <button className=" bg-[#2E3092] text-white rounded-full px-4 min-w-40 -ml-6 flex items-center gap-4 py-3 ">
            <GoArrowRight /> Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Second Row: Information Sections */}
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        {/* Information */}
        <div className="">
          <h3 className="text-lg font-semibold mb-8">Calsoft Inc.</h3>
          <p className="text-sm text-white mt-2">
            Calsoft is a leading technology-first partner, providing digital and product engineering services.
            For over 25 years, Calsoft has helped its customers solve their business challenges using
            technologies in Storage, virtualization, networking, security, cloud, AI/ML, IoT, and telecom.
          </p>
        </div>

        {/* Company Links */}

        <div className="md:pl-14">
          <h3 className="text-lg font-semibold mb-8">Company</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Leadership</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Industries Links */}
        <div>
          <h3 className="text-lg font-semibold mb-8">Industries</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><Link href="#">Product Engineering</Link></li>
            <li><Link href="#">Digital Engineering</Link></li>
            <li><Link href="#">Managed Testing Services</Link></li>
            <li><Link href="#">Sustaining & Support</Link></li>
            <li><Link href="#">Data</Link></li>
            <li><Link href="#">Artificial Intelligence</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold mb-8">Resources</h3>
          <ul className="mt-4 space-y-2 text-white">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Community</Link></li>
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>


      </div>
      <div className="bg-[#2E3092] mt-8  ">
      <div className="container mx-auto px-4 py-4 md:px-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm md:text-[15px] text-white">© 2024 Calsoft | Designed by Crux</p>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-white">Social Presence:</span>
          <Link href="#" className="rounded-full w-12 h-12 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"><FaLinkedinIn  size={20} /></Link>
          <Link href="#" className="rounded-full w-12 h-12 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"><FaXTwitter size={20} /></Link>
          <Link href="#" className="rounded-full w-12 h-12 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"><FaYoutube size={20} /></Link>
          <Link href="#" className="rounded-full w-12 h-12 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"><FaFacebookF  size={20} /></Link>
          <Link href="#" className="rounded-full w-12 h-12 border flex items-center justify-center p-2 border-[#ED1C24] hover:bg-[#ED1C24]"><FaInstagram size={20} /></Link>
        </div>
      </div>
      </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
