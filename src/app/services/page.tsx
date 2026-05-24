import HeroServiceSection from "@/components/services/HeroServiceSection";
import DetailServiceSection from "@/components/services/DetailServiceSection";
import HowWeWorkSection from "@/components/services/HowWeWorkSection";
import FAQServiceSection from "@/components/services/FAQServiceSection";

export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroServiceSection />
      <DetailServiceSection />
      <HowWeWorkSection />
      <FAQServiceSection />
    </main>
  );
}