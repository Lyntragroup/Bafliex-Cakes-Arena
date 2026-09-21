import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Info } from "lucide-react";

import heroImage from "@/assets/protect-handover.jpg";
import claimHelpImage from "@/assets/protect-claim-help.jpg";
import cargoCareImage from "@/assets/protect-cargo-care.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  safetyBusiness,
  safetyClaims,
  safetyCustomers,
  safetyEmergency,
  safetyFinalCta,
  safetyHero,
  safetyPartners,
  safetyPrinciples,
  safetyProtection,
} from "@/content/support";

const title = "Safety & Protection | LYNTRA — Move With More Confidence";
const description =
  "How LYNTRA promotes safer movement: Transport Partner checks where applicable, trip visibility, clear records and support when you need it.";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/safety" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/safety" }],
  }),
  component: SafetyPage,
});

function SafetyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={safetyHero.eyebrow}
          headline={safetyHero.headline}
          supporting={safetyHero.supporting}
          primaryCta={safetyHero.primaryCta}
          secondaryCta={safetyHero.secondaryCta}
          image={heroImage}
          imageAlt={safetyHero.imageAlt}
          photos={[
            { src: heroImage, alt: "A careful parcel handover between a Kenyan transport partner and customer" },
            { src: cargoCareImage, alt: "Kenyan workers securing cargo on an ordinary pickup" },
            { src: claimHelpImage, alt: "A Kenyan support conversation about a transport issue" },
          ]}
        />

        {/* 2. Safety principles */}
        <Section>
          <SectionHeading
            eyebrow={safetyPrinciples.eyebrow}
            title={safetyPrinciples.title}
            text={safetyPrinciples.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {safetyPrinciples.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 flex max-w-3xl items-start gap-2 text-sm text-muted-foreground">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            {safetyPrinciples.note}
          </p>
        </Section>

        {/* 3. Customers & partners guidance */}
        <Section tone="muted">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow={safetyCustomers.eyebrow} title={safetyCustomers.title} />
              <ul className="mt-8 space-y-4">
                {safetyCustomers.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow={safetyPartners.eyebrow} title={safetyPartners.title} />
              <ul className="mt-8 space-y-4">
                {safetyPartners.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to={safetyPartners.cta.to}>
                    {safetyPartners.cta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Business trust */}
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow={safetyBusiness.eyebrow}
              title={safetyBusiness.title}
              text={safetyBusiness.text}
            />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <p className="text-base leading-relaxed text-muted-foreground">{safetyBusiness.follow}</p>
              <div className="mt-6">
                <Button asChild variant="brand" size="lg">
                  <Link to={safetyBusiness.cta.to}>
                    {safetyBusiness.cta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Protection / insurance layer */}
        <Section>
          <SectionHeading
            eyebrow={safetyProtection.eyebrow}
            title={safetyProtection.title}
            text={safetyProtection.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {safetyProtection.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">{safetyProtection.intro}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {safetyProtection.distinction}
            </p>
          </div>
        </Section>

        {/* 6. Claims / incident support */}
        <Section tone="muted">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={safetyClaims.eyebrow}
                title={safetyClaims.title}
                text={safetyClaims.text}
              />
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8">
              <p className="text-sm font-semibold">{safetyClaims.follow}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {safetyClaims.evidence.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-lg bg-brand-soft text-primary">
                      <Icon name={item.icon} className="size-4" />
                    </span>
                    <span className="text-sm leading-relaxed">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                {safetyClaims.note}
              </p>
            </div>
          </div>
        </Section>

        {/* 7. Emergency clarification */}
        <Section tone="ink">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-accent/15 text-accent">
              <Icon name="alert-triangle" className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-ink-foreground md:text-3xl">
              {safetyEmergency.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {safetyEmergency.text}
            </p>
          </div>
        </Section>

        {/* 6. Final CTA */}
        <ServiceFinalCta
          headline={safetyFinalCta.headline}
          supporting={safetyFinalCta.supporting}
          primaryCta={safetyFinalCta.primaryCta}
          secondaryCta={safetyFinalCta.secondaryCta}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
