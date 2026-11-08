"use client";

import React from "react";

export type TransitionVariant =
  | "cloud"        // Organic undulating soft cloud banks & morning vapor
  | "blur"         // Camera bokeh / multi-stage progressive backdrop-blur dissolve
  | "zen-wave"     // Minimalist Japanese curvilinear wave with champagne hairline crest
  | "luminous-fog" // Warm sunbeam / moonlit ambient mist leak
  | "frosted-haze" // Pure frosted glass apothecary horizon with diffuse rim glow
  | "smoke-veil";  // Haute-couture silk drape / smoky obsidian veil

interface SectionTransitionProps {
  variant?: TransitionVariant;
  className?: string;
  flip?: boolean;
}

export default function SectionTransition({
  variant = "cloud",
  className = "",
  flip = false,
}: SectionTransitionProps) {
  const flipClass = flip ? "rotate-180 -scale-x-100" : "";

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none select-none z-20 transition-colors duration-500 -my-7 sm:-my-10 lg:-my-12 ${className}`}
    >
      {/* -------------------------------------------------------------
          VARIANT 1: CLOUD (Organic Billowing Mist & Dreamy Vapor)
          ------------------------------------------------------------- */}
      {variant === "cloud" && (
        <div className={`relative w-full h-20 sm:h-28 lg:h-36 ${flipClass}`}>
          {/* Progressive Multi-stage Backdrop Blur Mask */}
          <div className="absolute inset-0 backdrop-blur-[6px] sm:backdrop-blur-[10px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%)]" />

          {/* Golden Ambient Aura Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] sm:w-[800px] h-24 sm:h-32 bg-gradient-to-t from-[#d4af37]/15 via-[#e8b86d]/08 to-transparent rounded-full blur-3xl opacity-80" />

          {/* Background Secondary Cloud Mist Silhouette */}
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full opacity-45 dark:opacity-35"
          >
            <path
              d="M0 80C140 40 280 110 420 85C560 60 700 130 840 90C980 50 1120 120 1260 85C1350 60 1410 75 1440 80V180H0V80Z"
              className="fill-[#ede7dc] dark:fill-[#1a1411]"
            />
          </svg>

          {/* Primary Front Undulating Cloud Mist Bank */}
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full drop-shadow-[0_-8px_16px_rgba(212,175,55,0.06)]"
          >
            <path
              d="M0 110C90 75 220 135 340 105C480 70 590 140 730 115C870 90 990 145 1130 110C1240 80 1360 125 1440 115V180H0V110Z"
              className="fill-[#f8f6f0] dark:fill-[#0c0a09]"
            />
          </svg>
        </div>
      )}

      {/* -------------------------------------------------------------
          VARIANT 2: BLUR (Camera Bokeh & Progressive Frosted Dissolve)
          ------------------------------------------------------------- */}
      {variant === "blur" && (
        <div className={`relative w-full h-20 sm:h-28 lg:h-32 flex items-center justify-center ${flipClass}`}>
          {/* Stepped Progressive Backdrop Filter Blur */}
          <div className="absolute inset-0 backdrop-blur-md sm:backdrop-blur-xl [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_50%,black_100%)]" />

          {/* Ambient Diffuse Fog Horizon */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#f8f6f0] via-[#f8f6f0]/80 to-transparent dark:from-[#0a0807] dark:via-[#0a0807]/80" />

          {/* Central Luminous Mist Pool */}
          <div className="absolute w-[600px] h-20 bg-[#d4af37]/10 dark:bg-[#d4af37]/08 rounded-full blur-2xl" />

          {/* Soft Hairline Divider Accent */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />
        </div>
      )}

      {/* -------------------------------------------------------------
          VARIANT 3: ZEN-WAVE (Minimalist Japanese Sand Dune & Water Mist)
          ------------------------------------------------------------- */}
      {variant === "zen-wave" && (
        <div className={`relative w-full h-20 sm:h-28 lg:h-36 ${flipClass}`}>
          {/* Ambient Lighting Pool */}
          <div className="absolute right-1/4 bottom-0 w-[450px] h-24 bg-[#d4af37]/10 rounded-full blur-3xl opacity-75" />

          {/* Deep Silhouette Wave */}
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full opacity-40 dark:opacity-30"
          >
            <path
              d="M0 60C240 120 480 30 720 90C960 150 1200 40 1440 80V160H0V60Z"
              className="fill-[#e8dfcf] dark:fill-[#1c1613]"
            />
          </svg>

          {/* Main Crest Wave with Subtle Golden Rim */}
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path
              d="M0 90C280 40 560 130 840 75C1120 20 1320 110 1440 85V160H0V90Z"
              className="fill-[#f8f6f0] dark:fill-[#0c0a09]"
            />
            {/* Delicate Champagne Gold Line tracing the wave crest */}
            <path
              d="M0 90C280 40 560 130 840 75C1120 20 1320 110 1440 85"
              stroke="url(#zen-gold-gradient)"
              strokeWidth="1.2"
              fill="none"
              opacity="0.45"
            />
            <defs>
              <linearGradient id="zen-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                <stop offset="50%" stopColor="#d4af37" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* -------------------------------------------------------------
          VARIANT 4: LUMINOUS-FOG (Sunbeam / Moonlit Golden Ambient Mist)
          ------------------------------------------------------------- */}
      {variant === "luminous-fog" && (
        <div className={`relative w-full h-20 sm:h-28 lg:h-36 ${flipClass}`}>
          {/* Radial Light Leak Burst (Sunbeam / Moonbeam) */}
          <div className="absolute left-1/3 bottom-0 w-[600px] h-32 bg-gradient-to-t from-[#ebd3a8]/25 via-[#d4af37]/15 to-transparent rounded-full blur-3xl opacity-90" />
          <div className="absolute right-1/4 bottom-0 w-[450px] h-28 bg-[#38bdf8]/05 dark:bg-[#38bdf8]/10 rounded-full blur-2xl" />

          {/* Stepped Atmospheric Wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f6f0] via-[#f8f6f0]/70 to-transparent dark:from-[#0c0a09] dark:via-[#0c0a09]/75 backdrop-blur-[8px]" />

          {/* Billowing Cloud Arch */}
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
          >
            <path
              d="M0 120C180 80 340 150 520 110C700 70 880 140 1060 100C1220 70 1350 130 1440 110V180H0V120Z"
              className="fill-[#f8f6f0] dark:fill-[#0c0a09]"
            />
          </svg>
        </div>
      )}

      {/* -------------------------------------------------------------
          VARIANT 5: FROSTED-HAZE (Clinical Apothecary Crystal Mist)
          ------------------------------------------------------------- */}
      {variant === "frosted-haze" && (
        <div className={`relative w-full h-18 sm:h-24 lg:h-30 ${flipClass}`}>
          {/* Frosted Glass Layer */}
          <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-transparent via-[#f8f6f0]/60 to-[#f8f6f0] dark:via-[#0c0a09]/60 dark:to-[#0c0a09]" />

          {/* Ambient Warm Underglow */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#d4af37]/10 via-[#d4af37]/03 to-transparent" />

          {/* Fine Shimmering Hairline */}
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
        </div>
      )}

      {/* -------------------------------------------------------------
          VARIANT 6: SMOKE-VEIL (Smoky Obsidian & Haute-Couture Silk Drape)
          ------------------------------------------------------------- */}
      {variant === "smoke-veil" && (
        <div className={`relative w-full h-20 sm:h-28 lg:h-36 ${flipClass}`}>
          {/* Subtle Ambient Depth */}
          <div className="absolute left-1/4 bottom-0 w-[550px] h-28 bg-[#8c600a]/10 dark:bg-[#d4af37]/08 rounded-full blur-3xl" />

          {/* Layer 1: Ethereal Vapor Ribbon */}
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full opacity-35 dark:opacity-25"
          >
            <path
              d="M0 70C320 140 640 40 960 110C1200 160 1380 60 1440 75V160H0V70Z"
              className="fill-[#e3d7c3] dark:fill-[#1e1713]"
            />
          </svg>

          {/* Layer 2: Main Veil Silhouette */}
          <svg
            viewBox="0 0 1440 160"
            fill="none"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full drop-shadow-[0_-6px_12px_rgba(0,0,0,0.04)]"
          >
            <path
              d="M0 100C300 50 600 130 900 80C1180 30 1340 110 1440 95V160H0V100Z"
              className="fill-[#f8f6f0] dark:fill-[#0c0a09]"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

