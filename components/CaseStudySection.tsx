import { Github, ExternalLink, CheckCircle2 } from "lucide-react";

const techStack = [
  "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap",
  "JWT", "Cloudinary", "Google Maps API",
];

const keyFeatures = [
  "JWT-based authentication & authorization",
  "Hotel listing, creation, editing & deletion (CRUD)",
  "Cloudinary integration for image uploads",
  "Google Maps API for location-based search",
  "Star ratings and user review system",
  "Responsive design for mobile & desktop",
  "RESTful API architecture",
  "Secure password hashing with bcrypt",
];

const architectureBlocks = [
  { layer: "Client", items: ["Bootstrap UI", "Tailwind CSS", "EJS Templates"], color: "bg-blue-100 text-blue-700 border-blue-200" },
  { layer: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"], color: "bg-green-100 text-green-700 border-green-200" },
  { layer: "Database", items: ["MongoDB", "Mongoose ODM"], color: "bg-orange-100 text-orange-700 border-orange-200" },
  { layer: "Services", items: ["Cloudinary", "Google Maps API", "Bcrypt"], color: "bg-purple-100 text-purple-700 border-purple-200" },
];

export default function CaseStudySection() {
  return (
    <section id="case-study" className="section-padding bg-dark-800">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/70 border border-white/20 uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            TripHut — Hotel Booking Platform
          </h2>
          <p className="text-lg text-white/50 max-w-2xl">
            A detailed look at how I built a full-stack hotel booking platform
            from the ground up — including architecture, challenges, and outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/VISHAL9648" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all duration-200">
              <Github size={14} /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-500 transition-all duration-200">
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Problem */}
            <div className="card-dark p-7 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-sm font-bold">!</span>
                </div>
                <h3 className="text-white font-bold text-lg">Problem</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Travelers struggled to find, compare, and book hotels with a trustworthy experience
                that included authentic reviews, reliable image galleries, and precise location data.
                Existing platforms were complex and overengineered for simple booking use cases.
              </p>
            </div>

            {/* Solution */}
            <div className="card-dark p-7 border border-brand-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <span className="text-brand-400 text-sm">✓</span>
                </div>
                <h3 className="text-white font-bold text-lg">Solution</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Built TripHut — a clean, full-stack hotel booking platform with secure authentication,
                real-time image management via Cloudinary, location-based discovery with Google Maps API,
                and a transparent review system that builds trust.
              </p>
            </div>

            {/* Architecture */}
            <div className="card-dark p-7 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-5">Architecture</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {architectureBlocks.map((block) => (
                  <div key={block.layer} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className={`text-xs font-bold uppercase tracking-wider mb-2 px-2 py-0.5 rounded inline-block border ${block.color}`}>
                      {block.layer}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {block.items.map((item) => (
                        <span key={item} className="text-xs text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Screenshot placeholder */}
            <div className="card-dark p-7 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-4">Screenshots</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Home Page", "Hotel Listing", "Hotel Detail", "Booking Flow"].map((label) => (
                  <div key={label} className="aspect-video rounded-xl bg-gradient-to-br from-brand-900/40 to-purple-900/40 border border-white/10 flex flex-col items-center justify-center gap-2">
                    <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="text-white/30 text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-5">
            {/* Tech stack */}
            <div className="card-dark p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70 border border-white/15">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div className="card-dark p-6 border border-white/10">
              <h3 className="text-white font-bold mb-4">Key Features</h3>
              <div className="space-y-2.5">
                {keyFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-brand-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/60 text-xs leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project type */}
            <div className="card-dark p-6 border border-emerald-500/30">
              <h3 className="text-white font-bold mb-2">Project Type</h3>
              <p className="text-white/50 text-sm">Personal / Showcase Project</p>
              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-xs text-white/40 leading-relaxed">
                  Built independently to demonstrate full-stack architecture skills and third-party API integration capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
