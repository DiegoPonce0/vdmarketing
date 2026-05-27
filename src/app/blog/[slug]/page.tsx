import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1">
      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
          >
            ← Volver al blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>

          <time className="text-sm text-gray-400 block mb-8">{post.date}</time>

          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-md mb-8"
          />

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              {post.content}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
