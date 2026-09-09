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
      {/* Ambient background lights using zero-overhead radial gradients (GPU friendly for mobile) */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(16,185,129,0.06)_0%,_transparent_70%)] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-10 w-[420px] h-[420px] bg-[radial-gradient(circle,_rgba(56,189,248,0.05)_0%,_transparent_70%)] pointer-events-none -z-10" />

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
