"use client";

import React, { useState } from "react";
import { TESTIMONIALS, CLINIC_INFO } from "@/data/clinicData";
import TiltCard from "./TiltCard";
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Stories" },
  { id: "skin", label: "Skin & Glow" },
  { id: "laser", label: "Painless Laser" },
  { id: "hair", label: "Hair & Scalp" },
  { id: "bridal", label: "Bridal & PMU" },
] as const;

export default function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#0c0a09] transition-colors duration-500"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] bg-[#d4af37]/06 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8c600a]/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8c600a] dark:text-[#d4af37]">
              Unfiltered Patient Experiences
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#14100e] dark:text-white tracking-tight leading-[1.12]">
            Documented Results. <br />
            <span className="gold-gradient-text italic font-serif inline-block pr-2">
              5,000+ Glowing Confidences.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] leading-relaxed max-w-2xl mx-auto">
            Candid, verified feedback from patients across Baramati, Pune, and Maharashtra experiencing board-certified dermatology, painless laser physics, and bespoke bridal artistry.
          </p>

          {/* Social Proof Trust Badge Lockup */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-2.5 rounded-2xl sm:rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <span className="font-extrabold text-xs text-[#14100e] dark:text-white">4.9 / 5.0</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-[#d4af37] hidden sm:inline" />

            <span className="text-xs font-semibold text-[#52473c] dark:text-[#baa995]">
              620+ Verified Patient Reviews on Google & Practo
            </span>

            <span className="w-1 h-1 rounded-full bg-[#d4af37] hidden sm:inline" />

            <div className="flex items-center gap-1 text-xs font-bold text-[#8c600a] dark:text-[#f3db9d]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25d366]" />
              <span>100% Doctor-Led Care</span>
            </div>
          </div>

          {/* Transparent Category Filter Capsule */}
          <div className="mt-8 w-full overflow-x-auto scrollbar-none pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex justify-start sm:justify-center">
            <nav
              aria-label="Filter reviews by treatment category"
              className="inline-flex items-center gap-1.5 p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md shadow-sm shrink-0"
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={(e) => {
                      setActiveCategory(cat.id);
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest",
                      });
                    }}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#14100e] font-extrabold shadow-md shadow-[#d4af37]/20 scale-[1.02]"
                        : "text-[#52473c] dark:text-[#c9bfae] hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Testimonials 3D Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => {
            const initials = t.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <TiltCard key={t.id} maxTilt={5} perspective={950}>
                <div className="h-full rounded-3xl glass-card p-6 sm:p-7 border border-black/[0.08] dark:border-white/[0.08] hover:border-[#d4af37]/50 dark:hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group bg-white/95 dark:bg-[#14110f]/95 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10">
                  <div>
                    {/* Top Identity Lockup */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        {/* Avatar Initials Capsule */}
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f7e1b5] to-[#aa8021] text-[#14100e] font-extrabold flex items-center justify-center text-sm shadow-md shrink-0">
                          {initials}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm sm:text-base text-[#14100e] dark:text-white tracking-tight">
                              {t.name}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2 text-[11px] text-[#6b5d4f] dark:text-[#9e9282] mt-0.5">
                            <span className="flex items-center gap-1 font-medium">
                              <MapPin className="w-3 h-3 text-[#8c600a] dark:text-[#d4af37]" />
                              {t.location}
                            </span>
                            <span>•</span>
                            <span>{t.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#25d366]/10 text-[#25d366] text-[10px] font-bold border border-[#25d366]/20 shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>

                    {/* Treatment Division Pill */}
                    <div className="mb-4">
                      <span className="inline-block text-[11px] font-mono font-bold text-[#8c600a] dark:text-[#f3db9d] bg-[#8c600a]/08 dark:bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                        {t.divisionTag}
                      </span>
                    </div>

                    {/* 5-Star Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]"
                          />
                        ))}
                        <span className="text-xs font-bold text-[#14100e] dark:text-white ml-1.5">
                          5.0
                        </span>
                      </div>
                      <Quote className="w-5 h-5 text-[#8c600a]/25 dark:text-[#d4af37]/25 group-hover:text-[#8c600a]/60 dark:group-hover:text-[#d4af37]/60 transition-colors" />
                    </div>

                    {/* Highlight Pull-Quote */}
                    <h4 className="font-serif italic text-sm sm:text-[15px] font-bold text-[#14100e] dark:text-[#f7e1b5] mb-2.5 leading-snug">
                      &ldquo;{t.highlight}&rdquo;
                    </h4>

                    {/* Full Review Text */}
                    <p className="text-xs sm:text-[13px] text-[#4a3f35] dark:text-[#cfc3b0] leading-relaxed">
                      {t.review}
                    </p>
                  </div>

                  {/* Clinical Outcome Feature Tags */}
                  <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5">
                      {t.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#faf7f2] dark:bg-white/[0.04] text-[10px] font-semibold text-[#665a4e] dark:text-[#b0a494] border border-black/[0.04] dark:border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Bottom Google Review Callout Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#faf7f2] via-white to-[#faf7f2] dark:from-[#14100e] dark:via-[#1a1512] dark:to-[#14100e] border border-black/[0.08] dark:border-[#d4af37]/35 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-bold text-[#8c600a] dark:text-[#d4af37]">
                Google Verified Experience
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#14100e] dark:text-white">
              Consulted with our physicians at Subhadra Mall?
            </h4>
            <p className="text-xs sm:text-sm text-[#52473c] dark:text-[#baa995]">
              Every review helps fellow patients make informed, scientific medical and aesthetic decisions.
            </p>
          </div>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#14100e] font-extrabold text-xs uppercase tracking-wider shadow-md shadow-[#d4af37]/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
