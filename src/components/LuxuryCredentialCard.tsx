"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Award,
  ExternalLink,
} from "lucide-react";
import { buildWhatsAppLink } from "@/data/clinicData";

export default function LuxuryCredentialCard() {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  const services = [
    "HAIR",
    "SKIN",
    "LASER",
    "MAKEUP",
    "NAIL",
    "NUTRITION",
    "SPA",
    "PMU",
    "BODY",
  ];

  const pillars = [
    "LUXURIOUS AMBIENCE",
    "PREMIUM QUALITY",
    "VALUE FOR MONEY",
    "CUSTOMER SATISFACTION",
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="luxury-credential relative w-full h-full min-h-[320px] rounded-3xl p-6 sm:p-7 overflow-hidden border border-[#d4af37]/40 bg-gradient-to-br from-[#1c1713] via-[#120f0d] to-[#0a0807] shadow-2xl transition-all duration-300 group flex flex-col justify-between"
    >
      {/* Dynamic Gold Metallic Sheen / Foil Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 380px at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 222, 160, 0.16) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Decorative Gold Geometric Watermark Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Subtle diagonal brushed gold accent strip */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#d4af37]/20 via-[#d4af37]/05 to-transparent rounded-bl-full pointer-events-none" />

      {/* Top Bar of Credential */}
      <div className="relative z-10 flex items-start justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
        <div>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c5a059] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            Business Credential
          </span>
          <div className="text-xs text-[#baa995] font-mono mt-0.5">
            Tel: +91 7378603232
          </div>
        </div>

        {/* Verification Hologram Pill */}
        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37]/20 via-[#f7e1b5]/20 to-[#d4af37]/20 border border-[#d4af37]/50 text-[10px] font-bold text-[#f7e1b5] flex items-center gap-1 shadow-sm">
          <Award className="w-3 h-3 text-[#d4af37]" />
          <span>BARAMATI MIDC</span>
        </div>
      </div>

      {/* Centerpiece: S Fvour Luxury Branding */}
      <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        {/* Left: Brand Identity */}
        <div className="sm:col-span-8 space-y-1.5 text-left">
          <div className="flex items-baseline gap-2">
            <h3 className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#fae6b8] to-[#d4af37] drop-shadow-sm">
              S Fvour
            </h3>
            <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#f7e1b5] border border-[#d4af37]/40">
              CLINIC
            </span>
          </div>

          <div className="text-xs sm:text-sm font-extrabold tracking-widest text-[#e8b86d] uppercase">
            GROUP BY - M SCISSORS
          </div>

          <div className="inline-block px-2.5 py-0.5 rounded border border-[#d4af37]/30 text-[10px] tracking-wider font-bold uppercase" style={{ backgroundColor: "rgba(0,0,0,0.7)", color: "#f7e1b5" }}>
            COSMETOLOGY & AESTHETIC SKIN HUB
          </div>

          {/* 4 Pillars Badge Bar */}
          <div className="pt-2">
            <span className="text-[9px] uppercase tracking-wider font-bold block mb-1" style={{ color: "#d4af37" }}>
              A Rare Combination Of:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {pillars.map((pillar, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2.5 py-1 rounded-md border border-[#d4af37]/60 font-bold tracking-wide"
                  style={{ backgroundColor: "#0f0c0a", color: "#fcf6e8" }}
                >
                  • {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Gold Vertical Services Strip */}
        <div className="sm:col-span-4 border border-[#d4af37]/35 rounded-2xl p-3 backdrop-blur-sm" style={{ backgroundColor: "rgba(10, 8, 7, 0.85)" }}>
          <div className="text-[9px] uppercase tracking-widest font-extrabold text-center border-b border-[#d4af37]/30 pb-1 mb-2" style={{ color: "#d4af37" }}>
            Specialized Hubs
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 text-[11px] font-bold" style={{ color: "#fcf6e8" }}>
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-1.5 py-0.5 rounded hover:bg-white/5 transition-colors"
              >
                <span>{srv}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Address & Verification */}
      <div className="relative z-10 pt-3 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#baa995]">
        <div className="flex items-start gap-1.5 max-w-md">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
          <span className="leading-tight text-[11px]">
            Shop No.003, 2nd Floor, Subhadra Mall, Near Subhadra Cinemas, Pencil Chowk, Baramati MIDC, Pune 413133
          </span>
        </div>

        <a
          href={buildWhatsAppLink({
            message: "I am contacting you regarding your verified clinic accreditation at Subhadra Mall, Baramati MIDC.",
          })}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-bold text-[#d4af37] hover:underline shrink-0 flex items-center gap-1"
        >
          <span>Verify Credential on WhatsApp</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
