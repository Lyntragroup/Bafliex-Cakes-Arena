import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import aboutImage from "@/assets/about-kenya.jpg";
import aboutPeople from "@/assets/about-people.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  aboutFinalCta,
  aboutHero,
  audiences,
  builtInKenya,
  moveLifeSmarter,
  protection,
  values,
  visionMission,
  whatMakesDifferent,
  whoWeAre,
  whyExists,
} from "@/content/about";

const title = "About LYNTRA | Mobility & Logistics Platform in Kenya";
const description =
  "LYNTRA GROUP LIMITED is a Kenyan mobility and logistics platform built to make moving people and goods easier — rides, parcels, cargo and business transport in one connected place.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="surface-ink relative isolate overflow-hidden">
          <img loading="eager" fetchPriority="high" decoding="async"
            src={aboutImage}
            alt="Everyday street life and traffic in a Kenyan town"
            width={1600}
            height={1000}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--ink)_20%,transparent_98%)]"
          />
          <div className="container-page py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl">
              <p className="eyebrow text-accent">{aboutHero.eyebrow}</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.07] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
                {aboutHero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
                {aboutHero.supporting}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to={aboutHero.primaryCta.to}>
                    {aboutHero.primaryCta.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="onInk" size="xl">
                  <Link to={aboutHero.secondaryCta.to}>{aboutHero.secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Photo strip — people, technology and movement in Kenya */}
        <section className="border-b border-border bg-muted/40">
          <div className="container-page -mt-10 grid gap-4 pb-14 sm:grid-cols-3 md:-mt-14">
            {[
              { src: aboutImage, alt: "Everyday street life and traffic in a Kenyan town" },
              { src: aboutTeam, alt: "Young Kenyan professionals working on a laptop in a Nairobi office" },
              { src: aboutPeople, alt: "Kenyan commuters checking a phone at a roadside stage" },
            ].map((photo, index) => (
              <figure
                key={photo.alt}
                className={`overflow-hidden rounded-2xl border border-border bg-card shadow-lift ${
                  index === 1 ? "sm:translate-y-6" : ""
                }`}
              >
                <img decoding="async"
                  src={photo.src}
                  alt={photo.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </section>

        {/* 1 — Who we are */}
        <Section id="who-we-are">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
              {whoWeAre.paragraphs.map((p) => (
                <p key={p} className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <ul className="space-y-4 rounded-2xl border border-border/70 bg-card p-7 lg:col-span-5">
              {whoWeAre.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check aria-hidden className="size-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* 2 — Why LYNTRA exists */}
        <Section id="why-lyntra-exists" tone="muted">
          <SectionHeading
            eyebrow={whyExists.eyebrow}
            title={whyExists.title}
            text={whyExists.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyExists.points.map((item, i) => (
              <li key={item.title} className="rounded-2xl border border-border/70 bg-card p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 3 — Who LYNTRA is for */}
        <Section id="who-lyntra-is-for">
          <SectionHeading
            eyebrow="Who LYNTRA is for"
            title="Built for the people and organisations that keep movement going."
            text="From the person requesting a ride to the organisation coordinating transport capacity."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((who) => (
              <li
                key={who.title}
                className="flex flex-col rounded-2xl border border-border/70 bg-card p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-ink text-accent">
                  <Icon name={who.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{who.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {who.text}
                </p>
                <Link
                  to={who.cta.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {who.cta.label}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* 4 — What makes LYNTRA different */}
        <Section id="what-makes-different" tone="muted">
          <SectionHeading
            eyebrow={whatMakesDifferent.eyebrow}
            title={whatMakesDifferent.title}
            text={whatMakesDifferent.text}
          />
          <ul className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {whatMakesDifferent.points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={point.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* 5 — MOVE LIFE SMARTER */}
        <Section id="move-life-smarter" tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-accent">{moveLifeSmarter.eyebrow}</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-foreground md:text-5xl">
              {moveLifeSmarter.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {moveLifeSmarter.text}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore What We Do
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to="/partners">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </Section>

        {/* 6 — Protection */}
        <Section id="protection">
          <SectionHeading
            eyebrow={protection.eyebrow}
            title={protection.title}
            text={protection.text}
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {protection.points.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-border/70 bg-card p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={point.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {protection.insuranceNote}
          </p>
        </Section>

        {/* 7 — Built in Kenya */}
        <Section id="built-in-kenya" tone="muted">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow={builtInKenya.eyebrow} title={builtInKenya.title} />
              {builtInKenya.paragraphs.map((p) => (
                <p key={p} className="mt-5 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:col-span-6">
              <img decoding="async"
                src={aboutPeople}
                alt="Kenyan commuters checking a phone at a bus stage"
                width={1200}
                height={912}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </Section>

        {/* 8 — Vision & Mission */}
        <Section id="vision-mission">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-border/70 bg-card p-8 md:p-10">
              <p className="eyebrow text-primary">Our Vision</p>
              <p className="mt-4 text-xl leading-relaxed font-medium md:text-2xl">
                {visionMission.vision}
              </p>
            </article>
            <article className="surface-ink rounded-2xl p-8 md:p-10">
              <p className="eyebrow text-accent">Our Mission</p>
              <p className="mt-4 text-xl leading-relaxed font-medium text-ink-foreground md:text-2xl">
                {visionMission.mission}
              </p>
            </article>
          </div>
        </Section>

        {/* 9 — Values */}
        <Section id="values" tone="muted">
          <SectionHeading eyebrow="Our values" title="How we work." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <li key={item.title} className="rounded-2xl border border-border/70 bg-card p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Final CTA */}
        <Section id="get-started">
          <div className="rounded-3xl border border-border/70 bg-card px-8 py-14 text-center md:px-16">
            <h2 className="text-3xl font-bold md:text-4xl">{aboutFinalCta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {aboutFinalCta.text}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link to={aboutFinalCta.primary.to}>
                  {aboutFinalCta.primary.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to={aboutFinalCta.secondary.to}>{aboutFinalCta.secondary.label}</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
