import { createFileRoute } from "@tanstack/react-router";

import bizDocumentsImage from "@/assets/biz-documents.jpg";
import bizRestaurantImage from "@/assets/biz-restaurant.jpg";
import bizSmeImage from "@/assets/biz-sme.jpg";
import bizStaffImage from "@/assets/biz-staff.jpg";
import cargoShopImage from "@/assets/cargo-shop.jpg";
import heroImage from "@/assets/hero-logistics.jpg";
import sendBakeryImage from "@/assets/send-bakery.jpg";
import sendPharmacyImage from "@/assets/send-pharmacy.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitGrid } from "@/components/services/BenefitGrid";
import { FlowChain } from "@/components/services/FlowChain";
import { PhotoStory } from "@/components/services/PhotoStory";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  businessAudience,
  businessBenefits,
  businessFinalCta,
  businessHero,
  businessMarketplace,
  businessMultiStop,
  businessNetwork,
  businessProblem,
  businessSteps,
  businessTogether,
  businessTypes,
  businessUseCases,
  businessVisibility,
} from "@/content/business";

const title = "LYNTRA for Business | Move Your People. Move Your Business.";
const description =
  "Arrange staff transport, business errands, document deliveries, parcels, stock, goods and cargo through one connected LYNTRA platform.";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/business" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/business" }],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={businessHero.eyebrow}
          headline={businessHero.headline}
          supporting={businessHero.supporting}
          primaryCta={businessHero.primaryCta}
          secondaryCta={businessHero.secondaryCta}
          image={heroImage}
          imageAlt={businessHero.imageAlt}
          photos={[
            { src: bizRestaurantImage, alt: "A Kenyan restaurant worker handing a prepared order to a courier" },
            { src: bizDocumentsImage, alt: "A Kenyan office worker handing documents to a courier" },
            { src: cargoShopImage, alt: "A Kenyan shop owner handing stock cartons to a driver" },
          ]}
        />

        {/* Relevance strip */}
        <div className="border-b border-border bg-surface">
          <div className="container-page flex flex-wrap justify-center gap-2 py-5 md:gap-2.5">
            {businessHero.audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground md:text-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Business operating models */}
        <Section id="business-models">
          <SectionHeading
            eyebrow={businessAudience.eyebrow}
            title={businessAudience.title}
            text={businessAudience.text}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {businessAudience.paths.map((path) => (
              <article key={path.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-9">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
                    <Icon name={path.icon} className="size-6" />
                  </span>
                  <div>
                    <p className="eyebrow text-primary">{path.summary}</p>
                    <h2 className="mt-1 text-2xl font-semibold">{path.title}</h2>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{path.text}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {path.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface px-4 py-3 text-sm">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-primary">
                        <span aria-hidden className="size-1.5 rounded-full bg-current" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* The business problem */}
        <Section>
          <SectionHeading
            eyebrow={businessProblem.eyebrow}
            title={businessProblem.title}
            text={businessProblem.text}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessProblem.moments.map((moment) => (
              <li
                key={moment.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={moment.icon} className="size-5" />
                </span>
                <p className="eyebrow mt-4 text-primary">{moment.label}</p>
                <p className="mt-2 text-base leading-relaxed font-medium">{moment.title}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-medium">{businessProblem.close}</p>
        </Section>

        {/* 3. Use cases */}
        <Section tone="muted">
          <SectionHeading
            eyebrow={businessUseCases.eyebrow}
            title={businessUseCases.title}
            text={businessUseCases.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businessUseCases.cases.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 md:p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Business, in motion"
            title="The work behind every order, document and delivery"
            text="Whether you run a bakery, restaurant, pharmacy, office, shop or wholesale operation, movement is part of the day."
          />
          <PhotoStory
            items={[
              { src: bizRestaurantImage, alt: "A Kenyan restaurant worker handing a prepared order to a courier", label: "Restaurant orders", caption: "A prepared order is handed to a rider for a customer." },
              { src: sendBakeryImage, alt: "A Kenyan bakery worker preparing a celebration cake", label: "Bakery deliveries", caption: "A celebration cake can move from a local bakery to the person waiting for it." },
              { src: sendPharmacyImage, alt: "A Kenyan pharmacist handing a package to a courier", label: "Pharmacy packages", caption: "A pharmacy prepares an item for suitable delivery." },
              { src: bizDocumentsImage, alt: "A Kenyan office worker handing documents to a courier", label: "Documents and errands", caption: "Professional teams move documents between offices and locations." },
              { src: bizSmeImage, alt: "A Kenyan small-business owner packing a customer order", label: "SME orders", caption: "A small business prepares an order for a customer." },
              { src: bizStaffImage, alt: "Kenyan employees boarding an ordinary minibus", label: "Staff movement", caption: "People can move between workplaces and locations where suitable transport is available." },
            ]}
            columns={3}
          />
        </Section>

        {/* Shared job flow */}
        <Section tone="ink">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <SectionHeading
                tone="ink"
                eyebrow={businessMarketplace.eyebrow}
                title={businessMarketplace.title}
                text={businessMarketplace.text}
              />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                {businessMarketplace.follow}
              </p>
            </div>
            <FlowChain
              tone="ink"
              nodes={businessMarketplace.flow.map((label, index) => ({
                label,
                tone: index === 0 || index === businessMarketplace.flow.length - 1 ? "primary" : "default",
              }))}
            />
          </div>
        </Section>

        {/* 5. Multiple stops */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <SectionHeading
              eyebrow={businessMultiStop.eyebrow}
              title={businessMultiStop.title}
              text={businessMultiStop.text}
            />
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {businessMultiStop.examples.map((example) => (
                  <li
                    key={example}
                    className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed shadow-soft"
                  >
                    {example}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{businessMultiStop.note}</p>
            </div>
          </div>
        </Section>

        {/* 6. Wider network */}
        <Section tone="muted">
          <SectionHeading
            eyebrow={businessNetwork.eyebrow}
            title={businessNetwork.title}
            text={businessNetwork.text}
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-6">
            {businessNetwork.vehicles.map((vehicle) => (
              <li key={vehicle.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={vehicle.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{vehicle.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{vehicle.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{businessNetwork.note}</p>
        </Section>

        {/* 7. Visibility */}
        <Section>
          <SectionHeading
            eyebrow={businessVisibility.eyebrow}
            title={businessVisibility.title}
            text={businessVisibility.text}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessVisibility.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 8. Types of businesses */}
        <Section tone="muted">
          <SectionHeading
            eyebrow={businessTypes.eyebrow}
            title={businessTypes.title}
            text={businessTypes.text}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.types.map((type) => (
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

        {/* 9. Benefits */}
        <Section>
          <SectionHeading eyebrow="Why LYNTRA" title="Why Businesses Use LYNTRA" />
          <BenefitGrid items={businessBenefits} />
        </Section>

        {/* 10. Staff + goods together */}
        <Section tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              tone="ink"
              eyebrow={businessTogether.eyebrow}
              title={businessTogether.title}
              text={businessTogether.text}
            />
            <p className="mt-6 text-lg leading-relaxed font-medium text-ink-foreground">
              {businessTogether.follow}
            </p>
          </div>
        </Section>

        {/* 11. How it works */}
        <Section tone="muted" id="how-it-works">
          <SectionHeading
            eyebrow="How it works"
            title="How Business Transport Works on LYNTRA"
            text="Five simple steps from need to completion."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {businessSteps.map((step) => (
              <li key={step.step} className="bg-card p-6 transition-colors duration-200 hover:bg-surface md:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
                    {step.step}
                  </span>
                  {step.icon ? <Icon name={step.icon} className="size-4 text-primary" /> : null}
                </div>
                <h3 className="mt-3 text-base font-semibold md:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 12. Final CTA */}
        <ServiceFinalCta
          headline={businessFinalCta.headline}
          supporting={businessFinalCta.supporting}
          primaryCta={businessFinalCta.primaryCta}
          secondaryCta={businessFinalCta.secondaryCta}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
