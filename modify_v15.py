from pathlib import Path
import re

root = Path('/mnt/data/bafliex_v15_work')

# 1) App: remove price-list sections entirely from customer-facing flow.
p = root/'src/App.tsx'
s = p.read_text()
s = s.replace('import { PricingSection } from "./components/PricingSection";\n','')
s = s.replace('import { PriceGridSection } from "./components/PriceGridSection";\n','')
s = s.replace('        {/* Transparent Weight & Portion Pricing Guide */}\n        <PricingSection />\n\n        {/* Official Pound & Sponge Price Grid (Fondant vs Fresh Cream) */}\n        <PriceGridSection />\n\n','')
p.write_text(s)

# 2) Update flavour options from supplied PDF + current options (unique, preserving order).
p = root/'src/data/cakesData.ts'
s = p.read_text()
start = s.index('export const ALL_FLAVOURS = [')
end = s.index('] as const;', start) + len('] as const;')
flavours = [
    "Vanilla", "Tropical Vanilla", "Chocolate", "Chocolate Chip", "Chocolate Delight", "Chocolate Fudge", "Chocolate Mint", "Chocolate Orange", "Chocolate Toffee", "Caramel", "Milk Caramel", "Caramel-Choco",
    "Banana", "Carrot", "Carrot Nut", "Carrot Pineapple", "Coconut", "Coconut Caramel", "Coconut Lemon", "Coconut Orange", "Marble", "Lemon", "Orange", "Orange Poppyseed",
    "Passion", "Pineapple", "Strawberry", "Blueberry", "Bubblegum", "Mint", "Mint Chocolate", "Fruit", "Mixed Fruit", "Rich Fruit", "English Fruit Cake", "Red Velvet", "Red Velvet Cheese Cream", "Black Forest", "White Forest", "Pinacolada", "Coffee", "Tiramisu", "Cinnamon Cherry", "Fudge", "Forest Fudge", "Mocha", "Butterscotch", "Creamy Caramel Delight", "Salted Caramel Coco", "Silk Velvet Marble", "Amarula", "Amarula Black Forest", "Amarula White Forest", "Chocolate Milk", "Diabetic Cake", "Eggless Cake", "Ice Cream Cake", "Funfeitti", "Rainbow", "Zucchini", "Brownies", "Pink Champagne", "Blueberry Foundation Velvet"
]
new = 'export const ALL_FLAVOURS = [\n  ' + ', '.join(repr(x) for x in flavours) + '\n] as const;'
s = s[:start] + new + s[end:]
# Remove stale 950 claim and update two unused tier labels defensively.
s = s.replace('while our non-spongy classics in fresh cream start from just Ksh 950 for 0.5kg.', 'while our direct display sizes start from Ksh 1,100 for 0.5kg.')
s = s.replace('price: "From Ksh 1,800",', 'price: "From Ksh 1,900",', 1)
s = s.replace('price: "From Ksh 3,200",', 'price: "From Ksh 3,400",', 1)
p.write_text(s)

# 3) CustomCakeBuilder: direct sizes and custom size pricing.
p = root/'src/components/CustomCakeBuilder.tsx'
s = p.read_text()
s = s.replace('{ label: "0.5kg", slices: "4-6 slices", basePrice: 1200 }, { label: "1kg", slices: "8-10 slices", basePrice: 1800 },\n  { label: "1.5kg", slices: "12-15 slices", basePrice: 2600 }, { label: "2kg", slices: "18-24 slices", basePrice: 3200 },\n  { label: "2.5kg", slices: "25-32 slices", basePrice: 3800 }, { label: "3kg", slices: "33-42 slices", basePrice: 4400 },', '{ label: "0.5kg", slices: "4-6 slices", basePrice: 1100 }, { label: "1kg", slices: "8-10 slices", basePrice: 1900 },\n  { label: "1.5kg", slices: "12-15 slices", basePrice: 2700 }, { label: "2kg", slices: "18-24 slices", basePrice: 3400 },\n  { label: "2.5kg", slices: "25-32 slices", basePrice: 4100 },')
# Replace custom size formula and remove the pricing-rule disclosure paragraph as requested.
s = s.replace('basePrice: 4400 + index * 700', 'basePrice: index === 0 ? 4800 : index === 1 ? 5400 : index === 2 ? 6000 : 6000 + (index - 2) * 750')
s = re.sub(r'<p className="text-\[11px\] text-\[#9A8E86\] mt-2">Custom sizes start from 3kg\. The estimate follows the 3kg price, then adds Ksh 700 for every additional 0\.5kg\.</p>', '', s)
p.write_text(s)

