/**
 * Content for the LYNTRA for Business page.
 *
 * Positioning: LYNTRA supports both merchant delivery operations and
 * corporate-managed transport through one connected platform.
 */
import type { Cta } from "@/content/site";
import type { Benefit } from "@/components/services/BenefitGrid";
import type { ProcessStep } from "@/components/services/ProcessSteps";

const getStarted: Cta = { label: "Explore Business", to: "/business#business-models" };
const talkToLyntra: Cta = { label: "Talk to Lyntra", to: "/contact" };

export const businessCtas = { getStarted, talkToLyntra };

export const businessHero = {
  eyebrow: "LYNTRA for Business",
  headline: "Move Your People. Move Your Business.",
  supporting:
    "LYNTRA connects businesses with eligible transport capacity from independent Transport Partners — supporting merchant deliveries and corporate-managed movement of people, documents, parcels, stock, goods and cargo through one connected platform.",
  primaryCta: talkToLyntra,
  secondaryCta: getStarted,
  imageAlt: "LYNTRA business transport and deliveries in Kenya",
  /** Quick relevance chips shown in the hero. */
  audiences: [
    "Offices",
    "Retailers",
    "Online sellers",
    "Law firms",
    "Restaurants",
    "Pharmacies",
    "Wholesalers",
    "Professional services",
  ],
};

export const businessAudience = {
  eyebrow: "Two business operating models",
  title: "The same network. Different business needs.",
  text: "LYNTRA supports businesses that need to send and manage deliveries, as well as organisations that need controlled transport operations and financial visibility.",
  paths: [
    {
      title: "Merchant operations",
      summary: "Deliver what you sell.",
      text: "Create and manage delivery jobs for customer orders, documents, parcels and everyday business movement. Scheduled delivery and other workflow options apply where supported.",
      points: ["Create delivery jobs", "Schedule where supported", "Keep delivery status together", "Work with suitable transport"],
      icon: "store",
    },
    {
      title: "Corporate operations",
      summary: "Control how your organisation moves.",
      text: "LYNTRA is designed for organisations that need managed transport workflows, including roles, approvals, billing accounts, invoices, statements and reporting where configured.",
      points: ["Organisation roles", "Approval workflows", "Billing and statements", "Corporate job visibility"],
      icon: "building",
    },
  ],
};

export const businessProblem = {
  eyebrow: "The everyday reality",
  title: "Your Business Moves More Than People.",
  text: "Most businesses need different kinds of transport during the same day.",
  moments: [
    { label: "Morning", title: "Take staff where they need to go.", icon: "user" },
    { label: "During the day", title: "Send documents, parcels or supplies.", icon: "file-text" },
    {
      label: "Stock movement",
      title: "Move goods between suppliers, shops, branches or customers.",
      icon: "boxes",
    },
    { label: "Larger movement", title: "Arrange transport for bigger loads and cargo.", icon: "truck" },
  ],
  close: "LYNTRA brings these transport needs together in one platform.",
};

export const businessUseCases = {
  eyebrow: "Use cases",
  title: "How Businesses Can Use LYNTRA",
  text: "Practical ways businesses put the platform to work.",
  cases: [
    { title: "Staff Transport", text: "Help your team get where they need to be.", icon: "car" },
    {
      title: "Documents & Parcels",
      text: "Send contracts, files, parcels and other items where they need to go.",
      icon: "file-text",
    },
    { title: "Stock & Supplies", text: "Move stock and supplies between locations.", icon: "boxes" },
    { title: "Customer Deliveries", text: "Arrange deliveries to customers.", icon: "package" },
    {
      title: "Goods & Cargo",
      text: "Move larger or commercial loads through suitable Transport Partners.",
      icon: "truck",
    },
    {
      title: "Business Errands",
      text: "Handle pickups, drop-offs and other everyday business transport needs.",
      icon: "route",
    },
  ],
};

export const businessMarketplace = {
  eyebrow: "Shared job flow",
  title: "Tell LYNTRA What Your Business Needs Moved.",
  text: "A business creates a transport job with the details of what needs to move, where it needs to go and when it is needed.",
  follow:
    "Eligible jobs can then enter the shared matching layer, where suitable transport capacity is identified using factors such as route, vehicle, capacity and timing.",
  flow: [
    "Business has a transport need",
    "Creates the job",
    "Suitable transport is identified",
    "Transport Partner accepts",
    "Movement is tracked",
    "Job is completed",
  ],
};

export const businessMultiStop = {
  eyebrow: "Multi-stop journeys",
  title: "One Journey. More Than One Stop.",
  text: "Some business trips do not have just one pickup and one drop-off.",
  examples: [
    "Collect documents from one office and deliver them to another.",
    "Collect parcels from several locations.",
    "Deliver goods to several customers.",
    "Move stock between multiple business locations.",
  ],
  note: "LYNTRA supports journeys where several suitable stops can form part of the same trip, where the route and capacity make sense. Not every job becomes a multi-stop journey.",
};

