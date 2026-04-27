import { FileDown, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';

export default function ResumeSnapshot() {
  return (
    <section className="section-container border-t border-slate-100" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 flex items-center">
              <span className="w-8 h-[1px] bg-slate-200 mr-4"></span>
              Career Progression
            </h2>
            <p className="text-4xl font-extrabold tracking-tighter text-slate-900 leading-none">
              A decade of building <br />for scale.
            </p>
          </div>
          
          <p className="text-slate-500 leading-relaxed max-w-sm text-sm">
            My experience bridges the gap between infrastructure stability and rapid frontend innovation. I focus on long-term maintainability and performance.
          </p>

          <a 
            href="#" 
            className="btn-primary inline-flex items-center space-x-3 px-8 py-5 rounded-none uppercase tracking-widest text-xs"
          >
            <span>Download Colophon / CV</span>
            <FileDown size={16} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-16 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-100 pl-10">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[46px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-600 transition-colors" />
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">{exp.company}</h3>
                    <span className="font-mono text-[10px] font-bold text-slate-400 tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{exp.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
