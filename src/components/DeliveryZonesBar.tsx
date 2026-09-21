import React, { useState } from "react";
import { MapPin, Truck, Clock, CheckCircle, MessageCircle, ShieldAlert } from "lucide-react";
import { DELIVERY_ZONES, buildWhatsAppLink } from "../data/cakesData";

export const DeliveryZonesBar: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>("thika");

  const activeZone =
    DELIVERY_ZONES.find((z) => z.id === selectedZoneId) || DELIVERY_ZONES[0];

  const whatsappZoneUrl = buildWhatsAppLink(
    `Hello Bafliex Cakes Arena! 👋 I'm located in ${activeZone.name} (${activeZone.neighborhoods}) and would like to enquire about ordering a custom cake for delivery.`
  );

  return (
    <section id="delivery-zones" className="py-16 sm:py-20 bg-[#F5EEE6] border-y border-[#D49B4B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D49B4B]/30 text-xs font-semibold text-[#E8721C] mb-3 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
            <span>Cake Delivery Across Thika Road & Nairobi</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">
            See Where We Deliver &{" "}
            <span className="italic font-normal text-[#E8721C]">
              Ask About Your Location
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">
            We offer free delivery to many areas. A small delivery charge may apply depending on your location and the size of the cake. Delivery is arranged after the cake is ready, which takes at least 4 hours. We also serve wedding venues and celebration locations around Nairobi, with about 50km from Ruiru as a practical service-area reference. Exact availability and any transport charge depend on the location and cake size.
          </p>
        </div>

        {/* Interactive Zone Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {DELIVERY_ZONES.map((zone) => {
            const isSelected = zone.id === selectedZoneId;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZoneId(zone.id)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? "bg-[#251F50] text-white border-[#D49B4B] shadow-xl -translate-y-0.5"
                    : "bg-white/80 hover:bg-white text-[#251F50] border-[#D49B4B]/25 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? "bg-[#E8721C] text-white"
                        : "bg-[#E8721C]/12 text-[#E8721C]"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-xs font-mono-price font-semibold px-2.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-[#1E8E5A] text-white"
                        : "bg-[#1E8E5A]/15 text-[#1E8E5A]"
                    }`}
                  >
                    Flexible timing
                  </span>
                </div>
                <div className="font-serif-display font-bold text-lg sm:text-xl">
                  {zone.name}
                </div>
                <div
                  className={`text-xs mt-1 line-clamp-1 ${
                    isSelected ? "text-white/75" : "text-[#6E5D54]"
                  }`}
                >
                  {zone.neighborhoods}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Details Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D49B4B]/35 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#1E8E5A]/12 text-[#1E8E5A] text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Delivery Available in {activeZone.name}
                </span>
                <span className="text-xs font-semibold text-[#E8721C] bg-[#E8721C]/10 px-3 py-1 rounded-full">
                  Free delivery in many areas • Small charge may apply
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#251F50]">
                Areas around {activeZone.name}:
              </h3>

              <p className="text-sm sm:text-base text-[#251F50]/85 font-medium leading-relaxed bg-[#FDFBF7] p-4 rounded-2xl border border-[#D49B4B]/20">
                {activeZone.neighborhoods}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#6E5D54]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E8721C]" />
                  <span>Timing: <strong>Depends on location, traffic & delivery-person availability</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#D49B4B]" />
                  <span>{activeZone.highlight}</span>
                </span>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 bg-[#251F50] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-[#D49B4B]/30">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#D49B4B] font-semibold">
                  Delivery Availability
                </div>
                <div className="font-serif-display text-xl font-bold mt-1">
                  Planning a Celebration in {activeZone.name}?
                </div>
                <p className="text-xs text-white/75 mt-1.5">
                  Chat with our dispatch team on WhatsApp to confirm your delivery option and timing.
                </p>
              </div>

              <a
                href={whatsappZoneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#1E8E5A] hover:bg-[#167A4B] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Check Delivery to {activeZone.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
