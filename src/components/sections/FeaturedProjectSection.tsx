"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconX,
  IconCheck,
  IconAlertTriangle,
  IconInfoCircle,
} from "@tabler/icons-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function FeaturedProjectSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS;
  const { projects } = PORTFOLIO_DATA;

  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "system">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on selection
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web") {
      return (
        project.id === "nyoclean" ||
        project.id === "arsy-dentalcare" ||
        project.id === "nyopharma"
      );
    }
    if (activeFilter === "system") {
      return project.id === "cq-compliance";
    }
    return true;
  });

  // Helper for concise display titles (clean & proportional)
  const getDisplayTitle = (project: Project) => {
    if (project.id === "nyoclean") return "NyoClean Shoe Care SaaS";
    if (project.id === "arsy-dentalcare") return "Arsy Dentalcare Clinic";
    if (project.id === "nyopharma")
      return language === "id" ? "Nyopharma Apotek Digital" : "Nyopharma Digital Pharmacy";
    if (project.id === "cq-compliance") return "CQ Compliance System";
    return project.title;
  };

  // Helper for tech stack in clean slash format (matching reference image)
  const getCleanStack = (project: Project) => {
    if (project.id === "nyoclean") return ["Next.js", "TypeScript", "PostgreSQL"];
    if (project.id === "arsy-dentalcare") return ["Next.js", "Tailwind CSS", "Healthcare UI"];
    if (project.id === "nyopharma") return ["Next.js", "TypeScript", "BPOM Catalog"];
    if (project.id === "cq-compliance") return ["React", "TypeScript", "CPOB Automation"];
    return project.tags.slice(0, 3);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F8FAFC] text-[#111827] border-t border-slate-100 relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14">
        {/* Section Header with View All / Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF5E1E] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
              <span>{t.projects.badge[language]}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em]">
              {t.projects.title[language]}
            </h2>
            <p className="text-slate-500 text-sm max-w-xl leading-relaxed mt-2.5">
              {t.projects.subtitle[language]}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center p-1 rounded-full bg-slate-200/70 border border-slate-300/50 text-xs font-semibold self-start md:self-end shrink-0">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs ${
                activeFilter === "all"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.projects.filterAll[language]} ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("web")}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs ${
                activeFilter === "web"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.projects.filterWeb[language]} (3)
            </button>
            <button
              onClick={() => setActiveFilter("system")}
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs ${
                activeFilter === "system"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.projects.filterData[language]} (1)
            </button>
          </div>
        </div>

        {/* 2x2 Proportional Etalase Grid for 4 Flagship Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredProjects.map((project) => {
            const stackList = getCleanStack(project);
            const title = getDisplayTitle(project);

            return (
              <div
                key={project.id}
                className="group bg-white border border-slate-200/80 hover:border-slate-300/90 rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-4 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Visual Thumbnail (Clean Rounded Frame Without Browser Address Clutter) */}
                <div className="relative aspect-16/10 w-full rounded-[18px] sm:rounded-[20px] overflow-hidden bg-slate-100 border border-slate-200/60 mb-3.5">
                  <Image
                    src={project.image || "/nyoclean-thumb.jpg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Hover Action Overlay */}
                  <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 backdrop-blur-[2px] p-4">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white text-[#0F172A] hover:bg-[#FF5E1E] hover:text-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 active:scale-95 group-hover:scale-100 scale-95"
                        title={language === "id" ? "Kunjungi Situs" : "Visit Site"}
                      >
                        <span>{language === "id" ? "Kunjungi Situs" : "Visit Site"}</span>
                        <IconArrowUpRight size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-full bg-white text-[#0F172A] hover:bg-[#FF5E1E] hover:text-white font-semibold text-xs transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                        title={language === "id" ? "Lihat Studi Kasus" : "View Case Study"}
                      >
                        <span>{language === "id" ? "Lihat Studi Kasus" : "View Case Study"}</span>
                        <IconArrowUpRight size={14} />
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/90 hover:bg-white text-[#0F172A] transition-all shadow-md"
                        title="Repository GitHub"
                      >
                        <IconBrandGithub size={15} />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-[#0F172A] transition-all shadow-md"
                      title={language === "id" ? "Detail Informasi" : "Quick Details"}
                    >
                      <IconInfoCircle size={15} />
                    </button>
                  </div>
                </div>

                {/* Bottom Content Area (Proportional Title + Slash Tech Stack) */}
                <div className="px-1 pb-1 pt-0.5 flex items-start justify-between gap-3">
                  <div className="min-w-0 grow">
                    {/* Project Title */}
                    <h3
                      onClick={() => {
                        if (project.demoUrl) {
                          window.open(project.demoUrl, "_blank");
                        } else {
                          setSelectedProject(project);
                        }
                      }}
                      className="font-display text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#FF5E1E] transition-colors line-clamp-1 cursor-pointer leading-snug"
                      title={project.title}
                    >
                      {title}
                    </h3>

                    {/* Tech Stack in Clean Slash Format (Exact Reference Image Style) */}
                    <p className="text-xs sm:text-[13px] font-medium text-[#FF5E1E] flex items-center flex-wrap gap-x-1.5 gap-y-0.5 mt-1">
                      {stackList.map((tech, idx) => (
                        <React.Fragment key={idx}>
                          <span className="hover:underline">{tech}</span>
                          {idx < stackList.length - 1 && (
                            <span className="text-slate-300 font-normal">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>

                  {/* Circular Action Arrow Button (Matches Hero & Reference Image) */}
                  <div className="shrink-0 mt-1">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF5E1E] text-slate-500 group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:scale-105"
                        title={language === "id" ? "Kunjungi Situs" : "Visit Site"}
                      >
                        <IconArrowUpRight size={15} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FF5E1E] text-slate-500 group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:scale-105"
                        title={language === "id" ? "Lihat Studi Kasus" : "View Case Study"}
                      >
                        <IconArrowUpRight size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Detail Modal for Curious Clients & Recruiters */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all"
            >
              <IconX size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                {selectedProject.category}
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-medium">
                {selectedProject.statusBadge}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-[#FF5E1E] font-semibold mb-4">
              {selectedProject.subtitle}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Problem Solved */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
              <div className="text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                <IconAlertTriangle size={15} className="text-[#FF5E1E]" />
                <span>{t.projects.problemTitle[language]}:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.problemSolved}
              </p>
            </div>

            {/* Features list */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mb-6">
                <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2.5">
                  {language === "id" ? "Fitur Utama & Arsitektur" : "Key Capabilities & Architecture"}
                </div>
                <ul className="space-y-2">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-[#FF5E1E] mt-0.5 shrink-0">
                        <IconCheck size={14} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics */}
            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 mb-6">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="font-display text-base sm:text-lg font-bold text-[#0F172A]">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] text-slate-500 truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons in Modal */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#FF5E1E] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95"
                >
                  <span>{language === "id" ? "Kunjungi Aplikasi Langsung" : "Visit Live Application"}</span>
                  <IconArrowUpRight size={15} />
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-medium transition-all"
                >
                  <IconBrandGithub size={15} />
                  <span>{t.projects.viewCode[language]}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
