import React from "react";
import { ArrowRight, BookOpen, Cake, Heart, MessageCircle, Sparkles, Users } from "lucide-react";
import { CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";

export const QuickOrderCta: React.FC = () => {
  const whatsappUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! I would like to order a cake. Please help me choose an option based on my preference and budget."
  );

  return (
    <section id="order-now" className="px-4 sm:px-6 lg:px-8 -mt-5 sm:-mt-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-[#D49B4B]/30 bg-white shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-[1.2fr_1fr] items-stretch">
            <div className="p-5 sm:p-7 lg:p-8 bg-gradient-to-r from-[#251F50] to-[#352C70] text-white">
              <div className="flex items-center gap-2 text-[#D49B4B] text-[11px] font-bold uppercase tracking-[0.18em] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Order now</span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Tell us what you want. We'll help you build it.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl">
                Choose your size, shape, icing, flavours and colours, then add your cake inspo and preferred budget.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-white/80">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Cake className="w-3.5 h-3.5 text-[#D49B4B]" />Custom cakes</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Heart className="w-3.5 h-3.5 text-[#E8721C]" />Your budget</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Users className="w-3.5 h-3.5 text-[#D49B4B]" />Weddings too</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-8 bg-[#FDFBF7] flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a href="#custom-builder" className="group inline-flex flex-col items-start gap-1 rounded-2xl bg-[#E8721C] text-white px-4 py-4 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <span className="inline-flex items-center gap-2">Order My Cake <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                  <span className="text-[11px] font-medium text-white/80">Choose size, flavour, design, budget & inspo.</span>
                </a>
                <a href="#wedding" className="group inline-flex flex-col items-start gap-1 rounded-2xl border-2 border-[#4C4590]/20 bg-white text-[#251F50] px-4 py-4 font-bold hover:border-[#4C4590]/45 transition-all">
                  <span className="inline-flex items-center gap-2">Wedding Estimate <Users className="w-4 h-4 text-[#E8721C]" /></span>
                  <span className="text-[11px] font-medium text-[#6E5D54]">Build a package or start custom.</span>
                </a>
                <a href="#training" className="group inline-flex flex-col items-start gap-1 rounded-2xl border-2 border-[#D49B4B]/25 bg-[#FDFBF7] text-[#251F50] px-4 py-4 font-bold hover:border-[#E8721C]/45 transition-all">
                  <span className="inline-flex items-center gap-2">Cake Training <BookOpen className="w-4 h-4 text-[#E8721C]" /></span>
                  <span className="text-[11px] font-medium text-[#6E5D54]">Practical baking & decoration classes.</span>
                </a>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E8E5A] text-white px-5 py-3.5 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-4 h-4 fill-white/15" />
                Need help? WhatsApp us
              </a>
              <p className="mt-2 text-center text-[11px] text-[#6E5D54]">
                M-Pesa Buy Goods Till <strong className="text-[#251F50]">678814</strong> · {CONTACT_INFO.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
