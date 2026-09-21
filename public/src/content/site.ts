export type Cta = { label: string; to: string };

export type SiteService = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: string;
  cta: Cta;
};

export const company = {
  brand: "LYNTRA",
  legalName: "LYNTRA GROUP LIMITED",
  tagline: "MOVE LIFE SMARTER.",
  registeredOffice: "Nairobi, Kenya",
  postalAddress: "Kenya",
  email: "info@lyntra.co.ke",
  supportEmail: "support@lyntra.co.ke",
  phone: "+254 704 363 666",
  registrationNumber: "PVT-8Z1ZQOE7",
  country: "Kenya",
  domain: "lyntra.co.ke",
};

export const hero = {
  eyebrow: "Mobility · Delivery · Logistics",
  headline: "Move Life Smarter.",
  supporting:
    "People. Parcels. Goods. Cargo. LYNTRA connects the need to move with the transport capacity to get it moving.",
  primaryCta: { label: "Get Started", to: "/for-you" } satisfies Cta,
  secondaryCta: { label: "Explore Services", to: "/services" } satisfies Cta,
  tertiaryCta: { label: "Become a Partner", to: "/partners" } satisfies Cta,
  stats: [
    { value: "One", label: "place to move" },
    { value: "Clear", label: "service steps" },
    { value: "Local", label: "support" },
  ],
};

export const services: SiteService[] = [
  {
    slug: "ride",
    name: "Ride",
    summary: "Move yourself",
    description: "Get where you need to go — everyday travel, planned trips and convenient rides.",
    icon: "car",
    cta: { label: "Explore Ride", to: "/for-you" },
  },
  {
    slug: "send",
    name: "Send",
    summary: "Move a parcel",
    description: "Send parcels without the usual hassle — pickup and delivery for documents, packages and everyday items.",
    icon: "package",
    cta: { label: "Explore Send", to: "/send" },
  },
  {
    slug: "cargo",
    name: "Cargo",
    summary: "Move bigger goods",
    description: "Move larger, heavier or commercial goods across town and beyond.",
    icon: "truck",
    cta: { label: "Explore Cargo", to: "/cargo" },
  },
  {
    slug: "business",
    name: "Business",
    summary: "Move your business",
    description: "Manage transport for your business — staff trips, deliveries, stock and cargo.",
    icon: "briefcase",
    cta: { label: "Explore Business", to: "/business" },
  },
  {
    slug: "protect",
    name: "Protect",
    summary: "Move with confidence",
    description: "Clear service records, support and applicable protection for the things and people you move.",
    icon: "shield-check",
    cta: { label: "See our approach", to: "/safety" },
  },
  {
    slug: "partner",
    name: "Partner",
    summary: "Find more opportunities",
    description: "Join a network for drivers, riders, fleet owners, brokers and Transport Partners.",
    icon: "handshake",
    cta: { label: "Become a Partner", to: "/partners" },
  },
  {
    slug: "shop",
    name: "Shop",
    summary: "Coming Soon",
    description: "A simpler way to arrange shopping and delivery is on the way.",
    icon: "shopping-bag",
    cta: { label: "Shop — Coming Soon", to: "/shop" },
  },
  {
    slug: "travel",
    name: "Travel",
    summary: "Coming Soon",
    description: "Travel planning and transport options for longer journeys are on the way.",
    icon: "map",
    cta: { label: "Travel — Coming Soon", to: "/travel" },
  },
];

export type NavItem = { label: string; to: string; children?: { label: string; to: string; description?: string }[] };

/** What We Do — Lyntra's principal movement/service offerings. */
export const whatWeDo: NavItem[] = [
  { label: "Ride", to: "/for-you" },
  { label: "Send", to: "/send" },
  { label: "Cargo", to: "/cargo" },
  { label: "Business", to: "/business" },
  { label: "Shop — Coming Soon", to: "/shop" },
  { label: "Travel — Coming Soon", to: "/travel" },
];

/** Safety & Support — Protect and help resources live here, not under services. */
export const safetySupport: { label: string; to: string; description?: string }[] = [
  { label: "Protect", to: "/safety", description: "Move with confidence" },
  { label: "Support / Help", to: "/support", description: "Get help with a service" },
  { label: "Contact", to: "/contact", description: "Talk to our team" },
];

/** Final top-level navigation: Home, About Us, What We Do, For You, For Business, Become a Partner, Safety & Support. */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "What We Do", to: "/services", children: whatWeDo },
  { label: "For You", to: "/for-you" },
  { label: "For Business", to: "/business" },
  { label: "Become a Partner", to: "/partners" },
  { label: "Safety & Support", to: "/support", children: safetySupport },
];

