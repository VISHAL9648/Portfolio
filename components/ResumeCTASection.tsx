import { Download, Linkedin } from "lucide-react";

export default function ResumeCTASection() {
  return (
    <section className="pb-0 bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark-800 via-dark-700 to-brand-900 p-10 md:p-14">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-600/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/20 uppercase tracking-wider">
                Resume
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Looking for a Full Stack Developer?
              </h2>
              <p className="text-white/60 leading-relaxed">
                Explore my complete experience, technical skills, education, and project portfolio.
                Available for full-time roles and freelance engagements.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/Vishal-Sharma-Resume.pdf"
                  download="Vishal-Sharma-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-50 transition-all duration-200 shadow-lg"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-sharma-2a31b8354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <Linkedin size={16} />
                  View LinkedIn
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "2+", label: "Year Experience", sub: "Professional" },
                { val: "2+", label: "Projects Built", sub: "Full Stack & AI" },
                { val: "10+", label: "Technologies", sub: "Core Stack" },
                { val: "MCA", label: "Degree", sub: "Data Science & AI" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="text-2xl font-bold text-white mb-1">{stat.val}</p>
                  <p className="text-white/70 text-xs font-medium">{stat.label}</p>
                  <p className="text-white/40 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
