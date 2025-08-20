import React from "react";
import HeroSection from "@/app/component/contact-us/HeroSection";
import ContactForm from "@/app/component/contact-us/ContactForm";
import ContactCards from "@/app/component/contact-us/ContactCards";

export default function page() {
  return (
    <>
      <HeroSection />
      <ContactCards />
      <ContactForm />
    </>
  );
}
