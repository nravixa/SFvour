"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motionValue, attrEffect, svgEffect, animate } from "motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { InstagramIcon } from "./Icons";
import { CLINIC_INFO, SERVICES, buildWhatsAppLink } from "@/data/clinicData";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterSubmitted(true);
  };

  // Motion attrEffect & svgEffect: drives concentric river ripples and infinite path-draw streams
  useEffect(() => {
    // 1. Concentric River Ripples with attrEffect
    const rx1 = motionValue(16);
    const ry1 = motionValue(7);
    const rx2 = motionValue(24);
    const ry2 = motionValue(10);

    const cancel1 = attrEffect("#porcelain-ripple-1", { rx: rx1, ry: ry1 });
    const cancel2 = attrEffect("#porcelain-ripple-2", { rx: rx2, ry: ry2 });

    const animRx1 = animate(rx1, [14, 30, 14], { duration: 3.5, repeat: Infinity, ease: "easeInOut" });
    const animRy1 = animate(ry1, [6, 13, 6], { duration: 3.5, repeat: Infinity, ease: "easeInOut" });

    const animRx2 = animate(rx2, [22, 38, 22], { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 });
    const animRy2 = animate(ry2, [9, 16, 9], { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 });

    // 2. Infinite Looping Path Drawing with svgEffect (pathLength & pathOffset)
    const crestLength = motionValue(0.35);
    const crestOffset = motionValue(0);
    const cancelCrest = svgEffect("#footer-brand-crest-ring", {
      pathLength: crestLength,
      pathOffset: crestOffset,
    });
    const animCrest = animate(crestOffset, [0, 1], { duration: 5, repeat: Infinity, ease: "linear" });

    const streamLength = motionValue(0.4);
    const streamOffset = motionValue(0);
    const cancelStream = svgEffect("#porcelain-stream-current", {
      pathLength: streamLength,
      pathOffset: streamOffset,
    });
    const animStream = animate(streamOffset, [0, 1], { duration: 7, repeat: Infinity, ease: "linear" });

    return () => {
      cancel1();
      cancel2();
      cancelCrest();
      cancelStream();
      animRx1.stop();
      animRy1.stop();
      animRx2.stop();
      animRy2.stop();
      animCrest.stop();
      animStream.stop();
    };
  }, []);

  return (
    <footer className="relative bg-[#f8f6f0] dark:bg-[#0d0a09] text-[#14100e] dark:text-[#f5f2eb] overflow-hidden transition-colors duration-500">
      {/* -----------------------------------------------------------------
          Top Tier: Prestigious Brand Grid & VIP Concierge
          (Modeled after luxury heritage apothecary & Pegasus Clinic Tokyo)
          ----------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Col 1: Brand & Contact Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* SVG Brand Crest Ring animated with Motion svgEffect */}
                <svg className="absolute -inset-1 w-12 h-12 pointer-events-none" viewBox="0 0 48 48">
                  <circle
                    id="footer-brand-crest-ring"
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1.6"
                    opacity="0.85"
                  />
                </svg>

                <div className="footer-brand-medallion w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg font-bold shadow-md select-none shrink-0 border border-[#d4af37]/45">
                  <span className="footer-brand-monogram tracking-wider font-extrabold">SF</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#14100e] dark:text-white font-serif">
                  S FVOUR
                </h3>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#704808] dark:text-[#d4af37] font-semibold">
                  Aesthetic Skin Hub • Group By M Scissors
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4a3f35] dark:text-[#baa995] leading-relaxed max-w-sm">
              Baramati&apos;s benchmark medical aesthetics and cosmetology center. Where doctor-guided dermatology, US-FDA laser physics, and 5-star Japanese-inspired clinic serenity converge.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#3d3227] dark:text-[#cfc3b0]">
              <a
                href={`tel:${CLINIC_INFO.phoneDigits}`}
                className="flex items-center gap-2.5 hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37] shrink-0" />
                <span>+91 7378603232 • Concierge Desk</span>
              </a>

              <a
                href="mailto:contact@sfvour.com"
                className="flex items-center gap-2.5 hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37] shrink-0" />
                <span>concierge@sfvour.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Shop 003, 2nd Fl, Subhadra Mall, Baramati MIDC, Pune 413133
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Treatments (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#14100e] dark:text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-[#52473c] dark:text-[#9d9284]">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#services"
                    className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors inline-block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: About Clinic (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#14100e] dark:text-white">
              The Clinic
            </h4>
            <ul className="space-y-2 text-xs text-[#52473c] dark:text-[#9d9284]">
              <li>
                <Link
                  href="/#doctors"
                  className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors font-bold text-[#8c600a] dark:text-[#d4af37]"
                >
                  Consulting Doctors ↗
                </Link>
              </li>
              <li>
                <Link href="/#pillars" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Four Founding Pillars
                </Link>
              </li>
              <li>
                <Link href="/#ambience" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Five-Star Ambience
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Clinical Skincare
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Verified Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Patient Care & Hours (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#14100e] dark:text-white">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs text-[#52473c] dark:text-[#9d9284]">
              <li>
                <Link href="/faqs" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  FAQs & Pre-Care Guide
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Online Booking Form
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-[#8c600a] dark:hover:text-[#f3db9d] transition-colors">
                  Clinic Location & Parking
                </Link>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25d366] hover:underline font-semibold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & VIP Privileges (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#14100e] dark:text-white">
              Newsletter
            </h4>
            <p className="text-xs text-[#4a3f35] dark:text-[#baa995] leading-relaxed">
              Subscribe to get exclusive seasonal dermatological updates, clinic journals, and private doctor sessions.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-xs text-[#25d366] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="font-semibold">Welcome to S Fvour VIP!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-1.5 pt-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address for VIP newsletter"
                  className="w-full px-3.5 py-2.5 rounded-l-xl bg-white dark:bg-white/[0.05] border border-black/15 dark:border-white/15 text-xs text-[#14100e] dark:text-white placeholder-[#8e8272] focus:outline-none focus:border-[#8c600a] dark:focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to VIP Concierge"
                  className="px-4 py-2.5 rounded-r-xl bg-[#2c3e66] hover:bg-[#1f2d4d] dark:bg-[#d4af37] dark:hover:bg-[#aa8021] text-white dark:text-black transition-colors shrink-0 cursor-pointer shadow-sm"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------
          Bottom Tier: Panoramic Natural Chinoiserie & Delft Porcelain Landscape
          (Faithfully recreating the hand-drawn organic landscape from the reference
          with layered hills, weeping willow, pine trees, pagoda, boatman & wildlife)
          ----------------------------------------------------------------- */}
      <div className="relative w-full overflow-hidden pt-4 pb-0 select-none pointer-events-none">
        <div className="relative w-full max-w-[1540px] mx-auto h-[240px] sm:h-[300px] lg:h-[360px]">
          {/* Subtle Cinematic Vignette Fades on Canvas Edges */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#f8f6f0] dark:from-[#0a0807] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#f8f6f0] dark:from-[#0a0807] to-transparent z-10 pointer-events-none" />

          {/* Natural Ink Engraving SVG Landscape */}
          <svg
            viewBox="0 0 1440 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover object-bottom opacity-95 dark:opacity-85 transition-opacity duration-700"
          >
            {/* 1. Distant Layered Mountains with Sacred Summit, Ink Ridges & Drifting Fog */}
            <g id="misty-mountains" opacity="0.8">
              {/* Majestic Distant Sacred Mountain Peak (Towering behind the valley) */}
              <path
                d="M 220 280 C 330 180, 430 35, 500 35 C 570 35, 670 180, 780 270 Z"
                fill="url(#mountainGradHigh)"
              />
              {/* Sacred Mountain White Snowcap Crest */}
              <path
                d="M 470 68 C 485 48, 500 35, 500 35 C 500 35, 515 48, 530 68 Q 515 63 500 66 Q 485 63 470 68 Z"
                fill="#ffffff"
                opacity="0.85"
              />
              {/* Sacred Mountain Ink Ridge Line Shading */}
              <path
                d="M 500 35 C 490 100, 475 180, 440 270"
                stroke="#2c3e66"
                strokeWidth="1.4"
                opacity="0.45"
                strokeDasharray="4 6"
              />
              <path
                d="M 500 35 C 515 110, 545 190, 590 265"
                stroke="#2c3e66"
                strokeWidth="1.2"
                opacity="0.4"
                strokeDasharray="3 5"
              />
              <path
                d="M 500 35 C 503 120, 510 200, 515 270"
                stroke="#1f2d4d"
                strokeWidth="0.8"
                opacity="0.3"
                strokeDasharray="2 4"
              />

              {/* Mountain Range 1 (Far background horizon peaks) */}
              <path
                d="M 0 240 C 90 190, 160 160, 240 205 C 310 245, 390 210, 480 175 C 560 145, 620 170, 710 200 C 800 230, 890 180, 990 165 C 1070 150, 1140 185, 1220 215 C 1300 245, 1370 200, 1440 230 L 1440 360 L 0 360 Z"
                fill="url(#mountainGradFar)"
              />
              {/* Mountain Range 2 (Mid background rolling peaks) */}
              <path
                d="M 100 250 C 200 185, 270 180, 340 220 C 420 260, 500 195, 570 185 C 660 170, 720 215, 800 230 C 890 250, 970 200, 1060 190 C 1150 180, 1230 210, 1320 240 C 1370 255, 1410 240, 1440 250 L 1440 360 L 100 360 Z"
                fill="url(#mountainGradMid)"
                opacity="0.75"
              />
              {/* Cinematic Drifting Mountain Valley Mist */}
              <path
                d="M -100 220 C 150 200, 380 230, 620 210 C 880 190, 1150 220, 1400 205 L 1400 240 C 1150 250, 880 230, 620 240 C 380 255, 150 235, -100 250 Z"
                fill="url(#mistRibbonGrad)"
                className="animate-cinema-mist"
              />
            </g>

            {/* -------------------------------------------------------------
                CELESTIAL SUN & MOON (Directly in Landscape SVG coordinate space)
                Sun in Bright Mode (Light Theme) | Moon in Dark Mode (Dark Theme)
                ------------------------------------------------------------- */}
            {/* 1. Radiant Golden Sunrise Sun (Bright Mode Only) */}
            <g id="celestial-sun" className="block dark:hidden" transform="translate(560, 45)">
              {/* Radiant Sun Corona Breathing Aura */}
              <circle cx="40" cy="40" r="48" fill="url(#sunOuterCoronaGrad)" className="animate-sun-corona" />
              <circle cx="40" cy="40" r="36" fill="url(#sunInnerCoronaGrad)" />
              <circle cx="40" cy="40" r="28" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.75" />
              {/* Core Solar Golden Orb */}
              <circle cx="40" cy="40" r="24" fill="url(#sunCoreGrad)" />
              {/* Sunbeam Highlight */}
              <circle cx="34" cy="34" r="8" fill="#ffffff" opacity="0.45" />
            </g>

            {/* 2. Ethereal Silver & Sapphire Luminous Moon (Dark Mode Only) */}
            <g id="celestial-moon" className="hidden dark:block" transform="translate(560, 45)">
              {/* Sapphire Moonlight Glow Aura */}
              <circle cx="40" cy="40" r="52" fill="url(#moonSapphireGlow)" className="animate-moon-halo" />
              <circle cx="40" cy="40" r="35" fill="url(#moonAuraGrad)" />
              {/* Luminous Silver Lunar Orb */}
              <circle cx="40" cy="40" r="24" fill="url(#moonCoreGrad)" />
              {/* Lunar Maria Craters */}
              <circle cx="34" cy="34" r="4.2" fill="#64748b" opacity="0.35" />
              <circle cx="46" cy="38" r="5" fill="#64748b" opacity="0.3" />
              <circle cx="38" cy="48" r="4" fill="#64748b" opacity="0.25" />
              {/* Sapphire Moon Halo Ring */}
              <circle cx="40" cy="40" r="27" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.75" />
            </g>

            {/* 2. Serene Winding River (Sweeping S-curve from background down to foreground) */}
            <g id="river-channel">
              {/* Main River Stream */}
              <path
                d="M 440 360 C 490 295, 540 250, 640 240 C 720 230, 790 255, 750 285 C 700 320, 580 335, 440 360 Z"
                fill="url(#porcelainRiverGrad)"
              />
              {/* River bank shoreline contours with animated flowing ripple lines */}
              <path
                id="porcelain-stream-current"
                d="M 450 345 C 520 315, 610 295, 680 270 C 730 250, 780 250, 740 280"
                stroke="#c5a059"
                strokeWidth="1.6"
                fill="none"
                opacity="0.85"
                className="animate-stream-flow"
              />
              <path
                d="M 450 345 C 520 315, 610 295, 680 270 C 730 250, 780 250, 740 280"
                stroke="#2c3e66"
                strokeWidth="0.8"
                strokeDasharray="4 6"
                opacity="0.35"
                className="animate-stream-flow"
              />
              <path
                d="M 480 330 C 550 300, 630 280, 690 260"
                stroke="#2c3e66"
                strokeWidth="0.7"
                strokeDasharray="3 5"
                opacity="0.3"
                className="animate-stream-flow-fast"
              />
              <path
                d="M 520 315 C 580 290, 650 275, 710 255"
                stroke="#2c3e66"
                strokeWidth="0.6"
                strokeDasharray="2 4"
                opacity="0.25"
                className="animate-stream-flow"
              />
              {/* Organic pebbles and sand ripples on river edge */}
              <ellipse cx="490" cy="342" rx="4" ry="1.5" fill="#2c3e66" opacity="0.3" />
              <ellipse cx="515" cy="336" rx="6" ry="2" fill="#2c3e66" opacity="0.25" />
              <ellipse cx="540" cy="328" rx="5" ry="1.8" fill="#2c3e66" opacity="0.3" />
              <ellipse cx="735" cy="285" rx="7" ry="2.2" fill="#2c3e66" opacity="0.25" />
            </g>

            {/* 3. Left Riverbank: Lush Botanical Pine & Willow Grove + Walking Traveler + Moon Gate */}
            <g id="left-riverbank">
              {/* Ground mound contours */}
              <path
                d="M 0 310 C 100 290, 220 280, 360 305 C 430 320, 480 345, 520 360 L 0 360 Z"
                fill="#f1ede5"
                stroke="#2c3e66"
                strokeWidth="1.2"
                opacity="0.85"
              />

              {/* Natural Pine & Willow Trees (Securely rooted on left riverbank) */}
              <g transform="translate(140, 130)">
                <g className="animate-cinema-tree-sway">
                  {/* Gnarled Pine Trunk 1 */}
                  <path
                    d="M 120 190 C 115 150, 135 110, 110 80 C 100 70, 95 60, 90 40"
                    stroke="#1f2d4d"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 118 115 C 135 95, 160 85, 180 80"
                    stroke="#1f2d4d"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 108 85 C 85 75, 60 70, 45 75"
                    stroke="#1f2d4d"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Layered Pine Needle Foliage Clouds */}
                  <ellipse cx="90" cy="35" rx="38" ry="18" fill="#2c3e66" opacity="0.85" />
                  <ellipse cx="85" cy="30" rx="30" ry="14" fill="#3a5080" opacity="0.9" />
                  <ellipse cx="95" cy="25" rx="22" ry="11" fill="#4d699e" opacity="0.8" />
                  <ellipse cx="185" cy="75" rx="35" ry="17" fill="#2c3e66" opacity="0.8" />
                  <ellipse cx="180" cy="70" rx="26" ry="13" fill="#3a5080" opacity="0.85" />
                  <ellipse cx="40" cy="72" rx="34" ry="16" fill="#2c3e66" opacity="0.8" />
                  <ellipse cx="45" cy="68" rx="25" ry="12" fill="#3a5080" opacity="0.85" />
                  <ellipse cx="130" cy="88" rx="30" ry="14" fill="#2c3e66" opacity="0.75" />
                  <ellipse cx="140" cy="115" rx="26" ry="13" fill="#3a5080" opacity="0.7" />

                  {/* Second background willow tree */}
                  <path
                    d="M 60 195 C 65 160, 50 130, 40 110"
                    stroke="#1f2d4d"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <ellipse cx="35" cy="105" rx="32" ry="16" fill="#3a5080" opacity="0.7" />
                  <ellipse cx="25" cy="118" rx="25" ry="13" fill="#4d699e" opacity="0.65" />
                </g>
              </g>

              {/* Classical Garden Moon Gate on stone garden terrace */}
              <g transform="translate(195, 230)">
                <rect x="0" y="30" width="85" height="65" rx="4" fill="#ffffff" stroke="#2c3e66" strokeWidth="1.8" />
                <circle cx="42" cy="62" r="24" fill="#e8edf5" stroke="#2c3e66" strokeWidth="1.6" />
                <path d="M -4 30 Q 42 22 90 30 L 92 35 Q 42 27 -6 35 Z" fill="#1f2d4d" />
                <line x1="8" y1="45" x2="22" y2="45" stroke="#2c3e66" strokeWidth="0.8" opacity="0.5" />
                <line x1="62" y1="45" x2="76" y2="45" stroke="#2c3e66" strokeWidth="0.8" opacity="0.5" />
                <line x1="12" y1="78" x2="24" y2="78" stroke="#2c3e66" strokeWidth="0.8" opacity="0.5" />
                <line x1="60" y1="78" x2="72" y2="78" stroke="#2c3e66" strokeWidth="0.8" opacity="0.5" />
              </g>

              {/* Ming / Delft Blue Porcelain Ceramic Vase on Pedestal */}
              <g transform="translate(65, 225) scale(0.9)">
                <rect x="20" y="105" width="60" height="18" rx="3" fill="#d9e1ee" stroke="#2c3e66" strokeWidth="1.5" />
                <rect x="25" y="118" width="50" height="8" rx="2" fill="#2c3e66" opacity="0.3" />
                <path
                  d="M 28 105 C 16 75, 12 45, 26 22 C 34 8, 66 8, 74 22 C 88 45, 84 75, 72 105 Z"
                  fill="#ffffff"
                  stroke="#1f2d4d"
                  strokeWidth="2.2"
                />
                <ellipse cx="50" cy="58" rx="18" ry="20" fill="none" stroke="#2c3e66" strokeWidth="1.5" />
                <circle cx="50" cy="58" r="8" fill="#2c3e66" opacity="0.8" />
                <circle cx="50" cy="58" r="4" fill="#ffffff" />
                <path d="M 50 38 Q 58 48 50 58 Q 42 48 50 38 Z" fill="#2c3e66" opacity="0.65" />
                <path d="M 50 78 Q 58 68 50 58 Q 42 68 50 78 Z" fill="#2c3e66" opacity="0.65" />
                <path d="M 32 58 Q 42 66 50 58 Q 42 50 32 58 Z" fill="#2c3e66" opacity="0.65" />
                <path d="M 68 58 Q 58 66 50 58 Q 58 50 68 58 Z" fill="#2c3e66" opacity="0.65" />
                <rect x="34" y="10" width="32" height="14" rx="2" fill="#ffffff" stroke="#1f2d4d" strokeWidth="1.8" />
                <ellipse cx="50" cy="10" rx="18" ry="4" fill="#d9e1ee" stroke="#1f2d4d" strokeWidth="1.8" />
              </g>

              {/* Walking traveller figure safely grounded on the riverbank garden path */}
              <g transform="translate(360, 310) scale(0.95)">
                <g className="animate-cinema-traveler">
                  {/* Conical straw hat */}
                  <polygon points="12,0 3,10 21,10" fill="#c5a059" stroke="#1f2d4d" strokeWidth="0.8" />
                  {/* Head & Body in Indigo robe */}
                  <circle cx="12" cy="12" r="3" fill="#1f2d4d" />
                  <path d="M 8 15 L 16 15 L 18 34 L 6 34 Z" fill="#2c3e66" />
                  {/* Walking legs */}
                  <line x1="9" y1="34" x2="6" y2="44" stroke="#1f2d4d" strokeWidth="2" strokeLinecap="round" />
                  <line x1="15" y1="34" x2="18" y2="44" stroke="#1f2d4d" strokeWidth="2" strokeLinecap="round" />
                  {/* Walking staff pole with rhythmic tapping animation */}
                  <g className="animate-cinema-staff">
                    <line x1="2" y1="8" x2="22" y2="44" stroke="#8c600a" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </g>
              </g>
            </g>

            {/* 4. Center-Right: Authentic Oriental Hexagonal Tea Pagoda Pavilion on Stone Base */}
            <g id="center-pagoda-terrace" transform="translate(700, 160)">
              {/* Stone Platform Base */}
              <polygon
                points="15,125 155,125 168,144 2,144"
                fill="#d9e1ee"
                stroke="#1f2d4d"
                strokeWidth="1.8"
              />
              <line x1="15" y1="134" x2="155" y2="134" stroke="#2c3e66" strokeWidth="0.8" opacity="0.6" />

              {/* Lower Balustrade / Railing */}
              <rect x="25" y="105" width="120" height="20" fill="#f8f6f0" stroke="#1f2d4d" strokeWidth="1.4" />
              <line x1="45" y1="105" x2="45" y2="125" stroke="#1f2d4d" strokeWidth="1.2" />
              <line x1="65" y1="105" x2="65" y2="125" stroke="#1f2d4d" strokeWidth="1.2" />
              <line x1="85" y1="105" x2="85" y2="125" stroke="#1f2d4d" strokeWidth="1.2" />
              <line x1="105" y1="105" x2="105" y2="125" stroke="#1f2d4d" strokeWidth="1.2" />
              <line x1="125" y1="105" x2="125" y2="125" stroke="#1f2d4d" strokeWidth="1.2" />

              {/* Main Supporting Lacquer Pillars */}
              <line x1="32" y1="58" x2="32" y2="105" stroke="#1f2d4d" strokeWidth="3.5" />
              <line x1="68" y1="58" x2="68" y2="105" stroke="#2c3e66" strokeWidth="2.8" />
              <line x1="102" y1="58" x2="102" y2="105" stroke="#2c3e66" strokeWidth="2.8" />
              <line x1="138" y1="58" x2="138" y2="105" stroke="#1f2d4d" strokeWidth="3.5" />

              {/* Flared Pagoda Roof with Sweeping Eaves and Ridged Tiling */}
              <path
                d="M 10 58 Q 85 24 160 58 Q 85 45 10 58 Z"
                fill="#1f2d4d"
                stroke="#1f2d4d"
                strokeWidth="1.5"
              />
              <path
                d="M 18 52 Q 85 28 152 52 L 160 58 Q 85 40 10 58 Z"
                fill="#2c3e66"
              />
              {/* Roof Finial Spire */}
              <path d="M 82 28 L 85 10 L 88 28 Z" fill="#1f2d4d" />
              <circle cx="85" cy="10" r="3" fill="#c5a059" />

              {/* Swaying Golden Paper Lantern Hanging under Pagoda Eave */}
              <g transform="translate(36, 58)">
                <g className="animate-cinema-lantern">
                  <line x1="0" y1="0" x2="0" y2="10" stroke="#8c600a" strokeWidth="1" />
                  <ellipse cx="0" cy="16" rx="5.5" ry="7" fill="#f3db9d" stroke="#b8860b" strokeWidth="1" />
                  <ellipse cx="0" cy="16" rx="3" ry="6.5" fill="#d4af37" opacity="0.6" />
                  <line x1="-3.5" y1="23" x2="3.5" y2="23" stroke="#8c600a" strokeWidth="0.8" />
                  <line x1="0" y1="23" x2="0" y2="28" stroke="#aa8021" strokeWidth="1.2" />
                </g>
              </g>

              {/* Scholar Figure Standing at Pagoda Balustrade */}
              <g transform="translate(112, 78)">
                <circle cx="6" cy="6" r="3" fill="#1f2d4d" />
                <path d="M 2 9 L 10 9 L 11 27 L 1 27 Z" fill="#3a5080" />
              </g>

              {/* Delicate Curling Tea Steam / Incense Wafting into Sky */}
              <g transform="translate(102, 74)">
                <circle cx="0" cy="0" r="2" fill="#d4af37" className="animate-cinema-smoke" />
                <circle cx="2" cy="-4" r="2.5" fill="#f3db9d" className="animate-cinema-smoke-delayed" />
              </g>

              {/* Delicate Bamboo Behind Pagoda */}
              <g transform="translate(145, 10)">
                <path d="M 10 120 C 15 90, 5 60, 20 30" stroke="#1f2d4d" strokeWidth="2.5" />
                <ellipse cx="25" cy="25" rx="20" ry="10" fill="#2c3e66" opacity="0.75" />
                <ellipse cx="20" cy="40" rx="18" ry="9" fill="#3a5080" opacity="0.7" />
              </g>
            </g>

            {/* 5. Authentic Japanese Weeping Cherry Blossom (Sakura) Tree on Riverbank
                - Trunk & branches are pure natural ink line art (Wood has NO color)
                - ONLY the blossoms have color! (Sakura Rose Pink in bright mode; Bioluminescent Sparkle Blue in dark mode) */}
            <g id="sakura-cherry-tree" transform="translate(830, 130)">
              <g className="animate-sakura-tree">
                {/* Natural Gnarled Calligraphy Trunk & Branches in Ink Wood (NO FILL, NO COLOR) */}
                <path
                  d="M 45 190 C 48 140, 25 100, 55 65 C 72 45, 102 38, 130 30"
                  stroke="#1f2d4d"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 50 115 C 28 95, -2 90, -25 85"
                  stroke="#1f2d4d"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 85 52 C 108 32, 148 26, 185 24"
                  stroke="#1f2d4d"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 130 30 C 158 20, 198 16, 230 20"
                  stroke="#1f2d4d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 55 65 C 45 38, 40 12, 50 -8"
                  stroke="#1f2d4d"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M -10 88 C -22 105, -35 125, -42 145"
                  stroke="#1f2d4d"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 155 25 C 172 45, 185 75, 192 105"
                  stroke="#1f2d4d"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Weeping Tendril Branches */}
                <path
                  d="M -25 85 C -45 100, -60 125, -65 155"
                  stroke="#1f2d4d"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 100 45 C 115 70, 125 100, 128 135"
                  stroke="#1f2d4d"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 210 20 C 235 45, 245 75, 248 115"
                  stroke="#1f2d4d"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* ONLY THE FLOWER BLOSSOMS HAVE COLOR!
                    In Bright Mode: vibrant Sakura rose pink & soft blush.
                    In Dark Mode: bioluminescent sparkle blue with radiant glow! */}
                <g className="sakura-flower-glow">
                  {/* Cluster 1: Crown Canopy */}
                  <circle cx="50" cy="-12" r="8" className="sakura-petal-color" />
                  <circle cx="64" cy="-8" r="6.5" className="sakura-petal-soft" />
                  <circle cx="40" cy="-5" r="6.5" className="sakura-petal-light" />
                  <circle cx="54" cy="-20" r="5.5" className="sakura-petal-soft" />
                  <circle cx="50" cy="-12" r="2.2" className="sakura-stamen" />

                  {/* Cluster 2: Left Arched Bough */}
                  <circle cx="-25" cy="82" r="8.5" className="sakura-petal-color" />
                  <circle cx="-14" cy="74" r="7.5" className="sakura-petal-soft" />
                  <circle cx="-36" cy="86" r="6.5" className="sakura-petal-light" />
                  <circle cx="-25" cy="82" r="2.4" className="sakura-stamen" />

                  {/* Weeping Left Droplets & Cascades */}
                  <circle cx="-42" cy="115" r="5.5" className="sakura-petal-color" />
                  <circle cx="-50" cy="138" r="5" className="sakura-petal-soft" />
                  <circle cx="-62" cy="155" r="4.5" className="sakura-petal-light" />
                  <circle cx="-38" cy="142" r="4.5" className="sakura-petal-color" />

                  {/* Cluster 3: Center Mid-Arch over River */}
                  <circle cx="85" cy="48" r="9.5" className="sakura-petal-color" />
                  <circle cx="100" cy="38" r="8" className="sakura-petal-soft" />
                  <circle cx="74" cy="58" r="7.5" className="sakura-petal-light" />
                  <circle cx="94" cy="60" r="6" className="sakura-petal-soft" />
                  <circle cx="85" cy="48" r="2.6" className="sakura-stamen" />

                  {/* Weeping Mid River Droplets */}
                  <circle cx="118" cy="75" r="5.5" className="sakura-petal-color" />
                  <circle cx="124" cy="102" r="5" className="sakura-petal-soft" />
                  <circle cx="128" cy="132" r="4.5" className="sakura-petal-light" />

                  {/* Cluster 4: High Sweeping Bough */}
                  <circle cx="135" cy="25" r="9" className="sakura-petal-color" />
                  <circle cx="152" cy="18" r="7.5" className="sakura-petal-soft" />
                  <circle cx="118" cy="32" r="7" className="sakura-petal-light" />
                  <circle cx="135" cy="25" r="2.4" className="sakura-stamen" />

                  {/* Cluster 5: Outer River Reaching Branch */}
                  <circle cx="185" cy="22" r="8.5" className="sakura-petal-color" />
                  <circle cx="205" cy="18" r="8" className="sakura-petal-soft" />
                  <circle cx="228" cy="18" r="7" className="sakura-petal-color" />
                  <circle cx="195" cy="34" r="6.5" className="sakura-petal-light" />
                  <circle cx="205" cy="18" r="2.4" className="sakura-stamen" />

                  {/* Weeping Right River Tendrils */}
                  <circle cx="230" cy="45" r="5.5" className="sakura-petal-color" />
                  <circle cx="240" cy="75" r="5" className="sakura-petal-soft" />
                  <circle cx="246" cy="110" r="4.5" className="sakura-petal-light" />

                  {/* 5-Petaled Open Cherry Blossom Rosettes */}
                  <g transform="translate(60, 18) scale(0.75)">
                    <circle cx="-5" cy="0" r="4.5" className="sakura-petal-color" />
                    <circle cx="5" cy="0" r="4.5" className="sakura-petal-color" />
                    <circle cx="0" cy="-5" r="4.5" className="sakura-petal-color" />
                    <circle cx="-3" cy="5" r="4.5" className="sakura-petal-color" />
                    <circle cx="3" cy="5" r="4.5" className="sakura-petal-color" />
                    <circle cx="0" cy="0" r="2.2" className="sakura-stamen" />
                  </g>
                  <g transform="translate(160, 12) scale(0.7)">
                    <circle cx="-5" cy="0" r="4.5" className="sakura-petal-soft" />
                    <circle cx="5" cy="0" r="4.5" className="sakura-petal-soft" />
                    <circle cx="0" cy="-5" r="4.5" className="sakura-petal-soft" />
                    <circle cx="-3" cy="5" r="4.5" className="sakura-petal-soft" />
                    <circle cx="3" cy="5" r="4.5" className="sakura-petal-soft" />
                    <circle cx="0" cy="0" r="2.2" className="sakura-stamen" />
                  </g>
                  <g transform="translate(-18, 55) scale(0.65)">
                    <circle cx="-5" cy="0" r="4.5" className="sakura-petal-color" />
                    <circle cx="5" cy="0" r="4.5" className="sakura-petal-color" />
                    <circle cx="0" cy="-5" r="4.5" className="sakura-petal-color" />
                    <circle cx="-3" cy="5" r="4.5" className="sakura-petal-color" />
                    <circle cx="3" cy="5" r="4.5" className="sakura-petal-color" />
                    <circle cx="0" cy="0" r="2.2" className="sakura-stamen" />
                  </g>
                </g>
              </g>
            </g>

            {/* 6. Right Riverbank: Courtyard House, Ming Urn, Stone Lantern & Bamboo Grove */}
            <g id="right-courtyard-estate">
              {/* Ground mound right */}
              <path
                d="M 900 360 C 970 320, 1070 290, 1200 300 C 1310 310, 1380 330, 1440 340 L 1440 360 Z"
                fill="#f1ede5"
                stroke="#2c3e66"
                strokeWidth="1.2"
                opacity="0.85"
              />

              {/* Giant Ornamental Ming Vase near river edge */}
              <g transform="translate(970, 225) scale(0.85)">
                <rect x="22" y="105" width="56" height="16" rx="3" fill="#d9e1ee" stroke="#2c3e66" strokeWidth="1.5" />
                <path
                  d="M 28 105 C 16 75, 12 45, 26 22 C 34 8, 66 8, 74 22 C 88 45, 84 75, 72 105 Z"
                  fill="#ffffff"
                  stroke="#1f2d4d"
                  strokeWidth="2.2"
                />
                <circle cx="50" cy="58" r="14" stroke="#2c3e66" strokeWidth="1.5" fill="none" opacity="0.8" />
                <circle cx="50" cy="58" r="6" fill="#2c3e66" opacity="0.7" />
                <path d="M 38 28 Q 50 36 62 28" stroke="#2c3e66" strokeWidth="1.5" fill="none" />
                <path d="M 36 88 Q 50 96 64 88" stroke="#2c3e66" strokeWidth="1.5" fill="none" />
                <rect x="34" y="10" width="32" height="14" rx="2" fill="#ffffff" stroke="#1f2d4d" strokeWidth="1.8" />
                <ellipse cx="50" cy="10" rx="18" ry="4" fill="#d9e1ee" stroke="#1f2d4d" strokeWidth="1.8" />
              </g>

              {/* Multi-tier Courtyard House with Gable Roofs */}
              <g transform="translate(1080, 180)">
                {/* Main House Wall */}
                <rect x="20" y="50" width="110" height="90" fill="#ffffff" stroke="#1f2d4d" strokeWidth="2" />
                {/* Stepped Chinese Gable Roof */}
                <path
                  d="M 10 50 Q 75 22 140 50 L 144 56 Q 75 30 6 56 Z"
                  fill="#1f2d4d"
                />
                <path d="M 6 56 L 6 46 L 14 46" stroke="#1f2d4d" strokeWidth="2" />
                <path d="M 144 56 L 144 46 L 136 46" stroke="#1f2d4d" strokeWidth="2" />

                {/* Window Lattice with Oriental Grid */}
                <rect x="52" y="70" width="36" height="42" fill="#f4f6fa" stroke="#1f2d4d" strokeWidth="1.5" />
                <line x1="70" y1="70" x2="70" y2="112" stroke="#1f2d4d" strokeWidth="1.2" />
                <line x1="52" y1="91" x2="88" y2="91" stroke="#1f2d4d" strokeWidth="1.2" />

                {/* Side wing pavilion */}
                <rect x="130" y="85" width="80" height="55" fill="#ffffff" stroke="#1f2d4d" strokeWidth="1.8" />
                <path d="M 122 85 Q 170 65 218 85 L 222 90 Q 170 72 118 90 Z" fill="#2c3e66" />
                <rect x="155" y="98" width="28" height="28" fill="#f4f6fa" stroke="#1f2d4d" strokeWidth="1.2" />
              </g>

              {/* Authentic Japanese Stone Garden Lantern (Kasuga Tōrō) & Bamboo Grove */}
              <g transform="translate(1140, 240)">
                {/* Japanese Stone Lantern Base */}
                <rect x="30" y="68" width="32" height="12" rx="2" fill="#cbd5e1" stroke="#1f2d4d" strokeWidth="1.5" />
                <rect x="38" y="52" width="16" height="16" fill="#e2e8f0" stroke="#1f2d4d" strokeWidth="1.4" />
                {/* Carved Firebox Chamber with Warm Illuminated Window */}
                <rect x="32" y="32" width="28" height="20" rx="3" fill="#fef3c7" stroke="#b45309" strokeWidth="1.4" />
                <circle cx="46" cy="42" r="5" fill="#f59e0b" opacity="0.85" />
                {/* Flared Stone Pagoda Roof */}
                <path d="M 22 32 Q 46 16 70 32 L 72 36 Q 46 22 20 36 Z" fill="#1f2d4d" />
                <path d="M 44 16 L 46 8 L 48 16 Z" fill="#1f2d4d" />
                <circle cx="46" cy="8" r="2.5" fill="#c5a059" />

                {/* Slender Zen Bamboo Reeds Swaying in Mountain Breeze */}
                <g transform="translate(85, 10)">
                  <line x1="0" y1="70" x2="2" y2="10" stroke="#1f2d4d" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="6" cy="18" rx="8" ry="3" fill="#3a5080" transform="rotate(-25 6 18)" opacity="0.8" />
                  <ellipse cx="-4" cy="32" rx="8" ry="3" fill="#3a5080" transform="rotate(25 -4 32)" opacity="0.8" />
                  <ellipse cx="7" cy="48" rx="7" ry="2.5" fill="#4d699e" transform="rotate(-20 7 48)" opacity="0.75" />

                  <line x1="16" y1="70" x2="18" y2="20" stroke="#1f2d4d" strokeWidth="1.8" strokeLinecap="round" />
                  <ellipse cx="23" cy="26" rx="7" ry="2.5" fill="#3a5080" transform="rotate(-30 23 26)" opacity="0.8" />
                  <ellipse cx="11" cy="40" rx="7" ry="2.5" fill="#4d699e" transform="rotate(20 11 40)" opacity="0.75" />
                </g>
              </g>
            </g>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="mountainGradFar" x1="0" y1="150" x2="0" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4d699e" stopOpacity="0.6" />
                <stop offset="0.7" stopColor="#3a5080" stopOpacity="0.25" />
                <stop offset="1" stopColor="#2c3e66" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="mountainGradMid" x1="0" y1="180" x2="0" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5c7499" stopOpacity="0.55" />
                <stop offset="0.8" stopColor="#3a5080" stopOpacity="0.2" />
                <stop offset="1" stopColor="#2c3e66" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="porcelainRiverGrad" x1="600" y1="230" x2="600" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="0.4" stopColor="#eaf0fa" stopOpacity="0.85" />
                <stop offset="0.8" stopColor="#dbe4f4" stopOpacity="0.8" />
                <stop offset="1" stopColor="#cfdaf0" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="mistRibbonGrad" x1="0" y1="220" x2="1400" y2="240" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0" />
                <stop offset="0.25" stopColor="#ffffff" stopOpacity="0.65" />
                <stop offset="0.5" stopColor="#dbe4f4" stopOpacity="0.5" />
                <stop offset="0.75" stopColor="#ffffff" stopOpacity="0.6" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="mountainGradHigh" x1="500" y1="35" x2="500" y2="280" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6e86ad" stopOpacity="0.75" />
                <stop offset="0.4" stopColor="#4d699e" stopOpacity="0.55" />
                <stop offset="0.8" stopColor="#3a5080" stopOpacity="0.25" />
                <stop offset="1" stopColor="#2c3e66" stopOpacity="0.05" />
              </linearGradient>

              {/* Celestial Sun Gradients (Bright Mode) */}
              <radialGradient id="sunOuterCoronaGrad" cx="50%" cy="50%" r="50%">
                <stop stopColor="#f59e0b" stopOpacity="0.38" />
                <stop offset="65%" stopColor="#fbbf24" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="sunInnerCoronaGrad" cx="50%" cy="50%" r="50%">
                <stop stopColor="#fef08a" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="sunCoreGrad" cx="40%" cy="40%" r="60%">
                <stop stopColor="#fffbeb" />
                <stop offset="30%" stopColor="#fef08a" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>

              {/* Celestial Moon Gradients (Dark Mode) */}
              <radialGradient id="moonSapphireGlow" cx="50%" cy="50%" r="50%">
                <stop stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="65%" stopColor="#0284c7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="moonAuraGrad" cx="50%" cy="50%" r="50%">
                <stop stopColor="#e0f2fe" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="moonCoreGrad" cx="35%" cy="35%" r="65%">
                <stop stopColor="#ffffff" />
                <stop offset="40%" stopColor="#f1f5f9" />
                <stop offset="80%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </radialGradient>
            </defs>
          </svg>

          {/* -------------------------------------------------------------
              LIVE ANIMATED ELEMENT 1: Graceful Wild Cranes Soaring Across Mountain Sky
              ------------------------------------------------------------- */}
          <div className="absolute top-2 left-0 w-full h-28 overflow-hidden pointer-events-none">
            {/* Lead Crane */}
            <div className="absolute top-3 left-0 animate-cinema-crane-lead">
              <svg width="36" height="24" viewBox="0 0 36 24" fill="none" className="text-[#1f2d4d] dark:text-[#f3db9d]">
                <path
                  d="M 18 13 C 11 5, 2 7, 0 9 C 6 12, 13 14, 18 13 Z"
                  fill="currentColor"
                  className="animate-wing-flap"
                />
                <path
                  d="M 18 13 C 25 5, 34 7, 36 9 C 30 12, 23 14, 18 13 Z"
                  fill="currentColor"
                  className="animate-wing-flap"
                />
                <ellipse cx="18" cy="13" rx="4.5" ry="2" fill="currentColor" />
                <line x1="18" y1="13" x2="16" y2="23" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
                <line x1="19" y1="13" x2="21" y2="22" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
              </svg>
            </div>

            {/* Companion Crane 1 */}
            <div className="absolute top-8 left-0 animate-cinema-crane-follower-1">
              <svg width="26" height="18" viewBox="0 0 36 24" fill="none" className="text-[#2c3e66] dark:text-[#d4af37] opacity-85">
                <path d="M 18 13 C 11 5, 2 7, 0 9 C 6 12, 13 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <path d="M 18 13 C 25 5, 34 7, 36 9 C 30 12, 23 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <ellipse cx="18" cy="13" rx="3.5" ry="1.6" fill="currentColor" />
              </svg>
            </div>

            {/* Companion Crane 2 */}
            <div className="absolute top-2 left-0 animate-cinema-crane-follower-2">
              <svg width="20" height="14" viewBox="0 0 36 24" fill="none" className="text-[#485d85] dark:text-[#f3db9d] opacity-75">
                <path d="M 18 13 C 11 5, 2 7, 0 9 C 6 12, 13 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <path d="M 18 13 C 25 5, 34 7, 36 9 C 30 12, 23 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <ellipse cx="18" cy="13" rx="3" ry="1.3" fill="currentColor" />
              </svg>
            </div>

            {/* Second Delayed Flock */}
            <div className="absolute top-6 left-0 animate-cinema-crane-delayed">
              <svg width="28" height="20" viewBox="0 0 36 24" fill="none" className="text-[#1f2d4d] dark:text-[#d4af37]">
                <path d="M 18 13 C 11 5, 2 7, 0 9 C 6 12, 13 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <path d="M 18 13 C 25 5, 34 7, 36 9 C 30 12, 23 14, 18 13 Z" fill="currentColor" className="animate-wing-flap" />
                <ellipse cx="18" cy="13" rx="3.8" ry="1.8" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* -------------------------------------------------------------
              LIVE ANIMATED ELEMENT 2: Swimming Koi Fish in River Curve
              ------------------------------------------------------------- */}
          <div className="absolute bottom-8 left-[40%] sm:left-[45%] w-52 h-28 pointer-events-none">
            {/* Koi 1 (Golden-Cobalt) */}
            <div className="absolute top-4 left-6 animate-koi-swim">
              <svg width="36" height="18" viewBox="0 0 42 20" fill="none" className="drop-shadow-sm">
                <path
                  d="M 36 10 C 32 4, 18 5, 10 10 C 18 15, 32 16, 36 10 Z"
                  fill="#c5a059"
                  opacity="0.95"
                />
                <circle cx="32" cy="8" r="1.2" fill="#14100e" />
                {/* Waving Tail Fin */}
                <path
                  d="M 10 10 C 5 5, 0 7, 0 10 C 0 13, 5 15, 10 10 Z"
                  fill="#8c600a"
                  className="animate-koi-tail"
                />
                {/* Side Fins */}
                <ellipse cx="26" cy="6" rx="4" ry="1.8" fill="#d4af37" transform="rotate(-25 26 6)" />
                <ellipse cx="26" cy="14" rx="4" ry="1.8" fill="#d4af37" transform="rotate(25 26 14)" />
              </svg>
            </div>

            {/* Koi 2 (Indigo Porcelain) */}
            <div className="absolute top-14 left-18 animate-koi-swim-reverse">
              <svg width="28" height="15" viewBox="0 0 42 20" fill="none" className="drop-shadow-sm">
                <path
                  d="M 36 10 C 32 4, 18 5, 10 10 C 18 15, 32 16, 36 10 Z"
                  fill="#2c3e66"
                  opacity="0.9"
                />
                <path
                  d="M 10 10 C 5 5, 0 7, 0 10 C 0 13, 5 15, 10 10 Z"
                  fill="#1f2d4d"
                  className="animate-koi-tail"
                />
              </svg>
            </div>

            {/* Concentric Water Ripples dynamically expanding */}
            <svg width="90" height="45" viewBox="0 0 90 45" className="absolute top-5 left-10 pointer-events-none">
              <ellipse id="porcelain-ripple-1" cx="45" cy="22" rx="16" ry="7" stroke="#2c3e66" fill="none" className="animate-cinema-ripple" />
              <ellipse id="porcelain-ripple-2" cx="45" cy="22" rx="24" ry="10" stroke="#c5a059" fill="none" className="animate-cinema-ripple-delayed" />
            </svg>
          </div>

          {/* -------------------------------------------------------------
              LIVE ANIMATED ELEMENT 3: Authentic Wooden Sampan Boat with Boatman
              ------------------------------------------------------------- */}
          <div className="absolute bottom-11 left-[46%] sm:left-[50%] animate-cinema-boat pointer-events-none">
            <svg width="84" height="46" viewBox="0 0 86 48" fill="none" className="drop-shadow-md">
              {/* Natural Wooden Sampan Hull */}
              <path
                d="M 6 32 C 26 38, 60 38, 80 32 C 75 41, 11 41, 6 32 Z"
                fill="#241a13"
                stroke="#14100e"
                strokeWidth="1.4"
              />
              <path d="M 12 32 Q 43 36 74 32" stroke="#d4af37" strokeWidth="0.9" opacity="0.7" />

              {/* Boatman Figure in Conical Bamboo Straw Hat */}
              <g transform="translate(46, 7)">
                {/* Conical Straw Hat */}
                <polygon points="12,2 3,11 21,11" fill="#c5a059" stroke="#684a0c" strokeWidth="0.9" />
                {/* Head */}
                <circle cx="12" cy="13" r="3.2" fill="#14100e" />
                {/* Indigo Robe Body */}
                <path d="M 7 16 L 17 16 L 19 28 L 5 28 Z" fill="#2c3e66" />
                {/* Long Oar with Dynamic Rowing Stroke */}
                <g className="animate-cinema-oar">
                  <line x1="9" y1="8" x2="1" y2="36" stroke="#8c600a" strokeWidth="1.8" strokeLinecap="round" />
                  <ellipse cx="1" cy="35" rx="2.5" ry="4" fill="#684a0c" transform="rotate(15 1 35)" />
                </g>
              </g>

              {/* Gentle water line wake */}
              <path d="M 0 36 Q 43 40 86 36" stroke="#2c3e66" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.45" />
            </svg>
          </div>

          {/* -------------------------------------------------------------
              LIVE ANIMATED ELEMENT 4: Peaceful Spotted Deer Grazing on Riverbank
              ------------------------------------------------------------- */}
          <div className="absolute bottom-14 left-[32%] sm:left-[35%] animate-cinema-deer pointer-events-none hidden sm:block">
            <svg width="48" height="44" viewBox="0 0 52 48" fill="none">
              {/* Deer Head, Neck & Antlers with Natural Grazing Movement */}
              <g className="animate-cinema-deer-head">
                {/* Antlers */}
                <path d="M 35 9 L 33 2 M 35 7 L 39 3 M 34 6 L 37 5" stroke="#1f2d4d" strokeWidth="1.3" strokeLinecap="round" />
                {/* Head & Ears */}
                <path d="M 31 12 L 36 10 L 34 14 Z" fill="#1f2d4d" />
                <polygon points="32,8 30,10 32,11" fill="#1f2d4d" />
                {/* Neck */}
                <path d="M 29 15 C 30 12, 34 11, 34 14 C 33 18, 29 21, 27 23" fill="#1f2d4d" />
              </g>

              {/* Body */}
              <ellipse cx="21" cy="25" rx="11" ry="6.5" fill="#2c3e66" />
              {/* Dappled spots on back */}
              <circle cx="18" cy="23" r="0.8" fill="#ffffff" opacity="0.8" />
              <circle cx="21" cy="22" r="0.8" fill="#ffffff" opacity="0.8" />
              <circle cx="24" cy="24" r="0.8" fill="#ffffff" opacity="0.8" />

              {/* Slender Grazing Legs */}
              <line x1="14" y1="30" x2="12" y2="42" stroke="#1f2d4d" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="17" y1="30" x2="18" y2="42" stroke="#1f2d4d" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="26" y1="30" x2="24" y2="42" stroke="#1f2d4d" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="29" y1="30" x2="31" y2="41" stroke="#1f2d4d" strokeWidth="1.6" strokeLinecap="round" />

              {/* Wagging Tail */}
              <g className="animate-cinema-deer-tail">
                <path d="M 10 22 L 8 24" stroke="#1f2d4d" strokeWidth="1.8" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* -------------------------------------------------------------
              LIVE ANIMATED ELEMENT 5: Windblown Cherry Blossom (Sakura) Petals
              - Spreads everywhere across the landscape when wind comes
              - In Bright Mode: vibrant Sakura rose pink & soft blush
              - In Dark Mode: bioluminescent sparkle blue with radiant glow!
              ------------------------------------------------------------- */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Wind Gust Wave 1 (Originating from Cherry Tree, Sweeping across the river & pagoda) */}
            <div className="absolute top-10 left-[58%] animate-wind-petal-1">
              <svg width="20" height="20" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 sakura-petal-color drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z M 12 2 Q 11 0.5 10 0 Q 12 1 14 0 Q 13 0.5 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-18 left-[55%] animate-wind-petal-2">
              <svg width="18" height="18" viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 sakura-petal-soft drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-6 left-[62%] animate-wind-petal-3">
              <svg width="16" height="16" viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 sakura-petal-light drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            {/* Wind Gust Wave 2 */}
            <div className="absolute top-14 left-[52%] animate-wind-petal-4">
              <svg width="20" height="20" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 sakura-petal-color drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-22 left-[54%] animate-wind-petal-5">
              <svg width="17" height="17" viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 sakura-petal-soft drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-8 left-[65%] animate-wind-petal-6">
              <svg width="15" height="15" viewBox="0 0 24 24" className="w-2.5 h-2.5 sakura-petal-light drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            {/* Wind Gust Wave 3 (Staggered wind gusts across mountain sky & river) */}
            <div className="absolute top-12 left-[48%] animate-wind-petal-1" style={{ animationDelay: "4.5s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 sakura-petal-color drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-20 left-[59%] animate-wind-petal-3" style={{ animationDelay: "6.5s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 sakura-petal-soft drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-4 left-[56%] animate-wind-petal-2" style={{ animationDelay: "8.5s" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 sakura-petal-color drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-16 left-[61%] animate-wind-petal-4" style={{ animationDelay: "11s" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" className="w-3 h-3 sakura-petal-soft drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>

            <div className="absolute top-7 left-[51%] animate-wind-petal-5" style={{ animationDelay: "13.5s" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" className="w-2.5 h-2.5 sakura-petal-light drop-shadow-sm">
                <path d="M 12 2 C 7 2, 4 6, 5 12 C 6 18, 12 22, 12 22 C 12 22, 18 18, 19 12 C 20 6, 17 2, 12 2 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------------------------------------
          Bottom Bar: Social Icons & Copyright & Agency Credit
          ----------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-28 sm:pb-16 md:pb-12 relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c5042] dark:text-[#8e8272]">
        {/* Social Badges */}
        <div className="flex items-center gap-3">
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white dark:bg-white/5 hover:bg-[#e1306c] hover:text-white border border-black/10 dark:border-white/10 flex items-center justify-center text-[#2c3e66] dark:text-[#d4af37] transition-all shadow-sm"
            title="Follow on Instagram"
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={buildWhatsAppLink({})}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white dark:bg-white/5 hover:bg-[#25d366] hover:text-white border border-black/10 dark:border-white/10 flex items-center justify-center text-[#25d366] transition-all shadow-sm"
            title="Direct WhatsApp"
            aria-label="WhatsApp Chat"
          >
            <span className="font-bold text-xs">WA</span>
          </a>

          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="w-8 h-8 rounded-full bg-white dark:bg-white/5 hover:bg-[#8c600a] hover:text-white border border-black/10 dark:border-white/10 flex items-center justify-center text-[#14100e] dark:text-white transition-all shadow-sm"
            title="Call Clinic"
            aria-label="Call Clinic"
          >
            <Phone className="w-3 h-3" />
          </a>

          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white dark:bg-white/5 hover:bg-[#c5a059] hover:text-black border border-black/10 dark:border-white/10 flex items-center justify-center text-[#8c600a] dark:text-[#d4af37] transition-all shadow-sm"
            title="Open Google Maps"
            aria-label="Google Maps Location"
          >
            <MapPin className="w-3 h-3" />
          </a>
        </div>

        {/* Legal & Agency Credit */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-center sm:text-right">
          <span>© {new Date().getFullYear()} S Fvour Group By - M Scissors. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <span>Crafted with precision by</span>
            <a
              href={CLINIC_INFO.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#704808] dark:text-[#d4af37] hover:underline font-bold flex items-center gap-1"
            >
              <span>NRAVIXA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
