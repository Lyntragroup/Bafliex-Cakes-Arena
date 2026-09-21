import React, { useMemo, useState } from "react";
import { ArrowRight, Camera, MessageCircle, Search } from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";
import { INSPIRATION_GALLERY, INSPO_CATEGORIES, type InspoCategory } from "../data/inspirationGallery";

export const RealGallerySection: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<InspoCategory>("All Cakes");
  const [activeType, setActiveType] = useState("All Types");
  const [visibleCount, setVisibleCount] = useState(12);

  const TYPE_FILTERS = [
    "All Types", "Girls Cartoon Cakes", "Boys Cartoon Cakes", "Teen Girls Cakes", "Teen Boys Cakes",
    "Gentlemen Cakes", "Ladies Cakes", "Mom Cakes", "Traditional Cakes", "Church Cakes",
    "Pastor Cakes", "Religious Cakes", "Sports Theme", "Baby Shower", "Gender Reveal",
    "Corporate Cakes", "Wedding Cakes", "Graduation Cakes", "Rite of Passage Cakes"
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INSPIRATION_GALLERY.filter((item) => {
      const categoryMatch = activeCategory === "All Cakes" || item.category === activeCategory || item.subcategories.includes(activeCategory);
      const typeMatch = activeType === "All Types" || item.subcategories.includes(activeType) || item.category === activeType || item.tags.some((tag) => tag.toLowerCase() === activeType.toLowerCase());
      if (!categoryMatch || !typeMatch) return false;
      if (!q) return true;
      return [item.title, item.category, ...item.subcategories, ...item.tags].some((value) => value.toLowerCase().includes(q));
    });
  }, [activeCategory, activeType, query]);

  const whatsappUrl = buildWhatsAppLink("Hello Bafliex Cakes Arena! I saw one of your real cake designs and would like to discuss a similar or customised cake.");

  const selectInspo = (item: typeof INSPIRATION_GALLERY[number]) => {
    const detail = { id: item.id, src: item.src, title: item.title, category: item.category };
    try { localStorage.setItem("bafliex:selectedInspo", JSON.stringify(detail)); } catch { /* storage may be unavailable */ }
    window.dispatchEvent(new CustomEvent("bafliex:select-inspo", { detail }));
    let returnTo = "custom-builder";
    try {
      const requested = localStorage.getItem("bafliex:inspoReturnTo");
      if (requested === "wedding") returnTo = "wedding";
      localStorage.removeItem("bafliex:inspoReturnTo");
    } catch { /* storage may be unavailable */ }
    document.getElementById(returnTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white border-t border-[#D49B4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EEE6] border border-[#D49B4B]/25 text-[#E8721C] text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" /> Real Bafliex creations
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] mt-3">Real cakes. <span className="italic font-normal text-[#E8721C]">Real ideas.</span></h2>
            <p className="text-sm sm:text-base text-[#6E5D54] mt-3 leading-relaxed">
              Browse cakes we have actually made. Find an idea you like, then use it as inspiration while building your own cake around your preference and budget.
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E8E5A] text-white px-5 py-3.5 font-bold text-sm shadow-md">
            <MessageCircle className="w-4 h-4" /> Discuss a Similar Design
          </a>
        </div>

        <div className="rounded-3xl bg-[#FDFBF7] border border-[#D49B4B]/25 p-4 sm:p-5 mb-7">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8D8077]" />
              <input
                value={query}
                onChange={(e) => { setQuery(e.target.value); setVisibleCount(12); }}
                onKeyDown={(e) => { if (e.key === "Enter") setVisibleCount(12); }}
                placeholder="Search cake, flavour, occasion, theme or design..."
                className="w-full rounded-2xl border border-[#D49B4B]/30 bg-white pl-12 pr-4 py-3.5 text-sm sm:text-base text-[#251F50] placeholder:text-[#9A8E86] focus:outline-none focus:ring-2 focus:ring-[#E8721C]/20"
              />
            </div>
            <button type="button" onClick={() => setVisibleCount(12)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#251F50] text-white px-5 py-3.5 text-sm font-bold hover:bg-[#332b68]">
              <Search className="w-4 h-4 text-[#D49B4B]" /> Search
            </button>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {INSPO_CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button key={category} type="button" onClick={() => { setActiveCategory(category); setVisibleCount(12); }} className={`shrink-0 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-colors ${active ? "bg-[#251F50] text-white border-[#251F50]" : "bg-white text-[#251F50] border-[#D49B4B]/25 hover:border-[#E8721C]/50"}`}>
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#6E5D54] mb-2">More specific choices</div>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {TYPE_FILTERS.map((type) => (
                <button key={type} type="button" onClick={() => { setActiveType(type); setVisibleCount(12); }} className={`shrink-0 px-3.5 py-2 rounded-full border text-[11px] sm:text-xs font-semibold transition-colors ${activeType === type ? "bg-[#E8721C] text-white border-[#E8721C]" : "bg-white text-[#251F50] border-[#D49B4B]/25 hover:border-[#E8721C]/50"}`}>{type}</button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-[#6E5D54]">
            <span className="font-bold text-[#251F50]">Popular searches:</span>
            {["Cartoon", "Teen", "Wedding", "Ruracio", "Graduation", "Church", "Mom", "Corporate", "Baby Shower"].map((term) => (
              <button key={term} type="button" onClick={() => { setQuery(term); setVisibleCount(12); }} className="rounded-full bg-white border border-[#D49B4B]/20 px-3 py-1.5 hover:border-[#E8721C]/50">
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.slice(0, visibleCount).map((item) => (
            <figure key={item.id} id={`inspo-${item.id}`} className="group overflow-hidden rounded-2xl bg-[#F5EEE6] border border-[#D49B4B]/20 shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-[4/5] overflow-hidden bg-[#F5EEE6]">
                <img
                src={item.thumbSrc}
                data-full-src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="420"
                height="525"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              </div>
              <figcaption className="p-3.5">
                <div className="text-[10px] uppercase tracking-wider font-bold text-[#E8721C]">{item.category}</div>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#251F50] mt-1 leading-tight">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <button type="button" onClick={() => selectInspo(item)} className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#E8721C] text-white px-3 py-2.5 text-xs font-bold hover:bg-[#d66514]">
                    Use as Inspo <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[10px] text-[#6E5D54] text-right">{item.subcategories[0]}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#D49B4B]/40 bg-[#FDFBF7] px-5 py-10 text-center">
            <h3 className="font-serif-display text-2xl font-bold text-[#251F50]">No matching cake yet</h3>
            <p className="text-sm text-[#6E5D54] mt-2">Try another category or search term. You can also send us your own reference photos.</p>
            <button type="button" onClick={() => { setQuery(""); setActiveCategory("All Cakes"); setActiveType("All Types"); }} className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#251F50] text-white px-5 py-3 text-sm font-bold">Show All Cakes</button>
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="text-center mt-8">
            <button type="button" onClick={() => setVisibleCount((current) => current + 12)} className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#251F50] text-[#251F50] bg-white px-6 py-3.5 text-sm font-bold">
              Show More Cakes <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-[#FFF5E9] border border-[#E8721C]/25 px-4 sm:px-6 py-4 text-sm text-[#6E5D54]">
          <strong className="text-[#251F50]">How to use an idea:</strong> Tap <strong>Use as Inspo</strong>, continue to the Custom Cake Builder, then change the size, shape, colours, flavours, message, toppers, notes and budget to suit your order.
        </div>
      </div>
    </section>
  );
};
