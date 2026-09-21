import React from "react";
import { BadgePercent, Cake, Gift, HeartHandshake, MessageCircle, type LucideIcon } from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";

export const OffersAndBudgetSection: React.FC = () => {
  const url = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! I would like to know about your current discounts, free cupcake offers and how we can create a cake around my preference and budget."
  );

  return (
    <section id="offers" className="py-16 sm:py-20 bg-[#FDFBF7] border-y border-[#D49B4B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-[#251F50] text-white p-6 sm:p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-[#D49B4B]/30 text-[#D49B4B] text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              Built around you
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Your Cake. Your Preference. <span className="italic font-normal text-[#D49B4B]">Your Budget.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/75 mt-4 leading-relaxed max-w-2xl">
              Bafliex Cakes Arena is designed to accommodate different tastes, designs and budgets without compromising on the quality of the cake. Tell us what you have in mind and what you would like to spend. We will help you get the best option in your category, preference and budget.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {([
                [Cake, "Custom designs", "Start from your own idea or inspo photo."],
                [BadgePercent, "Budget-led options", "Choose a size and design that fits your spend."],
                [Gift, "Offers on selected orders", "Free cupcakes, discounts and seasonal offers may be available."],
              ] as [LucideIcon, string, string][]).map(([Icon, title, text]) => (
                <div key={title} className="rounded-2xl bg-white/7 border border-white/10 p-4">
                  <Icon className="w-5 h-5 text-[#D49B4B]" />
                  <div className="font-bold text-sm mt-3">{title}</div>
                  <p className="text-xs text-white/65 mt-1.5 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#D49B4B]/30 p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E8721C]">Current offers</div>
              <h3 className="font-serif-display text-3xl font-bold text-[#251F50] mt-2">Ask before you order</h3>
              <p className="text-sm text-[#6E5D54] mt-3 leading-relaxed">
                Offers change from time to time. Depending on the order, you may qualify for free cupcakes, a discount or another promotion.
              </p>
              <div className="mt-5 space-y-3 text-sm text-[#251F50]">
                <div className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" /><span>Selected orders may include <strong>free cupcakes</strong>.</span></div>
                <div className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" /><span><strong>Discounts and seasonal offers</strong> may be available.</span></div>
                <div className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#1E8E5A] shrink-0" /><span>Final pricing depends on <strong>size, flavour, design and extras</strong>.</span></div>
              </div>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm px-5 py-3.5 shadow-md">
              <MessageCircle className="w-4 h-4 fill-white/20" /> Ask About Current Offers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
