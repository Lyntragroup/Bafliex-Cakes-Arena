import { createFileRoute } from "@tanstack/react-router";

import { AudiencePaths } from "@/components/home/AudiencePaths";
import { BusinessTeaser } from "@/components/home/BusinessTeaser";
import { EverydayMoves } from "@/components/home/EverydayMoves";
import { Hero } from "@/components/home/Hero";
import { HomeMarketplace } from "@/components/home/HomeMarketplace";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LifeInMotion } from "@/components/home/LifeInMotion";
import { PartnerCta } from "@/components/home/PartnerCta";
import { Protection } from "@/components/home/Protection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyLyntra } from "@/components/home/WhyLyntra";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServiceFinalCta } from "@/components/services/ServiceFinalCta";
import { appDestinations } from "@/content/app-links";
import { company, services } from "@/content/site";
import phoneApp from "@/assets/hero-phone-app.webp";

const title = "LYNTRA GROUP LIMITED — Move Life Smarter.";
const description =
  "Rides, parcel delivery and cargo transport in Kenya. Choose the service you need and keep the next steps clear.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://lyntra.co.ke/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: company.legalName,
          alternateName: company.brand,
          slogan: company.tagline,
          url: `https://${company.domain}`,
          email: company.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.registeredOffice,
            postOfficeBoxNumber: company.postalAddress,
            addressCountry: "KE",
          },
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: `LYNTRA ${s.name}`, description: s.description },
          })),
        }),
      },
    ],
    links: [
      { rel: "canonical", href: "https://lyntra.co.ke/" },
      { rel: "preload", href: phoneApp, as: "image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">

        <Hero />
        <ServicesGrid />
        <AudiencePaths />
        <LifeInMotion />
        <EverydayMoves />
        <HomeMarketplace />
        <HowItWorks />
        <WhyLyntra />
        <Protection />
        <BusinessTeaser />
        <PartnerCta />
        <ServiceFinalCta
          headline="Ready to move?"
          supporting="Choose what you need to move and let LYNTRA help you get it done."
          primaryCta={appDestinations.customerApp}
          secondaryCta={appDestinations.partnerApp}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
