import { Link } from "react-router-dom";
import LegalDocumentLayout from "./LegalDocumentLayout";
import MailingAddressBlock from "./MailingAddressBlock";
import { publicBusinessInfo } from "../config/publicBusinessInfo";

export default function PrivacyPolicyPage() {
  const { email, phoneDisplay, phoneE164, messagingNumberDisplay, messagingNumberE164 } = publicBusinessInfo;

  return (
    <LegalDocumentLayout title="Privacy Policy" effectiveLabel="Effective date: March 24, 2026 · Last updated: March 24, 2026">
      <p>
        This Privacy Policy explains how <strong>{publicBusinessInfo.legalName}</strong> (“TWIY,” “we,” “us,” or
        “our”) collects, uses, discloses, and safeguards information when you interact with our company — including
        when you visit this website, request information, book a consultation, or contact us by phone or SMS. TWIY is
        a U.S.-based business focused on surgical distribution partnerships and related coordination; we describe our
        typical operations on our <Link to="/">homepage</Link> and <Link to="/about-us">About</Link> pages.
      </p>

      <div className="lp__callout">
        <strong>SMS program (A2P 10DLC / toll-free or local number):</strong> If you text or call our published intake
        line at{" "}
        <a href={`sms:${messagingNumberE164}`}>{messagingNumberDisplay}</a> or{" "}
        <a href={`tel:${messagingNumberE164}`}>{messagingNumberDisplay}</a>, additional SMS-specific disclosures in this
        Policy also apply. We send SMS only as described below — not for general marketing blasts.
      </div>

      <h2>1. Information we collect</h2>
      <p>Depending on how you choose to interact with us, we may collect:</p>
      <ul>
        <li>
          <strong>Identifiers and contact details</strong> — such as your name, organization, work email, phone
          number, and similar information you submit through forms or messages.
        </li>
        <li>
          <strong>Professional and operational details</strong> — information you share about territories, case support
          needs, scheduling, manufacturer partnerships, or other business topics relevant to distribution or intake
          coordination.
        </li>
        <li>
          <strong>Communications content</strong> — the content of emails, SMS, phone notes (where permitted), and other
          messages you send us when you initiate contact or respond to our replies.
        </li>
        <li>
          <strong>Technical data</strong> — basic device and log information commonly collected by websites (such as
          browser type, general geographic region derived from IP address, and pages visited) to operate and secure our
          site.
        </li>
      </ul>
      <p>We collect sensitive categories of information only where you choose to provide them and where lawful.</p>

      <h2>2. How we use information</h2>
      <p>We use information to operate our business and serve requests you initiate, including to:</p>
      <ul>
        <li>Respond to inquiries, consultation requests, and intake-related communications.</li>
        <li>Coordinate logistics, follow-ups, clarifications, and transactional updates tied to an active request.</li>
        <li>Operate, maintain, and improve our website and internal processes; detect fraud or abuse.</li>
        <li>Comply with law, regulation, court orders, or enforceable governmental requests.</li>
      </ul>
      <p>
        <strong>No marketing SMS.</strong> We do not send promotional or advertising SMS campaigns to numbers
        collected through our intake line. SMS are limited to transactional or relationship messages directly tied to a
        request you started with us (for example, confirmations, scheduling clarifications, or status updates).
      </p>

      <h2>3. SMS: how you opt in and what to expect</h2>
      <p>
        <strong>Consent / opt-in:</strong> You are not enrolled in an SMS “list” by browsing this site alone. You
        provide consent to receive SMS from TWIY when you <strong>affirmatively initiate contact</strong> with the
        published number on this website — for example by calling{" "}
        <a href={`tel:${messagingNumberE164}`}>{messagingNumberDisplay}</a> or sending a text (including keywords such as
        “START” or any introductory message) to{" "}
        <a href={`sms:${messagingNumberE164}`}>{messagingNumberDisplay}</a>. Consent is not a condition of purchasing
        goods or services where applicable law treats those differently; our messages concern your inquiry with us.
      </p>
      <p>
        <strong>Message types:</strong> SMS may include case-intake coordination, confirmations, clarifications,
        scheduling, or similar operational content related to the request you initiated.
      </p>
      <p>
        <strong>Frequency:</strong> Message frequency varies based on your interaction with us and what is needed to
        progress your request.
      </p>
      <p>
        <strong>Rates:</strong> Message and data rates may apply. Check your carrier plan.
      </p>
      <p>
        <strong>Opt-out:</strong> Reply <strong>STOP</strong> at any time to cancel SMS from this program/number. We
        will process your opt-out request as required by applicable rules (subject to limited exceptions for legally
        required or security messages, if any).
      </p>
      <p>
        <strong>Help:</strong> Reply <strong>HELP</strong> for assistance, or contact us using the information in the
        “Contact us” section below.
      </p>

      <h2>4. Disclosures to third parties</h2>
      <p>
        We do <strong>not</strong> sell personal information. We do <strong>not</strong> sell or share mobile numbers
        or SMS opt-in data for third-party marketing or promotional purposes.
      </p>
      <p>We may disclose information to:</p>
      <ul>
        <li>
          <strong>Service providers</strong> — such as hosting, communications (including telephony/SMS carriers and
          platforms like Twilio), email, analytics, and CRM tools that process data under contract for us.
        </li>
        <li>
          <strong>Legal and safety</strong> — when we believe disclosure is required by law or necessary to protect
          rights, safety, or security.
        </li>
        <li>
          <strong>Business transfers</strong> — in connection with a merger, acquisition, or asset sale, subject to
          appropriate safeguards.
        </li>
      </ul>

      <h2>5. Retention and security</h2>
      <p>
        We retain information only as long as reasonably necessary for the purposes described above, including to meet
        legal, accounting, or reporting requirements. We use reasonable administrative, technical, and organizational
        safeguards designed to protect information. No online or electronic transmission is completely secure.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete, or restrict certain processing of
        your personal information, or to opt out of certain disclosures. To exercise rights, contact us using the details
        below. We will respond in line with applicable law.
      </p>

      <h2>7. Children’s privacy</h2>
      <p>
        Our services are directed to business professionals and are not intended for children under 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do.
        Where required, we will provide additional notice. Continued use of our website or SMS program after updates
        means you acknowledge the revised Policy.
      </p>

      <h2>9. Contact us</h2>
      <p>
        Questions about this Privacy Policy, our data practices, or this SMS program may be directed to:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${phoneE164}`}>{phoneDisplay}</a>
        </li>
        <li>
          <strong>Intake / SMS line (published on this site):</strong>{" "}
          <a href={`tel:${messagingNumberE164}`}>{messagingNumberDisplay}</a>
        </li>
      </ul>
      <p>
        <strong>Business mailing address:</strong>
      </p>
      <MailingAddressBlock />

      <p>
        For <Link to="/terms-and-conditions">Terms &amp; Conditions (Terms of Service)</Link>, including additional
        SMS terms, please see our separate terms page.
      </p>
    </LegalDocumentLayout>
  );
}
