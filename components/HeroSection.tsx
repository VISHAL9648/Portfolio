"use client";

import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/VISHAL9648",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vishal-sharma-2a31b8354/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:suvishalsharma6@gmail.com",
    icon: Mail,
  },
];

/* ── AI Developer Visual (SVG-based) ─────────────────────── */
function AIVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow orbs */}
      <div className="absolute top-16 right-16 w-48 h-48 rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-24 left-8 w-36 h-36 rounded-full bg-purple-600/20 blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

      {/* Main container */}
      <div className="relative w-full max-w-md">

        {/* Central code card */}
        <div className="relative bg-dark-600/80 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-sm animate-float">
          {/* Window bar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-xs text-white/30 font-mono">ai-agent.ts</span>
          </div>
          <div className="code-block space-y-1">
            <p><span className="text-purple-400">const</span> <span className="text-blue-300">agent</span> <span className="text-white/60">=</span> <span className="text-brand-400">new</span> <span className="text-emerald-300">AIAgent</span><span className="text-white/60">{"({"}</span></p>
            <p className="pl-4"><span className="text-blue-300">llm</span><span className="text-white/60">:</span> <span className="text-orange-300">&quot;gpt-4o&quot;</span><span className="text-white/60">,</span></p>
            <p className="pl-4"><span className="text-blue-300">tools</span><span className="text-white/60">:</span> <span className="text-white/60">[</span><span className="text-orange-300">retriever</span><span className="text-white/60">,</span> <span className="text-orange-300">search</span><span className="text-white/60">],</span></p>
            <p className="pl-4"><span className="text-blue-300">memory</span><span className="text-white/60">:</span> <span className="text-orange-300">&quot;vector-db&quot;</span></p>
            <p><span className="text-white/60">{"});"}</span></p>
            <p className="mt-2"><span className="text-purple-400">await</span> <span className="text-blue-300">agent</span><span className="text-white/60">.</span><span className="text-emerald-300">run</span><span className="text-white/60">(</span><span className="text-orange-300">query</span><span className="text-white/60">);</span></p>
          </div>
        </div>

        {/* Floating cards */}
        {/* Top-right: Stack badge */}
        <div className="absolute -top-10 -right-6 bg-dark-600/90 border border-brand-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-sm" style={{ animation: "float 7s ease-in-out infinite", animationDelay: "0.5s" }}>
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Next.js + FastAPI</p>
            <p className="text-white/40 text-[10px]">Full Stack</p>
          </div>
        </div>

        {/* Bottom-left: API card */}
        <div className="absolute -bottom-10 -left-6 bg-dark-600/90 border border-emerald-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-sm" style={{ animation: "float 8s ease-in-out infinite", animationDelay: "1s" }}>
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div>
            <p className="text-white text-xs font-semibold">RAG Pipeline</p>
            <p className="text-white/40 text-[10px]">AI • LangChain</p>
          </div>
        </div>

        {/* Bottom-right: DB card */}
        <div className="absolute -bottom-4 -right-4 bg-dark-600/90 border border-purple-500/30 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg backdrop-blur-sm" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}>
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <div>
            <p className="text-white text-xs font-semibold">Vector DB</p>
            <p className="text-white/40 text-[10px]">Embeddings</p>
          </div>
        </div>

        {/* Network dots SVG */}
        <svg className="absolute -top-20 -left-8 opacity-30" width="120" height="120" viewBox="0 0 120 120">
          <g fill="none">
            <circle cx="20" cy="20" r="4" fill="#6366f1" className="network-node" />
            <circle cx="70" cy="10" r="3" fill="#8b5cf6" className="network-node" style={{ animationDelay: "0.5s" }} />
            <circle cx="100" cy="50" r="4" fill="#6366f1" className="network-node" style={{ animationDelay: "1s" }} />
            <circle cx="50" cy="80" r="3" fill="#8b5cf6" className="network-node" style={{ animationDelay: "1.5s" }} />
            <circle cx="10" cy="70" r="4" fill="#6366f1" className="network-node" style={{ animationDelay: "2s" }} />
            <line x1="20" y1="20" x2="70" y2="10" stroke="#6366f1" strokeWidth="0.8" opacity="0.5" />
            <line x1="70" y1="10" x2="100" y2="50" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" />
            <line x1="100" y1="50" x2="50" y2="80" stroke="#6366f1" strokeWidth="0.8" opacity="0.5" />
            <line x1="50" y1="80" x2="10" y2="70" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.4" />
            <line x1="10" y1="70" x2="20" y2="20" stroke="#6366f1" strokeWidth="0.8" opacity="0.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────────────── */
export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex flex-col">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 orb orb-brand opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 orb orb-purple opacity-20" />

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="container-custom w-full py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left column — Text */}
            <div className="space-y-8">
              {/* Main headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Building{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">
                    Scalable
                  </span>{" "}
                  Web Apps & AI&#8209;Powered Solutions
                </h1>
                <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                  AI Full Stack Developer with 2+ year of professional experience
                  building scalable frontend, backend, and AI-powered applications.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-row gap-4">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-500 transition-all duration-200 shadow-lg hover:shadow-glow-md whitespace-nowrap"
                >
                  View My Work
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-3 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm whitespace-nowrap"
                >
                  Let&apos;s Work Together
                </button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                  Connect
                </span>
                <div className="w-12 h-px bg-white/20" />
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                    >
                      <social.icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Identity */}
              <div className="pt-2">
                <p className="text-white/40 text-sm">
                  <span className="text-white/70 font-medium">Vishal Sharma</span>
                  {" · "}MCA — Data Science & AI
                  {" · "}Lucknow, India
                </p>
              </div>
            </div>

            {/* Right column — AI Visual */}
            <div className="hidden lg:flex items-center justify-center relative h-[500px]">
              <AIVisual />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
