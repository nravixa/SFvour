"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { PILLARS, CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import TiltCard from "./TiltCard";
import { Gem, ShieldCheck, Coins, HeartHandshake, ArrowRight, Shuffle } from "lucide-react";
import { animateLayout } from "motion";

const iconMap = {
  Gem,
  ShieldCheck,
  Coins,
  HeartHandshake,
};

export default function PillarsSection() {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  // Layout shuffle function using Motion's animateLayout
  const shuffleCards = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll<HTMLLIElement>("li[data-layout]"));
    if (items.length < 2) return;

    setIsShuffling(true);

    const currentOrder = Array.from(container.children);
    let shuffled = [...items].sort(() => Math.random() - 0.5);

    // Guarantee that at least one item changes position
    if (shuffled.every((item, i) => item === currentOrder[i])) {
      shuffled = [shuffled[1], shuffled[0], shuffled[3] || shuffled[0], shuffled[2] || shuffled[1]];
    }

    try {
      animateLayout(
        () => {
          shuffled.forEach((item) => container.appendChild(item));
        },
        {
          duration: 0.65,
          ease: [0.4, 0, 0.2, 1],
        }
      );
    } catch (err) {
      console.warn("animateLayout notice:", err);
      shuffled.forEach((item) => container.appendChild(item));
    }

    setTimeout(() => {
      setIsShuffling(false);
    }, 650);
  }, []);

  // Auto-shuffle interval: shuffles smoothly, pauses automatically on card hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let hovered = false;
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const intervalId = setInterval(() => {
      if (!hovered) {
        shuffleCards();
      }
    }, 3800);

    return () => {
      clearInterval(intervalId);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [shuffleCards]);

  return (
    <section id="pillars" className="py-20 sm:py-24 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#0e0c0a] transition-colors duration-300">
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/06 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#e8b86d]/05 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
            A Rare Combination of{" "}
            <span className="gold-gradient-text">4 Core Standards</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] leading-relaxed">
            Our founding commitment at Subhadra Mall, Baramati MIDC. Combining medical-grade quality, luxurious clinical comfort, transparent value, and high patient satisfaction.
          </p>
        </div>

        {/* 2-Column Split: Showcase Card on Left + 4 Pillars Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 3D Aesthetic Centerpiece Showcase Card */}
          <div className="lg:col-span-6 h-full flex flex-col justify-center">
            <TiltCard maxTilt={4} perspective={1100} className="w-full h-full">
              <div className="relative rounded-3xl overflow-hidden border border-[#c5a059]/35 dark:border-[#d4af37]/35 bg-white/95 dark:bg-[#161210]/90 backdrop-blur-xl shadow-2xl p-2.5 sm:p-3.5 group h-full flex flex-col justify-between">
                {/* Backlight halo glow inside frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 via-transparent to-[#e8b86d]/15 pointer-events-none" />

                {/* Main Showcase Image Container */}
                <div className="image-overlay-card relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/clinic-lounge.jpg"
                    alt="S Fvour Aesthetic Clinic Luxury Lounge Baramati"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark gradient overlay for typography readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/90 via-[#0c0a09]/30 to-transparent pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="image-overlay-badge absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#d4af37]/45 text-[11px] font-semibold text-[#f7e1b5] flex items-center gap-1.5 shadow-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span className="text-[#f7e1b5]">M Scissors Aesthetic Skin Hub</span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="image-overlay-badge bg-[#0c0a09]/90 hover:bg-[#0c0a09] backdrop-blur-md rounded-xl p-3 border border-[#d4af37]/35 hover:border-[#d4af37] max-w-[80%] transition-all group cursor-pointer shadow-xl"
                      title="Open Google Maps location for Subhadra Mall, Baramati MIDC"
                    >
                      <p className="text-xs font-bold text-[#f5ecd8] group-hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                        <span>📍</span>
                        <span className="text-[#f5ecd8] group-hover:text-[#d4af37]">Subhadra Mall, Baramati MIDC</span>
                      </p>
                      <p className="text-[11px] text-[#baa995] mt-0.5">
                        Private Treatment Suites & US-FDA Laser Systems
                      </p>
                    </a>

                    <a
                      href={buildWhatsAppLink({
                        service: "Clinic Tour & Consultation",
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-[#d4af37]/40 shrink-0"
                      title="Book Consultation on WhatsApp"
                      aria-label="Direct consultation booking"
                    >
                      <ArrowRight className="w-5 h-5 text-black" />
                    </a>
                  </div>
                </div>

                {/* Subtitle bar under image */}
                <div className="px-3 pt-3 pb-1 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#4a3f35] dark:text-[#a3947c]">
                    A Rare Combination of 4 Core Pillars
                  </span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8c600a] dark:text-[#d4af37] font-bold hover:underline"
                  >
                    2nd Floor, Shop No.003
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: 4 Founding Pillars with Motion Layout Animation */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Control Bar above the 4 cards */}
            <div className="flex items-center justify-end mb-3.5 px-1">
              <button
                type="button"
                onClick={shuffleCards}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/80 dark:bg-white/10 hover:bg-[#d4af37]/20 text-[#14100e] dark:text-[#f7e1b5] border border-black/10 dark:border-white/10 transition-all cursor-pointer shadow-sm active:scale-95"
                title="Shuffle pillar cards using Motion animateLayout"
              >
                <Shuffle className={`w-3.5 h-3.5 ${isShuffling ? "rotate-180 transition-transform duration-500" : ""}`} />
                <span>Shuffle Standards</span>
              </button>
            </div>

            {/* Layout Animation Grid Container matching user specification */}
            <ul
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 flex-1 list-none p-0 m-0 relative"
            >
              {PILLARS.map((pillar) => {
                const Icon = iconMap[pillar.icon as keyof typeof iconMap] || Gem;

                return (
                  <li
                    key={pillar.id}
                    data-layout
                    className="h-full list-none will-change-transform"
                  >
                    <TiltCard maxTilt={6} perspective={900} className="h-full">
                      <div className="h-full glass-card rounded-2xl p-5 border border-white/10 hover:border-[#d4af37]/45 transition-[border-color,box-shadow,background-color] duration-300 relative group flex flex-col justify-between">
                        <div>
                          {/* Icon & Badge */}
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#9e771b]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#8c600a] dark:text-[#f7e1b5] mb-3 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>

                          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#8c600a] dark:text-[#d4af37] block mb-1">
                            {pillar.badge}
                          </span>

                          <h3 className="font-serif text-lg font-bold text-[#1c1511] dark:text-[#fbf8f3] group-hover:text-[#8c600a] dark:group-hover:text-[#f3db9d] transition-colors mb-1.5 leading-snug">
                            {pillar.title}
                          </h3>

                          <p className="text-xs text-[#52473c] dark:text-[#a89d8f] leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px]">
                          <span className="font-medium text-[#8c600a] dark:text-[#d4af37]">
                            {pillar.subtitle}
                          </span>
                          <span className="text-[#7d6f5f] dark:text-[#baa995] text-[10px]">
                            Verified Standard
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
