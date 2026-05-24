import Link from "next/link";
import type { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/blog/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between gap-2">
          <time className="text-xs text-gray-400">{post.date}</time>
          <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200 transition">
            Leer más
          </Link>
        </div>
      </div>
    </article>
  );
}