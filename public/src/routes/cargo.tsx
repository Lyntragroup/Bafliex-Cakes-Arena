import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Info } from "lucide-react";

import cargoHardwareImage from "@/assets/cargo-hardware-neutral.jpg";
import heroImage from "@/assets/hero-cargo.jpg";
import cargoShopImage from "@/assets/cargo-shop.jpg";
import cargoTruckImage from "@/assets/cargo-truck-neutral.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BenefitGrid } from "@/components/services/BenefitGrid";
import { FlowChain } from "@/components/services/FlowChain";
import { MarketGroups } from "@/components/services/MarketGroups";
import { PhotoStory } from "@/components/services/PhotoStory";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCardGrid } from "@/components/services/ServiceCardGrid";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  cargoBackhaul,
  cargoBenefits,
  cargoBrokers,
  cargoBusiness,
  cargoFinalCta,
  cargoHero,
  cargoIntro,
  cargoMarketplace,
  cargoMarketplaceValue,
  cargoMarkets,
  cargoMarketsIntro,
  cargoMultiStop,
  cargoNairobi,
  cargoOwners,
  cargoPartners,
  cargoProtection,
  cargoServiceRules,
  cargoServices,
  cargoSteps,
  cargoTypes,
  cargoVsSend,
  cargoVisibility,
} from "@/content/cargo";

const title = "Cargo Transport | LYNTRA Freight & Goods";
const description =
  "Move larger, bulkier and commercial goods with LYNTRA. Tell LYNTRA what needs to move and connect it with suitable transport through the shared network.";

export const Route = createFileRoute("/cargo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/cargo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/cargo" }],
  }),
  component: CargoPage,
});

function CargoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={cargoHero.eyebrow}
          headline={cargoHero.headline}
          supporting={cargoHero.supporting}
          primaryCta={cargoHero.primaryCta}
          secondaryCta={cargoHero.secondaryCta}
          image={heroImage}
          imageAlt={cargoHero.imageAlt}
          photos={[
            { src: cargoHardwareImage, alt: "Workers loading building supplies onto an ordinary pickup in Kenya" },
            { src: cargoShopImage, alt: "A Kenyan shop owner handing stock cartons to a van driver" },
            { src: cargoTruckImage, alt: "Workers loading an ordinary truck at a Kenyan wholesale depot" },
          ]}
        />

        {/* 2. Introduction */}
        <Section>
          <SectionHeading eyebrow={cargoIntro.eyebrow} title={cargoIntro.title} text={cargoIntro.text} />
        </Section>

        {/* 3. Cargo services */}
        <Section id="cargo-services" tone="muted">
          <SectionHeading
            eyebrow="Cargo services"
            title="Transport for larger and commercial loads"
            text="Choose the cargo service that best fits what you need to move. Vehicle suitability and service availability may vary."
          />
          <ServiceCardGrid items={cargoServices} className="mt-12" />
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Cargo in real life"
            title="From the hardware shop to the wholesale depot"
            text="Cargo is not only for large companies. Small shops, retailers, farmers, builders and growing businesses all need practical ways to move goods."
          />
          <PhotoStory
            items={[
              { src: cargoHardwareImage, alt: "Workers loading building supplies onto an ordinary pickup in Kenya", label: "Hardware and supplies", caption: "A pickup can suit heavier goods for a local business movement." },
              { src: cargoShopImage, alt: "A Kenyan shop owner handing stock cartons to a van driver", label: "Shop stock", caption: "Stock can move from a supplier or shop to its next destination." },
              { src: cargoTruckImage, alt: "Workers loading an ordinary truck at a Kenyan wholesale depot", label: "Wholesale loads", caption: "Larger commercial movement may call for a truck or other suitable capacity." },
            ]}
          />
        </Section>

        {/* 4. Multi-stop transport */}
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow={cargoMultiStop.eyebrow} title={cargoMultiStop.title} text={cargoMultiStop.text} />
            <div>
              <FlowChain
                nodes={cargoMultiStop.stops.map((stop) => ({
                  label: stop.label,
                  tone: stop.kind === "delivery" ? "primary" : "default",
                }))}
              />
              <p className="mx-auto mt-7 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
                {cargoMultiStop.note}
              </p>
            </div>
          </div>
        </Section>

        {/* 5. How cargo transport works */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="How cargo transport works"
            title="From cargo request to completed movement"
            text="A simple five-step path for connecting a cargo job with suitable transport."
          />
          <ProcessSteps steps={cargoSteps} />
        </Section>

        {/* 6. Cargo marketplace */}
        <Section tone="ink">
          <SectionHeading
            eyebrow={cargoMarketplace.eyebrow}
            title={cargoMarketplace.title}
            text={cargoMarketplace.text}
            tone="ink"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <MarketplaceNode
              label={cargoMarketplace.demand.label}
              note={cargoMarketplace.demand.note}
              icon={cargoMarketplace.demand.icon}
              tone="ink"
            />
            <div className="flex justify-center text-accent">
              <ChevronDown aria-hidden className="size-7 lg:rotate-[-90deg]" />
            </div>
            <MarketplaceNode
              label={cargoMarketplace.platform.label}
              note={cargoMarketplace.platform.note}
              icon={cargoMarketplace.platform.icon}
              tone="accent"
            />
          </div>
          <div className="mx-auto my-4 flex justify-center text-accent lg:hidden">
            <ChevronDown aria-hidden className="size-7" />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="hidden lg:block" />
            <div className="hidden justify-center text-accent lg:flex">
              <ChevronDown aria-hidden className="size-7 lg:rotate-[-90deg]" />
            </div>
            <MarketplaceNode
              label={cargoMarketplace.supply.label}
              note={cargoMarketplace.supply.note}
              icon={cargoMarketplace.supply.icon}
              tone="ink"
              participants={cargoMarketplace.supply.participants}
            />
          </div>
          <div className="mt-12 border-t border-ink-foreground/12 pt-10">
            <p className="eyebrow text-accent">Matching factors</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {cargoMarketplace.matchFactors.map((factor) => (
                <li key={factor} className="rounded-xl border border-ink-foreground/12 bg-ink-foreground/5 p-4 text-center text-sm font-semibold text-ink-foreground">
                  {factor}
                </li>
              ))}
            </ul>
          </div>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-3 md:grid-cols-3">
            {cargoMarketplace.summary.map((item, index) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/15 font-[family-name:var(--font-display)] text-xs font-bold text-accent">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        {/* 7. Marketplace value */}
        <Section>
          <SectionHeading eyebrow={cargoMarketplaceValue.eyebrow} title={cargoMarketplaceValue.title} />
          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {cargoMarketplaceValue.columns.map((column) => (
              <li key={column.title} className="border-l-2 border-primary pl-6">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={column.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{column.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{column.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 8. Why cargo with LYNTRA */}
        <Section tone="muted">
          <SectionHeading eyebrow="Why cargo with LYNTRA" title="A more connected way to move goods" />
          <BenefitGrid items={cargoBenefits} />
        </Section>

        {/* 9. Cargo types */}
        <Section>
          <SectionHeading
            eyebrow="Cargo types"
            title="Goods that may need cargo transport"
            text="Examples of larger, bulkier and commercial goods that can be suited to cargo services."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cargoTypes.map((type) => (
              <li key={type.title} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={type.icon} className="size-5" />
                </span>
                <span className="text-base font-medium">{type.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
            {cargoServiceRules.availability}
          </p>
        </Section>

        {/* 10. Protection & handling */}
        <Section tone="ink">
          <SectionHeading eyebrow={cargoProtection.eyebrow} title={cargoProtection.title} text={cargoProtection.text} tone="ink" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cargoProtection.items.map((item) => (
              <li key={item.title} className="rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-6 transition-colors duration-200 hover:border-accent/40">
                <span className="grid size-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm text-ink-muted">{cargoServiceRules.protection}</p>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <Link to={cargoProtection.cta.to}>
                {cargoProtection.cta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </Section>

        {/* 11. Backhaul & return trips */}
        <Section>
          <SectionHeading eyebrow={cargoBackhaul.eyebrow} title={cargoBackhaul.title} text={cargoBackhaul.text} />
          <FlowChain
            className="mt-12 max-w-xl"
            nodes={cargoBackhaul.flow.map((label, index) => ({ label, tone: index === 1 ? "primary" : "default" }))}
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">{cargoBackhaul.note}</p>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cargoBackhaul.value.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35">
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 12. For businesses */}
        <Section tone="muted">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow={cargoBusiness.eyebrow} title={cargoBusiness.title} text={cargoBusiness.text} />
              <div className="mt-8">
                <Button asChild variant="brand" size="lg">
                  <Link to={cargoBusiness.cta.to}>{cargoBusiness.cta.label}<ArrowRight aria-hidden /></Link>
                </Button>
              </div>
            </div>
            <SimplePointList points={cargoBusiness.points} />
          </div>
        </Section>

        {/* 13. For cargo owners */}
        <AudienceWorkflow eyebrow={cargoOwners.eyebrow} title={cargoOwners.title} text={cargoOwners.text} points={cargoOwners.points} cta={cargoOwners.cta} />

        {/* 14. For brokers */}
        <Section tone="muted">
          <AudienceWorkflowContent eyebrow={cargoBrokers.eyebrow} title={cargoBrokers.title} text={cargoBrokers.text} points={cargoBrokers.points} cta={cargoBrokers.cta} />
        </Section>

        {/* 15. For vehicle & fleet owners */}
        <Section>
          <SectionHeading eyebrow={cargoPartners.eyebrow} title={cargoPartners.title} text={cargoPartners.text} />
          <ServiceCardGrid items={cargoPartners.cards} columns={3} className="mt-12" />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg"><Link to={cargoPartners.cta.to}>{cargoPartners.cta.label}<ArrowRight aria-hidden /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link to={cargoPartners.secondaryCta.to}>{cargoPartners.secondaryCta.label}</Link></Button>
          </div>
        </Section>

        {/* 16. Cargo visibility */}
        <Section tone="muted">
          <SectionHeading eyebrow={cargoVisibility.eyebrow} title={cargoVisibility.title} text={cargoVisibility.text} />
          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {cargoVisibility.stages.map((stage, index) => (
              <li key={stage.title} className="relative">
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35">
                  <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-primary"><Icon name={stage.icon} className="size-5" /></span>
                  <h3 className="mt-4 text-base font-semibold">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.text}</p>
                </div>
                {index < cargoVisibility.stages.length - 1 ? <ChevronDown aria-hidden className="mx-auto my-1 size-5 text-primary lg:absolute lg:top-1/2 lg:-right-3.5 lg:my-0 lg:-translate-y-1/2 lg:-rotate-90" /> : null}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">{cargoVisibility.note}</p>
        </Section>

        {/* 17. Nairobi */}
        <Section>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading eyebrow={cargoNairobi.eyebrow} title={cargoNairobi.title} text={cargoNairobi.text} />
            <ul className="flex flex-wrap gap-2.5">
              {cargoNairobi.labels.map((label) => <li key={label} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition-colors duration-200 hover:border-primary/40 hover:text-primary">{label}</li>)}
            </ul>
          </div>
        </Section>

        {/* 18. Other priority markets */}
        <Section tone="muted">
          <SectionHeading eyebrow={cargoMarketsIntro.eyebrow} title={cargoMarketsIntro.title} text={cargoMarketsIntro.text} />
          <MarketGroups groups={cargoMarkets} />
        </Section>

        {/* 19. Cargo vs Send */}
        <Section>
          <SectionHeading eyebrow={cargoVsSend.eyebrow} title={cargoVsSend.title} text="Choose the service that matches the size and type of what you are moving." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {cargoVsSend.options.map((option) => (
              <article key={option.key} className={option.tone === "ink" ? "surface-ink rounded-3xl p-8 shadow-lift md:p-10" : "rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"}>
                <span className={option.tone === "ink" ? "grid size-11 place-items-center rounded-xl bg-accent/15 text-accent" : "grid size-11 place-items-center rounded-xl bg-brand-soft text-primary"}><Icon name={option.icon} className="size-5" /></span>
                <h3 className={option.tone === "ink" ? "mt-5 text-2xl font-bold text-ink-foreground" : "mt-5 text-2xl font-bold"}>{option.label}</h3>
                <p className={option.tone === "ink" ? "mt-5 text-sm font-semibold uppercase tracking-widest text-accent" : "mt-5 text-sm font-semibold uppercase tracking-widest text-primary"}>Best for</p>
                <ul className="mt-4 space-y-2">
                  {option.bestFor.map((item) => <li key={item} className={option.tone === "ink" ? "flex items-start gap-2 text-sm text-ink-muted" : "flex items-start gap-2 text-sm text-muted-foreground"}><Check aria-hidden className={option.tone === "ink" ? "mt-0.5 size-4 shrink-0 text-accent" : "mt-0.5 size-4 shrink-0 text-primary"} />{item}</li>)}
                </ul>
                <div className="mt-8"><Button asChild variant={option.tone === "ink" ? "hero" : "brand"} size="lg"><Link to={option.cta.to}>{option.cta.label}<ArrowRight aria-hidden /></Link></Button></div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">{cargoVsSend.note}</p>
        </Section>

        {/* 20. Final CTA */}
        <ServiceFinalCta headline={cargoFinalCta.headline} supporting={cargoFinalCta.supporting} primaryCta={cargoFinalCta.primaryCta} secondaryCta={cargoFinalCta.secondaryCta} />
      </main>
      <SiteFooter />
    </div>
  );
}

function MarketplaceNode({
  label,
  note,
  icon,
  tone,
  participants,
}: {
  label: string;
  note: string;
  icon: string;
  tone: "ink" | "accent";
  participants?: string[];
}) {
  return (
    <div className={tone === "accent" ? "rounded-2xl border border-accent/40 bg-accent/15 p-7 text-center" : "rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-7 text-center"}>
      <span className={tone === "accent" ? "mx-auto grid size-12 place-items-center rounded-xl bg-accent/15 text-accent" : "mx-auto grid size-12 place-items-center rounded-xl bg-ink-foreground/10 text-accent"}><Icon name={icon} className="size-6" /></span>
      <h3 className="mt-4 text-lg font-semibold text-ink-foreground">{label}</h3>
      <p className="mt-2 text-sm text-ink-muted">{note}</p>
      {participants ? <ul className="mt-5 flex flex-wrap justify-center gap-2">{participants.map((participant) => <li key={participant} className="rounded-full border border-ink-foreground/12 px-3 py-1.5 text-xs font-medium text-ink-muted">{participant}</li>)}</ul> : null}
    </div>
  );
}

function SimplePointList({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {points.map((point) => <li key={point} className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm shadow-soft"><Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" /><span>{point}</span></li>)}
    </ul>
  );
}

type WorkflowPoint = { title: string; icon: string };

function AudienceWorkflow({ eyebrow, title, text, points, cta }: { eyebrow: string; title: string; text: string; points: WorkflowPoint[]; cta: { label: string; to: string } }) {
  return <Section><AudienceWorkflowContent eyebrow={eyebrow} title={title} text={text} points={points} cta={cta} /></Section>;
}

function AudienceWorkflowContent({ eyebrow, title, text, points, cta }: { eyebrow: string; title: string; text: string; points: WorkflowPoint[]; cta: { label: string; to: string } }) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        <div className="mt-8"><Button asChild variant="brand" size="lg"><Link to={cta.to}>{cta.label}<ArrowRight aria-hidden /></Link></Button></div>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {points.map((point) => <li key={point.title} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-soft"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-primary"><Icon name={point.icon} className="size-4" /></span><span>{point.title}</span></li>)}
      </ul>
    </div>
  );
}
