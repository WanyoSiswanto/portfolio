"use client";

import React, { useState } from "react";
import {
  IconCopy,
  IconCheck,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SpatialTiltCard from "@/components/ui/SpatialTiltCard";

export default function ContactTerminal() {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SpatialTiltCard
          className="p-8 sm:p-12 md:p-14 bg-[#0e1217] border-white/8 text-center flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>TERSEDIA UNTUK PROYEK WEB &amp; DATA</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl">
            Mari diskusikan ide atau proyek Anda
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-lg mb-10 leading-relaxed">
            Terbuka untuk kolaborasi: mulai dari analisis data bisnis, pembangunan landing page modern (SaaS-ready), hingga sistem database monitoring operasional industri.
          </p>

          {/* 1-Click Copy Email Pill */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mb-8">
            <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-zinc-300">
              <span className="truncate">{profile.contact.email}</span>
              <button
                onClick={copyEmail}
                className="ml-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-emerald-400 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                title="Salin Email"
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                <span className="text-[11px]">{copied ? "Disalin!" : "Salin"}</span>
              </button>
            </div>

            <a
              href={`mailto:${profile.contact.email}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs sm:text-sm font-sans flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 active:scale-98"
            >
              <IconSend size={16} />
              <span>Kirim Email</span>
            </a>
          </div>

          {/* Alternative Channels */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-white/10 w-full font-mono text-xs text-zinc-400">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white transition-all border border-cyan-500/20 font-medium"
            >
              <IconBrandLinkedin size={17} className="text-cyan-400" />
              <span>Profil LinkedIn</span>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-all border border-white/5"
            >
              <IconBrandGithub size={17} />
              <span>GitHub</span>
            </a>
          </div>
        </SpatialTiltCard>
      </div>
    </section>
  );
}
