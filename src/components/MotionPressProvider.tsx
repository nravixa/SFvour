"use client";

import React, { useEffect } from "react";
import { animate, press } from "motion";

export default function MotionPressProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const attachedElements = new WeakSet<Element>();
    const cleanups: (() => void)[] = [];

    const INTERACTIVE_SELECTOR =
      "button, a[href], [role='button'], .cursor-pointer, input[type='submit'], input[type='button'], summary, .press-box, .press-target";

    const attachPress = () => {
      try {
        const elements = document.querySelectorAll<HTMLElement>(INTERACTIVE_SELECTOR);

        elements.forEach((el) => {
          if (attachedElements.has(el)) return;
          if (el.hasAttribute("disabled") || el.getAttribute("aria-disabled") === "true") return;

          attachedElements.add(el);

          try {
            const unbind = press(el, () => {
              const rect = el.getBoundingClientRect();
              let targetScale = 0.92;

              // Small icon buttons / badges get 0.8 scale matching exact user snippet
              if (rect.width <= 48 || el.classList.contains("press-box")) {
                targetScale = 0.8;
              } else if (rect.width >= 280) {
                targetScale = 0.97;
              } else {
                targetScale = 0.92;
              }

              // Spring press-down matching user parameters: { type: "spring", stiffness: 1000 }
              animate(
                el,
                { scale: targetScale },
                { type: "spring", stiffness: 1000 }
              );

              // Spring release matching user parameters: { type: "spring", stiffness: 500 }
              return () => {
                animate(
                  el,
                  { scale: 1 },
                  { type: "spring", stiffness: 500 }
                );
              };
            });

            cleanups.push(unbind);
          } catch {
            // Ignore any unbindable node
          }
        });
      } catch {
        // Ignore selector errors
      }
    };

    // Initial attach across all interactive elements
    attachPress();

    // Observe newly rendered dynamic elements (side cart, modals, dropdowns, dynamic filters)
    const observer = new MutationObserver(() => {
      attachPress();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => {
        try {
          cleanup();
        } catch {}
      });
    };
  }, []);

  return <>{children}</>;
}

