"use client";

import React from "react";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconChevronDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPill,
  IconAdjustmentsHorizontal,
  IconDatabase,
  IconSparkles,
} from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function HeroSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="top"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#090b0e]"
    >
      {/* Gentle background glow - soft and fresh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Tersedia untuk Proyek Web &amp; Analisis Data</span>
        </div>

        {/* Main Hero Card: Clean, Proportional Profile & Identity */}
        <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-[#0e1217] border border-white/8 shadow-2xl mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            {/* Real User Photo */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-xl">
                <Image
                  src={profile.avatar || "/wanyo-profile.jpg"}
                  alt={`${profile.name} - Data Analyst & Web Developer`}
                  width={128}
                  height={128}
                  priority
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-black/90 border border-white/10 font-mono text-[10px] text-emerald-400 font-semibold">
                ACTIVE
              </span>
            </div>

            {/* Profile Intro & Title */}
            <div className="space-y-2">
              <div className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                Halo, saya
              </div>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h1>
              <p className="font-sans text-lg sm:text-xl text-emerald-400 font-medium">
                {profile.role}
              </p>
              <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
                Menganalisis data bisnis dan mengeksekusi kebutuhan operasional menjadi aplikasi web nyata yang fungsional dan siap pakai.
              </p>
            </div>
          </div>

          {/* Quick Biodata Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 font-sans text-xs mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <div>
                <div className="text-zinc-500 font-mono text-[10px]">DOMISILI</div>
                <div className="text-zinc-200 font-medium">{profile.location} (Remote)</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-zinc-500 font-mono text-[10px]">DOMAIN UTAMA</div>
                <div className="text-zinc-200 font-medium">SaaS Apps • Health Tech • CQV</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <div>
                <div className="text-zinc-500 font-mono text-[10px]">CORE STACK</div>
                <div className="text-zinc-200 font-medium">Next.js • React • Python • SQL</div>
              </div>
            </div>
          </div>

          {/* Action Buttons & Social Channels */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-xs sm:text-sm transition-all active:scale-98 shadow-sm"
              >
                <span>Lihat Karya Nyata</span>
                <IconArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 text-zinc-400 self-end sm:self-auto">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                title="GitHub"
              >
                <IconBrandGithub size={18} />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                title="Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* 4-Pillar Quick Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0c0f14] border border-blue-500/20 hover:border-blue-500/40 transition-colors flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
              <IconSparkles size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">NyoClean SaaS</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Platform kasir POS workshop sepatu, struk thermal, live tracking &amp; integrasi WhatsApp.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c0f14] border border-white/6 hover:border-teal-500/30 transition-colors flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
              <IconPill size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Nyopharma</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Landing page apotek modern (SaaS-ready) dengan alur tebus resep digital &amp; katalog obat.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c0f14] border border-white/6 hover:border-cyan-500/30 transition-colors flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <IconAdjustmentsHorizontal size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">CQ System</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Monitoring kalibrasi &amp; validasi: program tahunan otomatis, realisasi, dan database terpusat.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c0f14] border border-white/6 hover:border-emerald-500/30 transition-colors flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <IconDatabase size={20} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Analisis Data</div>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Eksplorasi tren stok, mitigasi stockout, dan integritas data operasional bisnis.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#projects"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 font-mono text-xs transition-colors"
          >
            <span>JELAJAHI GALERI PROYEK</span>
            <IconChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
