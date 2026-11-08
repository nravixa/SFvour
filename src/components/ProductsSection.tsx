"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PRODUCTS, buildWhatsAppLink, ProductItem } from "@/data/clinicData";
import { useCart } from "@/context/CartContext";
import TiltCard from "./TiltCard";
import {
  ShoppingBag,
  Star,
  MessageCircle,
  X,
} from "lucide-react";

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll, listen to Escape key when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <section
      id="products"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#d4af37]/07 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
            Clinical <span className="gold-gradient-text">Skincare & Haircare</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995]">
            Formulated by aesthetic dermatologists. Medical actives prescribed to prolong clinic treatment results at home. Order online with direct doorstep delivery across Baramati & Pune.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <TiltCard key={prod.id} maxTilt={6} perspective={900}>
              <div className="h-full rounded-2xl glass-card border border-black/10 dark:border-white/10 hover:border-[#b8860b]/45 dark:hover:border-[#d4af37]/45 transition-[border-color,box-shadow,background-color] duration-300 flex flex-col justify-between overflow-hidden group bg-white dark:bg-[#14100e]/85 shadow-lg dark:shadow-none">
                {/* Product Image */}
                <div 
                  onClick={() => setSelectedProduct(prod)}
                  className="relative aspect-square w-full overflow-hidden bg-[#1a1512] cursor-pointer"
                  title={`View details for ${prod.name}`}
                >
                  <Image
                    src={prod.image}
                    alt={`${prod.name} - S Fvour Clinic`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14100e]/80 via-transparent to-transparent pointer-events-none" />

                  {/* High-Contrast Luxury Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#14110f]/95 backdrop-blur-md border border-black/15 dark:border-[#d4af37]/40 shadow-sm flex items-center gap-1.5 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#14100e] dark:text-[#f7e1b5]">
                      {prod.category}
                    </span>
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#665a4e] dark:text-[#cfc3b0] tracking-wide uppercase text-[11px]">
                        {prod.volume}
                      </span>
                      <div className="flex items-center gap-1 text-[#8c600a] dark:text-[#f3db9d] font-bold bg-[#8c600a]/10 dark:bg-[#d4af37]/15 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-[#8c600a] dark:fill-[#d4af37] text-[#8c600a] dark:text-[#d4af37]" />
                        <span>{prod.rating}</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => setSelectedProduct(prod)}
                      className="font-extrabold text-base sm:text-[17px] text-[#14100e] dark:text-white line-clamp-2 leading-snug tracking-tight group-hover:text-[#8c600a] dark:group-hover:text-[#d4af37] transition-colors cursor-pointer"
                      title={prod.name}
                    >
                      {prod.name}
                    </h3>

                    <p className="text-xs text-[#4a3f35] dark:text-[#cfc3b0] leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/5 dark:border-white/5 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#786b5d] dark:text-[#a89b8a]">Price</span>
                      <span className="text-xl font-extrabold text-[#14100e] dark:text-[#f7e1b5]">
                        ₹{prod.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(prod)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#ede7dc] hover:bg-[#d4af37] text-[#14100e] hover:text-black dark:bg-white/5 dark:hover:bg-[#d4af37] dark:text-[#f5ecd8] dark:hover:text-black border border-black/10 dark:border-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>

                      <a
                        href={buildWhatsAppLink({ productName: prod.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black hover:opacity-90 flex items-center justify-center transition-opacity cursor-pointer shadow-sm"
                        title="Order Directly via WhatsApp"
                        aria-label="Order Directly via WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-black" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* =========================================================================
          Quick View Modal (Portaled directly to document.body with z-[9999])
          ========================================================================= */}
      {mounted &&
        selectedProduct &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProduct(null);
            }}
          >
            <div className="bg-[#faf8f5] dark:bg-[#14100e] border border-black/10 dark:border-[#d4af37]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden shadow-2xl space-y-5">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-[#52473c] hover:text-[#14100e] dark:text-[#baa995] dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex gap-4 items-center">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-black/10 dark:border-white/10 bg-[#1c1815]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37] font-semibold">
                    {selectedProduct.category} • {selectedProduct.volume}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#14100e] dark:text-white mt-0.5">
                    {selectedProduct.name}
                  </h3>
                  <div className="text-xl font-bold text-[#8c600a] dark:text-[#f7e1b5] mt-1">
                    ₹{selectedProduct.price}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4a3f35] dark:text-[#baa995] leading-relaxed">
                {selectedProduct.description}
              </p>

              <div>
                <span className="text-xs font-bold text-[#14100e] dark:text-white block mb-2">
                  Clinical Actives:
                </span>
                <div className="flex wrap gap-2">
                  {selectedProduct.keyIngredients.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#ede7dc] dark:bg-[#d4af37]/15 border border-[#8c600a]/20 dark:border-[#d4af37]/30 text-[#704808] dark:text-[#f3db9d] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="flex-1 py-3.5 px-4 rounded-xl border border-black/15 dark:border-white/20 hover:border-[#8c600a] dark:hover:border-[#d4af37] text-xs font-bold text-[#14100e] dark:text-white transition-colors cursor-pointer"
                >
                  Add to Aesthetic Bag
                </button>
                <a
                  href={buildWhatsAppLink({ productName: selectedProduct.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
