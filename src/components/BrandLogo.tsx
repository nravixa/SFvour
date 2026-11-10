"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface BrandLogoProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  size?: "default" | "large";
  isScrolled?: boolean;
}

export default function BrandLogo({
  className = "",
  onClick,
  size = "default",
  isScrolled = true,
}: BrandLogoProps) {
  const isLarge = size === "large";

  return (
    <Link
      href="#hero"
      onClick={onClick}
      className={`flex items-center gap-1.5 min-[360px]:gap-2.5 sm:gap-3 group shrink-0 select-none ${className}`}
      aria-label="S Fvour - Home"
    >
      {/* Circular Gold Medallion Icon (Exact match to ArtVista reference style) */}
      <div
        className={`relative shrink-0 ${
          isLarge ? "w-11 h-11 sm:w-12 sm:h-12" : "w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-9.5 sm:h-9.5"
        } rounded-full bg-gradient-to-br from-[#ebd3a8] via-[#c5a059] to-[#9e771b] shadow-sm flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105`}
      >
        {/* Bold geometric modern 'S' glyph with Motion pathLength drawing */}
        <svg
          width={isLarge ? "22" : "16"}
          height={isLarge ? "22" : "16"}
          viewBox="0 0 100 100"
          className="min-[360px]:w-[18px] min-[360px]:h-[18px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M68 28H42C34.268 28 28 34.268 28 42C28 49.732 34.268 56 42 56H58C65.732 56 72 62.268 72 70C72 77.732 65.732 84 58 84H30"
            stroke="#14100e"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>

      {/* Brand Name: Clean, Bold, Single Line (Exact match to 'ArtVista' style) */}
      <span
        className={`font-sans font-extrabold ${
          isLarge ? "text-2xl sm:text-3xl" : "text-base min-[360px]:text-lg sm:text-xl"
        } tracking-tight transition-colors leading-none ${
          isScrolled
            ? "text-[#14100e] dark:text-white group-hover:text-[#8c600a] dark:group-hover:text-[#f3db9d]"
            : "text-white group-hover:text-[#f3db9d] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        }`}
      >
        S Fvour
      </span>
    </Link>
  );
}

