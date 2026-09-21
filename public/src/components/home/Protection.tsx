import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { protection } from "@/content/site";

export function Protection() {
  return (
    <Section id="protection" tone="muted">
      <SectionHeading eyebrow="Protection" title={protection.title} />

      <dl className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {protection.items.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <dt className="text-base font-semibold">{item.title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {protection.disclaimer}
        </p>
        <Button asChild variant="outline" size="lg">
          <Link to="/safety">Read our safety approach</Link>
        </Button>
      </div>
    </Section>
  );
}
