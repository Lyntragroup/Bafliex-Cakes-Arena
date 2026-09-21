import { Section, SectionHeading } from "@/components/ui/section";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="muted">
      <SectionHeading
        eyebrow="How LYNTRA works"
        title="Clear steps from request to completion"
        text="The same simple process applies whether you are moving yourself, a parcel or a full load."
      />

      <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {howItWorks.map((item) => (
          <li key={item.step} className="bg-card p-7">
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
              {item.step}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
