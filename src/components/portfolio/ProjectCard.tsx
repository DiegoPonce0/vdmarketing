import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
      <Link href={`/portfolio/${project.slug}`} className="relative overflow-hidden block aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <span className="text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
             View Case Study 
             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </span>
        </div>
      </Link>
      
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-black tracking-widest bg-blue-50 text-[#1E3A8A] px-2.5 py-1 rounded-sm uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#1E3A8A] transition-colors mb-3 leading-tight">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm leading-relaxed font-light flex-1">
          {project.description}
        </p>

        <Link 
          href={`/portfolio/${project.slug}`} 
          className="mt-8 text-xs font-black tracking-widest text-gray-900 hover:text-[#1E3A8A] border-b-2 border-gray-100 hover:border-[#1E3A8A] pb-1 transition-all inline-block w-fit uppercase"
        >
          Read Story
        </Link>
      </div>
    </article>
  );
}
