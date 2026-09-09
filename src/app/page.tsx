import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import TelemetrySkills from "@/components/sections/TelemetrySkills";
import AboutNarrative from "@/components/sections/AboutNarrative";
import ContactTerminal from "@/components/sections/ContactTerminal";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F2F3F5] overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      {/* Subtle Background Ambience Lights (Static CSS for zero GPU lag) */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[420px] h-[420px] bg-cyan-500/4 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Floating Spatial Navigation */}
      <Navbar />

      <main className="flex flex-col">
        {/* Minimalist Hero Section with Proportional Profile & Biodata */}
        <HeroSection />

        {/* Gallery of Shipped Projects (Nyopharma & CQ-Weld) with Real Thumbnails */}
        <FeaturedProjectSection />

        {/* Capability Matrix & Methodical Process */}
        <TelemetrySkills />

        {/* Pragmatic Philosophy & Narrative */}
        <AboutNarrative />

        {/* Contact Inquiry Section */}
        <ContactTerminal />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
