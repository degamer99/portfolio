import { PORTFOLIO_DATA } from "../../constants/portfolioData";

export default function HeroSection() {
  return (
    <header
      className="section-container flex flex-col md:flex-row gap-16 items-start"
      id="contact"
    >
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            Software <br />
            Engineer.
          </h1>
          <p className="text-slate-600 leading-relaxed pr-4 text-base">
            {PORTFOLIO_DATA.bio}
          </p>
        </div>

        <div className="space-y-6 mb-10">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">
              Contact
            </span>
            <div className="flex flex-col space-y-1">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                {PORTFOLIO_DATA.email}
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.phone}`}
                className="text-sm font-medium hover:text-indigo-600 transition-colors"
              >
                {PORTFOLIO_DATA.phone}
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={`https://${PORTFOLIO_DATA.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold px-3 py-1.5 bg-slate-50 border border-slate-200 rounded hover:border-slate-400 transition-all"
            >
              GitHub
            </a>
            <a
              href={`https://${PORTFOLIO_DATA.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold px-3 py-1.5 bg-slate-50 border border-slate-200 rounded hover:border-slate-400 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 pt-8">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-6">
            Active Expertise
          </span>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6">
            {PORTFOLIO_DATA.skills
              .flatMap((s) => s.items)
              .slice(0, 6)
              .map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {skill}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full aspect-square max-w-md bg-slate-100 rounded-lg overflow-hidden border border-slate-200 p-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
            alt={PORTFOLIO_DATA.name}
            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
