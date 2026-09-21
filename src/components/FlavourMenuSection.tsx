import React, { useMemo, useState } from "react";
import { CakeSlice, MessageCircle, Search } from "lucide-react";
import { ALL_FLAVOURS, buildWhatsAppLink } from "../data/cakesData";

export const FlavourMenuSection: React.FC = () => {
  const [query, setQuery] = useState("");
  const whatsappUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! I need help choosing cake flavours for my preferred design and budget. Please recommend suitable options."
  );
  const flavours = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ALL_FLAVOURS.filter((f) => f.toLowerCase().includes(q)) : ALL_FLAVOURS;
  }, [query]);

  return (
    <section id="flavours" className="py-20 sm:py-24 bg-white border-y border-[#D49B4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EEE6] border border-[#D49B4B]/25 text-[#E8721C] text-xs font-bold uppercase tracking-wider">
            <CakeSlice className="w-3.5 h-3.5" /> Our Cake Flavours
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] mt-3">Choose One Flavour or <span className="italic font-normal text-[#E8721C]">Combine Up to 3</span></h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3 leading-relaxed">Choose from our wide flavour range. The flavour, cake type, icing and final price can be matched to your design and budget.</p>
        </div>

        <div className="mb-6">
          <label className="relative block max-w-xl mx-auto">
            <span className="sr-only">Search flavours</span>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6E5D54]" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search flavours…" className="w-full h-12 rounded-xl border border-[#D49B4B]/25 bg-[#FDFBF7] pl-11 pr-4 text-sm text-[#251F50] outline-none focus:ring-2 focus:ring-[#E8721C]/25" />
          </label>
        </div>

        <div className="rounded-3xl bg-[#FDFBF7] border border-[#D49B4B]/25 p-5 sm:p-7">
          <div className="flex flex-wrap gap-2.5">
            {flavours.map((flavour) => (
              <span key={flavour} className="px-3 py-1.5 rounded-full bg-white border border-[#D49B4B]/20 text-xs sm:text-sm font-semibold text-[#251F50]">{flavour}</span>
            ))}
          </div>
          {flavours.length === 0 && <div className="text-center py-8 text-sm text-[#6E5D54]">No matching flavour found. Ask us for alternatives.</div>}
        </div>

        <div className="mt-7 rounded-2xl bg-[#251F50] text-white px-5 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div><div className="font-bold text-base sm:text-lg">Not sure what works with your design?</div><p className="text-xs sm:text-sm text-white/70 mt-1">Tell us your occasion, cake design and budget. We can recommend a suitable flavour combination.</p></div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E8E5A] px-5 py-3 text-sm font-bold text-white shrink-0"><MessageCircle className="w-4 h-4" /> Ask About Flavours</a>
        </div>
      </div>
    </section>
  );
};
