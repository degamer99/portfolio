export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA: {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  bio: string;
  skills: { category: string; items: string[] }[];
  projects: Project[];
  experience: Experience[];
} = {
  name: "Abdulrazaq Abdulhafeez",
  title: "Junior Software Developer",
  email: "abdulhafeezabdulrazaq04@gmail.com",
  phone: "+234 706-396-4857",
  linkedin: "linkedin.com/in/abdulrazaq-abdulhafeez-aa2061377/",
  github: "github.com/degamer99",
  bio: "With over 10 years of experience in architecting scalable web applications, I focus on bridging the gap between complex technical problems and seamless user experiences. My approach is rooted in clean code, performance optimization, and an unwavering commitment to accessibility.",
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Redux", "Web Workers"],
    },
    {
      category: "Backend/DevOps",
      items: ["Node.js", "PostgreSQL", "Docker", "AWS", "CI/CD Pipelines"],
    },
    {
      category: "Architecture",
      items: [
        "Microservices",
        "Serverless",
        "Event-Driven Systems",
        "REST/GraphQL",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "FinTech Transaction Engine",
      problem:
        "A legacy payment system was suffering from multi-second latency and high error rates during peak trading hours.",
      solution:
        "Architected a distributed event-driven system using Node.js and Redis, reducing processing time by 85%.",
      role: "Lead Architect",
      technologies: ["Node.js", "Redis", "PostgreSQL", "AWS Lambda"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "2",
      title: "Enterprise Design System",
      problem:
        "Inconsistent UI across 15+ internal products led to slow development cycles and user confusion.",
      solution:
        "Developed a comprehensive, accessible React component library used by 200+ engineers, improving UI parity.",
      role: "Core Contributor",
      technologies: ["React", "Storybook", "TypeScript", "Tailwind"],
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000",
    },
  ],
  experience: [
    {
      company: "Stripe",
      role: "Staff Engineer",
      period: "2021 — Present",
      description:
        "Leading the core checkout experience team, focusing on high-availability global payment flows.",
    },
    {
      company: "Vercel",
      role: "Senior Full Stack Dev",
      period: "2018 — 2021",
      description:
        "Contributed to core deployment infrastructure and developed performance monitoring tools.",
    },
    {
      company: "DesignCo",
      role: "Software Engineer",
      period: "2015 — 2018",
      description:
        "Built high-performance marketing sites and custom internal CMS solutions.",
    },
  ],
};
