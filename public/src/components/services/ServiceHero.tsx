import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Cta } from "@/content/site";

/** Shared hero for LYNTRA service pages (Ride, Send, Cargo, …). */
export function ServiceHero({
  eyebrow,
  headline,
  supporting,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  photos,
}: {
  eyebrow: string;
  headline: string;
  supporting: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  image: string;
  imageAlt: string;
  /** Optional supporting photography shown alongside the headline. */
  photos?: { src: string; alt: string }[];
}) {
  return (
    <section className="surface-ink relative isolate overflow-hidden">
      <img loading="eager" decoding="async"
        src={image}
        alt={imageAlt}
        width={1600}
        height={1000}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--ink)_38%,transparent)_0%,color-mix(in_oklab,var(--ink)_22%,transparent)_55%,color-mix(in_oklab,var(--ink)_6%,transparent)_100%)]"
      />
      <div className="container-page grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
        <div className={photos?.length ? "animate-rise lg:col-span-7" : "animate-rise max-w-3xl lg:col-span-12"}>
          <p className="eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-5 text-[2.5rem] leading-[1.07] font-bold text-ink-foreground sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">{supporting}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to={primaryCta.to}>
                {primaryCta.label}
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="onInk" size="xl">
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>

        {photos?.length ? (
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {photos.slice(0, 3).map((photo, index) => (
                <figure
                  key={photo.src}
                  className={
                    index === 0
                      ? "col-span-2 overflow-hidden rounded-2xl border border-ink-border shadow-lift"
                      : "overflow-hidden rounded-2xl border border-ink-border shadow-lift"
                  }
                >
                  <img decoding="async"
                    src={photo.src}
                    alt={photo.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={
                      index === 0
                        ? "aspect-[16/10] w-full object-cover"
                        : "aspect-square w-full object-cover"
                    }
                  />
                </figure>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
