import React, { useState } from "react";
import {
  MessageCircle,
  Phone,
  Sparkles,
  Scale,
  Users,
  MapPin,
  X,
  CheckCircle2,
  ExternalLink,
  Search,
} from "lucide-react";
import {
  CAKE_CATALOG,
  CakeItem,
  CONTACT_INFO,
  SOCIAL_LINKS,
  buildWhatsAppLink,
} from "../data/cakesData";

const CATEGORIES = [
  "All Creations",
  "Birthdays & Milestones",
  "Weddings & Ruracio",
  "Graduations",
  "Luxury Kids",
  "House Warming",
  "Baby Showers",
  "Corporate",
] as const;

export const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Creations");
  const [selectedCakeModal, setSelectedCakeModal] = useState<CakeItem | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredCakes = CAKE_CATALOG.filter((cake) => {
    const categoryMatch = selectedCategory === "All Creations" || cake.category === selectedCategory;
    const text = [cake.name, cake.category, cake.tagline, ...cake.flavors, cake.popularIn ?? ""].join(" ").toLowerCase();
    return categoryMatch && (!normalizedSearch || text.includes(normalizedSearch));
  });

  return (
    <section id="showcase" className="py-20 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8721C]/12 text-[#E8721C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Artisanal Portfolio</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] leading-tight">
              Custom Cakes for Every Celebration{" "}
              <span className="italic font-normal text-[#E8721C]">
                Made Your Way
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
              Explore cake ideas for birthdays, weddings, graduations, Ruracio and other celebrations. Every design can be adjusted in size, colour, inscription, flavours and finish.
            </p>
            <div className="mt-4">
              <a
                href={SOCIAL_LINKS.whatsappCatalog}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-[#1E8E5A]/40 text-[#1E8E5A] font-bold text-xs sm:text-sm hover:bg-[#1E8E5A] hover:text-white hover:border-[#1E8E5A] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Browse Full Live Cake Catalog on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick paths + search */}
          <div className="mb-6 grid grid-cols-1 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <a href="#custom-builder" className="rounded-2xl bg-[#251F50] text-white px-4 py-4 border border-[#251F50] hover:-translate-y-0.5 transition-all">
                <div className="text-[10px] uppercase tracking-wider text-[#D49B4B] font-bold">Want something unique?</div>
                <div className="font-serif-display text-xl font-bold mt-1">Build a Custom Cake</div>
                <div className="text-xs text-white/65 mt-1">Choose your design, flavours and budget.</div>
              </a>
              <a href={SOCIAL_LINKS.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#F5EEE6] text-[#251F50] px-4 py-4 border border-[#D49B4B]/25 hover:-translate-y-0.5 transition-all">
                <div className="text-[10px] uppercase tracking-wider text-[#E8721C] font-bold">Need something sooner?</div>
                <div className="font-serif-display text-xl font-bold mt-1">Ask About Ready Cakes</div>
                <div className="text-xs text-[#6E5D54] mt-1">See current designs and availability on WhatsApp.</div>
              </a>
            </div>
            <label className="lg:col-span-5 relative block">
              <span className="sr-only">Search cakes, flavours, occasions or designs</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E5D54]" />
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search cake, flavour, occasion or design…" className="w-full h-full min-h-14 rounded-2xl bg-white border border-[#D49B4B]/30 pl-11 pr-4 text-sm text-[#251F50] outline-none focus:ring-2 focus:ring-[#E8721C]/30" />
            </label>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#251F50] text-white shadow-md"
                      : "bg-[#F5EEE6] hover:bg-[#D49B4B]/25 text-[#251F50]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cake Grid */}
        {filteredCakes.length === 0 && (
          <div className="rounded-2xl bg-[#F5EEE6] border border-[#D49B4B]/25 p-6 text-center text-sm text-[#6E5D54] mb-8">
            No matching cakes found. Try another search or <a href="#custom-builder" className="font-bold text-[#E8721C] underline">build a custom cake</a>.
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredCakes.map((cake) => {
            const cakeWhatsAppUrl = buildWhatsAppLink(
              `Hello Bafliex Cakes Arena! 👋 I would like to enquire about the *${cake.name}* (${cake.defaultWeight}, starting at Ksh ${cake.startingPrice.toLocaleString()}). Can I customize this for my upcoming event?`
            );

            return (
              <div
                key={cake.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#D49B4B]/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#251F50]">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251F50]/75 via-transparent to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    {cake.badge && (
                      <span className="px-3 py-1 rounded-full bg-[#E8721C] text-white text-xs font-bold shadow-md">
                        {cake.badge}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#251F50] text-[11px] font-semibold flex items-center gap-1 ml-auto">
                      <MapPin className="w-3 h-3 text-[#E8721C]" />
                      {cake.popularIn ?? "Customizable"}
                    </span>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D49B4B] font-semibold">
                        {cake.category}
                      </span>
                      <h3 className="font-serif-display font-bold text-xl sm:text-2xl leading-tight">
                        {cake.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#6E5D54] line-clamp-2 leading-relaxed">
                      {cake.tagline}
                    </p>

                    {/* Weight & Slices Strip */}
                    <div className="flex items-center gap-4 text-xs font-medium text-[#251F50] bg-[#FDFBF7] px-3.5 py-2 rounded-xl border border-[#D49B4B]/20">
                      <span className="flex items-center gap-1.5">
                        <Scale className="w-3.5 h-3.5 text-[#E8721C]" />
                        <span>{cake.defaultWeight}</span>
                      </span>
                      <span className="text-[#D49B4B]">•</span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#E8721C]" />
                        <span>{cake.servings}</span>
                      </span>
                    </div>

                    {/* Flavor Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cake.flavors.map((fl) => (
                        <span
                          key={fl}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F5EEE6] text-[#6E5D54] font-medium"
                        >
                          {fl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTAs */}
                  <div className="pt-4 border-t border-[#D49B4B]/25 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#6E5D54]">Starts from</span>
                        <div className="font-mono-price font-bold text-xl sm:text-2xl text-[#251F50]">
                          Ksh {cake.startingPrice.toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedCakeModal(cake)}
                        className="text-xs font-semibold text-[#E8721C] hover:underline"
                      >
                        View Full Specs →
                      </button>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      {/* Primary WhatsApp Button */}
                      <a
                        href={cakeWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-4 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4 fill-white/20" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      {/* Direct Call Icon Trigger */}
                      <a
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        title="Call Baker Directly"
                        className="col-span-1 inline-flex items-center justify-center rounded-xl border border-[#251F50]/20 hover:bg-[#251F50] hover:text-white text-[#251F50] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[#E8721C]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cake Detail Modal */}
      {selectedCakeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#251F50]/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D49B4B]/40">
            <div className="relative h-64 sm:h-72 bg-[#251F50]">
              <img
                src={selectedCakeModal.image}
                alt={selectedCakeModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCakeModal(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#251F50]/80 text-white flex items-center justify-center hover:bg-[#E8721C] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider text-[#D49B4B] font-semibold">
                  {selectedCakeModal.category}
                </span>
                <h3 className="font-serif-display font-bold text-2xl sm:text-3xl">
                  {selectedCakeModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm sm:text-base text-[#6E5D54]">
                {selectedCakeModal.tagline}
              </p>

              <div className="grid grid-cols-2 gap-4 bg-[#FDFBF7] p-4 rounded-2xl border border-[#D49B4B]/25">
                <div>
                  <div className="text-xs text-[#6E5D54]">Standard Weight</div>
                  <div className="font-bold text-[#251F50] text-base">
                    {selectedCakeModal.defaultWeight} ({selectedCakeModal.servings})
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6E5D54]">Starting Investment</div>
                  <div className="font-mono-price font-bold text-[#E8721C] text-lg">
                    Ksh {selectedCakeModal.startingPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#251F50] mb-2">
                  Available Sponge Flavors for This Design:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCakeModal.flavors.map((flv) => (
                    <span
                      key={flv}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E8E5A]/10 text-[#1E8E5A] text-xs font-semibold"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {flv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#D49B4B]/25">
                <a
                  href={buildWhatsAppLink(
                    `Hello Bafliex Cakes Arena! 👋 I'm viewing the *${selectedCakeModal.name}* (${selectedCakeModal.defaultWeight}) on your website and would like to customize it for my celebration.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Customize & Order via WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl border border-[#251F50]/20 hover:bg-[#251F50] hover:text-white text-[#251F50] font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E8721C]" />
                  <span>Call Baker</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
