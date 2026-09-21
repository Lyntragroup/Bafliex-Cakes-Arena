/**
 * Content for the Safety & Support pages (Protect, Support, Contact).
 *
 * All copy is configurable data. Language stays practical and qualified —
 * "where applicable", "where available" — and never guarantees outcomes.
 */
import { appDestinations } from "@/content/app-links";
import { company, type Cta } from "@/content/site";

/* ---------------------------------- Safety / Protect ---------------------------------- */

export const safetyHero = {
  eyebrow: "SAFETY & PROTECTION",
  headline: "Move With More Confidence.",
  supporting:
    "LYNTRA is designed to help people, businesses and Transport Partners move with clearer information, trusted processes and support when they need it.",
  primaryCta: { label: "Get Started", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: { label: "Get Help", to: "/support" } satisfies Cta,
  imageAlt: "Safe, organised movement with LYNTRA in Nairobi",
};

/** Safety principles — qualified, no identical-treatment claims. */
export const safetyPrinciples = {
  eyebrow: "How Lyntra helps",
  title: "Safety and Protection Are Part of the Journey.",
  text: "The platform is built around clear information and trusted processes. Specific features vary by service, route and Transport Partner.",
  items: [
    {
      title: "Verified Transport Partners",
      text: "LYNTRA can verify relevant Transport Partner and vehicle information before participation, where applicable.",
      icon: "badge-check",
    },
    {
      title: "Trip Visibility",
      text: "See journey or delivery progress where tracking is available.",
      icon: "map-pin",
    },
    {
      title: "Clear Trip Details",
      text: "Important pickup, destination and job information is recorded in the platform.",
      icon: "file-text",
    },
    {
      title: "Completion Information",
      text: "Where supported, completion and handover information helps confirm that a job has been completed.",
      icon: "shield-check",
    },
    {
      title: "Support",
      text: "When something does not go as expected, users have a place to get help.",
      icon: "headphones",
    },
  ],
  note: "Features such as verification, tracking and completion confirmation vary by service and Transport Partner — they are not identical on every trip.",
};

/** Practical guidance for customers. */
export const safetyCustomers = {
  eyebrow: "For customers",
  title: "For Customers",
  items: [
    "Check the trip or delivery details before it starts.",
    "Use the information shown in LYNTRA to identify the relevant movement or Transport Partner.",
    "Keep important communication and job information within the platform where supported.",
    "Contact support when something goes wrong or you need help.",
  ],
};

/** Practical guidance for transport partners. */
export const safetyPartners = {
  eyebrow: "For transport partners",
  title: "For Transport Partners",
  items: [
    "Follow the job details shown in LYNTRA.",
    "Confirm pickup and delivery information before moving.",
    "Use completion or handover processes where provided.",
    "Report problems or safety concerns through the available support channels.",
  ],
  cta: { label: "Become a Partner", to: appDestinations.partnerApp.to } satisfies Cta,
};

/** Business trust. */
export const safetyBusiness = {
  eyebrow: "For businesses",
  title: "For Businesses",
  text: "Businesses need clear information when moving staff, documents, parcels, stock, goods or cargo.",
  follow:
    "LYNTRA keeps relevant job information together so businesses can better understand the movement from request through completion. Where applicable, tracking and completion information help confirm what happened along the way.",
  cta: { label: "LYNTRA for Business", to: "/business" } satisfies Cta,
};

/** Emergency clarification — no invented numbers. */
export const safetyEmergency = {
  title: "In an Emergency",
  text: "LYNTRA support is for platform and transport-related assistance. In an immediate emergency, contact the appropriate emergency service first.",
};

/**
 * Protection / insurance layer — part of the transaction model.
 *
 * Wording is deliberately qualified: optional cover may be offered, certain
 * cargo/services/routes/values may require cover, and external insurance is
 * referred to licensed partners. Lyntra is not an insurance company.
 */
export const safetyProtection = {
  eyebrow: "Protection & Insurance",
  title: "Protection for the Journey",
  text: "Protection options may be available for eligible services and goods. Where insurance cover applies, applicable coverage, exclusions, cost and terms will be shown before confirmation.",
  intro:
    "Not every service needs the same protection. Lyntra is designed to show the applicable protection or insurance requirements for the transaction.",
  items: [
    {
      title: "Optional Cover",
      text: "Eligible customers may be offered optional insurance protection where available.",
      icon: "shield",
    },
    {
      title: "Required Cover",
      text: "Certain cargo, services, routes or values may require insurance protection under Lyntra's configured rules.",
      icon: "shield-check",
    },
    {
      title: "Clear Information",
      text: "Where applicable, the protection option, coverage information and related cost should be shown clearly as part of the transaction.",
      icon: "file-text",
    },
    {
      title: "Licensed Insurance Partners",
      text: "Where external insurance is involved, Lyntra can work with licensed insurance partners.",
      icon: "badge-check",
    },
  ],
  distinction:
    "LYNTRA may support internal protection and resolution processes for approved cases, and refer external insurance and claims processes where insured events apply. Lyntra itself is not an insurance company.",
};

/** Claims / incident support — simple, not a legal policy. */
export const safetyClaims = {
  eyebrow: "If something happens",
  title: "When Something Goes Wrong",
  text: "Where protection or insurance applies, Lyntra supports processes for reporting incidents and handling relevant claims.",
  follow: "Relevant supporting information may include:",
  evidence: [
    { label: "Photographs", icon: "file-text" },
    { label: "Invoices", icon: "file-text" },
    { label: "Proof of delivery", icon: "badge-check" },
    { label: "Tracking information", icon: "map-pin" },
    { label: "Other supporting documents", icon: "headphones" },
  ],
  note: "Reporting an incident or supporting a claim does not guarantee a particular outcome. What applies depends on the service, the transaction and the relevant protection or insurance terms.",
};

export const safetyFinalCta = {
  headline: "Move With Clearer Information.",
  supporting: "Use LYNTRA for rides, parcels and cargo — and get help when you need it.",
  primaryCta: { label: "Get Started", to: appDestinations.customerApp.to } satisfies Cta,
  secondaryCta: { label: "Get Help", to: "/support" } satisfies Cta,
};

/* ---------------------------------- Support ---------------------------------- */

export const supportHero = {
  eyebrow: "SUPPORT",
  headline: "Need Help? We're Here.",
  supporting: "Find answers, report a problem or get help with a Lyntra service.",
  primaryCta: { label: "Get Help", to: "/contact" } satisfies Cta,
  secondaryCta: { label: "Safety & Protection", to: "/safety" } satisfies Cta,
  imageAlt: "LYNTRA support — help with rides, parcels and cargo",
};

/** Help categories — each routes the visitor to the right place. */
export const supportCategories = {
  eyebrow: "What do you need help with?",
  title: "Find the Right Help.",
  items: [
    {
      title: "Trip or Ride",
      text: "Need help with a ride or passenger trip?",
      icon: "car",
      cta: { label: "Get Help", to: "/for-you" } satisfies Cta,
    },
    {
      title: "Delivery or Parcel",
      text: "Need help with something being sent?",
      icon: "package",
      cta: { label: "About Send", to: "/send" } satisfies Cta,
    },
    {
      title: "Cargo",
      text: "Need help with a cargo movement?",
      icon: "truck",
      cta: { label: "About Cargo", to: "/cargo" } satisfies Cta,
    },
    {
      title: "Business",
      text: "Need help with a business transport request?",
      icon: "briefcase",
      cta: { label: "About Business", to: "/business" } satisfies Cta,
    },
    {
      title: "Partner",
      text: "Need help as a transport partner?",
      icon: "handshake",
      cta: { label: "About Partnering", to: "/partners" } satisfies Cta,
    },
    {
      title: "General",
      text: "Have another question?",
      icon: "headphones",
      cta: { label: "Contact Lyntra", to: "/contact" } satisfies Cta,
    },
  ],
};

/** Obvious support actions — only real, existing destinations. */
export const supportActions = {
  eyebrow: "Take action",
  title: "Get Help, Fast.",
  text: "Choose what you need — no hunting around.",
  actions: [
    {
      title: "Get Help",
      text: "Chat with the Lyntra team about a service or question.",
      icon: "headphones",
      cta: { label: "Get Help", to: "/contact" } satisfies Cta,
    },
    {
      title: "Report a Problem",
      text: "Tell us when something goes wrong so it can be followed up.",
      icon: "alert-triangle",
      cta: { label: "Report a Problem", to: "/contact" } satisfies Cta,
    },
    {
      title: "Contact Lyntra",
      text: "Reach the team for anything else — questions, feedback or business.",
      icon: "map-pin",
      cta: { label: "Contact Lyntra", to: "/contact" } satisfies Cta,
    },
  ],
};

/** FAQ — only questions the existing product can answer accurately. */
export const supportFaq = {
  eyebrow: "Common questions",
  title: "Frequently Asked Questions.",
  items: [
    {
      q: "How do I get started?",
      a: "Choose the service you need — a ride, a parcel delivery or cargo transport — and tell us what you need to move and where it should go. Get started from the For You page.",
      to: "/for-you",
    },
    {
      q: "What can I move with Lyntra?",
      a: "You can arrange rides for yourself, send parcels and documents, and move larger goods and cargo. Businesses can also arrange staff transport, stock and deliveries.",
      to: "/for-you",
    },
    {
      q: "How do I request transport?",
      a: "Tell us what you are moving and where it is going. LYNTRA helps identify suitable available transport, and you receive confirmation when the service is done.",
      to: "/for-you",
    },
    {
      q: "How do I find help with a trip or delivery?",
      a: "Contact the Lyntra team with your trip or delivery details. When something does not go as expected, report it so it can be followed up.",
      to: "/contact",
    },
    {
      q: "How does transport partner matching work?",
      a: "LYNTRA helps identify suitable Transport Partners. What is available depends on the service, vehicle, route and timing.",
      to: "/services",
    },
    {
      q: "How do I become a transport partner?",
      a: "If you have a car, motorbike, tuk-tuk, van, pickup or truck, you can register as a transport partner. Transport Partners are reviewed before they join the network.",
      to: "/partners",
    },
    {
      q: "What should I do if something goes wrong?",
      a: "Contact support as soon as you can with the details of your trip or delivery. In an immediate emergency, contact the appropriate emergency service first.",
      to: "/contact",
    },
  ],
};

export const supportFinalCta = {
  headline: "Still Need Help?",
  supporting: "Talk to the Lyntra team — we are here to help with rides, parcels, cargo and business transport.",
  primaryCta: { label: "Get Help", to: "/contact" } satisfies Cta,
  secondaryCta: { label: "Safety & Protection", to: "/safety" } satisfies Cta,
};

/* ---------------------------------- Contact ---------------------------------- */

export const contactHero = {
  eyebrow: "CONTACT",
  headline: "Talk to Lyntra.",
  supporting: "Have a question, need help or want to work with us? Get in touch.",
};

/** Only the legitimate, existing business contact details. */
export const contactChannels = [
  {
    title: "General enquiries",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: "mail",
    note: "Questions about Lyntra and our services",
  },
  {
    title: "Support",
    value: company.supportEmail,
    href: `mailto:${company.supportEmail}`,
    icon: "headphones",
    note: "Help with a ride, parcel, cargo or business request",
  },
  {
    title: "Phone & WhatsApp",
    value: company.phone,
    href: "https://wa.me/254704363666",
    icon: "whatsapp",
    note: "Call or WhatsApp the LYNTRA team",
  },
  {
    title: "Location",
    value: company.registeredOffice,
    icon: "map-pin",
    note: "LYNTRA GROUP LIMITED",
  },
];

export const contactTopics = {
  eyebrow: "What can we help with?",
  title: "Reach the Right Team.",
  items: [
    { title: "Using Lyntra", text: "Rides, parcels and cargo for everyday needs.", icon: "user", to: "/for-you" },
    { title: "Business transport", text: "Staff trips, deliveries, stock and cargo for your business.", icon: "briefcase", to: "/business" },
    { title: "Becoming a partner", text: "Put your car, motorbike, tuk-tuk, van or truck to work.", icon: "handshake", to: "/partners" },
    { title: "Something else", text: "Any other question — we will point you the right way.", icon: "sparkles", to: "/support" },
  ],
};

export const contactEmergencyNote = safetyEmergency;
