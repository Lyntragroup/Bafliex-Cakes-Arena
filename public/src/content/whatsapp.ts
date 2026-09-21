/**
 * Centralised contact configuration for the floating WhatsApp action.
 * The confirmed LYNTRA contact number is used for both calling and WhatsApp.
 */

/** The live LYNTRA contact channel used by the floating action. */
export const CONTACT_MODE: "contact" | "whatsapp" = "whatsapp";

/** Replace with the live LYNTRA corporate Safaricom line when activated. */
export const WHATSAPP_NUMBER = "254704363666";

export const contactLabel = "Chat with LYNTRA on WhatsApp";
export const contactShortLabel = "WhatsApp";

export const whatsappLabel = "Chat with LYNTRA on WhatsApp";
export const whatsappShortLabel = "Chat with us";

export const defaultWhatsappMessage =
  "Hello LYNTRA, I would like to know more about your services.";

/** Page-aware pre-filled messages, matched by path prefix (longest match wins). */
const messagesByPath: Record<string, string> = {
  "/services": "Hello LYNTRA, I would like to know more about your services.",
  "/send": "Hello LYNTRA, I would like to send a parcel.",
  "/cargo": "Hello LYNTRA, I would like to move cargo.",
  "/for-you": "Hello LYNTRA, I would like to know more about your customer services.",
  "/business": "Hello LYNTRA, I would like to know more about LYNTRA Business.",
  "/partners": "Hello LYNTRA, I would like to become a LYNTRA partner.",
  "/safety": "Hello LYNTRA, I would like to know more about safety and protection.",
  "/support": "Hello LYNTRA, I need help with a ride, parcel or cargo request.",
  "/contact": "Hello LYNTRA, I would like to get in touch with your team.",
  "/about": "Hello LYNTRA, I would like to know more about your company.",
};

/** Service-specific messages, usable from service-focused sections. */
export const serviceMessages: Record<string, string> = {
  ride: "Hello LYNTRA, I would like to know more about Ride services.",
  send: "Hello LYNTRA, I would like to send a parcel.",
  cargo: "Hello LYNTRA, I need help with cargo transport.",
  business: "Hello LYNTRA, I would like to know more about LYNTRA Business.",
  partner: "Hello LYNTRA, I would like to become a LYNTRA partner.",
};

export function whatsappMessageForPath(pathname: string): string {
  const match = Object.keys(messagesByPath)
    .filter((path) => pathname === path || pathname.startsWith(`${path}/`))
    .sort((a, b) => b.length - a.length)[0];

  return (match && messagesByPath[match]) || defaultWhatsappMessage;
}

export function whatsappHref(message: string = defaultWhatsappMessage): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * The destination the floating contact action should open.
 * In "contact" mode it links to the /contact page; in "whatsapp" mode
 * it links to WhatsApp using the page-aware pre-filled message.
 */
export function contactDestinationForPath(pathname: string): { href: string; external: boolean } {
  if (CONTACT_MODE === "whatsapp") {
    return { href: whatsappHref(whatsappMessageForPath(pathname)), external: true };
  }
  return { href: "/contact", external: false };
}
