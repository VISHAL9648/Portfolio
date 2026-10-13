"use client";

import Image from "next/image";
import { Briefcase, Layers, Cpu, ArrowRight } from "lucide-react";

const highlights = [
  {
    value: "2+ Year",
    label: "Professional Experience",
    icon: Briefcase,
    color: "brand",
  },
  {
    value: "Full Stack",
    label: "Frontend + Backend",
    icon: Layers,
    color: "purple",
  },
  {
    value: "AI + GenAI",
    label: "LLMs, RAG & AI Applications",
    icon: Cpu,
    color: "emerald",
  },
];

const colorMap = {
  brand:   { bg: "bg-brand-50",   text: "text-brand-600",   border: "border-brand-100",   val: "text-brand-700" },
  purple:  { bg: "bg-purple-50",  text: "text-purple-600",  border: "border-purple-100",  val: "text-purple-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", val: "text-emerald-700" },
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column — Profile photo ─────────────────────── */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">

              {/* Decorative background blob */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-100 to-purple-100 blur-2xl opacity-60 scale-95" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/5]">
                <Image
                  src="/projects/vishal.jpeg"
                  alt="Vishal Sharma — AI Full Stack Developer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Bottom overlay with name badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent pt-16 pb-5 px-5">
                  <p className="text-white font-bold text-lg leading-tight">Vishal Sharma</p>
                  <p className="text-white/60 text-sm">AI Full Stack Developer</p>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-700 text-xs font-semibold">2+ Yrs Experience</span>
              </div>

              {/* Floating location badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100">
                <p className="text-slate-700 text-xs font-semibold flex items-center gap-1.5">
                  <span>🇮🇳</span>
                  <span>India</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right column — Text + Highlight cards ───────────── */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-label">About Me</span>
              <h2 className="section-title">
                From Product Development{" "}
                <span className="gradient-text">to AI Engineering</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I&apos;m <span className="font-semibold text-slate-900">Vishal Sharma</span>, an AI Full Stack Developer
                based in India 🇮🇳. I specialize in building scalable web applications
                and backend services while exploring the rapidly evolving landscape of
                Generative AI and intelligent systems.
              </p>
              <p>
                With professional experience at{" "}
                <span className="font-semibold text-slate-900">SoftScript Technology</span> working
                on the TripJack B2B &amp; B2C travel platform, I&apos;ve gained hands-on exposure to
                production-grade architectures using Node.js, NestJS, PostgreSQL, React.js/Next.js,
                microservices, and Server-Driven UI patterns.
              </p>
              <p>
                In parallel, I&apos;m deeply invested in building AI-powered applications using
                OpenAI APIs, LLMs, RAG pipelines, LangChain, LangGraph, and vector databases —
                combining solid engineering fundamentals with cutting-edge AI capabilities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="tag-pill">MCA — Data Science &amp; AI</span>
              <span className="tag-pill">Open to Collaboration</span>
              <span className="tag-pill">India 🇮🇳</span>
            </div>

            {/* Highlight stat cards */}
            <div className="space-y-3">
              {highlights.map((h) => {
                const c = colorMap[h.color as keyof typeof colorMap];
                return (
                  <div
                    key={h.value}
                    className={`card p-5 border ${c.border} hover-lift flex items-center gap-5`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                      <h.icon size={20} className={c.text} />
                    </div>
                    <div>
                      <p className={`text-xl font-bold ${c.val}`}>{h.value}</p>
                      <p className="text-slate-500 text-sm mt-0.5">{h.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              See my projects
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
