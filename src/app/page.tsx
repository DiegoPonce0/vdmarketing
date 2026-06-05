{/* Home Page (/): Composes HeroSection + ServicesSection */}
import HeroSection from "@/components/home/HeroSection";
import StatsBanner from "@/components/home/StatsBanner";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutUsSection />
      <StatsBanner />
      <ContactSection />
    </main>
  );
}
