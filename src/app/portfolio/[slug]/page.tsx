import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1">
      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/portfolio"
            className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
          >
            ← Volver al portafolio
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            {project.title}
          </h1>

          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md mb-8"
          />

          <p className="text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>


          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Solicita un proyecto similar
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
