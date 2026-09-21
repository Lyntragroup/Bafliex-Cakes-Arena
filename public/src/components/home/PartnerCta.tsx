import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { partnerTeaser } from "@/content/site";

export function PartnerCta() {
  return (
    <Section id="partners" tone="ink">
      <SectionHeading
        eyebrow={partnerTeaser.eyebrow}
        tone="ink"
        title={partnerTeaser.title}
        text={partnerTeaser.text}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {partnerTeaser.roles.map((role) => (
          <li key={role.title} className="rounded-xl border border-ink-border bg-ink-foreground/5 p-5">
            <h3 className="text-base font-semibold text-ink-foreground">{role.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{role.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button asChild variant="hero" size="xl">
          <Link to={partnerTeaser.cta.to}>
            {partnerTeaser.cta.label}
            <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
