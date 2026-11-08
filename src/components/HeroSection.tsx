"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* 1. Full-Bleed 16:9 Architectural Background Image (Unobstructed View) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-clinic.jpg"
          alt="S Fvour Aesthetic Clinic Luxury Lounge Baramati"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%]"
        />

        {/* Cinematic Translucent Multi-Layer Vignettes for Contrast & Readability */}
        {/* Left-to-right atmospheric vignette: keeps the left wall soft and deep for crystal-clear typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0907]/92 via-[#0c0907]/60 to-transparent dark:from-[#080605]/95 dark:via-[#080605]/75 dark:to-[#080605]/20" />

        {/* Top follow-through header gradient */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#0c0907]/80 via-[#0c0907]/40 to-transparent dark:from-[#090706]/90" />

        {/* Bottom smooth cloud & blur transition to Founding Pillars */}
        <div className="hero-bottom-gradient absolute bottom-0 left-0 right-0 h-52 sm:h-64 pointer-events-none overflow-hidden">
          {/* Progressive multi-stage backdrop blur dissolving the photo */}
          <div className="absolute inset-0 backdrop-blur-[10px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_60%)]" />

          {/* Undulating cloud mist silhouette at the transition horizon */}
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-24 sm:h-28 opacity-90 dark:opacity-95"
          >
            <path
              d="M0 60C160 30 320 90 480 65C640 40 800 95 960 70C1120 45 1280 85 1440 65V120H0V60Z"
              className="fill-[#f8f6f0] dark:fill-[#0e0c0a]"
            />
          </svg>
        </div>

        {/* Ambient warm golden ceiling spotlight pools matching reference */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[#d4af37]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#e8b86d]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* 2. Hero Content Container (Shifted up to balance gracefully over the luxury lounge wall) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center -translate-y-6 sm:-translate-y-8 lg:-translate-y-10">
        {/* Main Typography & CTAs (Spacious Left Area over the Wall) */}
        <div className="max-w-2xl sm:max-w-3xl space-y-5 sm:space-y-6 text-left py-4 sm:py-6">
          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Aesthetic Excellence That{" "}
            <span className="gold-gradient-text block sm:inline">
              Transforms You
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-[#e8dfd3] max-w-xl font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Where medical precision meets five-star luxury. Advanced skin rejuvenation, painless laser hair reduction, trichology, and couture bridal glam.
          </p>

          {/* Value Tags (Translucent Glassmorphic Pills) */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[#f5ecd8] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              Luxurious Ambience
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[#f5ecd8] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              Premium Quality
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[#f5ecd8] shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
              Value for Money
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* Primary Gold CTA */}
            <a
              href="#booking"
              className="px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e8b86d] to-[#aa8222] text-[#0c0a09] font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-2xl shadow-[#d4af37]/35 hover:shadow-[#d4af37]/55 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Book Consultation via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Frosted Glass CTA */}
            <a
              href="#ambience"
              className="px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/40 dark:hover:bg-black/60 backdrop-blur-2xl border border-white/25 hover:border-[#d4af37]/70 text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[#f7e1b5]">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>View Clinic Suites</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
