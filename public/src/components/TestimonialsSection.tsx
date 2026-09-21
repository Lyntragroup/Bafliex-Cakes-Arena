import React from "react";
import { ExternalLink, Quote, Star, MessageCircle, MapPin } from "lucide-react";
import { SOCIAL_LINKS, buildWhatsAppLink } from "../data/cakesData";

export const TestimonialsSection: React.FC = () => {
  const googleUrl = SOCIAL_LINKS.googleMaps;
  const whatsappUrl = buildWhatsAppLink(
    "Hello Bafliex Cakes Arena! 👋 I'd like to see recent customer cakes and reviews before placing an order."
  );

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B4B]/15 text-[#251F50] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#D49B4B] text-[#D49B4B]" />
            <span>4.8★ on Google • 23 Reviews</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            What Customers Say on <span className="italic font-normal text-[#E8721C]">Google</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            We only use customer feedback that can be traced to the public Google listing. Read the full set of reviews directly on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          <article className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D49B4B]/30 shadow-md relative overflow-hidden">
            <Quote className="w-11 h-11 text-[#D49B4B]/20 absolute top-5 right-5" />
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D49B4B] text-[#D49B4B]" />
              ))}
            </div>
            <p className="text-base text-[#251F50]/90 leading-relaxed italic">
              “Did a very good job for my cake. What I wanted is what I got.”
            </p>
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#D49B4B]/20">
              <div className="w-11 h-11 rounded-full bg-[#251F50] text-white flex items-center justify-center font-bold">G</div>
              <div>
                <div className="font-bold text-sm text-[#251F50]">Google reviewer</div>
                <div className="text-xs text-[#6E5D54] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> Bafliex Cakes Arena • Thika
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[#251F50] text-white rounded-3xl p-6 sm:p-8 border border-[#D49B4B]/35 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D49B4B] font-bold">Google rating</div>
              <div className="font-serif-display text-5xl sm:text-6xl font-bold mt-3">4.8/5</div>
              <p className="text-sm text-white/75 mt-3 leading-relaxed">
                The public Google listing currently shows 23 customer reviews for Bafliex Cakes Arena.
              </p>
            </div>
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#251F50] font-bold text-sm hover:bg-[#F5EEE6] transition-colors">
              <ExternalLink className="w-4 h-4" />
              Read All Google Reviews
            </a>
          </article>

          <article className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D49B4B]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#E8721C] font-bold">Google-indexed listing</div>
              <h3 className="font-serif-display text-2xl font-bold text-[#251F50] mt-3">Popular cake orders</h3>
              <p className="text-sm text-[#6E5D54] mt-3 leading-relaxed">
                Publicly indexed Google information highlights Spider-Man Cake, Frozen Themed Cake and Birthday Cakes among recommended dishes.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm transition-all">
              <MessageCircle className="w-4 h-4 fill-white/20" />
              Ask About Recent Bakes
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};
