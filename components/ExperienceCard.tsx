import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import type { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  /** Position index used to offset the timeline dot vertically */
  index: number;
}

/**
 * ExperienceCard
 * Renders a single professional experience as a timeline card.
 * Used by ExperienceSection — do not call directly from pages.
 */
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    role,
    company,
    companyInitials,
    client,
    employmentType,
    startDate,
    endDate,
    location,
    projectContext,
    technologies,
    responsibilities,
  } = experience;

  const isPresent = endDate === "Present";

  return (
    <div className="card p-8 hover-lift relative">
      {/* Timeline dot — positioned relative to the parent pl-20 container */}
      <div className="absolute -left-[60px] top-8 hidden md:flex w-8 h-8 rounded-full bg-brand-600 items-center justify-center shadow-glow-sm">
        <Briefcase size={14} className="text-white" />
      </div>

      {/* Card header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="space-y-2">
          {/* Role + employment type */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-bold text-slate-900">{role}</h3>
            <span className="badge badge-brand">{employmentType}</span>
          </div>

          {/* Company · Client */}
          <div className="flex items-center gap-1.5 text-brand-600 font-semibold text-sm flex-wrap">
            <span>{company}</span>
            {client && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-normal flex items-center gap-1">
                  <span>Client:</span>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline inline-flex items-center gap-1"
                  >
                    {client.name} <ExternalLink size={11} />
                  </a>
                </span>
              </>
            )}
          </div>

          {/* Date + Location */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {startDate} – {isPresent ? <span className="text-brand-600 font-semibold">Present</span> : endDate}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {location}
            </span>
          </div>
        </div>

        {/* Company avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            {companyInitials}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 my-6" />

      {/* Project context */}
      <div className="mb-6 p-4 rounded-xl bg-brand-50 border border-brand-100">
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-semibold text-brand-700">Project Context: </span>
          {projectContext}
        </p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
          Key Responsibilities
        </h4>
        <div className="grid sm:grid-cols-2 gap-2">
          {responsibilities.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-brand-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
