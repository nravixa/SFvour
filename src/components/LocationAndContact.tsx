"use client";

import React from "react";
import { CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import TiltCard from "./TiltCard";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { InstagramIcon } from "./Icons";

export default function LocationAndContact() {
  return (
    <section id="location" className="py-24 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#090807] transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/06 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Address, Hours & Instant Contact */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
              Located Centrally at <span className="gold-gradient-text">Subhadra Mall</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] leading-relaxed">
              We welcome you to our modern aesthetic clinic located on the 2nd Floor of Subhadra Mall, directly opposite Subhadra Cinemas at Pencil Chowk, Baramati MIDC.
            </p>

            {/* Information Cards */}
            <div className="space-y-4 pt-2">
              {/* Address Card */}
              <div className="p-4 rounded-2xl glass-card border border-black/10 dark:border-white/10 flex items-start gap-3.5 bg-white dark:bg-[#14100e] shadow-md dark:shadow-none">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37]">
                    Clinic Address
                  </h4>
                  <p className="text-sm font-medium text-[#14100e] dark:text-white mt-0.5 leading-snug">
                    {CLINIC_INFO.addressFull}
                  </p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8c600a] dark:text-[#f3db9d] hover:underline mt-2 font-semibold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open Directions on Google Maps
                  </a>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="p-4 rounded-2xl glass-card border border-black/10 dark:border-white/10 flex items-start gap-3.5 bg-white dark:bg-[#14100e] shadow-md dark:shadow-none">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37]">
                    Direct Telephone & WhatsApp
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <a
                      href={`tel:${CLINIC_INFO.phoneDigits}`}
                      className="text-sm font-bold text-[#14100e] dark:text-white hover:text-[#8c600a] dark:hover:text-[#d4af37] transition-colors"
                    >
                      {CLINIC_INFO.phonePrimary}
                    </a>
                    <span className="text-[#8c7d6e] dark:text-[#6d6150] hidden sm:inline">•</span>
                    <a
                      href={buildWhatsAppLink({})}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#25d366] hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours & Instagram */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl glass-card border border-black/10 dark:border-white/10 flex items-start gap-3 bg-white dark:bg-[#14100e] shadow-md dark:shadow-none">
                  <Clock className="w-5 h-5 text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#8c600a] dark:text-[#d4af37]">Working Hours</h4>
                    <p className="text-xs text-[#14100e] dark:text-white mt-0.5 font-medium">
                      10:00 AM – 9:00 PM
                    </p>
                    <span className="text-[10px] text-[#4a3f35] dark:text-[#baa995] font-medium">Open All 7 Days</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl glass-card border border-black/10 dark:border-white/10 flex items-start gap-3 bg-white dark:bg-[#14100e] shadow-md dark:shadow-none">
                  <InstagramIcon className="w-5 h-5 text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#8c600a] dark:text-[#d4af37]">Instagram</h4>
                    <a
                      href={CLINIC_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#14100e] dark:text-white hover:text-[#8c600a] dark:hover:text-[#d4af37] font-medium block truncate mt-0.5"
                    >
                      {CLINIC_INFO.instagramHandle}
                    </a>
                    <span className="text-[10px] text-[#4a3f35] dark:text-[#baa995] font-medium">Watch Treatments</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={buildWhatsAppLink({})}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#d4af37]/25"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-black/15 dark:border-white/20 hover:border-[#8c600a] dark:hover:border-[#d4af37] text-xs sm:text-sm font-bold text-[#14100e] dark:text-white bg-white dark:bg-white/5 flex items-center gap-2 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Subhadra Mall Highlight */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={5} perspective={1000}>
              <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-[#d4af37]/35 bg-white dark:bg-[#14100e] p-3 shadow-xl relative">
                {/* Embedded Google Map iframe styled cleanly */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#ede7dc] dark:bg-[#1c1815]">
                  <iframe
                    title="S Fvour Clinic Subhadra Mall Baramati MIDC Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.836098292418!2d74.57503707519183!3d18.15174418287413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3751761000001%3A0x6000000000000000!2sSubhadra%20Mall%2C%20Baramati!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="w-full h-full border-0 filter dark:invert-[90%] dark:hue-rotate-180 dark:brightness-85 dark:contrast-90"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Overlay Clinic Badge (High Contrast in Light & Dark Mode) */}
                  <div className="map-overlay-card absolute top-4 left-4 p-3.5 rounded-2xl border shadow-xl max-w-[88%] z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] ring-4 ring-[#d4af37]/25 shrink-0 animate-pulse" />
                      <p className="map-card-title text-xs font-extrabold tracking-tight">
                        S Fvour Group By - M Scissors
                      </p>
                    </div>
                    <p className="map-card-subtitle text-[11px] font-medium mt-1 pl-4.5">
                      Shop No. 003, 2nd Floor (Near Subhadra Cinemas)
                    </p>
                  </div>

                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 px-3.5 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>Open Full Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#a3947c]">
                  <span>Pencil Chowk, Baramati MIDC, Pune 413133</span>
                  <span className="text-[#25d366] font-semibold">● Open Now</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
