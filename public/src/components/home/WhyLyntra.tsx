import { Icon } from "@/components/home/Icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { whyLyntra } from "@/content/site";

export function WhyLyntra() {
  return (
    <Section id="why-lyntra">
      <SectionHeading
        eyebrow="Why LYNTRA"
        title="Transport you can rely on"
        text="Every part of LYNTRA exists to make movement easier — for customers, for partners and for the businesses that depend on both."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyLyntra.map((item) => (
          <li key={item.title} className="rounded-xl border border-border/70 bg-card p-6">
            <Icon name={item.icon} className="size-5 text-primary" />
            <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
