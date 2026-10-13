"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

/**
 * ProjectsSection
 * Renders a responsive grid of project cards.
 * To add/edit projects, update `data/projects.ts` — no changes needed here.
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <span className="section-label">Projects</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Featured Projects</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base md:text-lg">
            A selection of projects I&apos;ve built — spanning full-stack web applications
            and AI-powered systems.
          </p>
        </div>

        {/* Projects grid: 1 column on mobile (<768px), 2 columns on tablet (md), 3 columns on desktop (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
