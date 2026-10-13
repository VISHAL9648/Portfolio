"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import type { Project, BadgeColor } from "@/data/projects";

/** Maps badgeColor values to Tailwind class strings */
const badgeColorMap: Record<BadgeColor, string> = {
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  green: "bg-green-100 text-green-700 border-green-200",
};

/**
 * ProjectVisual
 * Shows a real screenshot (via next/image) when `image` is provided.
 * Falls back to the emoji + gradient placeholder for projects without a screenshot.
 */
function ProjectVisual({
  image,
  name,
  gradient,
  icon,
  isFuture,
}: {
  image?: string;
  name: string;
  gradient: string;
  icon: string;
  isFuture?: boolean;
}) {
  return (
    <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-100">
      {image ? (
        /* ── Real screenshot ─────────────────────────────────── */
        <Image
          src={image}
          alt={`${name} project preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        /* ── Emoji gradient fallback ─────────────────────────── */
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <span className="text-5xl sm:text-6xl relative z-10">{icon}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Subtle bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* "Coming Soon" badge */}
      {isFuture && (
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] sm:text-xs font-semibold z-10">
          Coming Soon
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard
 * Renders a single project as a card with visual, badge, description,
 * feature pills, tech tags, and action buttons.
 * Fully responsive on mobile, tablet, and desktop.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    name,
    tagline,
    description,
    badge,
    badgeColor,
    features,
    tags,
    github,
    demo,
    caseStudy,
    image,
    gradient,
    icon,
    isFuture,
  } = project;

  return (
    <div
      className={`card overflow-hidden hover-lift flex flex-col group h-full border border-slate-100 ${
        isFuture ? "border-amber-200 bg-amber-50/20" : ""
      }`}
    >
      {/* Project visual — real screenshot or emoji gradient fallback */}
      <div className="p-3 sm:p-4">
        <ProjectVisual
          image={image}
          name={name}
          gradient={gradient}
          icon={icon}
          isFuture={isFuture}
        />
      </div>

      {/* Card content */}
      <div className="px-4 pb-4 sm:px-5 sm:pb-5 flex-1 flex flex-col">
        {/* Badge row — badge on left, status label on right */}
        <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
          {/* Left: badge only */}
          {badge ? (
            <span
              className={`badge border text-[11px] sm:text-xs ${badgeColorMap[badgeColor ?? "blue"]}`}
            >
              {badge === "Featured AI Project" && (
                <Star size={10} className="fill-current" />
              )}
              {badge}
            </span>
          ) : (
            <div />
          )}

          {/* Right: Live Demo (real projects) OR Conceptual (future projects) */}
          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-brand-600 font-semibold hover:text-brand-700 hover:underline transition-colors shrink-0 py-0.5"
            >
              <span>Live Demo</span>
              <ExternalLink size={12} />
            </a>
          )}
          {isFuture && (
            <span className="text-xs text-amber-600 font-medium shrink-0">🚧 Conceptual</span>
          )}
        </div>

        {/* Title + tagline + description with View More / View Less */}
        <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug mb-1 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-2.5 sm:mb-3">{tagline}</p>
        
        <div className="mb-3.5 sm:mb-4">
          <p
            className={`text-slate-600 text-xs sm:text-sm leading-relaxed ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline transition-colors focus:outline-none py-0.5 cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "View Less" : "View More"}</span>
            {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
          {features.map((f) => (
            <span
              key={f}
              className="text-[11px] sm:text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons — GitHub & case study */}
        <div className="mt-auto pt-3 border-t border-slate-100/80 flex flex-wrap items-center gap-2">
          {!isFuture && github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs px-3.5 py-2 inline-flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
          )}
          {caseStudy && (
            <a
              href={caseStudy}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("case-study");
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
              }}
              className="btn-primary text-xs px-3.5 py-2 inline-flex items-center gap-1.5"
            >
              <span>View Case Study</span>
            </a>
          )}
          {isFuture && (
            <span className="text-xs text-amber-600 font-medium py-1">
              🚧 In Planning
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
