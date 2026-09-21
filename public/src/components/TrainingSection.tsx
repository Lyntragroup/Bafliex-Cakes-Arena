import React from "react";
import { BookOpen, CheckCircle2, Clock3, FileText, MessageCircle, Sparkles, UserRound, Wrench } from "lucide-react";
import { buildWhatsAppLink } from "../data/cakesData";

const TRAINING_PACKAGES = [
  { duration: "1 Week", price: "Ksh 9,500", label: "Starter", description: "Learn the basics of either cake baking or cake decoration.", focus: "Basics of either Baking or Decorations" },
  { duration: "2 Weeks", price: "Ksh 17,500", label: "Combo", description: "Cover the basics of both baking and decoration through practical training.", focus: "Basics of both Baking & Decorations" },
  { duration: "3 Weeks", price: "Ksh 35,000", label: "Half Course", description: "A more complete practical programme for learners who want broader skills and practice.", focus: "Half Course" },
  { duration: "8 Weeks", price: "Ksh 60,000", label: "Full Course", description: "The full practical pathway with deeper cake baking and decoration experience.", focus: "Full Course" },
];

const CORE_AREAS = [
  "Cake baking fundamentals & flavouring",
  "Basic icing, finishing, piping & writing",
  "Spongy cakes & decoration",
  "Fondant work & cake finishing",
  "Cupcakes, muffins & pastries",
  "Floral work & creative cake decoration",
];

export const TrainingSection: React.FC = () => {
  const trainingUrl = buildWhatsAppLink("Hello Bafliex Cakes Arena! I'm interested in cake training. Please share the next class dates, course content, requirements, fees and how to book.");

  return (
    <section id="training" className="py-20 sm:py-24 bg-[#251F50] text-white border-t border-[#D49B4B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D49B4B]/30 text-[#D49B4B] text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Bafliex Cakes Training College
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Learn to Bake, Decorate &amp; Build Practical Cake Skills</h2>
            <p className="text-sm sm:text-base text-white/80 mt-4 max-w-2xl leading-relaxed">
              Practical, hands-on training for beginners and aspiring bakers. Choose a short programme or go through the full course, with <strong>4–5 hours of practical training daily</strong>.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 text-xs font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><Clock3 className="w-4 h-4 text-[#D49B4B]" /> 4–5 hrs practical daily</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><Wrench className="w-4 h-4 text-[#D49B4B]" /> Tools &amp; equipment provided</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><Sparkles className="w-4 h-4 text-[#D49B4B]" /> Certificate issued</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-[#D49B4B]/35 shadow-2xl bg-white">
            <img src="/images/training-college-poster.webp" alt="Bafliex Cakes Training College programmes and fees" loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {TRAINING_PACKAGES.map((pkg, index) => (
            <div key={pkg.duration} className={`rounded-3xl p-5 sm:p-6 border flex flex-col h-full ${index === 3 ? "bg-white text-[#251F50] border-[#D49B4B] shadow-2xl" : "bg-white/7 text-white border-white/12"}`}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${index === 3 ? "bg-[#D49B4B]/20 text-[#251F50]" : "bg-[#D49B4B]/15 text-[#D49B4B]"}`}><Sparkles className="w-3 h-3" /> {pkg.label}</span>
                <span className={`text-xs font-semibold ${index === 3 ? "text-[#6E5D54]" : "text-white/65"}`}>{pkg.duration}</span>
              </div>
              <div className="font-serif-display text-3xl font-bold">{pkg.price}</div>
              <p className={`text-sm mt-2 leading-relaxed ${index === 3 ? "text-[#6E5D54]" : "text-white/75"}`}>{pkg.description}</p>
              <div className={`mt-4 rounded-2xl px-3.5 py-3 text-xs font-semibold ${index === 3 ? "bg-[#F5EEE6]" : "bg-white/7"}`}>{pkg.focus}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mt-7">
          <div className="lg:col-span-7 rounded-3xl bg-white/6 border border-white/10 p-5 sm:p-7">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">What you'll learn</h3>
            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              {CORE_AREAS.map((item) => <div key={item} className="flex items-start gap-2.5 text-sm text-white/85"><CheckCircle2 className="w-4 h-4 text-[#65D391] mt-0.5 shrink-0" />{item}</div>)}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-3xl bg-[#F5EEE6] text-[#251F50] p-5 sm:p-7">
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">What to bring / what is provided</h3>
            <div className="mt-5 space-y-3 text-sm leading-relaxed">
              <div className="flex items-start gap-2"><FileText className="w-4 h-4 text-[#E8721C] mt-0.5 shrink-0" /><span><strong>Always provided:</strong> all ingredients, tools and equipment.</span></div>
              <div className="flex items-start gap-2"><UserRound className="w-4 h-4 text-[#E8721C] mt-0.5 shrink-0" /><span><strong>Not provided on shorter packages:</strong> apron, notebook and pen.</span></div>
              <div className="flex items-start gap-2"><Sparkles className="w-4 h-4 text-[#E8721C] mt-0.5 shrink-0" /><span><strong>Full Course:</strong> apron, notebook and pen are provided free of charge.</span></div>
              <div className="flex items-start gap-2"><CakeSliceIcon /><span><strong>Take-home practice:</strong> baked goods made during training are carried home by the trainee.</span></div>
              <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#1E8E5A] mt-0.5 shrink-0" /><span><strong>Certificate:</strong> issued for the skills learned.</span></div>
            </div>
            <a href={trainingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#1E8E5A] text-white font-bold text-sm shadow-lg"><MessageCircle className="w-4 h-4" /> Enquire / Book Training</a>
          </div>
        </div>
      </div>
    </section>
  );
};

function CakeSliceIcon() {
  return <span className="w-4 h-4 mt-0.5 shrink-0 rounded-[5px] bg-[#E8721C] inline-block" aria-hidden="true" />;
}
