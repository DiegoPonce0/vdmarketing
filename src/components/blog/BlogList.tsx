import BlogCard from "@/components/blog/BlogCard";
import type { Post } from "@/types";

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-lg">No articles found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Latest Articles
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
