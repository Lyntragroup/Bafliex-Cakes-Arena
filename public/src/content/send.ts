/**
 * Content for the Send / Parcel Delivery service page.
 *
 * All copy, categories, markets and service rules are configurable data so the
 * page can move to a CMS and additional towns or parcel types can be added
 * without touching the components.
 */
import { appDestinations } from "@/content/app-links";
import type { Cta } from "@/content/site";

export const sendHero = {
  eyebrow: "Send · Parcel delivery",
  headline: "Send It With Lyntra.",
  supporting:
    "Need to send a parcel or item? Lyntra helps connect it with suitable transport and lets you follow its journey.",
  primaryCta: { label: "Send a Parcel", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: {
    label: "Become a Partner",
    to: appDestinations.partnerApp.to,
  } satisfies Cta,
  imageAlt: "Delivery rider carrying a parcel on a Nairobi street",
};

export const sendIntro = {
  eyebrow: "Send",
  title: "Send What You Need, Where It Needs to Go.",
  text: "From documents and small parcels to everyday items and business deliveries, Lyntra helps connect your delivery with suitable transport.",
};

export type ServiceCard = {
  slug: string;
  title: string;
  text: string;
  icon: string;
  cta: Cta;
};

export const parcelServices: ServiceCard[] = [
  {
    slug: "everyday",
    title: "Everyday Parcels",
    text: "Send documents, packages and everyday items conveniently.",
    icon: "package",
    cta: { label: "Send a Parcel", to: appDestinations.customerApp.to },
  },
  {
    slug: "business",
    title: "Business Deliveries",
    text: "Manage deliveries for customers, orders and day-to-day business needs.",
    icon: "store",
    cta: { label: "For Business", to: "/business" },
  },
  {
    slug: "scheduled",
    title: "Scheduled Deliveries",
    text: "Arrange a delivery around the time that works for you.",
    icon: "calendar-clock",
    cta: { label: "Schedule a Delivery", to: appDestinations.customerApp.to },
  },
  {
    slug: "multi",
    title: "Multiple Delivery Jobs",
    text: "Manage several delivery jobs through a more organised workflow. Each delivery remains its own job record.",
    icon: "layers",
    cta: { label: "Manage Deliveries", to: appDestinations.customerApp.to },
  },
];

export const sendSteps = [
  {
    step: "01",
    title: "Tell Lyntra What You're Sending",
    text: "Share what you need to send and where it is.",
    icon: "package",
  },
  {
    step: "02",
    title: "Enter Where It Is Going",
    text: "Add the destination and delivery details.",
    icon: "map-pin",
  },
  {
    step: "03",
    title: "Get Connected",
    text: "Lyntra helps connect your delivery with suitable transport.",
    icon: "route",
  },
  {
    step: "04",
    title: "Hand Over the Item",
    text: "The transport partner collects the parcel from you.",
    icon: "handshake",
  },
  {
    step: "05",
    title: "Track It as It Moves",
    text: "Follow your delivery where tracking is available.",
    icon: "eye",
  },
  {
    step: "06",
    title: "Delivery Confirmed",
    text: "Get confirmation when it arrives.",
    icon: "badge-check",
  },
];

export const sendBenefits = [
  { title: "Convenience", text: "Arrange deliveries without unnecessary coordination.", icon: "sparkles" },
  { title: "Visibility", text: "Know the progress of your delivery where tracking is available.", icon: "eye" },
  { title: "Flexibility", text: "Choose immediate or scheduled delivery options where available.", icon: "clock" },
  { title: "Digital Convenience", text: "Use the LYNTRA platform and approved digital payment channels.", icon: "credit-card" },
  { title: "Support", text: "Get help when something goes wrong.", icon: "headphones" },
  {
    title: "Protection",
    text: "Access applicable claims, protection and insurance options depending on the service and parcel.",
    icon: "shield-check",
  },
];

/** Examples of everyday shipments. Configurable so new types can be added. */
export const parcelTypes = [
  { title: "Documents", icon: "file-text" },
  { title: "Gifts", icon: "gift" },
  { title: "Personal items", icon: "package" },
  { title: "Small packages", icon: "package" },
  { title: "Clothes", icon: "shopping-bag" },
  { title: "Office items", icon: "briefcase" },
  { title: "Customer orders", icon: "store" },
  { title: "Business deliveries", icon: "truck" },
];

/** Service rules and disclaimers, kept configurable. */
export const sendServiceRules = {
  availability:
    "Service availability, size, weight and other restrictions may apply. Not every item is automatically accepted.",
  protection:
    "Protection and insurance options may vary by service, parcel type, value and applicable terms.",
};

export const sendProtection = {
  eyebrow: "Protection",
  title: "Your Delivery Matters.",
  text: "Clear delivery information, tracking and support are part of how the delivery experience is designed.",
  items: [
    { title: "Transport Partner checks", text: "Delivery Transport Partners are checked where applicable before they take on work.", icon: "badge-check" },
    { title: "Delivery tracking", text: "Follow the progress of your delivery where tracking is available.", icon: "map-pin" },
    { title: "Proof of delivery", text: "OTP and proof-of-delivery confirmation processes apply where relevant.", icon: "shield-check" },
    { title: "Incident reporting", text: "Report an issue with a delivery through a clear reporting process.", icon: "alert-triangle" },
    { title: "Claims support", text: "Our team supports you through the applicable claims process.", icon: "headphones" },
    { title: "Insurance options", text: "Applicable protection and insurance options depending on the service and parcel.", icon: "shield" },
  ],
  cta: { label: "Learn About Protection", to: "/safety" } satisfies Cta,
};

export const sendBusiness = {
  eyebrow: "For businesses",
  title: "Your business sends things too.",
  text: "From law firms sending documents to shops sending customer orders, Lyntra helps businesses manage everyday deliveries in one place. Need to send documents to a client or another office? Lyntra can help with business deliveries.",
  points: [
    "Law firms",
    "Offices",
    "Retailers",
    "Online sellers",
    "Restaurants",
    "Pharmacies",
    "Professional service businesses",
  ],
  cta: { label: "Explore Business", to: "/business" } satisfies Cta,
};

export const sendPartners = {
  eyebrow: "For transport partners",
  title: "Every delivery helps connect people.",
  text: "Your parcel needs transport. Transport partners have vehicles and time. Lyntra helps connect the two.",
  connection:
    "Have a vehicle? Help someone get their parcel there while finding suitable jobs along your route. Where the service allows, you can pick up and deliver compatible parcels along the same journey.",
  marketplace:
    "Need something moved? Tell LYNTRA what you need. Eligible delivery jobs can be matched with suitable Transport Partners based on where they are going, what they can carry and when they are available.",
  cards: [
    { slug: "riders", title: "Riders", text: "Find suitable delivery jobs through the LYNTRA Job Marketplace.", icon: "bike" },
    { slug: "drivers", title: "Drivers", text: "Take on suitable delivery and transport jobs where available.", icon: "car" },
    { slug: "fleet", title: "Fleet Owners", text: "Connect multiple vehicles to customer and business demand.", icon: "truck" },
  ],
  cta: { label: "Become a Partner", to: appDestinations.partnerApp.to } satisfies Cta,
  secondaryCta: { label: appDestinations.downloadApp.label, to: appDestinations.downloadApp.to } satisfies Cta,
};

export const deliveryVisibility = {
  eyebrow: "Delivery visibility",
  title: "Know Where Your Delivery Is.",
  text: "Follow your parcel as it moves and know when the delivery is completed.",
  stages: [
    { title: "Booked", text: "Your delivery request is created.", icon: "package" },
    { title: "Pickup", text: "The parcel is collected from the pickup point.", icon: "map-pin" },
    { title: "In Transit", text: "The parcel is on its way to the destination.", icon: "route" },
    { title: "Delivered", text: "Delivery is confirmed at the destination.", icon: "badge-check" },
  ],
  note: "Tracking and proof-of-delivery features are available where supported.",
};

/** Multi-stop delivery note for businesses. */
export const sendMultiStop = {
  eyebrow: "Connected journeys",
  title: "One trip. Several deliveries.",
  text: "Where the route, timing and available space allow, a rider or other transport partner may collect several suitable parcels and deliver them at different stops along the way. Multi-stop movement is not limited to large cargo — it can apply to suitable everyday deliveries too.",
  customerNote: "Sending a parcel? It may be possible to connect it with transport already going your way.",
  partnerNote: "Going this way? You may find suitable parcel jobs along your route. One journey can help more than one person.",
};

/** Simple Send vs Cargo guidance. */
export const sendVsCargo = {
  eyebrow: "Send or Cargo?",
  title: "Not sure which one you need?",
  text: "Use Send for parcels, documents and smaller items. Use Cargo when you are moving larger, heavier or commercial goods.",
  cta: { label: "Explore Cargo", to: "/cargo" } satisfies Cta,
};

/** Wider platform links. */
export const sendMore = {
  eyebrow: "One platform",
  title: "Need more than a delivery?",
  text: "Need a ride? Move larger cargo? Arrange transport for your business? Lyntra brings different transport needs together in one place.",
  links: [
    { label: "Get a ride", to: "/for-you", icon: "car" },
    { label: "Move cargo", to: "/cargo", icon: "truck" },
    { label: "For your business", to: "/business", icon: "briefcase" },
  ],
};

export const sendNairobi = {
  eyebrow: "Nairobi",
  title: "Lyntra in Nairobi",
  text: "Nairobi is a core market for LYNTRA's mobility and delivery services, helping connect customers, businesses and available transport capacity.",
  labels: [
    "Parcel Delivery",
    "Business Deliveries",
    "Scheduled Delivery",
    "Rider Network",
    "Customer Support",
  ],
};

/** Market structure kept reusable so more towns can be added later. */
export type MarketGroup = { key: string; label: string; note: string; towns: string[] };

export const sendMarkets: MarketGroup[] = [
  {
    key: "priority",
    label: "Priority Urban Markets",
    note: "Markets prioritised for early rollout.",
    towns: ["Thika", "Ruiru", "Juja"],
  },
  {
    key: "expansion",
    label: "Expansion Markets",
    note: "Markets identified for future expansion.",
    towns: ["Nakuru", "Nyeri", "Nanyuki", "Kilifi", "Malindi"],
  },
];

export const sendMarketsIntro = {
  eyebrow: "Coverage",
  title: "Expanding Beyond Nairobi",
  text: "Priority and expansion markets are listed below. Availability is introduced market by market as services launch.",
};

export const sendFinalCta = {
  headline: "Need to Send Something?",
  supporting: "Tell Lyntra what you need to send and where it is going — we will help with the next step.",
  primaryCta: { label: "Send a Parcel", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: {
    label: "Become a Partner",
    to: appDestinations.partnerApp.to,
  } satisfies Cta,
};
