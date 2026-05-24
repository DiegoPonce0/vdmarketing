{/*
  Contact page (/contact)
  - Renders ContactForm component
  - Displays contact info: email, phone, hours
  - Optional: embedded map placeholder
*/}

import HeroSection from "@/components/contact/HeroSection";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ContactForm />
    </main>
  );
}