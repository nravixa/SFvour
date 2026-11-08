import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AmbienceGallery from "@/components/AmbienceGallery";
import LeadFormSection from "@/components/LeadFormSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationAndContact from "@/components/LocationAndContact";
import SectionTransition from "@/components/SectionTransition";
import FloatingWidgets from "@/components/FloatingWidgets";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0908] text-[#f5f2eb] relative overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-20 opacity-30" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* 4 Pillars from Card */}
      <PillarsSection />

      {/* Section Transition: Billowing Cloud Mist */}
      <SectionTransition variant="cloud" />

      {/* All 9 Clinical Services */}
      <ServicesSection />

      {/* Section Transition: Camera Bokeh & Multi-Stage Blur */}
      <SectionTransition variant="blur" />

      {/* 2 Doctor Consultation Profiles (Specialists & Surgeons) */}
      <DoctorsSection />

      {/* Section Transition: Zen Curvilinear Wave with Champagne Crest */}
      <SectionTransition variant="zen-wave" />

      {/* Clinic Ambience & Custom Business Credential */}
      <AmbienceGallery />

      {/* Section Transition: Luminous Sunbeam & Golden Ambient Fog */}
      <SectionTransition variant="luminous-fog" />

      {/* Lead Generation & WhatsApp Consultation Form */}
      <LeadFormSection />

      {/* Section Transition: Frosted Apothecary Crystal Mist */}
      <SectionTransition variant="frosted-haze" />

      {/* Clinical Skincare & Haircare Products */}
      <ProductsSection />

      {/* Section Transition: Haute-Couture Silk & Smoky Obsidian Veil */}
      <SectionTransition variant="smoke-veil" />

      {/* Client Feedback */}
      <TestimonialsSection />

      {/* Section Transition: Dreamy Cloud Mist Haze */}
      <SectionTransition variant="cloud" flip />

      {/* Baramati Location & Contact */}
      <LocationAndContact />

      {/* Section Transition: Zen Wave Mist into Porcelain River Footer */}
      <SectionTransition variant="zen-wave" flip />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar & Floating WhatsApp */}
      <FloatingWidgets />
    </main>
  );
}
