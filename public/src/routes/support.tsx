import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/support-customer-phone.jpg";
import supportAgentImage from "@/assets/support-agent.jpg";
import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  supportActions,
  supportCategories,
  supportFaq,
  supportFinalCta,
  supportHero,
} from "@/content/support";

const title = "Support & Help Centre | LYNTRA — Need Help? We're Here.";
const description =
  "Find answers, report a problem or get help with a Lyntra service — rides, parcels, cargo, business transport and partnering.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <ServiceHero
          eyebrow={supportHero.eyebrow}
          headline={supportHero.headline}
          supporting={supportHero.supporting}
          primaryCta={supportHero.primaryCta}
          secondaryCta={supportHero.secondaryCta}
          image={heroImage}
          imageAlt={supportHero.imageAlt}
          photos={[
            { src: heroImage, alt: "Kenyan customer checking her phone for help" },
            { src: supportAgentImage, alt: "Kenyan support agent helping a customer" },
          ]}
        />

        {/* 2. Help categories */}
        <Section>
          <SectionHeading eyebrow={supportCategories.eyebrow} title={supportCategories.title} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {supportCategories.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.cta.to}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {item.cta.label}
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* 3. Support actions */}
        <Section tone="muted">
          <SectionHeading
            eyebrow={supportActions.eyebrow}
            title={supportActions.title}
            text={supportActions.text}
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {supportActions.actions.map((action) => (
              <li
                key={action.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                  <Icon name={action.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{action.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{action.text}</p>
                <Link
                  to={action.cta.to}
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {action.cta.label}
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* 4. FAQ */}
        <Section>
          <SectionHeading eyebrow={supportFaq.eyebrow} title={supportFaq.title} />
          <dl className="mt-12 grid gap-5 md:grid-cols-2">
            {supportFaq.items.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <dt className="text-base font-semibold">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.a}{" "}
                  <Link to={item.to} className="font-medium text-primary hover:underline">
                    Learn more
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* 5. Final CTA */}
        <ServiceFinalCta
          headline={supportFinalCta.headline}
          supporting={supportFinalCta.supporting}
          primaryCta={supportFinalCta.primaryCta}
          secondaryCta={supportFinalCta.secondaryCta}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
