import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";

/**
 * ExperienceSection
 * Renders a vertical timeline of professional experiences.
 * To add/edit experiences, update `data/experiences.ts` — no changes needed here.
 */
export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-14 space-y-4">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Real-world product engineering at scale.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line (desktop only) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-brand-300 to-transparent hidden md:block" />

          <div className="md:pl-20 space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
