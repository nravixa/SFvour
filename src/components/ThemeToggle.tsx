"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  variant?: "circular" | "pill";
}

export default function ThemeToggle({
  className = "",
  variant = "circular",
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted ? theme === "light" : true;

  if (variant === "circular") {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`relative w-8 h-8 min-[390px]:w-9 min-[390px]:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 shrink-0 bg-white dark:bg-[#1a1512] border border-black/10 dark:border-white/10 hover:border-[#d4af37] text-[#1c1511] dark:text-[#f7e1b5] cursor-pointer ${className}`}
        title={isLight ? "Switch to Dark Mode" : "Switch to Bright Mode"}
        aria-label="Toggle Bright / Dark Mode"
      >
        {isLight ? (
          <Moon className="w-3.5 h-3.5 min-[390px]:w-4 min-[390px]:h-4 text-[#2d3748] dark:text-[#f5ecd8] hover:text-[#d4af37] transition-colors" />
        ) : (
          <Sun className="w-3.5 h-3.5 min-[390px]:w-4 min-[390px]:h-4 text-[#f59e0b] hover:text-[#fcd34d] transition-colors" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-sm hover:scale-105 active:scale-95 shrink-0 cursor-pointer ${
        isLight
          ? "bg-[#1c1511] text-[#f7e1b5] border border-[#d4af37]/60 hover:border-[#d4af37]"
          : "bg-[#f4efe6] text-[#1c1511] border border-[#c5a059]/50 hover:border-[#d4af37]"
      } ${className}`}
      title={isLight ? "Switch to Dark Mode" : "Switch to Bright Mode"}
      aria-label="Toggle Bright / Dark Mode"
    >
      {isLight ? (
        <>
          <Moon className="w-3.5 h-3.5 text-[#f7e1b5] shrink-0" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#f7e1b5]">
            Dark Mode
          </span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-[#b8860b] shrink-0" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#1c1511]">
            Bright Mode
          </span>
        </>
      )}
    </button>
  );
}

