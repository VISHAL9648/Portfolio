const techCategories = [
  {
    label: "Frontend",
    color: "blue",
    iconPath: "M3 5h18M3 12h18M3 19h18",
    techs: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "green",
    iconPath: "M5 12h14M12 5l7 7-7 7",
    techs: ["Node.js", "Express.js", "NestJS", "FastAPI"],
  },
  {
    label: "Database",
    color: "orange",
    iconPath: "M12 2C6.477 2 2 4.686 2 8s4.477 6 10 6 10-2.686 10-6-4.477-6-10-6zM2 8v4c0 3.314 4.477 6 10 6s10-2.686 10-6V8",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "TypeORM"],
  },
  {
    label: "AI / GenAI",
    color: "purple",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    techs: ["OpenAI API", "LLMs", "RAG", "Embeddings", "Vector DBs", "LangChain", "LangGraph", "AI Agents"],
  },
  {
    label: "Cloud & DevOps",
    color: "cyan",
    iconPath: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    techs: ["AWS", "AWS S3", "Docker", "Render"],
  },
  {
    label: "Tools",
    color: "rose",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    techs: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; pill: string }> = {
  blue:   { border: "border-blue-200",   bg: "bg-blue-50",   text: "text-blue-700",   dot: "bg-blue-500",   pill: "bg-blue-100 text-blue-700 border-blue-200" },
  green:  { border: "border-green-200",  bg: "bg-green-50",  text: "text-green-700",  dot: "bg-green-500",  pill: "bg-green-100 text-green-700 border-green-200" },
  orange: { border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500", pill: "bg-orange-100 text-orange-700 border-orange-200" },
  purple: { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500", pill: "bg-purple-100 text-purple-700 border-purple-200" },
  cyan:   { border: "border-cyan-200",   bg: "bg-cyan-50",   text: "text-cyan-700",   dot: "bg-cyan-500",   pill: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  rose:   { border: "border-rose-200",   bg: "bg-rose-50",   text: "text-rose-700",   dot: "bg-rose-500",   pill: "bg-rose-100 text-rose-700 border-rose-200" },
};

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle mx-auto text-center">
            A curated set of modern tools and frameworks I use to build
            scalable full-stack and AI-powered applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category) => {
            const c = colorMap[category.color];
            return (
              <div
                key={category.label}
                className={`card p-6 hover-lift border ${c.border}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <svg
                      className={`w-5 h-5 ${c.text}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={category.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{category.label}</h3>
                    <p className="text-xs text-slate-400">{category.techs.length} technologies</p>
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`tech-pill border ${c.pill} text-xs px-2.5 py-1 rounded-full font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
