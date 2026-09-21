import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import heroImage from "@/assets/hero-logistics.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { appDestinations } from "@/content/app-links";
import {
  audienceSplit,
  serviceAdvantages,
  serviceCategories,
  serviceSteps,
  servicesFinalCta,
  servicesHero,
} from "@/content/services";

const title = "Our Services | LYNTRA Mobility & Logistics";
const description =
  "Rides, delivery, cargo, business mobility, Backhaul and the LYNTRA Transport Partner network — one platform connecting people, businesses and Transport Partners.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <section className="surface-ink relative isolate overflow-hidden">
          <img loading="eager" fetchPriority="high" decoding="async"
            src={heroImage}
            alt="Truck and delivery rider on a Kenyan road at sunrise"
            width={1600}
            height={1000}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--ink)_20%,transparent_98%)]"
          />
          <div className="container-page py-20 md:py-28 lg:py-32">
            <div className="animate-rise max-w-3xl">
              <p className="eyebrow text-accent">{servicesHero.eyebrow}</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.07] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
                {servicesHero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
                {servicesHero.supporting}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href="#services-overview">
                    {servicesHero.primaryCta.label}
                    <ArrowRight aria-hidden />
                  </a>
                </Button>
                <Button asChild variant="onInk" size="xl">
                  <Link to={servicesHero.secondaryCta.to}>{servicesHero.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Services overview */}
        <Section id="services-overview">
          <SectionHeading
            eyebrow="Our services"
            title="Many ways LYNTRA moves people and goods"
            text="Services use the LYNTRA platform, with verification, tracking and payment features available where supported."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((service) => (
              <li key={service.slug}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.to}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                  >
                    Learn more
                    <ArrowUpRight aria-hidden className="size-4" />
                    <span className="sr-only"> about {service.name}</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </Section>

        {/* 3. How LYNTRA works */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="How LYNTRA works"
            title="Four steps, every service"
            text="The same clear process whether you are moving yourself, a parcel or a full consignment."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {serviceSteps.map((step) => (
              <li key={step.step} className="bg-card p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 4. Why LYNTRA */}
        <Section>
          <SectionHeading
            eyebrow="Why LYNTRA"
            title="One network, built to make movement work better"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAdvantages.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors duration-200 hover:border-primary/35"
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

        {/* 5. Customer & partner split */}
        <Section tone="muted">
          <div className="grid gap-5 lg:grid-cols-2">
            {audienceSplit.map((block) => (
              <article
                key={block.eyebrow}
                className={
                  block.tone === "ink"
                    ? "surface-ink flex flex-col rounded-3xl p-8 shadow-lift md:p-12"
                    : "flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12"
                }
              >
                <p className={block.tone === "ink" ? "eyebrow text-accent" : "eyebrow text-primary"}>
                  {block.eyebrow}
                </p>
                <h2
                  className={
                    block.tone === "ink"
                      ? "mt-4 text-2xl font-bold text-ink-foreground md:text-3xl"
                      : "mt-4 text-2xl font-bold md:text-3xl"
                  }
                >
                  {block.title}
                </h2>
                <p
                  className={
                    block.tone === "ink"
                      ? "mt-4 flex-1 leading-relaxed text-ink-muted"
                      : "mt-4 flex-1 leading-relaxed text-muted-foreground"
                  }
                >
                  {block.text}
                </p>
                <div className="mt-8">
                  <Button asChild variant={block.tone === "ink" ? "hero" : "brand"} size="lg">
                    <Link to={block.cta.to}>
                      {block.cta.label}
                      <ArrowRight aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* 6. Final CTA */}
        <Section tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">
              {servicesFinalCta.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              {servicesFinalCta.supporting}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to={appDestinations.customerApp.to}>
                  {appDestinations.customerApp.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to={servicesFinalCta.secondaryCta.to}>
                  {servicesFinalCta.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
