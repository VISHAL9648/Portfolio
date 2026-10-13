/**
 * experiences.ts — Professional Experience Data
 * -----------------------------------------------
 * To add a new experience, insert a new object into the `experiences` array below.
 * The ExperienceSection component will automatically render it as a timeline card.
 *
 * Fields:
 *  - id            : unique string identifier (used as React key)
 *  - role          : job title / position
 *  - company       : employer / agency name
 *  - companyInitials: 2-letter abbreviation shown in the avatar badge
 *  - client        : (optional) end-client name and URL if different from employer
 *  - employmentType: e.g. "Full-Time", "Freelance", "Contract", "Internship"
 *  - startDate     : display string, e.g. "Dec 2025"
 *  - endDate       : display string or "Present" for current role
 *  - location      : city/country
 *  - projectContext: paragraph describing the project/product worked on
 *  - technologies  : array of tech stack strings
 *  - responsibilities: array of key responsibility strings
 */

export interface Client {
  name: string;
  url: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyInitials: string;
  client?: Client;
  employmentType: string;
  startDate: string;
  endDate: string; // Use "Present" for current role
  location: string;
  projectContext: string;
  technologies: string[];
  responsibilities: string[];
}

// ---------------------------------------------------------------------------
// Add new experiences here — they render top-to-bottom (most recent first)
// ---------------------------------------------------------------------------
export const experiences: Experience[] = [
  {
    id: "softscript-software-engineer",
    role: "Software Engineer",
    company: "SoftScript Technology",
    companyInitials: "SS",
    client: {
      name: "TripJack",
      url: "https://www.tripjack.com",
    },
    employmentType: "Full-Time",
    startDate: "Dec 2025",
    endDate: "Sept 2026",
    location: "Delhi, India",
    projectContext:
      "Worked on the TripJack B2B & B2C travel booking platform including flight, hotel, and bus booking systems. Built and maintained production-grade backend services, BFF APIs, and frontend features serving thousands of travel agents and end customers.",
    technologies: [
      "Node.js",
      "NestJS",
      "React.js",
      "Next.js",
      "PostgreSQL",
      "TypeORM",
      "Redux",
      "Microservices",
      "Server-Driven UI",
      "BFF APIs",
      "REST APIs",
    ],
    responsibilities: [
      "Full Stack development for B2B & B2C travel booking platform",
      "Backend services and BFF (Backend for Frontend) APIs",
      "Node.js + NestJS microservice architecture",
      "PostgreSQL database design with TypeORM",
      "React.js / Next.js frontend development",
      "Redux state management",
      "Server-Driven UI implementation",
      "Flight, hotel & bus booking workflows",
      "Booking history & cart management",
      "Billing information & invoice downloads",
      "Bus vouchers & payment flows",
    ],
  },

  // -------------------------------------------------------------------------
  // Example: add your next role below (uncomment and fill in)
  // -------------------------------------------------------------------------
  // {
  //   id: "company-role-year",
  //   role: "Senior Engineer",
  //   company: "Acme Corp",
  //   companyInitials: "AC",
  //   employmentType: "Full-Time",
  //   startDate: "Oct 2026",
  //   endDate: "Present",
  //   location: "Remote",
  //   projectContext: "...",
  //   technologies: ["React", "TypeScript"],
  //   responsibilities: ["..."],
  // },
  
  {
    id: "freelance-full-stack",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    companyInitials: "SE",
    employmentType: "Freelance",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "Remote, India",
    projectContext:
      "Developing web applications and custom software solutions for freelance clients.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
    ],
    responsibilities: [
      "Develop responsive user interfaces using React.js and Next.js.",
      "Build backend APIs and application services using Node.js and Express.js.",
      "Integrate databases and third-party APIs into web applications.",
      "Debug issues, improve application performance, and maintain code quality.",
    ],
  },
];
