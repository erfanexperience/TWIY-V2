import { hasCompleteStreetAddress, mailingAddressLines } from "../config/publicBusinessInfo";

export default function MailingAddressBlock() {
  const lines = mailingAddressLines();

  return (
    <>
      <address className="lp__address">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </address>
      {import.meta.env.DEV && !hasCompleteStreetAddress() ? (
        <p className="lp__callout">
          <strong>Before Twilio resubmission:</strong> set <code>VITE_PUBLIC_BUSINESS_STREET</code> and{" "}
          <code>VITE_PUBLIC_BUSINESS_CSZ</code> in your environment so this block shows your full registered mailing
          address.
        </p>
      ) : null}
    </>
  );
}
