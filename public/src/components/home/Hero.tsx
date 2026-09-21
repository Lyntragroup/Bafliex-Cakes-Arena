import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import cityBg from "@/assets/hero-city-navy.jpg";
import logoSrc from "@/assets/lyntra-logo.jpg";
import phoneApp from "@/assets/hero-phone-app.webp";
import vehicleLineup from "@/assets/hero-vehicle-lineup.jpg";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/home/Icon";
import { company, hero } from "@/content/site";

const heroServices = [
  { label: "Ride", icon: "car", to: "/for-you" },
  { label: "Send", icon: "package", to: "/send" },
  { label: "Cargo", icon: "truck", to: "/cargo" },
  { label: "Business", icon: "briefcase", to: "/business" },
  { label: "Travel", icon: "map", to: "/travel", soon: true },
  { label: "More", icon: "layers", to: "/services" },
] as const;

/**
 * Home hero — cinematic LYNTRA Navy stage: city night backdrop, dominant
 * "MOVE LIFE SMARTER." statement, app visual, an unbranded vehicle lineup
 * (independent Transport Partners) and a cyan service rail.
 */
export function Hero() {
  return (
    <section className="surface-ink relative isolate overflow-hidden">
      <img loading="eager" fetchPriority="high" decoding="async"
        src={cityBg}
        alt="City road at night with moving traffic light trails"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink)_92%,transparent)_0%,color-mix(in_oklab,var(--ink)_70%,transparent)_45%,var(--ink)_100%)]"
      />
      <div
        aria-hidden
        className="absolute -top-48 left-1/2 -z-10 size-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent)_26%,transparent)_0%,transparent_70%)] blur-3xl"
      />

      <div className="container-page relative pt-16 pb-10 md:pt-24 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="animate-rise lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 shrink-0 overflow-hidden rounded-full bg-background md:size-14">
                <img decoding="async"
                  src={logoSrc}
                  alt={`${company.brand} — ${company.tagline}`}
                  width={512}
                  height={512}
                  className="h-full w-full object-contain"
                />
              </span>
              <p className="eyebrow text-accent">{hero.eyebrow}</p>
            </div>

            <h1 className="mt-8 text-[3.25rem] leading-[0.9] font-bold tracking-tight text-ink-foreground sm:text-7xl lg:text-[6rem]">
              MOVE LIFE
              <br />
              <span className="text-gradient-brand">SMARTER.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-ink-foreground md:text-2xl">
              People. Parcels. Goods. Cargo.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
              {hero.supporting}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="hero" size="xl">
                <Link to={hero.primaryCta.to}>
                  {hero.primaryCta.label}
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="onInk" size="xl">
                <Link to={hero.secondaryCta.to}>{hero.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>

          <div className="animate-rise relative lg:col-span-5">
            <div
              aria-hidden
              className="absolute inset-x-6 top-6 bottom-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--accent)_30%,transparent)_0%,transparent_70%)] blur-2xl"
            />
            <img decoding="async"
              src={phoneApp}
              alt="Smartphone showing a transport request being arranged"
              width={912}
              height={1200}
              className="relative mx-auto w-[15rem] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:w-[19rem] lg:w-full lg:max-w-[24rem]"
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Move with LYNTRA", sub: "Customers", to: "/for-you" },
              { label: "Move your business", sub: "Merchants & Corporates", to: "/business" },
              { label: "Put your vehicle to work", sub: "Transport Partners", to: "/partners" },
              { label: "Connect transport", sub: "Brokers", to: "/partners#brokers" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group rounded-xl border border-transparent bg-white/[0.04] px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.08]"
              >
                <span className="block text-sm font-semibold text-ink-foreground">{item.label}</span>
                <span className="mt-0.5 block text-xs text-ink-muted">{item.sub}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <img decoding="async"
            src={vehicleLineup}
            alt="Lineup of ordinary unbranded vehicles: tuk-tuk, car, van, pickup and truck"
            width={1920}
            height={720}
            loading="lazy"
            className="mx-auto w-full max-w-5xl opacity-95"
          />
          <p className="mx-auto mt-2 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">
            Vehicles are operated by independent Transport Partners — LYNTRA does not own a fleet.
          </p>
        </div>

        <nav
          aria-label="Core services"
          className="mt-10 grid grid-cols-3 gap-3 border-t border-ink-border pt-8 sm:grid-cols-6"
        >
          {heroServices.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group relative flex flex-col items-center gap-2 rounded-xl border border-ink-border bg-[color-mix(in_oklab,var(--ink)_55%,transparent)] px-2 py-4 text-center transition-colors hover:border-accent/60"
            >
              {"soon" in item && item.soon ? (
                <span className="absolute top-2 right-2 rounded-full bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
                  Soon
                </span>
              ) : null}
              <span className="grid size-10 place-items-center rounded-lg bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-accent">
                <Icon name={item.icon} className="size-5" />
              </span>
              <span className="text-sm font-medium text-ink-foreground">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
