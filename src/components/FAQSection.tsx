"use client";

import React, { useState, useEffect } from "react";
import { FAQS } from "@/data/clinicData";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/clinicData";
import { motion, AnimatePresence } from "motion/react";

// Typewriter component that streams the doctor's answer with a live blinking cursor
function TypewriterAnswer({ text, speed = 8 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsDone(false);

    let currentIndex = 0;
    // Step by 2-3 characters for longer clinical answers so the stream is smooth and swift
    const step = text.length > 200 ? 3 : 2;

    const interval = setInterval(() => {
      currentIndex += step;
      if (currentIndex >= text.length) {
        setDisplayedText(text);
        setIsDone(true);
        clearInterval(interval);
      } else {
        setDisplayedText(text.slice(0, currentIndex));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="faq-answer font-normal text-xs sm:text-sm text-[#4a3f35] dark:text-[#c5b8a6] leading-relaxed">
      {displayedText}
      {!isDone && (
        <span className="inline-block w-1.5 h-3.5 ml-1 bg-[#d4af37] animate-pulse align-middle" />
      )}
    </p>
  );
}

// Interactive Typewriter Prompter cycling through common client queries in the section header
function TypewriterHeaderPrompt({
  onSelectQuestion,
}: {
  onSelectQuestion: (index: number) => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQ = FAQS[questionIndex].question;
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedPrompt.length < currentQ.length) {
        timer = setTimeout(() => {
          setDisplayedPrompt(currentQ.slice(0, displayedPrompt.length + 1));
        }, 35);
      } else {
        // Hold full question for 2.4 seconds
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedPrompt.length > 0) {
        timer = setTimeout(() => {
          setDisplayedPrompt(currentQ.slice(0, Math.max(0, displayedPrompt.length - 3)));
        }, 18);
      } else {
        setIsDeleting(false);
        setQuestionIndex((prev) => (prev + 1) % FAQS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedPrompt, isDeleting, questionIndex]);

  return (
    <button
      type="button"
      onClick={() => onSelectQuestion(questionIndex)}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-white/[0.06] border border-black/10 dark:border-white/10 shadow-sm text-xs font-medium text-[#704808] dark:text-[#f3db9d] hover:border-[#d4af37] transition-all cursor-pointer group max-w-xl mx-auto"
      title="Click to view full medical answer"
    >
      <span className="font-bold text-[#8c600a] dark:text-[#d4af37] shrink-0 uppercase tracking-wider text-[10px]">
        Common Inquiry:
      </span>
      <span className="truncate text-[#14100e] dark:text-[#fbf8f3] font-serif text-xs">
        &ldquo;{displayedPrompt}&rdquo;
      </span>
      <span className="inline-block w-1.5 h-3 bg-[#d4af37] animate-pulse shrink-0" />
    </button>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleSelectFromPrompt = (idx: number) => {
    setOpenIdx(idx);
    const el = document.getElementById(`faq-item-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="faqs" className="py-24 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#0a0807] transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8c600a] dark:text-[#d4af37]">
            <HelpCircle className="w-4 h-4 text-[#d4af37]" />
            <span>Physician FAQ Knowledgebase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
            Clear Answers for Your <span className="gold-gradient-text">Aesthetic Journey</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995]">
            Everything you need to know about our treatments, laser safety, appointment booking, and clinic protocols.
          </p>

          {/* Dynamic Interactive Typewriter Inquiry Pill */}
          <div className="pt-2">
            <TypewriterHeaderPrompt onSelectQuestion={handleSelectFromPrompt} />
          </div>
        </div>

        {/* FAQs Accordion with Typewriter streaming answers */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl glass-card border transition-all duration-200 overflow-hidden bg-white dark:bg-[#14100e] shadow-sm hover:shadow-md ${
                  isOpen
                    ? "border-[#d4af37]/60 shadow-lg shadow-[#d4af37]/05 ring-1 ring-[#d4af37]/20"
                    : "border-black/10 dark:border-white/10 hover:border-[#b8860b]/45 dark:hover:border-[#d4af37]/45"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-extrabold text-[#8c600a] dark:text-[#d4af37] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="faq-question font-serif text-base sm:text-lg font-bold text-[#14100e] dark:text-[#fbf8f3] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-colors shrink-0 ${
                      isOpen
                        ? "bg-[#d4af37] text-black border-[#d4af37]"
                        : "bg-[#ede7dc] dark:bg-white/10 text-[#704808] dark:text-[#d4af37]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-black/5 dark:border-white/5 pl-11">
                        <TypewriterAnswer text={faq.answer} speed={8} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Ask Question on WhatsApp prompt */}
        <div className="mt-10 p-6 rounded-2xl border border-black/10 dark:border-[#d4af37]/35 glass-card bg-white dark:bg-[#161210] text-center space-y-3 shadow-md">
          <p className="text-sm font-bold text-[#14100e] dark:text-white">
            Have a specific skin concern or question not answered here?
          </p>
          <a
            href={buildWhatsAppLink({
              message: "I have a specific question regarding treatment at S Fvour Clinic.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-wa-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14100e] hover:bg-black text-[#f7e1b5] dark:bg-white/10 dark:hover:bg-white/20 border border-[#b8860b]/40 dark:border-white/20 text-xs font-bold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25d366]" />
            <span>Ask Clinical Coordinator Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
