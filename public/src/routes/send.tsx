import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Info } from "lucide-react";

import heroImage from "@/assets/hero-send.jpg";
import sendBakeryImage from "@/assets/send-bakery.jpg";
import sendDeliveredImage from "@/assets/send-delivered.jpg";
import sendPharmacyImage from "@/assets/send-pharmacy.jpg";
import sendPickupImage from "@/assets/send-pickup-neutral.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitGrid } from "@/components/services/BenefitGrid";
import { MarketGroups } from "@/components/services/MarketGroups";
import { PhotoStory } from "@/components/services/PhotoStory";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCardGrid } from "@/components/services/ServiceCardGrid";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  deliveryVisibility,
  parcelServices,
  parcelTypes,
  sendBenefits,
  sendBusiness,
  sendFinalCta,
  sendHero,
  sendIntro,
  sendMarkets,
  sendMarketsIntro,
  sendMore,
  sendMultiStop,
  sendNairobi,
  sendVsCargo,
  sendPartners,
  sendProtection,
  sendServiceRules,
  sendSteps,
} from "@/content/send";

const title = "Send a Parcel | LYNTRA Parcel & Delivery Services";
const description =
  "Send parcels and everyday items with LYNTRA — convenient pickup, delivery and tracking for personal and business deliveries in Nairobi and beyond.";

export const Route = createFileRoute("/send")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/send" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/send" }],
  }),
  component: SendPage,
});

function SendPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={sendHero.eyebrow}
          headline={sendHero.headline}
          supporting={sendHero.supporting}
          primaryCta={sendHero.primaryCta}
          secondaryCta={sendHero.secondaryCta}
          image={heroImage}
          imageAlt={sendHero.imageAlt}
          photos={[
            { src: sendPickupImage, alt: "A Kenyan rider collecting a parcel outside a local shop" },
            { src: sendBakeryImage, alt: "A Kenyan bakery worker preparing a celebration cake for delivery" },
            { src: sendDeliveredImage, alt: "A customer receiving a cake box at a Nairobi doorway" },
          ]}
        />

        {/* 2. Introduction */}
        <Section>
          <SectionHeading eyebrow={sendIntro.eyebrow} title={sendIntro.title} text={sendIntro.text} />
        </Section>

        {/* 3. Parcel services */}
        <Section id="parcel-services" tone="muted">
          <SectionHeading
            eyebrow="Parcel services"
            title="Delivery options built around what you're sending"
            text="Choose the delivery approach that matches the parcel, the timing and who it is for."
          />
          <ServiceCardGrid items={parcelServices} className="mt-12" />
        </Section>

        <Section>
          <SectionHeading
            eyebrow="One everyday delivery"
            title="From a local kitchen or shop to someone who is waiting"
            text="A cake, a pharmacy package, a restaurant order or a personal parcel can all have a simple journey: prepared, collected, moved and received."
          />
          <PhotoStory
            numbered
            items={[
              { src: sendBakeryImage, alt: "A Kenyan bakery worker preparing a decorated celebration cake", label: "Prepared", caption: "A bakery, shop or home gets the parcel ready." },
              { src: sendPickupImage, alt: "A Kenyan rider collecting a boxed parcel from a shop", label: "Collected", caption: "A Transport Partner collects it where the service allows." },
              { src: sendPharmacyImage, alt: "A Kenyan pharmacist handing a package to a courier", label: "On the way", caption: "Parcels move through ordinary Kenyan streets." },
              { src: sendDeliveredImage, alt: "A Kenyan customer receiving a cake box at home", label: "Received", caption: "The recipient gets the item at its destination." },
            ]}
            columns={4}
          />
        </Section>

        {/* 4. How parcel delivery works */}
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title="How Sending Works"
            text="A clear sequence from the moment you tell Lyntra what you are sending to the moment it arrives."
          />
          <ProcessSteps steps={sendSteps} />
        </Section>

        {/* 5. Why send with LYNTRA */}
        <Section tone="muted">
          <SectionHeading eyebrow="Why LYNTRA" title="Why Send With Lyntra" />
          <BenefitGrid items={sendBenefits} />
        </Section>

        {/* 6. Parcel types */}
        <Section>
          <SectionHeading
            eyebrow="Parcel types"
            title="Send the things that matter."
            text="Examples of items people and businesses commonly send."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {parcelTypes.map((type) => (
              <li
                key={type.title}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={type.icon} className="size-5" />
                </span>
                <span className="text-base font-medium">{type.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            {sendServiceRules.availability}
          </p>
        </Section>

        {/* 7. Protection & insurance */}
        <Section tone="ink">
          <SectionHeading
            eyebrow={sendProtection.eyebrow}
            title={sendProtection.title}
            text={sendProtection.text}
            tone="ink"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sendProtection.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-6 transition-colors duration-200 hover:border-accent/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-ink-muted">{sendServiceRules.protection}</p>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to={sendProtection.cta.to}>
                {sendProtection.cta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </Section>

        {/* 8. For businesses */}
        <Section>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={sendBusiness.eyebrow}
                title={sendBusiness.title}
                text={sendBusiness.text}
              />
              <div className="mt-8">
                <Button asChild variant="brand" size="lg">
                  <Link to={sendBusiness.cta.to}>
                    {sendBusiness.cta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {sendBusiness.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm shadow-soft"
                >
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 8b. Multi-stop business deliveries */}
        <Section tone="muted">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow={sendMultiStop.eyebrow}
              title={sendMultiStop.title}
              text={sendMultiStop.text}
            />
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <p className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">For customers: </span>
                {sendMultiStop.customerNote}
              </p>
              <p className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">For Transport Partners: </span>
                {sendMultiStop.partnerNote}
              </p>
            </div>
          </div>
        </Section>

        {/* 9. For delivery partners */}
        <Section>
          <SectionHeading
            eyebrow={sendPartners.eyebrow}
            title={sendPartners.title}
            text={sendPartners.text}
          />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {sendPartners.connection}
          </p>
          <ServiceCardGrid items={sendPartners.cards} columns={3} className="mt-12" />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg">
              <Link to={sendPartners.cta.to}>
                {sendPartners.cta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to={sendPartners.secondaryCta.to}>{sendPartners.secondaryCta.label}</Link>
            </Button>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {sendPartners.marketplace}
          </p>
        </Section>

        {/* 10. Delivery visibility */}
        <Section>
          <SectionHeading
            eyebrow={deliveryVisibility.eyebrow}
            title={deliveryVisibility.title}
            text={deliveryVisibility.text}
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-4">
            {deliveryVisibility.stages.map((stage, index) => (
              <li key={stage.title} className="relative">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35">
                  <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-primary">
                    <Icon name={stage.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
                </div>
                {index < deliveryVisibility.stages.length - 1 ? (
                  <ChevronDown
                    aria-hidden
                    className="mx-auto my-1 size-5 text-primary lg:absolute lg:top-1/2 lg:-right-3.5 lg:my-0 lg:-translate-y-1/2 lg:-rotate-90"
                  />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">{deliveryVisibility.note}</p>
        </Section>

        {/* 11. Nairobi */}
        <Section tone="muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow={sendNairobi.eyebrow}
              title={sendNairobi.title}
              text={sendNairobi.text}
            />
            <ul className="flex flex-wrap gap-2.5">
              {sendNairobi.labels.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 12. Other priority markets */}
        <Section>
          <SectionHeading
            eyebrow={sendMarketsIntro.eyebrow}
            title={sendMarketsIntro.title}
            text={sendMarketsIntro.text}
          />
          <MarketGroups groups={sendMarkets} />
        </Section>

        {/* 12b. Send vs Cargo */}
        <Section tone="muted">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow={sendVsCargo.eyebrow}
              title={sendVsCargo.title}
              text={sendVsCargo.text}
            />
            <div className="lg:justify-self-end">
              <Button asChild variant="brand" size="lg">
                <Link to={sendVsCargo.cta.to}>
                  {sendVsCargo.cta.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* 12c. More than a delivery */}
        <Section>
          <SectionHeading eyebrow={sendMore.eyebrow} title={sendMore.title} text={sendMore.text} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {sendMore.links.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <span className="flex-1 text-base font-semibold">{item.label}</span>
                  <ArrowRight
                    aria-hidden
                    className="size-4 text-primary transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* 13. Final CTA */}
        <ServiceFinalCta
          headline={sendFinalCta.headline}
          supporting={sendFinalCta.supporting}
          primaryCta={sendFinalCta.primaryCta}
          secondaryCta={sendFinalCta.secondaryCta}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
