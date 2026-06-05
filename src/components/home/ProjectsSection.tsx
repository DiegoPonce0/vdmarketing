import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsSection() {
  const latestProjects = projects.slice(-3);

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Latest Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
