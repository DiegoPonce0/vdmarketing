{/* Home Page (/): Composes HeroSection + ServicesSection */}
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactSection />
    </main>
  );
}
