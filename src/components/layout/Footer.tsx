"use client";

import React from "react";
import { IconArrowUp, IconTerminal2 } from "@tabler/icons-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/8 bg-[#060709] relative z-20 font-mono text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
            <IconTerminal2 size={14} />
          </div>
          <span className="text-zinc-300 font-semibold uppercase tracking-wider">
            WANYO SISWANTO
          </span>
          <span className="text-zinc-600">{"//"}</span>
          <span className="text-zinc-400 text-[11px]">
            Data Analyst &amp; Web Developer
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-zinc-600 text-[11px] hidden md:inline">
            Built with Next.js 16, React 19 &amp; Tailwind CSS
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <IconArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
