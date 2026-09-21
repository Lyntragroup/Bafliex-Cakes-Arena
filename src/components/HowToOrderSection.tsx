import React from "react";
import { CalendarClock, CheckCircle2, MessageCircle, Palette, WalletCards } from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";

const STEPS = [
  { n: "01", title: "Tell us what you need", text: "Choose the occasion, size, shape, icing and flavour combination." },
  { n: "02", title: "Send your cake inspo", text: "Upload your reference photos and tell us what you want added, changed or personalised." },
  { n: "03", title: "Match the design to your budget", text: "We focus on custom cakes made to your preference and budget. The final price is confirmed before booking." },
  { n: "04", title: "Confirm date & delivery", text: "Cake preparation takes at least 4 hours. Delivery is arranged once the cake is ready; timing depends on location, traffic and delivery-person availability." },
];

export const HowToOrderSection: React.FC = () => {
  const url = buildWhatsAppLink("Hello Bafliex Cakes Arena! I would like to order a custom cake. My budget is Ksh ____ and my occasion is ____. Please help me choose a suitable design and flavour.");
  return (
    <section id="how-to-order" className="py-20 sm:py-24 bg-[#F5EEE6] border-t border-[#D49B4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B4B]/25 text-[#E8721C] text-xs font-bold uppercase tracking-wider">How ordering works</div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] mt-3">A simple path from <span className="italic font-normal text-[#E8721C]">idea to cake</span></h2>
            <p className="text-sm sm:text-base text-[#6E5D54] mt-4 leading-relaxed">You do not need to know the exact cake design before contacting us. Bring your idea, photos and budget and we will help you shape the order.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Custom designs", "Wide flavour range", "Budget-friendly options", "WhatsApp ordering"].map((item) => <span key={item} className="px-3 py-1.5 rounded-full bg-white border border-[#D49B4B]/20 text-xs font-semibold text-[#251F50]">{item}</span>)}
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E8E5A] px-6 py-3.5 text-sm font-bold text-white shadow-lg"><MessageCircle className="w-4 h-4" /> Order My Cake</a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STEPS.map((step, index) => {
              const Icon = [CheckCircle2, Palette, WalletCards, CalendarClock][index];
              return <div key={step.n} className="rounded-3xl bg-white border border-[#D49B4B]/25 p-5 sm:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5"><div className="w-10 h-10 rounded-xl bg-[#251F50] text-[#D49B4B] flex items-center justify-center"><Icon className="w-5 h-5" /></div><span className="font-mono-price text-xs font-bold text-[#D49B4B]">{step.n}</span></div>
                <h3 className="font-serif-display text-2xl font-bold text-[#251F50]">{step.title}</h3>
                <p className="text-sm text-[#6E5D54] leading-relaxed mt-2">{step.text}</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
