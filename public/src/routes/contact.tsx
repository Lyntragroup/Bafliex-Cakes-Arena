import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import contactOfficeImage from "@/assets/contact-office.jpg";

import { Icon } from "@/components/home/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { contactChannels, contactEmergencyNote, contactHero, contactTopics } from "@/content/support";


const title = "Contact LYNTRA | Talk to Lyntra";
const description =
  "Have a question, need help or want to work with LYNTRA? Reach our team by email or through our contact page — we are here to help.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lyntra.co.ke/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Hero */}
        <Section tone="ink" className="py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="animate-rise lg:col-span-6">
              <p className="eyebrow text-accent">{contactHero.eyebrow}</p>
              <h1 className="mt-5 text-[2.5rem] leading-[1.07] font-bold text-ink-foreground sm:text-5xl">
                {contactHero.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted md:text-xl">
                {contactHero.supporting}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href={`mailto:${contactChannels[0]?.value ?? "info@lyntra.co.ke"}`}>Email us</a>
                </Button>
                <Button asChild variant="onInk" size="xl">
                  <Link to="/support">Get Help</Link>
                </Button>
              </div>
            </div>
            <figure className="animate-rise overflow-hidden rounded-2xl border border-ink-border shadow-lift lg:col-span-6">
              <img
                src={contactOfficeImage}
                alt="Approachable Kenyan business team in a Nairobi office"
                width={1280}
                height={800}
                fetchPriority="high"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </Section>

        {/* 2. Contact channels */}
        <Section>
          <SectionHeading eyebrow="Get in touch" title="Ways to Reach Us." />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {contactChannels.map((channel) => {
              const inner = (
                <>
                  <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                    <Icon name={channel.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{channel.title}</h3>
                  <p className="mt-1.5 text-base font-medium text-primary">{channel.value}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{channel.note}</p>
                </>
              );
              return (
                <li key={channel.title}>
                  {"href" in channel && channel.href ? (
                    <a
                      href={channel.href}
                      className="block h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-8 flex max-w-3xl items-start gap-2 text-sm text-muted-foreground">
            <Icon name="alert-triangle" className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="font-semibold">{contactEmergencyNote.title}:</strong>{" "}
              {contactEmergencyNote.text}
            </span>
          </p>
        </Section>

        {/* 3. Topics */}
        <Section tone="muted">
          <SectionHeading eyebrow={contactTopics.eyebrow} title={contactTopics.title} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactTopics.items.map((topic) => (
              <li key={topic.title}>
                <Link
                  to={topic.to}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-brand-soft text-primary">
                    <Icon name={topic.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{topic.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
