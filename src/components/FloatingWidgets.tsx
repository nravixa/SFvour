"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import { useCart } from "@/context/CartContext";
import {
  MessageCircle,
  Phone,
  ArrowUp,
  MapPin,
  Clock,
  Layers,
  CalendarCheck,
  ShoppingBag,
} from "lucide-react";
import { InstagramIcon } from "./Icons";
import { useSmoothScroll } from "./SmoothScrollProvider";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const { setIsCartOpen, totalItemsCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollTo(0, 0);
  };

  return (
    <>
      {/* =========================================================================
          Floating Vertical Right-Side Dock (Exact Match to Japanese Aesthetic Reference)
          ========================================================================= */}
      <aside
        aria-label="Quick contact and consultation actions"
        className="floating-dock fixed right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center py-4 px-2.5 rounded-[30px] bg-white/95 dark:bg-[#1a1715]/95 backdrop-blur-2xl border border-[#3b3c66]/10 dark:border-white/10 shadow-[0_16px_40px_rgba(45,40,75,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] w-[74px] transition-all duration-300"
      >
        {/* 1. WhatsApp / LINE Style Speech Bubble with Tail */}
        <a
          href={buildWhatsAppLink({})}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center text-center p-0.5 transition-all hover:scale-105"
          title="Book Consultation on WhatsApp"
        >
          {/* Circular Speech Bubble with down-left pointing tail */}
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg
              viewBox="0 0 44 44"
              className="w-11 h-11 text-[#3b3c66] dark:text-[#d4af37] transition-colors group-hover:text-[#25d366]"
              fill="currentColor"
            >
              {/* Rounded speech bubble with tail */}
              <path d="M 22 4 C 11.5 4 3 11.8 3 21.5 C 3 26.2 5.1 30.4 8.6 33.4 L 7.5 40 L 14.5 37.2 C 16.8 38.3 19.3 39 22 39 C 32.5 39 41 31.2 41 21.5 C 41 11.8 32.5 4 22 4 Z" />
            </svg>
            {/* White WhatsApp/Chat icon inside bubble */}
            <span className="absolute inset-0 flex items-center justify-center text-white dark:text-black group-hover:text-white pb-1">
              <MessageCircle className="w-5 h-5 fill-current" />
            </span>
            {/* Online Green Pulsing Indicator */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25d366] ring-2 ring-white dark:ring-[#1a1715] animate-pulse" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#3b3c66] dark:text-[#e8decb] mt-1 leading-[1.15]">
            WhatsApp<br />Booking
          </span>
        </a>

        {/* 2. Sparkling Gem / Diamond Icon (Exact Outline from Reference) */}
        <a
          href="#booking"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("booking");
            if (el) scrollTo(el, -80);
          }}
          className="group flex flex-col items-center text-center p-0.5 transition-all hover:scale-105 cursor-pointer mt-3"
          title="Online Web Consultation Booking"
        >
          {/* Online Booking Icon */}
          <div className="w-8 h-8 flex items-center justify-center text-[#3b3c66] dark:text-[#e8decb] group-hover:text-[#8c600a] dark:group-hover:text-[#d4af37] transition-colors">
            <CalendarCheck className="w-6 h-6 stroke-[1.6]" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#3b3c66] dark:text-[#e8decb] mt-1 leading-[1.15]">
            Online<br />Booking
          </span>
        </a>

        {/* 3. Calendar Icon with Twin Binder Rings (Exact Match to Reference) */}
        <a
          href="#location"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("location");
            if (el) scrollTo(el, -80);
          }}
          className="group flex flex-col items-center text-center p-0.5 transition-all hover:scale-105 cursor-pointer mt-3"
          title="Clinic Hours: 10:00 AM – 9:00 PM Daily"
        >
          <div className="w-8 h-8 flex items-center justify-center text-[#3b3c66] dark:text-[#e8decb] group-hover:text-[#8c600a] dark:group-hover:text-[#d4af37] transition-colors">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              {/* Binder rings */}
              <line x1="10" y1="4" x2="10" y2="8" strokeWidth="2" />
              <line x1="22" y1="4" x2="22" y2="8" strokeWidth="2" />
              {/* Calendar outline box */}
              <rect x="5" y="7" width="22" height="20" rx="3" />
              <line x1="5" y1="13" x2="27" y2="13" />
            </svg>
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#3b3c66] dark:text-[#e8decb] mt-1 leading-[1.15]">
            Clinic<br />Hours
          </span>
        </a>

        {/* 4. Aesthetic Bag Button (Moved to Side Nav Bar as Requested) */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="group flex flex-col items-center text-center p-0.5 transition-all hover:scale-105 cursor-pointer mt-3 relative"
          title="Open Aesthetic Bag (Clinical Formulations)"
          aria-label="Open Aesthetic Bag"
        >
          <div className="relative w-8 h-8 flex items-center justify-center text-[#3b3c66] dark:text-[#e8decb] group-hover:text-[#8c600a] dark:group-hover:text-[#d4af37] transition-colors">
            <ShoppingBag className="w-6 h-6 stroke-[1.6]" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-[#14100e] font-extrabold text-[9px] flex items-center justify-center shadow-sm animate-pulse">
                {totalItemsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#3b3c66] dark:text-[#e8decb] mt-1 leading-[1.15]">
            Aesthetic<br />Bag
          </span>
        </button>

        {/* Hairline Divider */}
        <div className="w-9 h-px bg-[#3b3c66]/15 dark:bg-white/15 my-3" />

        {/* 4. Three Circular Solid Badges at Bottom (Periwinkle-Slate Lavender Discs) */}
        <div className="flex flex-col items-center gap-2">
          {/* Disc 1: Instagram */}
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#8489b0] hover:bg-[#e1306c] text-white flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
            title={`Follow ${CLINIC_INFO.instagramHandle} on Instagram`}
            aria-label="Instagram Profile"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>

          {/* Disc 2: Phone Call */}
          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="w-8 h-8 rounded-full bg-[#8489b0] hover:bg-[#8c600a] dark:hover:bg-[#d4af37] dark:hover:text-black text-white flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
            title={`Call Clinic: ${CLINIC_INFO.phonePrimary}`}
            aria-label="Call Clinic"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Disc 3: Google Maps Location Pin */}
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#8489b0] hover:bg-[#c5a059] hover:text-black text-white flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
            title="Directions: Subhadra Mall, Baramati MIDC"
            aria-label="Google Maps Directions"
          >
            <MapPin className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Optional Back-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-6 h-6 rounded-full bg-black/5 dark:bg-white/10 hover:bg-[#3b3c66] hover:text-white dark:hover:bg-[#d4af37] dark:hover:text-black text-[#3b3c66] dark:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer mt-2.5"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3" />
          </button>
        )}
      </aside>

      {/* Desktop Bottom Information Bar (Requested on bottom side) */}
      <div className="bottom-info-bar fixed bottom-0 left-0 right-0 z-40 hidden md:block bg-[#faf7f2]/95 dark:bg-[#110e0c]/95 backdrop-blur-xl border-t border-black/10 dark:border-[#d4af37]/20 py-2 px-6 shadow-[0_-8px_25px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#704808] dark:text-[#c5a059]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-semibold text-[#14100e] dark:text-[#f5ecd8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8c600a] dark:bg-[#d4af37]" />
              Baramati&apos;s Premier Cosmetology & Aesthetic Skin Hub
            </span>
            <span className="text-[#998b7a] dark:text-[#6d6150]">•</span>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#3d3227] dark:text-[#b5a995] hover:text-[#8c600a] dark:hover:text-[#d4af37] transition-colors cursor-pointer group font-medium"
              title="Open Google Maps location for Subhadra Mall, Baramati MIDC"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37] group-hover:scale-110 transition-transform" />
              <span className="hover:underline">2nd Floor, Subhadra Mall, Baramati MIDC</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#52473c] dark:text-[#b5a995]">
              <Clock className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37]" />
              10:00 AM – 9:00 PM Daily
            </span>
            <span className="text-[#998b7a] dark:text-[#6d6150]">•</span>
            <a
              href={`tel:${CLINIC_INFO.phoneDigits}`}
              className="flex items-center gap-1.5 text-[#14100e] dark:text-[#f5ecd8] hover:text-[#8c600a] dark:hover:text-[#d4af37] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37]" />
              {CLINIC_INFO.phonePrimary}
            </a>
            <span className="text-[#998b7a] dark:text-[#6d6150]">•</span>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#704808] dark:text-[#d4af37] hover:underline font-bold"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              {CLINIC_INFO.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar (Optimized for Meta Ads mobile visitors) */}
      <div className="mobile-nav-bar fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0c0a09]/95 backdrop-blur-xl border-t border-[#d4af37]/25 px-2 py-2 shadow-2xl">
        <div className="grid grid-cols-5 gap-1.5 text-center">
          {/* Call button */}
          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-white/5 border border-white/10 text-white active:bg-white/15"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-medium text-[#dcd1be] mt-0.5">
              Call Now
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={buildWhatsAppLink({})}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-[#25d366]/15 border border-[#25d366]/30 text-[#25d366] active:bg-[#25d366]/30"
          >
            <MessageCircle className="w-4 h-4 fill-[#25d366]" />
            <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
          </a>

          {/* Services */}
          <a
            href="#services"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-white/5 border border-white/10 text-white active:bg-white/15"
          >
            <Layers className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-medium text-[#dcd1be] mt-0.5">
              Services
            </span>
          </a>

          {/* Aesthetic Bag Mobile Launcher */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-white/5 border border-white/10 text-white active:bg-white/15 relative cursor-pointer"
            aria-label="Open Aesthetic Bag"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black font-extrabold text-[8px] flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-[#dcd1be] mt-0.5">
              Bag
            </span>
          </button>

          {/* Book Slot */}
          <a
            href="#booking"
            className="flex flex-col items-center justify-center py-1.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black font-extrabold active:scale-95 transition-transform"
          >
            <Clock className="w-4 h-4" />
            <span className="text-[10px] mt-0.5">Book Slot</span>
          </a>
        </div>
      </div>
    </>
  );
}
