import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "AI QA Consulting — Khaled Yousef",
  description: "AI QA consulting: testing LLMs, agents, and ML models, AI-assisted test automation, and release gates for AI features, in English and Arabic.",
  openGraph: {
    type: "website",
    siteName: "Khaled Yousef Portfolio",
    title: "AI QA Consulting — Khaled Yousef",
    description: "Test your AI. Test with AI. Ship AI with confidence.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
