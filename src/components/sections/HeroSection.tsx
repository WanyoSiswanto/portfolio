"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function HeroSection() {
  const { profile } = PORTFOLIO_DATA;
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS;

  return (
    <section
      id="top"
      className="relative w-full min-h-[640px] sm:min-h-[760px] md:min-h-[820px] lg:min-h-[880px] rounded-b-[40px] sm:rounded-b-[56px] lg:rounded-b-[72px] overflow-hidden bg-[#05141c] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-white select-none"
    >
      {/* Full-bleed seamless studio portrait background: foto menyatu utuh dengan background tanpa kotak / bingkai */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/hero-portrait-authentic.jpg"
          alt={profile.name}
          fill
          priority
          className="object-cover object-[center_30%] sm:object-[center_26%] md:object-[center_24%]"
        />

        {/* Vignette halus atas untuk keterbacaan navbar */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-[#05141c]/70 via-[#05141c]/25 to-transparent" />

        {/* Vignette gelap atmosferik bawah agar teks About & deskripsi kontras tinggi dan mudah dibaca */}
        <div className="absolute inset-x-0 bottom-0 h-80 sm:h-96 md:h-[420px] bg-gradient-to-t from-[#040e15] via-[#040e15]/80 to-transparent" />

        {/* Vignette lembut kiri & kanan */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#05141c]/40 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#05141c]/40 via-transparent to-transparent" />
      </div>

      {/* Top Navigation Bar: Terletak di dalam kartu hero persis gambar referensi */}
      <header className="relative z-20 w-full pt-6 sm:pt-8 md:pt-10 px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between">
        {/* Logo Brand: nyouniverse dengan logo resmi baru */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group text-white font-display font-bold text-xl sm:text-2xl tracking-tight transition-transform active:scale-98"
        >
          <Image
            src="/nyouniverse-logo-v2.png"
            alt="nyouniverse"
            width={32}
            height={32}
            className="rounded-full shadow-md object-contain"
            priority
          />
          <span>nyouniverse</span>
        </a>

        {/* Desktop Nav Links, Language Toggle & Pill Button */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          <nav className="flex items-center gap-7 lg:gap-9 text-sm lg:text-[15px] font-medium text-white/85">
            <a href="#top" className="hover:text-white transition-colors">
              {t.nav.home[language]}
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              {t.nav.about[language]}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {t.nav.projects[language]}
            </a>
          </nav>

          {/* Bilingual Language Switcher Toggle */}
          <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              aria-label="Pilih Bahasa Indonesia"
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === "id"
                  ? "bg-[#FF5E1E] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
                }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-label="Select English Language"
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${language === "en"
                  ? "bg-[#FF5E1E] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
                }`}
            >
              EN
            </button>
          </div>

          {/* Pill CTA: Get in touch dengan arrow button oranye */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-white text-slate-900 hover:bg-slate-50 font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-md active:scale-95 group"
          >
            <span>{t.nav.getInTouch[language]}</span>
            <span className="w-7 h-7 rounded-full bg-[#FF5E1E] flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5 shadow-sm">
              <IconArrowRight size={15} stroke={2.5} />
            </span>
          </a>
        </div>

        {/* Mobile Right: Language Switcher & Hamburger */}
        <div className="md:hidden flex items-center gap-2.5">
          <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`px-2 py-0.5 rounded-full transition-all ${language === "id" ? "bg-[#FF5E1E] text-white" : "text-white/60"
                }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${language === "en" ? "bg-[#FF5E1E] text-white" : "text-white/60"
                }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 mx-6 mt-4 p-5 rounded-3xl bg-[#061924]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col gap-4 text-sm font-medium animate-in fade-in zoom-in-95 duration-200">
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-white py-1"
          >
            {t.nav.home[language]}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-white py-1"
          >
            {t.nav.about[language]}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-white py-1"
          >
            {t.nav.projects[language]}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/90 hover:text-white py-1"
          >
            {t.nav.skills[language]}
          </a>
          <div className="pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-between w-full pl-5 pr-2 py-2 rounded-full bg-white text-slate-950 font-semibold text-xs"
            >
              <span>{t.nav.getInTouch[language]}</span>
              <span className="w-6 h-6 rounded-full bg-[#FF5E1E] flex items-center justify-center text-white">
                <IconArrowRight size={13} stroke={2.5} />
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Spacer fleksibel agar konten bawah selalu berada di bagian bawah */}
      <div className="flex-1" />

      {/* Bottom Row: Penempatan persis gambar referensi */}
      <div className="relative z-20 w-full px-6 sm:px-8 md:px-10 lg:px-12 pb-8 sm:pb-12 md:pb-14 lg:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10">
        {/* Kolom Kiri: Label oranye Data Analyst & Web Developer + Judul masif About */}
        <div className="space-y-1 shrink-0">
          <div className="text-[#FF5E1E] font-semibold text-sm sm:text-base lg:text-lg tracking-wide">
            {t.hero.roleTag[language]}
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-extrabold text-white tracking-[-0.04em] leading-none">
            {t.hero.aboutHeading[language]}
          </h1>
        </div>

        {/* Kolom Kanan: Sosok di Balik Solusi Digital / The Mind Behind Digital Solutions */}
        <div className="max-w-xs sm:max-w-sm lg:max-w-md space-y-1.5 md:pb-3 text-left">
          <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
            {t.hero.personHeading[language]}
          </h2>
          <p className="text-white/60 text-xs sm:text-sm lg:text-base leading-relaxed">
            {t.hero.personSub[language]}
          </p>
        </div>
      </div>
    </section>
  );
}



