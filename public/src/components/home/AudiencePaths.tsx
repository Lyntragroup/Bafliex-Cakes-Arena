import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/home/Icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { audiencePaths } from "@/content/site";

export function AudiencePaths() {
  return (
    <Section id="who-is-lyntra-for" tone="muted">
      <SectionHeading
        eyebrow="Built for every kind of movement"
        title="One platform. Many ways to move."
        text="LYNTRA connects people who need transport with businesses, vehicle owners and brokers who help make movement happen."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-12">
        <article className="group flex flex-col rounded-3xl border border-primary/15 bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift lg:col-span-7">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Customers</p>
              <h3 className="mt-2 text-2xl font-semibold">Move with LYNTRA</h3>
            </div>
            <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-primary">
              <Icon name="user" className="size-5" />
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Arrange a ride, send a parcel or understand the right way to move something larger.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['Ride', 'Send', 'Cargo'].map((item) => (
              <span key={item} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium">{item}</span>
            ))}
          </div>
          <Link to="/for-you" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary">
            Explore your options <ArrowRight aria-hidden className="size-4" />
          </Link>
        </article>

        <article className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift lg:col-span-5">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Businesses</p>
              <h3 className="mt-2 text-2xl font-semibold">Move your business</h3>
            </div>
            <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-primary">
              <Icon name="building" className="size-5" />
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Merchants and corporate teams can move orders, stock, documents and people through one connected transport workflow.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2 text-xs font-medium">
            <span className="rounded-xl border border-border bg-surface px-3 py-2">Merchant</span>
            <span className="rounded-xl border border-border bg-surface px-3 py-2">Corporate</span>
          </div>
          <Link to="/business" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary">
            Explore Business <ArrowRight aria-hidden className="size-4" />
          </Link>
        </article>

        {audiencePaths.slice(3).map((item) => (
          <article key={item.title} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lift lg:col-span-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{item.audience}</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              </div>
              <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-primary">
                <Icon name={item.icon} className="size-5" />
              </span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            <Link to={item.cta.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary">
              {item.cta.label} <ArrowRight aria-hidden className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