/** Mobile menu structure mirrors the desktop hierarchy exactly. */
export const mobileNav = {
  home: { label: "Home", to: "/" } satisfies Cta,
  about: { label: "About Us", to: "/about" } satisfies Cta,
  servicesTitle: "What We Do",
  servicesTo: "/services",
  services: whatWeDo,
  topLevel: [
    { label: "For You", to: "/for-you" },
    { label: "For Business", to: "/business" },
    { label: "Become a Partner", to: "/partners" },
    { label: "Safety & Support", to: "/support" },
  ] satisfies Cta[],
  contact: { label: "Contact", to: "/contact" } satisfies Cta,
};

export const audiencePaths = [
  {
    audience: "Customer",
    title: "Move with LYNTRA",
    text: "Arrange a ride, send a parcel or find a suitable way to move something larger.",
    icon: "user",
    cta: { label: "For You", to: "/for-you" },
  },
  {
    audience: "Merchant",
    title: "Move your business",
    text: "Manage customer deliveries, scheduled jobs and day-to-day business movement through one connected workflow.",
    icon: "store",
    cta: { label: "For Business", to: "/business" },
  },
  {
    audience: "Corporate",
    title: "Move for your organisation",
    text: "Coordinate people, goods and business transport with the visibility your organisation needs.",
    icon: "building",
    cta: { label: "For Business", to: "/business" },
  },
  {
    audience: "Transport Partner",
    title: "Put your vehicle to work",
    text: "Use your car, motorbike, tuk-tuk, van, pickup, truck or fleet to find work that fits.",
    icon: "truck",
    cta: { label: "Become a Partner", to: "/partners" },
  },
  {
    audience: "Broker",
    title: "Connect transport",
    text: "Work with providers, vehicles and eligible transport demand through the Lyntra network.",
    icon: "network",
    cta: { label: "Broker opportunities", to: "/partners#brokers" },
  },
] as const;

export const howItWorks = [
  { step: "01", title: "Request", text: "Tell us what you need to move and where it should go." },
  { step: "02", title: "Find a fit", text: "The LYNTRA Job Marketplace helps identify suitable available transport." },
  { step: "03", title: "Move", text: "Your ride, parcel or cargo gets on its way." },
  { step: "04", title: "Complete", text: "You receive confirmation when the service is done." },
];

export const audienceSolutions = [
  {
    slug: "customers",
    title: "I need transport",
    problem: "Finding suitable transport can take too much time.",
    solution: "LYNTRA gives you one place to arrange a ride, send a parcel or understand available cargo services.",
    points: ["Choose the service that fits", "Follow the job where tracking applies", "Get help when you need it"],
    icon: "route",
    cta: { label: "For You", to: "/for-you" },
  },
  {
    slug: "merchants",
    title: "I deliver for my business",
    problem: "Customer deliveries can become difficult to coordinate.",
    solution: "LYNTRA helps merchants create and manage delivery jobs through one connected workflow.",
    points: ["Create delivery jobs", "Schedule where supported", "Keep delivery status together"],
    icon: "store",
    cta: { label: "Explore Business", to: "/business" },
  },
  {
    slug: "corporates",
    title: "My organisation moves people and goods",
    problem: "Organisations need more than a one-off delivery.",
    solution: "LYNTRA is designed for managed business transport with roles, approvals, billing and operational visibility.",
    points: ["Manage organisation users", "Support approval and billing workflows", "See corporate job information"],
    icon: "building",
    cta: { label: "Explore Business", to: "/business" },
  },
  {
    slug: "partners",
    title: "I provide transport",
    problem: "Transport capacity can be available while people and businesses need movement.",
    solution: "LYNTRA helps eligible Transport Partners discover suitable work that fits their vehicle, route and availability.",
    points: ["Register your vehicle", "See suitable opportunities", "Manage journeys and earnings"],
    icon: "handshake",
    cta: { label: "Join the network", to: "/partners" },
  },
  {
    slug: "brokers",
    title: "I connect transport supply and demand",
    problem: "Brokers need a structured way to work with providers and transport demand.",
    solution: "LYNTRA provides a shared operating foundation for broker organisations, provider relationships, vehicles and eligible jobs.",
    points: ["Manage provider relationships", "Work with vehicles and fleets", "Create eligible transport demand"],
    icon: "network",
    cta: { label: "See Broker opportunities", to: "/partners#brokers" },
  },
];

