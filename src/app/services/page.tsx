import HeroServiceSection from "@/components/services/HeroServiceSection";
import DetailServiceSection from "@/components/services/DetailServiceSection";
import HowWeWorkSection from "@/components/services/HowWeWorkSection";
import FAQServiceSection from "@/components/services/FAQServiceSection";
import ContactSection from "@/components/services/ContactSection";


export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroServiceSection />
      <DetailServiceSection />
      <HowWeWorkSection />
      <FAQServiceSection />
      <ContactSection />
    </main>
  );
}