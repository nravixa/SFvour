"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { animate, inView, scroll, stagger } from "motion";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement | number, offset?: number) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    // -------------------------------------------------------------
    // Initialize Lenis with ultra-smooth velvety glide
    // -------------------------------------------------------------
    const lenis = new Lenis({
      duration: 1.6, // Longer glide duration for buttery luxury feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.88, // Gentle response, eliminates sudden jumps
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // -------------------------------------------------------------
    // Always land on Hero section on page load or refresh
    // -------------------------------------------------------------
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    }

    const resetToHero = () => {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    };

    requestAnimationFrame(resetToHero);
    window.addEventListener("load", resetToHero);

    const handleBeforeUnload = () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // -------------------------------------------------------------
    // Native High-Performance RAF Loop for Lenis (Zero GSAP overhead)
    // -------------------------------------------------------------
    let rafId: number;
    const updateRaf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(updateRaf);
    };
    rafId = requestAnimationFrame(updateRaf);

    const NAVBAR_OFFSET = 72;

    // Global smooth anchor click interception for all #hash links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          isAutoScrollingRef.current = true;
          lenis.scrollTo(targetElement, {
            offset: -NAVBAR_OFFSET,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            onComplete: () => {
              setTimeout(() => {
                isAutoScrollingRef.current = false;
              }, 100);
            },
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // -------------------------------------------------------------
    // Motion (motion.dev) Hardware-Accelerated Animation System
    // Luxuriously tuned with Apple/Aesop custom curve: [0.16, 1, 0.3, 1]
    // -------------------------------------------------------------
    const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

    // 1. Hero Entrance Timeline with Motion
    const heroH1 = document.querySelector("#hero h1");
    if (heroH1) {
      animate(
        heroH1,
        { opacity: [0, 1], transform: ["translateY(36px)", "translateY(0px)"] },
        { duration: 1.0, delay: 0.15, ease: LUXURY_EASE }
      );
    }

    const heroP = document.querySelector("#hero p");
    if (heroP) {
      animate(
        heroP,
        { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
        { duration: 0.85, delay: 0.35, ease: LUXURY_EASE }
      );
    }

    const heroButtons = document.querySelectorAll("#hero a");
    if (heroButtons.length > 0) {
      animate(
        heroButtons,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
        { duration: 0.75, delay: stagger(0.12, { startDelay: 0.55 }), ease: LUXURY_EASE }
      );
    }

    // 2. Pegasus Clinic Section Transitions with Motion inView
    const sectionsToAnimate = [
      "#pillars",
      "#services",
      "#doctors",
      "#ambience",
      "#booking",
      "#products",
      "#reviews",
      "#location",
      "#faqs",
    ];

    let stopSectionsInView: (() => void) | null = null;
    try {
      stopSectionsInView = inView(
        sectionsToAnimate.join(", "),
        (element) => {
          animate(
            element,
            { opacity: [0.85, 1], transform: ["translateY(28px)", "translateY(0px)"] },
            { duration: 0.85, ease: LUXURY_EASE }
          );
        },
        { margin: "0px 0px -10% 0px", amount: 0.08 }
      );
    } catch {
      // In SSR or unmounted edge cases, silently fallback
    }

    // 3. Section Headers Reveal with Motion inView
    let stopHeadersInView: (() => void) | null = null;
    try {
      stopHeadersInView = inView(
        "section .text-center",
        (element) => {
          animate(
            element,
            { opacity: [0, 1], transform: ["translateY(28px)", "translateY(0px)"] },
            { duration: 0.75, ease: LUXURY_EASE }
          );
        },
        { margin: "0px 0px -10% 0px", amount: 0.15 }
      );
    } catch {
      // fallback
    }

    // 4. Staggered Service Cards with Motion
    let stopServicesInView: (() => void) | null = null;
    try {
      stopServicesInView = inView(
        "#services",
        () => {
          const cards = document.querySelectorAll("#services .glass-card");
          if (cards.length > 0) {
            animate(
              cards,
              { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
              { delay: stagger(0.06), duration: 0.6, ease: LUXURY_EASE }
            );
          }
        },
        { margin: "0px 0px -8% 0px" }
      );
    } catch {
      // fallback
    }

    // 5. Staggered Pillars with Motion
    let stopPillarsInView: (() => void) | null = null;
    try {
      stopPillarsInView = inView(
        "#pillars",
        () => {
          const cards = document.querySelectorAll("#pillars .glass-card");
          if (cards.length > 0) {
            animate(
              cards,
              { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
              { delay: stagger(0.06), duration: 0.6, ease: LUXURY_EASE }
            );
          }
        },
        { margin: "0px 0px -8% 0px" }
      );
    } catch {
      // fallback
    }

    // 6. Staggered Products with Motion
    let stopProductsInView: (() => void) | null = null;
    try {
      stopProductsInView = inView(
        "#products",
        () => {
          const cards = document.querySelectorAll("#products .glass-card");
          if (cards.length > 0) {
            animate(
              cards,
              { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
              { delay: stagger(0.06), duration: 0.6, ease: LUXURY_EASE }
            );
          }
        },
        { margin: "0px 0px -8% 0px" }
      );
    } catch {
      // fallback
    }

    // 7. Staggered Testimonials with Motion
    let stopReviewsInView: (() => void) | null = null;
    try {
      stopReviewsInView = inView(
        "#reviews",
        () => {
          const cards = document.querySelectorAll("#reviews .glass-card");
          if (cards.length > 0) {
            animate(
              cards,
              { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] },
              { delay: stagger(0.06), duration: 0.6, ease: LUXURY_EASE }
            );
          }
        },
        { margin: "0px 0px -8% 0px" }
      );
    } catch {
      // fallback
    }

    // 8. Booking Form Reveal with Motion
    let stopBookingInView: (() => void) | null = null;
    try {
      stopBookingInView = inView(
        "#booking form",
        (element) => {
          animate(
            element,
            { opacity: [0, 1], transform: ["translateY(28px)", "translateY(0px)"] },
            { duration: 0.75, ease: LUXURY_EASE }
          );
        },
        { margin: "0px 0px -10% 0px" }
      );
    } catch {
      // fallback
    }

    // -------------------------------------------------------------
    // Motion Scroll-Driven Hardware-Accelerated Hero Parallax
    // (Compositor-driven WAAPI scroll linked to viewport)
    // -------------------------------------------------------------
    let stopHeroParallax: (() => void) | null = null;
    const heroEl = document.getElementById("hero");
    const heroImg = document.querySelector("#hero img");
    if (heroEl && heroImg) {
      stopHeroParallax = scroll(
        (progress) => {
          const y = progress * 75;
          const s = 1 + progress * 0.04;
          (heroImg as HTMLElement).style.transform = `translate3d(0, ${y}px, 0) scale(${s})`;
        },
        { target: heroEl, offset: ["start start", "end start"] }
      );
    }

    return () => {
      cancelAnimationFrame(rafId);
      if (stopHeroParallax) stopHeroParallax();
      if (stopSectionsInView) stopSectionsInView();
      if (stopHeadersInView) stopHeadersInView();
      if (stopServicesInView) stopServicesInView();
      if (stopPillarsInView) stopPillarsInView();
      if (stopProductsInView) stopProductsInView();
      if (stopReviewsInView) stopReviewsInView();
      if (stopBookingInView) stopBookingInView();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("load", resetToHero);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement | number, offset: number = -72) => {
    if (lenisRef.current) {
      isAutoScrollingRef.current = true;
      lenisRef.current.scrollTo(target, {
        offset,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          setTimeout(() => {
            isAutoScrollingRef.current = false;
          }, 100);
        },
      });
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
