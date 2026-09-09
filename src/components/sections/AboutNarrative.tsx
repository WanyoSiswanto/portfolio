"use client";

import React from "react";
import { IconTerminal, IconShieldCheck, IconBolt } from "@tabler/icons-react";

export default function AboutNarrative() {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 mb-3 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              04 // PRAGMATIC PHILOSOPHY
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Dari Analisis Data ke Software yang Langsung Bisa Dipakai.
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Seringkali analisis data hanya berhenti pada berkas spreadsheet atau laporan statis. Masalahnya: pengguna di lapangan tetap membutuhkan antarmuka yang nyata untuk berinteraksi, memproses transaksi, dan mengakses layanan.
              </p>
              <p>
                Saya memilih pendekatan yang terpadu. Sebagai seorang yang mendalami data analisis, saya memahami kebutuhan informasi dan integritas alur kerja. Lalu, dengan keterampilan web development dan <em>vibe coding</em> yang lincah, saya mengeksekusi aplikasi web mandiri yang hidup—mulai dari landing page modern <strong>Nyopharma</strong> yang modular dan siap berkembang menjadi SaaS apotek online, hingga sistem monitoring kalibrasi &amp; validasi <strong>CQ System</strong> yang menyusun program tahunan otomatis, mencatat realisasi lapangan, dan mengelola database instrumen—yang siap menyelesaikan kebutuhan operasional secara nyata.
              </p>
              <p className="text-zinc-400 font-mono text-xs pt-2">
                {"// Tidak ada overengineering. Fokus pada produk nyata yang fungsional dan berdampak."}
              </p>
            </div>
          </div>

          {/* Right Column: 3 Concrete Value Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0f1217] border border-white/8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <IconShieldCheck size={20} />
                </div>
                <h3 className="font-display font-semibold text-white text-base">
                  Integritas Data Terjamin
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Menyusun filter, aturan tipe data, dan pengecekan regex ketat sebelum data mentah mengotori database produksi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1217] border border-white/8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <IconBolt size={20} />
                </div>
                <h3 className="font-display font-semibold text-white text-base">
                  Kecepatan Pengiriman (Fast Shipping)
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Membangun antarmuka web dengan cepat tanpa birokrasi arsitektur berlebih, siap dipakai langsung untuk kebutuhan nyata.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f1217] border border-white/8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <IconTerminal size={20} />
                </div>
                <h3 className="font-display font-semibold text-white text-base">
                  Fleksibilitas Kolaborasi
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Siap membantu proyek analisis data, pembuatan dashboard interaktif, maupun pengembangan web tools freelance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
