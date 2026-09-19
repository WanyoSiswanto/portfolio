"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function TelemetrySkills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const { language } = useLanguage();
  const t = TRANSLATIONS;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-white text-[#0F172A] border-t border-slate-100 relative z-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-semibold text-[#FF5E1E] uppercase tracking-wider mb-2">
              {t.skills.badge[language]}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
              {t.skills.title[language]}
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            {t.skills.desc[language]}
          </p>
        </div>

        {/* 2-Column Capability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[32px] bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#FF5E1E] font-semibold px-3 py-1 rounded-full bg-[#FF5E1E]/10 border border-[#FF5E1E]/20">
                    {cat.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500 font-medium">
                    {cat.skills.length} Core Tools
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#0F172A] mb-2 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Skills list items */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-white hover:bg-white/90 border border-slate-200/70 shadow-2xs transition-all group/item"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm text-slate-900 group-hover/item:text-[#FF5E1E] transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                          {skill.level}
                        </span>
                      </div>
                      <div className="font-sans text-xs text-slate-500 leading-normal">
                        {skill.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Section: How I Turn Raw Data into Working Systems */}
        <div id="workflow" className="pt-12 sm:pt-16 border-t border-slate-200/80">
          <div className="mb-10">
            <div className="text-xs font-semibold text-[#FF5E1E] uppercase tracking-wider mb-2">
              {t.skills.workflowBadge[language]}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              {t.skills.workflowTitle[language]}
            </h3>
            <p className="text-slate-600 text-sm mt-1.5 max-w-xl">
              {t.skills.workflowDesc[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.skills.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="font-display text-2xl font-bold text-[#FF5E1E] mb-3 group-hover:scale-105 transition-transform inline-block">
                    {step.step}
                  </div>
                  <h4 className="font-display text-base font-bold text-[#0F172A] mb-2 tracking-tight">
                    {step.title[language]}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.detail[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


