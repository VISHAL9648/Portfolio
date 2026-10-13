"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from "lucide-react";

// ─── EmailJS configuration (loaded from environment variables) ──────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
// ────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "suvishalsharma6@gmail.com",
    href: "mailto:suvishalsharma6@gmail.com",
    color: "brand",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishal-sharma-2a31b8354",
    href: "https://www.linkedin.com/in/vishal-sharma-2a31b8354/",
    color: "blue",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/VISHAL9648",
    href: "https://github.com/VISHAL9648",
    color: "slate",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh, India",
    href: null,
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  brand: "bg-brand-50 text-brand-600 border-brand-100",
  blue:  "bg-blue-50 text-blue-600 border-blue-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  green: "bg-green-50 text-green-600 border-green-100",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState(0);

  useEffect(() => {
    setMounted(true);
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError("");

    // ── Anti-Spam Check 1: Honeypot trap ──────────────────────────────────
    // If hidden bot field is filled, silently simulate success without calling API
    if (honeypot) {
      setSubmitted(true);
      setFormData({ name: "", email: "", project: "", message: "" });
      return;
    }

    // ── Anti-Spam Check 2: Unrealistic submission speed (< 1 sec) ─────────
    if (Date.now() - formLoadTime < 1000) {
      setError("Please take a moment before submitting.");
      return;
    }

    // ── Client-side validation ────────────────────────────────────────────
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      setError("Please enter a valid name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Please enter a message with at least 10 characters.");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError("Contact service is temporarily unconfigured. Please email me directly at suvishalsharma6@gmail.com");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    trimmedName,
          from_email:   trimmedEmail,
          project_type: formData.project || "General Inquiry",
          message:      trimmedMessage,
          to_email:     "suvishalsharma6@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch {
      setError("Failed to send message. Please email me directly at suvishalsharma6@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Have a Project in Mind?
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Let&apos;s discuss your idea and build a scalable solution together.
            I&apos;m available for full-time roles and freelance engagements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact info */}
             <div className="card p-8">
            {mounted && submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field (hidden from real users, traps automated spam bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Start a Project</h3>
                  <p className="text-slate-400 text-sm">Fill in the details below and I&apos;ll respond within 24 hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Vishal Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Vishal@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Select project type...</option>
                    <option value="fullstack">Full Stack Web Application</option>
                    <option value="backend">Backend & API Development</option>
                    <option value="ai">AI / Generative AI Application</option>
                    <option value="business">Business Web Application</option>
                    <option value="fulltime">Full-Time Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, timeline, and budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-xs text-red-500 text-center">{error}</p>
                )}

                <p className="text-xs text-slate-400 text-center">
                  I typically respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
          <div className="space-y-6">
            <div className="card p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Let&apos;s Work Together
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Whether you have a startup idea, need a freelance developer, or are
                  looking to hire a full-stack engineer — I&apos;d love to connect and discuss.
                </p>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-emerald-800 text-sm font-semibold">Currently Available</p>
                  <p className="text-emerald-600 text-xs">Full-time & Freelance Opportunities</p>
                </div>
              </div>

              {/* Contact items */}
              <div className="space-y-3">
                {contactInfo.map((info) => {
                  const c = colorMap[info.color];
                  const inner = (
                    <>
                      <div className={`w-10 h-10 rounded-lg ${c} border flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{info.label}</p>
                        <p className="text-sm text-slate-700 font-medium group-hover:text-brand-600 transition-colors duration-200">
                          {info.value}
                        </p>
                      </div>
                    </>
                  );

                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 group"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:suvishalsharma6@gmail.com"
                className="card p-5 text-center hover-lift group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors duration-200">
                  <Mail size={18} className="text-brand-600" />
                </div>
                <p className="font-semibold text-slate-900 text-sm">Email Me</p>
                <p className="text-xs text-slate-400 mt-1">Quick response</p>
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-sharma-2a31b8354/"
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 text-center hover-lift group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors duration-200">
                  <MessageSquare size={18} className="text-blue-600" />
                </div>
                <p className="font-semibold text-slate-900 text-sm">LinkedIn</p>
                <p className="text-xs text-slate-400 mt-1">DM me directly</p>
              </a>
            </div>
          </div>

          {/* Right — Contact form */}
       
        </div>
      </div>
    </section>
  );
}
