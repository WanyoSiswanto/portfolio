"use client";

import React from "react";
import Image from "next/image";
import { IconArrowUp, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;
  const { language } = useLanguage();
  const t = TRANSLATIONS.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-100 bg-white text-slate-500 text-xs font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand: nyouniverse dengan logo resmi baru */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/nyouniverse-logo-v2.png"
            alt="nyouniverse"
            width={24}
            height={24}
            className="rounded-full shadow-2xs object-contain"
          />
          <span className="font-display font-bold text-slate-900 text-sm tracking-tight">
            nyouniverse
          </span>
          <span className="text-slate-400 text-xs">
            / {t.role[language]}
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-slate-500">
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors p-1"
            title="LinkedIn"
          >
            <IconBrandLinkedin size={18} />
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors p-1"
            title="GitHub"
          >
            <IconBrandGithub size={18} />
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-slate-900 transition-colors p-1"
            title="Email"
          >
            <IconMail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 inline-flex items-center gap-1.5 text-slate-600 hover:text-[#FF5E1E] transition-colors cursor-pointer font-medium"
            aria-label="Kembali ke atas"
          >
            <span>{t.backToTop[language]}</span>
            <IconArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

