import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Cake, Heart, MessageCircle, Phone, Printer, Sparkles, X } from "lucide-react";
import { ALL_FLAVOURS, CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";
import { buildCakeOrderPdf, sharePdf } from "../utils/pdfGenerator";
import { printElementById } from "../utils/printUtils";

const OCCASIONS = [
  "Birthday Celebration", "Graduation", "Ruracio / Dowry Ceremony", "Wedding Celebration",
  "Baby Shower / Gender Reveal", "House Warming", "Corporate Event / Office Party", "Anniversary Surprise",
];
const WEIGHT_OPTIONS = [
  { label: "0.5kg", slices: "4-6 slices", basePrice: 1100 }, { label: "1kg", slices: "8-10 slices", basePrice: 1900 },
  { label: "1.5kg", slices: "12-15 slices", basePrice: 2700 }, { label: "2kg", slices: "18-24 slices", basePrice: 3400 },
  { label: "2.5kg", slices: "25-32 slices", basePrice: 4100 },
];
const CUSTOM_WEIGHT_OPTIONS = Array.from({ length: 15 }, (_, index) => {
  const kg = 3 + index * 0.5;
  return { label: `${Number.isInteger(kg) ? kg : kg.toFixed(1)}kg`, slices: "Custom size", basePrice: index === 0 ? 4800 : index === 1 ? 5400 : index === 2 ? 6000 : 6000 + (index - 2) * 750 };
});
const SHAPE_OPTIONS = ["Round Standard", "Round Tall", "Square", "Heart", "Number", "Custom / Other"];
const ICING_OPTIONS = [{ name: "Soft Icing", addPrice: 0 }, { name: "Fondant / Hard Icing", addPrice: 500 }];
const DIETARY_OPTIONS = ["Eggless", "Dairy-free", "Alcohol-free"];
const DELIVERY_LOCATIONS = ["Shop", "Thika / CBD", "Juja", "Ruiru", "Nairobi", "Other location"];
const DEFAULT_DATE = "2026-09-06";

function formatOrderDate(value: string) {
  if (!value) return "To be confirmed";
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-KE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function formatTime(value: string) {
  if (!value) return "To be confirmed";
  const [hourString, minute] = value.split(":");
  const hour = Number(hourString);
  return `${hour % 12 || 12}:${minute} ${hour >= 12 ? "p.m." : "a.m."}`;
}

interface InspoFile { id: string; name: string; url: string; }

export const CustomCakeBuilder: React.FC = () => {
  const [occasion, setOccasion] = useState("Birthday Celebration");
  const [weightIdx, setWeightIdx] = useState(1);
  const [useCustomWeight, setUseCustomWeight] = useState(false);
  const [customWeight, setCustomWeight] = useState("3kg");
  const [shape, setShape] = useState("Round Tall");
  const [customShape, setCustomShape] = useState("");
  const [icing, setIcing] = useState("Soft Icing");
  const [flavors, setFlavors] = useState<string[]>(["Tropical Vanilla", "Caramel-Choco", "Pinacolada"]);
  const [colour, setColour] = useState("Pink");
  const [designDetails, setDesignDetails] = useState("3 spheres");
  const [message, setMessage] = useState("Ivana @ 4 years");
  const [toppers, setToppers] = useState("Minnie Mouse Toppers");
  const [orderDate, setOrderDate] = useState(DEFAULT_DATE);
  const [orderTime, setOrderTime] = useState("11:00");
  const [location, setLocation] = useState("Shop");
  const [otherLocation, setOtherLocation] = useState("");
  const [dietaryOptions, setDietaryOptions] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [amountPaid, setAmountPaid] = useState("0");
  const [budget, setBudget] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [inspoFiles, setInspoFiles] = useState<InspoFile[]>([]);
  const [catalogInspo, setCatalogInspo] = useState<{ id: string; src: string; title: string; category: string } | null>(null);
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bafliex:selectedInspo");
    if (stored) {
      try { setCatalogInspo(JSON.parse(stored)); } catch { localStorage.removeItem("bafliex:selectedInspo"); }
    }
    const handleSelection = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail?.id && detail?.src) setCatalogInspo(detail);
    };
    window.addEventListener("bafliex:select-inspo", handleSelection);
    return () => window.removeEventListener("bafliex:select-inspo", handleSelection);
  }, []);

  const selectedWeight = useCustomWeight ? (CUSTOM_WEIGHT_OPTIONS.find((item) => item.label === customWeight) ?? CUSTOM_WEIGHT_OPTIONS[0]) : WEIGHT_OPTIONS[weightIdx];
  const selectedShape = shape === "Custom / Other" ? customShape || "Custom / Other" : shape;
  const icingAdd = ICING_OPTIONS.find((item) => item.name === icing)?.addPrice ?? 0;
  const totalPrice = selectedWeight.basePrice + icingAdd;
  const paid = Math.max(0, Number(amountPaid) || 0);
  const balance = Math.max(0, totalPrice - paid);
  const finalLocation = location === "Other location" ? otherLocation || "Other location - confirm on WhatsApp" : location;
  const dateLabel = useMemo(() => formatOrderDate(orderDate), [orderDate]);
  const timeLabel = useMemo(() => formatTime(orderTime), [orderTime]);

  const toggleFlavor = (flavor: string) => setFlavors((current) => current.includes(flavor) ? current.filter((item) => item !== flavor) : current.length >= 3 ? current : [...current, flavor]);
  const handleInspo = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []).slice(0, 6 - inspoFiles.length);
    const mapped = files.map((file) => ({ id: `${file.name}-${file.lastModified}-${Math.random()}`, name: file.name, url: URL.createObjectURL(file) }));
    setInspoFiles((current) => [...current, ...mapped]);
    event.target.value = "";
  };
  const removeInspo = (id: string) => setInspoFiles((current) => {
    const found = current.find((item) => item.id === id);
    if (found) URL.revokeObjectURL(found.url);
    return current.filter((item) => item.id !== id);
  });

  const whatsappMessage = `Hello Bafliex Cakes Arena! I configured my cake order on your website:\n\n*Occasion:* ${occasion}\n*Size:* ${selectedWeight.label}\n*Shape:* ${selectedShape}\n*Icing:* ${icing}\n*Flavour:* ${flavors.length ? flavors.join(", ") : "To be confirmed"}\n*Colour:* ${colour || "To be confirmed"}\n*Design details:* ${designDetails || "To be confirmed"}\n*Message:* ${message || "No message"}\n*Toppers:* ${toppers || "None"}\n*Date:* ${dateLabel}\n*Time:* ${timeLabel}\n*Location:* ${finalLocation}\n*Price:* ${totalPrice.toLocaleString()}/=\n*Paid:* ${paid.toLocaleString()}/=\n*Balance:* ${balance.toLocaleString()}/=\n*Budget:* ${budget ? `Ksh ${Number(budget).toLocaleString()}/=` : "To be discussed"}\n*Name:* ${customerName || "To be provided"}\n*Number:* ${customerNumber || "To be provided"}\n*Dietary preferences:* ${dietaryOptions.length ? dietaryOptions.join(", ") : "None requested"}\n*Any special notes:* ${specialNotes || "None"}\n*Catalogue inspo:* ${catalogInspo ? `${catalogInspo.title} — https://bafliexcakes.co.ke/#inspo-${catalogInspo.id}` : "None selected"}