# 4) Hero: shorter copy, renamed CTA, updated starting price, and real cake slider.
p = root/'src/components/HeroSection.tsx'
s = p.read_text()
s = s.replace('import React from "react";', 'import React, { useEffect, useState } from "react";')
# Insert slides after imports before component.
marker = 'import { CONTACT_INFO, buildWhatsAppLink } from "../data/cakesData";\n\n'
slides = '''const HERO_SLIDES = [\n  { src: "/images/gallery/superman-birthday-cake.webp", alt: "Superman themed birthday cake by Bafliex Cakes Arena" },\n  { src: "/images/gallery/orange-gold-wedding-cake.webp", alt: "Orange and gold wedding cake setup by Bafliex Cakes Arena" },\n  { src: "/images/gallery/wedding-turquoise.webp", alt: "Turquoise and pink wedding cake setup by Bafliex Cakes Arena" },\n  { src: "/images/gallery/graduation-pink.webp", alt: "Pink graduation cake by Bafliex Cakes Arena" },\n  { src: "/images/gallery/faith-gold-birthday.webp", alt: "Gold and purple celebration cake by Bafliex Cakes Arena" },\n];\n\n'''
s = s.replace(marker, marker + slides)
s = s.replace('export const HeroSection: React.FC = () => {\n  return (', 'export const HeroSection: React.FC = () => {\n  const [activeSlide, setActiveSlide] = useState(0);\n\n  useEffect(() => {\n    const timer = window.setInterval(() => {\n      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);\n    }, 4200);\n    return () => window.clearInterval(timer);\n  }, []);\n\n  return (')
s = s.replace('<p className="text-[15px] sm:text-lg lg:text-xl text-[#6E5D54] font-normal leading-snug sm:leading-relaxed max-w-2xl">\n              We make <strong className="text-[#251F50] font-semibold">custom cakes around your preference and budget</strong> — without compromising on quality. From everyday celebration cakes to weddings, graduations, birthdays and Ruracio, we help you get the best option in your category, preference and budget. Send your cake inspo, tell us what matters to you, and let us build around it.\n            </p>', '<p className="text-[14px] sm:text-base lg:text-lg text-[#6E5D54] font-normal leading-snug sm:leading-relaxed max-w-xl">\n              Custom cakes made around your preference and budget — without compromising quality. <strong className="text-[#251F50] font-semibold">Send your inspo and let us build around it.</strong>\n            </p>')
s = s.replace('Start My Cake Order', 'Order My Cake')
s = s.replace('From Ksh 1,800', 'From Ksh 1,100')
# Replace right hero visual block (from its column opening through before floating activity toast) with slider.
start = s.index('          {/* Right Column (40% -> 5 cols): Interactive Hero Cake Showcase */}')
end = s.index('            {/* Floating Live Activity Toast', start)
new_visual = '''          {/* Right Column: real Bafliex cake slider */}\n          <div className="lg:col-span-5 relative">\n            <div className="absolute -inset-2 sm:-inset-4 rounded-[36px] bg-gradient-to-tr from-[#D49B4B]/30 via-[#E8721C]/20 to-transparent blur-xl -z-10" />\n            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D49B4B]/35 shadow-2xl bg-[#251F50]">\n              <div className="relative h-[300px] sm:h-[430px] overflow-hidden">\n                <div\n                  className="flex h-full transition-transform duration-700 ease-out"\n                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}\n                >\n                  {HERO_SLIDES.map((slide) => (\n                    <div key={slide.src} className="min-w-full h-full relative">\n                      <img\n                        src={slide.src}\n                        alt={slide.alt}\n                        loading={activeSlide === 0 ? "eager" : "lazy"}\n                        decoding="async"\n                        className="w-full h-full object-cover"\n                      />\n                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#181344]/90 via-[#181344]/25 to-transparent" />\n                    </div>\n                  ))}\n                </div>\n\n                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">\n                  <span className="glass-pill px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-[#251F50] shadow-lg">\n                    Real Bafliex creations\n                  </span>\n                  <span className="px-3 py-1.5 rounded-full bg-[#251F50]/85 text-[#D49B4B] text-[11px] font-bold border border-[#D49B4B]/30">\n                    From Ksh 1,100\n                  </span>\n                </div>\n\n                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">\n                  <div className="text-white min-w-0">\n                    <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#D49B4B]">Cake inspiration</div>\n                    <h3 className="font-serif-display font-bold text-xl sm:text-2xl">Made to Your Preference</h3>\n                  </div>\n                  <a\n                    href="#custom-builder"\n                    className="shrink-0 px-3 py-2 rounded-full bg-[#E8721C] text-white text-[11px] sm:text-xs font-bold shadow-lg"\n                  >\n                    Order My Cake →\n                  </a>\n                </div>\n\n                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">\n                  {HERO_SLIDES.map((slide, index) => (\n                    <button\n                      key={slide.src}\n                      type="button"\n                      aria-label={`Show cake ${index + 1}`}\n                      onClick={() => setActiveSlide(index)}\n                      className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/55"}`}\n                    />\n                  ))}\n                </div>\n              </div>\n            </div>\n\n'''
s = s[:start] + new_visual + s[end:]
p.write_text(s)

