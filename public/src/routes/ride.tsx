import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Banknote,
  CalendarClock,
  Car,
  Check,
  Clock3,
  Headphones,
  MapPin,
  Navigation,
  Package,
  Route as RouteIcon,
  ShieldCheck,
  Truck,
  Briefcase,
} from "lucide-react";

import rideImage from "@/assets/hero-ride.jpg";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { appDestinations } from "@/content/app-links";

const title = "Ride Services | Get Where You Need to Go | LYNTRA";
const description =
  "Need a ride? LYNTRA helps connect you with suitable transport for your journey — clear trip information, journey tracking and support from pickup to arrival.";

export const Route = createFileRoute("/ride")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/ride" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/ride" }],
  }),
  component: RidePage,
});

const getARide = { ...appDestinations.customerApp, label: "Get a Ride" };

const rideOptions = [
  {
    title: "Immediate rides",
    text: "Need to go now? Request a ride when you are ready, where supported.",
    icon: Car,
  },
  {
    title: "Scheduled rides",
    text: "Planning ahead? Arrange your ride for a later time, where supported.",
    icon: CalendarClock,
  },
  {
    title: "Clear pickup details",
    text: "Share the right place and keep the trip details together from the start.",
    icon: MapPin,
  },
  {
    title: "Track your journey",
    text: "Follow your ride as it happens, from pickup to arrival.",
    icon: Navigation,
  },
];

const howRideWorks = [
  "Tell Lyntra where you want to go",
  "Get connected to suitable transport",
  "Confirm your ride",
  "Track your journey",
  "Arrive safely",
];

const benefits = [
  { title: "Easy to arrange", text: "Tell Lyntra where you need to go.", icon: RouteIcon },
  { title: "Suitable transport", text: "Lyntra helps connect your journey with suitable transport.", icon: Car },
  { title: "Live tracking", text: "Follow your journey as it happens.", icon: Navigation },
  { title: "Verified Transport Partners", text: "Ride with Transport Partners who meet Lyntra's requirements where applicable.", icon: ShieldCheck },
  { title: "Convenient payment", text: "Use the available Lyntra payment options.", icon: Banknote },
  { title: "Support", text: "Get help when you need it.", icon: Headphones },
];

const everydayJourneys = [
  "To work",
  "To town",
  "To an appointment",
  "To visit family",
  "To meet friends",
  "Around your daily plans",
];

const businessExamples = [
  "Staff transport",
  "Client journeys",
  "Documents",
  "Parcels",
  "Office items",
  "Stock",
  "Deliveries",
  "Larger cargo",
  "Ongoing transport needs",
];

const moreThanRides = [
  { label: "Send a parcel", to: "/send", icon: Package },
  { label: "Move cargo", to: "/cargo", icon: Truck },
  { label: "For your business", to: "/business", icon: Briefcase },
];

function RidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="surface-ink relative isolate overflow-hidden">
          <img loading="eager" fetchPriority="high" decoding="async"
            src={rideImage}
            alt="Car and passenger transport in Kenya"
            width={1600}
            height={1000}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--ink)_30%,color-mix(in_oklab,var(--ink)_65%,transparent)_85%)]"
          />
          <div className="container-page py-20 md:py-28 lg:py-32">
            <div className="max-w-3xl">
              <p className="eyebrow text-accent">Ride · Move around easily</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.07] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
                Get Where You Need to Go.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Need a ride? Lyntra helps connect you with suitable transport for your journey, with clear trip
                information from pickup to arrival.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to={getARide.to}>
                    {getARide.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="onInk" size="xl">
                  <Link to={appDestinations.partnerApp.to}>{appDestinations.partnerApp.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Why Ride"
              title="Getting around should be simple."
              text="Whether you are going to work, visiting family, running an errand or heading to an appointment, Lyntra helps make your journey easier to arrange and easier to follow."
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every journey also connects with a transport partner who helps someone get where they need to go.
            </p>
          </div>
        </Section>

        {/* How Ride works */}
        <Section tone="muted">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="How it works"
              title="From pickup to arrival, keep it simple."
              text="Tell us where you are and where you need to go. Lyntra helps connect you with suitable transport and keeps the next steps clear."
            />
            <ol className="grid gap-4 sm:grid-cols-2">
              {howRideWorks.map((step, index) => (
                <li key={step} className="flex items-start gap-3 border-t border-border pt-4 text-sm leading-relaxed">
                  <span className="font-[family-name:var(--font-display)] font-bold text-primary">
                    0{index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* Ride options */}
        <Section>
          <SectionHeading
            eyebrow="Ride services"
            title="A ride that fits your day"
            text="Request a ride when you are ready, or plan ahead when your day needs a little more planning."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rideOptions.map((option) => {
              const Icon = option.icon;
              return (
                <li
                  key={option.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{option.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{option.text}</p>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Benefits */}
        <Section tone="muted">
          <SectionHeading
            eyebrow="Why Lyntra Ride"
            title="What makes Lyntra Ride useful"
            text="Simple, clear and connected — from the moment you request your ride to the moment you arrive."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Everyday journeys */}
        <Section>
          <SectionHeading
            eyebrow="For you"
            title="Made for everyday journeys."
            text="The trips you already make, easier to arrange."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {everydayJourneys.map((journey) => (
              <li
                key={journey}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
              >
                <Check aria-hidden className="size-4 shrink-0 text-primary" />
                {journey}
              </li>
            ))}
          </ul>
        </Section>

        {/* Partner side */}
        <Section tone="ink">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="For transport partners"
              tone="ink"
              title="Every ride helps someone move."
              text="Behind every journey is a transport partner helping someone get where they need to go."
            />
            <div>
              <p className="text-base leading-relaxed text-ink-muted">
                Have a vehicle? You can be part of that connection and find opportunities that fit your vehicle,
                route and availability.
              </p>
              <div className="mt-7">
                <Button asChild variant="hero" size="xl">
                  <Link to={appDestinations.partnerApp.to}>
                    {appDestinations.partnerApp.label}
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Safety */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Safety"
              title="Move with confidence."
              text="From Transport Partner information to journey tracking and support, Lyntra is designed to help you stay informed from pickup to arrival."
            />
            <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
              {[
                "Transport Partners are reviewed before they join the network where applicable",
                "Trip details stay clear from pickup to arrival",
                "Follow your journey where tracking applies",
                "Get help from support when you need it",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
                >
                  <ShieldCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Business */}
        <Section tone="muted">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              eyebrow="For business"
              title="Businesses move more than people."
              text="From staff journeys and client visits to documents, parcels, stock and cargo, Lyntra helps businesses manage different transport needs in one place."
            />
            <div>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {businessExamples.map((example) => (
                  <li
                    key={example}
                    className="rounded-lg border border-border bg-card px-3 py-2.5 text-center text-xs font-medium"
                  >
                    {example}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button asChild variant="outline" size="lg">
                  <Link to="/business">
                    Explore Business
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* More than rides */}
        <Section>
          <SectionHeading
            eyebrow="One platform"
            title="Need more than a ride?"
            text="Send a parcel. Move cargo. Arrange transport for your business. Lyntra brings different transport needs together in one platform."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {moreThanRides.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary/40"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="flex-1 text-base font-semibold">{item.label}</span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 text-primary transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Need transport? Lyntra helps connect your need with available transport. Have a vehicle? Find
            opportunities that fit your vehicle and route.
          </p>
        </Section>

        {/* Final CTA */}
        <Section tone="ink">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-accent">Ready when you are</p>
            <h2 className="mt-4 text-3xl font-bold text-ink-foreground md:text-4xl">
              Where are you going?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Tell Lyntra where you need to go, and we will help you get there.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to={getARide.to}>
                  {getARide.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to={appDestinations.partnerApp.to}>{appDestinations.partnerApp.label}</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
