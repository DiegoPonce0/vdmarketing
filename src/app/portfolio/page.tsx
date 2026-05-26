import HeroSection from "@/components/portfolio/HeroSection";
import ProjectList from "@/components/portfolio/ProjectList";

export default function PortfolioPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ProjectList />
    </main>
  );
}
