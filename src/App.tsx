import React, { useState } from "react";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";

// --- DATA ---
const PORTFOLIO_DATA = {
  name: "Abdulrazaq Abdulhafeez",
  title: "Junior Software Developer",
  email: "abdulhafeezabdulrazaq04@gmail.com",
  phone: "+234 706-396-4857",
  linkedin: "linkedin.com/in/abdulrazaq-abdulhafeez-aa2061377/",
  github: "github.com/degamer99",
  bio: "I began my coding journey in secondary school, writing logic on paper before I even owned a laptop. That foundational resourcefulness has evolved into a career built on disciplined self-learning and technical problem-solving. Today, I build high-performance web applications and software solutions with the same passion that started it all. I'm a dedicated developer focused on staying at the forefront of emerging tech to deliver impactful, user-centric products.",
  resumeFile: "images_to_pdf (1).pdf",
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "Go-lang", "SQL", "HTML/CSS"],
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Next.js", "Git", "Code Debugging"],
    },
    {
      category: "Core Competencies",
      items: [
        "Full Stack Development",
        "Problem Solving",
        "Self-Directed Learning",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Assistant Instructor",
      problem:
        "Need for hands-on application development instruction for female empowerment initiatives.",
      solution:
        "Helped instruct girls in application development at a STEAM program supported by the French Embassy and the Girl Child Value Support Initiative.",
      role: "Instructor",
      technologies: ["Teaching", "App Development", "Mentorship"],
      imageUrl:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "2",
      title: "Alternative Tech Explorer",
      problem:
        "Existing company software needed evaluation and potential replacement for improved performance.",
      solution:
        "Created and evaluated software alternatives for tools already working in the company to drive continuous improvement and cost-efficiency.",
      role: "Developer",
      technologies: ["Software Evaluation", "Development", "Optimization"],
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    },
  ],
  experience: [
    {
      company: "Fiverr / Upwork",
      role: "Freelance Web Developer",
      period: "Feb 2022 — Dec 2024",
      description:
        "Operated as a freelance developer creating custom websites and providing tailored technical solutions to clients globally.",
    },
    {
      company: "Self-Employed",
      role: "Full Stack Developer",
      period: "June 2021 — Present",
      description:
        "Designed, developed, and deployed fully functional websites for neighboring businesses to help them establish an online presence.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering, Electrical and Electronics Engineering",
      school: "Abubakar Tafawa Balewa University",
      period: "Jan 2020 — Present",
      location: "Yelwa, Bauchi State",
    },
  ],
};

// --- COMPONENTS ---

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-10 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold rounded">
            {PORTFOLIO_DATA.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <a
            href="#"
            className="font-semibold text-lg tracking-tight text-slate-900"
          >
            {PORTFOLIO_DATA.name}
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.resumeFile}
            download="Abdulrazaq_Abdulhafeez_Resume.pdf"
            className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white border-b border-zinc-200 p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.resumeFile}
            download="Abdulrazaq_Abdulhafeez_Resume.pdf"
            className="block w-full text-center bg-slate-900 text-white px-4 py-3 rounded hover:bg-slate-800 transition-colors text-sm font-medium mt-4"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <header
      className="max-w-6xl mx-auto px-10 py-24 md:py-36 flex flex-col md:flex-row gap-16 items-start"
      id="contact"
    >
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold tracking-tighter leading-[0.95] mb-6">
            Software <br />
            Developer.
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
        <div className="w-full aspect-square max-w-md bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-sm p-2">
          {/* Replaced with user's specific uploaded image */}
          <img
            src="hafeez3.png"
            alt={PORTFOLIO_DATA.name}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </header>
  );
}

function CaseStudiesSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-10 py-24 md:py-36 border-t border-slate-100"
      id="projects"
    >
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-xl font-bold tracking-tight">
          Experience & Projects
        </h2>
        <span className="text-xs text-slate-400 font-medium">
          01 — {PORTFOLIO_DATA.projects.length.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <div
            key={project.id}
            className="group bg-slate-50 border border-slate-200 p-6 transition-all hover:border-slate-400 flex flex-col h-full rounded"
          >
            <div className="w-full h-48 bg-slate-200 mb-6 rounded overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex gap-2 mb-4">
              <span className="text-[9px] px-2 py-0.5 bg-slate-900 text-white font-bold uppercase tracking-wider rounded-full">
                {project.technologies[0]}
              </span>
              <span className="text-[9px] px-2 py-0.5 bg-white border border-slate-300 text-slate-600 font-bold uppercase tracking-wider rounded-full">
                {project.technologies[1] || "Web"}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
              {project.title}
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">
              {project.solution}
            </p>

            <div className="mt-auto flex justify-between items-center border-t border-slate-100 pt-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                {project.technologies.slice(0, 3).join(" • ")}
              </span>
              <div className="w-8 h-8 border border-slate-900 rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:translate-x-1">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsOverview() {
  return (
    <section className="bg-slate-900 py-24 md:py-32" id="skills">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-4 items-center flex">
            <span className="w-8 h-[1px] bg-indigo-500 mr-4"></span>
            Technical Toolkit
          </h2>
          <p className="text-4xl font-extrabold tracking-tighter text-white max-w-xl">
            Foundational and modern skills for robust development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PORTFOLIO_DATA.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 border-b border-slate-800 pb-3">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-400 font-medium text-sm flex items-center group"
                  >
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

function ResumeSnapshot() {
  return (
    <section
      className="max-w-6xl mx-auto px-10 py-24 md:py-36 border-t border-slate-100"
      id="experience"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 flex items-center">
              <span className="w-8 h-[1px] bg-slate-200 mr-4"></span>
              Career Progression
            </h2>
            <p className="text-4xl font-extrabold tracking-tighter text-slate-900 leading-none">
              Building reliable <br />
              software from the ground up.
            </p>
          </div>

          <p className="text-slate-500 leading-relaxed max-w-sm text-sm">
            My journey started with writing logic on paper. Today, I combine my
            Electrical and Electronics Engineering background with disciplined
            self-learning to deliver impactful, user-centric web applications.
          </p>

          <a
            href={PORTFOLIO_DATA.resumeFile}
            download="Abdulrazaq_Abdulhafeez_Resume.pdf"
            className="bg-slate-900 text-white hover:bg-slate-800 transition-colors inline-flex items-center space-x-3 px-8 py-5 rounded-none uppercase tracking-widest text-xs font-medium"
          >
            <span>Download CV</span>
            <FileDown size={16} />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-12 relative before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-100 pl-10">
            {/* Professional Experience */}
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[46px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-600 transition-colors" />
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-slate-400 tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {exp.role}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Education Section Added based on Resume */}
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div
                key={`edu-${index}`}
                className="relative group mt-8 pt-8 border-t border-slate-100"
              >
                <div className="absolute -left-[46px] top-10 w-3 h-3 rounded-full bg-slate-200 border-2 border-slate-300" />
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-lg uppercase tracking-tight">
                      {edu.school}
                    </h3>
                    <span className="font-mono text-[10px] font-bold text-slate-400 tracking-widest">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    Education
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                    {edu.degree} <br />
                    {edu.location}
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

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 py-16 bg-white">
      <div className="max-w-6xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          © {currentYear} {PORTFOLIO_DATA.name}. Engineered for impact.
        </p>

        <div className="flex items-center space-x-10">
          <a
            href={`https://${PORTFOLIO_DATA.github}`}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href={`https://${PORTFOLIO_DATA.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

// --- MAIN APP ---
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main>
        <HeroSection />
        <CaseStudiesSection />
        <SkillsOverview />
        <ResumeSnapshot />
      </main>

      <Footer />
    </div>
  );
}