export const whyLyntra = [
  { title: "One place", text: "Different transport needs in one platform.", icon: "layers" },
  { title: "Clear steps", text: "Know what is happening as your ride, parcel or cargo moves.", icon: "list-checks" },
  { title: "Connected transport", text: "LYNTRA helps connect transport needs with suitable transport.", icon: "network" },
  { title: "Track your journey", text: "Follow your ride, delivery or cargo as it moves.", icon: "map-pin" },
  { title: "For people and businesses", text: "Use LYNTRA for everyday needs or business transport.", icon: "user" },
  { title: "For Transport Partners", text: "Find opportunities that fit your vehicle and route.", icon: "handshake" },
];

export const protection = {
  eyebrow: "Protect",
  title: "Move with confidence.",
  items: [
    { title: "Transport Partner checks", text: "Transport Partners are reviewed before they join the network." },
    { title: "Service visibility", text: "Follow progress where tracking applies." },
    { title: "Clear records", text: "Requests, confirmations and delivery details stay together." },
    { title: "Issue reporting", text: "Tell us when something goes wrong so it can be followed up." },
    { title: "Proof of delivery", text: "Deliveries are confirmed and recorded when completed." },
    { title: "Claims guidance", text: "Get guidance where a claim or protection option applies." },
  ],
  disclaimer: "Protection and insurance options may vary by service, cargo type, value and applicable terms.",
};

export const businessTeaser = {
  eyebrow: "For business",
  title: "Move your business forward.",
  text: "Businesses use LYNTRA to arrange the transport they rely on — with clear steps, records and a team to talk to.",
  points: [
    "Staff transport and scheduled trips",
    "Customer and business deliveries",
    "Stock movement between locations",
    "Cargo and larger goods",
    "Ongoing transport needs",
  ],
  cta: { label: "Explore Business", to: "/business" },
};

export const partnerTeaser = {
  eyebrow: "For transport partners",
  title: "Have a vehicle? Put it to work.",
  text: "Find transport opportunities that fit your vehicle and route.",
  roles: [
    { title: "Cars", text: "Take ride requests that suit you." },
    { title: "Motorcycles & tuk-tuks", text: "Take on deliveries and short trips." },
    { title: "Vans & pickups", text: "Move parcels and smaller goods." },
    { title: "Trucks & fleets", text: "Find cargo jobs for your vehicles." },
    { title: "Brokers", text: "Connect suitable transport with demand." },
  ],
  cta: { label: "Become a Partner", to: "/partners" },
};

/** Simple marketplace introduction for the Home page. */
export const marketplace = {
  eyebrow: "Connected transport network",
  title: "Need transport? Have transport capacity?",
  text: "LYNTRA connects transport demand with suitable available capacity. The underlying Job Market helps identify fit using the service, route, timing, vehicle and capacity where applicable.",
  demand: {
    title: "Need transport? Tell LYNTRA what you need.",
    text: "Describe what you are moving and where it is going. Where the route, timing, space and service allow, LYNTRA can look for suitable transport already travelling your way.",
    cta: { label: "Explore Cargo", to: "/cargo" } satisfies Cta,
  },
  supply: {
    title: "Have transport capacity? Find jobs that fit.",
    text: "See requests that may fit your vehicle and route, and choose the work that suits you. Where the route, timing, space and service allow, Transport Partners can handle multiple suitable jobs along the same journey.",
    cta: { label: "Become a Partner", to: "/partners" } satisfies Cta,
  },
  backhaul: "Delivered your load? Transport Partners may find another suitable Backhaul job for the journey back. It is not guaranteed.",
};

/** Everyday "For You" situations for the Home page. */
export const everydayMoves = {
  eyebrow: "For you",
  title: "Made for everyday movement.",
  text: "The trips and errands you already make, easier to arrange.",
  examples: [
    "Ride to work",
    "Send something to family",
    "Move furniture",
    "Send a parcel",
    "Move goods from one place to another",
  ],
};

export type FooterColumn = { title: string; links: { label: string; to: string }[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Ride", to: "/for-you" },
      { label: "Send", to: "/send" },
      { label: "Cargo", to: "/cargo" },
      { label: "Business", to: "/business" },
      { label: "Protect", to: "/safety" },
    ],
  },
  {
    title: "LYNTRA",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Become a Partner", to: "/partners" },
      { label: "Contact", to: "/contact" },
      { label: "Support", to: "/support" },
      // Legal link hidden for now — the full legal documents will be added
      // before the transactional platform goes live. The /legal route is
      // kept intact for future use.
    ],
  },
];

export const appLinks = [
  { label: "Customer services", to: "/for-you", note: "Rides, parcels and cargo" },
  { label: "Partner services", to: "/partners", note: "Transport Partners, drivers, riders and fleets" },
  { label: "Business services", to: "/business", note: "Staff, stock and deliveries" },
];
