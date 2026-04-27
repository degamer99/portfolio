import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../../constants/portfolioData';

export default function CaseStudiesSection() {
  return (
    <section className="section-container border-t border-slate-100" id="projects">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-xl font-bold tracking-tight">Selected Projects</h2>
        <span className="text-xs text-slate-400 font-medium">01 — {PORTFOLIO_DATA.projects.length.toString().padStart(2, '0')}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group card-slate flex flex-col h-full">
      <div className="w-full h-48 bg-slate-200 mb-6 rounded overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex gap-2 mb-4">
        <span className="badge-dark">{project.technologies[0]}</span>
        <span className="badge-light">{project.technologies[1] || 'SaaS'}</span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
        {project.title}
      </h3>
      
      <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">
        {project.solution}
      </p>

      <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-4">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          {project.technologies.slice(0, 3).join(' • ')}
        </span>
        <div className="w-8 h-8 border border-slate-900 rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:translate-x-1">
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
}