# 5) QuickOrder CTA wording.
p = root/'src/components/QuickOrderCta.tsx'
s = p.read_text().replace('Start My Cake Order', 'Order My Cake')
p.write_text(s)

# 6) How-to-order CTA wording.
p = root/'src/components/HowToOrderSection.tsx'
s = p.read_text().replace('Start My Cake Order', 'Order My Cake')
p.write_text(s)

# 7) Navbar: remove price-grid links, group navigation into dropdowns, and expose the three services.
p = root/'src/components/Navbar.tsx'
s = p.read_text()
# Remove desktop Price Grid link block.
s = re.sub(r'\n\s*<a\n\s*href="#price-grid"[\s\S]*?</a>\n', '\n', s, count=1)
# Remove mobile Price Grid link block.
s = re.sub(r'\n\s*<a\n\s*href="#price-grid"[\s\S]*?</a>\n', '\n', s, count=1)
# Replace desktop nav inner section with grouped details.
nav_start = s.index('          {/* Desktop Nav Links */}')
nav_end = s.index('          {/* Direct Action CTAs */}', nav_start)
nav_block = '''          {/* Desktop Nav Links */}\n          <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-[#251F50]/85">\n            <details className="relative group">\n              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Cakes <span aria-hidden="true">⌄</span></summary>\n              <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">\n                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Search / Browse Cakes</a>\n                <a href="#flavours" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Cake Flavours</a>\n                <a href={`https://wa.me/c/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Live WhatsApp Catalog</a>\n              </div>\n            </details>\n            <details className="relative group">\n              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Order <span aria-hidden="true">⌄</span></summary>\n              <div className="absolute left-0 top-full mt-2 w-60 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">\n                <a href="#custom-builder" className="block rounded-xl px-3 py-2 font-bold text-[#E8721C] hover:bg-[#F5EEE6]">Order My Cake</a>\n                <a href="#wedding" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Wedding Estimate</a>\n                <a href="#training" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Cake Training</a>\n                <a href="#how-to-order" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">How to Order</a>\n              </div>\n            </details>\n            <details className="relative group">\n              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">Celebrations <span aria-hidden="true">⌄</span></summary>\n              <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">\n                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Birthdays & Milestones</a>\n                <a href="#wedding" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Weddings & Ruracio</a>\n                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Graduations</a>\n                <a href="#showcase" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Corporate & Special Events</a>\n              </div>\n            </details>\n            <details className="relative group">\n              <summary className="list-none cursor-pointer flex items-center gap-1 py-2 font-semibold hover:text-[#E8721C]">More <span aria-hidden="true">⌄</span></summary>\n              <div className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-white border border-[#D49B4B]/25 shadow-xl p-2">\n                <a href="#delivery-zones" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Delivery Areas</a>\n                <a href="#offers" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Offers</a>\n                <a href="#reviews" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">Customer Reviews</a>\n                <a href="#faq" className="block rounded-xl px-3 py-2 hover:bg-[#F5EEE6]">FAQs</a>\n              </div>\n            </details>\n            <a href="#showcase" className="font-semibold text-[#4C4590] hover:text-[#E8721C]">Search for a Cake</a>\n          </nav>\n\n'''
s = s[:nav_start] + nav_block + s[nav_end:]
# Mobile: replace selected flat links with grouped details.
mobile_start = s.index('          <div className="lg:hidden mt-3')
mobile_end = s.index('          </div>\n        )}', mobile_start) + len('          </div>')
mobile_block = '''          <div className="lg:hidden mt-3 pt-3 border-t border-[#D49B4B]/20 pb-2 animate-fadeIn">\n            <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-[#1E8E5A]/10 text-[#1E8E5A] text-xs font-medium mb-2">\n              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#1E8E5A] animate-pulse"></span>WhatsApp Ordering • Quick Enquiries</span>\n              <span className="font-mono-price font-semibold">Mon–Sat 8:30am–8:00pm</span>\n            </div>\n\n            <div className="grid grid-cols-3 gap-2 mt-1 mb-2">\n              <a href="#custom-builder" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#E8721C] text-white px-2 py-2.5 text-center text-[11px] font-bold">Order My Cake</a>\n              <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#4C4590] text-white px-2 py-2.5 text-center text-[11px] font-bold">Wedding Estimate</a>\n              <a href="#training" onClick={() => setMobileMenuOpen(false)} className="rounded-xl bg-[#F5EEE6] text-[#251F50] border border-[#D49B4B]/30 px-2 py-2.5 text-center text-[11px] font-bold">Training</a>\n            </div>\n\n            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2" open>\n              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Cakes <span>⌄</span></summary>\n              <div className="px-2 pb-2 grid gap-1">\n                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Search / Browse Cakes</a>\n                <a href="#flavours" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Cake Flavours</a>\n                <a href={`https://wa.me/c/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg bg-[#1E8E5A]/10 text-[#1E8E5A] text-sm font-semibold">Live WhatsApp Catalog</a>\n              </div>\n            </details>\n\n            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">\n              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Order <span>⌄</span></summary>\n              <div className="px-2 pb-2 grid gap-1">\n                <a href="#custom-builder" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm font-bold text-[#E8721C]">Order My Cake</a>\n                <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Wedding Estimate</a>\n                <a href="#training" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Cake Training</a>\n                <a href="#how-to-order" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">How to Order</a>\n              </div>\n            </details>\n\n            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">\n              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">Celebrations <span>⌄</span></summary>\n              <div className="px-2 pb-2 grid gap-1">\n                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Birthdays & Milestones</a>\n                <a href="#wedding" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Weddings & Ruracio</a>\n                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Graduations</a>\n                <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Corporate & Special Events</a>\n              </div>\n            </details>\n\n            <details className="rounded-xl border border-[#D49B4B]/20 bg-white/70 mb-2">\n              <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-3 font-bold text-sm text-[#251F50]">More <span>⌄</span></summary>\n              <div className="px-2 pb-2 grid gap-1">\n                <a href="#delivery-zones" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Delivery Areas</a>\n                <a href="#offers" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Offers</a>\n                <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">Customer Reviews</a>\n                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-[#F5EEE6] text-sm">FAQs</a>\n              </div>\n            </details>\n\n            <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-xl bg-[#E8721C]/10 text-[#E8721C] font-bold text-sm flex items-center justify-between mb-2">\n              <span>Search for a Cake</span><span>→</span>\n            </a>\n\n            <div className="grid grid-cols-2 gap-2.5 mt-2 pt-2 border-t border-[#D49B4B]/20">\n              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#251F50]/20 bg-white text-[#251F50] font-semibold text-sm shadow-xs"><Phone className="w-4 h-4 text-[#E8721C]" /><span>Call Baker</span></a>\n              <a href={defaultWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E8E5A] text-white font-semibold text-sm shadow-md"><MessageCircle className="w-4 h-4" /><span>WhatsApp Chat</span></a>\n            </div>\n          </div>'''
s = s[:mobile_start] + mobile_block + s[mobile_end:]
p.write_text(s)

# 8) Footer + FeaturesBento: remove price-list links.
p = root/'src/components/Footer.tsx'
s = p.read_text()
s = re.sub(r'\n\s*<li>\n\s*<a href="#pricing"[\s\S]*?</li>\n', '\n', s, count=1)
p.write_text(s)

p = root/'src/components/FeaturesBento.tsx'
s = s.replace('                href="#pricing"\n', '                href="#flavours"\n')
s = s.replace('Explore Weight Pricing Guide →', 'Explore Cake Flavours →')
p.write_text(s)

# 9) Add a light slider utility and smoother mobile spacing.
p = root/'src/index.css'
s = p.read_text()
if '.cake-slider-track' not in s:
    s += '''\n\n.cake-slider-track {\n  will-change: transform;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  html { scroll-behavior: auto; }\n  .cake-slider-track { transition: none !important; }\n}\n'''
p.write_text(s)

# 10) Replace stale FAQ price statement.
p = root/'src/data/cakesData.ts'
s = p.read_text().replace('our non-spongy classics in fresh cream start from just Ksh 950 for 0.5kg.', 'our direct display sizes start from Ksh 1,100 for 0.5kg.')
p.write_text(s)
