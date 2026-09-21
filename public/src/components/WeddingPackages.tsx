import React, { useMemo, useState } from "react";
import { CheckCircle2, HeartHandshake, MessageCircle, Printer, Sparkles, Users, X } from "lucide-react";
import { ALL_FLAVOURS, CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";
import { buildWeddingPdf, sharePdf } from "../utils/pdfGenerator";
import { printElementById } from "../utils/printUtils";

const BASE_RATE = 2500;

interface WeddingPackage {
  id: string;
  title: string;
  guests: string;
  totalKg: number;
  mainKg: number;
  mainTiers: number;
  sideCount: number;
  sideKgEach: number;
  precut: number;
  catalogueEstimate: string;
  image: string;
  badge?: string;
  anniversaryCake?: boolean;
}

const PACKAGES: WeddingPackage[] = [
  { id: "w200-classic", title: "Classic 200-250", guests: "200-250 guests", totalKg: 10, mainKg: 5, mainTiers: 2, sideCount: 5, sideKgEach: 1, precut: 50, catalogueEstimate: "Ksh 26,000-31,000", image: "/images/wedding-200-250-classic.jpg", badge: "Classic", anniversaryCake: true },
  { id: "w200-enhanced", title: "Enhanced 200-250", guests: "200-250 guests", totalKg: 10.5, mainKg: 6, mainTiers: 5, sideCount: 6, sideKgEach: 0.75, precut: 50, catalogueEstimate: "Ksh 27,000-30,000", image: "/images/wedding-200-250-enhanced.jpg", badge: "More Showpiece" },
  { id: "w250", title: "250-300", guests: "250-300 guests", totalKg: 10, mainKg: 6, mainTiers: 3, sideCount: 4, sideKgEach: 1, precut: 50, catalogueEstimate: "Ksh 26,000-30,000", image: "/images/wedding-250-300.jpg", badge: "Popular", anniversaryCake: true },
  { id: "w300", title: "300-350", guests: "300-350 guests", totalKg: 11, mainKg: 6, mainTiers: 3, sideCount: 5, sideKgEach: 1, precut: 100, catalogueEstimate: "Ksh 28,500-33,500", image: "/images/wedding-300-350.jpg", badge: "300+", anniversaryCake: true },
  { id: "w400", title: "400-500", guests: "400-500 guests", totalKg: 15, mainKg: 10, mainTiers: 5, sideCount: 5, sideKgEach: 1, precut: 100, catalogueEstimate: "Ksh 37,500-40,000", image: "/images/wedding-400-500.jpg", badge: "Large Wedding" },
  { id: "w500", title: "500-600", guests: "500-600 guests", totalKg: 18, mainKg: 12, mainTiers: 5, sideCount: 6, sideKgEach: 1, precut: 100, catalogueEstimate: "Ksh 45,000-50,000", image: "/images/wedding-500-600.jpg", badge: "Grand Wedding" },
];

function formatDate(value: string) {
  if (!value) return "To be confirmed";
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-KE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function money(value: number) {
  return `Ksh ${value.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
}

function makeEstimateNumber() {
  const now = new Date();
  const stamp = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const suffix = Math.floor(100 + Math.random() * 900);
  return `Q-BCA${stamp}${suffix}`;
}

const emptyFlavours = ["", "", "", ""];

export const WeddingPackages: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(PACKAGES[0].id);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [mainKg, setMainKg] = useState("5");
  const [mainTiers, setMainTiers] = useState("2");
  const [sideCount, setSideCount] = useState("5");
  const [sideKgEach, setSideKgEach] = useState("1");
  const [precut, setPrecut] = useState("50");
  const [flavours, setFlavours] = useState<string[]>(emptyFlavours);
  const [design, setDesign] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [catalogInspo, setCatalogInspo] = useState<{ id: string; src: string; title: string; category: string } | null>(null);
  const [transport, setTransport] = useState<"confirm" | "not-required">("confirm");
  const [generated, setGenerated] = useState(false);
  const [estimateNumber] = useState(makeEstimateNumber);

  const selected = PACKAGES.find((item) => item.id === selectedId) ?? null;
  const mainWeight = Math.max(0, Number(mainKg) || 0);
  const sideQty = Math.max(0, Number(sideCount) || 0);
  const sideEach = Math.max(0, Number(sideKgEach) || 0);
  const precutCount = Math.max(0, Number(precut) || 0);
  const sideTotalKg = sideQty * sideEach;
  const totalKg = Number((mainWeight + sideTotalKg).toFixed(2));
  const total = Math.round(totalKg * BASE_RATE);
  const cleanFlavours = flavours.filter(Boolean);
  const quoteDate = useMemo(() => formatDate(new Date().toISOString().slice(0, 10)), []);

  React.useEffect(() => {
    const stored = localStorage.getItem("bafliex:selectedInspo");
    if (stored) { try { const parsed = JSON.parse(stored); if (parsed?.id) setCatalogInspo(parsed); } catch { localStorage.removeItem("bafliex:selectedInspo"); } }
    const handleSelection = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail?.id && detail?.src) setCatalogInspo(detail);
    };
    window.addEventListener("bafliex:select-inspo", handleSelection);
    return () => window.removeEventListener("bafliex:select-inspo", handleSelection);
  }, []);

  const applyPackage = (pkg: WeddingPackage) => {
    setSelectedId(pkg.id);
    setMainKg(String(pkg.mainKg));
    setMainTiers(String(pkg.mainTiers));
    setSideCount(String(pkg.sideCount));
    setSideKgEach(String(pkg.sideKgEach));
    setPrecut(String(pkg.precut));
    setFlavours(emptyFlavours);
  };

  const handleFlavourChange = (index: number, value: string) => {
    const next = [...flavours];
    next[index] = value;
    const unique = next.filter((item, i) => !item || next.indexOf(item) === i);
    setFlavours(unique.length === 4 ? unique : next);
  };

  const complimentaryItems = [
    `${precutCount || 0} pre-cut cake pieces`,
    "Wedding cake setup",
    "Cake stands",
    "Serving plates",
    "Cutlery",
    "2 sets of wine glasses",
    "Non-alcoholic sparkling champagne",
    ...(selected?.anniversaryCake ? ["Free anniversary cake"] : []),
  ];

  const quoteMessage = `Hello Bafliex Cakes Arena! I generated a wedding cake estimate on your website.\n\n*Wedding Cake Estimate*\n*Estimate #:* ${estimateNumber}\n*Client:* ${clientName || "To be provided"}\n*Phone:* ${clientPhone || "To be provided"}\n*Guests:* ${selected?.guests || "Custom"}\n*Package:* ${selected?.title || "Custom Wedding Package"}\n*Main cake:* ${mainWeight}kg, ${mainTiers || "-"} tiers\n*Side cakes:* ${sideQty} pieces, ${sideEach}kg each\n*Total cake:* ${totalKg}kg\n*Pre-cut cakes:* ${precutCount} pieces\n*Flavours:* ${cleanFlavours.length ? cleanFlavours.join(", ") : "To be confirmed"}\n*Design / colour theme:* ${design || "To be discussed"}\n*Catalogue inspo:* ${catalogInspo ? `${catalogInspo.title} — ${catalogInspo.src}` : "None selected"}\n*Event date:* ${eventDate ? formatDate(eventDate) : "To be confirmed"}\n*Location:* ${location || "To be confirmed"}\n*Preferred budget:* ${budget ? money(Number(budget)) : "To be discussed"}\n*Special notes:* ${notes || "None"}\n*Base cake estimate:* ${money(total)}\n*Transport:* ${transport === "not-required" ? "Not required" : "To be confirmed based on location/package"}\n\n*Complimentary items:*\n${complimentaryItems.map((item) => `- ${item}`).join("\n")}\n\nPlease confirm the final flavour, design, quantities, extras and any applicable transport charge.`;
  const whatsappUrl = buildWhatsAppLink(quoteMessage);

  const handleSharePdf = async () => {
    const blob = buildWeddingPdf({
      estimateNumber, quoteDate, clientName, clientPhone, eventDate: eventDate ? formatDate(eventDate) : "To be confirmed",
      guests: selected?.guests || "Custom", packageTitle: selected?.title || "Custom Wedding Package", mainKg: mainWeight, mainTiers,
      sideQty, sideEach, totalKg, precut: precutCount, flavours: cleanFlavours.join(", "), design, location, notes, budget, total, complimentary: complimentaryItems,
      transport: transport === "not-required" ? "Not required" : "To be confirmed based on location / package"
    });
    try {
      const result = await sharePdf(blob, `Bafliex-Wedding-Estimate-${estimateNumber}.pdf`, `Bafliex Cakes Arena wedding cake estimate ${estimateNumber}`);
      if (!result.shared && !navigator.share) alert("The PDF was downloaded. You can attach it in WhatsApp.");
    } catch (error) {
      if ((error as DOMException)?.name !== "AbortError") alert("The PDF was downloaded. You can attach it in WhatsApp.");
    }
  };

  return (
    <section id="wedding" className="py-20 sm:py-24 bg-[#F5EEE6] border-t border-[#D49B4B]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8721C]/12 text-[#E8721C] text-xs font-bold uppercase tracking-wider mb-3"><HeartHandshake className="w-3.5 h-3.5" /> Wedding Cakes</div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">Wedding Cake <span className="italic font-normal text-[#E8721C]">Estimate Builder</span></h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3 leading-relaxed">Choose a sample package or build your own quantities. You can use a package as a starting point, or ignore the samples completely. We use <strong>Ksh 2,500 per kg</strong> as a base estimate for the cake. Final pricing may change with flavour, design, cake quantity and extras. We work around your preference and budget.</p>
          <div className="mt-4 rounded-2xl bg-white/75 border border-[#D49B4B]/25 px-4 py-3 text-left shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#E8721C]">Tip before you start</div>
            <p className="text-xs sm:text-sm text-[#6E5D54] mt-1 leading-relaxed"><strong className="text-[#251F50]">Step 0:</strong> Pick a real Bafliex wedding/Ruracio design as your inspo first, if you have one. Tap <strong>Use as Inspo</strong>; we'll bring you back here to continue with the quantities, flavours, design and budget.</p>
            <button type="button" onClick={() => { try { localStorage.setItem("bafliex:inspoReturnTo", "wedding"); } catch {} document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#251F50] underline underline-offset-2">Browse Wedding &amp; Ruracio Inspo →</button>
          </div>
        </div>

        {catalogInspo && (
          <div className="mb-6 rounded-2xl bg-[#FFF5E9] border border-[#E8721C]/25 p-3 sm:p-4 flex items-center gap-3">
            <img src={catalogInspo.src} alt={catalogInspo.title} className="w-16 h-16 rounded-xl object-cover border border-[#D49B4B]/20" loading="lazy" />
            <div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider font-bold text-[#E8721C]">Wedding inspo selected</div><div className="text-sm font-bold text-[#251F50] mt-0.5 truncate">{catalogInspo.title}</div><div className="text-[11px] text-[#6E5D54] mt-0.5">Next: continue with your cake quantities, flavours and design.</div></div>
            <button type="button" onClick={() => { setCatalogInspo(null); localStorage.removeItem("bafliex:selectedInspo"); }} className="text-[11px] font-bold text-[#251F50] underline">Remove</button>
          </div>
        )}

        <div className="mb-10">
          <div className="flex items-end justify-between gap-3 mb-4"><div><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C]">Step 1</div><h3 className="font-serif-display text-2xl font-bold text-[#251F50]">Choose a sample package - or start custom</h3></div><button type="button" onClick={() => { setSelectedId(null); setMainKg(""); setMainTiers(""); setSideCount(""); setSideKgEach(""); setPrecut("50"); }} className={`px-4 py-2 rounded-full text-xs font-bold border ${selectedId === null ? "bg-[#251F50] text-white border-[#251F50]" : "bg-white text-[#251F50] border-[#D49B4B]/30"}`}>Start Custom</button></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {PACKAGES.map((pkg) => {
              const active = selectedId === pkg.id;
              return (
                <div key={pkg.id} className={`overflow-hidden rounded-2xl bg-white border ${active ? "border-[#E8721C] ring-2 ring-[#E8721C]/20 shadow-xl" : "border-[#D49B4B]/25 shadow-sm"}`}>
                  <img src={pkg.image} alt={`${pkg.title} wedding cake`} className="w-full h-36 sm:h-40 object-cover" loading="lazy" />
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2"><div><h4 className="font-serif-display text-xl font-bold text-[#251F50]">{pkg.title}</h4><div className="text-xs text-[#6E5D54] mt-1 flex items-center gap-1"><Users className="w-3.5 h-3.5" />{pkg.guests}</div></div><span className="px-2.5 py-1 rounded-full bg-[#F5EEE6] text-[10px] font-bold text-[#E8721C]">{pkg.badge}</span></div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-[#3E3454] mt-3"><div><strong>Main</strong><br />{pkg.mainKg}kg • {pkg.mainTiers} tiers</div><div><strong>Side cakes</strong><br />{pkg.sideCount} × {pkg.sideKgEach}kg</div><div><strong>Total cake</strong><br />{pkg.totalKg}kg</div><div><strong>Free precuts</strong><br />{pkg.precut} pieces</div></div>
                    <div className="flex items-center justify-between mt-4 gap-3"><div><div className="text-[10px] uppercase tracking-wide text-[#6E5D54]">Base estimate</div><div className="font-mono-price font-bold text-lg text-[#251F50]">{money(pkg.totalKg * BASE_RATE)}</div></div><button type="button" onClick={() => applyPackage(pkg)} className={`px-4 py-2.5 rounded-xl text-xs font-bold ${active ? "bg-[#E8721C] text-white" : "bg-[#251F50] text-white"}`}>{active ? "Selected" : "Use Package"}</button></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-[#D49B4B]/25 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2"><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C] mb-2">Step 2 - Cake quantities</div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3"><label className="text-xs font-semibold text-[#6E5D54]">Main cake (kg)<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter the main cake weight.</span><input value={mainKg} onChange={(e) => { setSelectedId(null); setMainKg(e.target.value); }} inputMode="decimal" placeholder="e.g. 6" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54]">Main cake tiers<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter the number of tiers.</span><input value={mainTiers} onChange={(e) => { setSelectedId(null); setMainTiers(e.target.value); }} inputMode="numeric" placeholder="e.g. 3" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54]">Side cakes (pieces)<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter how many side cakes.</span><input value={sideCount} onChange={(e) => { setSelectedId(null); setSideCount(e.target.value); }} inputMode="numeric" placeholder="e.g. 5" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54]">Side cake kg each<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter the weight of each side cake.</span><input value={sideKgEach} onChange={(e) => { setSelectedId(null); setSideKgEach(e.target.value); }} inputMode="decimal" placeholder="e.g. 1" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label></div></div>

              <div><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C] mb-2">Step 3 - Flavours</div><div className="text-[10px] text-[#9A8E86] mb-2">Select up to 4 flavours for the wedding cake.</div><div className="space-y-2">{flavours.map((value, index) => <div key={index} className="flex items-center gap-2"><select value={value} onChange={(e) => handleFlavourChange(index, e.target.value)} className="w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm"><option value="">{index === 0 ? "Choose flavour 1" : `Choose flavour ${index + 1} (optional)`}</option>{ALL_FLAVOURS.map((flavour) => <option key={flavour} value={flavour} disabled={flavours.includes(flavour) && flavours[index] !== flavour}>{flavour}</option>)}</select></div>)}</div><p className="text-[11px] text-[#6E5D54] mt-2">Wedding estimates allow up to 4 flavours.</p></div>

              <div><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C] mb-2">Step 4 - Event</div><div className="space-y-3"><label className="text-xs font-semibold text-[#6E5D54] block">Client name<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter the person we should address the estimate to.</span><input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Your name" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54] block">Phone number<span className="block mt-1 text-[10px] font-normal text-[#9A8E86]">Enter the best WhatsApp/contact number.</span><input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="07xx xxx xxx" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54] block">Event date<input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label><label className="text-xs font-semibold text-[#6E5D54] block">Venue / location<input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Venue, estate, town" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /></label></div></div>

              <div className="sm:col-span-2"><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C] mb-2">Step 5 - Design, budget & notes</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><label className="text-xs font-semibold text-[#6E5D54]">Design / colour theme<textarea value={design} onChange={(e) => setDesign(e.target.value)} rows={3} placeholder="Describe your preferred design, colours, tiers or send inspo on WhatsApp." className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm resize-none" /></label><label className="text-xs font-semibold text-[#6E5D54]">Preferred budget (optional)<input value={budget} onChange={(e) => setBudget(e.target.value)} inputMode="numeric" placeholder="e.g. 35,000" className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm" /><span className="block mt-3">Any special notes<textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="e.g. low sugar, moist, specific flavour on the main cake, etc." className="mt-1.5 w-full rounded-xl border border-[#D49B4B]/30 bg-[#FDFBF7] px-3 py-3 text-sm resize-none" /></span></label></div></div>

              <div className="sm:col-span-2"><div className="text-xs font-bold uppercase tracking-wider text-[#E8721C] mb-2">Step 6 - Delivery</div><div className="flex flex-wrap gap-2"><button type="button" onClick={() => setTransport("confirm")} className={`px-4 py-2.5 rounded-full text-xs font-bold border ${transport === "confirm" ? "bg-[#E8721C] border-[#E8721C] text-white" : "bg-[#FDFBF7] border-[#D49B4B]/25 text-[#251F50]"}`}>Quote transport if applicable</button><button type="button" onClick={() => setTransport("not-required")} className={`px-4 py-2.5 rounded-full text-xs font-bold border ${transport === "not-required" ? "bg-[#1E8E5A] border-[#1E8E5A] text-white" : "bg-[#FDFBF7] border-[#D49B4B]/25 text-[#251F50]"}`}>Not required</button></div></div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28"><div className="rounded-3xl bg-[#251F50] text-white p-5 sm:p-7 shadow-2xl border-2 border-[#D49B4B]/35 space-y-5"><div className="flex items-center justify-between border-b border-white/15 pb-4"><div><div className="text-[11px] uppercase tracking-widest text-[#D49B4B] font-bold">Live wedding estimate</div><h3 className="font-serif-display text-2xl font-bold mt-1">Your Cake Plan</h3></div><div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Sparkles className="w-5 h-5 text-[#D49B4B]" /></div></div><div className="grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl bg-white/5 p-3"><div className="text-white/55 text-[11px]">Main cake</div><strong>{mainWeight || 0}kg</strong><div className="text-white/65 text-xs">{mainTiers || "-"} tiers</div></div><div className="rounded-xl bg-white/5 p-3"><div className="text-white/55 text-[11px]">Side cakes</div><strong>{sideQty || 0} pieces</strong><div className="text-white/65 text-xs">{sideEach || 0}kg each</div></div><div className="rounded-xl bg-white/5 p-3"><div className="text-white/55 text-[11px]">Total cake</div><strong>{totalKg || 0}kg</strong></div><div className="rounded-xl bg-white/5 p-3"><div className="text-white/55 text-[11px]">Precuts</div><strong>{precutCount || 0}</strong></div></div><div><div className="text-xs text-white/55">Flavours</div><div className="mt-2 flex flex-wrap gap-2">{cleanFlavours.length ? cleanFlavours.map((item) => <span key={item} className="px-2.5 py-1 rounded-full bg-[#E8721C]/20 border border-[#E8721C]/30 text-xs">{item}</span>) : <span className="text-sm text-white/70">Select up to 4 flavours</span>}</div></div><div className="rounded-2xl bg-white/10 border border-[#D49B4B]/30 p-4"><div className="text-xs text-white/60">Base cake estimate</div><div className="font-mono-price text-3xl font-extrabold text-[#D49B4B]">{money(total)}</div><div className="text-[11px] text-white/60 mt-1">{totalKg || 0}kg × Ksh 2,500/kg</div></div><div className="rounded-2xl bg-white/5 border border-white/10 p-4"><div className="text-sm font-bold mb-2">Complimentary with selected packages</div><ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/80">{complimentaryItems.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#65D391] shrink-0 mt-0.5" />{item}</li>)}</ul></div><div className="text-xs text-white/65 leading-relaxed">Transport is free to many areas and may attract a small charge depending on location and package. Final flavour, design, extras and transport are confirmed before booking.</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><button type="button" onClick={() => setGenerated(true)} className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#D49B4B] text-[#251F50] font-bold text-sm"><Printer className="w-4 h-4" /> Generate Estimate</button><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#1E8E5A] text-white font-bold text-sm"><MessageCircle className="w-4 h-4" /> Send Estimate to WhatsApp</a></div></div></div>
        </div>

        {generated && <WeddingQuoteModal estimateNumber={estimateNumber} quoteDate={quoteDate} selected={selected} mainWeight={mainWeight} mainTiers={mainTiers} sideQty={sideQty} sideEach={sideEach} totalKg={totalKg} total={total} precutCount={precutCount} cleanFlavours={cleanFlavours} clientName={clientName} clientPhone={clientPhone} eventDate={eventDate} location={location} design={design} budget={budget} notes={notes} catalogInspo={catalogInspo} complimentaryItems={complimentaryItems} whatsappUrl={whatsappUrl} onClose={() => setGenerated(false)} onSharePdf={handleSharePdf} />}

        <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-white/80 border border-[#D49B4B]/25 px-5 py-4 text-xs text-[#6E5D54]"><strong className="text-[#251F50]">Estimate basis:</strong> your wedding estimate starts from the total cake kilograms × Ksh 2,500. This is a base estimate only; flavour, design, quantity, extras and transport can change the final price. We can adjust the plan to your preference and budget.</div>
      </div>
    </section>
  );
};

type QuoteProps = {
  onSharePdf: () => Promise<void>; estimateNumber: string; quoteDate: string; selected: WeddingPackage | null; mainWeight: number; mainTiers: string; sideQty: number; sideEach: number; totalKg: number; total: number; precutCount: number; cleanFlavours: string[]; clientName: string; clientPhone: string; eventDate: string; location: string; design: string; budget: string; notes: string; catalogInspo: { id: string; src: string; title: string; category: string } | null; complimentaryItems: string[]; whatsappUrl: string; onClose: () => void;
};

function WeddingQuoteModal(props: QuoteProps) {
  return (
    <div className="fixed inset-0 z-[90] bg-black/60 p-2 sm:p-5 overflow-y-auto print-overlay">
      <div className="max-w-4xl mx-auto print-hide-top flex justify-end mb-2"><button type="button" onClick={props.onClose} className="w-10 h-10 rounded-full bg-white text-[#251F50] shadow-lg flex items-center justify-center"><X className="w-5 h-5" /></button></div>
      <div id="wedding-quote-printable" className="printable-document wedding-quote-document bg-white text-[#222] shadow-2xl mx-auto max-w-[210mm]">
        <div className="quote-page wedding-print-page min-h-[297mm] p-6 sm:p-10 md:p-12 flex flex-col">
          <QuoteHeader title="Wedding Cake Quote" />
          <div className="grid grid-cols-2 gap-6 mt-8 mb-6 text-sm"><div><div className="font-extrabold uppercase tracking-wide">Bill To</div><div className="mt-1 font-semibold">{props.clientName || "To be provided"}</div><div>{props.clientPhone || "To be provided"}</div></div><div className="grid grid-cols-2 gap-4"><div><div className="font-extrabold uppercase tracking-wide">Estimate #</div><div className="mt-1">{props.estimateNumber}</div></div><div><div className="font-extrabold uppercase tracking-wide">Date</div><div className="mt-1">{props.quoteDate}</div></div><div className="col-span-2"><div className="font-extrabold uppercase tracking-wide">Event Date</div><div className="mt-1">{props.eventDate ? formatDate(props.eventDate) : "To be confirmed"}</div></div></div></div>
          <QuoteTable {...props} />
          <div className="grid grid-cols-2 gap-8 mt-7 text-sm"><div><div><strong>Guests:</strong> {props.selected?.guests || "Custom"}</div><div><strong>Location:</strong> {props.location || "To be confirmed"}</div><div><strong>Design / colour:</strong> {props.design || "To be discussed"}</div><div><strong>Wedding inspo:</strong> {props.catalogInspo?.title || "None selected"}</div><div><strong>Special notes:</strong> {props.notes || "None"}</div></div><div className="bg-[#4C4590] text-white rounded-sm px-5 py-4 flex items-center justify-between h-fit"><span className="font-extrabold text-lg">TOTAL</span><span className="font-mono-price text-xl font-extrabold">{money(props.total)}.00</span></div></div>
          <div className="mt-auto pt-8 text-xs text-[#555] border-t border-[#DDD]"><strong>Estimate basis:</strong> {props.totalKg}kg total cake × Ksh 2,500/kg. Final pricing may change with flavour, design, extras, packaging or transport.</div>
        </div>
        <div className="quote-page wedding-print-page min-h-[297mm] p-6 sm:p-10 md:p-12 border-t-4 border-[#F1F1F6] flex flex-col">
          <QuoteHeader title="Wedding Cake Quote" />
          <div className="grid md:grid-cols-2 gap-8 mt-10"><div><h4 className="text-lg font-extrabold mb-3">Payment Method</h4><div className="text-sm leading-relaxed">M-Pesa Buy Goods Till: <strong>{CONTACT_INFO.mpesaTill}</strong><br /><br />30% upon booking<br />75% @ 3 weeks to event day<br />25% on or before eve of event</div></div><div className="bg-[#4C4590] text-white rounded-sm p-5 flex items-center justify-between h-fit"><span className="font-extrabold text-lg">TOTAL</span><span className="font-mono-price text-xl font-extrabold">{money(props.total)}.00</span></div></div>
          <div className="mt-10 border border-[#D9D9D9] rounded-sm p-6"><h4 className="text-lg font-extrabold mb-4">Package Includes</h4><ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm list-disc pl-5">{props.complimentaryItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="mt-10"><div className="mb-5 rounded-xl bg-[#FFF5E9] border border-[#E8721C]/30 px-4 py-3 text-sm"><strong>N.B.:</strong> This is an estimate. The final price may change depending on the extras added, flavours chosen and the design itself.</div><h4 className="text-lg font-extrabold mb-3">Terms & Conditions</h4><div className="text-sm text-[#555] leading-relaxed space-y-2"><p>Prices are estimates based on the selected cake quantities and a Ksh 2,500 per kg base calculation.</p><p>Wedding cake pricing can change depending on flavour, design, cake quantity and any extras requested.</p><p>Transport / delivery is free to many locations; a small charge may apply depending on location and package.</p><p>Cakes take at least 4 hours to prepare. Delivery time depends on location, traffic conditions and delivery-person availability.</p><p>Final details are confirmed with Bafliex Cakes Arena before booking. We can adjust the cake plan to your preferred budget where possible.</p></div></div>
          <div className="mt-auto pt-10 text-xs text-[#777]"><div className="border-t border-[#DDD] pt-4 flex justify-between"><span>Estimate #{props.estimateNumber}</span><span>2/2</span></div></div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-end mt-3 print-hide-top max-w-4xl mx-auto"><button type="button" onClick={() => printElementById("wedding-quote-printable")} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#251F50] font-bold text-sm shadow-lg"><Printer className="w-4 h-4" /> Print / Save PDF</button><button type="button" onClick={props.onSharePdf} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E8E5A] text-white font-bold text-sm shadow-lg"><MessageCircle className="w-4 h-4" /> Share PDF / WhatsApp</button><a href={props.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#E8721C] text-white font-bold text-sm shadow-lg"><MessageCircle className="w-4 h-4" /> Send Summary to WhatsApp</a></div>
    </div>
  );
}

function QuoteHeader({ title }: { title: string }) {
  return <div className="flex items-start justify-between gap-6 pb-6 border-b-2 border-[#D9D9D9]"><div className="flex items-center gap-4"><img src="/images/bafliex-logo.webp" alt="Bafliex Cakes Arena" className="w-20 sm:w-24 h-auto object-contain" /><div><div className="font-bold text-[#222]">Bafliex Cakes Arena</div><div className="text-xs text-[#555] mt-1">{CONTACT_INFO.phoneDisplay} • bafliexcakes@gmail.com</div></div></div><div className="text-right text-xl sm:text-2xl font-extrabold text-[#35318A]">{title}</div></div>;
}

function QuoteTable(props: QuoteProps) {
  const sideTotalKg = props.sideQty * props.sideEach;
  const mainAmount = Math.round(props.mainWeight * BASE_RATE);
  const sideAmount = Math.round(sideTotalKg * BASE_RATE);
  return <div className="border border-[#9B9BC5] overflow-hidden rounded-sm text-sm"><div className="quote-grid quote-grid-header bg-[#4C4590] text-white font-bold px-3 sm:px-4 py-3"><div>Description</div><div>QTY</div><div>Price</div><div>Amount</div></div><div className="quote-grid quote-grid-row border-t border-[#B9B9D5] px-3 sm:px-4 py-4 items-start"><div><strong>{props.selected?.title || "Custom Wedding Cake"}</strong><div className="mt-1 text-[#444] leading-snug">{props.mainWeight}kg main cake with {props.mainTiers || "-"} tiers. Flavours: {props.cleanFlavours.join(", ") || "To be confirmed"}.</div></div><div>{props.mainWeight}kg</div><div>{money(BASE_RATE)}.00</div><div className="font-bold">{money(mainAmount)}.00</div></div><div className="quote-grid quote-grid-row border-t border-[#B9B9D5] bg-[#F5F5FC] px-3 sm:px-4 py-4 items-start"><div><strong>Side Cakes</strong><div className="mt-1 text-[#444] leading-snug">{props.sideQty} side cakes at {props.sideEach}kg each.</div></div><div>{sideTotalKg}kg</div><div>{money(BASE_RATE)}.00</div><div className="font-bold">{money(sideAmount)}.00</div></div><div className="quote-grid quote-grid-row border-t border-[#B9B9D5] px-3 sm:px-4 py-4 items-start"><div><strong>Precut Cakes</strong><div className="mt-1 text-[#444] leading-snug">Free pre-cut cake pieces of the selected flavours.</div></div><div>{props.precutCount}</div><div>Ksh 0.00</div><div>Ksh 0.00</div></div><div className="quote-grid quote-grid-row border-t border-[#B9B9D5] bg-[#F5F5FC] px-3 sm:px-4 py-4 items-start"><div><strong>Complimentary Items</strong><div className="mt-1 text-[#444] leading-snug">{props.complimentaryItems.filter((x) => !x.startsWith("Free pre-cut") && !x.match(/pre-cut cake pieces/i)).join(", ")}.</div></div><div>0</div><div>Ksh 0.00</div><div>Ksh 0.00</div></div><div className="quote-grid quote-grid-row border-t border-[#B9B9D5] px-3 sm:px-4 py-4 items-start"><div><strong>Transport / Delivery</strong><div className="mt-1 text-[#444] leading-snug">Free to many locations; any applicable charge is confirmed separately.</div></div><div>-</div><div>-</div><div>Not included</div></div></div>;
}

export default WeddingPackages;
