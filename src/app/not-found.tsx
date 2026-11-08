import React from "react";
import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0e0c0a] text-[#f5ecd8] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#d4af37]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-lg w-full text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-bold uppercase tracking-widest text-[#f3db9d]">
          404 Error
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Page Not <span className="gold-gradient-text">Found</span>
        </h1>

        <p className="text-sm text-[#baa995] leading-relaxed">
          The aesthetic clinic page you are looking for has been moved or does not exist. Return to our main sanctuary or contact our reception desk at Subhadra Mall.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e8b86d] to-[#aa8021] text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-[#d4af37]/25 hover:scale-105 active:scale-95 transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Sanctuary</span>
          </Link>

          <a
            href={`tel:${CLINIC_INFO.phoneDigits}`}
            className="px-5 py-2.5 rounded-full border border-white/15 hover:border-[#d4af37]/40 bg-white/5 hover:bg-white/10 text-white text-xs font-medium flex items-center gap-2 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </main>
  );
}
