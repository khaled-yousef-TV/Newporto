import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khaled Yousef — AI Quality Engineering & LLM Evaluation",
  description: "Khaled Yousef — QA Lead at TeamViewer and AI MSc student at JKU. LLM evaluation, AI-powered test automation, and auditable AI systems with Selenium, DeepEval, Python, and Java.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Khaled Yousef Portfolio',
    title: 'Khaled Yousef — AI Quality Engineering & LLM Evaluation',
    description: 'Khaled Yousef — QA Lead at TeamViewer and AI MSc student at JKU. LLM evaluation, AI-powered test automation, and auditable AI systems with Selenium, DeepEval, Python, and Java.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
