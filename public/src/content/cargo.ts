/**
 * Content for the Cargo / Freight & Goods Transport service page.
 *
 * Every list here is configurable data (vehicle categories, cargo types,
 * marketplace participants, markets, service rules) so the page can move to a
 * CMS and connect to the LYNTRA application later without touching components.
 */
import { appDestinations } from "@/content/app-links";
import type { Cta } from "@/content/site";

export const cargoHero = {
  eyebrow: "Cargo · Freight & goods transport",
  headline: "Move Cargo With Lyntra",
  supporting:
    "Post a cargo job, connect with suitable transport and move your goods through the Lyntra network.",
  primaryCta: { label: "Move Cargo", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: {
    label: "Become a Cargo Partner",
    to: appDestinations.partnerApp.to,
  } satisfies Cta,
  imageAlt: "Cargo truck being loaded with goods at a logistics yard",
};

export const cargoIntro = {
  eyebrow: "Cargo",
  title: "Moving Cargo Should Be Simpler",
  text: "Whether you're moving business stock, equipment, construction materials or larger commercial loads, Lyntra helps connect your cargo with suitable transport capacity.",
};

export type CargoServiceCard = {
  slug: string;
  title: string;
  text: string;
  icon: string;
  cta: Cta;
};

/** Vehicle / service categories. Configurable. */
export const cargoServices: CargoServiceCard[] = [
  {
    slug: "pickup",
    title: "Pickup & Small Truck",
    text: "Move larger or bulkier goods that require more capacity than a standard parcel delivery.",
    icon: "truck",
    cta: { label: "Request Cargo Transport", to: appDestinations.customerApp.to },
  },
  {
    slug: "canter",
    title: "Canter Transport",
    text: "For medium-sized commercial loads requiring additional carrying capacity.",
    icon: "package",
    cta: { label: "Request a Canter", to: appDestinations.customerApp.to },
  },
  {
    slug: "truck",
    title: "Truck Transport",
    text: "For larger commercial and freight loads requiring higher transport capacity.",
    icon: "warehouse",
    cta: { label: "Request a Truck", to: appDestinations.customerApp.to },
  },
  {
    slug: "scheduled",
    title: "Scheduled Cargo",
    text: "Arrange cargo transport in advance for planned business or commercial movements.",
    icon: "calendar-clock",
    cta: { label: "Schedule Cargo", to: appDestinations.customerApp.to },
  },
];

/** Multi-stop configuration, kept simple and configurable. */
export const cargoMultiStop = {
  eyebrow: "Multi-stop",
  title: "One Trip. Multiple Stops.",
  text: "Need to collect from several places or deliver to several destinations? Lyntra can support multiple stops where the service, route and transport allow. Multi-stop movement can apply to different types of transport, not only trucks.",
  stops: [
    { label: "Pickup 1", kind: "pickup" as const },
    { label: "Pickup 2", kind: "pickup" as const },
    { label: "Pickup 3", kind: "pickup" as const },
    { label: "Delivery 1", kind: "delivery" as const },
    { label: "Delivery 2", kind: "delivery" as const },
  ],
  note: "Multi-stop jobs can help businesses organise collections and deliveries within one transport workflow. Availability depends on the applicable service.",
};

export const cargoSteps = [
  {
    step: "01",
    title: "Tell LYNTRA What Needs to Move",
    text: "Tell Lyntra what needs to move, where it needs to go and the transport requirement.",
    icon: "file-text",
  },
  {
    step: "02",
    title: "Eligible Cargo Demand Enters Matching",
    text: "Where the cargo service is eligible, the requirement enters the shared matching layer so suitable Transport Partners can discover the opportunity.",
    icon: "network",
  },
  {
    step: "03",
    title: "Find a Match",
    text: "A suitable broker, truck owner, fleet operator or Transport Partner can review the opportunity.",
    icon: "search",
  },
  {
    step: "04",
    title: "Accept the Job",
    text: "A suitable Transport Partner accepts the opportunity where the job fits their vehicle, route, capacity and availability.",
    icon: "badge-check",
  },
  {
    step: "05",
    title: "Move the Cargo",
    text: "The cargo is collected and transported to its destination.",
    icon: "truck",
  },
];

/** Marketplace participants, configurable. */
export const cargoMarketplace = {
  eyebrow: "Marketplace",
  title: "Connect Cargo Demand With Transport Supply",
  text: "Lyntra connects people and businesses that need cargo moved with Transport Partners looking for suitable jobs.",
  demand: {
    label: "Customers / Cargo Owners",
    note: "Create cargo requirements",
    icon: "user",
  },
  platform: {
    label: "Lyntra Marketplace",
    note: "Job opportunities",
    icon: "network",
  },
  supply: {
    label: "Transport Supply",
    note: "Suitable Transport Partners can discover relevant opportunities.",
    icon: "truck",
    participants: ["Brokers", "Truck Owners", "Fleet Owners", "Transport Partners"],
  },
  matchFactors: ["Route", "Vehicle", "Capacity", "Timing"],
  summary: [
    "The customer or approved demand actor creates the cargo requirement.",
    "Suitable Transport Partners discover it.",
    "The Transport Partner can accept the job when it fits.",
  ],
};

export const cargoMarketplaceValue = {
  eyebrow: "How the network creates value",
  title: "How The Marketplace Creates Value",
  columns: [
    {
      title: "For Customers",
      text: "More visibility into available transport options.",
      icon: "eye",
    },
    {
      title: "For Transport Partners",
      text: "More opportunities to find suitable jobs.",
      icon: "handshake",
    },
    {
      title: "For Lyntra",
      text: "A connected marketplace that brings demand and transport supply together.",
      icon: "network",
    },
  ],
};

export const cargoBenefits = [
  { title: "Right Vehicle", text: "Connect cargo requirements with an appropriate transport option.", icon: "truck" },
  { title: "Network Access", text: "Eligible cargo requirements can be surfaced to suitable Transport Partners through the shared network.", icon: "network" },
  { title: "Convenience", text: "Reduce the need to coordinate transport manually.", icon: "sparkles" },
  { title: "Multi-Stop", text: "Support multiple pickup or delivery points where the applicable service allows.", icon: "map-pin" },
  { title: "Flexible Transport", text: "Access different vehicle types depending on the cargo requirement.", icon: "layers" },
  { title: "Better Utilisation", text: "Help Transport Partners use available vehicle and route capacity more efficiently.", icon: "gauge" },
];

/** Cargo type examples. Configurable. */
export const cargoTypes = [
  { title: "Business Stock", icon: "boxes" },
  { title: "Construction Materials", icon: "hard-hat" },
  { title: "Agricultural Produce", icon: "wheat" },
  { title: "Furniture & Equipment", icon: "sofa" },
  { title: "Wholesale Goods", icon: "warehouse" },
  { title: "Commercial Supplies", icon: "briefcase" },
];

/** Service rules and disclaimers, kept configurable. */
export const cargoServiceRules = {
  availability:
    "Service availability, vehicle suitability, size, weight, cargo type and other restrictions may apply.",
  protection:
    "Protection and insurance options may vary by service, cargo type, value and applicable terms.",
};

export const cargoProtection = {
  eyebrow: "Protection",
  title: "Move Cargo With Confidence",
  text: "Protection and handling are part of how the cargo experience is designed.",
  items: [
    { title: "Transport Partner checks", text: "Transport Partners are checked where applicable before they take on work.", icon: "badge-check" },
    { title: "Cargo & trip information", text: "Cargo and trip details are captured as part of the job record.", icon: "file-text" },
    { title: "Pickup & delivery confirmation", text: "Pickup and delivery confirmation processes apply where relevant.", icon: "shield-check" },
    { title: "Incident reporting", text: "Report an issue with a cargo movement through a clear reporting process.", icon: "alert-triangle" },
    { title: "Claims support", text: "Our team supports you through the applicable claims process.", icon: "headphones" },
    { title: "Insurance options", text: "Applicable protection and insurance options depending on the service and cargo.", icon: "shield" },
  ],
  cta: { label: "Learn About Protection", to: "/safety" } satisfies Cta,
};

export const cargoBackhaul = {
  eyebrow: "Backhaul",
  title: "Turn Empty Return Trips Into Opportunities",
  text: "A vehicle may complete a delivery and still have a return journey ahead. Lyntra's marketplace can help make suitable return-route cargo opportunities visible to Transport Partners.",
  flow: [
    "Cargo Requirement Created",
    "Marketplace",
    "Transport Partner Delivers Cargo",
    "Return Route",
    "Suitable Job Found",
    "Transport Partner Accepts",
    "Return Cargo Moves",
  ],
  value: [
    { title: "For Customers", text: "Another way to find transport.", icon: "user" },
    { title: "For Truck Owners", text: "Potential additional work on routes they are already travelling.", icon: "truck" },
    { title: "For Brokers", text: "More opportunities to connect cargo demand with suitable transport capacity.", icon: "handshake" },
    { title: "For Lyntra", text: "Better marketplace utilisation and more efficient movement of available transport capacity.", icon: "network" },
  ],
  note: "Return-route opportunities can apply to different vehicle types where the route, space, service and rules allow. They depend on demand and availability, and matches are not guaranteed.",
};

export const cargoBusiness = {
  eyebrow: "For businesses",
  title: "Move More. Coordinate Less.",
  text: "For businesses, Lyntra can help simplify the movement of stock, equipment and commercial goods by connecting cargo requirements with suitable transport capacity.",
  points: [
    "Stock movement",
    "Supplier deliveries",
    "Business-to-business transport",
    "Construction materials",
    "Scheduled cargo movements",
    "Commercial distribution",
    "Multi-stop deliveries",
  ],
  cta: { label: "Explore Business Solutions", to: appDestinations.businessApp.to } satisfies Cta,
};

export const cargoOwners = {
  eyebrow: "For cargo owners",
  title: "Tell LYNTRA What Needs to Move",
  text: "Tell LYNTRA what needs to move, where it needs to go and what type of transport you need. Where the cargo service is eligible, suitable Transport Partners can then discover the opportunity through the shared network.",
  points: [
    { title: "Cargo details", icon: "boxes" },
    { title: "Pickup location", icon: "map-pin" },
    { title: "Destination", icon: "route" },
    { title: "Stops", icon: "layers" },
    { title: "Preferred timing", icon: "clock" },
    { title: "Vehicle requirement", icon: "truck" },
  ],
  cta: { label: "Start a Cargo Request", to: appDestinations.customerApp.to } satisfies Cta,
};

export const cargoBrokers = {
  eyebrow: "For brokers",
  title: "Find Cargo Opportunities",
  text: "Brokers can discover relevant cargo jobs on the Lyntra marketplace and connect suitable transport capacity to those opportunities.",
  points: [
    { title: "Discover jobs", icon: "search" },
    { title: "Review route", icon: "route" },
    { title: "Assess requirements", icon: "list-checks" },
    { title: "Connect transport", icon: "network" },
    { title: "Accept eligible opportunities", icon: "badge-check" },
  ],
  cta: { label: "Join As a Broker", to: appDestinations.partnerApp.to } satisfies Cta,
};

export const cargoPartners = {
  eyebrow: "For vehicle & fleet owners",
  title: "Turn Your Vehicle Into More Opportunities",
  text: "Join the Lyntra network and discover cargo opportunities that fit your vehicle, route, capacity and availability.",
  cards: [
    { slug: "pickup-owners", title: "Pickup Owners", text: "Discover cargo jobs suited to pickups and smaller loads.", icon: "truck" },
    { slug: "canter-owners", title: "Canter Owners", text: "Find medium commercial load opportunities on your routes.", icon: "package" },
    { slug: "truck-owners", title: "Truck Owners", text: "Access larger freight opportunities that fit your vehicle.", icon: "warehouse" },
    { slug: "fleet-owners", title: "Fleet Owners", text: "Connect multiple vehicles to cargo demand across routes.", icon: "layers" },
    { slug: "transport-partners", title: "Transport Partners", text: "Join the network and discover eligible transport work.", icon: "handshake" },
  ],
  cta: { label: "Become a Partner", to: appDestinations.partnerApp.to } satisfies Cta,
  secondaryCta: { label: appDestinations.downloadApp.label, to: appDestinations.downloadApp.to } satisfies Cta,
};

export const cargoVisibility = {
  eyebrow: "Cargo visibility",
  title: "Follow Your Cargo Journey",
  text: "An illustration of the cargo experience the LYNTRA application is being built around.",
  stages: [
    { title: "Created", text: "Your cargo requirement is created and moves into the applicable service workflow.", icon: "file-text" },
    { title: "Matched / Accepted", text: "A suitable Transport Partner accepts the job.", icon: "handshake" },
    { title: "Pickup", text: "The cargo is collected from the pickup point.", icon: "map-pin" },
    { title: "In Transit", text: "The cargo is on its way to the destination.", icon: "route" },
    { title: "Delivered", text: "Delivery is confirmed at the destination.", icon: "badge-check" },
  ],
  note: "Illustrative only. Features are available where supported.",
};

export const cargoNairobi = {
  eyebrow: "Nairobi",
  title: "Lyntra Cargo in Nairobi",
  text: "Nairobi is a core market for LYNTRA's mobility, delivery and cargo network, connecting businesses and cargo demand with available transport capacity.",
  labels: [
    "Business Cargo",
    "Stock Movement",
    "Commercial Deliveries",
    "Scheduled Cargo",
    "Multi-Stop Transport",
    "Transport Partners",
  ],
};

/** Market structure kept reusable so more towns can be added later. */
export type MarketGroup = { key: string; label: string; note: string; towns: string[] };

export const cargoMarkets: MarketGroup[] = [
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

export const cargoMarketsIntro = {
  eyebrow: "Coverage",
  title: "Expanding Beyond Nairobi",
  text: "Priority and expansion markets are listed below. Availability is introduced market by market as services launch.",
};

export const cargoVsSend = {
  eyebrow: "Which service",
  title: "Cargo or Send?",
  note: "Not sure which service you need? Use Send for smaller parcels or Cargo when your shipment requires larger transport capacity.",
  options: [
    {
      key: "send",
      label: "Send",
      icon: "package",
      tone: "light" as const,
      bestFor: ["Documents", "Small parcels", "Everyday packages", "Smaller customer deliveries"],
      cta: { label: "Use Send", to: "/send" } satisfies Cta,
    },
    {
      key: "cargo",
      label: "Cargo",
      icon: "truck",
      tone: "ink" as const,
      bestFor: [
        "Larger loads",
        "Bulky goods",
        "Business stock",
        "Commercial supplies",
        "Higher-capacity transport requirements",
      ],
      cta: { label: "Use Cargo", to: appDestinations.customerApp.to } satisfies Cta,
    },
  ],
};

export const cargoFinalCta = {
  headline: "Have Cargo To Move?",
  supporting:
    "Tell LYNTRA what needs to move and connect it with suitable transport through the shared network.",
  primaryCta: { label: "Move Cargo", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: {
    label: "Become a Cargo Partner",
    to: appDestinations.partnerApp.to,
  } satisfies Cta,
};
