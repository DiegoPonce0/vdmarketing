import { notFound } from "next/navigation";
import Link from "next/link";
import type { PostSection } from "@/types";
import { posts } from "@/data/posts";

function renderSection(section: PostSection, index: number) {
  switch (section.type) {
    case "intro":
      return (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 first:mt-0">
          {section.content}
        </p>
      );
    case "section":
      return (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>
          )}
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      );
    case "conclusion":
      return (
        <div key={index} className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          {section.heading && (
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {section.heading}
            </h2>
          )}
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      );
    case "cta":
      return (
        <div key={index} className="mb-8 p-8 bg-blue-600 rounded-lg text-center">
          {section.heading && (
            <h2 className="text-2xl font-bold text-white mb-4">
              {section.heading}
            </h2>
          )}
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">{section.content}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Book a Free Consultation
          </Link>
        </div>
      );
    default:
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {section.content}
        </p>
      );
  }
}

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
      <article className="py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
          >
            ← Back to blog
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

          {post.sections ? (
            <div className="prose prose-gray max-w-none">
              {post.sections.map((section, i) => renderSection(section, i))}
            </div>
          ) : (
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.content}
              </p>
            </div>
          )}

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
