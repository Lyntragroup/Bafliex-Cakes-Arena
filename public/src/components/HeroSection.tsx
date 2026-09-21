import React, { useEffect, useState } from "react";
import {
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  Star,
  Clock,
  Truck,
  ArrowRight,
  Cake,
  Gift,
  Search,
} from "lucide-react";
import { CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";

const HERO_SLIDES = [
  { src: "/images/gallery/superman-birthday-cake.webp", alt: "Superman themed birthday cake by Bafliex Cakes Arena" },
  { src: "/images/gallery/orange-gold-wedding-cake.webp", alt: "Orange and gold wedding cake setup by Bafliex Cakes Arena" },
  { src: "/images/gallery/wedding-turquoise.webp", alt: "Turquoise and pink wedding cake setup by Bafliex Cakes Arena" },
  { src: "/images/gallery/graduation-pink.webp", alt: "Pink graduation cake by Bafliex Cakes Arena" },
  { src: "/images/gallery/faith-gold-birthday.webp", alt: "Gold and purple celebration cake by Bafliex Cakes Arena" },
];

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-16 overflow-hidden kenyan-geometric-pattern">
      {/* Ambient Radial Warm Glows */}
      <div className="pointer-events-none absolute top-12 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D49B4B]/20 via-[#E8721C]/10 to-transparent blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#E8721C]/15 via-[#D49B4B]/10 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (60% -> 7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-7">
            {/* Local Kenyan Corridor Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EEE6] border border-[#D49B4B]/35 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#E8721C]"></span>
              <span className="text-xs sm:text-sm font-semibold text-[#251F50] tracking-wide">
                Serving <span className="text-[#E8721C] underline decoration-[#D49B4B]/60">Thika</span>,{" "}
                <span className="text-[#E8721C] underline decoration-[#D49B4B]/60">Juja</span>,{" "}
                <span className="text-[#E8721C] underline decoration-[#D49B4B]/60">Ruiru</span> &{" "}
                <span className="text-[#E8721C] underline decoration-[#D49B4B]/60">Nairobi</span>
              </span>
              <span className="hidden sm:inline-block text-xs text-[#6E5D54] pl-1 border-l border-[#D49B4B]/40">
                Same-day may be available — ask us first
              </span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif-display text-[2.05rem] sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#251F50] tracking-tight leading-[1.02] sm:leading-[1.07]">
              Fresh Custom Cakes.{" "}
              <span className="italic font-normal text-[#E8721C] block sm:inline">
                Made to Your Preference & Budget
              </span>{" "}
              <span className="block sm:inline">& Delivered Fresh.</span>
            </h1>

            {/* Compelling Intro Copy */}
            <p className="text-[14px] sm:text-base lg:text-lg text-[#6E5D54] font-normal leading-snug sm:leading-relaxed max-w-xl">
              Custom cakes made around your preference and budget — without compromising quality. <strong className="text-[#251F50] font-semibold">Send your inspo and let us build around it.</strong>
            </p>

            {/* High-priority order actions — keep the conversion path above supporting details */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-0.5 max-w-3xl">
              <a
                href="#custom-builder"
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl bg-[#E8721C] hover:bg-[#CF6218] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Cake className="w-5 h-5" />
                <span>Order My Cake</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={buildWhatsAppLink("Hello Bafliex Cakes Arena! I would like to order a cake. Please help me choose the best option for my preference and budget.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white/15" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="#wedding"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl border-2 border-[#251F50]/20 bg-white/90 text-[#251F50] font-bold text-base hover:border-[#251F50] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#E8721C]" />
                <span>Wedding Estimate</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#showcase" className="inline-flex items-center gap-2 rounded-full border border-[#D49B4B]/35 bg-white/80 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#251F50] hover:border-[#E8721C] hover:text-[#E8721C] transition-all">
                <Search className="w-3.5 h-3.5 text-[#E8721C]" /> Search for a Cake <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#training" className="inline-flex items-center gap-2 rounded-full border border-[#D49B4B]/35 bg-white/80 px-3.5 py-2 text-xs sm:text-sm font-bold text-[#251F50] hover:border-[#E8721C] hover:text-[#E8721C] transition-all">
                Cake Training & Classes <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Brand promise */}
            <div className="hidden sm:block text-sm sm:text-base font-semibold text-[#251F50]">
              <span className="text-[#E8721C]">Your preference.</span> Your budget. <span className="text-[#4C4590]">Our quality.</span>
            </div>

            {/* Occasions Served vs Delivery Areas — clearly separated */}
            <div className="hidden sm:block space-y-3.5 max-w-2xl">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#E8721C] mb-1.5">
                  <Cake className="w-3.5 h-3.5" />
                  <span>Occasions We Bake For</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Birthdays", "Weddings", "Ruracio / Dowry", "Graduations", "Anniversaries", "Baby Showers", "House Warming", "Corporate Events"].map((o) => (
                    <span
                      key={o}
                      className="px-2.5 py-1 rounded-full bg-white border border-[#D49B4B]/30 text-xs font-semibold text-[#251F50] shadow-2xs"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#4C4590] mb-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Areas We Deliver To</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Thika Town", "Juja", "Ruiru & Membley", "Kamakis & Bypass", "Kahawa Sukari", "Roysambu", "Nairobi & Surrounding Areas", "Surrounding Nairobi • up to ~50km from Ruiru"].map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 rounded-full bg-[#4C4590]/8 border border-[#4C4590]/20 text-xs font-semibold text-[#4C4590]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Catalog (prominent, top-of-fold) + Quick Links */}
            <div className="hidden sm:flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#6E5D54] pt-1">
              <a
                href={`https://wa.me/c/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E8E5A] hover:bg-[#16794B] text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Browse Live Cake Catalog on WhatsApp →</span>
              </a>
              <a
                href="#custom-builder"
                className="inline-flex items-center gap-1.5 font-semibold text-[#E8721C] hover:underline"
              >
                <Sparkles className="w-4 h-4" />
                <span>Order My Cake →</span>
              </a>
              <span className="hidden sm:inline text-[#D49B4B]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E8E5A]" />
                <span>M-Pesa Buy Goods Till 678814</span>
              </span>
              <span className="hidden sm:inline text-[#D49B4B]">•</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#E8721C]">
                <Gift className="w-4 h-4" />
                <span>Free cupcakes on selected orders</span>
              </span>
            </div>

            {/* Key Social Proof Strip */}
            <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#D49B4B]/25">
              <div className="bg-white/65 rounded-2xl p-3 border border-[#D49B4B]/20">
                <div className="font-serif-display font-bold text-2xl sm:text-3xl text-[#251F50]">
                  Custom
                </div>
                <div className="text-xs text-[#6E5D54] mt-0.5">
                  cakes for every budget
                </div>
              </div>

              <div className="bg-white/65 rounded-2xl p-3 border border-[#D49B4B]/20">
                <div className="flex items-center gap-1 font-serif-display font-bold text-2xl sm:text-3xl text-[#251F50]">
                  <span>4.8</span>
                  <Star className="w-5 h-5 fill-[#D49B4B] text-[#D49B4B]" />
                </div>
                <div className="text-xs text-[#6E5D54] mt-0.5">
                  Google Rating • 23 Reviews
                </div>
              </div>

              <div className="bg-white/65 rounded-2xl p-3 border border-[#D49B4B]/20">
                <div className="font-serif-display font-bold text-2xl sm:text-3xl text-[#E8721C]">
                  &lt; 3 Mins
                </div>
                <div className="text-xs text-[#6E5D54] mt-0.5">
                  ordering made easy
                </div>
              </div>

              <div className="bg-white/65 rounded-2xl p-3 border border-[#D49B4B]/20">
                <div className="font-serif-display font-bold text-2xl sm:text-3xl text-[#1E8E5A]">
                  Wide
                </div>
                <div className="text-xs text-[#6E5D54] mt-0.5">
                  flavour choices + options
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: real Bafliex cake slider */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 sm:-inset-4 rounded-[36px] bg-gradient-to-tr from-[#D49B4B]/30 via-[#E8721C]/20 to-transparent blur-xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D49B4B]/35 shadow-2xl bg-[#251F50]">
              <div className="relative h-[300px] sm:h-[430px] overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {HERO_SLIDES.map((slide) => (
                    <div key={slide.src} className="min-w-full h-full relative">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        loading={activeSlide === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#181344]/90 via-[#181344]/25 to-transparent" />
                    </div>
                  ))}
                </div>

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="glass-pill px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#251F50] shadow-lg">
                    Real Bafliex creations
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#251F50]/85 text-[#D49B4B] text-[11px] font-bold border border-[#D49B4B]/30">
                    From Ksh 1,100
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                  <div className="text-white min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#D49B4B]">Cake inspiration</div>
                    <h3 className="font-serif-display font-bold text-xl sm:text-2xl">Made to Your Preference</h3>
                  </div>
                  <a
                    href="#custom-builder"
                    className="shrink-0 px-3 py-2 rounded-full bg-[#E8721C] text-white text-[11px] sm:text-xs font-bold shadow-lg"
                  >
                    Order My Cake →
                  </a>
                </div>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {HERO_SLIDES.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Show cake ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/55"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Live Activity Toast (Bottom Left of Visual) */}
            <div className="hidden sm:flex items-center gap-3 p-3.5 rounded-2xl glass-card shadow-xl absolute -bottom-5 -left-6 max-w-xs animate-float">
              <div className="w-10 h-10 rounded-xl bg-[#1E8E5A]/15 text-[#1E8E5A] flex items-center justify-center shrink-0">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#251F50]">
                  Custom orders welcomed
                </div>
                <div className="text-[11px] text-[#6E5D54]">
                  Tell us your design, flavours and preferred budget.
                </div>
                <div className="text-[10px] font-semibold text-[#1E8E5A] mt-0.5">
                  ✓ Final details confirmed before booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
