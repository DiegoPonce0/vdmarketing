{/*
  Blog listing page (/blog)
  - Imports BlogList + mock posts data
  - Renders page title "Blog" + BlogList grid
*/}

import HeroSection from "@/components/blog/HeroSection";

export default function BlogPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
        
    </main>
  );
}