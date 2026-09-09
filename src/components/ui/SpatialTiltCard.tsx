"use client";

import React from "react";

interface SpatialTiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpatialTiltCard({
  children,
  className = "",
}: SpatialTiltCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-[#0d1015] border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] overflow-hidden ${className}`}
    >
      {/* Ambient gentle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

