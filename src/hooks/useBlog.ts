"use client";

import { useState, useMemo } from "react";
import type { Post } from "@/types";

const POSTS_PER_PAGE = 6;

export function useBlog(posts: Post[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        activeFilter === "All" || post.tags.includes(activeFilter);
      return matchesSearch && matchesFilter;
    });
  }, [posts, searchTerm, activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  const safePage = Math.min(currentPage, totalPages);

  const visiblePosts = useMemo(() => {
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, safePage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const updateSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const updateFilter = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return {
    searchTerm,
    activeFilter,
    currentPage: safePage,
    totalPages,
    filteredPosts,
    visiblePosts,
    updateSearch,
    updateFilter,
    goToPage,
  };
}
