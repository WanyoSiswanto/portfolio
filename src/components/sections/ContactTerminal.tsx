"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconArrowRight, IconCopy, IconCheck } from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function ContactTerminal() {
  const { profile } = PORTFOLIO_DATA;
  const { language } = useLanguage();
  const t = TRANSLATIONS.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Curved Moody Dark Container matching reference image */}
        <div className="relative rounded-[36px] sm:rounded-[48px] bg-[#05141c] overflow-hidden text-white shadow-2xl p-8 sm:p-14 lg:p-20 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between border border-white/8">
          {/* Background image & dark moody overlay */}
          <div className="absolute inset-0 z-0 opacity-45 sm:opacity-55">
            <Image
              src="/cta-portrait.jpg"
              alt="Mood background portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[center_35%]"
            />
            {/* Cinematic dark vignette gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05141c] via-[#05141c]/80 to-[#05141c]/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05141c] via-[#05141c]/85 to-transparent" />
          </div>

          {/* Card Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end my-auto">
            {/* Left Side: Orange Label + Headline */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-[#FF5E1E] font-semibold text-sm sm:text-base tracking-wide">
                {t.badge[language]}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white tracking-[-0.03em] leading-[1.12]">
                {t.title[language]}
              </h2>
            </div>

            {/* Right Side: Subtitle + Action Button Row */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                {t.desc[language]}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Secondary email copy pill */}
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 text-xs sm:text-sm font-medium transition-all backdrop-blur-sm border border-white/10 active:scale-95 cursor-pointer"
                  title="Salin alamat email"
                >
                  {copied ? <IconCheck size={16} className="text-emerald-400" /> : <IconCopy size={16} />}
                  <span>{copied ? t.copied[language] : profile.contact.email}</span>
                </button>

                {/* Main Orange CTA Pill */}
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#E04A0E] text-white font-semibold text-xs sm:text-sm tracking-tight transition-all shadow-[0_8px_25px_rgba(255,94,30,0.4)] active:scale-95 group"
                >
                  <span>{t.btn[language]}</span>
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                    <IconArrowRight size={14} stroke={2.5} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

