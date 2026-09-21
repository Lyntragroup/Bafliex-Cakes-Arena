import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { Cta } from "@/content/site";

/** Closing CTA band shared by LYNTRA service pages. */
export function ServiceFinalCta({
  headline,
  supporting,
  primaryCta,
  secondaryCta,
}: {
  headline: string;
  supporting: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <Section tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">{headline}</h2>
        <p className="mt-4 text-lg text-ink-muted">{supporting}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <Link to={primaryCta.to}>
              {primaryCta.label}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
          {secondaryCta ? (
            <Button asChild variant="onInk" size="xl">
              <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
