import { Link } from "@tanstack/react-router";
import { ArrowRight, Package, Truck } from "lucide-react";

import vehicleNetwork from "@/assets/vehicle-network.jpg";
import { Section, SectionHeading } from "@/components/ui/section";
import { marketplace } from "@/content/site";

/** Simple two-sided marketplace introduction (demand / supply + backhaul note). */
export function HomeMarketplace() {
  const sides = [
    { ...marketplace.demand, icon: Package },
    { ...marketplace.supply, icon: Truck },
  ];

  return (
    <Section id="marketplace" tone="muted">
      <SectionHeading eyebrow="A connected transport network" title="Where demand meets transport capacity." text="Customers and businesses describe what needs to move. Independent Transport Partners bring the vehicles, routes and available capacity that can fulfil suitable work." />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {sides.map((side) => (
          <article
            key={side.title}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
              <side.icon aria-hidden className="size-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{side.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{side.text}</p>
            <Link
              to={side.cta.to}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-primary"
            >
              {side.cta.label}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </article>
        ))}
      </div>

      <figure className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
        <img
          src={vehicleNetwork}
          alt="Motorcycle, tuk-tuk, car, pickup, van, truck and shuttle parked along a Kenyan roadside"
          width={1600}
          height={912}
          loading="lazy"
          className="aspect-[16/7] w-full object-cover"
        />
        <figcaption className="bg-card px-5 py-3 text-xs leading-relaxed text-muted-foreground">
          Motorcycles, tuk-tuks, cars, pickups, vans, trucks and shuttles — transport
          capacity offered by independent Transport Partners, not a LYNTRA-owned fleet.
        </figcaption>
      </figure>

      <p className="mt-6 rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">For Transport Partners: </span>
        Suitable return-route opportunities may also surface when route, timing, vehicle and capacity align.
      </p>
    </Section>
  );
}
