{/*
  BlogList component
  - Receives an array of posts from mock data
  - Renders a responsive grid of BlogCard components
*/}

import BlogCard from "@/components/blog/BlogCard";
import { posts } from "@/data/posts";

export default function BlogList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Últimos Artículos
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}