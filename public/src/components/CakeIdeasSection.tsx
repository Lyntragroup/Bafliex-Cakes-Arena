import React from "react";
import { ArrowRight, BookOpen, CakeSlice, MapPin } from "lucide-react";

const IDEAS = [
  { title: "Custom Cakes in Thika", text: "Start with your own design, inspiration photo or budget and build a cake around your preference.", href: "/custom-cakes-thika/", label: "Custom cake guide" },
  { title: "Birthday Cakes in Thika", text: "Browse ideas by age, style and budget, then build a custom cake from your preferred design.", href: "/birthday-cakes-thika/", label: "Birthday guide" },
  { title: "Wedding Cakes in Thika", text: "Compare guest-count packages and generate a base wedding estimate before speaking to us.", href: "/wedding-cakes-thika/", label: "Wedding guide" },
  { title: "Cake Delivery to Nairobi", text: "Check delivery options across Thika, Juja, Ruiru, Nairobi and surrounding areas.", href: "/cakes-nairobi/", label: "Delivery guide" },
  { title: "Cake Training in Thika", text: "Explore the 1-week to 8-week baking and decoration programmes at Bafliex Cakes Training.", href: "/cake-training-thika/", label: "Training guide" },
  { title: "Graduation & Ruracio Cakes", text: "Use real occasion ideas as a starting point, then tell us your colours, message and budget.", href: "/graduation-cakes-thika/", label: "Occasion ideas" },
];

export const CakeIdeasSection: React.FC = () => (
  <section id="ideas" className="py-16 sm:py-20 bg-white border-t border-[#D49B4B]/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EEE6] border border-[#D49B4B]/25 text-[#E8721C] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Cake ideas & local guides
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251F50] mt-3">Start with an idea. <span className="italic font-normal text-[#E8721C]">Make it yours.</span></h2>
          <p className="text-sm sm:text-base text-[#6E5D54] mt-3 leading-relaxed">Useful starting points for customers searching for cakes, delivery or training around Thika and the greater Nairobi area.</p>
        </div>
        <div className="text-xs text-[#6E5D54] flex items-center gap-2"><MapPin className="w-4 h-4 text-[#E8721C]" /> Thika • Juja • Ruiru • Nairobi</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {IDEAS.map((idea) => (
          <a key={idea.href} href={idea.href} className="group rounded-2xl bg-[#FDFBF7] border border-[#D49B4B]/25 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="flex items-center justify-between gap-3"><span className="text-[10px] uppercase tracking-wider font-bold text-[#E8721C]">{idea.label}</span><CakeSlice className="w-4 h-4 text-[#D49B4B]" /></div>
            <h3 className="font-serif-display text-2xl font-bold text-[#251F50] mt-2">{idea.title}</h3>
            <p className="text-sm text-[#6E5D54] mt-2 leading-relaxed">{idea.text}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#251F50] group-hover:text-[#E8721C]">Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
