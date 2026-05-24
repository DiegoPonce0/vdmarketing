import HeroServiceSection from "@/components/services/HeroServiceSection";
import DetailServiceSection from "@/components/services/DetailServiceSection";
import HowWeWorkSection from "@/components/services/HowWeWorkSection";


export default function ServicesPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroServiceSection />
      <DetailServiceSection />
      <HowWeWorkSection />
    </main>
  );
}