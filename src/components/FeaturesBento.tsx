import React from "react";
import {
  Sparkles,
  Award,
  Truck,
  Camera,
  ShieldCheck,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";

export const FeaturesBento: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F5EEE6] border-t border-[#D49B4B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B4B]/30 text-xs font-bold text-[#E8721C] uppercase tracking-wider mb-3 shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>The Bafliex Artisanal Standard</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            Why Discerning Kenyans Choose{" "}
            <span className="italic font-normal text-[#E8721C]">
              Bafliex Cakes Arena
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            We combine careful cake craft with practical ordering, customization and delivery support for customers across Thika, Juja, Ruiru and Nairobi.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {/* Card 1: Large Feature (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#D49B4B]/30 shadow-md flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4 max-w-xl relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#E8721C]/12 text-[#E8721C] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8721C]">
                Freshly Made to Order
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251F50]">
                Customised to Your Preference & Budget
              </h3>
              <p className="text-sm sm:text-base text-[#6E5D54] leading-relaxed">
                Tired of cakes that look pretty on the outside but taste dry and overly sweet inside? We bake rich, dense <strong className="text-[#251F50]">pound cakes in many flavours</strong> for sculpted fondant designs, and light, moist <strong className="text-[#251F50]">spongy cakes</strong> covered in fresh soft cream icing — with your preferred flavours, icing style and design. We confirm any special ingredient or dietary requirement before baking.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-[#D49B4B]/20 relative z-10">
              <div>
                <div className="font-serif-display font-bold text-xl sm:text-2xl text-[#251F50]">
                  Dietary Options
                </div>
                <div className="text-xs text-[#6E5D54]">By request</div>
              </div>
              <div>
                <div className="font-serif-display font-bold text-xl sm:text-2xl text-[#E8721C]">
                  Eggless • Dairy-free
                </div>
                <div className="text-xs text-[#6E5D54]">Options available</div>
              </div>
              <div>
                <div className="font-serif-display font-bold text-xl sm:text-2xl text-[#1E8E5A]">
                  Fresh Bake
                </div>
                <div className="text-xs text-[#6E5D54]">Alcohol-free on request</div>
              </div>
            </div>
          </div>

          {/* Card 2: Send Any Reference Photo (5 Cols) */}
          <div className="lg:col-span-5 bg-[#251F50] text-white rounded-3xl p-7 sm:p-9 border border-[#D49B4B]/35 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D49B4B]/20 text-[#D49B4B] flex items-center justify-center">
                <Camera className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D49B4B]">
                Pinterest & Instagram Ready
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                Have a Dream Cake Screenshot? Send It on WhatsApp!
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Found a gorgeous cake on Pinterest, Instagram, or TikTok? Send us the screenshot on WhatsApp along with your budget and guest count—our pastry artists will recreate it with precision.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15">
              <a
                href={buildWhatsAppLink(
                  "Hello Bafliex Cakes Arena! 👋 I have a screenshot of a cake design I'd love for you to recreate. Can I share the photo here for a quote?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Send Your Cake Photo on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Flexible Cake Delivery (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#D49B4B]/30 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1E8E5A]/12 text-[#1E8E5A] flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E8E5A]">
                Flexible Cake Delivery
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251F50]">
                Delivery After Your Cake Is Ready
              </h3>
              <p className="text-sm text-[#6E5D54] leading-relaxed">
                Cake preparation takes at least 4 hours. Once your cake is ready, we can arrange delivery to your location. Delivery is free to many areas, while a small charge may apply depending on your location and the size of the cake.
              </p>
            </div>

            <div className="pt-4 mt-4 flex items-center gap-2 text-xs font-semibold text-[#1E8E5A]">
              <ShieldCheck className="w-4 h-4" />
              <span>Delivery timing depends on location, traffic conditions & delivery-person availability</span>
            </div>
          </div>

          {/* Card 4: Flexible M-Pesa Booking (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl p-7 sm:p-9 border border-[#D49B4B]/30 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D49B4B]/20 text-[#E8721C] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8721C]">
                Seamless Kenyan Payments
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251F50]">
                Simple M-Pesa Payment
              </h3>
              <p className="text-sm sm:text-base text-[#6E5D54] leading-relaxed">
                Ordering a custom cake should be stress-free. Once your cake details, availability and final price are confirmed, we will share the payment instructions. Our M-Pesa Buy Goods Till is 678814.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#D49B4B]/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#1E8E5A]/15 text-[#1E8E5A] font-mono-price font-bold text-xs sm:text-sm">
                  Lipa na M-Pesa • Official Till
                </div>
                <span className="text-xs text-[#6E5D54]">
                  Buy Goods Till 678814
                </span>
              </div>
              <a
                href="#pricing"
                className="text-xs sm:text-sm font-bold text-[#E8721C] hover:underline"
              >
                Explore Weight Pricing Guide →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
