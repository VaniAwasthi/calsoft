import React from "react";
import HeroSection from "@/app/component/contact-us/HeroSection";
import ContactForm from "@/app/component/contact-us/ContactForm";
import ContactCards from "@/app/component/contact-us/ContactCards";
import Subscribe from "../component/contact-us/Subscribe";
import ContactTab from "@/app/component/contact-us/ContactTab";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ContactCards />
      <ContactForm />
      <ContactTab />
      <Subscribe />
    </>
  );
}
