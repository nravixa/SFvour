"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import {
  Phone,
  Bell,
  MessageSquare,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { InstagramIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import BrandLogo from "./BrandLogo";
import { useSmoothScroll } from "./SmoothScrollProvider";

const NAV_LINKS = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Pillars", href: "#pillars", id: "pillars" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Doctors", href: "#doctors", id: "doctors" },
  { label: "Ambience", href: "#ambience", id: "ambience" },
  { label: "Products", href: "#products", id: "products" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Location", href: "#location", id: "location" },
  { label: "FAQs", href: "/faqs", id: "faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(pathname === "/faqs" ? "faqs" : "hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  // Follow-through scroll tracking (Scroll-Spy)
  useEffect(() => {
    if (pathname === "/faqs") {
      setActiveSection("faqs");
      const handleFaqsScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleFaqsScroll, { passive: true });
      handleFaqsScroll();
      return () => window.removeEventListener("scroll", handleFaqsScroll);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Track active section as user scrolls through the page
      const sectionElements = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      const scrollPosition = scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.el) {
          const top = section.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Smooth Lenis inertial scroll with offset for floating navbar & cross-page routing
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Direct routing to /faqs
    if (href === "/faqs") {
      if (pathname === "/faqs") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/faqs");
      }
      return;
    }

    // Anchor hash link (#hero, #services, #booking, etc.)
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (pathname === "/") {
        const element = document.getElementById(targetId);
        if (element) {
          scrollTo(element, -90);
        }
      } else {
        router.push("/" + href);
      }
      return;
    }

    router.push(href);
  };

  return (
    <>
      {/* Floating Navbar Container: Completely transparent, no background, no border */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4">
        <header className="pointer-events-auto max-w-7xl mx-auto transition-all duration-300 relative flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4 py-2 bg-transparent border-0 shadow-none">
          {/* Left: Brand Logo Lockup matching ArtVista reference */}
          <BrandLogo isScrolled={isScrolled} onClick={(e) => handleNavClick(e, "#hero")} />

          {/* Center: Navigation Track with Embedded Circular Theme Toggle (Exact Match to Reference Screenshot) */}
          <div className="hidden lg:flex items-center gap-1 nav-track bg-[#efede8]/90 dark:bg-white/[0.08] p-1 rounded-full border border-black/[0.06] dark:border-white/[0.1] shadow-sm backdrop-blur-md">
            <nav className="flex items-center gap-0.5 text-xs font-medium">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;
                // On lg (1024px - 1279px), show top 5 core links to ensure comfortable spacing
                const isSecondary = idx === 4 || idx === 5 || idx === 7;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSecondary ? "hidden xl:inline-block" : ""
                    } ${
                      isActive
                        ? "nav-active bg-[#161210] text-white dark:bg-[#d4af37] dark:text-black font-bold shadow-sm"
                        : "text-[#4a3f35] dark:text-[#c9bfae] hover:text-black dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Circular Theme Toggle embedded at the right end of the nav capsule */}
            <ThemeToggle variant="circular" className="ml-0.5" />
          </div>

          {/* Right Action Icons (3 Circular Buttons: Bell, WhatsApp, Phone - Exact Match to Screenshot) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* 1. Offers & Consultation Booking Bell */}
            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1512] border border-black/10 dark:border-white/10 hover:border-[#d4af37] flex items-center justify-center text-[#1c1511] dark:text-[#f5ecd8] hover:text-[#d4af37] shadow-sm hover:scale-105 active:scale-95 transition-all"
              title="Special Offers & Appointment Booking"
              aria-label="Offers and Appointment Booking"
            >
              <Bell className="w-4 h-4 text-[#2b221a] dark:text-[#f5ecd8]" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#d4af37] ring-2 ring-white dark:ring-[#1a1512] animate-pulse" />
            </a>

            {/* 2. Direct WhatsApp Message Bubble */}
            <a
              href={buildWhatsAppLink({})}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1512] border border-black/10 dark:border-white/10 hover:border-[#25d366] flex items-center justify-center text-[#25d366] hover:bg-[#25d366]/10 shadow-sm hover:scale-105 active:scale-95 transition-all"
              title="Chat with Clinical Coordinator on WhatsApp"
              aria-label="Chat with Clinical Coordinator on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#25d366]" />
            </a>

            {/* 3. Direct Phone Call */}
            <a
              href={`tel:${CLINIC_INFO.phoneDigits}`}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1512] border border-black/10 dark:border-white/10 hover:border-[#d4af37] flex items-center justify-center text-[#1c1511] dark:text-[#f5ecd8] hover:text-[#d4af37] hover:bg-[#d4af37]/10 shadow-sm hover:scale-105 active:scale-95 transition-all"
              title={`Call Reception: ${CLINIC_INFO.phonePrimary}`}
              aria-label="Call Reception"
            >
              <Phone className="w-4 h-4 text-[#2b221a] dark:text-[#f5ecd8]" />
            </a>

            {/* Mobile View: Theme Toggle + Menu Button */}
            <div className="flex lg:hidden items-center gap-1.5 ml-0.5">
              <ThemeToggle variant="circular" />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-full bg-white dark:bg-[#1a1512] border border-black/10 dark:border-white/10 text-[#1c1511] dark:text-[#f5ecd8] hover:text-[#d4af37] flex items-center justify-center shadow-sm cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#faf7f2]/98 dark:bg-black/95 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-6 duration-200">
          <div className="space-y-4">
            <div className="pb-4 border-b border-black/10 dark:border-[#d4af37]/20 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8c600a] dark:text-[#d4af37] font-bold">
                  S Fvour Navigation
                </span>
                <p className="text-xs text-[#52473c] dark:text-[#a3947c] mt-0.5">
                  Cosmetology & Aesthetic Skin Hub by M Scissors
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle variant="circular" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between text-sm py-2.5 px-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#14100e] text-white dark:bg-[#d4af37]/20 dark:text-[#f7e1b5] font-bold border border-black/10 dark:border-[#d4af37]/40 shadow-sm"
                        : "text-[#3d3227] dark:text-[#dcd1be] hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#8c600a] dark:text-[#d4af37]/60" />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 space-y-3 border-t border-black/10 dark:border-white/10">
            <a
              href={`tel:${CLINIC_INFO.phoneDigits}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#14100e] dark:text-white font-medium text-xs hover:border-[#d4af37]"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c600a] dark:text-[#d4af37]" />
              Direct Reception: {CLINIC_INFO.phonePrimary}
            </a>
            <a
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#ede7dc] dark:bg-white/5 border border-black/10 dark:border-white/10 text-[#704808] dark:text-[#f7e1b5] text-xs font-semibold"
            >
              📍 Subhadra Mall, Baramati MIDC (Google Maps)
            </a>

            <a
              href={buildWhatsAppLink({})}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black font-bold text-sm shadow-xl shadow-[#d4af37]/30"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Book Consultation on WhatsApp
            </a>

            <div className="text-center pt-1">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8c600a] dark:text-[#d4af37] hover:underline inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                Follow {CLINIC_INFO.instagramHandle} on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
