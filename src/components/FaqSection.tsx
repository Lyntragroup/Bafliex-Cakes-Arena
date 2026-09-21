import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, buildWhatsAppLink } from "../data/cakesData";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8721C]/12 text-[#E8721C] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            Frequently Asked{" "}
            <span className="italic font-normal text-[#E8721C]">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            Everything you need to know about ordering, custom designs, M-Pesa deposits, and delivery across Juja, Ruiru, Thika, and Nairobi.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-[#D49B4B]/30 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F5EEE6]/50 transition-colors"
                >
                  <span className="font-serif-display font-bold text-lg sm:text-xl text-[#251F50]">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#E8721C] text-white rotate-180"
                        : "bg-[#F5EEE6] text-[#251F50]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#6E5D54] leading-relaxed border-t border-[#D49B4B]/15">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Prompt */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#6E5D54]">
            Have a custom question not listed here?{" "}
            <a
              href={buildWhatsAppLink(
                "Hello Bafliex Cakes Arena! 👋 I have a quick question regarding ordering a custom cake."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#1E8E5A] hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with our Head Baker on WhatsApp →</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
