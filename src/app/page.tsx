import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutNarrative from "@/components/sections/AboutNarrative";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import TelemetrySkills from "@/components/sections/TelemetrySkills";
import ContactTerminal from "@/components/sections/ContactTerminal";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#111827] overflow-x-hidden selection:bg-[#FF5E1E] selection:text-white">
      {/* Floating Spatial Navigation */}
      <Navbar />

      <main className="flex flex-col">
        {/* Curved Moody Studio Portrait Hero */}
        <HeroSection />

        {/* Editorial Narrative: Who I Am - Design with Purpose and Personality */}
        <AboutNarrative />

        {/* Selected Projects Showcase */}
        <FeaturedProjectSection />

        {/* Skills, Tools & Methodical Execution */}
        <TelemetrySkills />

        {/* Curved Moody Bottom CTA Card: Let's Work Together */}
        <ContactTerminal />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
