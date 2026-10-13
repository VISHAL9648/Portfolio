"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with React, Next.js, Node.js, and databases. Clean code, scalable architecture, and responsive UI.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    color: "brand",
    gradient: "from-brand-500 to-indigo-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    title: "Backend & API Development",
    description:
      "Scalable REST APIs, microservices, authentication flows, and database integrations designed for production workloads.",
    tags: ["REST APIs", "Node.js", "NestJS", "FastAPI", "Auth", "Database Integration"],
    color: "green",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI & Generative AI Applications",
    description:
      "LLM-powered applications, RAG systems, embeddings, vector search, and AI agents using LangChain and OpenAI API.",
    tags: ["OpenAI API", "RAG", "LangChain", "Embeddings", "Vector Search", "AI Agents"],
    color: "purple",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Business Web Applications",
    description:
      "Custom dashboards, admin panels, booking systems, CRM tools, and SaaS applications tailored to your business needs.",
    tags: ["Dashboards", "Admin Panels", "Booking Systems", "Auth", "API Integrations"],
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; tagBg: string }> = {
  brand:  { bg: "bg-brand-50",   border: "border-brand-100",   text: "text-brand-600",   iconBg: "bg-brand-100",   tagBg: "bg-brand-100 text-brand-700 border-brand-200" },
  green:  { bg: "bg-green-50",   border: "border-green-100",   text: "text-green-600",   iconBg: "bg-green-100",   tagBg: "bg-green-100 text-green-700 border-green-200" },
  purple: { bg: "bg-purple-50",  border: "border-purple-100",  text: "text-purple-600",  iconBg: "bg-purple-100",  tagBg: "bg-purple-100 text-purple-700 border-purple-200" },
  orange: { bg: "bg-orange-50",  border: "border-orange-100",  text: "text-orange-600",  iconBg: "bg-orange-100",  tagBg: "bg-orange-100 text-orange-700 border-orange-200" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center   space-y-4">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I Can Build For You</h2>
          <p className="section-subtitle mx-auto text-center">
            Whether you need a complete web application, an intelligent AI system,
            or a robust backend — I&apos;ve got you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const c = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`card p-7 border ${c.border} hover-lift group`}
              >
                <div className="flex items-start gap-4 mb-5">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} ${c.text} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug mb-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className={`tag-pill border text-xs ${c.tagBg}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                  }}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${c.text} hover:gap-3 transition-all duration-200`}
                >
                  Discuss Your Project
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
