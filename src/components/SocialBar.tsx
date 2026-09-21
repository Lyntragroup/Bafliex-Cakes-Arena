import React from "react";
import {
  MapPin,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Play,
  Users,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "./SocialLinks";
import { SOCIAL_LINKS, SOCIAL_STATS } from "../data/cakesData";

const PLATFORMS = [
  {
    label: "Facebook",
    handle: "@bafliexcakes",
    stat: "ORDER & we DELIVER • Free cupcake promos",
    href: SOCIAL_LINKS.facebook,
    bubble: "bg-[#1877F2]",
    icon: <FacebookIcon className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    handle: "@bafliexcakes",
    stat: `${SOCIAL_STATS.instagramFollowers} Followers • ${SOCIAL_STATS.instagramPosts} posts of fresh bakes`,
    href: SOCIAL_LINKS.instagram,
    bubble: "bg-gradient-to-tr from-[#F9CE34] via-[#EE2A7B] to-[#6228D7]",
    icon: <InstagramIcon className="w-5 h-5" />,
  },
  {
    label: "TikTok",
    handle: "@bafliexcakes",
    stat: `${SOCIAL_STATS.tiktokFollowers} Followers • ${SOCIAL_STATS.tiktokVideos} behind-the-scenes videos`,
    href: SOCIAL_LINKS.tiktok,
    bubble: "bg-[#010101]",
    icon: <TikTokIcon className="w-5 h-5" />,
  },
];

export const SocialBar: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-[#FDFBF7] border-t border-[#D49B4B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8721C]/12 text-[#E8721C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Follow @bafliexcakes</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#251F50]">
              A Taste of Heaven,{" "}
              <span className="italic font-normal text-[#E8721C]">
                Served Fresh Daily
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E5D54] mt-2 max-w-xl">
              Watch our cakes being piped, stacked and boxed every morning — and browse the full live cake catalog on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[#6E5D54]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D49B4B]/30">
              <Users className="w-3.5 h-3.5 text-[#E8721C]" />
              {SOCIAL_STATS.instagramFollowers} on Instagram
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D49B4B]/30">
              <Play className="w-3.5 h-3.5 text-[#010101] fill-[#E8721C] stroke-none" />
              {SOCIAL_STATS.tiktokLikes} TikTok Likes
            </span>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-5">
          {PLATFORMS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D49B4B]/30 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${p.bubble} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}
              >
                {p.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-[#251F50] text-sm">
                  {p.label}{" "}
                  <span className="font-normal text-[#6E5D54]">{p.handle}</span>
                </div>
                <div className="text-xs text-[#6E5D54] mt-0.5 truncate">
                  {p.stat}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#D49B4B] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>

        {/* Maps + WhatsApp Catalog Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={SOCIAL_LINKS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-[#251F50] border border-[#D49B4B]/40 shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#4285F4] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-white text-sm">
                Get Directions on Google Maps
              </div>
              <div className="text-xs text-white/70 mt-0.5 truncate">
                T-Plaza Building, Kenyatta Highway, Thika Town
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#D49B4B] shrink-0" />
          </a>

          <a
            href={SOCIAL_LINKS.whatsappCatalog}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#1E8E5A] to-[#16794B] border border-[#1E8E5A] shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 fill-white/25" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-white text-sm">
                Browse Our Live WhatsApp Cake Catalog
              </div>
              <div className="text-xs text-white/85 mt-0.5 truncate">
                Real photos of today's bakes — tap to open in WhatsApp
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/90 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