*Inspiration photos:* ${inspoFiles.length ? `${inspoFiles.length} photo(s) selected - I will attach them in WhatsApp.` : "None selected"}\n\n*Customization:* Please help me keep the design within my preferred budget where possible.\n\n*Delivery:* Free delivery is available to many places. A small charge may apply depending on the location and cake size. Cakes take at least 4 hours to prepare, and delivery time depends on location, traffic conditions and delivery-person availability.\n\nPlease confirm availability, final price and delivery details.`;
  const orderWhatsAppUrl = buildWhatsAppLink(whatsappMessage);

  const handleSharePdf = async () => {
    const blob = buildCakeOrderPdf({
      estimateNumber: `BCA-${Date.now().toString().slice(-6)}`, date: new Date().toLocaleDateString("en-KE"),
      customer: customerName, phone: customerNumber, occasion, size: selectedWeight.label, shape: selectedShape, icing,
      flavours: flavors.join(", "), colour, design: designDetails, message, toppers, orderDate: dateLabel, time: timeLabel,
      location: finalLocation, notes: specialNotes, dietary: dietaryOptions.join(", "), inspo: `${catalogInspo ? `Catalogue inspo: ${catalogInspo.title}` : "No catalogue inspo"}${inspoFiles.length ? ` • ${inspoFiles.length} uploaded reference photo(s)` : ""}`,
      budget, total: totalPrice, paid, balance
    });
    try {
      const result = await sharePdf(blob, `Bafliex-Cake-Order-${Date.now().toString().slice(-6)}.pdf`, `Bafliex Cakes Arena cake order • ${selectedWeight.label} • ${flavors.join(", ")}`);
      if (!result.shared && !navigator.share) alert("The PDF was downloaded. You can attach it in WhatsApp.");
    } catch (error) {
      if ((error as DOMException)?.name !== "AbortError") alert("The PDF was downloaded. You can attach it in WhatsApp.");
    }
  };

  return (
    <section id="custom-builder" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8721C]/12 text-[#E8721C] text-xs font-bold uppercase tracking-wider mb-3"><Sparkles className="w-3.5 h-3.5" /><span>Interactive Custom Cake Studio</span></div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50]">Build Your Cake & Get a <span className="italic font-normal text-[#E8721C]">Price Estimate</span></h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3">Enter the details we use to prepare your order, add inspiration photos, tell us your budget and special notes, review everything, then send the specification to WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-[#D49B4B]/30 shadow-xl space-y-7">
            <div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-3">1. Celebration Occasion</label><div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">{OCCASIONS.map((occ) => <button key={occ} type="button" onClick={() => setOccasion(occ)} className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-left border ${occasion === occ ? "bg-[#251F50] text-white border-[#251F50]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}>{occ}</button>)}</div></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-3">2. Size <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Choose the preferred cake weight.</span></label><div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">{WEIGHT_OPTIONS.map((item, idx) => { const active = !useCustomWeight && idx === weightIdx; return <button key={item.label} type="button" onClick={() => { setUseCustomWeight(false); setWeightIdx(idx); }} className={`p-3 rounded-xl text-center border ${active ? "bg-[#E8721C] text-white border-[#E8721C]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}><div className="font-serif-display font-bold text-base sm:text-lg">{item.label}</div><div className={`text-[11px] mt-0.5 ${active ? "text-white/90" : "text-[#6E5D54]"}`}>{item.slices}</div><div className={`text-xs font-mono-price font-semibold mt-1.5 pt-1.5 border-t ${active ? "border-white/20 text-white" : "border-[#D49B4B]/20 text-[#E8721C]"}`}>Ksh {item.basePrice.toLocaleString()}</div></button>; })}<div className={`rounded-xl border p-3 text-center ${useCustomWeight ? "bg-[#4C4590] text-white border-[#4C4590]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}><button type="button" onClick={() => { setUseCustomWeight(true); setCustomWeight((current) => current || "3kg"); }} className="w-full"><div className="font-serif-display font-bold text-base sm:text-lg">Custom size</div><div className={`text-[11px] mt-0.5 ${useCustomWeight ? "text-white/90" : "text-[#6E5D54]"}`}>3kg–10kg</div></button>{useCustomWeight && <select value={customWeight} onChange={(e) => setCustomWeight(e.target.value)} className="mt-2 w-full rounded-lg bg-white text-[#251F50] px-2 py-2 text-sm font-semibold">{CUSTOM_WEIGHT_OPTIONS.map((item) => <option key={item.label} value={item.label}>{item.label} — Ksh {item.basePrice.toLocaleString()}</option>)}</select>}</div></div></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-3">3. Shape <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the preferred shape for your cake.</span></label><div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">{SHAPE_OPTIONS.map((item) => <button key={item} type="button" onClick={() => setShape(item)} className={`px-3.5 py-3 rounded-xl text-sm font-semibold border ${shape === item ? "bg-[#4C4590] text-white border-[#4C4590]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}>{item}</button>)}</div>{shape === "Custom / Other" && <input value={customShape} onChange={(e) => setCustomShape(e.target.value)} placeholder="e.g. Hexagon, rectangle, number shape..." className="mt-3 w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" />}</div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-3">4. Icing <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Choose the preferred icing finish.</span></label><div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{ICING_OPTIONS.map((item) => { const active = icing === item.name; return <button key={item.name} type="button" onClick={() => setIcing(item.name)} className={`p-4 rounded-xl text-left border ${active ? "bg-[#251F50] text-white border-[#251F50]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}><div className="font-bold text-sm">{item.name}</div><div className="text-xs opacity-70 mt-1">{item.addPrice ? `+ Ksh ${item.addPrice}` : "Base icing"}</div></button>; })}</div></div>
            <div><div className="flex items-center justify-between gap-3 mb-3"><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54]">5. Flavours <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Choose one, two or three flavours.</span></label><span className="text-[11px] font-semibold text-[#E8721C]">Choose up to 3</span></div><div className="flex flex-wrap gap-2 max-h-56 overflow-auto pr-1">{ALL_FLAVOURS.map((flavor) => { const active = flavors.includes(flavor); return <button key={flavor} type="button" onClick={() => toggleFlavor(flavor)} className={`px-3 py-2 rounded-full text-xs font-semibold border ${active ? "bg-[#E8721C] text-white border-[#E8721C]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}>{flavor}</button>; })}</div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">6. Colour / Theme <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter your preferred colours or theme.</span></label><input value={colour} onChange={(e) => setColour(e.target.value)} placeholder="e.g. Pink and gold" className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">Design Details <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Describe decorations or details you want.</span></label><input value={designDetails} onChange={(e) => setDesignDetails(e.target.value)} placeholder="e.g. 3 spheres, flowers" className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">7. Message on Cake <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the message exactly as you want it written.</span></label><input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="e.g. Ivana @ 4 years" className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">Toppers <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the preferred topper or character.</span></label><input value={toppers} onChange={(e) => setToppers(e.target.value)} placeholder="e.g. Minnie Mouse" className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div></div>
            <div><div className="flex items-center justify-between mb-2"><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54]">8. Cake Inspo / Reference Photos <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Upload examples of what you want us to use as inspiration.</span></label><span className="text-[11px] text-[#6E5D54]">Up to 6 uploaded photos + 1 catalogue design</span></div>{catalogInspo && <div className="mb-4 rounded-2xl border border-[#E8721C]/30 bg-[#FFF5E9] p-3"><div className="flex items-start gap-3"><img src={catalogInspo.src} alt={catalogInspo.title} className="w-20 h-20 rounded-xl object-cover border border-[#D49B4B]/20" /><div className="min-w-0 flex-1"><div className="text-[10px] uppercase tracking-wider font-bold text-[#E8721C]">Selected catalogue inspo</div><div className="font-bold text-[#251F50] text-sm mt-0.5">{catalogInspo.title}</div><div className="text-[11px] text-[#6E5D54] mt-1">This design will be included in your order specification. Bafliex can adapt it to your preference and budget.</div><button type="button" onClick={() => { setCatalogInspo(null); localStorage.removeItem("bafliex:selectedInspo"); }} className="mt-2 text-[11px] font-bold text-[#251F50] underline">Remove catalogue inspo</button></div></div></div>}<label className="block rounded-2xl border-2 border-dashed border-[#D49B4B]/35 bg-[#FDFBF7] px-5 py-5 text-center cursor-pointer hover:border-[#E8721C] transition-colors"><input type="file" accept="image/*" multiple onChange={handleInspo} className="sr-only" /><div className="text-sm font-bold text-[#251F50]">Upload cake or decoration inspo</div><div className="text-xs text-[#6E5D54] mt-1">Add examples of the cake, colours, topper, edible photo or details you want.</div></label>{inspoFiles.length > 0 && <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">{inspoFiles.map((file) => <div key={file.id} className="rounded-2xl border border-[#D49B4B]/25 bg-white overflow-hidden shadow-sm"><div className="relative bg-[#F5EEE6] p-2"><img src={file.url} alt={file.name} className="w-full aspect-[4/3] object-contain rounded-xl bg-white" /><button type="button" onClick={() => removeInspo(file.id)} aria-label={`Remove ${file.name}`} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 text-white flex items-center justify-center shadow-md"><X className="w-4 h-4" /></button></div><div className="px-3 py-2 text-[11px] text-[#6E5D54] truncate" title={file.name}>{file.name}</div></div>)}</div>}<p className="text-[11px] text-[#6E5D54] mt-2">Photos stay in your browser. When you open WhatsApp, attach the same photos to the message.</p></div>
            <div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">9. Special Requirements <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Select any dietary requirement, then add other notes below.</span></label><div className="flex flex-wrap gap-2">{DIETARY_OPTIONS.map((item) => { const active = dietaryOptions.includes(item); return <button key={item} type="button" onClick={() => setDietaryOptions((current) => active ? current.filter((x) => x !== item) : [...current, item])} className={`px-3 py-2 rounded-full text-xs font-semibold border ${active ? "bg-[#251F50] text-white border-[#251F50]" : "bg-[#FDFBF7] text-[#251F50] border-[#D49B4B]/25"}`}>{item}</button>; })}</div><div className="mt-3"><label className="block text-xs font-bold text-[#6E5D54] mb-2">Any special notes <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Tell us anything important, such as low sugar or extra moist.</span></label><textarea value={specialNotes} onChange={(e) => setSpecialNotes(e.target.value)} rows={3} placeholder="e.g. low sugar, moist, less sweet, specific fruit, message placement, etc." className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm resize-none" /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">10. Preferred Budget (Optional) <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Tell us the budget you would like us to work around.</span></label><div className="flex flex-wrap gap-2 mb-2">{[1500,2500,3500,5000,7500].map((amount) => <button key={amount} type="button" onClick={() => setBudget(String(amount))} className={`px-2.5 py-1.5 rounded-full text-[11px] font-bold border ${budget === String(amount) ? "bg-[#251F50] text-white border-[#251F50]" : "bg-white text-[#251F50] border-[#D49B4B]/25"}`}>Ksh {amount.toLocaleString()}</button>)}</div><input type="number" min="0" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Or enter your own" className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">11. Customer Name <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the name we should put on the order.</span></label><input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your name" className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">12. Phone Number <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the best number for WhatsApp or a call.</span></label><input type="tel" value={customerNumber} onChange={(e) => setCustomerNumber(e.target.value)} placeholder="07xx xxx xxx" className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">13. Date <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter the date you need the cake.</span></label><input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">14. Time <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter your preferred pickup or delivery time.</span></label><input type="time" value={orderTime} onChange={(e) => setOrderTime(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">15. Location <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Choose where the cake will be collected or delivered.</span></label><select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm">{DELIVERY_LOCATIONS.map((item) => <option key={item} value={item}>{item}</option>)}</select>{location === "Other location" && <input value={otherLocation} onChange={(e) => setOtherLocation(e.target.value)} placeholder="Enter location" className="mt-2 w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" />}</div><div><label className="block text-xs font-bold uppercase tracking-wider text-[#6E5D54] mb-2">16. Amount Paid <span className="block mt-1 text-[10px] font-normal normal-case tracking-normal text-[#9A8E86]">Enter any amount already paid.</span></label><input type="number" min="0" value={amountPaid} onChange={(e) => setAmountPaid(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-[#FDFBF7] border border-[#D49B4B]/35 text-sm" /></div></div>
            <div className="rounded-2xl bg-[#FFF5E9] border border-[#E8721C]/30 px-4 py-3 text-[11px] leading-relaxed text-[#6E5D54] mb-3"><strong className="text-[#251F50]">N.B.:</strong> The displayed price is an estimate. It may change depending on the extras added, flavours chosen and the design itself.</div><div className="rounded-2xl bg-[#FDFBF7] border border-[#D49B4B]/25 px-4 py-3 text-[11px] leading-relaxed text-[#6E5D54]"><strong className="text-[#251F50]">Preparation & delivery:</strong> Cakes take at least 4 hours to prepare. Free delivery is available to many places; a small charge may apply depending on location and cake size. Delivery time depends on location, traffic conditions and delivery-person availability.</div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[#251F50] text-white p-6 sm:p-8 border-2 border-[#D49B4B]/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4"><div><span className="text-xs uppercase tracking-widest text-[#D49B4B] font-semibold">Live Order Summary</span><h3 className="font-serif-display text-2xl sm:text-3xl font-bold mt-0.5">Your Cake Specification</h3></div><div className="w-11 h-11 rounded-2xl bg-[#E8721C]/20 border border-[#E8721C]/40 flex items-center justify-center text-[#D49B4B]"><Cake className="w-6 h-6" /></div></div>
              <div className="grid grid-cols-2 gap-2.5 text-sm">{[["Occasion", occasion], ["Size", selectedWeight.label], ["Shape", selectedShape], ["Icing", icing], ["Flavours", flavors.join(", ") || "To be confirmed"], ["Colour", colour || "To be confirmed"], ["Design", designDetails || "To be confirmed"], ["Message", message || "None"], ["Toppers", toppers || "None"], ["Date", dateLabel], ["Time", timeLabel], ["Location", finalLocation], ["Notes", specialNotes || "None"], ["Catalogue inspo", catalogInspo?.title || "None"], ["Inspo photos", inspoFiles.length ? `${inspoFiles.length} selected` : "None"]].map(([label, value]) => <div key={label} className="rounded-xl bg-white/5 p-2.5"><div className="text-white/55 text-[10px] uppercase tracking-wide">{label}</div><div className="font-semibold text-white mt-0.5 text-xs sm:text-sm">{value}</div></div>)}</div>
              <div className="p-4 rounded-2xl bg-white/10 border border-[#D49B4B]/30 grid grid-cols-2 gap-4"><div><div className="text-xs text-white/70">Price</div><div className="font-mono-price font-bold text-xl text-white">{totalPrice.toLocaleString()}/=</div></div><div className="text-right"><div className="text-xs text-white/70">Balance</div><div className="font-mono-price font-bold text-xl text-[#D49B4B]">{balance.toLocaleString()}/=</div></div></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><button type="button" onClick={() => setShowOrder(true)} className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#D49B4B] text-[#251F50] font-bold text-sm"><Printer className="w-4 h-4" /> Review Order</button><a href={orderWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#1E8E5A] text-white font-bold text-sm"><MessageCircle className="w-4 h-4" /> Send Order to WhatsApp</a></div>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/20 text-white/90 text-xs sm:text-sm font-semibold"><Phone className="w-4 h-4 text-[#D49B4B]" /> Or Call {CONTACT_INFO.phoneDisplay}</a>
              <div className="text-center text-[11px] text-white/65 flex items-center justify-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#E8721C] fill-[#E8721C]" /><span>Final price is confirmed after we review your design, flavour and requirements.</span></div>
            </div>
          </div>
        </div>
      </div>

      {showOrder && <div className="fixed inset-0 z-[80] bg-black/60 p-2 sm:p-5 overflow-y-auto print-overlay"><div className="max-w-4xl mx-auto print-top-actions flex justify-end mb-2"><button type="button" onClick={() => setShowOrder(false)} className="w-10 h-10 rounded-full bg-white text-[#251F50] shadow-lg flex items-center justify-center"><X className="w-5 h-5" /></button></div><div id="cake-order-printable" className="printable-document cake-order-document bg-white text-[#222] max-w-[210mm] mx-auto shadow-2xl"><div className="quote-page cake-order-page cake-print-page p-6 sm:p-10 md:p-12 flex flex-col"><OrderQuoteHeader /><div className="grid grid-cols-2 gap-6 mt-8 text-sm"><div><div className="font-extrabold uppercase tracking-wide">Customer</div><div className="mt-1 font-semibold">{customerName || "To be provided"}</div><div>{customerNumber || "To be provided"}</div></div><div className="grid grid-cols-2 gap-4"><div><div className="font-extrabold uppercase tracking-wide">Date</div><div className="mt-1">{dateLabel}</div></div><div><div className="font-extrabold uppercase tracking-wide">Price</div><div className="mt-1 font-bold">Ksh {totalPrice.toLocaleString()}.00</div></div><div className="col-span-2"><div className="font-extrabold uppercase tracking-wide">Occasion</div><div className="mt-1">{occasion}</div></div></div></div><div className="border border-[#9B9BC5] rounded-sm overflow-hidden mt-7 text-sm"><div className="grid grid-cols-2 bg-[#4C4590] text-white font-bold px-4 py-3"><div>Description</div><div>Details</div></div>{[["Size / Shape / Icing", `${selectedWeight.label} / ${selectedShape} / ${icing}`],["Flavours", flavors.join(", ") || "To be confirmed"],["Colour / Design", `${colour || "To be confirmed"} / ${designDetails || "To be confirmed"}`],["Message / Toppers", `${message || "None"} / ${toppers || "None"}`],["Location / Time", `${finalLocation} / ${timeLabel}`],["Special Notes", specialNotes || "None"],["Dietary", dietaryOptions.length ? dietaryOptions.join(", ") : "None requested"],["Catalogue Inspo / Photos", `${catalogInspo ? catalogInspo.title : "No catalogue design"}${inspoFiles.length ? ` • ${inspoFiles.length} uploaded photo(s)` : ""}`]].map(([label,value]) => <div key={label} className="grid grid-cols-2 border-t border-[#B9B9D5] px-4 py-3"><strong>{label}</strong><div>{value}</div></div>)}</div><div className="grid grid-cols-2 gap-6 mt-7"><div className="text-sm"><div><strong>Preferred budget:</strong> {budget ? `Ksh ${Number(budget).toLocaleString()}` : "To be discussed"}</div><div><strong>Amount paid:</strong> Ksh {paid.toLocaleString()}.00</div><div><strong>Balance:</strong> Ksh {balance.toLocaleString()}.00</div></div><div className="bg-[#4C4590] text-white rounded-sm px-5 py-4 flex items-center justify-between h-fit"><span className="font-extrabold">TOTAL</span><span className="font-mono-price text-xl font-extrabold">Ksh {totalPrice.toLocaleString()}.00</span></div></div><div className="mt-auto pt-8 text-xs text-[#555] border-t border-[#DDD]"><strong>Customisation:</strong> We work to your preference and budget where possible; final design and price are confirmed before booking.<br /><strong>Delivery:</strong> Free delivery is available to many places. A small charge may apply depending on location and cake size. Cakes take at least 4 hours to prepare.</div></div><div className="flex flex-col sm:flex-row gap-3 mt-3 max-w-[210mm] mx-auto print-hide-top">
        <button type="button" onClick={() => printElementById("cake-order-printable")} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#251F50] px-5 py-3.5 font-bold text-sm shadow-lg"><Printer className="w-4 h-4" /> Print / Save PDF</button>
        <button type="button" onClick={handleSharePdf} className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E8E5A] text-white px-5 py-3.5 font-bold text-sm shadow-lg"><MessageCircle className="w-4 h-4" /> Share PDF / WhatsApp</button>
      </div></div></div>}
    </section>
  );
};

function OrderQuoteHeader() {
  return <div className="flex items-start justify-between gap-6 pb-6 border-b-2 border-[#D9D9D9]"><div className="flex items-center gap-4"><img src="/images/bafliex-logo.webp" alt="Bafliex Cakes Arena" className="w-20 sm:w-24 h-auto object-contain" /><div><div className="font-bold text-[#222]">Bafliex Cakes Arena</div><div className="text-xs text-[#555] mt-1">{CONTACT_INFO.phoneDisplay} • bafliexcakes@gmail.com</div></div></div><div className="text-right text-xl sm:text-2xl font-extrabold text-[#35318A]">Cake<br />Order</div></div>;
}

export default CustomCakeBuilder;
