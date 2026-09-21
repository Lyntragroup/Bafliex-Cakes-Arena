/**
 * Content for the Become a Partner page.
 *
 * All copy, vehicle categories, work types and disclaimers are configurable
 * data so the page can evolve without touching the components.
 */
import { appDestinations } from "@/content/app-links";
import type { Cta } from "@/content/site";

export const partnerHero = {
  eyebrow: "Become a Partner · MOVE LIFE SMARTER.",
  headline: "Have a Car, Motorbike, Tuk-Tuk, Van or Truck? Put It to Work.",
  supporting:
    "Help people and businesses move what they need while finding eligible opportunities that fit what you drive, where you go and when you're available.",
  primaryCta: { label: "Become a Partner", to: appDestinations.partnerApp.to } satisfies Cta,
  secondaryCta: { label: "See How It Works", to: "#how-it-works" } satisfies Cta,
  imageAlt: "LYNTRA transport partners and vehicles in Nairobi",
};

/** Vehicle categories so a visitor immediately recognises "this is for me". */
export const partnerVehicles = {
  eyebrow: "Transport capacity",
  title: "Whatever You Drive, There Can Be a Place for It.",
  text: "LYNTRA works with different transport vehicle types, fleets and eligible network partners.",
  vehicles: [
    { title: "Car", text: "Take ride requests and other suitable jobs.", icon: "car" },
    { title: "Motorbike", text: "Carry parcels and take on delivery jobs.", icon: "bike" },
    { title: "Tuk-Tuk", text: "Handle local trips and suitable deliveries.", icon: "route" },
    { title: "Van", text: "Move parcels and larger deliveries.", icon: "package" },
    { title: "Pickup", text: "Move goods and everyday loads.", icon: "truck" },
    { title: "Truck", text: "Take on cargo jobs for bigger goods.", icon: "warehouse" },
    { title: "Fleet", text: "Put several vehicles to work together.", icon: "layers" },
  ],
};

/** The two-sided benefit. */
export const partnerBenefit = {
  eyebrow: "The idea",
  title: "Help Someone. Benefit Too.",
  text: "Every day, people and businesses need rides, parcels and goods moved. If you have transport, Lyntra can help connect you with suitable opportunities.",
  follow:
    "You help someone get what they need. You also put your car, motorbike, tuk-tuk, van or truck to work.",
};

/** Marketplace explanation in ordinary language. */
export const partnerMarketplace = {
  eyebrow: "The LYNTRA marketplace",
  title: "Find Jobs That Fit.",
  text: "People and businesses post transport jobs on Lyntra. Suitable transport partners can find opportunities that match what they drive, where they are going and when they are available.",
};

/** Route-based opportunities. */
export const partnerRoute = {
  eyebrow: "Jobs along your route",
  title: "Already Going That Way?",
  text: "You may find suitable jobs along your route.",
  examples: [
    "Going into town? Find a suitable parcel to carry along the way.",
    "Taking a load to another town? You may find another suitable job for the journey back.",
  ],
  note: "Opportunities depend on what is available — a suitable job is not guaranteed on every journey.",
};

/** Multiple parcels / stops along a journey. */
export const partnerMultiStop = {
  eyebrow: "One journey, several jobs",
  title: "One Journey Can Help More Than One Person.",
  text: "If you are already travelling along a route, Lyntra may connect you with several suitable parcel jobs along the way.",
  steps: [
    "Pick up one parcel.",
    "Pick up another along your route.",
    "Deliver them at different stops.",
  ],
  note: "Where the route, timing, available space and service allow. Not every journey has multiple suitable jobs.",
};

/** Backhaul, for all transport types. */
export const partnerBackhaul = {
  eyebrow: "The journey back",
  title: "Delivered Your Load?",
  text: "Instead of returning empty, you may find another suitable job for the journey back.",
  follow:
    "That can help you make better use of trips you are already making. This is not limited to trucks — where the service allows, other transport types may also find suitable return-route jobs.",
  note: "A return job is not guaranteed on every trip.",
};

/** Different types of work a partner may serve. */
export const partnerWorkTypes = {
  eyebrow: "Types of work",
  title: "Different Needs, Different Jobs.",
  text: "What you can do depends on what you drive — not every vehicle suits every service.",
  types: [
    { title: "Rides", text: "Carry passengers.", icon: "car" },
    { title: "Parcels", text: "Carry smaller packages and documents.", icon: "package" },
    { title: "Cargo", text: "Move larger or heavier goods.", icon: "truck" },
    { title: "Multi-Stop", text: "Handle suitable jobs at several stops along a route.", icon: "route" },
    { title: "Business", text: "Support business transport and delivery needs.", icon: "briefcase" },
  ],
};

/** Who needs transport — the demand side. */
export const partnerDemand = {
  eyebrow: "Who needs you",
  title: "People and Businesses Need You.",
  text: "From someone sending a parcel to a business moving stock, Lyntra helps connect transport needs with suitable transport.",
  groups: [
    "Individuals",
    "Families",
    "Shops",
    "Offices",
    "Law firms",
    "Online sellers",
    "Restaurants",
    "Pharmacies",
    "Wholesalers",
    "Construction businesses",
    "Other businesses",
  ],
};

