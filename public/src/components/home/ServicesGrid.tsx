import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import businessImage from "@/assets/svc-business.jpg";
import cargoImage from "@/assets/svc-cargo.jpg";
import sendImage from "@/assets/for-you-hero.jpg";
import rideImage from "@/assets/svc-ride.jpg";
import { Icon } from "@/components/home/Icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { services } from "@/content/site";

const photos: Record<string, { src: string; alt: string }> = {
  ride: { src: rideImage, alt: "Rider on an ordinary motorcycle in Kenyan city traffic" },
  send: { src: sendImage, alt: "A parcel being handed over at a doorway in Nairobi" },
  cargo: { src: cargoImage, alt: "Workers loading sacks and boxes onto an ordinary pickup" },
  business: { src: businessImage, alt: "Shop owner arranging a delivery while goods are loaded into a van" },
};

export function ServicesGrid() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What we do"
        title="The services that keep life moving."
        text="Choose the movement you need — a ride, a parcel, cargo or business transport — then follow the route that fits."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const photo = photos[service.slug];
          return (
            <li key={service.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift">
                {photo ? (
                  <div className="relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,color-mix(in_oklab,var(--ink)_70%,transparent)_100%)]"
                    />
                    <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-xl bg-card text-primary shadow-soft">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  {photo ? null : (
                    <span className="mb-5 grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">LYNTRA {service.name}</h3>
                  <p className="mt-1 text-xs tracking-wider text-primary uppercase">
                    {service.summary}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    to={service.cta.to}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
                  >
                    {service.cta.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
