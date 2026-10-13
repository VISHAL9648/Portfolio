import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* ── Fonts (next/font — self-hosted, zero layout shift) ───── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* ── Metadata ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Vishal Sharma — AI Full Stack Developer",
  description:
    "AI Full Stack Developer with 2+ years of professional experience building scalable frontend, backend, and AI-powered applications.",
  keywords: [
    "Vishal Sharma",
    "AI Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "FastAPI",
    "OpenAI",
    "LangChain",
    "RAG",
    "AI Developer",
    "Freelance Developer",
    "India",
  ],
  authors: [{ name: "Vishal Sharma" }],
  creator: "Vishal Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Vishal Sharma — AI Full Stack Developer",
    description:
      "Building scalable web applications & AI-powered solutions.",
    siteName: "Vishal Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Sharma — AI Full Stack Developer",
    description:
      "Building scalable web applications & AI-powered solutions.",
  },
};

/* ── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