/** Simple partner journey. */
export const partnerSteps = [
  { step: "01", title: "Join Lyntra", text: "Register as a transport partner.", icon: "user" },
  { step: "02", title: "Tell Us What You Drive", text: "Share your vehicle and where you operate.", icon: "car" },
  { step: "03", title: "See Suitable Opportunities", text: "View jobs that fit your vehicle, route and availability.", icon: "search" },
  { step: "04", title: "Choose Your Jobs", text: "Pick the work that works for you.", icon: "list-checks" },
  { step: "05", title: "Pick Up and Move", text: "Move what needs to go.", icon: "route" },
  {
    step: "06",
    title: "Complete and Get Paid",
    text: "Complete the job and get paid through the platform's configured process.",
    icon: "banknote",
  },
];

/** Partner type distinctions. */
export const partnerTypes = {
  eyebrow: "Partner types",
  title: "What Fits Your Vehicle?",
  text: "Different partners can take on different kinds of work. Access to services depends on your vehicle and the applicable requirements. Requirements, earnings and settlement depend on the applicable Lyntra partner and service configuration.",
  types: [
    { title: "Riders / Motorbikes", text: "Suitable parcel and ride opportunities where applicable.", icon: "bike" },
    { title: "Car Drivers", text: "Passenger and other suitable transport opportunities.", icon: "car" },
    { title: "Tuk-Tuk Operators", text: "Local movement and suitable delivery opportunities where applicable.", icon: "route" },
    { title: "Van / Pickup Owners", text: "Larger deliveries and goods movement.", icon: "package" },
    { title: "Truck Owners / Fleets", text: "Cargo jobs, route-based opportunities and potential backhaul.", icon: "truck" },
    { title: "Brokers", text: "Connect suitable transport with available jobs.", icon: "network" },
  ],
};

/** Trust and requirements — kept simple, no invented list. */
export const partnerTrust = {
  eyebrow: "Trust",
  title: "Before You Start.",
  text: "LYNTRA reviews partners before they join the network. Partners need to meet the applicable requirements for their vehicle and the services they take on.",
  items: [
    { title: "Partner review", text: "Partners are reviewed before they join the network.", icon: "badge-check" },
    { title: "Clear records", text: "Jobs, confirmations and delivery details stay together.", icon: "file-text" },
    { title: "Support", text: "Get help when something goes wrong.", icon: "headphones" },
  ],
};

/** Practical benefits, no "earn more" promises. */
export const partnerGains = [
  { title: "Find More Opportunities", text: "Discover suitable transport jobs.", icon: "search" },
  { title: "Use Your Route", text: "Find jobs that may fit where you are already going.", icon: "route" },
  { title: "Use Your Vehicle", text: "Match opportunities to what you drive.", icon: "car" },
  { title: "Make Better Use of Trips", text: "Find suitable jobs for outbound or return journeys.", icon: "layers" },
  { title: "Serve More People", text: "Help individuals and businesses move what they need.", icon: "handshake" },
  { title: "Work When It Suits You", text: "Choose jobs that fit when you're available.", icon: "clock" },
];

/** Business demand connection. */
export const partnerBusiness = {
  eyebrow: "Business demand",
  title: "Businesses Need Transport Too.",
  text: "Businesses move people, parcels, stock and cargo every day. By joining Lyntra, your vehicle can help businesses with the transport they need.",
  examples: [
    { title: "Law firms", text: "Documents and client deliveries.", icon: "file-text" },
    { title: "Retailers", text: "Customer orders and stock.", icon: "store" },
    { title: "Offices", text: "Documents and equipment.", icon: "briefcase" },
    { title: "Wholesalers", text: "Larger goods.", icon: "boxes" },
  ],
  cta: { label: "Explore Business", to: "/business" } satisfies Cta,
};

export const partnerBroker = {
  eyebrow: "For brokers",
  title: "Connect Transport Supply With Demand.",
  text: "Broker operations are different from simply owning a vehicle. LYNTRA is designed to give broker organisations a structured way to work with providers, vehicles and eligible transport demand through the same network.",
  capabilities: [
    { title: "Provider relationships", text: "Manage the transport providers connected to your broker organisation.", icon: "user" },
    { title: "Vehicles and fleets", text: "Work with the vehicles and fleet capacity available to the organisation.", icon: "truck" },
    { title: "Demand", text: "Create eligible transport jobs that can enter the shared Job Market under the applicable rules.", icon: "route" },
    { title: "One operating record", text: "Keep provider, vehicle and job relationships connected through the same platform foundation.", icon: "layers" },
  ],
  note: "Broker access, job types, permissions and commercial arrangements depend on the applicable Lyntra configuration.",
};

export const partnerFinalCta = {
  headline: "Ready to Put Your Vehicle to Work?",
  supporting: "Join Lyntra and find jobs that fit what you drive, where you go and when you're available.",
  primaryCta: { label: "Become a Partner", to: appDestinations.partnerApp.to } satisfies Cta,
  secondaryCta: { label: "Explore How Lyntra Works", to: "/services" } satisfies Cta,
};
