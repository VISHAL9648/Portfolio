"use client";

import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/VISHAL9648" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-sharma-2a31b8354/" },
  { icon: Mail, label: "Email", href: "mailto:suvishalsharma6@gmail.com" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-sm tracking-tight">
                Vishal<span className="text-brand-400">.</span>
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-white/80 font-semibold text-sm">Vishal Sharma</p>
              <p className="text-white/40 text-xs">AI Full Stack Developer</p>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Building scalable web applications and AI-powered solutions.
              Based in Lucknow, India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</p>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Connect</p>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors duration-200 text-sm group"
                >
                  <social.icon size={14} className="group-hover:text-brand-400 transition-colors duration-200" />
                  {social.label}
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/40 text-xs">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Vishal Sharma. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
