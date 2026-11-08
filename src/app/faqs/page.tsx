import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import SectionTransition from "@/components/SectionTransition";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | S Fvour Clinic Baramati",
  description:
    "Comprehensive clinical FAQ guide covering laser hair reduction, HydraFacial MD, acne scar subcision, chemical peels, trichology, appointments, and pre-care protocols at S Fvour Clinic Baramati.",
  alternates: {
    canonical: "https://sfvourclinic.com/faqs",
  },
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] dark:bg-[#0a0807] text-[#14100e] dark:text-[#f5f2eb] relative overflow-x-hidden transition-colors duration-500">
      {/* Navigation */}
      <Navbar />

      {/* Page Header with Breadcrumbs & Return to Home */}
      <div className="pt-28 sm:pt-32 pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-5">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#8c600a] dark:text-[#d4af37]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#14100e] dark:hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-[#8e8272] dark:text-[#6a5e52]">/</span>
            <span className="text-[#14100e] dark:text-white font-bold">Frequently Asked Questions</span>
          </nav>

          {/* Quick Return Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#d4af37]/20 border border-black/10 dark:border-white/10 text-[#14100e] dark:text-white transition-all shadow-sm group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#8c600a] dark:text-[#d4af37]" />
            <span>Back to Clinic</span>
          </Link>
        </div>
      </div>

      {/* Complete Interactive FAQ Section */}
      <FAQSection />

      {/* Cloud & River Mist into Footer */}
      <SectionTransition variant="zen-wave" flip />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar & Floating WhatsApp */}
      <FloatingWidgets />
    </main>
  );
}

