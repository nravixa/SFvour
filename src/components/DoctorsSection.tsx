"use client";

import React, { useState } from "react";
import Image from "next/image";
import { buildWhatsAppLink } from "@/data/clinicData";
import {
  ShieldCheck,
  Award,
  Calendar,
  Clock,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";

interface DoctorProfile {
  id: string;
  name: string;
  degrees: string;
  role: string;
  experience: string;
  photo: string;
  philosophy: string;
  masteries: string[];
  schedule: string;
  accentTitle: string;
}

const DOCTORS: DoctorProfile[] = [
  {
    id: "dr-radhika",
    name: "Dr. Radhika Shinde",
    degrees: "MBBS, MD (Dermatology, Gold Medalist)",
    role: "Chief Aesthetic Dermatologist & Cosmetologist",
    experience: "12+ Years Clinical Practice",
    photo: "/images/dr-radhika.jpg",
    philosophy:
      "Aesthetic dermatology should never look overdone. Every treatment begins with rigorous dermoscopic skin mapping to restore cellular health, smooth texture, and timeless natural radiance.",
    masteries: [
      "Signature HydraFacial MD & Custom Serums",
      "Acne Scar Subcision & Medical Peels",
      "Melasma & Deep Pigmentation Reversal",
      "Non-Surgical Collagen Remodeling",
    ],
    schedule: "Tue – Sun: 10:30 AM – 7:30 PM",
    accentTitle: "Medical Dermatology & Skin Longevity",
  },
  {
    id: "dr-vikram",
    name: "Dr. Vikram Patil",
    degrees: "MBBS, MS, Fellowship in Aesthetic Medicine (FAM - Germany)",
    role: "Senior Trichologist & Aesthetic Laser Lead",
    experience: "10+ Years Specialized Laser Practice",
    photo: "/images/dr-vikram.jpg",
    philosophy:
      "Hair revival and laser physics require uncompromising precision. Utilizing sub-zero sapphire contact cooling and autologous growth factor mapping, every session delivers clinical results with complete patient comfort.",
    masteries: [
      "Triple-Wavelength Painless Laser Hair Reduction",
      "Autologous PRP Scalp & Follicular Therapy",
      "Stubborn Dandruff & Scalp Barrier Repair",
      "Non-Invasive Body Contouring & Slimming",
    ],
    schedule: "Mon – Sat: 11:00 AM – 8:30 PM",
    accentTitle: "Laser Physics & Advanced Trichology",
  },
];

export default function DoctorsSection() {
  const [activeDoctorId, setActiveDoctorId] = useState<string>("dr-radhika");
  const { scrollTo } = useSmoothScroll();

  return (
    <section
      id="doctors"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/05 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8c600a]/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 flex flex-col items-center justify-center">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8c600a] dark:text-[#d4af37]">
              Board-Certified Medical Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight leading-[1.12]">
            Diagnostic Rigor. <br />
            <span className="gold-gradient-text italic font-serif inline-block pr-2">
              Five-Star Aesthetic Excellence.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995] leading-relaxed max-w-2xl mx-auto">
            At S Fvour, you consult directly with qualified physicians—never commission-driven sales staff. Every consultation includes scientific diagnostics, transparent prognosis, and bespoke treatment blueprints tailored to Indian skin and hair biology.
          </p>
        </div>

        {/* Editorial Doctor Profiles Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {DOCTORS.map((doc) => {
            const isActive = activeDoctorId === doc.id;

            return (
              <div
                key={doc.id}
                onMouseEnter={() => setActiveDoctorId(doc.id)}
                className={`group relative rounded-[32px] p-8 sm:p-10 transition-all duration-500 bg-white/80 dark:bg-[#14110f]/80 backdrop-blur-xl border ${
                  isActive
                    ? "border-[#d4af37]/60 shadow-[0_24px_60px_rgba(212,175,55,0.12)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
                    : "border-black/[0.08] dark:border-white/[0.08] hover:border-[#d4af37]/35 shadow-sm"
                }`}
              >
                {/* Doctor Portrait & Identity Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-black/[0.06] dark:border-white/[0.08]">
                  {/* Portrait Frame */}
                  <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 shadow-lg ring-1 ring-black/10 dark:ring-white/10 bg-[#1c1815]">
                    <Image
                      src={doc.photo}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 144px, 160px"
                      className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                      priority={doc.id === "dr-radhika"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Online / Active Availability Badge */}
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                      <span className="text-[10px] font-semibold text-white tracking-wide">
                        In Clinic
                      </span>
                    </div>
                  </div>

                  {/* Doctor Credentials & Hierarchy */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37] mb-1.5">
                      {doc.accentTitle}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14100e] dark:text-white tracking-tight leading-tight">
                      {doc.name}
                    </h3>

                    <p className="text-xs sm:text-[13px] font-semibold text-[#8c600a] dark:text-[#f3db9d] mt-1">
                      {doc.role}
                    </p>

                    <p className="text-xs text-[#52473c] dark:text-[#baa995] mt-1.5 leading-relaxed font-medium">
                      {doc.degrees}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-center sm:justify-start gap-4 text-xs text-[#52473c] dark:text-[#9d9284]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Award className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]" />
                        {doc.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clinical Philosophy */}
                <div className="my-6">
                  <p className="text-xs sm:text-[13px] text-[#4a3f35] dark:text-[#cfc3b0] leading-relaxed italic border-l-2 border-[#d4af37] pl-4 py-1">
                    &ldquo;{doc.philosophy}&rdquo;
                  </p>
                </div>

                {/* Core Areas of Mastery */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8c600a] dark:text-[#d4af37] mb-3">
                    Specialized Medical Competencies
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {doc.masteries.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#faf7f2] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.05]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-[#14100e] dark:text-[#e8dfd3] leading-snug">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation Footer & High-Contrast CTAs */}
                <div className="pt-6 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Schedule */}
                  <div className="flex items-center gap-2 text-xs text-[#52473c] dark:text-[#baa995]">
                    <Clock className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37] shrink-0" />
                    <span className="font-medium">{doc.schedule}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* Primary Gold Consultation Button */}
                    <a
                      href={buildWhatsAppLink({
                        service: `Private Doctor Consultation with ${doc.name}`,
                        message: `Hello ${doc.name}, I would like to book a private diagnostic consultation at S Fvour Clinic Baramati.`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doctor-cta-btn flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-extrabold text-xs tracking-wider shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer group"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#14100e] text-[#14100e]" />
                      <span>Consult {doc.name.split(" ")[0]} {doc.name.split(" ")[1]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Quick Online Booking Scroll Button */}
                    <button
                      onClick={() => {
                        const el = document.getElementById("booking");
                        if (el) scrollTo(el, -72);
                      }}
                      className="px-4 py-3.5 rounded-full bg-[#f4ede2] hover:bg-[#eae1d3] dark:bg-white/10 dark:hover:bg-white/15 text-[#14100e] dark:text-white border border-black/10 dark:border-white/15 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95"
                      title="Open Booking Calendar Form"
                      aria-label="Open Booking Calendar Form"
                    >
                      <Calendar className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]" />
                      <span className="hidden sm:inline">Form</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Integrity Guarantee Bar */}
        <div className="mt-14 py-6 px-8 rounded-2xl bg-[#ede7dc]/50 dark:bg-white/[0.02] border border-[#8c600a]/15 dark:border-white/[0.06] flex flex-wrap items-center justify-around gap-6 text-xs text-[#3d3227] dark:text-[#cfc3b0]">
          <div className="flex items-center gap-2.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]" />
            <span>Strict Medical Confidentiality</span>
          </div>
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>In-Depth Skin & Scalp Dermoscopy</span>
          </div>
          <div className="flex items-center gap-2.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span>Zero Sales Targets • Ethical Medical Advice</span>
          </div>
        </div>
      </div>
    </section>
  );
}
