/**
 * Content for the About LYNTRA page. Public-facing messaging only —
 * plain data so it can move to a CMS later.
 *
 * About explains LYNTRA as a company and platform. What We Do (/services)
 * explains the individual services. Keep this page company-focused, human
 * and free of technical architecture language.
 */

export const aboutHero = {
  eyebrow: "About LYNTRA",
  headline: "Moving People, Parcels and Cargo Smarter.",
  supporting:
    "LYNTRA is a Kenyan mobility and logistics platform built to make moving people and goods easier. We bring rides, deliveries, cargo and transport services together in one connected place for people, businesses and transport partners.",
  primaryCta: { label: "Explore What We Do", to: "/services" },
  secondaryCta: { label: "Become a Partner", to: "/partners" },
};

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "A simpler way to move.",
  paragraphs: [
    "LYNTRA GROUP LIMITED is a Kenyan technology company working on a simple problem: moving people and goods should be easier.",
    "Today, arranging transport often means searching, calling, comparing and following up across different Transport Partners. LYNTRA brings these needs together in one place, so arranging movement, following it and completing it is simpler for both customers and Transport Partners.",
  ],
  highlights: [
    "One place to arrange rides, parcels and cargo",
    "Clear service records and confirmations",
    "Visibility from request through to completion",
  ],
};

// Why LYNTRA exists — the everyday problem, in plain language.
export const whyExists = {
  eyebrow: "Why LYNTRA exists",
  title: "Moving people and goods should be easier.",
  text: "Today, people and businesses often have to search, call, compare and arrange transport in different places. LYNTRA brings these needs together in one platform.",
  points: [
    { title: "Finding transport takes time", text: "Looking for a suitable and available option can mean several calls and long waits.", icon: "car" },
    { title: "Sending a parcel shouldn't be complicated", text: "Customers want a simple way to arrange delivery and know where their parcel is.", icon: "package" },
    { title: "Moving cargo means many arrangements", text: "Stock and goods often need several separate Transport Partners and a lot of coordination.", icon: "truck" },
    { title: "Businesses need different transport", text: "Staff travel, deliveries and cargo often require more than one type of transport.", icon: "building" },
    { title: "Capacity and demand don't always meet", text: "Transport Partners may have vehicles available while people and businesses nearby need transport.", icon: "route" },
    { title: "Following up is hard", text: "Checking what is happening usually means phone calls scattered across different people.", icon: "headphones" },
  ],
};

// Who LYNTRA is for — three clear categories, easy to scan on a phone.
export const audiences = [
  {
    title: "For Customers",
    text: "Rides, parcels and everyday movement.",
    icon: "user",
    cta: { label: "See what you can do", to: "/for-you" },
  },
  {
    title: "For Merchants",
    text: "Customer deliveries and day-to-day movement for businesses that sell or send.",
    icon: "store",
    cta: { label: "Explore Business", to: "/business" },
  },
  {
    title: "For Corporates",
    text: "Managed movement with organisation, approval and billing workflows where configured.",
    icon: "building",
    cta: { label: "Explore Business", to: "/business" },
  },
  {
    title: "For Transport Partners",
    text: "Opportunities for drivers, riders, vehicle owners and fleets that meet the applicable requirements.",
    icon: "truck",
    cta: { label: "Become a Partner", to: "/partners" },
  },
  {
    title: "For Brokers",
    text: "A structured way to connect transport supply and eligible demand through the same network.",
    icon: "network",
    cta: { label: "Broker opportunities", to: "/partners#brokers" },
  },
];

export const whatMakesDifferent = {
  eyebrow: "What makes LYNTRA different",
  title: "One place for different transport needs.",
  text: "Tell LYNTRA what you need to move, and the platform helps connect you to suitable transport. It is one connected place instead of many separate arrangements.",
  points: [
    { title: "One place for different needs", text: "Rides, parcels, cargo and business transport are brought together instead of spread across different Transport Partners.", icon: "sparkles" },
    { title: "Tell LYNTRA what you need to move", text: "The platform helps connect your need to suitable transport, so you spend less time searching.", icon: "map-pin" },
    { title: "Work that fits your vehicle and route", text: "For Transport Partners: find opportunities that match the vehicle you have and the routes you drive.", icon: "truck" },
    { title: "A return load for the journey back", text: "After delivering a load, a Transport Partner may find a suitable Backhaul job for the return trip — where available and not guaranteed.", icon: "route" },
  ],
};

// The official tagline, explained in practical terms.
export const moveLifeSmarter = {
  eyebrow: "Our tagline",
  title: "MOVE LIFE SMARTER.",
  text: "Moving smarter means making everyday transport easier to arrange, easier to follow and easier to manage.",
};

export const protection = {
  eyebrow: "Protection",
  title: "Move with confidence.",
  text: "The LYNTRA service experience is designed so that you know who is handling your service, what stage it is at, and what to do if something goes wrong.",
  points: [
    { title: "Provider verification", text: "Drivers, riders and Transport Partners are checked before they join where applicable.", icon: "badge-check" },
    { title: "Tracking", text: "Follow your service while it is in progress, where tracking applies.", icon: "map-pin" },
    { title: "OTP confirmation", text: "Confirmation codes help make sure the right person collects or receives.", icon: "shield-check" },
    { title: "Proof of delivery", text: "Deliveries are confirmed and recorded when they are completed.", icon: "package" },
    { title: "Incident reporting", text: "Report a problem with a service and have it followed up.", icon: "headphones" },
    { title: "Claims support", text: "Guidance through the claims process where a claim applies.", icon: "shield" },
  ],
  insuranceNote:
    "Protection and insurance options may vary by service, cargo type, value and applicable terms.",
};

export const builtInKenya = {
  eyebrow: "Built in Kenya",
  title: "Built in Kenya. Designed for everyday movement.",
  paragraphs: [
    "LYNTRA is being developed in Kenya, by a team that understands how movement actually works here — the roads, the routes, the informal arrangements and the practical realities that Transport Partners and customers deal with every day.",
    "That shapes the product. We design for the way people already move goods and travel, and focus on removing the friction in those journeys rather than replacing them with something unfamiliar.",
  ],
};

export const visionMission = {
  vision: "To make movement simpler, more accessible and more efficient.",
  mission:
    "To use technology to connect people, businesses and transport capacity in practical ways that improve everyday movement and logistics.",
};

export const values = [
  { title: "Integrity", text: "We do what we say, and we keep records that show it." },
  { title: "Accountability", text: "Every service has a responsible party and a traceable outcome." },
  { title: "Innovation", text: "We solve movement problems with practical technology." },
  { title: "Transparency", text: "Clear prices, clear status and clear documentation." },
  { title: "Customer Focus", text: "The platform is judged by whether it works for the person waiting." },
  { title: "Responsible Growth", text: "We grow only where we can operate properly." },
];

export const aboutFinalCta = {
  title: "Ready to move smarter?",
  text: "From rides and parcel delivery to cargo and business transport, LYNTRA brings different ways of moving into one platform. Start with What We Do.",
  primary: { label: "Explore What We Do", to: "/services" },
  secondary: { label: "Become a Partner", to: "/partners" },
};
