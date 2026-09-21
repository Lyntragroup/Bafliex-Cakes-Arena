import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import cargoImage from "@/assets/svc-cargo.jpg";
import commuterImage from "@/assets/for-you-commuter.jpg";
import forYouImage from "@/assets/for-you-hero.jpg";
import rideFamilyImage from "@/assets/ride-family.jpg";
import ridePhoneImage from "@/assets/ride-phone.jpg";
import ridePickupImage from "@/assets/ride-pickup.jpg";
import meruDeliveryImage from "@/assets/coverage-meru-delivery.webp";
import eldoretRideImage from "@/assets/coverage-eldoret-ride.webp";
import naivashaTravelImage from "@/assets/coverage-naivasha-travel.webp";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { appDestinations } from "@/content/app-links";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { audienceSolutions, howItWorks, services, whyLyntra } from "@/content/site";

const title = "For You — Rides, Parcels and Cargo | LYNTRA";
const description =
  "Get a ride, send a parcel or move cargo with LYNTRA. See available service information, tracking and support where supported.";

export const Route = createFileRoute("/for-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/for-you" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/for-you" }],
  }),
  component: ForYouPage,
});

const cardPhotos: Record<string, { src: string; alt: string }> = {
  ride: { src: commuterImage, alt: "Commuters at a Kenyan roadside stage" },
  send: { src: forYouImage, alt: "A parcel handed over at a doorway in Nairobi" },
  cargo: { src: cargoImage, alt: "Workers loading goods onto an ordinary pickup" },
};

const personal = services.filter((s) => ["ride", "send", "cargo", "protect"].includes(s.slug));

function ForYouPage() {
  const customer = audienceSolutions[0]!;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="surface-ink relative isolate overflow-hidden">
          <img loading="eager" fetchPriority="high" decoding="async"
            src={forYouImage}
            alt="Rider handing a parcel to a mother at her doorway in Nairobi"
            width={1600}
            height={1008}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center] opacity-35 md:opacity-45"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink)_92%,transparent)_0%,color-mix(in_oklab,var(--ink)_72%,transparent)_100%)] md:bg-[linear-gradient(100deg,var(--ink)_32%,color-mix(in_oklab,var(--ink)_45%,transparent)_88%)]"
          />
          <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-accent">For you</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
                Getting there, and getting it there, made simple
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                {customer.solution}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/services">
                    See our services
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="onInk" size="xl">
                  <Link to={appDestinations.customerApp.to}>{appDestinations.customerApp.label}</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <figure className="col-span-2 overflow-hidden rounded-2xl border border-ink-border shadow-lift">
                  <img decoding="async"
                    src={commuterImage}
                    alt="A student and a commuter using phones at a Kenyan roadside stage"
                    width={1024}
                    height={768}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </figure>
                <figure className="overflow-hidden rounded-2xl border border-ink-border shadow-lift">
                  <img decoding="async"
                    src={forYouImage}
                    alt="A rider handing a parcel to a mother at her doorway"
                    width={1600}
                    height={1008}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </figure>
                <p className="rounded-2xl border border-ink-border bg-[color-mix(in_oklab,var(--ink)_60%,transparent)] p-4 text-xs leading-relaxed text-ink-muted">
                  <span className="font-semibold text-ink-foreground">
                    Everyday movement.
                  </span>{" "}
                  Commuting, school runs, errands and parcels between people — where
                  the service is available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section tone="muted">
          <SectionHeading
            eyebrow="Everyday journeys"
            title="Made for the moments that keep life moving"
            text="From the morning commute to a family trip or a parcel between people, everyday movement starts with a real need."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { src: ridePhoneImage, alt: "A Kenyan commuter arranging transport on a phone beside a Nairobi road", title: "Request a ride", text: "For work, school, errands and the trips in between." },
              { src: rideFamilyImage, alt: "A Kenyan parent and child getting into an ordinary car", title: "Travel together", text: "For family journeys where the service and timing fit." },
              { src: ridePickupImage, alt: "A passenger meeting an ordinary car on a busy Kenyan street", title: "Meet your ride", text: "A clear handover in the places people already know." },
            ].map((item) => (
              <figure key={item.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img decoding="async" src={item.src} alt={item.alt} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <figcaption className="p-5"><h2 className="text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section id="services-for-you">
          <SectionHeading
            eyebrow="What you can do"
            title="Choose the service you need"
            text="Everyday travel, parcels between people, or bigger loads — pick what fits and we handle the rest."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {personal.map((service) => {
              const photo = cardPhotos[service.slug];
              return (
                <li key={service.slug}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                    {photo ? (
                      <img decoding="async"
                        src={photo.src}
                        alt={photo.alt}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover"
                      />
                    ) : null}
                    <div className="flex flex-1 flex-col p-7">
                      <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                        <Icon name={service.icon} className="size-5" />
                      </span>
                      <h2 className="mt-5 text-xl font-semibold">{service.name}</h2>
                      <p className="mt-1 text-xs tracking-wider text-primary uppercase">{service.summary}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="steps" tone="muted">
          <SectionHeading eyebrow="How it works" title="From request to arrival" />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {howItWorks.map((item) => (
              <li key={item.step} className="bg-card p-7">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-widest text-primary">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="reasons">
          <SectionHeading eyebrow="Why LYNTRA" title="What you can count on" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyLyntra.map((item) => (
              <li key={item.title} className="flex gap-3 rounded-xl border border-border/70 bg-card p-6">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="across-kenya" tone="muted">
          <SectionHeading
            eyebrow="Across Kenya"
            title="Movement looks different from place to place."
            text="From everyday deliveries and local rides to longer journeys on Kenya's highways, Lyntra is built around the many ways people and goods move."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                src: meruDeliveryImage,
                alt: "A delivery rider carrying boxed parcels through Meru Town at sunset",
                title: "Meru · Everyday delivery",
                text: "Local streets, parcels and the everyday movement that keeps communities connected.",
              },
              {
                src: eldoretRideImage,
                alt: "A silver car ready for a passenger pickup in Eldoret at sunset",
                title: "Eldoret · Ride",
                text: "A real-world example of passenger movement beyond Nairobi.",
              },
              {
                src: naivashaTravelImage,
                alt: "Night traffic travelling along the highway beside Lake Naivasha",
                title: "Naivasha · Longer journeys",
                text: "Highway movement connects towns, people and opportunities across Kenya.",
              },
            ].map((item) => (
              <figure
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1536}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="p-5">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section id="cta" tone="ink">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-ink-foreground md:text-4xl">
                Ready when you are
              </h2>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Tell us what you need to move and we will help you get it done.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Contact LYNTRA</Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to={appDestinations.customerApp.to}>{appDestinations.customerApp.label}</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
