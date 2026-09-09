"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SpatialTiltCard from "@/components/ui/SpatialTiltCard";

export default function TelemetrySkills() {
  const { skillCategories, workflowSteps } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-black/40 border-y border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              02 // CAPABILITY TELEMETRY
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Matriks Kapabilitas & Stack
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Bukan sekadar daftar nama tools, melainkan instrumen nyata yang saya gunakan untuk membedah data dan meluncurkan aplikasi web.
          </p>
        </div>

        {/* 2-Column Capability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((cat, idx) => (
            <SpatialTiltCard
              key={idx}
              className="p-6 sm:p-8 bg-[#0e1217] border-white/8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {cat.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  {cat.skills.length} Core Tools
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-tight">
                {cat.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Skills list items */}
              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all group/item"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-medium text-sm text-zinc-100 group-hover/item:text-emerald-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                        {skill.level}
                      </span>
                    </div>
                    <div className="font-mono text-xs text-zinc-400 leading-normal">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </SpatialTiltCard>
          ))}
        </div>

        {/* Workflow Section: How I Turn Raw Data into Working Systems */}
        <div id="workflow" className="pt-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-3 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              03 // METHODICAL PROCESS
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Alur Kerja Eksekusi
            </h3>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Proses terstruktur dari audit akar masalah hingga implementasi aplikasi siap pakai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d0f14] border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-emerald-400/80 mb-4 group-hover:text-emerald-300 transition-colors">
                    {step.step}
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.detail}
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
