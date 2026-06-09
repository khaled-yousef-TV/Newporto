import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-pastel-pink selection:text-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <TechMarquee />
      <Projects />
      <Footer />
    </main>
  );
}
