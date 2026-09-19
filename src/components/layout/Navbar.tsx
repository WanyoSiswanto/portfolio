"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pt-4 transition-all duration-300 ${
        scrolled
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      <nav
        className="w-full max-w-5xl flex items-center justify-between px-5 sm:px-7 py-2.5 rounded-full bg-[#05141c]/90 border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300"
        aria-label="Navigasi Utama"
      >
        {/* Brand / Logo: nyouniverse dengan logo resmi baru */}
        <a
          href="#top"
          className="flex items-center gap-2 group text-white font-display font-bold text-base sm:text-lg tracking-tight transition-transform active:scale-98"
        >
          <Image
            src="/nyouniverse-logo-v2.png"
            alt="nyouniverse"
            width={26}
            height={26}
            className="rounded-full shadow-sm object-contain"
          />
          <span>nyouniverse</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-white/80">
          <a href="#top" className="hover:text-white transition-colors">
            {t.nav.home[language]}
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            {t.nav.about[language]}
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            {t.nav.projects[language]}
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            {t.nav.skills[language]}
          </a>
        </div>

        {/* Right Controls: Bilingual Switcher & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("id")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                language === "id"
                  ? "bg-[#FF5E1E] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#FF5E1E] text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Pill CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-white text-slate-900 hover:bg-zinc-100 font-semibold text-xs tracking-tight transition-all shadow-md active:scale-95 group"
          >
            <span>{t.nav.getInTouch[language]}</span>
            <span className="w-6 h-6 rounded-full bg-[#FF5E1E] flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
              <IconArrowRight size={13} stroke={2.5} />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/90 hover:text-white p-1.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          aria-label="Buka Menu"
        >
          {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[#05141c]/95 border border-white/15 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-sm font-medium z-50 animate-in fade-in zoom-in-95 duration-200">
          <a
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="text-white/80 hover:text-white py-1.5 flex items-center justify-between"
          >
            <span>{t.nav.home[language]}</span>
            <span className="text-[#FF5E1E] text-xs">01</span>
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-white/80 hover:text-white py-1.5 flex items-center justify-between"
          >
            <span>{t.nav.about[language]}</span>
            <span className="text-[#FF5E1E] text-xs">02</span>
          </a>
          <a
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="text-white/80 hover:text-white py-1.5 flex items-center justify-between"
          >
            <span>{t.nav.projects[language]}</span>
            <span className="text-[#FF5E1E] text-xs">03</span>
          </a>
          <a
            href="#skills"
            onClick={() => setMobileOpen(false)}
            className="text-white/80 hover:text-white py-1.5 flex items-center justify-between"
          >
            <span>{t.nav.skills[language]}</span>
            <span className="text-[#FF5E1E] text-xs">04</span>
          </a>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            {/* Language Switcher in Mobile */}
            <div className="flex items-center p-0.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "id" ? "bg-[#FF5E1E] text-white" : "text-white/60"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "en" ? "bg-[#FF5E1E] text-white" : "text-white/60"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 pl-3.5 pr-1.5 py-1.5 rounded-full bg-white text-slate-900 font-semibold text-xs"
            >
              <span>{t.nav.getInTouch[language]}</span>
              <span className="w-5 h-5 rounded-full bg-[#FF5E1E] flex items-center justify-center text-white">
                <IconArrowRight size={11} stroke={2.5} />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

