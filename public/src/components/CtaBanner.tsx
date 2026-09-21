import React from "react";
import { MessageCircle, Phone, Sparkles, Clock, MapPin } from "lucide-react";
import { CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";

export const CtaBanner: React.FC = () => {
  const finalWhatsAppUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! 👋 I'm ready to order a custom cake for my upcoming event. Please help me book my baking slot!"
  );

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EEE6]">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#181344] text-white p-8 sm:p-12 lg:p-16 border-2 border-[#D49B4B]/45 shadow-2xl relative overflow-hidden">
        {/* Subtle Gold Radial Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-bl from-[#D49B4B]/25 via-[#E8721C]/15 to-transparent blur-3xl" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D49B4B]/20 border border-[#D49B4B]/40 text-xs font-bold text-[#D49B4B] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reserve Your Baking Slot Today</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Make Your Celebration Unforgettable with{" "}
            <span className="italic font-normal text-[#D49B4B]">
              Bafliex Cakes Arena
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Our ovens fill up fast for weekend weddings, Ruracios, graduations, birthdays & anniversaries across Thika, Juja, Ruiru, and Nairobi. Message or call us now to lock in your date!
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2">
            <a
              href={finalWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-full bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Order Custom Cake on WhatsApp</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:py-4.5 rounded-full border-2 border-white/25 hover:border-[#D49B4B] bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-all"
            >
              <Phone className="w-4 h-4 text-[#D49B4B]" />
              <span>Call Baker: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D49B4B]" />
              <span>Walk-in Studio: T-Plaza Bldg, 1st Floor, Kenyatta Hwy — next to Quickmart & Java Thika, near KFC</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D49B4B]" />
              <span>Hours: {CONTACT_INFO.hours}</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Lipa na M-Pesa Buy Goods Till: {CONTACT_INFO.mpesaTill}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
