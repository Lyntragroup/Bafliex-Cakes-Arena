import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Info } from "lucide-react";

import heroImage from "@/assets/hero-logistics.jpg";
import carImage from "@/assets/partner-car.jpg";
import motorbikeImage from "@/assets/partner-motorbike.jpg";
import pickupImage from "@/assets/partner-pickup.jpg";
import tukTukImage from "@/assets/partner-tuktuk.jpg";
import vanImage from "@/assets/partner-van.jpg";
import truckImage from "@/assets/cargo-truck-neutral.jpg";
import fleetImage from "@/assets/vehicle-network.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitGrid } from "@/components/services/BenefitGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  partnerBackhaul,
  partnerBenefit,
  partnerBroker,
  partnerBusiness,
  partnerDemand,
  partnerFinalCta,
  partnerGains,
  partnerHero,
  partnerMarketplace,
  partnerMultiStop,
  partnerRoute,
  partnerSteps,
  partnerTrust,
  partnerTypes,
  partnerVehicles,
  partnerWorkTypes,
} from "@/content/partners";

const title = "Become a Partner | LYNTRA — Put Your Vehicle to Work";
const description =
  "Have a car, motorbike, tuk-tuk, van, pickup or truck? Partner with LYNTRA and find transport jobs that fit what you drive, where you go and when you're available.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/partners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={partnerHero.eyebrow}
          headline={partnerHero.headline}
          supporting={partnerHero.supporting}
          primaryCta={partnerHero.primaryCta}
          secondaryCta={partnerHero.secondaryCta}
          image={heroImage}
          imageAlt={partnerHero.imageAlt}
        />

        {/* 2. Vehicles we serve */}
        <Section>
          <SectionHeading
            eyebrow={partnerVehicles.eyebrow}
            title={partnerVehicles.title}
            text={partnerVehicles.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerVehicles.vehicles.map((vehicle) => {
              const photoByTitle: Record<string, { src: string; alt: string }> = {
                Motorbike: { src: motorbikeImage, alt: "Kenyan boda boda rider with an ordinary motorbike" },
                Car: { src: carImage, alt: "Kenyan car owner beside an ordinary passenger car" },
                "Tuk-Tuk": { src: tukTukImage, alt: "Tuk-tuk operator on a Kenyan town street" },
                Van: { src: vanImage, alt: "Kenyan worker loading an ordinary panel van" },
                Pickup: { src: pickupImage, alt: "Kenyan worker loading an ordinary pickup" },
                Truck: { src: truckImage, alt: "Ordinary cargo truck ready for a transport job" },
                Fleet: { src: fleetImage, alt: "Several ordinary vehicles available for transport jobs" },
              };
              const photo = photoByTitle[vehicle.title] ?? {
                src: carImage,
                alt: "Ordinary Kenyan transport vehicle",
              };

              return (
                <li
                  key={vehicle.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <div className="relative overflow-hidden">
                    <img fetchPriority="high" decoding="async"
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,color-mix(in_oklab,var(--ink)_78%,transparent)_100%)]" />
                    <span className="absolute top-4 left-4 grid size-10 place-items-center rounded-lg bg-background/90 text-primary shadow-soft">
                      <Icon name={vehicle.icon} className="size-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold">{vehicle.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{vehicle.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* 3. The two-sided benefit */}
        <Section tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              tone="ink"
              eyebrow={partnerBenefit.eyebrow}
              title={partnerBenefit.title}
              text={partnerBenefit.text}
            />
            <p className="mt-6 text-lg font-medium text-ink-foreground">{partnerBenefit.follow}</p>
          </div>
        </Section>

        {/* 4. Marketplace */}
        <Section tone="muted">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow={partnerMarketplace.eyebrow}
              title={partnerMarketplace.title}
              text={partnerMarketplace.text}
            />
          </div>
        </Section>

        {/* 5. Jobs along your route */}
        <Section>
          <SectionHeading
            eyebrow={partnerRoute.eyebrow}
            title={partnerRoute.title}
            text={partnerRoute.text}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {partnerRoute.examples.map((example) => (
              <li
                key={example}
                className="rounded-2xl border border-border bg-card p-6 text-base font-medium shadow-soft"
              >
                {example}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            {partnerRoute.note}
          </p>
        </Section>

        {/* 6. Multiple parcels / stops */}
        <Section tone="muted">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow={partnerMultiStop.eyebrow}
              title={partnerMultiStop.title}
              text={partnerMultiStop.text}
            />
          </div>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {partnerMultiStop.steps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
            {partnerMultiStop.note}
          </p>
        </Section>

        {/* 7. Backhaul */}
        <Section tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              tone="ink"
              eyebrow={partnerBackhaul.eyebrow}
              title={partnerBackhaul.title}
              text={partnerBackhaul.text}
            />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">{partnerBackhaul.follow}</p>
            <p className="mt-4 text-sm text-ink-muted">{partnerBackhaul.note}</p>
          </div>
        </Section>

        {/* 8. Different types of work */}
        <Section>
          <SectionHeading
            eyebrow={partnerWorkTypes.eyebrow}
            title={partnerWorkTypes.title}
            text={partnerWorkTypes.text}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partnerWorkTypes.types.map((type) => (
              <li
                key={type.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={type.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{type.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{type.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 9. Who needs transport */}
        <Section tone="muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow={partnerDemand.eyebrow}
              title={partnerDemand.title}
              text={partnerDemand.text}
            />
            <ul className="flex flex-wrap gap-2.5">
              {partnerDemand.groups.map((group) => (
                <li
                  key={group}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                >
                  {group}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 10. How it works */}
        <Section id="how-it-works">
          <SectionHeading
            eyebrow="How it works"
            title="How Partnering Works"
            text="A simple journey from joining to completing jobs."
          />
          <ProcessSteps steps={partnerSteps} />
        </Section>

        {/* Broker is a network role, not a vehicle class */}
        <Section id="brokers">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <SectionHeading
              eyebrow={partnerBroker.eyebrow}
              title={partnerBroker.title}
              text={partnerBroker.text}
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {partnerBroker.capabilities.map((item) => (
                <li key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{partnerBroker.note}</p>
        </Section>

        {/* 11. Partner types */}
        <Section tone="muted">
          <SectionHeading
            eyebrow={partnerTypes.eyebrow}
            title={partnerTypes.title}
            text={partnerTypes.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.types.map((type) => (
              <li
                key={type.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={type.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{type.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 12. Trust and requirements */}
        <Section>
          <SectionHeading eyebrow={partnerTrust.eyebrow} title={partnerTrust.title} text={partnerTrust.text} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {partnerTrust.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 13. What partners can benefit from */}
        <Section tone="muted">
          <SectionHeading eyebrow="Why partner" title="What You Can Benefit From" />
          <BenefitGrid items={partnerGains} />
        </Section>

        {/* 14. Business demand */}
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={partnerBusiness.eyebrow}
                title={partnerBusiness.title}
                text={partnerBusiness.text}
              />
              <div className="mt-8">
                <Button asChild variant="brand" size="lg">
                  <Link to={partnerBusiness.cta.to}>
                    {partnerBusiness.cta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {partnerBusiness.examples.map((example) => (
                <li
                  key={example.title}
                  className="rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <div className="flex items-center gap-2">
                    <Icon name={example.icon} className="size-4 shrink-0 text-primary" />
                    <span className="text-sm font-semibold">{example.title}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{example.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            Tracking and digital payment options are available where supported.
          </p>
        </Section>

        {/* 15. Final CTA */}
        <ServiceFinalCta
          headline={partnerFinalCta.headline}
          supporting={partnerFinalCta.supporting}
          primaryCta={partnerFinalCta.primaryCta}
          secondaryCta={partnerFinalCta.secondaryCta}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
