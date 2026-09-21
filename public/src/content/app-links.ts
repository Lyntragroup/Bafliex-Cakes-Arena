/**
 * Centralised destinations for the LYNTRA applications.
 *
 * Keep every app CTA pointing at these values. When the production app URLs
 * are confirmed, change them here once and every CTA across the site follows.
 */
export type AppLink = { label: string; to: string; note?: string; external?: boolean };

/** Replace with the production app URLs when they are issued. */
const CUSTOMER_APP_URL = "/for-you";
const PARTNER_APP_URL = "/partners";
const BUSINESS_APP_URL = "/business";
const APP_DOWNLOAD_URL = "/for-you";

export const appDestinations = {
  /** Customer app: rides, parcels and cargo. */
  customerApp: { label: "Get Started", to: CUSTOMER_APP_URL, note: "Rides and parcels" } satisfies AppLink,
  /** Partner app: drivers, riders, truck owners, fleet and Transport Partners. */
  partnerApp: { label: "Become a Partner", to: PARTNER_APP_URL, note: "Drivers, riders, truck and fleet owners" } satisfies AppLink,
  /** Business app: business and corporate users. */
  businessApp: { label: "LYNTRA for Business", to: BUSINESS_APP_URL, note: "Merchant and corporate business movement" } satisfies AppLink,
  /** Generic LYNTRA app CTA. */
  downloadApp: { label: "Get Started", to: APP_DOWNLOAD_URL, note: "One app for how you move" } satisfies AppLink,
} as const;
