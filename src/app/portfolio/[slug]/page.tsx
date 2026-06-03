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
      <article className="py-16 bg-surface">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            href="/portfolio"
            className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
          >
            ← Back to portfolio
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

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            {project.description}
          </p>

          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md mb-16"
          />

          <div className="grid gap-8 md:grid-cols-2 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{project.reto}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Solution</h2>
              <p className="text-gray-600 leading-relaxed">{project.solucion}</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Result</h2>
              <p className="text-gray-600 leading-relaxed">{project.resultado}</p>
            </div>
            <img
              src={project.resultadoImage}
              alt="Project result"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition text-lg"
            >
              Request a Similar Project
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
