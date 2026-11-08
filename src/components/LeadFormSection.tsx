"use client";

import React, { useState } from "react";
import { CLINIC_INFO, buildWhatsAppLink } from "@/data/clinicData";
import {
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle2,
  Phone,
  User,
  HelpCircle,
  Send,
  ExternalLink,
} from "lucide-react";

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Skin Aesthetics & Cosmetology",
    date: "",
    time: "Morning (10:00 AM - 1:00 PM)",
    concerns: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const servicesList = [
    "Skin Aesthetics & Cosmetology (HydraFacial, Peels)",
    "Trichology & Hair Restoration (PRP, Hair Fall)",
    "Painless Triple-Wavelength Laser Hair Reduction",
    "Bridal & HD Glamour Artistry (Airbrush, Pre-wedding)",
    "Nail Sculpting & Couture Art (Extensions, Gel)",
    "Clinical Nutrition & Glow Wellness (Acne/PCOS Diet)",
    "Therapeutic Spa & Holistic Detox (Body Polish)",
    "Semi-Permanent Makeup & Microblading (Brows, Lips)",
    "Body Contouring & Non-Surgical Slimming Clinic",
    "Comprehensive Full Aesthetic Package Consultation",
  ];

  const timeSlots = [
    "Morning (10:00 AM – 1:00 PM)",
    "Afternoon (1:00 PM – 4:00 PM)",
    "Evening (4:00 PM – 7:00 PM)",
    "Night (7:00 PM – 9:00 PM)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and contact number.");
      return;
    }

    const composedDate = `${formData.date || "Next Available"} during ${formData.time}`;
    const waUrl = buildWhatsAppLink({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: composedDate,
      message: formData.concerns,
    });

    setLastWhatsAppUrl(waUrl);
    setSubmitted(true);

    // Launch WhatsApp directly
    window.open(waUrl, "_blank");
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-[#f8f6f0] dark:bg-[#0c0a09] transition-colors duration-300">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14100e] dark:text-white tracking-tight">
            Book an <span className="gold-gradient-text">Aesthetic Consultation</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a3f35] dark:text-[#baa995]">
            Fill your details below. Your customized request will format instantly into WhatsApp and connect you directly with our senior clinical coordinator.
          </p>
        </div>

        {/* Lead Form Container */}
        <div className="rounded-3xl p-6 sm:p-10 border border-black/10 dark:border-[#d4af37]/35 bg-white dark:bg-[#14100e]/90 backdrop-blur-2xl shadow-2xl relative text-[#1c1511] dark:text-white">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1511] dark:text-white">
                Booking Details Prepared in WhatsApp
              </h3>

              <p className="text-sm text-[#52473c] dark:text-[#c5b8a6] max-w-lg mx-auto">
                Thank you <strong className="text-[#1c1511] dark:text-white">{formData.name}</strong>. If WhatsApp did not open automatically, click the button below to send your consultation request.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={lastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1fb857] text-black font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#25d366]/25 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Open WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 rounded-full border border-black/15 dark:border-white/20 hover:border-black/30 dark:hover:border-white/40 text-xs font-semibold text-[#1c1511] dark:text-[#f5ecd8] transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>

              <div className="pt-4 text-xs text-[#7d6f5f] dark:text-[#8e8272]">
                Prefer calling directly?{" "}
                <a
                  href={`tel:${CLINIC_INFO.phoneDigits}`}
                  className="text-[#b8860b] dark:text-[#d4af37] underline font-bold"
                >
                  {CLINIC_INFO.phonePrimary}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#b8860b] dark:text-[#d4af37]" />
                    Full Name <span className="text-[#b8860b] dark:text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[#1c1511] dark:text-white text-sm placeholder:text-[#786b5e] dark:placeholder:text-[#a89d8f] outline-none transition-all shadow-inner font-medium"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#b8860b] dark:text-[#d4af37]" />
                    WhatsApp Number <span className="text-[#b8860b] dark:text-[#d4af37]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-[#1c1511] dark:text-white text-sm placeholder:text-[#786b5e] dark:placeholder:text-[#a89d8f] outline-none transition-all shadow-inner font-medium"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5 text-left sm:col-span-2">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b] dark:bg-[#d4af37]" />
                    Select Desired Treatment / Division
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] text-[#1c1511] dark:text-white text-sm outline-none transition-all cursor-pointer shadow-inner font-medium"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={idx} value={srv} className="bg-white dark:bg-[#14100e] text-[#1c1511] dark:text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#b8860b] dark:text-[#d4af37]" />
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] text-[#1c1511] dark:text-white text-sm outline-none transition-all shadow-inner font-medium"
                  />
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#b8860b] dark:text-[#d4af37]" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] text-[#1c1511] dark:text-white text-sm outline-none transition-all cursor-pointer shadow-inner font-medium"
                  >
                    {timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts} className="bg-white dark:bg-[#14100e] text-[#1c1511] dark:text-white">
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Concerns / Notes */}
                <div className="space-y-1.5 text-left sm:col-span-2">
                  <label className="text-xs font-bold text-[#1c1511] dark:text-[#f5ecd8] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#b8860b] dark:text-[#d4af37]" />
                    Specific Skin, Hair, or Treatment Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any skin sensitivity, wedding date, previous treatments, or questions..."
                    value={formData.concerns}
                    onChange={(e) =>
                      setFormData({ ...formData, concerns: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#181412] border border-[#c5a059]/45 dark:border-white/15 focus:border-[#d4af37] text-[#1c1511] dark:text-white text-sm placeholder:text-[#786b5e] dark:placeholder:text-[#a89d8f] outline-none transition-all resize-none shadow-inner font-medium"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#d4af37] via-[#e8b86d] to-[#aa8021] text-black font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Confirm & Send via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Trust Footer */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#8e8272] border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366]" />
                  Direct Reception Line: +91 7378603232
                </span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4af37] hover:underline transition-colors cursor-pointer"
                  title="View Subhadra Mall on Google Maps"
                >
                  📍 Subhadra Mall, Baramati MIDC
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
