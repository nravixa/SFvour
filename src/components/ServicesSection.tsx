"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { SERVICES, buildWhatsAppLink } from "@/data/clinicData";
import TiltCard from "./TiltCard";
import { motion } from "motion/react";
import {
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Smooth scroll handler with left / right buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Jump to specific card when clicking division pill
  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    const targetCard = cards[index];
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  };

  // Track scroll position to update active index and arrow states
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(currentScroll > 15);
    setCanScrollRight(currentScroll < maxScroll - 15);

    // Identify which card is in center view
    const center = currentScroll + container.clientWidth / 2;
    const cards = Array.from(container.children) as HTMLElement[];

    let closestIdx = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <article
      id="services"
      className="relative bg-[#f8f6f0] dark:bg-[#0a0807] transition-colors duration-500 overflow-visible py-20 sm:py-28"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/05 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#8c600a]/04 rounded-full blur-[160px] pointer-events-none" />

      {/* -------------------------------------------------------------
          Header: Division Introduction (Centered)
          ------------------------------------------------------------- */}
      <header className="pb-8 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
        <div className="mb-3">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#8c600a] dark:text-[#d4af37]">
            Comprehensive Clinical Care
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#14100e] dark:text-white tracking-tight leading-[1.1]">
          Our 9 Specialized <br className="hidden sm:inline" />
          <span className="gold-gradient-text italic font-serif inline-block pr-2">Divisions</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] leading-relaxed max-w-2xl">
          Nine dedicated clinical divisions under one roof at Subhadra Mall, Baramati MIDC. Administered by board-certified physicians using US-FDA gold standard technologies.
        </p>

        {/* Transparent Navigation Capsule for 9 Divisions */}
        <div className="mt-7 w-full overflow-x-auto scrollbar-none pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 flex justify-start lg:justify-center">
          <nav
            aria-label="Divisions Navigation"
            className="inline-flex items-center gap-0.5 p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md shadow-sm shrink-0"
          >
            {SERVICES.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={(e) => {
                    scrollToCard(idx);
                    e.currentTarget.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest",
                    });
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-tight transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-[#14100e] font-extrabold"
                      : "text-[#52473c] dark:text-[#c9bfae] hover:text-black dark:hover:text-white"
                  }`}
                  title={`View Division 0${idx + 1}: ${s.name}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] shadow-md shadow-[#d4af37]/25"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    0{idx + 1} {s.shortTag}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------------------
          HORIZONTAL SCROLL CARDS CONTAINER
          ------------------------------------------------------------- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar with Left/Right Buttons & Live Active Counter */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-[#14100e] dark:text-white">
              Division 0{activeIndex + 1} of 0{SERVICES.length}:
            </span>
            <span className="text-[#8c600a] dark:text-[#f3db9d] font-semibold hidden sm:inline">
              {SERVICES[activeIndex]?.name}
            </span>
          </div>

          {/* Smooth Scroll Left / Right Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1614] border border-black/10 dark:border-white/15 flex items-center justify-center text-black dark:text-white shadow-sm transition-all cursor-pointer ${
                !canScrollLeft
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-105 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black active:scale-95"
              }`}
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1614] border border-black/10 dark:border-white/15 flex items-center justify-center text-black dark:text-white shadow-sm transition-all cursor-pointer ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:scale-105 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black active:scale-95"
              }`}
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Native Horizontal Scroll Container - Scrollbar Completely Hidden */}
        <div
          ref={scrollRef}
          className="horizontal-scroll-container scrollbar-none py-2"
        >
          {SERVICES.map((service, index) => {
            const formattedIndex = `#00${index + 1}`;
            const isCenter = activeIndex === index;

            return (
              <div
                key={service.id}
                className="w-[85vw] sm:w-[380px] lg:w-[420px] flex-none shrink-0"
                style={{ flex: "0 0 auto" }}
              >
                <TiltCard maxTilt={4} perspective={900} className="h-full">
                  <div
                    className={`h-full glass-card rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl bg-white/95 dark:bg-[#14110f]/95 ${
                      isCenter
                        ? "border-[#d4af37]/70 ring-1 ring-[#d4af37]/30 shadow-[0_16px_40px_rgba(212,175,55,0.1)]"
                        : "border-black/[0.08] dark:border-white/[0.08] hover:border-[#d4af37]/45"
                    }`}
                  >
                    <div>
                      {/* Image Frame with Badges */}
                      <div className="image-card relative aspect-[16/10] w-full overflow-hidden bg-[#161210]">
                        <Image
                          src={service.image}
                          alt={`${service.name} - S Fvour Clinic Baramati`}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 380px, 420px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                        {/* Top Number & Duration Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="font-mono text-xs sm:text-sm font-extrabold !text-[#fdfcf7] bg-[#0c0a09]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#d4af37]/50 shadow-md">
                            {formattedIndex}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-[#0c0a09]/90 backdrop-blur-md text-[10px] font-bold !text-[#f3db9d] border border-white/20 shadow-md">
                            {service.duration}
                          </span>
                        </div>

                        {/* Bottom Focus Badge */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                          <div className="service-focus-badge flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0c0a09]/92 backdrop-blur-md border border-[#d4af37]/60 shadow-[0_4px_16px_rgba(0,0,0,0.6)] min-w-0 flex-1 sm:flex-initial max-w-[calc(100%-85px)] sm:max-w-none">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_6px_#d4af37]" />
                            <span className="focus-label text-[10px] sm:text-[11px] font-bold uppercase tracking-wider !text-[#f3db9d] shrink-0">
                              Focus:
                            </span>
                            <span className="focus-text text-xs sm:text-[13px] font-semibold !text-white truncate drop-shadow-sm">
                              {service.popularFor}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono font-bold !text-[#f7e1b5] bg-[#0c0a09]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 hidden sm:inline shadow-sm shrink-0">
                            US-FDA Tech
                          </span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-6 space-y-3 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37]">
                            Division {index + 1} of 9 • {service.category}
                          </span>
                          <span className="text-[10px] font-mono text-[#52473c] dark:text-[#9d907e]">
                            {service.shortTag}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#14100e] dark:text-white group-hover:text-[#8c600a] dark:group-hover:text-[#f3db9d] transition-colors leading-snug">
                          {service.name}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-[#8c600a] dark:text-[#f3db9d]">
                          {service.tagline}
                        </p>

                        <p className="text-xs text-[#52473c] dark:text-[#baa995] leading-relaxed line-clamp-3">
                          {service.description}
                        </p>

                        {/* Key Procedures list */}
                        <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#14100e] dark:text-white block mb-1">
                            Key Clinical Procedures:
                          </span>
                          {service.highlights.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-[11px] text-[#2b2118] dark:text-[#cfc3b0]">
                              <CheckCircle className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Booking Footer */}
                    <div className="p-6 pt-0">
                      <a
                        href={buildWhatsAppLink({
                          service: `${service.name} (${service.shortTag})`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3db9d] to-[#aa8021] text-[#14100e] font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:shadow-[#d4af37]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group/btn"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#14100e] text-[#14100e]" />
                        <span>Book {service.shortTag} Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------------------------------------------------------
          Footer of Section: Handoff to Consulting Doctors
          ------------------------------------------------------------- */}
      <footer className="pt-14 pb-4 flex flex-col justify-center items-center text-center px-4 sm:px-6 relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#8c600a] dark:text-[#d4af37] mb-2">
          Physician Consultation
        </p>
        <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] max-w-xl">
          All procedures are personalized and administered under lead aesthetic physician supervision.
        </p>
        <a
          href="#doctors"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ede7dc] dark:bg-white/10 text-[#14100e] dark:text-white font-bold text-xs hover:scale-105 transition-all cursor-pointer border border-black/10 dark:border-white/10 hover:border-[#d4af37]"
        >
          <span>Meet Consulting Doctors</span>
          <ArrowRight className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]" />
        </a>
      </footer>
    </article>
  );
}
