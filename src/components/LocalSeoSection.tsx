import React from "react";
import { MapPin, Search, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";

const AREAS = [
  ["Cakes in Thika", "Thika Town, Thika Greens, Section 9, Landless, Makongeni, Ngoigwa and Blue Post"],
  ["Cakes in Juja", "Juja Town, Highpoint, Kenyatta Road, Kalimoni and nearby estates"],
  ["Cakes in Ruiru", "Ruiru Town, Membley, Kamakis, Tatu City, Kahawa Sukari and Wendani"],
  ["Cake Delivery in Nairobi", "Nairobi and surrounding areas, subject to cake size, route and delivery availability"],
];

export const LocalSeoSection: React.FC = () => {
  const url = buildWhatsAppLink("Hello Bafliex Cakes Arena! I am looking for a cake in my area. My location is ____ and my budget is Ksh ____. Please advise on available designs, flavours and delivery.");
  return (
    <section id="areas" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EEE6] border border-[#D49B4B]/25 text-[#E8721C] text-xs font-bold uppercase tracking-wider"><Search className="w-3.5 h-3.5" /> Local Cake Delivery</div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] mt-3">Looking for <span className="italic font-normal text-[#E8721C]">cakes near me</span> in Thika, Juja, Ruiru & Nairobi?</h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3 leading-relaxed">Our Thika studio is the home base. We arrange delivery to many places around Nairobi, with a working service area of about 50km from Ruiru as a reference point. Exact delivery availability and any transport charge depend on the location, route and cake size.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AREAS.map(([title, text]) => <div key={title} className="rounded-3xl bg-[#FDFBF7] border border-[#D49B4B]/25 p-5 sm:p-6"><div className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-[#251F50] text-[#D49B4B] flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div><div><h3 className="font-serif-display text-2xl font-bold text-[#251F50]">{title}</h3><p className="text-sm text-[#6E5D54] mt-1.5 leading-relaxed">{text}</p></div></div></div>)}
        </div>
        <div className="mt-6 rounded-2xl border border-[#D49B4B]/25 bg-[#251F50] text-white px-5 py-5 sm:px-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><div><div className="font-bold">Not sure whether we deliver to your venue?</div><p className="text-xs sm:text-sm text-white/70 mt-1">Send the exact location on WhatsApp and we will confirm the delivery option.</p></div><a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E8E5A] px-5 py-3 text-sm font-bold"><MessageCircle className="w-4 h-4" /> Check My Location</a></div>
      </div>
    </section>
  );
};
