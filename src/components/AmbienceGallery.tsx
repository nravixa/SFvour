"use client";

import React from "react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import LuxuryCredentialCard from "./LuxuryCredentialCard";

export default function AmbienceGallery() {
  return (
    <section id="ambience" className="py-24 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#0c0a09] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
            Designed for <span className="gold-gradient-text">Absolute Comfort</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995]">
            Every corner of S Fvour at Subhadra Mall is purposefully crafted with warm ambient lighting, clinical privacy, and hospital-grade sterilization for an elevated experience.
          </p>
        </div>

        {/* Top Showcase: Executive Lounge + Custom Theme-Matched Business Credential */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Clinical Dermatology & Aesthetic Suite */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={4} perspective={1000} className="h-full">
              <div className="h-full relative rounded-3xl overflow-hidden glass-card border border-black/10 dark:border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 group shadow-xl bg-[#14100e] min-h-[320px] image-card image-overlay-card">
                <Image
                  src="/images/transform-skin.jpg"
                  alt="S Fvour Clinical Cosmetology & VIP Suite Baramati"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/95 via-[#0c0a09]/30 to-transparent pointer-events-none" />

                <div className="image-overlay-badge absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-bold text-[#f7e1b5] shadow-lg">
                  5-Star Treatment Suite
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold !text-white group-hover:text-[#f3db9d] transition-colors">
                    Clinical Cosmetology & VIP Suite
                  </h3>
                  <p className="text-xs !text-[#e8ded1] mt-1 line-clamp-2">
                    Advanced hydra-infusion, medical peels & private aesthetic care
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Custom Theme-Matched Business Credential (NO raw card photo!) */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={5} perspective={1000} className="h-full">
              <LuxuryCredentialCard />
            </TiltCard>
          </div>
        </div>

        {/* Lower Row of Clinic Suites */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard maxTilt={5} perspective={1000} className="h-full">
            <div className="h-full relative rounded-3xl overflow-hidden glass-card border border-black/10 dark:border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 group shadow-xl bg-[#14100e] min-h-[250px] image-card image-overlay-card">
              <Image
                src="/images/service-laser.jpg"
                alt="State-of-the-Art Laser Suite"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/95 via-[#0c0a09]/30 to-transparent pointer-events-none" />
              <div className="image-overlay-badge absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-bold text-[#f7e1b5] shadow-lg">
                Painless Laser Suite
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-base sm:text-lg font-bold !text-white group-hover:text-[#f3db9d] transition-colors">
                  Painless Laser Suite
                </h3>
                <p className="text-xs !text-[#e8ded1] mt-0.5">
                  Sub-zero contact sapphire cooling
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={5} perspective={1000} className="h-full">
            <div className="h-full relative rounded-3xl overflow-hidden glass-card border border-black/10 dark:border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 group shadow-xl bg-[#14100e] min-h-[250px] image-card image-overlay-card">
              <Image
                src="/images/service-makeup.jpg"
                alt="Bridal Vanity & Makeup Studio"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/95 via-[#0c0a09]/30 to-transparent pointer-events-none" />
              <div className="image-overlay-badge absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-bold text-[#f7e1b5] shadow-lg">
                Bridal Studio
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-base sm:text-lg font-bold !text-white group-hover:text-[#f3db9d] transition-colors">
                  Bridal Vanity & Makeup Studio
                </h3>
                <p className="text-xs !text-[#e8ded1] mt-0.5" style={{ color: "#e8ded1" }}>
                  Halo illuminated mirrors & luxury cosmetics
                </p>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={5} perspective={1000} className="h-full">
            <div className="h-full relative rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 group shadow-xl bg-[#14100e] min-h-[250px] image-card">
              <Image
                src="/images/service-spa.jpg"
                alt="Holistic Wellness & Detox Spa Suite"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0a09]/85 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-bold" style={{ color: "#f7e1b5" }}>
                Spa & Relaxation
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif text-base sm:text-lg font-bold !text-white group-hover:text-[#f3db9d] transition-colors" style={{ color: "#ffffff" }}>
                  Therapeutic Spa Suite
                </h3>
                <p className="text-xs !text-[#e8ded1] mt-0.5" style={{ color: "#e8ded1" }}>
                  Aromatherapy, warm LED timber slats & tranquility
                </p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
