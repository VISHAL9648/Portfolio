"use client";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "Deep-dive into your project goals, user needs, technical constraints, and success criteria through structured discovery calls.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: "brand",
  },
  {
    number: "02",
    title: "Plan Architecture",
    description:
      "Design the system architecture, choose the right tech stack, define APIs, database schema, and create a clear development roadmap.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    color: "purple",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Iterative development with regular check-ins, clean code, comprehensive comments, and feature-by-feature delivery.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    color: "emerald",
  },
  {
    number: "04",
    title: "Test & Deploy",
    description:
      "Thorough testing, performance optimization, CI/CD setup, and deployment on cloud platforms like AWS, Render, or Vercel.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "orange",
  },
  {
    number: "05",
    title: "Support & Improve",
    description:
      "Post-launch monitoring, bug fixes, performance improvements, and feature additions based on user feedback.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    color: "rose",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; num: string }> = {
  brand:   { bg: "bg-brand-50",   text: "text-brand-600",   border: "border-brand-200",   num: "text-brand-400" },
  purple:  { bg: "bg-purple-50",  text: "text-purple-600",  border: "border-purple-200",  num: "text-purple-400" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", num: "text-emerald-400" },
  orange:  { bg: "bg-orange-50",  text: "text-orange-600",  border: "border-orange-200",  num: "text-orange-400" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-600",    border: "border-rose-200",    num: "text-rose-400" },
};

export default function HowIWorkSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Process</span>
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle mx-auto text-center">
            A transparent, structured process designed to deliver quality results
            on time — especially valuable for freelance clients.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-200 via-purple-200 to-rose-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center group">
                  {/* Step number bubble */}
                  <div className={`relative z-10 w-16 h-16 rounded-2xl ${c.bg} border-2 ${c.border} flex flex-col items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                    <div className={`${c.text} mb-0.5`}>{step.icon}</div>
                    <span className={`text-xs font-bold ${c.num}`}>{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>

                  {/* Connector arrow (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4">
                      <svg className="w-4 h-4 text-slate-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-brand-50 to-purple-50 border border-brand-100">
          <p className="text-slate-700 font-medium mb-4">
            Ready to start your project? Let&apos;s talk about your requirements.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
