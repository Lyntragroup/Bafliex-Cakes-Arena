import React, { useState } from "react";
import { MessageCircle, Sparkles, Info, Heart } from "lucide-react";
import { CAKE_PRICE_TABLES, buildWhatsAppLink } from "../data/cakesData";

const fmt = (n: number) => n.toLocaleString("en-KE");

export const PriceGridSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1); // default: Premium & Spongy
  const table = CAKE_PRICE_TABLES[activeIdx];

  return (
    <section id="price-grid" className="py-20 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4C4590]/12 text-[#4C4590] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Bafliex Price List</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            Pound & Sponge Cake Prices —{" "}
            <span className="italic font-normal text-[#E8721C]">
              Our Full Flavour Grid
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            Not every cake is a sponge cake! We bake rich <strong className="text-[#251F50]">pound cakes in many flavours</strong>, light <strong className="text-[#251F50]">premium & spongy cakes</strong>, and everyday <strong className="text-[#251F50]">non-spongy classics</strong> — finished in your choice of fresh soft cream icing or crisp hard fondant icing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {CAKE_PRICE_TABLES.map((t, idx) => {
            const active = idx === activeIdx;
            return (
              <button
                key={t.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  active
                    ? "bg-[#251F50] text-white border-[#D49B4B] shadow-xl -translate-y-0.5"
                    : "bg-white text-[#251F50] border-[#D49B4B]/30 hover:border-[#E8721C]/40 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-serif-display font-bold text-lg sm:text-xl">
                    {t.name}
                  </span>
                  <span
                    className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0 ${
                      active
                        ? "bg-[#E8721C] text-white"
                        : "bg-[#E8721C]/12 text-[#E8721C]"
                    }`}
                  >
                    {t.icing}
                  </span>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    active ? "text-white/75" : "text-[#6E5D54]"
                  }`}
                >
                  {t.blurb}
                </p>
              </button>
            );
          })}
        </div>

        {/* Price Table */}
        <div className="rounded-3xl bg-white border border-[#D49B4B]/35 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 sm:px-7 py-4 bg-[#251F50] text-white">
            <div className="font-serif-display font-bold text-lg sm:text-xl">
              {table.name}{" "}
              <span className="font-sans-body font-normal text-xs sm:text-sm text-[#D49B4B]">
                • {table.icing}
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-white/75">
              Prices in Ksh • 1 flavour or a combo of 2–3 flavours at no extra cost
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-[#F5EEE6] border-b border-[#D49B4B]/30">
                  <th className="text-left font-bold text-[#251F50] uppercase tracking-wider text-[11px] px-5 py-3">
                    Flavour
                  </th>
                  {table.weights.map((w) => (
                    <th
                      key={w}
                      className="text-right font-mono-price font-bold text-[#251F50] text-xs px-3 py-3 whitespace-nowrap"
                    >
                      {w}kg
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.flavors.map((flavor, i) => (
                  <tr
                    key={flavor.name}
                    className={`border-b border-[#D49B4B]/15 hover:bg-[#E8721C]/5 transition-colors ${
                      i % 2 === 1 ? "bg-[#FDFBF7]" : "bg-white"
                    }`}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-[#251F50] text-xs sm:text-sm">
                          {flavor.name}
                        </span>
                        {flavor.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-[#4C4590]/10 text-[#4C4590]">
                            {flavor.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    {flavor.prices.map((price, wi) => (
                      <td
                        key={wi}
                        className="text-right font-mono-price text-xs sm:text-[13px] px-3 py-3 text-[#251F50] whitespace-nowrap"
                      >
                        {fmt(price)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Notes */}
          <div className="px-5 sm:px-7 py-4 bg-[#FDFBF7] border-t border-[#D49B4B]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2 text-[11px] sm:text-xs text-[#6E5D54]">
              <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#E8721C]" />
              <span>
                Weight shown is a guide grid (full grids go up to 7–8 kg). Final quote depends on flavour,
                size & design — decorative add-ons may attract small extra charges. Cakes made fresh to order.
              </span>
            </div>
            <a
              href={buildWhatsAppLink(
                `Hello Bafliex Cakes Arena! I'd like to order from your *${table.name}* (${table.icing}) range. Please advise on flavours, size and design prices.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1E8E5A] hover:bg-[#16794B] text-white font-bold text-xs sm:text-sm shadow-md whitespace-nowrap transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Order {table.name} on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-5 text-center text-xs text-[#6E5D54] flex items-center justify-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#E8721C] fill-[#E8721C]" />
          <span>Custom sculpted designs priced on complexity — send your reference on WhatsApp for a fast quote.</span>
        </div>
      </div>
    </section>
  );
};
