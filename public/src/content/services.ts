/**
 * Content for the LYNTRA Services Hub page.
 * Plain data so services can move to a CMS or gain dedicated pages later.
 */

export type ServiceCategory = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  items: string[];
  /** Destination for the "Learn more" link. Point to a dedicated page when it exists. */
  to: string;
};

export const servicesHero = {
  eyebrow: "What we do",
  headline: "Move People. Move Goods. Move Business.",
  supporting:
    "LYNTRA connects people, businesses and Transport Partners through one connected mobility and logistics platform.",
  primaryCta: { label: "Explore Services", to: "/services" },
  secondaryCta: { label: "Become a Partner", to: "/partners" },
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "ride",
    name: "Lyntra Ride",
    description:
      "Convenient mobility solutions connecting passengers with suitable Transport Partners where available.",
    icon: "car",
    items: ["Cars", "Boda bodas", "Tuk-tuks", "Scheduled / advance rides"],
    to: "/for-you",
  },
  {
    slug: "delivery",
    name: "Lyntra Send",
    description:
      "Fast and flexible delivery of parcels, documents and smaller everyday items for individuals and businesses.",
    icon: "package",
    items: ["Parcel delivery", "Document delivery", "Same-day delivery", "On-demand delivery"],
    to: "/send",
  },
  {
    slug: "cargo",
    name: "Lyntra Cargo",
    description:
      "Reliable transport for larger, heavier or commercial goods across towns, cities and regional routes.",
    icon: "truck",
    items: ["Pickup trucks", "Canters", "Trucks", "Long-distance transport"],
    to: "/cargo",
  },
  {
    slug: "business-mobility",
    name: "Lyntra Business",
    description:
      "One connected transport service around the operational needs of a business — staff movement, parcels and documents, deliveries, stock and ongoing business transport.",
    icon: "briefcase",
    items: ["Staff transport", "Parcels and documents", "Stock and goods movement", "Ongoing business transport"],
    to: "/business",
  },
  {
    slug: "partner-network",
    name: "Transport Partner Network",
    description:
      "Join the LYNTRA network and access more opportunities, customers and routes.",
    icon: "handshake",
    items: ["Driver registration", "Fleet registration", "Boda registration", "Broker / logistics partner registration", "Backhaul opportunities where available"],
    to: "/partners",
  },
];

export const serviceSteps = [
  { step: "01", title: "Request", text: "The customer selects the service required." },
  { step: "02", title: "Find a fit", text: "The LYNTRA Job Marketplace helps identify suitable Transport Partners." },
  { step: "03", title: "Move", text: "The passenger, parcel or cargo is transported." },
  { step: "04", title: "Complete", text: "The trip is completed and the transaction is recorded." },
];

export const serviceAdvantages = [
  { title: "Convenience", text: "Access multiple transport options from one platform.", icon: "sparkles" },
  { title: "Choice", text: "Choose the vehicle or service that fits the job.", icon: "car" },
  { title: "Efficiency", text: "Improve vehicle utilisation and reduce unnecessary empty trips.", icon: "gauge" },
  { title: "Job opportunities", text: "Help Transport Partners discover suitable jobs where available.", icon: "search" },
  { title: "Technology", text: "Use technology to simplify transport coordination.", icon: "network" },
  { title: "Connected matching", text: "Help eligible transport demand meet suitable transport capacity.", icon: "handshake" },
];

export const audienceSplit = [
  {
    eyebrow: "For customers",
    title: "Get the transport you need, when you need it.",
    text: "Rides, parcels and available cargo services arranged through one connected platform, with tracking where supported.",
    cta: { label: "For You", to: "/for-you" },
    tone: "light" as const,
  },
  {
    eyebrow: "For business",
    title: "Move what your organisation needs to move.",
    text: "Merchant deliveries and corporate-managed movement can use the same transport network with business-specific workflows.",
    cta: { label: "For Business", to: "/business" },
    tone: "light" as const,
  },
  {
    eyebrow: "For transport partners",
    title: "Turn your transport capacity into more opportunities.",
    text: "Find suitable work for your vehicle, route and availability, including potential Backhaul opportunities where available.",
    cta: { label: "Become a Partner", to: "/partners" },
    tone: "ink" as const,
  },
];

export const servicesFinalCta = {
  headline: "One Network. Many Ways to Move.",
  supporting:
    "Whether you need a ride, a delivery, cargo transport or a Transport Partner, LYNTRA helps you find a suitable next step.",
  primaryCta: { label: "Get Started", to: "/for-you" },
  secondaryCta: { label: "Become a Partner", to: "/partners" },
};
