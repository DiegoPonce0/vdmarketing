"use client";

import { posts } from "@/data/posts";
import { useBlog } from "@/hooks/useBlog";
import BlogList from "@/components/blog/BlogList";
import HeroSection from "@/components/blog/HeroSection";
import Newsletter from "@/components/blog/Newsletter";
import Pagination from "@/components/blog/Pagination";
import SearchBar from "@/components/blog/SearchBar";

export default function BlogPage() {
  const {
    searchTerm,
    activeFilter,
    currentPage,
    totalPages,
    visiblePosts,
    updateSearch,
    updateFilter,
    goToPage,
  } = useBlog(posts);

  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={updateSearch}
        activeFilter={activeFilter}
        onFilterChange={updateFilter}
      />
      <BlogList posts={visiblePosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
      <Newsletter />
    </main>
  );
}
