import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { businessTeaser } from "@/content/site";

export function BusinessTeaser() {
  return (
    <Section id="business" tone="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow={businessTeaser.eyebrow}
            title={businessTeaser.title}
            text={businessTeaser.text}
          />
          <Button asChild variant="brand" size="lg" className="mt-8">
            <Link to={businessTeaser.cta.to}>{businessTeaser.cta.label}</Link>
          </Button>
        </div>

        <ul className="grid gap-4">
          {businessTeaser.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-sm"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-primary">
                <Check aria-hidden className="size-3.5" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
