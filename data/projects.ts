/**
 * projects.ts — Projects Data
 * ----------------------------
 * To add a new project, insert a new object into the `projects` array below.
 * The ProjectsSection component will automatically render it as a project card.
 *
 * Fields:
 *  - id          : unique string identifier (used as React key)
 *  - name        : project title
 *  - tagline     : short one-liner subtitle shown below the title
 *  - description : 2-3 sentence description of what the project does
 *  - badge       : (optional) label on the card, e.g. "Client Project", "AI Project"
 *  - badgeColor  : (optional) one of: "green" | "purple" | "blue" | "amber"
 *  - features    : array of short feature/highlight strings shown as pills
 *  - tags        : tech stack tags shown as branded pills at the bottom
 *  - github      : (optional) GitHub repository URL
 *  - demo        : (optional) live demo URL — omit or use "" to hide the button
 *  - caseStudy   : (optional) in-page anchor or URL to a case study section
 *  - image       : (optional) path to a screenshot/preview image in /public, e.g. "/projects/mazora-living.png"
 *                  When provided, shows the real image instead of the emoji gradient placeholder.
 *  - gradient    : Tailwind gradient classes for the card visual fallback (used when no image)
 *  - icon        : emoji icon displayed when no image is provided
 *  - isFuture    : (optional) set true to mark the project as "Coming Soon / Conceptual"
 */

export type BadgeColor = "green" | "purple" | "blue" | "amber";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  badgeColor?: BadgeColor;
  features: string[];
  tags: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  /** Optional screenshot shown in the card visual. Path relative to /public, e.g. "/projects/mazora-living.png" */
  image?: string;
  gradient: string;
  icon: string;
  isFuture?: boolean;
}

// ---------------------------------------------------------------------------
// Add new projects here — they render in the order listed
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "mazora-living",
    name: "Mazora Living – Premium PG Website",
    tagline: "Premium PG accommodation website — sold to client",
    description:
      "Designed and developed a full-fledged PG listing website for Mazora Living, a premium paying-guest accommodation in Laxmi Nagar, Delhi. Features SEO-optimised pages, room listings with pricing, gallery, amenities, testimonials, and a contact/booking flow.",
    badge: "Client Project",
    badgeColor: "green",
    features: [
      "SEO Optimised",
      "Room Listings",
      "Photo Gallery",
      "Testimonials",
      "Contact Form",
      "WhatsApp CTA",
      "Mobile Responsive",
      "Schema Markup",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    demo: "https://mazoraliving.com",
    image: "/projects/mazora-living.png",
    gradient: "from-amber-500 to-yellow-600",
    icon: "🏠",
  },
  {
    id: "ai-attendance",
    name: "Intelligent AI Attendance System",
    tagline: "Automated attendance tracking powered by computer vision",
    description:
      "AI-powered attendance management system built with Python and Streamlit for automated attendance tracking using face recognition and QR code generation.",
    badge: "AI Project",
    badgeColor: "purple",
    features: [
      "Face Recognition",
      "QR Code Generation",
      "Authentication",
      "Image Processing",
      "Machine Learning",
      "Supabase",
    ],
    tags: ["Python", "Streamlit", "Supabase", "OpenCV", "ML"],
    github: "https://github.com/VISHAL9648",
    image: "/projects/ai-attendance.png",
    gradient: "from-purple-600 to-indigo-700",
    icon: "🧠",
  },
  {
    id: "triphut",
    name: "TripHut",
    tagline: "Full-stack hotel booking platform with maps & reviews",
    description:
      "Full-stack hotel booking platform with authentication, hotel management, location-based search, Cloudinary image uploads, and Google Maps API integration.",
    badge: "Full Stack",
    badgeColor: "blue",
    features: [
      "JWT Authentication",
      "Hotel CRUD",
      "Cloudinary",
      "Google Maps API",
      "Ratings & Reviews",
      "MongoDB",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap"],
    github: "https://github.com/VISHAL9648",
    demo: "#",
    image: "/projects/triphut.jpg",
    gradient: "from-blue-600 to-cyan-700",
    icon: "🏨",
  },
  {
    id: "ai-knowledge",
    name: "AI Knowledge Assistant",
    tagline: "Conceptual GenAI project — Document-based Q&A system",
    description:
      "A planned AI assistant leveraging RAG pipelines, vector databases, and LLMs to enable intelligent document Q&A with semantic search and source citations.",
    badge: "Featured AI Project",
    badgeColor: "amber",
    features: [
      "RAG Pipeline",
      "Document Upload",
      "Embeddings",
      "Vector Database",
      "LLM",
      "Semantic Search",
      "AI Chat",
      "Source Citations",
    ],
    tags: ["Python", "LangChain", "FastAPI", "OpenAI", "Pinecone", "React"],
    image: "/projects/resume.jpg",
    gradient: "from-amber-500 to-orange-600",
    icon: "💡",
    isFuture: true,
  },

  // -------------------------------------------------------------------------
  // Example: add your next project below (uncomment and fill in)
  // -------------------------------------------------------------------------
  // {
  //   id: "my-new-project",
  //   name: "My New Project",
  //   tagline: "Short one-liner",
  //   description: "What it does...",
  //   badge: "Full Stack",
  //   badgeColor: "blue",
  //   features: ["Feature 1", "Feature 2"],
  //   tags: ["React", "Node.js"],
  //   github: "https://github.com/VISHAL9648/my-new-project",
  //   demo: "https://myproject.com",
  //   gradient: "from-teal-500 to-cyan-600",
  //   icon: "🚀",
  // },
];
