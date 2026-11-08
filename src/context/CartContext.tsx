"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ProductItem, CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  ShieldCheck,
  Truck,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: ProductItem, quantity?: number) => void;
  updateQuantity: (productId: string, delta: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  cartTotal: number;
  checkoutWhatsAppUrl: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("sfvour_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("sfvour_cart", JSON.stringify(cart));
      } catch {
        // ignore
      }
    }
  }, [cart, mounted]);

  const addToCart = (product: ProductItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const totalItemsCount = cart.reduce((c, i) => c + i.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const checkoutWhatsAppUrl = () => {
    if (cart.length === 0) return buildWhatsAppLink({});
    const itemsList = cart
      .map(
        (item) => `• ${item.product.name} (Qty: ${item.quantity}) — ₹${item.product.price * item.quantity}`
      )
      .join("\n");
    const text = `Hello S Fvour Clinic Baramati,\n\nI would like to order the following clinical skincare formulations:\n\n${itemsList}\n\n• Subtotal: ₹${cartTotal}\n• Delivery: Baramati MIDC / Pune\n\nPlease confirm product availability and payment instructions.\n\nThank you!`;
    return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        cartTotal,
        checkoutWhatsAppUrl,
      }}
    >
      {children}

      {/* Global Slide-In Aesthetic Bag Drawer */}
      {mounted &&
        isCartOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex justify-end transition-all"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsCartOpen(false);
            }}
          >
            <div className="aesthetic-cart-drawer border-l border-black/10 dark:border-white/10 w-full max-w-md h-full flex flex-col justify-between animate-in slide-in-from-right duration-300 relative z-10 shadow-2xl overflow-hidden bg-[#faf7f2] dark:bg-[#110e0c]">
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-black/[0.08] dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#aa8021]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#8c600a] dark:text-[#d4af37] shadow-sm">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
                          Aesthetic Bag
                        </h3>
                        {totalItemsCount > 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[10px] font-bold text-[#8c600a] dark:text-[#f3db9d]">
                            {totalItemsCount} {totalItemsCount === 1 ? "Item" : "Items"}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#52473c] dark:text-[#baa995] font-medium mt-0.5">
                        Baramati MIDC Clinical Dispensing
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#14100e] dark:text-white flex items-center justify-center transition-colors cursor-pointer group"
                    aria-label="Close cart"
                    title="Close Cart (Esc)"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                  </button>
                </div>

                {/* Free Delivery Ribbon */}
                <div className="mt-3.5 py-1.5 px-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/20 flex items-center gap-2 text-[11px] text-[#1c8c43] dark:text-[#25d366] font-medium">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Complimentary Doorstep Delivery across Baramati & Pune</span>
                </div>
              </div>

              {/* Scrollable Products List */}
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3.5">
                {cart.length === 0 ? (
                  <div className="text-center py-20 px-4 space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-3xl bg-[#d4af37]/10 border border-[#d4af37]/25 flex items-center justify-center text-[#8c600a] dark:text-[#d4af37]">
                      <ShoppingBag className="w-7 h-7 opacity-75" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold text-[#14100e] dark:text-[#fbf8f3]">
                        Your aesthetic bag is empty
                      </p>
                      <p className="text-xs text-[#52473c] dark:text-[#baa995] max-w-xs mx-auto leading-relaxed">
                        Explore physician-formulated active skincare serums, sunscreens, and trichology scalp tonics.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8021] text-[#14100e] font-extrabold text-xs shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Discover Clinical Formulations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  cart.map(({ product, quantity }) => (
                    <div
                      key={product.id}
                      className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-[#1a1614] border border-black/[0.07] dark:border-white/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-none hover:border-[#d4af37]/40 transition-all"
                    >
                      {/* Product Thumbnail */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-black/5 dark:border-white/10 bg-[#1c1815]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Details & Controls */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8c600a] dark:text-[#d4af37]">
                          {product.category} • {product.volume}
                        </span>

                        <h4 className="text-xs font-bold text-[#14100e] dark:text-white truncate mt-0.5 leading-snug">
                          {product.name}
                        </h4>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-extrabold text-[#8c600a] dark:text-[#f3db9d]">
                            ₹{product.price * quantity}
                          </span>
                          {quantity > 1 && (
                            <span className="text-[10px] text-[#7d6f5f] dark:text-[#8e8272]">
                              (₹{product.price} each)
                            </span>
                          )}
                        </div>

                        {/* Stepper Quantity Pill */}
                        <div className="flex items-center gap-3 mt-2.5">
                          <div className="inline-flex items-center rounded-lg bg-[#f2eee6] dark:bg-white/[0.08] border border-black/[0.05] dark:border-white/[0.05] p-0.5">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="w-6 h-6 rounded-md hover:bg-black/10 dark:hover:bg-white/15 text-[#14100e] dark:text-white flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-extrabold text-[#14100e] dark:text-white px-2.5">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="w-6 h-6 rounded-md hover:bg-black/10 dark:hover:bg-white/15 text-[#14100e] dark:text-white flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-1.5 rounded-lg text-[#8e8272] hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                            title="Remove item"
                            aria-label={`Remove ${product.name}`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Checkout Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-black/[0.08] dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-sm space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#52473c] dark:text-[#baa995]">
                      <span>Items Subtotal</span>
                      <span className="font-semibold text-[#14100e] dark:text-white">₹{cartTotal}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#52473c] dark:text-[#baa995]">
                      <span className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-[#25d366]" />
                        <span>Doorstep Delivery</span>
                      </span>
                      <span className="font-bold text-[#25d366]">FREE</span>
                    </div>

                    <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-[#14100e] dark:text-white">
                        Total Payable
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-[#8c600a] dark:text-[#f7e1b5]">
                        ₹{cartTotal}
                      </span>
                    </div>
                  </div>

                  <a
                    href={checkoutWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3db9d] to-[#aa8021] text-[#14100e] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#14100e] text-[#14100e]" />
                    <span>Proceed to WhatsApp Checkout</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-[#7d6f5f] dark:text-[#8e8272] pt-1 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#8c600a] dark:text-[#d4af37]" />
                      Doctor Prescribed
                    </span>
                    <span>•</span>
                    <span>100% Genuine</span>
                    <span>•</span>
                    <span>Baramati MIDC Dispatch</span>
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </CartContext.Provider>
  );
}

