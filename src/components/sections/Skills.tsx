import { PORTFOLIO_DATA } from '../../constants/portfolioData';

export default function SkillsOverview() {
  return (
    <section className="bg-slate-900 py-24 md:py-32" id="skills">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 items-center flex">
            <span className="w-8 h-[1px] bg-indigo-500 mr-4"></span>
            Technical Maturity
          </h2>
          <p className="text-4xl font-extrabold tracking-tighter text-white max-w-xl">
            Curated expertise for senior engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {PORTFOLIO_DATA.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-b border-slate-800 pb-3">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-slate-400 font-medium text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-3 group-hover:bg-indigo-500 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
