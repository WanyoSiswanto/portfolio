"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconCheck,
  IconAlertTriangle,
  IconArrowUpRight,
  IconPill,
  IconExternalLink,
  IconAdjustmentsHorizontal,
  IconCalendarEvent,
  IconCertificate,
  IconShieldLock,
  IconFileText,
  IconBrandGithub,
} from "@tabler/icons-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import SpatialTiltCard from "@/components/ui/SpatialTiltCard";

export default function FeaturedProjectSection() {
  const { projects } = PORTFOLIO_DATA;
  const nyopharmaProject = projects.find((p) => p.id === "nyopharma") || projects[0];
  const cqProject = projects.find((p) => p.id === "cq-compliance") || projects[1];
  const secondaryProjects = projects.filter(
    (p) => p.id !== "nyopharma" && p.id !== "cq-compliance"
  );

  // Tab switchers between Real Screenshot & Module Simulation
  const [nyoMode, setNyoMode] = useState<"screenshot" | "resep" | "katalog" | "apoteker">("screenshot");
  const [cqMode, setCqMode] = useState<"screenshot" | "jadwal" | "realisasi" | "cpob">("screenshot");

  return (
    <section id="projects" className="py-24 sm:py-32 relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 mb-3 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              01 // GALERI KARYA NYATA
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Aplikasi &amp; Sistem Produksi
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
            Karya nyata yang telah dibangun dan dideploy. Dilengkapi tangkapan layar antarmuka asli serta tautan langsung untuk mencoba sistem.
          </p>
        </div>

        {/* FLAGSHIP 1: NYOPHARMA (Real UI Showcase) */}
        <div className="mb-12">
          <SpatialTiltCard
            className="p-6 sm:p-8 md:p-10 border-white/8 hover:border-teal-500/30 bg-[#0e1217] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 font-semibold flex items-center gap-1.5">
                      <IconPill size={14} className="text-teal-400" />
                      Karya 01 // {nyopharmaProject.category}
                    </span>
                    <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {nyopharmaProject.statusBadge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    {nyopharmaProject.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-teal-400/90 mb-4">
                    {nyopharmaProject.subtitle}
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {nyopharmaProject.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="font-mono text-xs text-zinc-400 mb-1 flex items-center gap-2">
                      <IconAlertTriangle size={14} className="text-amber-400" />
                      <span>Masalah yang Dipecahkan:</span>
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed">
                      {nyopharmaProject.problemSolved}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-8">
                    {nyopharmaProject.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="mt-0.5 text-teal-400 shrink-0">
                          <IconCheck size={15} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & Actions */}
                <div>
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-black/50 border border-white/5 mb-6">
                    {nyopharmaProject.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display text-base sm:text-lg font-bold text-teal-300">
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] text-zinc-400 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={nyopharmaProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] active:scale-95"
                      >
                        <span>Kunjungi Web Nyopharma</span>
                        <IconExternalLink size={16} />
                      </a>

                    {nyopharmaProject.githubUrl && (
                      <a
                        href={nyopharmaProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-mono text-xs transition-all"
                        title="Lihat Repository Nyopharma"
                      >
                        <IconBrandGithub size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Real Thumbnail Screenshot & Interactive Inspector */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="rounded-2xl bg-[#090d10] border border-teal-500/30 overflow-hidden shadow-2xl">
                  {/* Window Titlebar */}
                  <div className="px-4 py-3 bg-[#0f171b] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="font-mono text-xs text-zinc-400 ml-2 hidden sm:inline">
                        nyopharma.vercel.app
                      </span>
                    </div>

                    {/* View mode toggle */}
                    <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 font-mono text-[11px]">
                      <button
                        onClick={() => setNyoMode("screenshot")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          nyoMode === "screenshot"
                            ? "bg-teal-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Tampilan Asli (UI)
                      </button>
                      <button
                        onClick={() => setNyoMode("resep")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          nyoMode === "resep"
                            ? "bg-teal-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Tebus Resep
                      </button>
                      <button
                        onClick={() => setNyoMode("katalog")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          nyoMode === "katalog"
                            ? "bg-teal-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Katalog BPOM
                      </button>
                    </div>
                  </div>

                  {/* Window Body: Either Real Screenshot or Interactive Simulation */}
                  <div className="relative aspect-16/10 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                    {nyoMode === "screenshot" ? (
                      <div className="relative w-full h-full group">
                        <Image
                          src={nyopharmaProject.image || "/nyopharma-thumb.jpg"}
                          alt="Tangkapan Layar Nyopharma Apotek Digital"
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>
                    ) : nyoMode === "resep" ? (
                      <div className="p-6 w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#0c1417] to-[#080d0f] font-sans text-xs">
                        <div>
                          <div className="font-bold text-white text-sm flex items-center gap-1.5 mb-1">
                            <IconFileText size={16} className="text-teal-400" />
                            Alur Tebus Resep Digital Nyopharma
                          </div>
                          <p className="text-zinc-400 text-xs mb-4">
                            Pasien mengunggah foto resep dokter, apoteker memverifikasi dosis dan ketersediaan dalam 5-10 menit.
                          </p>
                          <div className="p-4 rounded-xl bg-white/[0.03] border border-dashed border-teal-500/40 text-center space-y-1">
                            <div className="text-teal-300 font-semibold text-xs">
                              Foto Resep Terunggah: resep_pasien_090926.jpg
                            </div>
                            <div className="text-zinc-400 text-[11px]">
                              Status: Terverifikasi oleh APJ apt. Sarah Ramadhani, S.Farm
                            </div>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-[11px] text-zinc-300 flex items-center justify-between font-mono">
                          <span>Distribusi Bersegel:</span>
                          <span className="text-teal-400 font-bold">Standar Mutu CDOB 22°C</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#0c1417] to-[#080d0f] font-sans text-xs">
                        <div className="space-y-2">
                          <div className="font-bold text-white text-sm mb-2">
                            Katalog Obat Terverifikasi BPOM RI
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-white">Paracetamol 500mg Kaplet</div>
                              <div className="text-[10px] text-emerald-400 font-mono">BPOM: DBL9812345604A1</div>
                            </div>
                            <span className="font-bold text-teal-400 font-mono">Rp 8.500</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-white">Amoxicillin 500mg Kapsul</div>
                              <div className="text-[10px] text-rose-400 font-mono">BPOM: GKL0412345601A1 • Wajib Resep</div>
                            </div>
                            <span className="font-bold text-teal-400 font-mono">Rp 22.000</span>
                          </div>
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400 border-t border-white/5 pt-2 flex items-center justify-between">
                          <span>Total 120+ SKU Farmasi Terdaftar</span>
                          <span className="text-teal-400">Garansi 100% Asli</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Window Bottom Info Bar */}
                  <div className="px-4 py-2.5 bg-[#0b0f13] border-t border-white/8 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Tangkapan Layar Nyata: nyopharma.vercel.app
                    </span>
                    <a
                      href={nyopharmaProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1 font-sans"
                    >
                      Buka Web Asli <IconArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpatialTiltCard>
        </div>

        {/* FLAGSHIP 2: CQ SYSTEM (Real UI Showcase) */}
        <div className="mb-14">
          <SpatialTiltCard
            className="p-6 sm:p-8 md:p-10 border-white/8 hover:border-cyan-500/30 bg-[#0e1217] transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold flex items-center gap-1.5">
                      <IconAdjustmentsHorizontal size={14} className="text-cyan-400" />
                      Karya 02 // {cqProject.category}
                    </span>
                    <span className="font-mono text-xs text-amber-400 flex items-center gap-1 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {cqProject.statusBadge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                    {cqProject.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-cyan-400/90 mb-4">
                    {cqProject.subtitle}
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {cqProject.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                    <div className="font-mono text-xs text-zinc-400 mb-1 flex items-center gap-2">
                      <IconShieldLock size={14} className="text-cyan-400" />
                      <span>Kepatuhan Regulasi:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {cqProject.problemSolved}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 mb-8">
                    {cqProject.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <span className="mt-0.5 text-cyan-400 shrink-0">
                          <IconCheck size={15} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & Actions */}
                <div>
                  <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl bg-black/50 border border-white/5 mb-6">
                    {cqProject.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display text-base sm:text-lg font-bold text-cyan-300">
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] text-zinc-400 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={cqProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
                    >
                      <span>Buka Sistem CQ</span>
                      <IconExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Real Thumbnail Screenshot & Interactive Inspector */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="rounded-2xl bg-[#080d14] border border-cyan-500/30 overflow-hidden shadow-2xl">
                  {/* Window Titlebar */}
                  <div className="px-4 py-3 bg-[#0d1622] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className="font-mono text-xs text-zinc-400 ml-2 hidden sm:inline">
                        cq-weld.vercel.app
                      </span>
                    </div>

                    {/* View mode toggle */}
                    <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 font-mono text-[11px]">
                      <button
                        onClick={() => setCqMode("screenshot")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          cqMode === "screenshot"
                            ? "bg-cyan-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Tampilan Asli (UI)
                      </button>
                      <button
                        onClick={() => setCqMode("jadwal")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          cqMode === "jadwal"
                            ? "bg-cyan-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Program Tahunan
                      </button>
                      <button
                        onClick={() => setCqMode("realisasi")}
                        className={`px-2.5 py-1 rounded transition-all ${
                          cqMode === "realisasi"
                            ? "bg-cyan-600 text-white font-semibold shadow-xs"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Realisasi &amp; Database
                      </button>
                    </div>
                  </div>

                  {/* Window Body */}
                  <div className="relative aspect-16/10 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                    {cqMode === "screenshot" ? (
                      <div className="relative w-full h-full group">
                        <Image
                          src={cqProject.image || "/cq-weld-thumb.jpg"}
                          alt="Tangkapan Layar Sistem CQ - Compliance & Qualification"
                          fill
                          sizes="(max-width: 1024px) 100vw, 55vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                          priority
                        />
                      </div>
                    ) : cqMode === "jadwal" ? (
                      <div className="p-6 w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#0a141d] to-[#070b10] font-mono text-xs">
                        <div className="space-y-2">
                          <div className="font-bold text-white text-xs flex items-center gap-1.5 font-sans mb-1">
                            <IconCalendarEvent size={15} className="text-cyan-400" />
                            Otomasi Program Tahunan (Kalibrasi &amp; Validasi)
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                            <div className="flex items-center justify-between text-white font-semibold">
                              <span>HPLC Shimadzu Prominence-i</span>
                              <span className="text-emerald-400 text-[11px]">Program: 14 Okt 2026</span>
                            </div>
                            <div className="text-zinc-400 text-[10px]">Tipe: Rekalibrasi Tahunan • Jadwal Otomatis Sistem</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                            <div className="flex items-center justify-between text-white font-semibold">
                              <span>Autoclave Ruang Steril B</span>
                              <span className="text-amber-400 text-[11px]">Program: 28 Sep 2026</span>
                            </div>
                            <div className="text-zinc-400 text-[10px]">Tipe: Rekualifikasi Kinerja (PQ) • Status: Due Soon</div>
                          </div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-[11px] text-zinc-400 flex items-center justify-between">
                          <span>Auto-Calculation:</span>
                          <span className="text-cyan-400 font-bold">Penyusunan Jadwal Otomatis 1 Tahun Penuh</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#0a141d] to-[#070b10] font-mono text-xs">
                        <div className="space-y-2">
                          <div className="font-bold text-white text-xs flex items-center gap-1.5 font-sans mb-1">
                            <IconCertificate size={15} className="text-cyan-400" />
                            Pencatatan Realisasi &amp; Database Master Program
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1 text-[11px]">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Instrumen DB:</span>
                              <span className="text-white font-semibold">Spectrophotometer UV-Vis 1800</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Realisasi Sertifikat:</span>
                              <span className="text-cyan-300 font-bold">CAL/2026/08/0429</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Status Verifikasi:</span>
                              <span className="text-emerald-400 font-semibold">TEREALISASI &amp; TERVERIFIKASI QA</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[11px] text-zinc-400 border-t border-white/5 pt-2 flex items-center justify-between">
                          <span>Database Program:</span>
                          <span className="text-cyan-400 font-semibold">Arsip Digital Terpusat (Audit-Ready)</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Window Bottom Info Bar */}
                  <div className="px-4 py-2.5 bg-[#0b0f13] border-t border-white/8 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Tangkapan Layar Nyata: cq-weld.vercel.app
                    </span>
                    <a
                      href={cqProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 font-sans"
                    >
                      Buka Web Asli <IconArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SpatialTiltCard>
        </div>

        {/* SECONDARY PROJECTS GRID (2 Columns 3D Tilt Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((proj) => (
            <SpatialTiltCard
              key={proj.id}
              className="p-6 sm:p-8 flex flex-col justify-between h-full bg-[#0e1217] border-white/8 hover:border-white/15"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                    {proj.category}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: proj.accentColor }}
                  />
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {proj.title}
                </h4>
                <p className="font-mono text-xs text-zinc-400 mb-4">
                  {proj.subtitle}
                </p>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="font-mono text-[11px] text-zinc-400 mb-1">
                    Fokus Solusi:
                  </div>
                  <p className="text-xs text-zinc-200">{proj.problemSolved}</p>
                </div>

                <ul className="space-y-1.5 mb-6">
                  {proj.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <span className="text-cyan-400">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-black/40 border border-white/5 mb-6">
                  {proj.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div
                        className="font-display text-base font-bold"
                        style={{ color: proj.accentColor }}
                      >
                        {metric.value}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-400 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpatialTiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
