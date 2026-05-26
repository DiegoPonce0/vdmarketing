{/*
  Blog listing page (/blog)
  - Imports BlogList + mock posts data
  - Renders page title "Blog" + BlogList grid
*/}

import BlogList from "@/components/blog/BlogList";
import HeroSection from "@/components/blog/HeroSection";
import Newsletter from "@/components/blog/Newsletter";
import Pagination from "@/components/blog/Pagination";
import SearchBar from "@/components/blog/SearchBar";

export default function BlogPage() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <SearchBar />
      <BlogList />
      <Pagination />
      <Newsletter />
    </main>
  );
}