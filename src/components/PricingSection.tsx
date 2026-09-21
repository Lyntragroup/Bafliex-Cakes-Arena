import React from "react";
import { CheckCircle2, MessageCircle, Phone, Sparkles, Gift, ExternalLink } from "lucide-react";
import {
  PRICING_TIERS,
  CONTACT_INFO,
  CAKE_ADD_ONS,
  SOCIAL_LINKS,
  buildWhatsAppLink,
} from "../data/cakesData";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#F5EEE6] border-t border-[#D49B4B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B4B]/30 text-xs font-bold text-[#E8721C] uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Weight & Portion Pricing</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            Simple, Honest Pricing for{" "}
            <span className="italic font-normal text-[#E8721C]">
              Every Celebration Size
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            Our prices are based on the cake size, type, flavour, icing and design selected. Custom designs and decorative extras may change the final quote. We will confirm the final price with you before booking.
          </p>
        </div>

        {/* 3 Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const tierWhatsAppUrl = buildWhatsAppLink(
              `Hello Bafliex Cakes Arena! 👋 I'm interested in booking the *${tier.name}* (${tier.weight} - ${tier.price}). Please share available flavors and booking steps!`
            );

            return (
              <div
                key={tier.name}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "bg-[#251F50] text-white border-2 border-[#D49B4B] shadow-2xl lg:-translate-y-2"
                    : "bg-white text-[#251F50] border border-[#D49B4B]/35 shadow-md"
                }`}
              >
                {tier.badge && (
                  <div
                    className={`self-start px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                      tier.popular
                        ? "bg-[#E8721C] text-white"
                        : "bg-[#E8721C]/12 text-[#E8721C]"
                    }`}
                  >
                    {tier.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-serif-display font-bold text-2xl sm:text-3xl">
                    {tier.name}
                  </h3>
                  <div
                    className={`text-xs font-semibold mt-1 ${
                      tier.popular ? "text-[#D49B4B]" : "text-[#E8721C]"
                    }`}
                  >
                    {tier.weight} • {tier.servings}
                  </div>

                  <div className="my-6 pt-5 border-t border-current/15">
                    <div className="font-mono-price font-bold text-3xl sm:text-4xl">
                      {tier.price}
                    </div>
                    <p
                      className={`text-xs mt-2 ${
                        tier.popular ? "text-white/75" : "text-[#6E5D54]"
                      }`}
                    >
                      {tier.bestFor}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            tier.popular ? "text-[#D49B4B]" : "text-[#1E8E5A]"
                          }`}
                        />
                        <span className={tier.popular ? "text-white/90" : "text-[#251F50]/85"}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div className="space-y-2.5 pt-4 border-t border-current/15">
                  <a
                    href={tierWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm shadow-lg transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Book {tier.weight.split(" ")[0]} on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors ${
                      tier.popular
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-[#6E5D54] hover:text-[#251F50] hover:bg-[#F5EEE6]"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8721C]" />
                    <span>Or Call {CONTACT_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facebook Special Promo Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#E8721C]/12 via-[#D9A53A]/15 to-[#4C4590]/12 border border-[#D9A53A]/40 px-5 sm:px-6 py-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#E8721C] text-white flex items-center justify-center shrink-0 shadow-md">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-[#251F50]">
                Selected Orders: FREE Cupcakes & Seasonal Offers
              </div>
              <p className="text-xs sm:text-sm text-[#6E5D54] mt-0.5">
                From time to time, we run{" "}
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1877F2] hover:underline"
                >
                  Facebook page
                </a>{" "}
                — free cupcakes, discounts and other offers may be available on selected orders. Ask us about current offers when you order.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink(
              "Hello Bafliex Cakes Arena! I'd like to order a custom cake. Please let me know about any current free cupcake offers or discounts for my order."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E8E5A] hover:bg-[#16794B] text-white font-bold text-xs sm:text-sm shadow-md whitespace-nowrap transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Claim Promo on WhatsApp</span>
          </a>
        </div>

        {/* Popular Extras & Add-ons Price Guide */}
        <div className="mt-6 bg-white rounded-3xl border border-[#D49B4B]/35 shadow-md p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h3 className="font-serif-display font-bold text-2xl sm:text-3xl text-[#251F50]">
                Popular Extras &{" "}
                <span className="italic font-normal text-[#E8721C]">Add-ons</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5D54] mt-1">
                Finishing touches for your custom cake — tap any extra to confirm availability instantly.
              </p>
            </div>
            <a
              href={SOCIAL_LINKS.whatsappCatalog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E8E5A] hover:underline shrink-0"
            >
              <span>See live catalog prices</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CAKE_ADD_ONS.map((addon) => (
              <a
                key={addon.name}
                href={buildWhatsAppLink(
                  `Hello Bafliex Cakes Arena! I'd like to add the "${addon.name}" (${addon.price}) to my custom cake order.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/25 hover:border-[#E8721C]/50 hover:bg-[#E8721C]/5 transition-all group"
              >
                <span className="text-sm font-semibold text-[#251F50]">
                  {addon.name}
                </span>
                <span className="font-mono-price font-bold text-xs sm:text-sm text-[#E8721C] whitespace-nowrap">
                  {addon.price}
                </span>
              </a>
            ))}
          </div>
          <p className="text-[11px] text-[#6E5D54] mt-4 text-center">
            Add-on prices are guide rates confirmed via WhatsApp before baking. Walk-ins welcome at T-Plaza, 1st Floor, Kenyatta Highway, Thika.
          </p>
        </div>
      </div>
    </section>
  );
};
