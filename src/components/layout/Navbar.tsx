"use client";

import React, { useState, useEffect } from "react";
import { IconTerminal2, IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-[#0c0e12]/85 border-white/15 shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
            : "bg-[#0c0e12]/60 border-white/8"
        }`}
        aria-label="Navigasi Utama"
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 sm:gap-2.5 group text-white hover:text-emerald-400 transition-colors"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
            <IconTerminal2 size={15} className="text-emerald-400" />
          </div>
          <span className="font-mono text-xs sm:text-sm tracking-wider font-semibold uppercase">
            Wanyo Siswanto<span className="text-emerald-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.05] p-1 rounded-full text-xs font-mono">
          <a
            href="#projects"
            className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Proyek
          </a>
          <a
            href="#skills"
            className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Kapabilitas
          </a>
          <a
            href="#workflow"
            className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Alur Kerja
          </a>
          <a
            href="#about"
            className="px-4 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Tentang
          </a>
        </div>

        {/* Live Status & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Open for Work</span>
          </div>

          <a
            href="#contact"
            className="text-xs font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_2px_12px_rgba(255,255,255,0.15)] active:scale-95"
          >
            Kontak
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-1 focus:outline-none"
          aria-label="Buka Menu"
        >
          {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[#0e1015]/95 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 font-mono text-sm z-50">
          <a
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="text-zinc-300 hover:text-emerald-400 py-1"
          >
            01. Proyek Pilihan
          </a>
          <a
            href="#skills"
            onClick={() => setMobileOpen(false)}
            className="text-zinc-300 hover:text-emerald-400 py-1"
          >
            02. Kapabilitas & Stack
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileOpen(false)}
            className="text-zinc-300 hover:text-emerald-400 py-1"
          >
            03. Alur Kerja
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="text-zinc-300 hover:text-emerald-400 py-1"
          >
            04. Tentang Wanyo Siswanto
          </a>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available
            </span>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs font-sans font-medium px-4 py-2 rounded-full bg-white text-black"
            >
              Kirim Pesan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
