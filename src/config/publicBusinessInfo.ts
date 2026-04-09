/**
 * Public NAP-style contact info for the site footer, Privacy Policy, and Terms.
 *
 * For A2P 10DLC registration, carriers expect a complete street address on these pages.
 * Set in your deployment environment (recommended) or replace the fallbacks below:
 *   VITE_PUBLIC_BUSINESS_STREET — e.g. "500 Example Road, Suite 100"
 *   VITE_PUBLIC_BUSINESS_CSZ — e.g. "Fort Lauderdale, FL 33301"
 */
export const publicBusinessInfo = {
  legalName: "TWIY Health",
  email: "contact@twiyhealth.com",
  infoEmail: "info@twiyhealth.com",
  phoneDisplay: "(754) 231-1006",
  phoneE164: "+17542311006",
  country: "United States",
  /** Intake / SMS program number (must match campaign registration). */
  messagingNumberDisplay: "(754) 231-1006",
  messagingNumberE164: "+17542311006",
} as const;

const street =
  (import.meta.env.VITE_PUBLIC_BUSINESS_STREET as string | undefined)?.trim() || "";
const cityStateZip =
  (import.meta.env.VITE_PUBLIC_BUSINESS_CSZ as string | undefined)?.trim() || "";

export function mailingAddressLines(): string[] {
  const lines: string[] = [publicBusinessInfo.legalName];
  if (street) lines.push(street);
  if (cityStateZip) lines.push(cityStateZip);
  lines.push(publicBusinessInfo.country);
  return lines;
}

export function hasCompleteStreetAddress(): boolean {
  return Boolean(street && cityStateZip);
}

/** Canonical public site URL for legal/SMS disclosures (Twilio A2P reviewers). */
export function publicSiteUrl(): string {
  const raw = (import.meta.env.VITE_PUBLIC_SITE_URL as string | undefined)?.trim() || "https://twiyhealth.com";
  return raw.replace(/\/$/, "");
}
