import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Heart, Sparkles } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS, buildWhatsAppLink } from "../data/cakesData";
import { SocialIconRow } from "./SocialLinks";
import { BrandLogo } from "./BrandLogo";

export const Footer: React.FC = () => {
  const floatingWhatsAppUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! 👋 I visited your website and want to enquire about ordering a custom cake."
  );

  return (
    <>
      <footer className="bg-[#181344] text-white pt-16 pb-28 lg:pb-12 border-t border-[#D49B4B]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand & Mission (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex flex-col items-start gap-2.5">
                <BrandLogo variant="dark" className="h-14 sm:h-16 w-auto bg-white/[0.06] rounded-2xl px-3 py-1.5 border border-white/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7B4F0]">
                  Bafliex Cakes Arena
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Custom cakes made around your preference and budget without compromising on quality. We serve birthdays, weddings, Ruracio, graduations, anniversaries, baby showers, house warmings and corporate events from our Thika studio, with delivery to many areas around Nairobi. We also offer practical cake baking and decoration training.
              </p>
              <SocialIconRow className="pt-1" />
              <div className="pt-1 flex items-center gap-2 text-xs text-[#D49B4B] font-mono-price">
                <span>M-Pesa Buy Goods Till:</span>
                <strong className="text-white">{CONTACT_INFO.mpesaTill}</strong>
              </div>
            </div>

            {/* Covered Estates & Towns (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif-display font-bold text-lg text-[#D49B4B]">
                Walk-In Studio & Delivery Hubs
              </h4>
              <div className="rounded-xl bg-white/5 border border-[#D49B4B]/25 p-3.5 mb-2">
                <div className="flex items-start gap-2 text-xs leading-relaxed text-[#D49B4B] font-semibold">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>T-Plaza Building, 1st Floor, Kenyatta Highway — next to Quickmart Supermarket & Java Thika, near KFC Thika</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-[#E8721C]" /><span>Thika Town — Section 9, Landless, Makongeni</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-[#E8721C]" /><span>Juja Town, Highpoint & Kenyatta Road</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-[#E8721C]" /><span>Ruiru, Membley Estate & Kamakis</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-[#E8721C]" /><span>Kahawa Sukari, Wendani & Roysambu</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 shrink-0 text-[#E8721C]" /><span>Nairobi CBD, Westlands & Kilimani</span></li>
              </ul>
            </div>

            {/* Quick Links (2 Cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif-display font-bold text-lg text-[#D49B4B]">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                <li>
                  <a href="#showcase" className="hover:text-[#D49B4B] transition-colors">
                    Signature Cakes
                  </a>
                </li>
                <li>
                  <a href="#custom-builder" className="hover:text-[#D49B4B] transition-colors">
                    Build Your Cake
                  </a>
                </li>
                <li>
                  <a href="#delivery-zones" className="hover:text-[#D49B4B] transition-colors">
                    Delivery Areas & Options
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#D49B4B] transition-colors">
                    Ordering FAQ
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.whatsappCatalog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D49B4B] transition-colors"
                  >
                    WhatsApp Cake Catalog
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D49B4B] transition-colors"
                  >
                    Google Maps Directions
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif-display font-bold text-lg text-[#D49B4B]">
                Direct Baker Contact
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#D49B4B] transition-colors font-mono-price"
                >
                  <Phone className="w-4 h-4 text-[#E8721C]" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={floatingWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#1E8E5A] transition-colors font-semibold text-[#1E8E5A]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#1E8E5A]/20" />
                  <span>WhatsApp Instant Order</span>
                </a>
                <div className="flex items-start gap-2 text-white/70">
                  <Clock className="w-4 h-4 text-[#D49B4B] shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.hours}</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-[#E8721C] shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.studioLocation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div>
              © {new Date().getFullYear()} Bafliex Cakes Arena Kenya. All rights reserved.
            </div>
            <div className="flex flex-col items-center sm:items-end gap-1.5 text-center sm:text-right">
              <span className="font-serif-display text-sm sm:text-base text-white/90 italic">A Taste of Heaven</span>
              <span>Handcrafted with <Heart className="inline-block w-3.5 h-3.5 text-[#E8721C] fill-[#E8721C] align-[-2px]" /> for celebrations in Thika, Juja, Ruiru & Nairobi</span>
              <span className="text-[#D49B4B]">bafliexcakes.co.ke</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Mobile Floating Dual-Action Conversion Dock (Visible on Mobile/Tablet) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-3 bg-[#181344]/95 backdrop-blur-lg border-t border-[#D49B4B]/40 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-[#251F50] font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#E8721C]" />
            <span>Call</span>
          </a>

          <a
            href="#custom-builder"
            className="flex items-center justify-center gap-2 py-3.5 px-2 rounded-xl bg-[#D49B4B] text-[#251F50] font-bold text-xs shadow-lg active:scale-95 transition-transform"
          >
            <Sparkles className="w-4 h-4" />
            <span>Build Cake</span>
          </a>

          <a
            href={floatingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-2 rounded-xl bg-[#1E8E5A] text-white font-bold text-xs shadow-lg active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Quick Trigger Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="hidden lg:flex fixed bottom-7 right-7 z-40 items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/25"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span>Chat on WhatsApp</span>
      </a>
    </>
  );
};
