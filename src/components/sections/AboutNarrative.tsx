"use client";

import React from "react";
import {
  IconSchool,
  IconCode,
  IconCheck,
  IconArrowUpRight,
  IconChartBar,
} from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function AboutNarrative() {
  const { language } = useLanguage();
  const t = TRANSLATIONS.aboutNarrative;

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-white text-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Kolom Kiri: Label, Judul Utama & Kartu Kredensial UNIKOM */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="text-[#FF5E1E] font-semibold text-sm sm:text-base tracking-wide">
                {t.badge[language]}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-[-0.035em] leading-[1.12]">
                {t.heading[language]}
              </h2>
            </div>

            {/* Kartu Kredensial Akademik UNIKOM (Trust Card) */}
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/90 border border-slate-200/80 shadow-xs space-y-3 hover:border-slate-300 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF5E1E] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#FF5E1E] animate-pulse" />
                  <span>{t.eduCard.tag[language]}</span>
                </div>
                <span className="p-2 rounded-xl bg-white border border-slate-200 text-[#0F172A] shadow-2xs">
                  <IconSchool size={20} stroke={2} />
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                  {t.eduCard.degree[language]}
                </h3>
                <p className="text-slate-800 font-medium text-sm">
                  {t.eduCard.university[language]}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                {t.eduCard.desc[language]}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono font-medium text-slate-700">
                <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200">
                  Web & SaaS
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200">
                  Android App
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200">
                  Data Science
                </span>
              </div>
            </div>

            {/* Call to Action Cepat untuk Klien */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#0F172A] text-white hover:bg-slate-800 font-medium text-xs sm:text-sm tracking-tight transition-all shadow-md active:scale-98 group"
              >
                <span>{language === "id" ? "Konsultasikan Kebutuhan Anda" : "Consult Your Project"}</span>
                <IconArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#FF5E1E]"
                />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Editorial & Pilar Nilai Tambah Klien */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
              {t.subheading[language]}
            </h3>

            {/* 3 Paragraf Narasi: UNIKOM -> Data Science -> Client Value */}
            <div className="space-y-4">
              <p>{t.p1[language]}</p>
              <p>{t.p2[language]}</p>
              <p>{t.p3[language]}</p>
            </div>

            {/* 3 Pilar Nilai Klien: Web/Android, Data Science, Eksekusi Siap Pakai */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Pilar 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF5E1E] shadow-2xs">
                  <IconCode size={18} stroke={2} />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                  {t.pillars.p1Title[language]}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {t.pillars.p1Desc[language]}
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF5E1E] shadow-2xs">
                  <IconChartBar size={18} stroke={2} />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                  {t.pillars.p2Title[language]}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {t.pillars.p2Desc[language]}
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF5E1E] shadow-2xs">
                  <IconCheck size={18} stroke={2.5} />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                  {t.pillars.p3Title[language]}
                </h4>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {t.pillars.p3Desc[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

