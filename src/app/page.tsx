import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />

      <div className="relative z-10">
        {/* About teaser or spacing */}
        <section id="about" className="py-24 px-6 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap">
              Mastering the art of <span className="text-accent-blue">Clean Code</span> and{" "}
              <span className="text-brand-coral">Fluid UI</span>.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in bridging the gap between design and engineering. My approach is centered on
              performance, accessibility, and high-fidelity interactions that make digital products feel alive.
            </p>
          </div>
        </section>

        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Background Glows */}
      <div className="fixed top-1/4 -left-24 w-96 h-96 bg-brand-coral/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-24 w-96 h-96 bg-accent-blue/10 blur-[150px] rounded-full pointer-events-none"></div>
    </main>
  );
}