export const businessNetwork = {
  eyebrow: "Connected supply",
  title: "Your Delivery Is Part of a Bigger Network.",
  text: "LYNTRA connects business transport needs with suitable available Transport Partners across the network.",
  vehicles: [
    { title: "Cars", text: "Staff trips and everyday business movement.", icon: "car" },
    { title: "Motorcycles", text: "Documents, parcels and quick deliveries.", icon: "bike" },
    { title: "Tuk-tuks", text: "Short local trips and suitable deliveries.", icon: "route" },
    { title: "Vans", text: "Parcels, orders and larger deliveries.", icon: "package" },
    { title: "Pickups", text: "Stock, supplies and everyday loads.", icon: "boxes" },
    { title: "Trucks", text: "Bigger goods and commercial cargo.", icon: "truck" },
  ],
  note: "Different transport needs can use different vehicle types. Suitable Transport Partners are matched to the job where available.",
};

export const businessVisibility = {
  eyebrow: "Visibility",
  title: "Know Where Your Business Movement Is.",
  text: "Stay informed from pickup to completion.",
  items: [
    { title: "See progress", text: "Follow the progress of a trip or delivery.", icon: "eye" },
    { title: "Track movement", text: "Track movement where tracking is available.", icon: "map-pin" },
    { title: "Know when it's done", text: "Know when the job is completed.", icon: "badge-check" },
    {
      title: "Completion details",
      text: "Use completion or proof information where applicable.",
      icon: "list-checks",
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who it's for",
  title: "Built for Businesses That Need to Move.",
  text: "If your work involves moving people or things, LYNTRA can help.",
  types: [
    { title: "Offices", text: "Staff, documents and everyday errands.", icon: "building" },
    {
      title: "Law Firms",
      text: "Move documents and people between offices, courts and other locations.",
      icon: "file-text",
    },
    { title: "Retailers & Shops", text: "Move stock, supplies and customer orders.", icon: "store" },
    { title: "Online Sellers", text: "Arrange deliveries to customers.", icon: "shopping-bag" },
    { title: "Restaurants", text: "Move supplies, orders and business items.", icon: "package" },
    { title: "Pharmacies", text: "Arrange suitable movement of items and deliveries.", icon: "briefcase" },
    {
      title: "Wholesalers & Distributors",
      text: "Move goods between suppliers, stores and customers.",
      icon: "warehouse",
    },
    {
      title: "Professional Services",
      text: "Handle business travel, documents, parcels and errands.",
      icon: "handshake",
    },
  ],
};

export const businessBenefits: Benefit[] = [
  {
    title: "One Platform",
    text: "Manage different transport needs through one connected platform.",
    icon: "layers",
  },
  {
    title: "More Transport Options",
    text: "Access different types of transport for different jobs.",
    icon: "truck",
  },
  {
    title: "Suitable Matching",
    text: "Connect jobs with transport based on route, vehicle, capacity and timing.",
    icon: "network",
  },
  { title: "Better Visibility", text: "Keep track of movement and completion.", icon: "eye" },
  {
    title: "Flexible Business Movement",
    text: "Handle everyday trips, deliveries and larger transport needs.",
    icon: "calendar-clock",
  },
  {
    title: "Connected Job Flow",
    text: "Eligible business transport jobs feed the shared matching layer so suitable Transport Partners can be identified.",
    icon: "handshake",
  },
];

export const businessTogether = {
  eyebrow: "One transport partner",
  title: "Your Business Has One Transport Problem — But Many Transport Needs.",
  text: "One day you may need to move staff. The next trip may be a document delivery. Later, you may need stock moved between locations.",
  follow:
    "LYNTRA is designed to help businesses handle these different transport needs through one connected platform.",
};

export const businessSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Tell LYNTRA What You Need",
    text: "Describe the people, parcels, goods or cargo your business needs moved.",
    icon: "list-checks",
  },
  {
    step: "02",
    title: "Create the Job",
    text: "Provide pickup, destination, timing and other relevant details.",
    icon: "map-pin",
  },
  {
    step: "03",
    title: "Find Suitable Transport",
    text: "LYNTRA identifies suitable transport opportunities based on the applicable service, route, vehicle, capacity and timing rules.",
    icon: "network",
  },
  {
    step: "04",
    title: "Track the Movement",
    text: "Follow the trip or delivery where tracking is available.",
    icon: "eye",
  },
  {
    step: "05",
    title: "Complete the Job",
    text: "Confirm completion and keep the relevant job information.",
    icon: "badge-check",
  },
];

export const businessFinalCta = {
  headline: "Ready to Move Your Business Smarter?",
  supporting:
    "From staff transport to parcels, documents, stock and cargo, LYNTRA helps your business arrange the transport it needs.",
  primaryCta: talkToLyntra,
  secondaryCta: getStarted,
};
