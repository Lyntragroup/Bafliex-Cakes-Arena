import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, MapPin, Menu, X, Sparkles } from "lucide-react";
import { CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";
import { BrandLogo } from "./BrandLogo";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultWhatsAppUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! 👋 I visited your website and would like to enquire about ordering a custom cake."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-pill shadow-lg py-3 px-4 sm:px-6"
            : "bg-[#FDFBF7]/90 backdrop-blur-md border border-[#D49B4B]/25 py-3.5 px-4 sm:px-6 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <a href="#" aria-label="Bafliex Cakes Arena — home" className="flex items-center gap-2.5 group shrink-0 min-w-0">
            {/* Full logo lockup (tablet & desktop) */}
            <BrandLogo
              variant="light"
              priority
              className="hidden sm:block h-[52px] lg:h-[56px] w-auto group-hover:scale-[1.02] transition-transform"
            />
            {/* Compact badge + wordmark for small phones */}
            <BrandLogo
              variant="light"
              compact
              priority
              className="sm:hidden h-10 w-12 group-hover:rotate-3 transition-transform"
            />
            <div className="sm:hidden flex flex-col leading-tight">
              <span className="font-serif-display italic font-bold text-[17px] text-[#E8721C]">
                Bafliex
              </span>
              <span className="text-[8px] font-bold text-[#4C4590] tracking-[0.18em] uppercase">
                Cakes Arena
              </span>
            </div>
            {/* Arena chip + location (desktop) */}
            <div className="hidden md:block ml-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#4C4590]/12 text-[#4C4590] border border-[#4C4590]/25">
                Arena
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-[#6E5D54] mt-1">
                <MapPin className="w-3 h-3 text-[#E8721C] shrink-0" />
                <span className="truncate">T-Plaza Thika • Juja • Ruiru • Nairobi</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-[#251F50]/85">
            <details className="relative group">
              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Cakes <span aria-hidden="true">⌄</span></summary>
              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">
                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Search / Browse Cakes</a>
                <a href="#flavours" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Cake Flavours</a>
                <a href={`https://wa.me/c/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Live WhatsApp Catalog</a>
              </div>
            </details>
            <details className="relative group">
              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Order <span aria-hidden="true">⌄</span></summary>
              <div className="absolute left-0 top-full mt-2 w-60 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">
                <a href="#custom-builder" className="block rounded-xl px-3 py-2 font-bold text-[#E8721C] hover:bg-[#F5EEE6]">Order My Cake</a>
                <a href="#wedding" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Wedding Estimate</a>
                <a href="#training" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Cake Training</a>
                <a href="#how-to-order" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">How to Order</a>
              </div>
            </details>
            <details className="relative group">
              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Celebrations <span aria-hidden="true">⌄</span></summary>
              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">
                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Birthdays & Milestones</a>
                <a href="#wedding" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Weddings & Ruracio</a>
                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Graduations</a>
                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Corporate & Special Events</a>
              </div>
            </details>
            <details className="relative group">
              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">More <span aria-hidden="true">⌄</span></summary>
              <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">
                <a href="#delivery-zones" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Delivery Areas</a>
                <a href="#offers" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Offers</a>
                <a href="#reviews" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Customer Reviews</a>
                <a href="#faq" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">FAQs</a>
              </div>
            </details>
            <a href="#showcase" className="font-semibold text-[#4C4590] hover:text-[#E8721C]">Search for a Cake</a>
          </nav>

          {/* Direct Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Baker Indicator (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E8E5A]/10 border border-[#1E8E5A]/25 text-[12px] font-medium text-[#1E8E5A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E8E5A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E8E5A]"></span>
              </span>
              <span>WhatsApp Ordering</span>
            </div>

            {/* Direct Call Button */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-[#251F50]/20 bg-white/80 hover:bg-[#251F50] hover:text-white text-[#251F50] text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs"
              title="Call Baker Directly"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8721C] group-hover:text-white" />
              <span className="hidden sm:inline">{CONTACT_INFO.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* WhatsApp Primary Button */}
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#1E8E5A] hover:bg-[#16794B] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span className="hidden min-[420px]:inline">WhatsApp Order</span>
              <span className="min-[420px]:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-xl text-[#251F50] hover:bg-[#251F50]/5 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#D49B4B]/20 pb-2 animate-fadeIn">
            <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#1E8E5A]/10 text-[#1E8E5A] text-xs font-medium mb-2">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#1E8E5A] animate-pulse"></span>WhatsApp Ordering • Quick Enquiries</span>
              <span className="font-mono-price font-semibold">Mon–Sat 8:30am–8:00pm</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-1 mb-2">
              <a href="#custom-builder" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#E8721C] text-white px-2 py-2.5 text-center text-[11px] font-bold">Order My Cake</a>
              <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#4C4590] text-white px-2 py-2.5 text-center text-[11px] font-bold">Wedding Estimate</a>
              <a href="#training" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#F5EEE6] text-[#251F50] border border-[#D49B4B]/30 px-2 py-2.5 text-center text-[11px] font-bold">Training</a>
            </div>

            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2" open>
              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Cakes <span>⌄</span></summary>
              <div className="px-2 pb-2 grid gap-1">
                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Search / Browse Cakes</a>
                <a href="#flavours" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Cake Flavours</a>
                <a href={`https://wa.me/c/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg bg-[#1E8E5A]/10 text-[#1E8E5A] text-sm font-semibold">Live WhatsApp Catalog</a>
              </div>
            </details>

            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">
              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Order <span>⌄</span></summary>
              <div className="px-2 pb-2 grid gap-1">
                <a href="#custom-builder" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm font-bold text-[#E8721C]">Order My Cake</a>
                <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Wedding Estimate</a>
                <a href="#training" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Cake Training</a>
                <a href="#how-to-order" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">How to Order</a>
              </div>
            </details>

            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">
              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Celebrations <span>⌄</span></summary>
              <div className="px-2 pb-2 grid gap-1">
                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Birthdays & Milestones</a>
                <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Weddings & Ruracio</a>
                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Graduations</a>
                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Corporate & Special Events</a>
              </div>
            </details>

            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">
              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">More <span>⌄</span></summary>
              <div className="px-2 pb-2 grid gap-1">
                <a href="#delivery-zones" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Delivery Areas</a>
                <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Offers</a>
                <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Customer Reviews</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">FAQs</a>
              </div>
            </details>

            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-xl bg-[#E8721C]/10 text-[#E8721C] font-bold text-sm flex items-center justify-between mb-2">
              <span>Search for a Cake</span><span>→</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5 mt-2 pt-2 border-t border-[#D49B4B]/20">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#251F50]/20 bg-white text-[#251F50] font-semibold text-sm shadow-xs"><Phone className="w-4 h-4 text-[#E8721C]" /><span>Call Baker</span></a>
              <a href={defaultWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E8E5A] text-white font-semibold text-sm shadow-md"><MessageCircle className="w-4 h-4" /><span>WhatsApp Chat</span></a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
